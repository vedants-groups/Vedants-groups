import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { CATEGORIES, getServicesByCategory } from "@/data/services";

type NavItem = { label: string; to: string; mega?: boolean };
const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services", mega: true },
  { label: "Industries", to: "/industries" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
];

const SERVICE_GROUPS = CATEGORIES.map((cat) => ({
  title: cat.name,
  items: getServicesByCategory(cat.slug),
}));

function LogoMark({ scrolled }: { scrolled: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 250, damping: 18 });
  const rotateY = useSpring(0, { stiffness: 250, damping: 18 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 30);
    rotateX.set(-py * 30);
  };
  const onMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div className="perspective-1000">
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ rotateX, rotateY, transformPerspective: 700 }}
        className="preserve-3d relative rounded-2xl p-1.5"
        initial={{ opacity: 0, rotateY: -25, z: -20 }}
        animate={{ opacity: 1, rotateY: 0, z: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-brand blur-md transition-opacity duration-300 ${
            scrolled ? "opacity-0" : "opacity-30"
          }`}
          style={{ transform: "translateZ(-12px)" }}
        />
        <img src={logo} alt="Vedant Group" className="relative h-12 md:h-14 w-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]" />
      </motion.div>
    </div>
  );
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Header sits over a dark hero at the top of every page, and over a light
  // surface once scrolled — so link colors flip to stay readable in both states.
  const linkBase = scrolled
    ? "text-foreground/70 hover:text-primary hover:bg-primary/5"
    : "text-white/85 hover:text-white hover:bg-white/10";
  const activeCls = scrolled ? "text-primary bg-primary/5" : "text-white bg-white/10";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-card-soft"
          : "bg-transparent"
      }`}
    >
      {/* animated accent line — reads as a light beam traveling under the header */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden opacity-60">
        <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-brand-cyan to-transparent animate-marquee" />
      </div>

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 shrink-0"
          aria-label="Vedant Group — home"
        >
          <LogoMark scrolled={scrolled} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) =>
            item.mega ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <Link
                  to={item.to}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${linkBase}`}
                  activeProps={{ className: activeCls }}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                <AnimatePresence>
                  {megaOpen && (
                  <div className="absolute left-0 top-full w-max max-w-[min(60rem,92vw)] pt-4 perspective-1600">
                    <motion.div
                      initial={{ opacity: 0, rotateX: -12, y: -16, scale: 0.96 }}
                      animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                      exit={{ opacity: 0, rotateX: -8, y: -10, scale: 0.98 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      style={{ transformOrigin: "top left", transformPerspective: 1200 }}
                      className="w-[60rem] max-w-[92vw] rounded-3xl border border-border/70 bg-background/98 backdrop-blur-xl p-8 shadow-elegant"
                    >
                      <div className="grid grid-cols-3 xl:grid-cols-5 gap-6">
                        {SERVICE_GROUPS.map((g) => (
                          <div key={g.title}>
                            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                              {g.title}
                            </p>
                            <ul className="space-y-2">
                              {g.items.map((s) => (
                                <li key={s.slug}>
                                  <Link
                                    to="/services/$slug"
                                    params={{ slug: s.slug }}
                                    onClick={() => setMegaOpen(false)}
                                    className="text-sm text-foreground/75 hover:text-primary transition-colors"
                                  >
                                    {s.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 border-t border-border/60 pt-5">
                        <Link
                          to="/services"
                          onClick={() => setMegaOpen(false)}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                        >
                          View all services →
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${linkBase}`}
                activeProps={{ className: activeCls }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block perspective-1000">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-brand animate-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform duration-300 hover:-translate-y-0.5 hover:transform-[perspective(600px)_rotateX(8deg)_translateY(-2px)]"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-white/25 skew-x-12 transition-transform duration-700 group-hover:translate-x-full" />
            Get Consultation
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        <button
          className={`lg:hidden rounded-full p-2 transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, rotateX: -15, y: -12 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, rotateX: -10, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top center", transformPerspective: 1200 }}
            className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl"
          >
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-brand px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Get Consultation
            </Link>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
