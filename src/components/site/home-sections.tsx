import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight, Cloud, Shield, Cpu, Database, Cog, Users, Globe2, Sparkles,
  Zap, LineChart, Bot, Factory, HeartPulse, Landmark, ShoppingBag, Fuel,
  Radio, Building2, Truck, Car, CheckCircle2, Compass, ClipboardList,
  PenTool, Code2, Rocket, LifeBuoy, Star, Quote,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Tilt3D } from "./Tilt3D";

import picGlobal from "@/assets/pic-global.jpg";
import picCircuit from "@/assets/pic-circuit.jpg";
import picWorkstation from "@/assets/pic-workstation.jpg";
import picIndustry from "@/assets/pic-industry.jpg";
import picTeamMeeting from "@/assets/pic-team-meeting.jpg";
import picOffice from "@/assets/pic-office-interior.jpg";
import picHandshake from "@/assets/pic-handshake.jpg";
import picProductionLine from "@/assets/pic-production-line.jpg";

/* ------------------------------- HERO SLIDER ------------------------------ */

const SLIDES = [
  {
    img: picGlobal,
    eyebrow: "Global Digital Transformation",
    title: "Engineering Global\nDigital Excellence",
    sub: "Helping enterprises transform through technology, automation, cloud solutions and world-class consulting.",
    tags: ["Cloud", "Consulting", "Transformation"],
  },
  {
    img: picCircuit,
    eyebrow: "Artificial Intelligence · Automation",
    title: "Intelligent Automation\nfor the Future",
    sub: "AI, Machine Learning, RPA, Industry 4.0, Cloud and IoT — engineered for the world's most ambitious operations.",
    tags: ["AI", "Machine Learning", "RPA", "IoT"],
  },
  {
    img: picWorkstation,
    eyebrow: "Enterprise IT Consulting",
    title: "Transforming Businesses\nThrough Technology",
    sub: "Cloud, Cyber Security, Salesforce, ERP, Data and end-to-end digital transformation for the enterprise.",
    tags: ["Cloud", "Cyber Security", "Salesforce", "ERP"],
  },
  {
    img: picIndustry,
    eyebrow: "Manufacturing · Process Automation",
    title: "Powering Modern\nManufacturing",
    sub: "Smart factories, PLC, SCADA, MES and industrial robotics engineered for measurable production gains.",
    tags: ["PLC", "SCADA", "MES", "Industry 4.0"],
  },
  {
    img: picTeamMeeting,
    eyebrow: "Global Workforce · Talent Solutions",
    title: "Connecting Global Talent\nwith Global Businesses",
    sub: "Permanent, contract and managed talent for enterprises operating across 25+ countries.",
    tags: ["Talent", "Hiring", "Global"],
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6500);
    return () => clearInterval(t);
  }, []);
  const slide = SLIDES[index];

  // Mouse-driven parallax for 3D depth.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });
  const orbAX = useTransform(sx, [-0.5, 0.5], [-40, 40]);
  const orbAY = useTransform(sy, [-0.5, 0.5], [-28, 28]);
  const orbBX = useTransform(sx, [-0.5, 0.5], [30, -30]);
  const orbBY = useTransform(sy, [-0.5, 0.5], [22, -22]);
  const ringX = useTransform(sx, [-0.5, 0.5], [-24, 24]);
  const ringY = useTransform(sy, [-0.5, 0.5], [-18, 18]);
  const contentX = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const contentY = useTransform(sy, [-0.5, 0.5], [-10, 10]);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative h-[100svh] min-h-[620px] sm:min-h-[720px] w-full overflow-hidden bg-brand-navy"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={slide.img} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* floating orbs with 3D depth rings — parallax on mouse move */}
      <div className="pointer-events-none absolute inset-0 perspective-1000">
        <motion.div style={{ x: orbAX, y: orbAY }} className="absolute top-1/4 left-1/3 h-72 w-72 rounded-full bg-brand-sky/30 blur-3xl animate-float" />
        <motion.div style={{ x: orbBX, y: orbBY }} className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-brand-cyan/20 blur-3xl animate-float" />
        <motion.div style={{ x: ringX, y: ringY }} className="absolute right-[12%] top-[18%] hidden lg:block preserve-3d opacity-60">
          <div className="h-32 w-32 rounded-full border border-white/20 animate-spin-slow" style={{ transform: "rotateX(65deg)" }} />
          <div className="absolute inset-3 rounded-full border border-brand-cyan/30 animate-spin-slow-reverse" style={{ transform: "rotateX(65deg)" }} />
        </motion.div>
      </div>

      <motion.div style={{ x: contentX, y: contentY }} className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end overflow-y-auto pb-16 pt-24 sm:pb-24 sm:pt-32 px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-medium uppercase tracking-widest text-brand-cyan">
              <Sparkles className="h-3.5 w-3.5" /> {slide.eyebrow}
            </div>
            <h1 className="mt-6 whitespace-pre-line text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] sm:leading-[1.02] text-white">
              {slide.title.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {i === 1 ? <span className="text-gradient-brand bg-clip-text">{line}</span> : line}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">{slide.sub}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {slide.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/85">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand animate-gradient px-7 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
              >
                Explore Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Contact Experts
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* dots */}
        <div className="mt-12 flex items-center gap-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-12 bg-brand-cyan" : "w-6 bg-white/25 hover:bg-white/40"
              }`}
            />
          ))}
          <span className="ml-4 text-xs text-white/60 tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </span>
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------- TRUSTED BY ------------------------------- */

const PARTNERS = [
  "AWS", "Microsoft Azure", "Google Cloud", "Salesforce", "SAP", "Oracle",
  "ServiceNow", "Snowflake", "Databricks", "Siemens", "Rockwell", "NVIDIA",
];

export function TrustedBy() {
  const row = [...PARTNERS, ...PARTNERS];
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted across the world's leading enterprise platforms
        </p>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-4">
            {row.map((p, i) => (
              <span
                key={p + i}
                className="whitespace-nowrap rounded-full border border-border/60 bg-white px-6 py-3 text-sm font-semibold text-foreground/70 shadow-card-soft"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- ABOUT --------------------------------- */

export function About() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative perspective-1000"
        >
          <div className="absolute -inset-6 rounded-3xl bg-gradient-brand opacity-20 blur-2xl" />
          <Tilt3D max={7} scale={1.015} className="relative rounded-3xl">
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img src={picHandshake} alt="Vedant Group global partnership" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Tilt3D>
          <div className="absolute -bottom-8 -right-6 hidden md:block glass-card rounded-2xl px-6 py-5 shadow-elegant animate-float">
            <div className="text-3xl font-bold text-gradient-brand">15+</div>
            <p className="text-xs text-muted-foreground mt-1">Years engineering<br />global outcomes</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-ice px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-sky" /> About Vedant Group
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            A global partner for the <span className="text-gradient-brand">enterprise digital era.</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Vedant Group is a global consulting and technology group serving Fortune-scale
            enterprises across 25+ countries. We combine deep engineering, industry expertise,
            and world-class talent to help clients transform faster, operate smarter, and lead
            their markets.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Our Mission", body: "Engineer measurable outcomes for enterprises through technology, talent and trust." },
              { title: "Our Vision", body: "Become the most reliable digital transformation partner for global businesses." },
              { title: "Innovation", body: "AI-first, automation-driven and cloud-native by design." },
              { title: "Integrity", body: "Long-term partnerships built on transparency and rigor." },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl border border-border/70 bg-gradient-soft p-5">
                <p className="font-semibold">{v.title}</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------- SERVICES -------------------------------- */

const SERVICES = [
  { icon: Compass, title: "Digital Transformation", desc: "End-to-end programs that modernize operations, systems and experiences." },
  { icon: Cloud, title: "Cloud Services", desc: "Migration, DevOps and cloud-native engineering on AWS, Azure and GCP." },
  { icon: Bot, title: "AI & Machine Learning", desc: "Production-grade AI, ML models and generative AI at enterprise scale." },
  { icon: Cog, title: "Industrial Automation", desc: "PLC, SCADA, DCS, MES for smart factories and Industry 4.0." },
  { icon: Shield, title: "Cyber Security", desc: "Zero-trust architectures, SOC operations and enterprise resilience." },
  { icon: Database, title: "Data, BI & Analytics", desc: "Modern data platforms, dashboards and actionable business intelligence." },
  { icon: Cpu, title: "Salesforce & SAP", desc: "Consulting, implementation and integration for CRM and ERP." },
  { icon: Users, title: "Global Talent Solutions", desc: "Permanent, contract and managed workforce across 25+ countries." },
];

export function Services() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-card-soft">
            What we do
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Enterprise services engineered for <span className="text-gradient-brand">scale, security and speed.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From boardroom strategy to shop-floor automation — a single global partner for the
            entire enterprise technology lifecycle.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <Tilt3D max={10} className="h-full rounded-2xl">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-white p-6 shadow-card-soft transition-shadow hover:shadow-elegant">
                  <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
                  <div className="relative">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-white shadow-card-soft">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <Link to="/services" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- WHY CHOOSE ------------------------------- */

const WHY = [
  { icon: Globe2, title: "Global Delivery" },
  { icon: Landmark, title: "Enterprise Experience" },
  { icon: Star, title: "Industry Experts" },
  { icon: CheckCircle2, title: "Certified Professionals" },
  { icon: Bot, title: "AI-Driven Solutions" },
  { icon: Cloud, title: "Cloud Expertise" },
  { icon: Zap, title: "Automation Experts" },
  { icon: Users, title: "Recruitment Specialists" },
  { icon: Compass, title: "Worldwide Presence" },
  { icon: LifeBuoy, title: "24/7 Support" },
  { icon: LineChart, title: "Flexible Engagement" },
  { icon: Shield, title: "Security-First" },
];

export function WhyChoose() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-ice px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Why Vedant</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              The advantages of working with <span className="text-gradient-brand">a truly global partner.</span>
            </h2>
          </div>
          <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Read the full story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 perspective-1000">
          {WHY.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
            >
              <Tilt3D max={12} className="rounded-2xl">
                <div className="group rounded-2xl border border-border/60 bg-white p-5 transition-shadow hover:border-primary/40 hover:shadow-card-soft">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-ice text-primary group-hover:bg-gradient-brand group-hover:text-white transition-all">
                    <w.icon className="h-4.5 w-4.5" />
                  </div>
                  <p className="mt-4 text-sm font-semibold">{w.title}</p>
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- INDUSTRIES ------------------------------- */

const INDUSTRIES = [
  { icon: Factory, name: "Manufacturing" },
  { icon: Fuel, name: "Oil & Gas" },
  { icon: HeartPulse, name: "Life Sciences" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Landmark, name: "BFSI" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Zap, name: "Energy" },
  { icon: Zap, name: "Utilities" },
  { icon: Radio, name: "Telecommunications" },
  { icon: Building2, name: "Government" },
  { icon: Truck, name: "Logistics" },
  { icon: Car, name: "Automotive" },
];

export function Industries() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-brand-navy text-white overflow-hidden">
      <img src={picProductionLine} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" loading="lazy" />
      <div className="absolute inset-0 bg-brand-navy/70" />
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-brand-sky/50 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-brand-cyan/40 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-cyan">Industries</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Industry expertise where it <span className="text-gradient-brand bg-clip-text">matters most.</span>
          </h2>
          <p className="mt-4 text-white/70">
            Deep domain teams delivering measurable outcomes across regulated, mission-critical
            and consumer-facing industries.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 perspective-1000">
          {INDUSTRIES.map((it, i) => (
            <motion.div
              key={it.name + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
            >
              <Tilt3D max={12} className="rounded-2xl">
                <div className="group rounded-2xl glass-dark p-6 transition-colors hover:border-brand-cyan/50">
                  <it.icon className="h-6 w-6 text-brand-cyan group-hover:scale-110 transition-transform" />
                  <p className="mt-5 font-semibold">{it.name}</p>
                  <p className="mt-1 text-xs text-white/60">Enterprise solutions & transformation.</p>
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- GLOBAL PRESENCE ----------------------------- */

/**
 * Stylised world silhouette in a 200×100 equirectangular viewBox
 * (x = (lng+180)/1.8, y = (90-lat)/1.8). Continents are simplified but
 * geographically placed so delivery-center pins land on real land.
 */
const WORLD_PATH = [
  // North America
  "M 12 24 L 34 20 L 52 24 L 58 30 L 56 38 L 48 44 L 44 52 L 38 54 L 34 48 L 30 42 L 24 40 L 20 34 L 14 30 Z",
  // Central America
  "M 44 52 L 50 56 L 54 62 L 52 66 L 48 62 L 44 56 Z",
  // South America
  "M 54 64 L 64 62 L 70 70 L 68 82 L 62 92 L 58 90 L 56 80 L 52 72 L 54 66 Z",
  // Greenland
  "M 62 12 L 74 10 L 78 16 L 72 22 L 64 20 Z",
  // Africa
  "M 92 50 L 104 48 L 112 52 L 114 62 L 110 74 L 104 84 L 98 82 L 96 72 L 92 62 L 90 54 Z",
  // Europe
  "M 90 30 L 104 28 L 112 30 L 110 38 L 102 42 L 94 42 L 88 38 L 88 32 Z",
  // Middle East + Arabia
  "M 112 44 L 122 44 L 126 52 L 122 58 L 116 56 L 112 50 Z",
  // Asia (mainland)
  "M 112 24 L 140 20 L 160 24 L 172 30 L 174 40 L 166 46 L 156 48 L 148 44 L 138 46 L 128 44 L 122 40 L 114 36 L 110 30 Z",
  // India subcontinent
  "M 126 46 L 136 46 L 138 54 L 134 62 L 130 58 L 126 50 Z",
  // SE Asia / Indonesia
  "M 150 54 L 166 56 L 172 62 L 166 66 L 156 64 L 150 58 Z",
  // Japan
  "M 176 34 L 182 32 L 184 38 L 180 42 L 176 38 Z",
  // Australia
  "M 158 70 L 176 68 L 184 74 L 182 84 L 172 88 L 162 84 L 156 76 Z",
].join(" ");

/**
 * Delivery centers with real geographic coordinates [lng, lat].
 * `hub: true` marks primary regional hubs (larger pin).
 */
const CENTERS: { code: string; name: string; lng: number; lat: number; hub?: boolean }[] = [
  { code: "USA", name: "United States", lng: -95.7, lat: 39.0, hub: true },
  { code: "CAN", name: "Canada", lng: -79.4, lat: 43.7 },
  { code: "UK", name: "United Kingdom", lng: -1.5, lat: 52.5, hub: true },
  { code: "IRL", name: "Ireland", lng: -6.3, lat: 53.3 },
  { code: "DEU", name: "Germany", lng: 10.5, lat: 51.2 },
  { code: "FRA", name: "France", lng: 2.3, lat: 46.6 },
  { code: "UAE", name: "United Arab Emirates", lng: 54.4, lat: 24.5, hub: true },
  { code: "KSA", name: "Saudi Arabia", lng: 45.1, lat: 23.9 },
  { code: "QAT", name: "Qatar", lng: 51.2, lat: 25.3 },
  { code: "IND", name: "India", lng: 78.9, lat: 20.6, hub: true },
  { code: "SGP", name: "Singapore", lng: 103.8, lat: 1.35 },
  { code: "JPN", name: "Japan", lng: 138.3, lat: 36.2 },
  { code: "KOR", name: "South Korea", lng: 127.8, lat: 36.5 },
  { code: "CHN", name: "China", lng: 104.2, lat: 35.9 },
  { code: "AUS", name: "Australia", lng: 133.8, lat: -25.3, hub: true },
];

/** Equirectangular projection onto the 200×100 viewBox used by the world silhouette. */
const proj = (lng: number, lat: number) => ({
  x: (lng + 180) * (200 / 360),
  y: (90 - lat) * (100 / 180),
});

/** Great-circle-ish route connections between hubs (follow-the-sun flow). */
const ROUTES: [string, string][] = [
  ["USA", "UK"], ["UK", "UAE"], ["UAE", "IND"], ["IND", "SGP"],
  ["SGP", "AUS"], ["IND", "JPN"], ["UAE", "KSA"], ["UK", "DEU"],
];

export function GlobalPresenceMap() {
  const byCode = Object.fromEntries(CENTERS.map((c) => [c.code, c]));

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-ice px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Global Presence</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Delivering across <span className="text-gradient-brand">25+ countries.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              A follow-the-sun delivery model spanning North America, Europe, the Middle East,
              India, APAC and beyond — one global standard of engineering excellence.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-2 max-w-md">
              {["USA", "Canada", "UK", "Germany", "France", "Ireland", "UAE", "KSA", "Qatar", "India", "Singapore", "Japan", "Australia", "China", "S. Korea"].map((c) => (
                <span key={c} className="rounded-lg border border-border/70 bg-white px-2.5 py-1.5 text-xs text-center font-medium text-foreground/80">{c}</span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[2/1] rounded-3xl overflow-hidden bg-brand-navy shadow-elegant ring-1 ring-white/10">
              {/* soft brand glow */}
              <div className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-brand-sky/20 blur-3xl" />

              <svg viewBox="0 0 200 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <radialGradient id="gp-pulse" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#67e8f9" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="gp-route" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#67e8f9" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                {/* subtle graticule (lat/long grid) */}
                <g stroke="#ffffff" strokeOpacity="0.05" strokeWidth="0.15">
                  {[20, 40, 60, 80, 100, 120, 140, 160, 180].map((x) => (
                    <line key={`v${x}`} x1={x} y1="0" x2={x} y2="100" />
                  ))}
                  {[20, 40, 60, 80].map((y) => (
                    <line key={`h${y}`} x1="0" y1={y} x2="200" y2={y} />
                  ))}
                </g>

                {/* real continent silhouettes */}
                <path
                  d={WORLD_PATH}
                  fill="#1e3a63"
                  fillOpacity="0.9"
                  stroke="#3b6ea5"
                  strokeOpacity="0.35"
                  strokeWidth="0.2"
                />

                {/* connecting routes between hubs */}
                {ROUTES.map(([a, b], i) => {
                  const A = byCode[a], B = byCode[b];
                  if (!A || !B) return null;
                  const pa = proj(A.lng, A.lat), pb = proj(B.lng, B.lat);
                  const mx = (pa.x + pb.x) / 2;
                  const my = Math.min(pa.y, pb.y) - Math.abs(pb.x - pa.x) * 0.18 - 3;
                  return (
                    <path
                      key={i}
                      d={`M ${pa.x} ${pa.y} Q ${mx} ${my} ${pb.x} ${pb.y}`}
                      fill="none"
                      stroke="url(#gp-route)"
                      strokeWidth="0.4"
                      strokeLinecap="round"
                    />
                  );
                })}

                {/* delivery-center markers */}
                {CENTERS.map((c, i) => {
                  const p = proj(c.lng, c.lat);
                  const rHalo = c.hub ? 4 : 2.8;
                  const rDot = c.hub ? 1.1 : 0.8;
                  return (
                    <g key={c.code}>
                      <circle cx={p.x} cy={p.y} r={rHalo} fill="url(#gp-pulse)">
                        <animate attributeName="r" values={`${rHalo * 0.7};${rHalo};${rHalo * 0.7}`} dur="3s" begin={`${i * 0.18}s`} repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.9;0.35;0.9" dur="3s" begin={`${i * 0.18}s`} repeatCount="indefinite" />
                      </circle>
                      <circle cx={p.x} cy={p.y} r={rDot} fill={c.hub ? "#a5f3fc" : "#67e8f9"} stroke="#0b1e3a" strokeWidth="0.15" />
                    </g>
                  );
                })}
              </svg>

              {/* legend + badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-4 rounded-full glass-dark px-3 py-1.5 text-[11px] text-white/80">
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#a5f3fc]" /> Regional hub</span>
                <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#67e8f9]" /> Delivery center</span>
              </div>
              <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full glass-dark px-3 py-1.5 text-xs text-white/80">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Live delivery centers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- PROCESS ------------------------------- */

const STEPS = [
  { icon: Compass, title: "Discover", desc: "Deep-dive into your business, technology and goals." },
  { icon: Users, title: "Consult", desc: "Strategic advisory from senior industry experts." },
  { icon: ClipboardList, title: "Plan", desc: "Roadmap with measurable milestones and KPIs." },
  { icon: PenTool, title: "Design", desc: "Human-centered architecture and experience design." },
  { icon: Code2, title: "Develop", desc: "Engineering with global standards and quality." },
  { icon: Rocket, title: "Deploy", desc: "Zero-downtime rollouts and change management." },
  { icon: LifeBuoy, title: "Support", desc: "24/7 managed services and continuous optimization." },
];

export function Process() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-card-soft">Our Process</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            A proven path from ambition to <span className="text-gradient-brand">outcome.</span>
          </h2>
        </div>

        <div className="mt-16 relative">
          <div className="absolute top-6 left-0 right-0 hidden lg:block h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-10 sm:gap-x-6 lg:flex-nowrap lg:justify-between">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative w-[calc(50%-1rem)] sm:w-[calc(33.333%-1rem)] lg:w-auto lg:flex-1"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-brand text-white shadow-elegant mx-auto lg:mx-0 ring-4 ring-background">
                  <s.icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-primary text-center lg:text-left">Step {i + 1}</p>
                <p className="mt-1 font-semibold text-center lg:text-left">{s.title}</p>
                <p className="mt-1 text-xs text-muted-foreground text-center lg:text-left">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ TESTIMONIALS ------------------------------ */

const TESTIMONIALS = [
  {
    quote: "Vedant re-engineered our cloud estate across three continents without a single hour of downtime. Their delivery discipline is genuinely world-class.",
    name: "Group CTO",
    role: "Global Manufacturing · Fortune 500",
  },
  {
    quote: "The Salesforce and data programs paid for themselves within two quarters. A partner that speaks both the boardroom and the shop floor.",
    name: "VP, Digital",
    role: "Energy & Utilities · Europe",
  },
  {
    quote: "From AI proof-of-concept to production in weeks, with governance we could actually stand behind. Exactly the pace our market demanded.",
    name: "Chief Data Officer",
    role: "BFSI · Middle East",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-card-soft">
            Client Voices
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Outcomes that leaders <span className="text-gradient-brand">talk about.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 perspective-1000">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Tilt3D max={8} className="h-full rounded-3xl">
                <figure className="group relative flex h-full flex-col rounded-3xl border border-border/60 bg-white p-8 shadow-card-soft transition-shadow hover:shadow-elegant">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-white shadow-card-soft">
                    <Quote className="h-5 w-5" />
                  </div>
                  <blockquote className="mt-6 flex-1 text-base leading-relaxed text-foreground/85">
                    "{t.quote}"
                  </blockquote>
                  <div className="mt-6 flex items-center gap-1 text-brand-cyan">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <figcaption className="mt-4 border-t border-border/60 pt-4">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </figcaption>
                </figure>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- FINAL CTA -------------------------------- */

export function CTA() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 perspective-1000">
      <div className="mx-auto max-w-7xl">
        <Tilt3D max={4} glare={false} className="rounded-[2rem]">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-brand animate-gradient p-10 md:p-16 shadow-elegant">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-float" />
            <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-brand-cyan/30 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
          </div>
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready to engineer your next chapter of growth?
              </h2>
              <p className="mt-4 text-white/85 max-w-xl">
                Talk to a Vedant expert. Get a tailored roadmap for transformation, automation
                or global talent — in a single working session.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-primary hover:bg-white/90 transition shadow-elegant">
                Get Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-semibold text-white hover:bg-white/20 transition">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
        </Tilt3D>
      </div>
    </section>
  );
}
