import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Trash2, Plus, Edit2, BarChart3, FileText, Headphones, Users } from "lucide-react";
import { toast } from "sonner";

type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  author: string | null;
  read_time: number | null;
  published: boolean | null;
  podcast_title: string | null;
  podcast_source: string | null;
  podcast_description: string | null;
  related_slugs: string[] | null;
  created_at: string;
};

type Podcast = {
  id: string;
  title: string;
  source: string;
  description: string | null;
  featured: boolean | null;
  episode_tag: string | null;
};

const Admin = () => {
  const { user, isAdmin, loading, signInWithGoogle } = useAuth();
  const [articles, setArticles] = useState<Article[]>([]);
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [subCount, setSubCount] = useState(0);
  const [editingArticle, setEditingArticle] = useState<Partial<Article> | null>(null);
  const [editingPodcast, setEditingPodcast] = useState<Partial<Podcast> | null>(null);

  const fetchData = async () => {
    const [a, p, s] = await Promise.all([
      supabase.from("articles").select("*").order("created_at", { ascending: false }),
      supabase.from("podcasts").select("*").order("created_at", { ascending: false }),
      supabase.from("subscribers").select("id", { count: "exact", head: true }),
    ]);
    if (a.data) setArticles(a.data);
    if (p.data) setPodcasts(p.data);
    setSubCount(s.count ?? 0);
  };

  useEffect(() => {
    if (isAdmin) fetchData();
  }, [isAdmin]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex min-h-[80vh] items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="font-display text-3xl font-bold">Admin Access</h1>
            <p className="text-muted-foreground">Sign in with Google to continue</p>
            <Button onClick={signInWithGoogle} size="lg">Sign in with Google</Button>
          </div>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex min-h-[80vh] items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="font-display text-3xl font-bold">Access Denied</h1>
            <p className="text-muted-foreground">You don't have admin privileges.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Article CRUD
  const saveArticle = async () => {
    if (!editingArticle?.title || !editingArticle?.slug) {
      toast.error("Title and slug are required");
      return;
    }
    const payload = {
      title: editingArticle.title,
      slug: editingArticle.slug,
      excerpt: editingArticle.excerpt || null,
      content: editingArticle.content || null,
      author: editingArticle.author || "CryptoNovice Team",
      read_time: editingArticle.read_time || 5,
      published: editingArticle.published ?? false,
      podcast_title: editingArticle.podcast_title || null,
      podcast_source: editingArticle.podcast_source || null,
      podcast_description: editingArticle.podcast_description || null,
      related_slugs: editingArticle.related_slugs || [],
    };

    if (editingArticle.id) {
      const { error } = await supabase.from("articles").update(payload).eq("id", editingArticle.id);
      if (error) { toast.error(error.message); return; }
      toast.success("Article updated");
    } else {
      const { error } = await supabase.from("articles").insert(payload);
      if (error) { toast.error(error.message); return; }
      toast.success("Article created");
    }
    setEditingArticle(null);
    fetchData();
  };

  const deleteArticle = async (id: string) => {
    const { error } = await supabase.from("articles").delete().eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success("Article deleted"); fetchData(); }
  };

  // Podcast CRUD
  const savePodcast = async () => {
    if (!editingPodcast?.title || !editingPodcast?.source) {
      toast.error("Title and source are required");
      return;
    }
    const payload = {
      title: editingPodcast.title,
      source: editingPodcast.source,
      description: editingPodcast.description || null,
      featured: editingPodcast.featured ?? false,
      episode_tag: editingPodcast.episode_tag || null,
    };

    if (editingPodcast.id) {
      const { error } = await supabase.from("podcasts").update(payload).eq("id", editingPodcast.id);
      if (error) { toast.error(error.message); return; }
      toast.success("Podcast updated");
    } else {
      const { error } = await supabase.from("podcasts").insert(payload);
      if (error) { toast.error(error.message); return; }
      toast.success("Podcast created");
    }
    setEditingPodcast(null);
    fetchData();
  };

  const deletePodcast = async (id: string) => {
    const { error } = await supabase.from("podcasts").delete().eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success("Podcast deleted"); fetchData(); }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <h1 className="font-display text-3xl font-bold">Admin Dashboard</h1>

          {/* Stats */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: FileText, label: "Articles", value: articles.length },
              { icon: Headphones, label: "Podcasts", value: podcasts.length },
              { icon: Users, label: "Subscribers", value: subCount },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <s.icon size={20} className="text-primary" />
                  <span className="text-sm text-muted-foreground">{s.label}</span>
                </div>
                <p className="mt-2 font-display text-3xl font-bold">{s.value}</p>
              </div>
            ))}
          </div>

          <Tabs defaultValue="articles" className="mt-8">
            <TabsList className="bg-card border border-border">
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
            </TabsList>

            {/* Articles Tab */}
            <TabsContent value="articles" className="space-y-6">
              {editingArticle ? (
                <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                  <h2 className="font-display text-xl font-bold">
                    {editingArticle.id ? "Edit Article" : "New Article"}
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input placeholder="Title" value={editingArticle.title || ""} onChange={(e) => setEditingArticle({ ...editingArticle, title: e.target.value })} />
                    <Input placeholder="Slug (url-friendly)" value={editingArticle.slug || ""} onChange={(e) => setEditingArticle({ ...editingArticle, slug: e.target.value })} />
                  </div>
                  <Input placeholder="Excerpt" value={editingArticle.excerpt || ""} onChange={(e) => setEditingArticle({ ...editingArticle, excerpt: e.target.value })} />
                  <Textarea placeholder="Content (Markdown)" rows={12} value={editingArticle.content || ""} onChange={(e) => setEditingArticle({ ...editingArticle, content: e.target.value })} />
                  <div className="grid gap-4 sm:grid-cols-3">
                    <Input placeholder="Author" value={editingArticle.author || ""} onChange={(e) => setEditingArticle({ ...editingArticle, author: e.target.value })} />
                    <Input type="number" placeholder="Read time (min)" value={editingArticle.read_time || ""} onChange={(e) => setEditingArticle({ ...editingArticle, read_time: parseInt(e.target.value) || 5 })} />
                    <div className="flex items-center gap-2">
                      <Switch checked={editingArticle.published ?? false} onCheckedChange={(v) => setEditingArticle({ ...editingArticle, published: v })} />
                      <span className="text-sm text-muted-foreground">Published</span>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <Input placeholder="Podcast title" value={editingArticle.podcast_title || ""} onChange={(e) => setEditingArticle({ ...editingArticle, podcast_title: e.target.value })} />
                    <Input placeholder="Podcast source" value={editingArticle.podcast_source || ""} onChange={(e) => setEditingArticle({ ...editingArticle, podcast_source: e.target.value })} />
                    <Input placeholder="Podcast description" value={editingArticle.podcast_description || ""} onChange={(e) => setEditingArticle({ ...editingArticle, podcast_description: e.target.value })} />
                  </div>
                  <div className="flex gap-3">
                    <Button onClick={saveArticle}>Save</Button>
                    <Button variant="outline" onClick={() => setEditingArticle(null)}>Cancel</Button>
                  </div>
                </div>
              ) : (
                <Button onClick={() => setEditingArticle({ published: false })} className="gap-2">
                  <Plus size={16} /> New Article
                </Button>
              )}

              <div className="space-y-3">
                {articles.map((a) => (
                  <div key={a.id} className="flex items-center justify-between rounded-xl border border-border bg-card p-4">
                    <div>
                      <h3 className="font-display font-bold">{a.title}</h3>
                      <p className="text-xs text-muted-foreground">/{a.slug} · {a.published ? "Published" : "Draft"}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost" onClick={() => setEditingArticle(a)}>
                        <Edit2 size={16} />
                      </Button>
                      <Button size="icon" variant="ghost" onClick={() => deleteArticle(a.id)}>
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                ))}
                {articles.length === 0 && (
                  <p className="text-center text-muted-foreground py-8">No articles yet. Create your first one!</p>
                )}
              </div>
            </TabsContent>

            {/* Podcasts Tab */}
            <TabsContent value="podcasts" className="space-y-6">
              {editingPodcast ? (
                <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                  <h2 className="font-display text-xl font-bold">
                    {editingPodcast.id ? "Edit Podcast" : "New Podcast"}
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input placeholder="Title" value={editingPodcast.title || ""} onChange={(e) => setEditingPodcast({ ...editingPodcast, title: e.target.value })} />
                    <Input placeholder="Source (e.g. Bankless)" value={editingPodcast.source || ""} onChange={(e) => setEditingPodcast({ ...editingPodcast, source: e.target.value })} />
                  </div>
                  <Textarea placeholder="Description" value={editingPodcast.description || ""} onChange={(e) => setEditingPodcast({ ...editingPodcast, description: e.target.value })} />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input placeholder="Episode tag (e.g. Latest Episode)" value={editingPodcast.episode_tag || ""} onChange={(e) => setEditingPodcast({ ...editingPodcast, episode_tag: e.target.value })} />
                    <div className="flex items-center gap-2">
                      <Switch checked={editingPodcast.featured ?? false} onCheckedChange={(v) => setEditingPodcast({ ...editingPodcast, featured: v })} />
                      <span className="text-sm text-muted-foreground">Featured</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button onClick={savePodcast}>Save</Button>
                    <Button variant="outline" onClick={() => setEditingPodcast(null)}>Cancel</Button>
                  </div>
                </div>
              ) : (
                <Button onClick={() => setEditingPodcast({ featured: false })} className="gap-2">
                  <Plus size={16} /> New Podcast
                </Button>
              )}

              <div className="space-y-3">
                {podcasts.map((p) => (
                  <div key={p.id} className="flex items-center justify-between rounded-xl border border-border bg-card p-4">
                    <div>
                      <h3 className="font-display font-bold">{p.title}</h3>
                      <p className="text-xs text-muted-foreground">{p.source} · {p.featured ? "Featured" : "Not featured"}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost" onClick={() => setEditingPodcast(p)}>
                        <Edit2 size={16} />
                      </Button>
                      <Button size="icon" variant="ghost" onClick={() => deletePodcast(p.id)}>
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                ))}
                {podcasts.length === 0 && (
                  <p className="text-center text-muted-foreground py-8">No podcasts yet. Add your first one!</p>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
