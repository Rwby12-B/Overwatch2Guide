import { Scale } from "lucide-react";
import { getHeroBySlug } from "@/data/heroes";
import { ComparePanel } from "@/components/ComparePanel";

export const metadata = { title: "Баатар харьцуулах — Overwatch Mongolia" };

export default function ComparePage({
  searchParams,
}: {
  searchParams: { a?: string; b?: string; c?: string };
}) {
  const initial: (string | null)[] = [searchParams.a, searchParams.b, searchParams.c].map((id) =>
    id && getHeroBySlug(id) ? id : null,
  );
  while (initial.length > 2 && initial[initial.length - 1] === null) initial.pop();

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-hexgrid opacity-70 [mask-image:linear-gradient(#000,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-5 py-12 md:px-8">
        <h1 className="mt-2 font-display text-4xl text-paper sm:text-5xl">Баатар харьцуулах</h1>
        <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-fog">
          Хоёр (эсвэл гурван) баатрыг сонгоод role, sub-role, хэцүү зэрэг, чадвар, Perk, Passive-ийг
          зэрэгцүүлэн харьцуул.
        </p>

        <div className="mt-10">
          <ComparePanel initial={initial.length ? initial : [null, null]} />
        </div>
      </div>
    </div>
  );
}
