"use client";

import { useState } from "react";
import { ChevronDown, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Perk } from "@/data/types";
import { cn } from "@/lib/utils";

export function PerkCard({ perk, tier, index = 0 }: { perk: Perk; tier: "minor" | "major"; index?: number }) {
  const [open, setOpen] = useState(false);
  const major = tier === "major";
  const color = major ? "#ffa620" : "#5aa2ff";
  const badge = perk.name
    .split(/[\s'-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={cn("overflow-hidden rounded-xl border bg-panel2", major ? "border-ember/40" : "border-line")}
      style={major ? { boxShadow: "0 0 30px -18px #ffa620" } : undefined}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="focus-ring flex w-full items-start gap-3 p-4 text-left"
      >
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center font-display text-sm text-void"
          style={{
            background: color,
            clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
          }}
          aria-hidden
        >
          {badge}
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex items-center gap-2">
            <span className="font-display text-[15px] text-paper">{perk.name}</span>
          </span>
          <span className="mt-1 block font-body text-sm leading-relaxed text-mist">{perk.descriptionMn}</span>
        </span>
        <ChevronDown size={16} className={cn("mt-1 shrink-0 text-fog transition-transform", open && "rotate-180")} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="space-y-2 border-t border-line/60 px-4 pb-4 pt-3 font-body text-sm leading-relaxed text-mist">
              <p>
                <span className="text-fog">Gameplay-д: </span>
                {perk.effectMn}
              </p>
              {perk.whenUsefulMn && (
                <p className="text-xs text-fog">Хэзээ сонгох вэ: {perk.whenUsefulMn}</p>
              )}
              {!perk.verified && (
                <p className="flex items-center gap-1.5 text-[11px] text-amber">
                  <AlertCircle size={12} /> Албан ёсоор бүрэн баталгаажаагүй.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
