import { createFileRoute, Link } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/seo";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Tilt3D } from "@/components/site/Tilt3D";
import { CTA } from "@/components/site/home-sections";
import { INDUSTRIES } from "@/data/industries";
import { getServiceBySlug } from "@/data/services";

export const Route = createFileRoute("/industries/")({
  component: IndustriesPage,
  head: () => ({
    meta: [
      { title: "Industries — Vedant Group" },
      {
        name: "description",
        content:
          "Deep industry expertise across manufacturing, BFSI, healthcare, energy, telecom, government, logistics and more.",
      },
      { property: "og:title", content: "Industries — Vedant Group" },
      { property: "og:url", content: absoluteUrl("/industries") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/industries") }],
  }),
});

const DIFFERENTIATORS = [
  {
    icon: ShieldCheck,
    title: "Regulatory fluency",
    description:
      "From HIPAA to GDPR, PCI-DSS to GxP — our teams design for the compliance regime your industry actually operates under.",
  },
  {
    icon: Sparkles,
    title: "Vertical playbooks",
    description:
      "Reusable reference architectures and delivery accelerators built from real programs in your sector, not generic templates.",
  },
  {
    icon: Users,
    title: "Embedded specialists",
    description:
      "Engineers and consultants who speak the domain language — plant operations, underwriting, clinical workflows — from day one.",
  },
];

function IndustriesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Domain-deep teams for{" "}
            <span className="text-gradient-brand bg-clip-text">every enterprise industry.</span>
          </>
        }
        subtitle="Regulated, mission-critical or consumer-facing — we bring the right specialists, playbooks and technology stack."
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="inline-flex items-center rounded-full bg-brand-ice px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-royal">
              Sector expertise
            </span>
            <h2 className="mt-5 text-3xl md:text-4xl font-bold text-brand-navy">
              Ten industries. One bar for excellence.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every industry below links to the specific challenges we solve, how we solve them, and
              the services we deploy to get there.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {INDUSTRIES.map((industry, idx) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 2) * 0.08 }}
                >
                  <Tilt3D max={4} scale={1.01} className="block h-full">
                    <Link
                      to="/industries/$slug"
                      params={{ slug: industry.slug }}
                      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-white shadow-card-soft transition-shadow hover:shadow-elegant"
                    >
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={industry.outerImage}
                          alt={`${industry.name} industry`}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent" />
                        <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="absolute right-6 top-6 text-right">
                          <div className="text-2xl font-bold text-white drop-shadow">
                            {industry.stat.value}
                          </div>
                          <div className="max-w-36 text-xs text-white/80 leading-snug">
                            {industry.stat.label}
                          </div>
                        </div>
                        <h3 className="absolute bottom-5 left-6 right-6 text-2xl font-bold text-white">
                          {industry.name}
                        </h3>
                      </div>

                      <div className="flex flex-1 flex-col p-8">
                        <p className="text-sm font-medium text-brand-royal">{industry.tagline}</p>
                        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                          {industry.challenge}
                        </p>

                        <ul className="mt-6 space-y-2.5">
                          {industry.solutions.slice(0, 3).map((solution) => (
                            <li
                              key={solution}
                              className="flex items-start gap-2.5 text-sm text-foreground/85"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap gap-2 border-t border-border/60 pt-5">
                          {industry.relatedServiceSlugs.slice(0, 3).map((slug) => {
                            const service = getServiceBySlug(slug);
                            if (!service) return null;
                            return (
                              <span
                                key={slug}
                                className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-brand-navy"
                              >
                                {service.name}
                              </span>
                            );
                          })}
                        </div>

                        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                          Explore {industry.name}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  </Tilt3D>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-24 px-4 sm:px-6 lg:px-8 text-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Why industry expertise matters</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Generic delivery teams solve generic problems. We build for the constraints your
              industry actually has.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {DIFFERENTIATORS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-dark rounded-3xl p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-brand-cyan">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm text-white/70 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14 text-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-navy shadow-elegant transition-transform hover:scale-105"
            >
              Explore all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTA />
    </SiteLayout>
  );
}
