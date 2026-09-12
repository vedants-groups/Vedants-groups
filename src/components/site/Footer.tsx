import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import logo from "@/assets/logo.png";
import { Tilt3D } from "./Tilt3D";

const COLS = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Industries", to: "/industries" },
      { label: "FAQs", to: "/faqs" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      {
        label: "Digital Transformation",
        to: "/services/$slug",
        params: { slug: "digital-transformation" },
      },
      { label: "Cloud Services", to: "/services/$slug", params: { slug: "cloud-services" } },
      {
        label: "Artificial Intelligence",
        to: "/services/$slug",
        params: { slug: "artificial-intelligence" },
      },
      { label: "SAP", to: "/services/$slug", params: { slug: "sap" } },
      {
        label: "Global Talent Solutions",
        to: "/services/$slug",
        params: { slug: "global-talent-solutions" },
      },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Manufacturing", to: "/industries/$slug", params: { slug: "manufacturing" } },
      { label: "BFSI", to: "/industries/$slug", params: { slug: "bfsi" } },
      {
        label: "Healthcare",
        to: "/industries/$slug",
        params: { slug: "healthcare-life-sciences" },
      },
      {
        label: "Energy & Utilities",
        to: "/industries/$slug",
        params: { slug: "energy-utilities" },
      },
      {
        label: "Telecommunications",
        to: "/industries/$slug",
        params: { slug: "telecommunications" },
      },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQs", to: "/faqs" },
      { label: "Privacy Policy", to: "/contact" },
      { label: "Terms of Service", to: "/contact" },
      { label: "Careers", to: "/contact" },
    ],
  },
] as const;

const SOCIALS = [
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Facebook, label: "Facebook" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: Youtube, label: "YouTube" },
] as const;

const EASE = [0.22, 1, 0.36, 1] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy text-white">
      {/* Hairline gradient accent along the top edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-cyan/60 to-transparent" />

      {/* Depth backdrop: glow orbs + perspective grid + orbiting rings */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-brand-sky/40 blur-3xl animate-float" />
        <div
          className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-cyan/30 blur-3xl animate-float"
          style={{ animationDelay: "2.5s" }}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 opacity-25 [mask-image:linear-gradient(to_top,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(103,232,249,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "bottom",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Newsletter CTA band ─────────────────────────────── */}
        <Tilt3D max={3} glare={false} className="mt-20 rounded-3xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative overflow-hidden rounded-3xl glass-dark p-8 md:p-12 shadow-elegant"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-cyan/20 blur-3xl"
              aria-hidden
            />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-lg">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-brand-cyan">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cyan opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                  </span>
                  Enterprise Insights
                </span>
                <h3 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">
                  Signals that move the needle, monthly.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Curated intelligence on cloud, AI, automation and industry transformation —
                  written for decision-makers. No noise, unsubscribe anytime.
                </p>
              </div>
              <form
                className="w-full max-w-md"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full min-w-0 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/40 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-sky focus:border-transparent"
                  />
                  <button className="group shrink-0 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-brand animate-gradient px-6 py-3.5 text-sm font-semibold shadow-elegant transition-transform hover:scale-105">
                    Subscribe
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
                <p className="mt-3 pl-1 text-xs text-white/40">
                  Trusted by leaders across 25+ countries.
                </p>
              </form>
            </div>
          </motion.div>
        </Tilt3D>

        {/* ── Main columns ────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 pt-16 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:col-span-4"
          >
            <Tilt3D max={8} scale={1.03} className="w-fit rounded-2xl">
              <div className="w-fit rounded-2xl bg-white px-5 py-4 shadow-elegant">
                <img src={logo} alt="Vedant Group" className="h-20 w-auto" />
              </div>
            </Tilt3D>
            <p className="mt-6 text-sm leading-relaxed text-white/70 max-w-sm">
              Vedant Group is a global enterprise consulting group engineering digital excellence
              across cloud, AI, automation and world-class talent — trusted by leaders in 25+
              countries.
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/80">
              <a
                href="https://maps.google.com/?q=RAK+Economic+Free+Zone"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3 transition-colors hover:text-white"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
                <span>RAK Economic Free Zone, Ras Al Khaimah, UAE</span>
              </a>
              <a
                href="mailto:Info@vedantsgroups.com"
                className="group flex items-center gap-3 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-brand-cyan" />
                <span>Info@vedantsgroups.com</span>
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3 perspective-1000">
              {SOCIALS.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="group grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-all duration-300 hover:border-brand-cyan hover:text-white hover:bg-white/5 hover:-translate-y-1 hover:shadow-glow hover:rotate-[8deg]"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {COLS.map((col, ci) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 20, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: ci * 0.08, ease: EASE }}
                style={{ transformPerspective: 800 }}
              >
                <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-cyan">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        params={"params" in link ? link.params : undefined}
                        className="group inline-flex items-center text-sm text-white/70 hover:text-white transition-colors"
                      >
                        <span className="mr-0 h-px w-0 bg-brand-cyan transition-all duration-300 group-hover:mr-2 group-hover:w-3" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────────── */}
        <div className="mt-12 pb-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Vedant Group. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="transition-colors hover:text-white/80">
              Privacy
            </Link>
            <Link to="/contact" className="transition-colors hover:text-white/80">
              Terms
            </Link>
            <p className="hidden sm:block">Engineered with precision across 25+ countries.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
