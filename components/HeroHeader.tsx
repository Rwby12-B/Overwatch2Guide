"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Swords, Sparkles, Layers } from "lucide-react";
import { Hero } from "@/data/types";
import { HeroEmblem } from "./HeroEmblem";
import { HeroPhoto } from "./HeroPhoto";
import { RoleBadge } from "./RoleBadge";
import { DifficultyBadge } from "./DifficultyBadge";
import { StatusChip } from "./StatusBadge";

export function HeroHeader({ hero }: { hero: Hero }) {
  const perkCount = hero.perks.minor.length + hero.perks.major.length;
  return (
    <section
      className="relative overflow-hidden border-b border-line/60"
      style={{ background: `linear-gradient(180deg, ${hero.colorAccent}30 0%, #090e1f 85%)` }}
    >
      <div className="absolute inset-0 bg-hexgrid opacity-90" />
      <div
        className="pointer-events-none absolute -right-32 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: `${hero.colorAccent}33` }}
      />
      <span
        className="pointer-events-none absolute -bottom-6 left-0 select-none whitespace-nowrap font-display text-[11rem] uppercase leading-none opacity-[0.05] md:text-[20rem]"
        aria-hidden
      >
        {hero.name}
      </span>

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 pb-12 pt-8 md:grid-cols-[1.25fr_1fr] md:px-8 md:pb-16">
        <div>
          <Link href="/heroes" className="focus-ring inline-flex items-center gap-1.5 font-body text-sm text-fog hover:text-paper">
            <ArrowLeft size={15} /> Бүх баатар
          </Link>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mt-6">
            <div className="flex flex-wrap items-center gap-2">
              <RoleBadge role={hero.role} subRoleLabel={hero.subRole} />
              <DifficultyBadge difficulty={hero.difficulty} />
              <StatusChip heroId={hero.id} />
            </div>
            <h1 className="mt-3 font-display text-6xl uppercase leading-none text-paper sm:text-7xl md:text-8xl">
              {hero.name}
            </h1>
            <p className="mt-2 font-body text-lg" style={{ color: hero.colorAccent }}>{hero.nameMn}</p>
            {hero.overview?.summaryMn && (
              <p className="mt-5 max-w-xl font-body text-[15px] leading-relaxed text-mist">{hero.overview.summaryMn}</p>
            )}
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            {[
              { icon: Swords, label: "Чадвар", value: hero.abilities.length },
              { icon: Sparkles, label: "Perk", value: perkCount },
              { icon: Layers, label: "Passive", value: hero.passives.length + 1 },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3 rounded-lg border border-line bg-panel/70 px-4 py-2.5 backdrop-blur">
                <Icon size={18} style={{ color: hero.colorAccent }} />
                <div>
                  <dd className="font-display text-xl leading-none text-paper">{value}</dd>
                  <dt className="font-body text-xs text-fog">{label}</dt>
                </div>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 90, damping: 16 }}
          className="relative mx-auto w-full max-w-[280px] md:max-w-[340px]"
        >
          <div
            className="overflow-hidden rounded-2xl border shadow-2xl"
            style={{ borderColor: `${hero.colorAccent}40`, boxShadow: `0 30px 80px -30px ${hero.colorAccent}66` }}
          >
            <HeroPhoto
              heroId={hero.id} initials={hero.initials} role={hero.role} accent={hero.colorAccent}
              variant="bust" showCrest={false} className="aspect-square w-full"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 h-16 w-16 animate-drift drop-shadow-[0_6px_16px_rgba(0,0,0,0.6)]">
            <HeroEmblem heroId={hero.id} role={hero.role} accent={hero.colorAccent} motionMode="always" className="h-full w-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
