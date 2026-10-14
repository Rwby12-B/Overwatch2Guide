import { CSSProperties } from "react";
import { Role } from "@/data/types";
import { cn } from "@/lib/utils";
import { HeroEmblem } from "./HeroEmblem";
import { HeroBust } from "./HeroBust";

const ROLE_RING: Record<Role, string> = {
  Tank: "#4cc3ff",
  Damage: "#ff5c61",
  Support: "#46d69c",
};

/**
 * Hero portrait card: original illustrated bust (see HeroBust) as the main
 * image, a hex-grid backdrop, and the hero's emblem as a small corner crest.
 * No Blizzard artwork is used anywhere in this component.
 */
export function HeroPortrait({
  heroId,
  initials,
  accent,
  role,
  className,
  ringed = false,
  motionMode = "none",
  showCrest = true,
}: {
  heroId: string;
  initials: string;
  accent: string;
  role: Role;
  className?: string;
  ringed?: boolean;
  motionMode?: "always" | "hover" | "none";
  showCrest?: boolean;
  inset?: string;
}) {
  const style: CSSProperties = {
    background: `radial-gradient(90% 90% at 30% 15%, ${accent}44 0%, #0e1530 68%)`,
    ...(ringed ? { boxShadow: `inset 0 0 0 1px ${ROLE_RING[role]}55` } : {}),
  };
  return (
    <div className={cn("relative overflow-hidden rounded-2xl", className)} style={style}>
      <div className="absolute inset-0 bg-hexgrid opacity-60" />
      <HeroBust heroId={heroId} role={role} accent={accent} className="absolute inset-0 h-full w-full" />
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(0deg, ${accent}22 0%, transparent 35%)` }}
      />
      {showCrest && (
        <div className="absolute right-2 top-2 h-9 w-9 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
          <HeroEmblem heroId={heroId} role={role} accent={accent} motionMode={motionMode} className="h-full w-full" />
        </div>
      )}
      <span
        className="pointer-events-none absolute -bottom-2 -right-1 select-none font-display text-4xl leading-none opacity-[0.14]"
        style={{ color: accent }}
        aria-hidden
      >
        {initials}
      </span>
    </div>
  );
}
