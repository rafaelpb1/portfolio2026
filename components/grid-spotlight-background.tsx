"use client";

import {
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
  motion,
} from "framer-motion";
import { useEffect, useRef } from "react";

export function GridSpotlightBackground() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const container = containerRef.current;
    // Escuta na seção pai: o background fica em -z-10, atrás do conteúdo do
    // hero, então eventos sobre o texto/foto não chegariam a este div. O pai
    // captura o mousemove de todo o hero via bubbling.
    const target = container?.parentElement;
    if (!container || !target) return;

    function handleMouseMove(e: MouseEvent) {
      const rect = container!.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }

    target.addEventListener("mousemove", handleMouseMove);
    return () => target.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion, mouseX, mouseY]);

  const spotlightMask = useMotionTemplate`radial-gradient(240px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {!shouldReduceMotion && (
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--accent) 1px, transparent 1px), linear-gradient(to bottom, var(--accent) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            opacity: 0.5,
            WebkitMaskImage: spotlightMask,
            maskImage: spotlightMask,
          }}
        />
      )}
    </div>
  );
}
