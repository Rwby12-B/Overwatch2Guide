import type { Hero, Role, Difficulty } from "@/data/types";

/** Small, serialisable slice of a hero — enough to power the quick-search palette without shipping the full dataset to every page. */
export interface SearchEntry {
  id: string;
  name: string;
  nameMn: string;
  role: Role;
  subRole: string;
  difficulty: Difficulty;
  accent: string;
  /** ability + perk names, used for matching ("Blink" → Tracer) */
  terms: string[];
}

export function buildSearchIndex(heroes: Hero[]): SearchEntry[] {
  return heroes
    .map((h) => ({
      id: h.id,
      name: h.name,
      nameMn: h.nameMn,
      role: h.role,
      subRole: h.subRole,
      difficulty: h.difficulty,
      accent: h.colorAccent,
      terms: [...h.abilities.map((a) => a.name), ...h.perks.minor.map((p) => p.name), ...h.perks.major.map((p) => p.name)],
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
