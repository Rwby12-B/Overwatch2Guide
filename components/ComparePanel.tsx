"use client";

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Plus, X, Swords, Sparkles, Layers, Gauge, type LucideIcon } from "lucide-react";
import { Hero } from "@/data/types";
import { heroes, getHeroBySlug } from "@/data/heroes";
import { difficultyInfo } from "@/data/difficulty";
import { HeroPicker } from "./HeroPicker";
import { HeroPhoto } from "./HeroPhoto";
import { RoleBadge } from "./RoleBadge";
import { DifficultyBadge } from "./DifficultyBadge";

const MAX_SLOTS = 3;

export function ComparePanel({ initial }: { initial: (string | null)[] }) {
  const [slots, setSlots] = useState<(string | null)[]>(() => {
    const base = [...initial];
    while (base.length < 2) base.push(null);
    return base.slice(0, MAX_SLOTS);
  });

  const picked = slots.filter(Boolean) as string[];
  const heroesInSlots = slots.map((id) => (id ? getHeroBySlug(id) : undefined));
  const filledCount = heroesInSlots.filter(Boolean).length;

  const setSlot = (i: number, id: string) => setSlots((s) => s.map((v, idx) => (idx === i ? id : v)));
  const clearSlot = (i: number) => setSlots((s) => s.map((v, idx) => (idx === i ? null : v)));
  const addSlot = () => setSlots((s) => (s.length < MAX_SLOTS ? [...s, null] : s));

  return (
    <div>
      <div className={`grid gap-5 ${slots.length === 3 ? "md:grid-cols-3" : "sm:grid-cols-2"}`}>
        {slots.map((id, i) => {
          const hero = id ? getHeroBySlug(id) : undefined;
          return (
            <div key={i} className="relative">
              {hero ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="overflow-hidden rounded-2xl border"
                  style={{ borderColor: `${hero.colorAccent}40` }}
                >
                  <div className="relative aspect-square">
                    <HeroPhoto
                      heroId={hero.id} initials={hero.initials} role={hero.role} accent={hero.colorAccent}
                      variant="bust" showCrest={false} className="h-full w-full"
                    />
                    <button
                      onClick={() => clearSlot(i)}
                      aria-label="Хасах"
                      className="focus-ring absolute right-2 top-2 rounded-md bg-void/70 p-1.5 text-paper backdrop-blur hover:bg-damage/80"
                    >
                      <X size={14} />
                    </button>
                  </div>
                  <div className="space-y-2 bg-panel p-4">
                    <h3 className="font-display text-xl text-paper">{hero.name}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      <RoleBadge role={hero.role} subRoleLabel={hero.subRole} size="sm" />
                      <DifficultyBadge difficulty={hero.difficulty} size="sm" />
                    </div>
                  </div>
                </motion.div>
              ) : (
                <HeroPicker heroes={heroes} exclude={picked} onPick={(hid) => setSlot(i, hid)} label={`${i + 1}-р баатар`} />
              )}
            </div>
          );
        })}

        {slots.length < MAX_SLOTS && (
          <button
            onClick={addSlot}
            className="focus-ring flex aspect-square w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-line/60 text-fog transition-colors hover:border-ember/40 hover:text-ember"
          >
            <Plus size={24} />
            <span className="font-body text-sm">Гурав дахь баатар нэмэх</span>
          </button>
        )}
      </div>

      {filledCount >= 2 && (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mt-12 space-y-10">
          <Row
            icon={Gauge}
            label="Хэцүү зэрэг"
            heroes={heroesInSlots}
            render={(h) => (
              <span style={{ color: difficultyInfo[h.difficulty].color }} className="font-display text-sm">
                {difficultyInfo[h.difficulty].labelMn}
              </span>
            )}
          />
          <Row
            icon={Swords}
            label="Чадварууд"
            heroes={heroesInSlots}
            render={(h) => (
              <ul className="space-y-1.5">
                {h.abilities.map((a) => (
                  <li key={a.id} className="font-body text-sm text-mist">
                    <span className="text-paper">{a.name}</span>{" "}
                    <span className="text-fog">· {a.type}</span>
                  </li>
                ))}
              </ul>
            )}
          />
          <Row
            icon={Sparkles}
            label="Perks"
            heroes={heroesInSlots}
            render={(h) => (
              <ul className="space-y-1.5">
                {[...h.perks.minor, ...h.perks.major].map((p) => (
                  <li key={p.id} className="font-body text-sm text-mist">
                    <span className="text-paper">{p.name}</span>
                  </li>
                ))}
              </ul>
            )}
          />
          <Row
            icon={Layers}
            label="Passives"
            heroes={heroesInSlots}
            render={(h) => (
              <ul className="space-y-1.5">
                <li className="font-body text-sm text-mist">
                  <span className="text-paper">{h.role}</span> <span className="text-fog">role passive</span>
                </li>
                {h.passives.map((p) => (
                  <li key={p.id} className="font-body text-sm text-mist">
                    <span className="text-paper">{p.name}</span>
                  </li>
                ))}
              </ul>
            )}
          />
        </motion.div>
      )}

      {filledCount < 2 && (
        <p className="mt-10 text-center font-body text-sm text-fog">
          Харьцуулахын тулд дор хаяж 2 баатар сонгоно уу.
        </p>
      )}
    </div>
  );
}

function Row({
  icon: Icon,
  label,
  heroes,
  render,
}: {
  icon: LucideIcon;
  label: string;
  heroes: (Hero | undefined)[];
  render: (h: Hero) => ReactNode;
}) {
  const cols = heroes.length === 3 ? "md:grid-cols-3" : "sm:grid-cols-2";
  return (
    <section className="border-t border-line/60 pt-8">
      <h3 className="flex items-center gap-2 font-display text-xl text-paper">
        <Icon size={18} className="text-ember" /> {label}
      </h3>
      <div className={`mt-4 grid gap-5 ${cols}`}>
        {heroes.map((h, i) =>
          h ? (
            <div key={h.id} className="rounded-xl border border-line bg-panel p-4">
              {render(h)}
            </div>
          ) : (
            <div key={i} className="rounded-xl border border-dashed border-line/50 p-4 font-body text-xs text-fog">
              —
            </div>
          ),
        )}
      </div>
    </section>
  );
}
