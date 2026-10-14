"use client";

import { useId } from "react";
import { motion, useReducedMotion, type TargetAndTransition, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";

export type ModeId = "control" | "escort" | "hybrid" | "push" | "flashpoint" | "stadium";

const MODE_LABEL_MN: Record<ModeId, string> = {
  control: "Control",
  escort: "Escort",
  hybrid: "Hybrid",
  push: "Push",
  flashpoint: "Flashpoint",
  stadium: "Stadium",
};

const BLUE = "#5aa2ff";
const RED = "#ff5c61";
const GOLD = "#ffd166";

export interface ModeVisualProps {
  mode: ModeId;
  className?: string;
}

export function ModeVisual({ mode, className }: ModeVisualProps) {
  const reduce = useReducedMotion();
  const patternId = `mg-${useId().replace(/:/g, "")}`;
  // Typed against framer-motion's own prop types (not Record<string, unknown> /
  // any) so this spreads cleanly onto <motion.*> elements without a TS error.
  const A = (
    animate: TargetAndTransition,
    transition: Transition,
  ): { animate?: TargetAndTransition; transition?: Transition } =>
    reduce ? {} : { animate, transition: { repeat: Infinity, ...transition } };

  return (
    <div className={cn("overflow-hidden rounded-lg border border-line/70 bg-void/70", className)}>
    <svg viewBox="0 0 240 90" className="block w-full" role="img" aria-label={`${MODE_LABEL_MN[mode]} горимын схем`}>
      <defs>
        <pattern id={patternId} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="#fff" strokeOpacity="0.045" />
        </pattern>
      </defs>
      <rect width="240" height="90" fill={`url(#${patternId})`} />

      {mode === "control" && (
        <>
          <circle cx="120" cy="45" r="28" fill="none" stroke="#fff" strokeOpacity="0.12" strokeWidth="6" />
          <motion.circle
            cx="120" cy="45" r="28" fill="none" stroke={BLUE} strokeWidth="6" strokeLinecap="round"
            transform="rotate(-90 120 45)" initial={{ pathLength: reduce ? 0.7 : 0 }}
            {...A({ pathLength: [0, 1, 1] }, { duration: 4, ease: "linear", times: [0, 0.85, 1] })}
          />
          <circle cx="120" cy="45" r="6" fill={GOLD} />
          {[[70, 30], [70, 60], [170, 45]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="5" fill={i < 2 ? BLUE : RED} fillOpacity="0.9" />
          ))}
        </>
      )}

      {mode === "escort" && (
        <>
          <line x1="20" y1="50" x2="220" y2="50" stroke="#fff" strokeOpacity="0.2" strokeWidth="3" strokeDasharray="4 5" />
          {[95, 160, 220].map((x) => (
            <path key={x} d={`M${x} 38 l7 7 l-7 7 l-7 -7 z`} fill={GOLD} fillOpacity="0.85" />
          ))}
          <motion.g initial={{ x: 0 }} {...A({ x: [0, 190, 190] }, { duration: 5, ease: "linear", times: [0, 0.9, 1] })}>
            <rect x="14" y="41" width="24" height="12" rx="3" fill={BLUE} />
            <circle cx="20" cy="56" r="3.5" fill="#fff" fillOpacity="0.8" />
            <circle cx="32" cy="56" r="3.5" fill="#fff" fillOpacity="0.8" />
          </motion.g>
        </>
      )}

      {mode === "hybrid" && (
        <>
          <circle cx="36" cy="45" r="16" fill="none" stroke="#fff" strokeOpacity="0.12" strokeWidth="5" />
          <motion.circle
            cx="36" cy="45" r="16" fill="none" stroke={BLUE} strokeWidth="5" strokeLinecap="round"
            transform="rotate(-90 36 45)" initial={{ pathLength: reduce ? 1 : 0 }}
            {...A({ pathLength: [0, 1, 1, 1] }, { duration: 6, ease: "linear", times: [0, 0.3, 0.9, 1] })}
          />
          <line x1="70" y1="50" x2="222" y2="50" stroke="#fff" strokeOpacity="0.2" strokeWidth="3" strokeDasharray="4 5" />
          <motion.g initial={{ x: 0 }} {...A({ x: [0, 0, 170, 170] }, { duration: 6, ease: "linear", times: [0, 0.32, 0.92, 1] })}>
            <rect x="60" y="41" width="24" height="12" rx="3" fill={BLUE} />
            <circle cx="66" cy="56" r="3.5" fill="#fff" fillOpacity="0.8" />
            <circle cx="78" cy="56" r="3.5" fill="#fff" fillOpacity="0.8" />
          </motion.g>
        </>
      )}

      {mode === "push" && (
        <>
          <rect x="14" y="22" width="5" height="46" rx="2" fill={BLUE} />
          <rect x="221" y="22" width="5" height="46" rx="2" fill={RED} />
          <line x1="24" y1="45" x2="216" y2="45" stroke="#fff" strokeOpacity="0.15" strokeDasharray="3 5" />
          <motion.g initial={{ x: 0 }} {...A({ x: [0, 55, -25, 40, 0] }, { duration: 6, ease: "easeInOut" })}>
            <rect x="106" y="34" width="28" height="22" rx="5" fill={GOLD} />
            <circle cx="114" cy="42" r="2.5" fill="#0e1530" />
            <circle cx="126" cy="42" r="2.5" fill="#0e1530" />
          </motion.g>
        </>
      )}

      {mode === "flashpoint" && (
        <>
          {[30, 75, 120, 165, 210].map((x, i) => (
            <g key={x}>
              <circle cx={x} cy="45" r="13" fill="none" stroke="#fff" strokeOpacity="0.15" strokeWidth="3" />
              <motion.circle
                cx={x} cy="45" r="8" fill={i === 2 ? GOLD : i % 2 ? RED : BLUE}
                initial={{ opacity: reduce ? 0.9 : 0.1 }}
                {...A({ opacity: [0.1, 1, 1, 0.1] }, { duration: 6, ease: "easeInOut", times: [0, 0.1, 0.8, 1], delay: [2, 0, 1, 3, 4][i] * 0.9 })}
              />
            </g>
          ))}
        </>
      )}

      {mode === "stadium" && (
        <>
          {Array.from({ length: 7 }, (_, i) => (
            <motion.rect
              key={i} x={22 + i * 30} y="30" width="24" height="30" rx="4"
              fill={i % 3 === 1 ? RED : BLUE} initial={{ opacity: reduce ? 0.9 : 0.15 }}
              {...A({ opacity: [0.15, 1, 1, 0.15] }, { duration: 7, ease: "easeInOut", times: [0, 0.1, 0.85, 1], delay: i * 0.6 })}
            />
          ))}
          <text x="120" y="80" textAnchor="middle" fontSize="9" fill="#8e9ac0">Best of 7</text>
        </>
      )}
    </svg>
    </div>
  );
}
