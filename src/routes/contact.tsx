import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/seo";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, MapPin, Send, Building2, Clock, CheckCircle2, ArrowUpRight,
  Linkedin, Twitter, Facebook, Instagram, Youtube,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import contactHero from "@/assets/pic-city.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Vedant Group" },
      { name: "description", content: "Talk to a Vedant Group expert. Reach our global HQ in the RAK Economic Free Zone, UAE — we respond within one business day." },
      { property: "og:title", content: "Contact — Vedant Group" },
      { property: "og:url", content: absoluteUrl("/contact") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/contact") }],
  }),
});

const ADDRESS = "Vedant Consultancy Services Fz LLC, RAK Economic Free Zone, Ras Al Khaimah, UAE";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("RAK Economic Free Zone, Ras Al Khaimah, UAE")}`;
const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent("RAK Economic Free Zone, Ras Al Khaimah, UAE")}&z=13&output=embed`;

const INFO = [
  {
    icon: Mail,
    label: "Email us",
    lines: ["Info@vedantsgroups.com"],
    href: "mailto:Info@vedantsgroups.com",
  },
  {
    icon: Building2,
    label: "Global headquarters",
    lines: ["Vedant Consultancy Services Fz LLC", "RAK Economic Free Zone", "Ras Al Khaimah, UAE"],
  },
  {
    icon: Clock,
    label: "Business hours",
    lines: ["Sunday – Thursday", "9:00 – 18:00 (GST)"],
  },
];

const SOCIALS = [Linkedin, Twitter, Facebook, Instagram, Youtube];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title={<>Let's engineer <span className="text-gradient-brand bg-clip-text">your next chapter.</span></>}
        subtitle="Reach a senior partner directly. We respond within one business day, anywhere in the world."
        image={contactHero}
      />

      {/* Contact info + form */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Left: details */}
          <div className="lg:col-span-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-ice px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-sky" /> Get in touch
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
              Talk to a Vedant expert.
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Whether it's a full transformation program or a focused proof-of-concept, a senior
              partner will get back to you within one business day.
            </p>

            <div className="mt-8 space-y-4">
              {INFO.map((item) => {
                const inner = (
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white shadow-card-soft">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{item.label}</p>
                      {item.lines.map((l, i) => (
                        <p key={l} className={i === 0 ? "mt-1 font-semibold text-foreground" : "text-sm text-muted-foreground"}>{l}</p>
                      ))}
                    </div>
                  </div>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block rounded-2xl border border-border/60 bg-gradient-soft p-5 hover:shadow-card-soft hover:-translate-y-0.5 transition-all"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={item.label} className="rounded-2xl border border-border/60 bg-gradient-soft p-5">
                    {inner}
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Follow us</p>
              <div className="mt-3 flex items-center gap-3">
                {SOCIALS.map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social"
                    className="grid h-10 w-10 place-items-center rounded-full border border-border/70 text-foreground/70 hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-3xl border border-border/60 bg-white p-8 md:p-10 shadow-elegant"
            >
              {sent ? (
                <div className="py-10 text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-brand text-white shadow-elegant">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold">Message received</h2>
                  <p className="mt-2 text-muted-foreground max-w-md mx-auto">
                    Thank you for reaching out. A senior partner will respond to your inquiry within
                    one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold">Start a conversation</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tell us about your goals — the more context, the sharper our first response.
                  </p>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Full name" name="name" placeholder="Jane Doe" />
                    <Field label="Work email" name="email" type="email" placeholder="jane@company.com" />
                    <Field label="Company" name="company" placeholder="Company Inc." />
                    <Field label="Country" name="country" placeholder="United Arab Emirates" />
                  </div>

                  <label className="block mt-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">How can we help?</span>
                    <select
                      name="topic"
                      defaultValue=""
                      required
                      className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                    >
                      <option value="" disabled>Select an inquiry type…</option>
                      <option>New project or consultation</option>
                      <option>Cloud, AI &amp; automation</option>
                      <option>Salesforce / SAP / ERP</option>
                      <option>Industrial automation</option>
                      <option>Talent &amp; recruitment</option>
                      <option>Partnership</option>
                      <option>Careers</option>
                      <option>Other</option>
                    </select>
                  </label>

                  <label className="block mt-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Your message</span>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us about your project, timelines and goals…"
                      className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                    />
                  </label>

                  <label className="mt-4 flex items-start gap-3 text-sm text-muted-foreground">
                    <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary/30" />
                    <span>I agree to be contacted by Vedant Group regarding my inquiry.</span>
                  </label>

                  <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand animate-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-[1.02] transition-transform">
                    Send message <Send className="h-4 w-4" />
                  </button>
                  <p className="mt-4 text-xs text-muted-foreground">
                    We typically reply within one business day. Your details are kept confidential.
                  </p>
                </>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      {/* HQ location panel */}
      <section className="pb-28 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-navy text-white shadow-elegant">
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-brand-sky/40 blur-3xl" />
              <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-brand-cyan/30 blur-3xl" />
            </div>
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
                backgroundSize: "22px 22px",
              }}
            />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 p-10 md:p-14 items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-cyan">
                  Global Headquarters
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
                  Ras Al Khaimah, <span className="text-gradient-brand bg-clip-text">United Arab Emirates</span>
                </h2>
                <div className="mt-6 flex items-start gap-3 text-white/80">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-cyan" />
                  <p className="leading-relaxed">{ADDRESS}</p>
                </div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-elegant hover:scale-[1.03] transition-transform"
                >
                  Get directions <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-dark">
                <iframe
                  title="Vedant Group headquarters — RAK Economic Free Zone, Ras Al Khaimah, UAE"
                  src={MAPS_EMBED_URL}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="pointer-events-none absolute bottom-4 right-4 rounded-full glass-dark px-3 py-1.5 text-xs text-white/80">
                  RAK Economic Free Zone
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label, name, type = "text", placeholder,
}: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
      />
    </label>
  );
}
