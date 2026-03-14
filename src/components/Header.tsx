import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="section-container flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-xl font-bold">
          <span className="gradient-text">Crypto</span>
          <span className="text-foreground">Novice</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/articles" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Articles
          </Link>
          <Link to="/podcasts" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Podcasts
          </Link>
          <Link to="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            About
          </Link>
          <Link
            to="/#cta"
            className="btn-glow rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            Start Learning →
          </Link>
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
          <Link to="/articles" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground">Articles</Link>
          <Link to="/podcasts" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground">Podcasts</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground">About</Link>
          <Link to="/#cta" onClick={() => setMobileOpen(false)} className="btn-glow rounded-lg bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground">
            Start Learning →
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
