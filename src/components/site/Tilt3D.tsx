import { type ReactNode, useRef } from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";

export function Tilt3D({
  children,
  className = "",
  max = 10,
  glare = true,
  scale = 1.02,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
  scale?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 220, damping: 20, mass: 0.6 });
  const rotateY = useSpring(0, { stiffness: 220, damping: 20, mass: 0.6 });
  const s = useSpring(1, { stiffness: 220, damping: 20 });
  const glareX = useSpring(50, { stiffness: 220, damping: 24 });
  const glareY = useSpring(50, { stiffness: 220, damping: 24 });
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.35), transparent 60%)`;

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * max * 2);
    rotateX.set(-(py - 0.5) * max * 2);
    glareX.set(px * 100);
    glareY.set(py * 100);
  };

  const onMouseEnter = () => s.set(scale);
  const onMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    s.set(1);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, scale: s, transformPerspective: 900 }}
      className={`group preserve-3d ${className}`}
    >
      <div className="relative">
        {children}
        {glare && (
          <motion.div
            aria-hidden
            style={{ background: glareBg }}
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
      </div>
    </motion.div>
  );
}
