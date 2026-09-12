import { createFileRoute, Link } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/seo";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  MessageSquare,
  Globe2,
  ShieldCheck,
  Layers,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Tilt3D } from "@/components/site/Tilt3D";
import { CTA } from "@/components/site/home-sections";
import { getIndustryBySlug, INDUSTRIES } from "@/data/industries";
import { getServiceBySlug } from "@/data/services";

export const Route = createFileRoute("/industries/$slug")({
  component: IndustryDetailPage,
  head: ({ params }) => {
    const industry = getIndustryBySlug(params.slug);
    const title = industry ? `${industry.name} — Vedant Group` : "Industry — Vedant Group";
    const description = industry?.tagline ?? "Enterprise industry expertise from Vedant Group.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: absoluteUrl(`/industries/${params.slug}`) },
      ],
      links: [{ rel: "canonical", href: absoluteUrl(`/industries/${params.slug}`) }],
      scripts: industry
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                name: `${industry.name} solutions`,
                serviceType: industry.name,
                description: industry.tagline,
                areaServed: "Worldwide",
                provider: {
                  "@type": "Organization",
                  name: "Vedant Group",
                  url: absoluteUrl("/"),
                },
              }),
            },
          ]
        : [],
    };
  },
});

const GLANCE = [
  { icon: Globe2, label: "Delivery", value: "Global · 25+ countries" },
  { icon: ShieldCheck, label: "Teams", value: "Domain-certified specialists" },
  { icon: Layers, label: "Engagement", value: "Flexible delivery models" },
];

