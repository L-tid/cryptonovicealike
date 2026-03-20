import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Heart, BookOpen, Target, Users, Lightbulb, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fadeUp } from "@/lib/animations";

const ExpandSection = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-5 text-left"
      >
        <span className="font-display text-base font-bold">{title}</span>
        <ChevronDown
          size={18}
          className={`text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{children}</div>
      </motion.div>
    </div>
  );
};

const About = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-24 pb-16">
      <div className="section-container">
        <motion.div initial="hidden" animate="visible" className="mx-auto max-w-3xl">
          <motion.p variants={fadeUp} custom={0} className="text-sm uppercase tracking-widest text-primary">
            About Us
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Empowering <span className="gradient-text">Crypto Novices</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="mt-4 text-base text-muted-foreground leading-relaxed">
            CryptoNoviceAlike simplifies crypto education so beginners can learn, understand, and make informed decisions — at their own pace.
          </motion.p>

          {/* Mission Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-4 sm:grid-cols-3"
          >
            {[
              { icon: BookOpen, title: "Education First", desc: "Clear explanations, no jargon." },
              { icon: Target, title: "Informed Decisions", desc: "Best tools and platforms, curated." },
              { icon: Heart, title: "Built for Beginners", desc: "We meet you where you are." },
            ].map((item, i) => (
              <motion.div key={item.title} variants={fadeUp} custom={i} className="rounded-2xl border border-border bg-card p-5 text-center">
                <div className="mx-auto mb-2 inline-flex rounded-xl bg-primary/10 p-2.5 text-primary">
                  <item.icon size={20} />
                </div>
                <h3 className="font-display text-sm font-bold">{item.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Expandable Details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 space-y-3"
          >
            <motion.div variants={fadeUp} custom={0}>
              <ExpandSection title="Our Mission">
                <p>CryptoNoviceAlike exists to educate, inform, and equip users — especially crypto novices — with the best tools and platforms to make informed decisions in the crypto space.</p>
                <p className="mt-3">We simplify complex information by leading users to curated podcasts and educational resources so they can learn at their own convenience.</p>
              </ExpandSection>
            </motion.div>

            <motion.div variants={fadeUp} custom={1}>
              <ExpandSection title="What We Do">
                <div className="space-y-3">
                  {[
                    { icon: Lightbulb, text: "Curate the best crypto podcasts and educational resources" },
                    { icon: Users, text: "Help beginners build knowledge and confidence step by step" },
                    { icon: Target, text: "Drive cryptocurrency adoption through accessible education" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-2">
                      <item.icon size={14} className="mt-0.5 text-primary shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </ExpandSection>
            </motion.div>

            <motion.div variants={fadeUp} custom={2}>
              <ExpandSection title="Our Objective">
                <p>The primary objective of this website is to drive and create adoption of cryptocurrency. We do this by helping everyone build their knowledge and confidence so they can make their own decisions and conduct their own research.</p>
              </ExpandSection>
            </motion.div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12"
          >
            <motion.div variants={fadeUp} custom={0} className="rounded-2xl border border-destructive/30 bg-destructive/5 p-5">
              <div className="flex items-start gap-3">
                <Shield size={18} className="mt-0.5 text-destructive shrink-0" />
                <div>
                  <h3 className="font-display text-sm font-bold text-destructive">Disclaimer</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    We are not financial advisors. CryptoNoviceAlike exists to equip crypto novices and enthusiasts with the best tools and platforms to make informed decisions. Always do your own research.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default About;
