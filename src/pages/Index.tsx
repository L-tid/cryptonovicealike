import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Headphones, Zap, ArrowRight, Clock, Sparkles, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlassMorphismSection from "@/components/GlassMorphismSection";
import { articles } from "@/data/articles";
import { podcasts } from "@/data/podcasts";
import { fadeUp } from "@/lib/animations";
import heroBg from "@/assets/hero-bg.jpg";
import articleBtcEth from "@/assets/article-btc-eth.jpg";
import articleWallet from "@/assets/article-wallet.jpg";
import articleDefi from "@/assets/article-defi.jpg";

const articleImages: Record<string, string> = {
  "bitcoin-vs-ethereum": articleBtcEth,
  "first-crypto-wallet": articleWallet,
  "defi-explained": articleDefi,
};

const Index = () => {
  const featuredPodcasts = podcasts.filter((p) => p.featured);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden pt-16">
        <div className="animated-grid absolute inset-0 opacity-20" />
        <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="section-container relative z-10 py-20">
          <motion.div initial="hidden" animate="visible" className="mx-auto max-w-3xl text-center">
            <motion.div variants={fadeUp} custom={0} className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
              <Sparkles size={14} className="text-primary" />
              Trusted by 5,000+ learners
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              From Zero to <span className="gradient-text">Crypto Knowledgeable.</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
              We curate the best podcasts and insights so you learn crypto with confidence — no financial advice, just education.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link to="/articles" className="btn-glow flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-display text-sm text-primary-foreground">
                Start Learning <ArrowRight size={16} />
              </Link>
              <Link to="/podcasts" className="btn-glow flex items-center gap-2 rounded-xl border border-border bg-card/50 px-7 py-3.5 font-display text-sm text-foreground backdrop-blur-sm">
                <Headphones size={16} /> Browse Podcasts
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Us — compact */}
      <section className="py-20">
        <div className="section-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-10 text-center">
            <motion.p variants={fadeUp} custom={0} className="text-sm uppercase tracking-widest text-primary">Why CryptoNoviceAlike</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="mt-2 font-display text-2xl font-bold sm:text-3xl">
              Learn crypto like a knowledgeable friend is explaining it.
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid gap-5 md:grid-cols-3">
            {[
              { icon: BookOpen, title: "Understand the Lingo", desc: "DeFi, NFTs, L2s — simplified." },
              { icon: Headphones, title: "Learn on the Go", desc: "Curated podcasts for your commute." },
              { icon: Zap, title: "No Noise, Just Signal", desc: "No hype. Just trusted education." },
            ].map((item, i) => (
              <motion.div key={item.title} variants={fadeUp} custom={i} className="card-hover group rounded-2xl border border-border bg-card p-6">
                <div className="mb-3 inline-flex rounded-xl bg-primary/10 p-2.5 text-primary transition-colors group-hover:bg-primary/20">
                  <item.icon size={20} />
                </div>
                <h3 className="font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Podcasts — show 3, expandable */}
      <section className="bg-card/50 py-20">
        <div className="section-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-10 flex items-end justify-between">
            <div>
              <motion.p variants={fadeUp} custom={0} className="text-sm uppercase tracking-widest text-primary">Featured Podcasts</motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="mt-2 font-display text-2xl font-bold sm:text-3xl">Top Picks</motion.h2>
            </div>
            <motion.div variants={fadeUp} custom={2}>
              <Link to="/podcasts" className="hidden items-center gap-1 text-sm text-primary hover:underline sm:flex">View All <ArrowRight size={14} /></Link>
            </motion.div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid gap-5 md:grid-cols-3">
            {featuredPodcasts.slice(0, 3).map((pod, i) => (
              <motion.div key={pod.id} variants={fadeUp} custom={i} className="card-hover group rounded-2xl border border-border bg-card overflow-hidden">
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Headphones size={40} className="text-primary opacity-60" />
                </div>
                <div className="p-5">
                  <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs text-primary">{pod.episodeTag}</span>
                  <h3 className="mt-2 font-display text-base font-bold">{pod.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{pod.source}</p>
                  <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{pod.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Articles — condensed */}
      <section className="py-20">
        <div className="section-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-10">
            <motion.p variants={fadeUp} custom={0} className="text-sm uppercase tracking-widest text-primary">Featured Articles</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="mt-2 font-display text-2xl font-bold sm:text-3xl">Start With the Essentials</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid gap-6 md:grid-cols-3">
            {articles.map((article, i) => (
              <motion.div key={article.id} variants={fadeUp} custom={i}>
                <Link to={`/articles/${article.slug}`} className="card-hover group block overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="h-40 overflow-hidden">
                    <img src={articleImages[article.slug]} alt={article.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock size={11} /> {article.readTime} min</span>
                    </div>
                    <h3 className="mt-2 font-display text-base font-bold group-hover:text-primary transition-colors">{article.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{article.excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works — collapsible */}
      <section className="bg-card/50 py-20">
        <div className="section-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center">
            <motion.p variants={fadeUp} custom={0} className="text-sm uppercase tracking-widest text-primary">How It Works</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="mt-2 font-display text-2xl font-bold sm:text-3xl">Three Steps to Confidence</motion.h2>
            <motion.button
              variants={fadeUp}
              custom={2}
              onClick={() => setShowMore(!showMore)}
              className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              {showMore ? "Show less" : "Learn how"} <ChevronDown size={14} className={`transition-transform ${showMore ? "rotate-180" : ""}`} />
            </motion.button>
          </motion.div>
          <motion.div
            initial={false}
            animate={{ height: showMore ? "auto" : 0, opacity: showMore ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { step: "01", title: "Tell Us Your Level", desc: "Complete beginner? We meet you where you are." },
                { step: "02", title: "Get Curated Picks", desc: "Podcasts and articles tailored to your level." },
                { step: "03", title: "Learn at Your Pace", desc: "Listen or read anywhere. No pressure." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <span className="font-display text-5xl font-bold text-primary/10">{item.step}</span>
                  <h3 className="mt-1 font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Glass Morphism CTA Section */}
      <GlassMorphismSection />

      <Footer />
    </div>
  );
};

export default Index;
