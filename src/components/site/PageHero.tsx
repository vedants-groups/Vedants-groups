import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function PageHero({
  eyebrow, title, subtitle, children, image,
}: { eyebrow?: string; title: ReactNode; subtitle?: ReactNode; children?: ReactNode; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white pt-40 pb-24 px-4 sm:px-6 lg:px-8">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-brand-navy/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-brand-navy/40" />
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 opacity-40 perspective-1000">
        <div className="absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-brand-sky/50 blur-3xl animate-float" />
        <div className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-brand-cyan/40 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute right-[10%] top-10 hidden lg:block preserve-3d opacity-70">
          <div className="h-28 w-28 rounded-full border border-white/25 animate-spin-slow" style={{ transform: "rotateX(65deg)" }} />
          <div className="absolute inset-3 rounded-full border border-brand-cyan/30 animate-spin-slow-reverse" style={{ transform: "rotateX(65deg)" }} />
        </div>
      </div>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
        backgroundSize: "24px 24px",
      }} />
      <div className="relative mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-4xl">{title}</h1>
          {subtitle && <p className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">{subtitle}</p>}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
