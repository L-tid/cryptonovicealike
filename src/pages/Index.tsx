import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Headphones, Zap, ArrowRight, CheckCircle, Users, Clock, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";
import { podcasts } from "@/data/podcasts";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import articleBtcEth from "@/assets/article-btc-eth.jpg";
import articleWallet from "@/assets/article-wallet.jpg";
import articleDefi from "@/assets/article-defi.jpg";

const articleImages: Record<string, string> = {
  "bitcoin-vs-ethereum": articleBtcEth,
  "first-crypto-wallet": articleWallet,
  "defi-explained": articleDefi,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const Index = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const featuredPodcasts = podcasts.filter((p) => p.featured);

  const handleCTA = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
        <div className="animated-grid absolute inset-0 opacity-20" />
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

        <div className="section-container relative z-10 py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div variants={fadeUp} custom={0} className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
              <Sparkles size={14} className="text-primary" />
              Trusted by 5,000+ crypto-curious learners
            </motion.div>

            <motion.h1 variants={fadeUp} custom={1} className="font-display text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              From Zero to{" "}
              <span className="gradient-text">Crypto Knowledgeable.</span>
            </motion.h1>

            <motion.p variants={fadeUp} custom={2} className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Stop guessing. Start understanding. We curate the best podcasts and insights so you learn crypto with confidence—no financial advice, just education.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                to="/articles"
                className="btn-glow flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-display text-base font-semibold text-primary-foreground"
              >
                Start Learning <ArrowRight size={18} />
              </Link>
              <Link
                to="/podcasts"
                className="btn-glow flex items-center gap-2 rounded-xl border border-border bg-card/50 px-8 py-4 font-display text-base font-semibold text-foreground backdrop-blur-sm"
              >
                <Headphones size={18} /> Browse Podcasts
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative py-24">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold uppercase tracking-widest text-primary">
              Why CryptoNovice
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              What if learning crypto felt like having a knowledgeable friend explain things over coffee?
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 md:grid-cols-3"
          >
            {[
              {
                icon: BookOpen,
                title: "Understand the Lingo",
                desc: "DeFi, NFTs, L2s made simple. No jargon, just clear explanations that actually make sense.",
              },
              {
                icon: Headphones,
                title: "Learn on the Go",
                desc: "Curated podcasts from the brightest minds in crypto. Listen during your commute, gym, or coffee break.",
              },
              {
                icon: Zap,
                title: "No Noise, Just Signal",
                desc: "We filter the hype so you get clarity. No shilling, no FOMO—just trusted education.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                className="card-hover group rounded-2xl border border-border bg-card p-8"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                  <item.icon size={24} />
                </div>
                <h3 className="font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Podcasts */}
      <section className="bg-card/50 py-24">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 flex items-end justify-between"
          >
            <div>
              <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold uppercase tracking-widest text-primary">
                Featured Podcasts
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                This Week's Top Picks
              </motion.h2>
            </div>
            <motion.div variants={fadeUp} custom={2}>
              <Link to="/podcasts" className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline sm:flex">
                View All <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 md:grid-cols-3"
          >
            {featuredPodcasts.map((pod, i) => (
              <motion.div
                key={pod.id}
                variants={fadeUp}
                custom={i}
                className="card-hover group rounded-2xl border border-border bg-card overflow-hidden"
              >
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Headphones size={48} className="text-primary opacity-60" />
                </div>
                <div className="p-6">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {pod.episodeTag}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold">{pod.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{pod.source}</p>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{pod.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-24">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold uppercase tracking-widest text-primary">
              Featured Articles
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Start With the Essentials
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-8 md:grid-cols-3"
          >
            {articles.map((article, i) => (
              <motion.div key={article.id} variants={fadeUp} custom={i}>
                <Link
                  to={`/articles/${article.slug}`}
                  className="card-hover group block overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={articleImages[article.slug]}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime} min read</span>
                      <span>{article.author}</span>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-bold group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-card/50 py-24">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold uppercase tracking-widest text-primary">
              How It Works
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Three Steps to Crypto Confidence
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-8 md:grid-cols-3"
          >
            {[
              { step: "01", title: "Tell Us Your Level", desc: "Complete beginner? Heard of Bitcoin but confused by everything else? We meet you where you are." },
              { step: "02", title: "Get Personalized Picks", desc: "We curate the best podcasts and articles tailored to your knowledge level. No overwhelm." },
              { step: "03", title: "Learn at Your Pace", desc: "Listen during your commute. Read over coffee. Build real understanding without the pressure." },
            ].map((item, i) => (
              <motion.div key={item.step} variants={fadeUp} custom={i} className="relative text-center">
                <span className="font-display text-6xl font-extrabold text-primary/10">{item.step}</span>
                <h3 className="mt-2 font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-3xl"
          >
            <motion.div variants={fadeUp} custom={0} className="rounded-2xl border border-border bg-card p-10 text-center">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Users size={24} className="text-primary" />
              </div>
              <blockquote className="font-display text-xl font-medium leading-relaxed sm:text-2xl">
                "I finally understand what I'm investing in. The podcast recommendations saved me months of confusion."
              </blockquote>
              <p className="mt-6 text-sm text-muted-foreground">— Alex, CryptoNovice Member</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="bg-card/50 py-24">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl font-bold sm:text-4xl">
              Start Your Crypto Journey
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mt-4 text-muted-foreground">
              Join 5,000+ learners getting curated crypto education delivered to their inbox. No spam, no hype—just signal.
            </motion.p>

            <motion.div variants={fadeUp} custom={2} className="mt-8">
              {subscribed ? (
                <div className="flex items-center justify-center gap-2 text-primary">
                  <CheckCircle size={20} />
                  <span className="font-semibold">Welcome aboard! Check your inbox.</span>
                </div>
              ) : (
                <form onSubmit={handleCTA} className="mx-auto flex max-w-md gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <button
                    type="submit"
                    className="btn-glow flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-display font-semibold text-primary-foreground"
                  >
                    Join <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
