import { createFileRoute, Link } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/seo";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowLeft, CheckCircle2, ChevronRight, Compass, PenTool,
  Rocket, LifeBuoy, Globe2, ShieldCheck, Layers, Sparkles, MessageSquare,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/home-sections";
import { getServiceBySlug, getCategory, getServicesByCategory } from "@/data/services";
import picCollaboration from "@/assets/pic-collaboration.jpg";
import picDataCenter from "@/assets/pic-data-center.jpg";
import picRobotArm from "@/assets/pic-robot-arm.jpg";
import picFactoryFloor from "@/assets/pic-factory-floor.jpg";
import picRecruitment from "@/assets/pic-recruitment.jpg";
import picHandshake from "@/assets/pic-handshake.jpg";

// Per-service hero images — one unique, contextually matched photo per service page.
import svcItConsulting from "@/assets/pic-svc-it-consulting.jpg";
import svcDigitalTransformation from "@/assets/pic-svc-digital-transformation.jpg";
import svcEnterpriseSoftwareDevelopment from "@/assets/pic-svc-enterprise-software-development.jpg";
import svcApplicationDevelopment from "@/assets/pic-svc-application-development.jpg";
import svcApplicationMaintenance from "@/assets/pic-svc-application-maintenance.jpg";
import svcManagedItServices from "@/assets/pic-svc-managed-it-services.jpg";
import svcQualityAssurance from "@/assets/pic-svc-quality-assurance.jpg";
import svcAutomationTesting from "@/assets/pic-svc-automation-testing.jpg";
import svcCloudServices from "@/assets/pic-svc-cloud-services.jpg";
import svcCloudMigration from "@/assets/pic-svc-cloud-migration.jpg";
import svcDevops from "@/assets/pic-svc-devops.jpg";
import svcCyberSecurity from "@/assets/pic-svc-cyber-security.jpg";
import svcDataAnalytics from "@/assets/pic-svc-data-analytics.jpg";
import svcBigData from "@/assets/pic-svc-big-data.jpg";
import svcBusinessIntelligence from "@/assets/pic-svc-business-intelligence.jpg";
import svcInfrastructureServices from "@/assets/pic-svc-infrastructure-services.jpg";
import svcArtificialIntelligence from "@/assets/pic-svc-artificial-intelligence.jpg";
import svcMachineLearning from "@/assets/pic-svc-machine-learning.jpg";
import svcRoboticProcessAutomation from "@/assets/pic-svc-robotic-process-automation.jpg";
import svcIot from "@/assets/pic-svc-iot.jpg";
import svcBlockchain from "@/assets/pic-svc-blockchain.jpg";
import svcIndustrialAutomation from "@/assets/pic-svc-industrial-automation.jpg";
import svcManufacturingAutomation from "@/assets/pic-svc-manufacturing-automation.jpg";
import svcPlc from "@/assets/pic-svc-plc.jpg";
import svcScada from "@/assets/pic-svc-scada.jpg";
import svcDcs from "@/assets/pic-svc-dcs.jpg";
import svcMes from "@/assets/pic-svc-mes.jpg";
import svcSap from "@/assets/pic-svc-sap.jpg";
import svcSalesforceConsulting from "@/assets/pic-svc-salesforce-consulting.jpg";
import svcSalesforceImplementation from "@/assets/pic-svc-salesforce-implementation.jpg";
import svcSalesforceIntegration from "@/assets/pic-svc-salesforce-integration.jpg";
import svcCrmSolutions from "@/assets/pic-svc-crm-solutions.jpg";
import svcHrRecruitment from "@/assets/pic-svc-hr-recruitment.jpg";
import svcPermanentHiring from "@/assets/pic-svc-permanent-hiring.jpg";
import svcContractStaffing from "@/assets/pic-svc-contract-staffing.jpg";
import svcGlobalTalentSolutions from "@/assets/pic-svc-global-talent-solutions.jpg";

const CATEGORY_IMAGE: Record<string, string> = {
  "consulting-transformation": picCollaboration,
  "cloud-data-security": picDataCenter,
  "ai-automation": picRobotArm,
  "industrial-enterprise": picFactoryFloor,
  "talent-solutions": picRecruitment,
};

