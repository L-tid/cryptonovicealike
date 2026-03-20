import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

Deno.serve(async (req) => {
  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(supabaseUrl, serviceRoleKey);

  // Create admin user
  const { data: authData, error: authError } = await supabase.auth.admin.createUser({
    email: "cryptonovicealike@gmail.com",
    password: "Nosipho@58",
    email_confirm: true,
  });

  if (authError && !authError.message.includes("already been registered")) {
    return new Response(JSON.stringify({ error: authError.message }), { status: 400 });
  }

  // Get user id
  let userId = authData?.user?.id;
  if (!userId) {
    const { data: users } = await supabase.auth.admin.listUsers();
    const found = users?.users?.find((u: any) => u.email === "cryptonovicealike@gmail.com");
    userId = found?.id;
  }

  if (!userId) {
    return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
  }

  // Assign admin role
  const { error: roleError } = await supabase
    .from("user_roles")
    .upsert({ user_id: userId, role: "admin" }, { onConflict: "user_id,role" });

  return new Response(JSON.stringify({ success: true, userId, roleError: roleError?.message }), {
    headers: { "Content-Type": "application/json" },
  });
});
