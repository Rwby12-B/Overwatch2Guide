import { heroes } from "@/data/heroes";
import { HeroGrid } from "@/components/HeroGrid";
import { Role, Difficulty } from "@/data/types";

const VALID_ROLES: Role[] = ["Tank", "Damage", "Support"];
const VALID_DIFFICULTIES: Difficulty[] = ["beginner", "intermediate", "advanced"];

export const metadata = { title: "Бүх баатар — Overwatch Mongolia" };

export default function HeroesPage({
  searchParams,
}: {
  searchParams: { role?: string; q?: string; difficulty?: string };
}) {
  const initialRole = VALID_ROLES.includes(searchParams.role as Role) ? (searchParams.role as Role) : "All";
  const initialDifficulty = VALID_DIFFICULTIES.includes(searchParams.difficulty as Difficulty)
    ? (searchParams.difficulty as Difficulty)
    : "All";
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-hexgrid opacity-60 [mask-image:linear-gradient(#000,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-12 md:px-8">
        <h1 className="font-display text-5xl text-paper sm:text-6xl">Бүх баатар</h1>
        <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-fog">
          Нэр, чадвар, Perk, role эсвэл sub-role-оор хайж, filter ашиглан хайж буй баатраа хурдан ол.
        </p>
        <div className="mt-6">
          <HeroGrid
            heroes={heroes}
            initialRole={initialRole}
            initialQuery={searchParams.q ?? ""}
            initialDifficulty={initialDifficulty}
          />
        </div>
      </div>
    </div>
  );
}
