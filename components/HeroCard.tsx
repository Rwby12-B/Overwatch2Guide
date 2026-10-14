"use client";

import Link from "next/link";
import { CSSProperties } from "react";
import { motion } from "framer-motion";
import { Hero } from "@/data/types";
import { ROLE_META } from "@/lib/roleMeta";
import { HeroPhoto } from "./HeroPhoto";
import { DifficultyPips } from "./DifficultyPips";
import { StatusBadge } from "./StatusBadge";

/**
 * Poster-style roster card: portrait fills the card, name sits on it.
 * Role is encoded twice on purpose (corner icon + colored bottom edge) so it
 * reads without text; difficulty is the signal-bar marker top right.
 */
export function HeroCard({ hero }: { hero: Hero; index?: number }) {
  const R = ROLE_META[hero.role];
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Link
        href={`/heroes/${hero.id}`}
        style={{ ["--a" as string]: hero.colorAccent } as CSSProperties}
        className="focus-ring group relative block aspect-[4/5] overflow-hidden rounded-xl border border-line bg-panel transition-colors duration-200 hover:border-[var(--a)]"
      >
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]">
          <HeroPhoto
            heroId={hero.id}
            initials={hero.initials}
            accent={hero.colorAccent}
            role={hero.role}
            variant="card"
            showCrest={false}
            className="h-full w-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />

        <span
          className="absolute left-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-md bg-void/70 backdrop-blur"
          style={{ color: R.color }}
          title={hero.role}
        >
          <R.icon size={15} aria-label={hero.role} />
        </span>
        <span className="absolute right-2.5 top-2.5 flex h-7 items-center rounded-md bg-void/70 px-2 backdrop-blur">
          <DifficultyPips difficulty={hero.difficulty} />
        </span>

        <StatusBadge heroId={hero.id} />

        <div className="absolute inset-x-0 bottom-0 px-3.5 pb-4">
          <h3 className="font-display text-2xl uppercase leading-none text-paper">{hero.name}</h3>
          <p className="mt-1 font-body text-xs text-mist">{hero.nameMn}</p>
          <p className="font-body text-[11px] text-fog">{hero.subRole}</p>
        </div>
        <span className="absolute inset-x-0 bottom-0 h-[3px]" style={{ background: R.color }} />
      </Link>
    </motion.div>
  );
}
