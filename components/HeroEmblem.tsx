"use client";

import { useId } from "react";
import { Role } from "@/data/types";
import { getHeroIcon, hashSeed, mulberry32 } from "@/lib/heroVisuals";
import { cn } from "@/lib/utils";

const FRAME: Record<Role, string> = {
  Tank: "M100 10 L178 38 V100 C178 148 146 180 100 196 C54 180 22 148 22 100 V38 Z",
  Damage: "M100 6 L190 100 L100 194 L10 100 Z",
  Support: "M100 14 A86 86 0 1 1 99.9 14 Z",
};

const f = (n: number) => n.toFixed(2);
const pt = (r: number, deg: number) => {
  const a = (deg * Math.PI) / 180;
  return [100 + r * Math.cos(a), 100 + r * Math.sin(a)] as const;
};

/**
 * Procedural, unique emblem per hero: role-shaped frame + ring ticks/arcs
 * seeded from the hero id + a signature icon. Original artwork (no Blizzard assets).
 */
export function HeroEmblem({
  heroId,
  role,
  accent,
  motionMode = "always",
  className,
}: {
  heroId: string;
  role: Role;
  accent: string;
  motionMode?: "always" | "hover" | "none";
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const rand = mulberry32(hashSeed(heroId));
  const tickCount = 10 + Math.floor(rand() * 10);
  const ticks = Array.from({ length: tickCount }, (_, i) => {
    const deg = (i / tickCount) * 360;
    const long = rand() > 0.55;
    const [x1, y1] = pt(93, deg);
    const [x2, y2] = pt(long ? 105 : 99, deg);
    return { x1: f(x1), y1: f(y1), x2: f(x2), y2: f(y2), long };
  });
  const arcs = Array.from({ length: 3 }, (_, i) => {
    const s = rand() * 360;
    const len = 35 + rand() * 90;
    const r = 76 + i * 0;
    const [x1, y1] = pt(r, s);
    const [x2, y2] = pt(r, s + len);
    return `M${f(x1)} ${f(y1)} A${r} ${r} 0 ${len > 180 ? 1 : 0} 1 ${f(x2)} ${f(y2)}`;
  });
  const chevrons = 1 + Math.floor(rand() * 3);
  const Icon = getHeroIcon(heroId);

  const spinA =
    motionMode === "always" ? "animate-spin-slow" : motionMode === "hover" ? "group-hover:animate-spin-slow" : "";
  const spinB =
    motionMode === "always"
      ? "animate-spin-slow-rev"
      : motionMode === "hover"
        ? "group-hover:animate-spin-slow-rev"
        : "";
  const origin = { transformOrigin: "100px 100px" } as const;

  return (
    <div className={cn("relative aspect-square", className)}>
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden>
        <defs>
          <linearGradient id={`g${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={accent} stopOpacity="1" />
            <stop offset="1" stopColor={accent} stopOpacity="0.25" />
          </linearGradient>
          <radialGradient id={`r${uid}`} cx="50%" cy="38%" r="75%">
            <stop offset="0" stopColor={accent} stopOpacity="0.4" />
            <stop offset="1" stopColor="#0A0D14" stopOpacity="0.95" />
          </radialGradient>
          <filter id={`b${uid}`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>

        <path d={FRAME[role]} fill={accent} opacity="0.35" filter={`url(#b${uid})`} />

        <g className={spinA} style={origin}>
          <circle cx="100" cy="100" r="96" fill="none" stroke={accent} strokeOpacity="0.28" strokeDasharray="2 6" />
          {ticks.map((t, i) => (
            <line
              key={i}
              x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
              stroke={accent} strokeOpacity={t.long ? 0.9 : 0.4}
              strokeWidth={t.long ? 2.2 : 1.2} strokeLinecap="round"
            />
          ))}
        </g>

        <g className={spinB} style={origin}>
          {arcs.map((d, i) => (
            <path key={i} d={d} fill="none" stroke={accent} strokeOpacity={0.55 - i * 0.12} strokeWidth="2.5" strokeLinecap="round" />
          ))}
        </g>

        <path d={FRAME[role]} fill={`url(#r${uid})`} stroke={`url(#g${uid})`} strokeWidth="3" strokeLinejoin="round" />
        <path
          d={FRAME[role]}
          transform="translate(100 100) scale(0.82) translate(-100 -100)"
          fill="none" stroke={accent} strokeOpacity="0.45" strokeWidth="1.5"
        />
        {Array.from({ length: chevrons }, (_, i) => (
          <path
            key={i}
            d={`M74 ${152 + i * 9} L100 ${141 + i * 9} L126 ${152 + i * 9}`}
            fill="none" stroke={accent} strokeOpacity={0.85 - i * 0.22} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          />
        ))}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center pb-[4%]">
        <Icon
          className="h-[34%] w-[34%] text-paper"
          strokeWidth={1.7}
          style={{ filter: `drop-shadow(0 0 10px ${accent})` }}
        />
      </div>
    </div>
  );
}
