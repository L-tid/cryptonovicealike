import { motion } from "framer-motion";
import { Shield, Heart, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const About = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-24 pb-16">
      <div className="section-container">
        <motion.div initial="hidden" animate="visible" className="mx-auto max-w-3xl">
          <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold uppercase tracking-widest text-primary">
            About Us
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Crypto Education,{" "}
            <span className="gradient-text">Not Financial Advice</span>
          </motion.h1>

          <motion.div variants={fadeUp} custom={2} className="mt-10 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              CryptoNovice exists because crypto education shouldn't feel like a secret handshake. We believe everyone deserves to understand this technology—without the hype, without the get-rich-quick schemes, and definitely without the jargon.
            </p>
            <p>
              We're not financial advisors. We're your learning companions, pointing you to the best podcasts, articles, and resources so you can form your own educated opinions.
            </p>
            <p>
              What if learning crypto felt like having a knowledgeable friend explain things over coffee? That's us. We find the signal in the noise so you can learn with confidence.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid gap-6 sm:grid-cols-3"
          >
            {[
              { icon: BookOpen, title: "Education First", desc: "Every piece of content is designed to teach, not sell." },
              { icon: Shield, title: "No Financial Advice", desc: "We equip you with knowledge. Your decisions are yours." },
              { icon: Heart, title: "Built for Beginners", desc: "We remember what it's like to be lost in crypto jargon." },
            ].map((item, i) => (
              <motion.div key={item.title} variants={fadeUp} custom={i} className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="mx-auto mb-3 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <item.icon size={24} />
                </div>
                <h3 className="font-display font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default About;
