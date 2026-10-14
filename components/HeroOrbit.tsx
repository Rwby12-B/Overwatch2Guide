"use client";

import Link from "next/link";
import { CSSProperties, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Hero } from "@/data/types";
import { HeroEmblem } from "./HeroEmblem";
import { HeroPhoto } from "./HeroPhoto";
import { RoleBadge } from "./RoleBadge";

export function HeroOrbit({ heroes }: { heroes: Hero[] }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % heroes.length), 3600);
    return () => clearInterval(t);
  }, [heroes.length, reduce]);

  const cur = heroes[i];
  const vars = { ["--size" as string]: "clamp(270px, 82vw, 470px)" } as CSSProperties;

  return (
    <div className="relative mx-auto" style={{ ...vars, width: "var(--size)", height: "var(--size)" }}>
      <div className="absolute inset-[6%] rounded-full border border-dashed border-line" />
      <div className="absolute inset-[18%] rounded-full border border-line/60" />

      <div className="absolute inset-0 animate-spin-orbit">
        {heroes.map((h, idx) => {
          const angle = (idx / heroes.length) * 360;
          const on = idx === i;
          return (
            <div key={h.id} className="absolute left-1/2 top-1/2 h-0 w-0" style={{ transform: `rotate(${angle}deg)` }}>
              <div style={{ transform: "translateX(calc(var(--size) * 0.42))" }}>
                <div style={{ transform: `rotate(${-angle}deg)` }}>
                  <div className="animate-spin-orbit-rev">
                    <Link
                      href={`/heroes/${h.id}`}
                      aria-label={h.name}
                      className="focus-ring absolute block -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 hover:scale-125"
                      style={{ width: "calc(var(--size) * 0.15)", height: "calc(var(--size) * 0.15)", transform: `translate(-50%,-50%) scale(${on ? 1.3 : 1})`, opacity: on ? 1 : 0.7 }}
                    >
                      <HeroEmblem heroId={h.id} role={h.role} accent={h.colorAccent} motionMode="none" className="h-full w-full" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: "calc(var(--size) * 0.46)" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={cur.id}
            initial={{ opacity: 0, scale: 0.85, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.08, y: -10 }}
            transition={{ duration: 0.45 }}
            className="relative"
          >
            <Link
              href={`/heroes/${cur.id}`}
              aria-label={cur.name}
              className="focus-ring block overflow-hidden rounded-2xl border shadow-2xl"
              style={{ borderColor: `${cur.colorAccent}40`, boxShadow: `0 24px 60px -24px ${cur.colorAccent}77` }}
            >
              <HeroPhoto
                heroId={cur.id} initials={cur.initials} role={cur.role} accent={cur.colorAccent}
                variant="bust" showCrest={false} className="aspect-square w-full"
              />
            </Link>
            <div className="absolute -bottom-3 -right-3 h-10 w-10 animate-drift">
              <HeroEmblem heroId={cur.id} role={cur.role} accent={cur.colorAccent} motionMode="always" className="h-full w-full" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={cur.id + "-label"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 text-center"
        >
          <span className="font-display text-2xl uppercase text-paper">{cur.name}</span>
          <RoleBadge role={cur.role} subRoleLabel={cur.subRole} size="sm" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
