"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "overview", label: "Тойм" },
  { id: "abilities", label: "Чадварууд" },
  { id: "perks", label: "Perks" },
  { id: "passives", label: "Passives" },
  { id: "tips", label: "Tips" },
];

export function HeroTabNav() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const els = TABS.map((t) => document.getElementById(t.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-25% 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav
      aria-label="Баатрын хэсгүүд"
      className="sticky top-16 z-30 -mx-5 overflow-x-auto border-b border-line/60 bg-void/90 px-5 backdrop-blur-md md:mx-0 md:rounded-lg md:border md:px-2"
    >
      <ul className="flex min-w-max gap-1 py-2 md:min-w-0">
        {TABS.map((t) => (
          <li key={t.id}>
            <a
              href={`#${t.id}`}
              className={cn(
                "focus-ring relative block whitespace-nowrap rounded-md px-3.5 py-2 font-body text-sm font-medium transition-colors",
                active === t.id ? "text-void" : "text-mist hover:text-paper",
              )}
            >
              {active === t.id && (
                <motion.span
                  layoutId="hero-tab"
                  className="absolute inset-0 -z-10 rounded-md bg-ember"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span className="relative">{t.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
