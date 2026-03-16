import { motion } from "framer-motion";
import { Shield, Heart, BookOpen, Target, Users, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fadeUp } from "@/lib/animations";

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
            Empowering <span className="gradient-text">Crypto Novices</span> Worldwide
          </motion.h1>

          <motion.div variants={fadeUp} custom={2} className="mt-10 space-y-6 text-base text-muted-foreground leading-relaxed">
            <p>
              CryptoNoviceAlike is a crypto information website that specialises in crypto-based education. We exist to educate, inform, and equip users — especially crypto novices — with the best tools and platforms to ensure they make informed decisions in the crypto space.
            </p>
            <p>
              Our aim is to enhance knowledge for people with little experience in crypto by simplifying complex information. We lead users to the best podcasts and alternative sources so they can learn at their own convenience.
            </p>
            <p>
              The primary objective of this website is to drive and create adoption of cryptocurrency. We do this by helping everyone build their knowledge and confidence in the crypto space so they can make their own decisions and conduct their own research.
            </p>
          </motion.div>

          {/* Mission Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid gap-6 sm:grid-cols-3"
          >
            {[
              { icon: BookOpen, title: "Education First", desc: "Every piece of content is designed to teach, not sell. We simplify crypto so anyone can understand." },
              { icon: Target, title: "Informed Decisions", desc: "We equip you with the best tools and platforms so you can navigate crypto with confidence." },
              { icon: Heart, title: "Built for Beginners", desc: "We remember what it's like to feel lost. Our content meets you where you are." },
            ].map((item, i) => (
              <motion.div key={item.title} variants={fadeUp} custom={i} className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="mx-auto mb-3 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <item.icon size={24} />
                </div>
                <h3 className="font-display text-base font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* What We Do */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16"
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-2xl font-bold">What We Do</motion.h2>
            <motion.div variants={fadeUp} custom={1} className="mt-6 space-y-4">
              {[
                { icon: Lightbulb, text: "Curate the best crypto podcasts and educational resources" },
                { icon: Users, text: "Help beginners build knowledge and confidence step by step" },
                { icon: Target, text: "Drive cryptocurrency adoption through accessible education" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4">
                  <div className="mt-0.5 rounded-lg bg-primary/10 p-2 text-primary">
                    <item.icon size={16} />
                  </div>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16"
          >
            <motion.div variants={fadeUp} custom={0} className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
              <div className="flex items-start gap-3">
                <Shield size={20} className="mt-0.5 text-destructive shrink-0" />
                <div>
                  <h3 className="font-display text-base font-bold text-destructive">Disclaimer</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We are not financial advisors. CryptoNoviceAlike exists to equip crypto novices and enthusiasts with the best tools and platforms in order to make informed decisions in the crypto space. Always do your own research before making any financial decisions.
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