function IndustryDetailPage() {
  const { slug } = Route.useParams();
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return (
      <SiteLayout>
        <section className="relative overflow-hidden bg-brand-navy text-white pt-40 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-brand-sky/50 blur-3xl animate-float" />
            <div
              className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-brand-cyan/40 blur-3xl animate-float"
              style={{ animationDelay: "2s" }}
            />
          </div>
          <div className="relative mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold">Industry not found</h1>
            <p className="mt-4 text-white/70">
              The industry you're looking for doesn't exist or has moved.
            </p>
            <Link
              to="/industries"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-navy shadow-elegant"
            >
              <ArrowLeft className="h-4 w-4" /> Back to all industries
            </Link>
          </div>
        </section>
      </SiteLayout>
    );
  }

  const idx = INDUSTRIES.findIndex((i) => i.slug === industry.slug);
  const prev = idx > 0 ? INDUSTRIES[idx - 1] : INDUSTRIES[INDUSTRIES.length - 1];
  const next = idx < INDUSTRIES.length - 1 ? INDUSTRIES[idx + 1] : INDUSTRIES[0];
  const Icon = industry.icon;

  return (
    <SiteLayout>
      {/* Hero — gradient/pattern only, no photography */}
      <section className="relative overflow-hidden bg-brand-navy text-white pt-36 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-40 perspective-1000">
          <div className="absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-brand-sky/50 blur-3xl animate-float" />
          <div
            className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-brand-cyan/40 blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div className="absolute right-[8%] top-16 hidden lg:block preserve-3d opacity-70">
            <div
              className="h-32 w-32 rounded-full border border-white/25 animate-spin-slow"
              style={{ transform: "rotateX(65deg)" }}
            />
            <div
              className="absolute inset-4 rounded-full border border-brand-cyan/30 animate-spin-slow-reverse"
              style={{ transform: "rotateX(65deg)" }}
            />
          </div>
        </div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-sm text-white/60"
          >
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/industries" className="hover:text-white transition-colors">
              Industries
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/80">{industry.name}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-6 max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              <Icon className="h-3.5 w-3.5" /> Industry
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              {industry.name}
            </h1>
            <p className="mt-5 text-xl text-brand-cyan/90 font-medium leading-snug max-w-3xl">
              {industry.tagline}
            </p>
            <p className="mt-4 max-w-2xl text-base text-white/70 leading-relaxed">
              {industry.challenge}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand animate-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
              >
                Talk to a specialist{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/industries"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                <ArrowLeft className="h-4 w-4" /> All industries
              </Link>
            </div>

            <div className="mt-12 inline-flex items-center gap-5 rounded-2xl glass-dark px-6 py-5">
              <div className="text-3xl font-bold text-white">{industry.stat.value}</div>
              <div className="h-10 w-px bg-white/20" />
              <div className="max-w-xs text-sm text-white/70 leading-snug">
                {industry.stat.label}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-16">
            {/* Overview + 3D showcase image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-ice px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Overview
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
                {industry.name}, engineered for{" "}
                <span className="text-gradient-brand">measurable outcomes.</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">{industry.challenge}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Delivered by Vedant Group's global teams across 25+ countries, every{" "}
                {industry.name.toLowerCase()} engagement combines domain-deep expertise, certified
                specialists and a delivery model built for security, quality and measurable business
                outcomes.
              </p>

              <div className="mt-9 perspective-1000">
                <Tilt3D max={8} scale={1.015} className="block">
                  <div className="relative overflow-hidden rounded-[1.75rem] border border-border/60 shadow-elegant">
                    <img
                      src={industry.innerImage}
                      alt={`${industry.name} solutions delivered by Vedant Group`}
                      className="aspect-[16/9] h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-brand-navy/5 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl glass-dark px-4 py-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white shadow-glow">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-white">{industry.name}</p>
                        <p className="truncate text-xs text-white/65">{industry.tagline}</p>
                      </div>
                    </div>
                  </div>
                </Tilt3D>
              </div>
            </motion.div>

            {/* Solutions we deliver */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">Solutions we deliver</h2>
              <p className="mt-3 text-muted-foreground">
                The core capabilities we bring to every {industry.name.toLowerCase()} engagement.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industry.solutions.map((solution, i) => (
                  <motion.div
                    key={solution}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="group relative overflow-hidden rounded-2xl border border-border/60 bg-white p-5 shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-ice text-sm font-bold text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <CheckCircle2 className="h-5 w-5 text-primary/70 group-hover:text-primary transition-colors" />
                    </div>
                    <p className="mt-4 font-semibold leading-snug">{solution}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* How we approach it */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">How we approach it</h2>
              <p className="mt-3 text-muted-foreground">
                A proven, low-risk path from ambition to outcome.
              </p>
              <div className="mt-8 space-y-4">
                {industry.approach.map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-5 rounded-2xl border border-border/60 bg-gradient-soft p-6"
                  >
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white shadow-card-soft">
                      <span className="text-sm font-bold">{i + 1}</span>
                    </div>
                    <p className="pt-1.5 text-foreground/85 leading-relaxed">{step}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Outcomes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">Outcomes that matter</h2>
              <p className="mt-3 text-muted-foreground">
                Results our {industry.name.toLowerCase()} clients see in production.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {industry.outcomes.map((o, i) => (
                  <motion.div
                    key={o.label}
                    initial={{ opacity: 0, y: 16, rotateX: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="perspective-1000"
                  >
                    <div className="rounded-2xl bg-brand-navy p-6 text-white shadow-elegant">
                      <TrendingUp className="h-5 w-5 text-brand-cyan" />
                      <div className="mt-4 text-3xl font-bold">{o.value}</div>
                      <p className="mt-1.5 text-sm text-white/70 leading-snug">{o.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sticky sidebar */}
          <aside className="lg:sticky lg:top-28 self-start space-y-6">
            <div className="relative overflow-hidden rounded-3xl bg-brand-navy p-7 text-white shadow-elegant">
              <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand-cyan/30 blur-3xl" />
              <div className="relative">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10">
                  <MessageSquare className="h-5 w-5 text-brand-cyan" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">Talk to a {industry.name} specialist</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  Get a tailored proposal and a clear plan — a senior partner responds within one
                  business day.
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand animate-gradient px-5 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-[1.02] transition-transform"
                >
                  Request a proposal <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-border/60 bg-white p-7 shadow-card-soft">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                At a glance
              </p>
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-ice text-primary">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Industry</p>
                    <p className="text-sm font-semibold">{industry.name}</p>
                  </div>
                </div>
                {GLANCE.map((g) => (
                  <div key={g.label} className="flex items-start gap-3">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-ice text-primary">
                      <g.icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{g.label}</p>
                      <p className="text-sm font-semibold">{g.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {industry.relatedServiceSlugs.length > 0 && (
              <div className="rounded-3xl border border-border/60 bg-white p-7 shadow-card-soft">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Related services
                </p>
                <ul className="mt-4 space-y-1">
                  {industry.relatedServiceSlugs.map((s) => {
                    const service = getServiceBySlug(s);
                    if (!service) return null;
                    return (
                      <li key={s}>
                        <Link
                          to="/services/$slug"
                          params={{ slug: s }}
                          className="group flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
                        >
                          {service.name}
                          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* Prev / Next navigation */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            to="/industries/$slug"
            params={{ slug: prev.slug }}
            className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-white p-6 hover:shadow-elegant hover:-translate-y-0.5 transition-all"
          >
            <ArrowLeft className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:-translate-x-1" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Previous
              </p>
              <p className="mt-1 font-semibold">{prev.name}</p>
            </div>
          </Link>
          <Link
            to="/industries/$slug"
            params={{ slug: next.slug }}
            className="group flex items-center justify-end gap-4 rounded-2xl border border-border/60 bg-white p-6 text-right hover:shadow-elegant hover:-translate-y-0.5 transition-all"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Next
              </p>
              <p className="mt-1 font-semibold">{next.name}</p>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <CTA />
    </SiteLayout>
  );
}
