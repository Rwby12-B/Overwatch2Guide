"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Hero, Role, Difficulty } from "@/data/types";
import { difficultyInfo, difficultyOrder } from "@/data/difficulty";
import { HeroCard } from "./HeroCard";
import { FilterBar } from "./FilterBar";
import { SearchBar } from "./SearchBar";
import { DifficultyPips } from "./DifficultyPips";

export function HeroGrid({
  heroes,
  initialRole = "All",
  initialQuery = "",
  initialDifficulty = "All",
}: {
  heroes: Hero[];
  initialRole?: Role | "All";
  initialQuery?: string;
  initialDifficulty?: Difficulty | "All";
}) {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery);
  const [role, setRole] = useState<Role | "All">(initialRole);
  const [sub, setSub] = useState("All");
  const [difficulty, setDifficulty] = useState<Difficulty | "All">(initialDifficulty);
  const [sort, setSort] = useState<"name" | "role">("name");

  // Keep the URL in sync so any filtered view can be bookmarked or shared in chat.
  useEffect(() => {
    const p = new URLSearchParams();
    if (role !== "All") p.set("role", role);
    if (difficulty !== "All") p.set("difficulty", difficulty);
    if (query.trim()) p.set("q", query.trim());
    const qs = p.toString();
    window.history.replaceState(null, "", qs ? `${pathname}?${qs}` : pathname);
  }, [role, difficulty, query, pathname]);

  const counts = useMemo(() => {
    const c: Record<Role | "All", number> = { All: heroes.length, Tank: 0, Damage: 0, Support: 0 };
    heroes.forEach((h) => (c[h.role] += 1));
    return c;
  }, [heroes]);

  const subOptions = useMemo(() => {
    const pool = role === "All" ? heroes : heroes.filter((h) => h.role === role);
    return Array.from(new Set(pool.map((h) => h.subRole))).sort();
  }, [heroes, role]);

  const filtered = useMemo(() => {
    let list = heroes;
    if (role !== "All") list = list.filter((h) => h.role === role);
    if (sub !== "All") list = list.filter((h) => h.subRole === sub);
    if (difficulty !== "All") list = list.filter((h) => h.difficulty === difficulty);
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (h) =>
          h.name.toLowerCase().includes(q) ||
          h.nameMn.toLowerCase().includes(q) ||
          h.role.toLowerCase().includes(q) ||
          h.subRole.toLowerCase().includes(q) ||
          h.abilities.some((a) => a.name.toLowerCase().includes(q)) ||
          [...h.perks.minor, ...h.perks.major].some((p) => p.name.toLowerCase().includes(q)),
      );
    }
    return [...list].sort((a, b) =>
      sort === "role" ? a.role.localeCompare(b.role) || a.name.localeCompare(b.name) : a.name.localeCompare(b.name),
    );
  }, [heroes, query, role, sub, difficulty, sort]);

  const clear = () => {
    setRole("All");
    setSub("All");
    setDifficulty("All");
    setSort("name");
    setQuery("");
  };
  const dirty = role !== "All" || sub !== "All" || difficulty !== "All" || sort !== "name" || query !== "";

  return (
    <div>
      {/* Sticky on desktop so filters stay in reach while scrolling the roster */}
      <div className="z-30 -mx-5 border-b border-line/60 bg-void/90 px-5 py-3 backdrop-blur-md md:sticky md:top-16 md:-mx-8 md:px-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <div className="w-full md:w-64">
            <SearchBar value={query} onChange={setQuery} placeholder="Баатар, чадвар хайх..." />
          </div>
          <FilterBar
            role={role}
            onRole={(r) => { setRole(r); setSub("All"); }}
            counts={counts}
            sub={sub}
            onSub={setSub}
            subOptions={subOptions}
            difficulty={difficulty}
            onDifficulty={setDifficulty}
            sort={sort}
            onSort={setSort}
            dirty={dirty}
            onClear={clear}
          />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <p className="font-body text-sm text-fog" aria-live="polite">
          <span className="font-display text-xl text-paper">{filtered.length}</span> баатар олдлоо
        </p>
        <div className="hidden items-center gap-4 font-body text-xs text-fog sm:flex" aria-label="Хэцүү зэргийн тайлбар">
          Хэцүү зэрэг:
          {difficultyOrder.map((d) => (
            <span key={d} className="inline-flex items-center gap-1.5">
              <DifficultyPips difficulty={d} /> {difficultyInfo[d].labelMn}
            </span>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 flex flex-col items-center gap-3 text-center">
          <p className="font-display text-3xl text-paper">Баатар олдсонгүй</p>
          <p className="max-w-sm font-body text-sm text-fog">
            Хайлтын үгээ англиар бичих эсвэл filter-ээ багасгаж үзнэ үү. Жишээ нь: Tracer, Blink.
          </p>
          <button
            onClick={clear}
            className="focus-ring mt-2 rounded-lg bg-ember px-5 py-2.5 font-body text-sm font-bold text-void transition-transform hover:scale-[1.03]"
          >
            Бүх баатрыг харуулах
          </button>
        </div>
      ) : (
        <motion.div layout className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((h, i) => (
              <HeroCard hero={h} key={h.id} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
