import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ArrowLeft, ArrowRight, Headphones, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";
import articleBtcEth from "@/assets/article-btc-eth.jpg";
import articleWallet from "@/assets/article-wallet.jpg";
import articleDefi from "@/assets/article-defi.jpg";

const articleImages: Record<string, string> = {
  "bitcoin-vs-ethereum": articleBtcEth,
  "first-crypto-wallet": articleWallet,
  "defi-explained": articleDefi,
};

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="section-container flex min-h-[60vh] items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold">Article Not Found</h1>
            <Link to="/articles" className="mt-4 inline-flex items-center gap-2 text-primary hover:underline">
              <ArrowLeft size={16} /> Back to Articles
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const related = articles.filter((a) => article.relatedSlugs.includes(a.slug));

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return <h2 key={i} className="mt-10 mb-4 font-display text-2xl font-bold">{block.replace("## ", "")}</h2>;
      }
      if (block.startsWith("### ")) {
        return <h3 key={i} className="mt-8 mb-3 font-display text-xl font-bold">{block.replace("### ", "")}</h3>;
      }
      // List items
      if (block.includes("\n- ")) {
        const lines = block.split("\n");
        const heading = !lines[0].startsWith("- ") ? lines[0] : null;
        const items = lines.filter((l) => l.startsWith("- "));
        return (
          <div key={i}>
            {heading && <p className="mb-2 text-foreground" dangerouslySetInnerHTML={{ __html: formatInline(heading) }} />}
            <ul className="mb-4 space-y-2 pl-4">
              {items.map((item, j) => (
                <li key={j} className="text-muted-foreground list-disc" dangerouslySetInnerHTML={{ __html: formatInline(item.replace("- ", "")) }} />
              ))}
            </ul>
          </div>
        );
      }
      // Checkmarks
      if (block.includes("\n✅") || block.includes("\n❌")) {
        const lines = block.split("\n").filter(Boolean);
        return (
          <div key={i} className="mb-4 space-y-1">
            {lines.map((line, j) => (
              <p key={j} className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
            ))}
          </div>
        );
      }
      // Numbered list
      if (/^\d+\./.test(block.trim())) {
        const items = block.split("\n").filter(Boolean);
        return (
          <ol key={i} className="mb-4 space-y-2 pl-4 list-decimal">
            {items.map((item, j) => (
              <li key={j} className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: formatInline(item.replace(/^\d+\.\s*/, "")) }} />
            ))}
          </ol>
        );
      }
      return <p key={i} className="mb-4 text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: formatInline(block) }} />;
    });
  };

  const formatInline = (text: string) => {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <div className="relative h-72 sm:h-96">
          <img src={articleImages[article.slug]} alt={article.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="section-container -mt-24 relative z-10 pb-16">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <Link to="/articles" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft size={14} /> All Articles
            </Link>

            <h1 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>

            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime} min read</span>
              <span>{article.author}</span>
              <button onClick={handleShare} className="ml-auto flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                <Share2 size={14} /> Share
              </button>
            </div>

            <div className="mt-10">
              {renderContent(article.content)}
            </div>

            {/* Podcast Callout */}
            <div className="mt-12 rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 p-3">
                  <Headphones size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">Key Podcast Episode</p>
                  <h3 className="mt-1 font-display text-lg font-bold">{article.podcastCallout.title}</h3>
                  <p className="text-sm text-muted-foreground">{article.podcastCallout.source}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{article.podcastCallout.description}</p>
                </div>
              </div>
            </div>

            {/* Related */}
            {related.length > 0 && (
              <div className="mt-16">
                <h3 className="font-display text-xl font-bold">Continue Reading</h3>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {related.map((r) => (
                    <Link
                      key={r.id}
                      to={`/articles/${r.slug}`}
                      className="card-hover group rounded-xl border border-border bg-card p-5"
                    >
                      <h4 className="font-display font-bold group-hover:text-primary transition-colors">{r.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{r.excerpt}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm text-primary">
                        Read <ArrowRight size={14} />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticlePage;
