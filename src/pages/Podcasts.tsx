import { motion } from "framer-motion";
import { Headphones } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { podcasts } from "@/data/podcasts";

import { fadeUp } from "@/lib/animations";

const Podcasts = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-24 pb-16">
      <div className="section-container">
        <motion.div initial="hidden" animate="visible">
          <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold uppercase tracking-widest text-primary">
            Podcasts
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Curated for Clarity
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="mt-4 max-w-2xl text-lg text-muted-foreground">
            The best crypto podcasts, hand-picked so you learn from the brightest minds without wading through the noise.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {podcasts.map((pod, i) => (
            <motion.div
              key={pod.id}
              variants={fadeUp}
              custom={i + 3}
              className="card-hover group rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                <Headphones size={40} className="text-primary opacity-60" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {pod.episodeTag}
                  </span>
                  {pod.featured && (
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                      Featured
                    </span>
                  )}
                </div>
                <h2 className="mt-3 font-display text-lg font-bold">{pod.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{pod.source}</p>
                <p className="mt-3 text-sm text-muted-foreground">{pod.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Podcasts;
