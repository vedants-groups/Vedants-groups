import { createFileRoute, Link } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/seo";
import { motion } from "framer-motion";
import { Target, Eye, Sparkles, ShieldCheck, Globe2, Award } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { About as AboutSection, WhyChoose, Process, Testimonials, CTA } from "@/components/site/home-sections";
import aboutHero from "@/assets/pic-leadership-team.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Vedant Group" },
      { name: "description", content: "Vedant Group is a global enterprise consulting group with 15+ years of experience across 25+ countries." },
      { property: "og:title", content: "About — Vedant Group" },
      { property: "og:url", content: absoluteUrl("/about") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/about") }],
  }),
});

/* ------------------------------- STAT BAND -------------------------------- */

const STATS = [
  { value: "15+", label: "Years of Experience" },
  { value: "1,700+", label: "Salesforce Certifications" },
  { value: "3,000+", label: "Projects Delivered" },
  { value: "25+", label: "Countries Served" },
];

function StatBand() {
  return (
    <section className="relative z-20 -mt-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-border/60 bg-card shadow-elegant"
      >
        <div className="grid grid-cols-2 divide-x divide-y divide-border/60 md:grid-cols-4 md:divide-y-0">
          {STATS.map((s) => (
            <div key={s.label} className="p-6 text-center sm:p-8 md:p-10">
              <div className="text-3xl font-bold text-gradient-brand sm:text-4xl md:text-5xl font-[var(--font-display)]">
                {s.value}
              </div>
              <p className="mt-2 text-xs font-medium text-muted-foreground sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------- LEADERSHIP ------------------------------- */

function Leadership() {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-navy text-white shadow-elegant">
          <img
            src={aboutHero}
            alt="Vedant Group leadership"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/40" />
          <div className="relative grid gap-8 p-8 md:grid-cols-2 md:items-center md:p-14">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-cyan">
                Leadership
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
                Senior partners who have{" "}
                <span className="text-gradient-brand bg-clip-text">led global transformation.</span>
              </h2>
              <p className="mt-4 max-w-lg leading-relaxed text-white/75">
                Our leadership brings decades of experience delivering enterprise programs for
                Fortune-scale clients — combining boardroom strategy with hands-on engineering
                across cloud, AI, automation and talent.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Globe2, stat: "25+", label: "Countries operated" },
                { icon: Award, stat: "1,700+", label: "Certified specialists" },
                { icon: ShieldCheck, stat: "ISO", label: "27001-aligned delivery" },
                { icon: Sparkles, stat: "AI-first", label: "By design" },
              ].map((c) => (
                <div key={c.label} className="rounded-2xl glass-dark p-5">
                  <c.icon className="h-6 w-6 text-brand-cyan" />
                  <p className="mt-3 text-xl font-bold">{c.stat}</p>
                  <p className="text-xs text-white/65">{c.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- VALUES --------------------------------- */

const VALUES = [
  { icon: Target, title: "Our Mission", body: "Engineer measurable outcomes for enterprises through technology, talent and trust." },
  { icon: Eye, title: "Our Vision", body: "Become the most reliable digital transformation partner for global businesses." },
  { icon: Sparkles, title: "Innovation", body: "AI-first, automation-driven and cloud-native by design in everything we build." },
  { icon: ShieldCheck, title: "Integrity", body: "Long-term partnerships built on transparency, rigor and accountability." },
];

function Values() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-ice px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            What drives us
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            The principles behind <span className="text-gradient-brand">every engagement.</span>
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-brand opacity-0 transition-opacity group-hover:opacity-20 blur-2xl" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-white shadow-card-soft">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        image={aboutHero}
        eyebrow="About Vedant Group"
        title={<>Engineering trust for the <span className="text-gradient-brand bg-clip-text">world's most ambitious enterprises.</span></>}
        subtitle="A global consulting and technology group serving Fortune-scale clients across 25+ countries with 15+ years of proven delivery."
      >
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-elegant">Talk to us</Link>
      </PageHero>
      <StatBand />
      <AboutSection />
      <Leadership />
      <Values />
      <WhyChoose />
      <Process />
      <Testimonials />
      <CTA />
    </SiteLayout>
  );
}
