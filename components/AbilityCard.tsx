"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Zap, AlertCircle } from "lucide-react";
import { Ability } from "@/data/types";
import { classifyAbility } from "@/lib/demoKind";
import { cn } from "@/lib/utils";
import { AbilityDemo } from "./AbilityDemo";

const TYPE_STYLE: Record<string, string> = {
  "Primary Fire": "#5aa2ff",
  "Secondary Fire": "#9cc3ff",
  Ability: "#ffd166",
  Movement: "#4ADEDE",
  Defensive: "#46d69c",
  Ultimate: "#ffa620",
};

/**
 * A hero can have 8+ looping demos. Only the ones near the viewport are mounted,
 * so a phone isn't animating a dozen SVGs at once. The slot keeps its height so
 * nothing jumps when a demo mounts or unmounts.
 */
function LazyDemo(props: React.ComponentProps<typeof AbilityDemo>) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "160px" });
  const [h, setH] = useState(0);
  useEffect(() => {
    if (inView && ref.current) setH(ref.current.getBoundingClientRect().height);
  }, [inView]);
  return (
    <div ref={ref} style={{ minHeight: h || 120 }}>
      {inView && <AbilityDemo {...props} />}
    </div>
  );
}

export function AbilityCard({
  ability,
  accent,
  wide = false,
}: {
  ability: Ability;
  accent: string;
  index?: number;
  /** Ultimates get a full-width, side-by-side layout when the grid has room for it. */
  wide?: boolean;
}) {
  const color = TYPE_STYLE[ability.type] ?? "#bcc5e3";
  const kind = classifyAbility(ability);
  const isUlt = ability.type === "Ultimate";
  const allyTarget = ability.id === "lw-grip" || ability.id === "jc-lifeline";
  const keys = ability.keybind ? ability.keybind.split(/\s*\/\s*/) : [];
  const stats = (
    [
      ["Cooldown", ability.cooldown],
      ["Damage", ability.damage],
      ["Healing", ability.healing],
      ["Duration", ability.duration],
      ["Range", ability.range],
    ] as [string, string | undefined][]
  ).filter((s): s is [string, string] => Boolean(s[1]));

  return (
    <article
      id={ability.id}
      className={cn("relative scroll-mt-36 overflow-hidden rounded-xl border bg-panel", wide && "md:col-span-2 md:grid md:grid-cols-[1.05fr_1fr]")}
      style={{
        borderColor: isUlt ? `${color}77` : "#27345f",
        boxShadow: isUlt ? `0 0 40px -14px ${color}` : undefined,
      }}
    >
      <div>
        <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
        <div className="p-3 pb-0 md:pb-3">
          <LazyDemo kind={kind} color={color} heroColor={accent} allyTarget={allyTarget} />
        </div>
      </div>

      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="font-display text-2xl leading-tight text-paper">{ability.name}</h4>
          {keys.map((k) => (
            <kbd
              key={k}
              className="rounded-md border border-line bg-panel2 px-2 py-0.5 font-body text-[11px] font-semibold text-mist shadow-[0_2px_0_#27345f]"
            >
              {k}
            </kbd>
          ))}
        </div>
        <p className="mt-0.5 font-body text-xs font-semibold" style={{ color }}>
          {ability.type}
        </p>

        <p className="mt-3 font-body text-sm leading-relaxed text-mist">{ability.descriptionMn}</p>

        {ability.tipMn && (
          <p className="mt-3 flex items-start gap-2 rounded-lg border border-amber/20 bg-amber/5 p-2.5 font-body text-xs leading-relaxed text-mist">
            <Zap size={14} className="mt-0.5 shrink-0 text-amber" />
            {ability.tipMn}
          </p>
        )}

        {stats.length > 0 && (
          <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 border-t border-line/60 pt-3 sm:grid-cols-3">
            {stats.map(([k, v]) => (
              <div key={k}>
                <dt className="font-body text-[11px] text-fog">{k}</dt>
                <dd className="font-body text-sm font-semibold text-paper">{v}</dd>
              </div>
            ))}
          </dl>
        )}

        {!ability.verified && (
          <p className="mt-3 flex items-center gap-1.5 font-body text-[11px] text-amber">
            <AlertCircle size={12} />
            Энэ чадварын дэлгэрэнгүй нь албан ёсоор бүрэн баталгаажаагүй байна.
          </p>
        )}
      </div>
    </article>
  );
}
