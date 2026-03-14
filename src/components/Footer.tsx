import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="section-container py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-display text-xl font-bold">
              <span className="gradient-text">Crypto</span>
              <span className="text-foreground">Novice</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              We find the signal in the noise so you can learn crypto with confidence.
            </p>
          </div>

          {/* Learn */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Learn</h4>
            <div className="flex flex-col gap-2">
              <Link to="/articles" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Articles</Link>
              <Link to="/podcasts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Podcasts</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Legal</h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">We are NOT financial advisors</span>
              <span className="text-sm text-muted-foreground">Education only</span>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Stay Updated</h4>
            {subscribed ? (
              <p className="text-sm text-primary">✓ You're on the list!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
                <button
                  type="submit"
                  className="btn-glow rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} CryptoNovice. Education, not financial advice.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
