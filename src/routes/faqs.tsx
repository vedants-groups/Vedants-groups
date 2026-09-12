import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/seo";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircleQuestion, Search, X } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/home-sections";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqsHero from "@/assets/pic-helpdesk.jpg";

export const Route = createFileRoute("/faqs")({
  component: FAQPage,
  head: () => ({
    meta: [
      { title: "FAQs — Vedant Group" },
      {
        name: "description",
        content:
          "Frequently asked questions about Vedant Group's enterprise services, engagement models and global delivery.",
      },
      { property: "og:title", content: "FAQs — Vedant Group" },
      { property: "og:url", content: absoluteUrl("/faqs") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/faqs") }],
  }),
});

type Category =
  | "General"
  | "Security & Compliance"
  | "Technology & Services"
  | "Talent & Recruitment"
  | "Delivery & Support";

type FaqItem = { id: number; category: Category; q: string; a: string };

const RAW_FAQS: Omit<FaqItem, "id">[] = [
  {
    category: "General",
    q: "What industries does Vedant Group serve?",
    a: "We serve manufacturing, BFSI, healthcare, life sciences, energy, utilities, telecom, government, retail, logistics and automotive — with dedicated domain-expert teams for each.",
  },
  {
    category: "General",
    q: "Which countries do you operate in?",
    a: "Vedant operates across 25+ countries including the USA, Canada, UK, Ireland, Germany, France, Switzerland, Poland, Sweden, UAE, Saudi Arabia, Oman, Qatar, Kuwait, India, Singapore, Malaysia, Japan, Australia, China and South Korea.",
  },
  {
    category: "General",
    q: "What engagement models do you offer?",
    a: "We work on fixed-scope projects, dedicated teams, managed services, staff augmentation and outcome-based commercial models.",
  },
  {
    category: "General",
    q: "How do you price engagements?",
    a: "Fixed-scope, T&M, dedicated capacity or outcome-based — we tailor commercials to the engagement.",
  },
  {
    category: "General",
    q: "Do you support digital transformation for mid-market clients?",
    a: "Yes. We work with both Fortune 500 enterprises and high-growth mid-market organizations.",
  },
  {
    category: "General",
    q: "How do I start a conversation?",
    a: "Use the contact form or request a consultation — a senior partner will respond within one business day.",
  },
  {
    category: "Security & Compliance",
    q: "How do you ensure security and compliance?",
    a: "We follow ISO 27001-aligned processes, zero-trust architecture, secure SDLC, and regional data-residency compliance including GDPR and HIPAA where applicable.",
  },
  {
    category: "Security & Compliance",
    q: "Which regulations are you familiar with?",
    a: "GDPR, HIPAA, PCI-DSS, SOX, ISO 27001, ISO 9001, GxP and regional compliance frameworks.",
  },
  {
    category: "Technology & Services",
    q: "Do you work with Salesforce and SAP?",
    a: "Yes — we have 1700+ Salesforce certifications and deep SAP capability across consulting, implementation, integration and managed services.",
  },
  {
    category: "Technology & Services",
    q: "Do you support industrial automation?",
    a: "Absolutely. We deliver PLC, SCADA, DCS, MES and Industry 4.0 solutions for smart factories globally.",
  },
  {
    category: "Technology & Services",
    q: "What cloud platforms do you support?",
    a: "AWS, Microsoft Azure, Google Cloud, Oracle Cloud and hybrid/private deployments.",
  },
  {
    category: "Technology & Services",
    q: "How do you approach AI and Generative AI?",
    a: "We build production-grade ML, computer vision, NLP and enterprise GenAI solutions with governance, evaluation and MLOps baked in.",
  },
  {
    category: "Technology & Services",
    q: "Do you offer proof-of-concept engagements?",
    a: "Yes. Short, outcome-focused PoCs are a common starting point for AI, automation and cloud initiatives.",
  },
  {
    category: "Technology & Services",
    q: "Can you integrate with existing ERP/CRM systems?",
    a: "Yes. We deliver integrations across SAP, Salesforce, Oracle, Microsoft Dynamics and custom platforms.",
  },
  {
    category: "Talent & Recruitment",
    q: "Can you scale a team quickly?",
    a: "Yes. Our global talent network can mobilize certified specialists in days across most technologies.",
  },
  {
    category: "Talent & Recruitment",
    q: "Can Vedant help with recruitment?",
    a: "Yes. Permanent hiring, contract staffing and RPO across technology, engineering and enterprise functions globally.",
  },
  {
    category: "Delivery & Support",
    q: "What is your average project delivery timeline?",
    a: "Typical engagements range from 8-week accelerators to multi-year global transformation programs, with clearly defined milestones.",
  },
  {
    category: "Delivery & Support",
    q: "Do you provide 24/7 managed services?",
    a: "Yes. Follow-the-sun support with defined SLAs is available for infrastructure, applications, cybersecurity and data platforms.",
  },
  {
    category: "Delivery & Support",
    q: "What is your approach to change management?",
    a: "Structured governance, executive enablement, training academies and adoption analytics — outcomes, not just go-lives.",
  },
  {
    category: "Delivery & Support",
    q: "How do you measure success?",
    a: "Business KPIs are defined upfront and tracked through every phase, with executive-level dashboards and QBRs.",
  },
];

const FAQS: FaqItem[] = RAW_FAQS.map((item, id) => ({ ...item, id }));
const CATEGORIES: Category[] = [
  "General",
  "Security & Compliance",
  "Technology & Services",
  "Talent & Recruitment",
  "Delivery & Support",
];

function FAQPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return FAQS.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch =
        term.length === 0 ||
        item.q.toLowerCase().includes(term) ||
        item.a.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const clearFilters = () => {
    setSearch("");
    setActiveCategory("All");
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="FAQs"
        title={
          <>
            Answers to the questions{" "}
            <span className="text-gradient-brand bg-clip-text">enterprises ask us most.</span>
          </>
        }
        subtitle="Everything you need to know about working with Vedant Group."
        image={faqsHero}
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions — e.g. security, cloud, pricing…"
              className="w-full rounded-2xl border border-border/60 bg-white py-4 pl-12 pr-12 text-sm shadow-card-soft outline-none transition-shadow focus:shadow-elegant focus:ring-2 focus:ring-brand-sky/40"
            />
            {search.length > 0 && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </motion.div>

          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                activeCategory === "All"
                  ? "bg-gradient-brand text-white shadow-glow"
                  : "bg-secondary text-brand-navy hover:bg-brand-ice"
              }`}
            >
              All ({FAQS.length})
            </button>
            {CATEGORIES.map((cat) => {
              const count = FAQS.filter((f) => f.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                    activeCategory === cat
                      ? "bg-gradient-brand text-white shadow-glow"
                      : "bg-secondary text-brand-navy hover:bg-brand-ice"
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Showing {filtered.length} of {FAQS.length} questions
          </p>

          <div className="mt-8">
            <AnimatePresence mode="wait">
              {filtered.length > 0 ? (
                <motion.div
                  key={`${activeCategory}-${search}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Accordion type="single" collapsible className="space-y-3">
                    {filtered.map((item) => (
                      <AccordionItem
                        key={item.id}
                        value={`i-${item.id}`}
                        className="overflow-hidden rounded-2xl border border-border/60 bg-card px-6 shadow-card-soft transition-colors data-[state=open]:border-primary/40 data-[state=open]:shadow-elegant"
                      >
                        <AccordionTrigger className="text-left text-base font-semibold hover:no-underline data-[state=open]:text-primary">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center rounded-3xl border border-dashed border-border/60 bg-secondary/40 py-16 text-center"
                >
                  <MessageCircleQuestion className="h-10 w-10 text-muted-foreground" />
                  <p className="mt-4 text-sm font-medium text-foreground">
                    No questions match your search.
                  </p>
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-4 rounded-full bg-gradient-brand px-5 py-2.5 text-xs font-semibold text-white shadow-glow transition-transform hover:scale-105"
                  >
                    Clear filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-16 overflow-hidden rounded-3xl bg-brand-navy p-8 text-center text-white shadow-elegant sm:p-12"
          >
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className="absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-brand-sky/40 blur-3xl" />
              <div className="absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-brand-cyan/30 blur-3xl" />
            </div>
            <div className="relative">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl glass-dark text-brand-cyan">
                <MessageCircleQuestion className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold">Still have questions?</h3>
              <p className="mx-auto mt-2 max-w-md text-sm text-white/70">
                Our team can walk you through anything specific to your industry, stack or region —
                a senior partner responds within one business day.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-elegant transition-transform hover:scale-105"
              >
                Contact our team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </SiteLayout>
  );
}
