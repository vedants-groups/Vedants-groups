import { createFileRoute, Link } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/seo";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Cloud,
  Bot,
  Shield,
  Database,
  Cog,
  Cpu,
  Users,
  CheckCircle2,
  Layers,
  Handshake,
  Gauge,
  Repeat,
  Target,
  Award,
  Globe2,
  Clock,
  TrendingUp,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/home-sections";
import { CATEGORIES, SERVICES } from "@/data/services";
import servicesHero from "@/assets/pic-code.jpg";
import servicesFeature from "@/assets/pic-network-globe.jpg";

export const Route = createFileRoute("/services/")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Vedant Group" },
      {
        name: "description",
        content:
          "Enterprise consulting, cloud, AI, cyber security, industrial automation, Salesforce, SAP and global talent solutions.",
      },
      { property: "og:title", content: "Services — Vedant Group" },
      { property: "og:url", content: absoluteUrl("/services") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/services") }],
  }),
});

/* --------------------------- FEATURED PILLARS ----------------------------- */

const PILLARS = [
  {
    icon: Compass,
    title: "Digital Transformation",
    desc: "End-to-end modernization of operations, platforms and customer experience — from strategy to measurable outcomes.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Migration, cloud-native engineering and automated delivery pipelines on AWS, Azure, GCP and Oracle Cloud.",
  },
  {
    icon: Bot,
    title: "AI & Machine Learning",
    desc: "Production-grade ML, computer vision, NLP and enterprise GenAI — governed, evaluated and MLOps-ready.",
  },
  {
    icon: Shield,
    title: "Cyber Security",
    desc: "Zero-trust architecture, SOC operations, secure SDLC and enterprise resilience across regulated industries.",
  },
  {
    icon: Database,
    title: "Data, BI & Analytics",
    desc: "Modern data platforms, big-data pipelines and executive dashboards that turn data into decisions.",
  },
  {
    icon: Cog,
    title: "Industrial Automation",
    desc: "PLC, SCADA, DCS and MES for smart factories and Industry 4.0 — engineered for real production gains.",
  },
  {
    icon: Cpu,
    title: "Salesforce & SAP",
    desc: "Consulting, implementation and integration backed by 1700+ Salesforce certifications and deep SAP capability.",
  },
  {
    icon: Users,
    title: "Global Talent Solutions",
    desc: "Permanent hiring, contract staffing and managed teams mobilized across 25+ countries in days, not months.",
  },
];

/* --------------------------- ENGAGEMENT MODELS ---------------------------- */

const MODELS = [
  {
    icon: Target,
    title: "Fixed-Scope Projects",
    desc: "Clear deliverables, milestones and price for well-defined outcomes.",
  },
  {
    icon: Layers,
    title: "Dedicated Teams",
    desc: "Ring-fenced squads that scale with your roadmap and own delivery.",
  },
  {
    icon: Gauge,
    title: "Managed Services",
    desc: "24/7 follow-the-sun operations with defined SLAs and QBRs.",
  },
  {
    icon: Repeat,
    title: "Staff Augmentation",
    desc: "Certified specialists embedded into your teams within days.",
  },
  {
    icon: Handshake,
    title: "Outcome-Based",
    desc: "Commercials tied to the business KPIs that actually matter.",
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title={
          <>
            One partner for the{" "}
            <span className="text-gradient-brand bg-clip-text">
              entire enterprise technology lifecycle.
            </span>
          </>
        }
        subtitle="From boardroom strategy to shop-floor automation — engineered by global teams, delivered with rigor."
        image={servicesHero}
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-elegant hover:scale-[1.03] transition-transform"
        >
          Discuss your roadmap <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* Featured pillars */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-ice px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Core capabilities
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Eight pillars, <span className="text-gradient-brand">one accountable partner.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Deep expertise across every layer of the enterprise stack — combined into programs
              that deliver measurable business outcomes.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-card-soft hover:shadow-elegant hover:border-primary/30 transition-all hover:-translate-y-1"
              >
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
                <span className="absolute right-5 top-5 text-3xl font-bold text-border/70 transition-colors group-hover:text-primary/20 font-[var(--font-display)]">
                  0{i + 1}
                </span>
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-white shadow-card-soft">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof band */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 shadow-card-soft lg:grid-cols-4">
            {[
              { icon: Award, stat: "1,700+", label: "Salesforce certifications" },
              { icon: Globe2, stat: "25+", label: "Countries delivered across" },
              { icon: TrendingUp, stat: "3,000+", label: "Projects shipped" },
              { icon: Clock, stat: "24/7", label: "Follow-the-sun support" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-start gap-3 bg-card p-6 sm:p-8">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-ice text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="text-3xl font-bold text-gradient-brand md:text-4xl">{s.stat}</div>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature band */}
      <section className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] shadow-elegant">
            <img
              src={servicesFeature}
              alt="Vedant Group global delivery network"
              className="aspect-[21/9] h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-brand-navy/20" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-xl px-8 md:px-14 text-white">
                <h3 className="text-2xl md:text-4xl font-bold leading-tight">
                  One partner. Global scale. Measurable outcomes.
                </h3>
                <p className="mt-3 text-white/80 leading-relaxed">
                  From strategy to run, our teams deliver across 25+ countries with a single
                  standard of engineering excellence.
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-elegant hover:scale-[1.03] transition-transform"
                >
                  Book a consultation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full catalog */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-card-soft">
              Full catalog
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Every service, <span className="text-gradient-brand">enterprise-grade.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Click any service below for a full breakdown of capabilities, business impact and how
              we engage.
            </p>
          </div>

          <div className="mt-14 space-y-16">
            {CATEGORIES.map((cat, ci) => {
              const items = SERVICES.filter((s) => s.categorySlug === cat.slug);
              return (
                <div key={cat.slug}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-white shadow-card-soft shrink-0">
                      <cat.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                        Category 0{ci + 1}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold">{cat.name}</h3>
                    </div>
                    <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-border to-transparent ml-2" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {items.map((s, i) => (
                      <motion.div
                        key={s.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.03 }}
                      >
                        <Link
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          className="group flex items-start gap-3 rounded-xl border border-border/60 bg-white p-4 hover:border-primary/40 hover:shadow-card-soft transition-all"
                        >
                          <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary/70 group-hover:text-primary transition-colors" />
                          <div>
                            <p className="text-sm font-semibold leading-snug">{s.name}</p>
                            <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                              View details <ArrowRight className="h-3 w-3" />
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-ice px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              How we engage
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Flexible models that fit <span className="text-gradient-brand">how you work.</span>
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {MODELS.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl border border-border/60 bg-white p-6 shadow-card-soft hover:shadow-elegant transition-all"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-ice text-primary">
                  <m.icon className="h-5 w-5" />
                </div>
                <p className="mt-5 font-semibold">{m.title}</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </SiteLayout>
  );
}
