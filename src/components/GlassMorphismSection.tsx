import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, BookOpen, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const FluidButton = ({
  children,
  className = "",
  href,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}) => {
  const btnRef = useRef<HTMLDivElement>(null);
  const [lightPos, setLightPos] = useState({ x: -100, y: -100 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    setLightPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const inner = (
    <motion.div
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setLightPos({ x: -100, y: -100 })}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`relative overflow-hidden rounded-2xl px-7 py-3.5 font-display text-sm font-semibold cursor-pointer transition-shadow duration-300 ${className}`}
      onClick={onClick}
    >
      {/* Moving light reflection */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(120px circle at ${lightPos.x}px ${lightPos.y}px, rgba(255,255,255,0.18), transparent 60%)`,
          opacity: lightPos.x > 0 ? 0.9 : 0,
        }}
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <Link to={href} className="group">
        {inner}
      </Link>
    );
  }
  return <div className="group">{inner}</div>;
};

const GlassMorphismSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sweepPos, setSweepPos] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  // Continuous sweeping light effect
  useEffect(() => {
    let raf: number;
    let start: number | null = null;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      setSweepPos((elapsed * 0.04) % 400 - 100);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const { error } = await supabase.from("subscribers").insert({ email });
    if (error) {
      if (error.code === "23505") toast.info("You're already subscribed!");
      else toast.error("Something went wrong");
    } else {
      toast.success("Welcome aboard, " + (name || "friend") + "!");
    }
    setSubmitted(true);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Neon ambient blobs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-[120px] animate-pulse" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-secondary/10 blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          {/* Glass Card */}
          <div className="relative rounded-3xl border border-border/50 bg-card/40 p-8 sm:p-10 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Moving neon edge glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl"
              style={{
                background: `linear-gradient(${sweepPos}deg, hsl(var(--primary) / 0.15), transparent 40%, hsl(var(--secondary) / 0.1))`,
              }}
            />

            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Join the Community</p>
              <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                Ready to Start Your{" "}
                <span className="gradient-text">Crypto Journey</span>?
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Get curated education, top podcasts, and clear guides — no financial advice, just knowledge.
              </p>

              {/* Fluid Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <FluidButton
                  href="/articles"
                  className="bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                >
                  <BookOpen size={16} /> Read Articles
                </FluidButton>
                <FluidButton
                  href="/podcasts"
                  className="bg-card border border-border text-foreground shadow-[0_0_15px_hsl(var(--secondary)/0.2)]"
                >
                  <Headphones size={16} /> Podcasts
                </FluidButton>
                <FluidButton
                  href="/about"
                  className="bg-secondary/20 border border-secondary/30 text-secondary-foreground shadow-[0_0_15px_hsl(var(--secondary)/0.15)]"
                >
                  <Sparkles size={16} /> About Us
                </FluidButton>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

              {/* Contact Form */}
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4"
                >
                  <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold">
                    <Sparkles size={18} /> You're in! Check your inbox.
                  </div>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  {/* Name field with floating label */}
                  <div className="group relative">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder=" "
                      className="peer w-full rounded-xl border border-border/60 bg-background/50 px-4 pt-5 pb-2 text-sm text-foreground backdrop-blur-sm outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_12px_hsl(var(--primary)/0.2)]"
                    />
                    <label className="pointer-events-none absolute left-4 top-2 text-[10px] font-medium text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-primary">
                      Your Name
                    </label>
                    {/* Sweep light */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-xl overflow-hidden"
                      style={{
                        background: `linear-gradient(90deg, transparent ${sweepPos - 30}%, hsl(var(--primary) / 0.06) ${sweepPos}%, transparent ${sweepPos + 30}%)`,
                      }}
                    />
                  </div>

                  {/* Email field with floating label */}
                  <div className="group relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder=" "
                      required
                      className="peer w-full rounded-xl border border-border/60 bg-background/50 px-4 pt-5 pb-2 text-sm text-foreground backdrop-blur-sm outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_12px_hsl(var(--primary)/0.2)]"
                    />
                    <label className="pointer-events-none absolute left-4 top-2 text-[10px] font-medium text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-primary">
                      Email Address
                    </label>
                    <div
                      className="pointer-events-none absolute inset-0 rounded-xl overflow-hidden"
                      style={{
                        background: `linear-gradient(90deg, transparent ${sweepPos - 30}%, hsl(var(--primary) / 0.06) ${sweepPos}%, transparent ${sweepPos + 30}%)`,
                      }}
                    />
                  </div>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative w-full overflow-hidden rounded-xl bg-primary py-3.5 font-display text-sm font-semibold text-primary-foreground shadow-[0_0_25px_hsl(var(--primary)/0.35)] transition-shadow duration-300 hover:shadow-[0_0_35px_hsl(var(--primary)/0.5)]"
                  >
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background: `linear-gradient(90deg, transparent ${sweepPos - 20}%, rgba(255,255,255,0.12) ${sweepPos}%, transparent ${sweepPos + 20}%)`,
                      }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Join CryptoNoviceAlike <ArrowRight size={16} />
                    </span>
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlassMorphismSection;
