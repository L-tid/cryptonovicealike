import { Link } from "react-router-dom";
import { Menu, X, LogOut, Shield } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, profile, isAdmin, signInWithGoogle, signOut } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="section-container flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-xl font-bold">
          <span className="gradient-text">Crypto</span>
          <span className="text-foreground">NoviceAlike</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link to="/articles" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Articles
          </Link>
          <Link to="/podcasts" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Podcasts
          </Link>
          <Link to="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            About
          </Link>
          {isAdmin && (
            <Link to="/admin" className="flex items-center gap-1 text-sm text-primary transition-colors hover:text-primary/80">
              <Shield size={14} /> Admin
            </Link>
          )}
          {user ? (
            <div className="flex items-center gap-3">
              {profile?.avatar_url && (
                <img src={profile.avatar_url} alt="" className="h-8 w-8 rounded-full border border-border" />
              )}
              <span className="text-sm text-muted-foreground">{profile?.display_name || profile?.email}</span>
              <Button size="sm" variant="ghost" onClick={signOut} className="gap-1">
                <LogOut size={14} /> Sign Out
              </Button>
            </div>
          ) : (
            <Button size="sm" onClick={signInWithGoogle} className="btn-glow">
              Sign In
            </Button>
          )}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="flex flex-col gap-4 border-t border-border bg-background p-6 md:hidden">
          <Link to="/articles" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground">Articles</Link>
          <Link to="/podcasts" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground">Podcasts</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground">About</Link>
          {isAdmin && (
            <Link to="/admin" onClick={() => setMobileOpen(false)} className="flex items-center gap-1 text-sm text-primary">
              <Shield size={14} /> Admin
            </Link>
          )}
          {user ? (
            <div className="flex items-center gap-3">
              {profile?.avatar_url && (
                <img src={profile.avatar_url} alt="" className="h-8 w-8 rounded-full border border-border" />
              )}
              <Button size="sm" variant="ghost" onClick={() => { signOut(); setMobileOpen(false); }}>
                Sign Out
              </Button>
            </div>
          ) : (
            <Button size="sm" onClick={() => { signInWithGoogle(); setMobileOpen(false); }}>
              Sign In with Google
            </Button>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