// Unique hero image for every individual service page.
const SERVICE_IMAGE: Record<string, string> = {
  "it-consulting": svcItConsulting,
  "digital-transformation": svcDigitalTransformation,
  "enterprise-software-development": svcEnterpriseSoftwareDevelopment,
  "application-development": svcApplicationDevelopment,
  "application-maintenance": svcApplicationMaintenance,
  "managed-it-services": svcManagedItServices,
  "quality-assurance": svcQualityAssurance,
  "automation-testing": svcAutomationTesting,
  "cloud-services": svcCloudServices,
  "cloud-migration": svcCloudMigration,
  "devops": svcDevops,
  "cyber-security": svcCyberSecurity,
  "data-analytics": svcDataAnalytics,
  "big-data": svcBigData,
  "business-intelligence": svcBusinessIntelligence,
  "infrastructure-services": svcInfrastructureServices,
  "artificial-intelligence": svcArtificialIntelligence,
  "machine-learning": svcMachineLearning,
  "robotic-process-automation": svcRoboticProcessAutomation,
  "iot": svcIot,
  "blockchain": svcBlockchain,
  "industrial-automation": svcIndustrialAutomation,
  "manufacturing-automation": svcManufacturingAutomation,
  "plc": svcPlc,
  "scada": svcScada,
  "dcs": svcDcs,
  "mes": svcMes,
  "sap": svcSap,
  "salesforce-consulting": svcSalesforceConsulting,
  "salesforce-implementation": svcSalesforceImplementation,
  "salesforce-integration": svcSalesforceIntegration,
  "crm-solutions": svcCrmSolutions,
  "hr-recruitment": svcHrRecruitment,
  "permanent-hiring": svcPermanentHiring,
  "contract-staffing": svcContractStaffing,
  "global-talent-solutions": svcGlobalTalentSolutions,
};

export const Route = createFileRoute("/services/$slug")({
  component: ServiceDetailPage,
  head: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    const title = service ? `${service.name} — Vedant Group` : "Service — Vedant Group";
    const description = service?.description ?? "Enterprise services from Vedant Group.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: absoluteUrl(`/services/${params.slug}`) },
      ],
      links: [{ rel: "canonical", href: absoluteUrl(`/services/${params.slug}`) }],
      scripts: service
        ? [{
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: service.name,
              serviceType: service.name,
              description: service.description,
              areaServed: "Worldwide",
              provider: {
                "@type": "Organization",
                name: "Vedant Group",
                url: absoluteUrl("/"),
              },
            }),
          }]
        : [],
    };
  },
});

const STEPS = [
  { icon: Compass, title: "Discover", desc: "We assess your current state, constraints and objectives to define the highest-impact path forward." },
  { icon: PenTool, title: "Design", desc: "Architecture, roadmap and delivery plan with clearly defined milestones and success metrics." },
  { icon: Rocket, title: "Deliver", desc: "Execution by certified global teams, with quality, security and governance built into every stage." },
  { icon: LifeBuoy, title: "Support", desc: "24/7 managed operations, optimization and continuous improvement long after go-live." },
];

