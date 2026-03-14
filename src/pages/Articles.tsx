import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const Articles = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-24 pb-16">
      <div className="section-container">
        <motion.div initial="hidden" animate="visible">
          <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold uppercase tracking-widest text-primary">
            Articles
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Learn the Essentials
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Clear, jargon-free guides written for people who are just getting started with crypto.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          className="mt-12 grid gap-8 md:grid-cols-3"
        >
          {articles.map((article, i) => (
            <motion.div key={article.id} variants={fadeUp} custom={i + 3}>
              <Link
                to={`/articles/${article.slug}`}
                className="card-hover group block overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="h-52 overflow-hidden">
                  <img src={articleImages[article.slug]} alt={article.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime} min read</span>
                    <span>{article.author}</span>
                  </div>
                  <h2 className="mt-3 font-display text-xl font-bold group-hover:text-primary transition-colors">{article.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{article.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Articles;
