
-- The "Anyone can subscribe" policy is intentionally permissive for public newsletter signup.
-- Add a unique constraint check note: the email UNIQUE constraint already prevents duplicates.
-- No change needed - this is expected behavior for a public newsletter form.
-- Adding a comment policy to document this decision:
COMMENT ON POLICY "Anyone can subscribe" ON public.subscribers IS 'Intentionally permissive: public newsletter signup form. Email uniqueness constraint prevents abuse.';