const GLANCE = [
  { icon: Globe2, label: "Delivery", value: "Global · 25+ countries" },
  { icon: ShieldCheck, label: "Teams", value: "Certified specialists" },
  { icon: Layers, label: "Engagement", value: "Flexible models" },
];

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <SiteLayout>
        <PageHero
          eyebrow="Services"
          title="Service not found"
          subtitle="The service you're looking for doesn't exist or has moved."
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-elegant"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all services
          </Link>
        </PageHero>
      </SiteLayout>
    );
  }

  const category = getCategory(service.categorySlug);
  const siblings = getServicesByCategory(service.categorySlug);
  const idx = siblings.findIndex((s) => s.slug === service.slug);
  const prev = idx > 0 ? siblings[idx - 1] : null;
  const next = idx < siblings.length - 1 ? siblings[idx + 1] : null;
  const related = siblings.filter((s) => s.slug !== service.slug).slice(0, 5);
  const Icon = category.icon;

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-navy text-white pt-36 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <img src={SERVICE_IMAGE[service.slug] ?? CATEGORY_IMAGE[service.categorySlug] ?? picHandshake} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-brand-navy/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-brand-navy/40" />
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-brand-sky/50 blur-3xl animate-float" />
          <div className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-brand-cyan/40 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }} />

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/80">{category.name}</span>
          </nav>

          <div className="mt-6">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                <Icon className="h-3.5 w-3.5" /> {category.name}
              </div>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
                {service.name}
              </h1>
              <p className="mt-5 text-xl text-brand-cyan/90 font-medium leading-snug">
                {service.tagline}
              </p>
              <p className="mt-4 max-w-2xl text-base text-white/70 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Global delivery", "Certified experts", "25+ countries", "Flexible engagement"].map((t) => (
                  <span key={t} className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/85">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand animate-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
                >
                  Discuss your project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  <ArrowLeft className="h-4 w-4" /> All services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-16">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-ice px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Overview</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
                {service.name}, engineered for <span className="text-gradient-brand">enterprise scale.</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">{service.description}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Delivered by Vedant Group's global teams across 25+ countries, every engagement
                combines deep domain expertise, certified specialists and a delivery model built for
                security, quality and measurable business outcomes.
              </p>

              <div className="relative mt-8 overflow-hidden rounded-3xl shadow-elegant">
                <img
                  src={SERVICE_IMAGE[service.slug] ?? CATEGORY_IMAGE[service.categorySlug] ?? picHandshake}
                  alt={`${service.name} delivery at Vedant Group`}
                  className="aspect-[16/9] h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/45 to-transparent" />
              </div>
            </motion.div>

            {/* What's included */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">What's included</h2>
              <p className="mt-3 text-muted-foreground">Core capabilities delivered as part of this service.</p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.capabilities.map((c, i) => (
                  <div
                    key={c}
                    className="group relative overflow-hidden rounded-2xl border border-border/60 bg-white p-5 shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-ice text-sm font-bold text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <CheckCircle2 className="h-5 w-5 text-primary/70 group-hover:text-primary transition-colors" />
                    </div>
                    <p className="mt-4 font-semibold leading-snug">{c}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* How we deliver */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">How we deliver</h2>
              <p className="mt-3 text-muted-foreground">A proven, low-risk path from ambition to outcome.</p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {STEPS.map((s, i) => (
                  <div key={s.title} className="relative rounded-2xl border border-border/60 bg-gradient-soft p-6">
                    <div className="flex items-center justify-between">
                      <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-white shadow-card-soft">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <span className="text-4xl font-bold text-primary/10">{i + 1}</span>
                    </div>
                    <p className="mt-4 font-semibold">{s.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Business impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">Business impact</h2>
              <p className="mt-3 text-muted-foreground">The outcomes our clients care about most.</p>
              <div className="mt-8 grid grid-cols-1 gap-4">
                {service.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-4 rounded-2xl border border-border/60 bg-white p-5 shadow-card-soft">
                    <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-brand text-white">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <p className="text-foreground/85 leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sticky sidebar */}
          <aside className="lg:sticky lg:top-28 self-start space-y-6">
            {/* Expert CTA */}
            <div className="relative overflow-hidden rounded-3xl bg-brand-navy p-7 text-white shadow-elegant">
              <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand-cyan/30 blur-3xl" />
              <div className="relative">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10">
                  <MessageSquare className="h-5 w-5 text-brand-cyan" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">Talk to a {service.name} expert</h3>
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

            {/* At a glance */}
            <div className="rounded-3xl border border-border/60 bg-white p-7 shadow-card-soft">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">At a glance</p>
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-ice text-primary">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Category</p>
                    <p className="text-sm font-semibold">{category.name}</p>
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

            {/* Related */}
            {related.length > 0 && (
              <div className="rounded-3xl border border-border/60 bg-white p-7 shadow-card-soft">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">Related services</p>
                <ul className="mt-4 space-y-1">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        to="/services/$slug"
                        params={{ slug: r.slug }}
                        className="group flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
                      >
                        {r.name}
                        <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* Prev / Next navigation */}
      {(prev || next) && (
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-4">
            {prev ? (
              <Link
                to="/services/$slug"
                params={{ slug: prev.slug }}
                className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-white p-6 hover:shadow-elegant hover:-translate-y-0.5 transition-all"
              >
                <ArrowLeft className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:-translate-x-1" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Previous</p>
                  <p className="mt-1 font-semibold">{prev.name}</p>
                </div>
              </Link>
            ) : <div className="hidden md:block" />}
            {next && (
              <Link
                to="/services/$slug"
                params={{ slug: next.slug }}
                className="group flex items-center justify-end gap-4 rounded-2xl border border-border/60 bg-white p-6 text-right hover:shadow-elegant hover:-translate-y-0.5 transition-all"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Next</p>
                  <p className="mt-1 font-semibold">{next.name}</p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </section>
      )}

      <CTA />
    </SiteLayout>
  );
}
