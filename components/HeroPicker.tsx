"use client";

import { useMemo, useRef, useState } from "react";
import { Search, X, ChevronDown } from "lucide-react";
import { Hero } from "@/data/types";
import { HeroPhoto } from "./HeroPhoto";
import { DifficultyBadge } from "./DifficultyBadge";
import { cn } from "@/lib/utils";

/** Searchable hero combobox used to fill a comparison slot. */
export function HeroPicker({
  heroes,
  exclude,
  onPick,
  label,
}: {
  heroes: Hero[];
  exclude: string[];
  onPick: (heroId: string) => void;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const options = useMemo(() => {
    const pool = heroes.filter((h) => !exclude.includes(h.id));
    const query = q.trim().toLowerCase();
    if (!query) return pool.slice(0, 8);
    return pool
      .filter((h) => h.name.toLowerCase().includes(query) || h.nameMn.toLowerCase().includes(query))
      .slice(0, 8);
  }, [heroes, exclude, q]);

  return (
    <div ref={ref} className="relative">
      <div className="flex aspect-square w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-line bg-panel/50 p-6 text-center">
        <Search size={22} className="text-fog" />
        <p className="font-body text-sm text-fog">{label}</p>
        <button
          onClick={() => setOpen(true)}
          className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-line bg-panel px-4 py-2 font-body text-sm font-semibold text-paper transition-colors hover:border-ember/50"
        >
          Баатар сонгох <ChevronDown size={14} />
        </button>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-0 z-20 overflow-hidden rounded-2xl border border-ember/40 bg-panel shadow-2xl">
          <div className="relative border-b border-line/60 p-3">
            <Search size={15} className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 text-fog" />
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Баатрын нэр бичих..."
              className="focus-ring w-full rounded-lg border border-line bg-void py-2 pl-9 pr-9 font-body text-sm text-paper placeholder:text-fog"
            />
            <button
              onClick={() => { setOpen(false); setQ(""); }}
              aria-label="Хаах"
              className="focus-ring absolute right-6 top-1/2 -translate-y-1/2 text-fog hover:text-paper"
            >
              <X size={15} />
            </button>
          </div>
          <div className="max-h-72 overflow-y-auto p-2">
            {options.length === 0 ? (
              <p className="p-4 text-center font-body text-sm text-fog">Баатар олдсонгүй</p>
            ) : (
              options.map((h) => (
                <button
                  key={h.id}
                  onClick={() => { onPick(h.id); setOpen(false); setQ(""); }}
                  className={cn(
                    "focus-ring flex w-full items-center gap-3 rounded-lg p-2 text-left transition-colors hover:bg-panel2",
                  )}
                >
                  <HeroPhoto heroId={h.id} initials={h.initials} role={h.role} accent={h.colorAccent} variant="card" showCrest={false} className="h-10 w-10 shrink-0 rounded-lg" />
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-sm text-paper">{h.name}</span>
                    <span className="block font-body text-xs text-fog">{h.role} · {h.subRole}</span>
                  </span>
                  <DifficultyBadge difficulty={h.difficulty} size="sm" />
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
