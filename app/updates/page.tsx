import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { getHeroBySlug } from "@/data/heroes";
import { season5 as u, OFFICIAL_PATCH_NOTES } from "@/data/updates";
import type { Hero, Role } from "@/data/types";
import { ROLE_META, ROLE_ORDER } from "@/lib/roleMeta";
import { HeroCard } from "@/components/HeroCard";
import { HeroPhoto } from "@/components/HeroPhoto";

export const metadata = { title: `${u.name} — Overwatch Mongolia` };

const NAV = [
  { id: "new", label: "Шинэ баатар" },
  { id: "reworks", label: "Rework" },
  { id: "balance", label: "Тэнцвэржүүлэлт" },
  { id: "places", label: "Газар ба горим" },
  { id: "other", label: "Бусад" },
];

const SECTION = "scroll-mt-32 border-b border-line/60 py-12";

export default function UpdatesPage() {
  const newHeroes = u.newHeroes.map(getHeroBySlug).filter((h): h is Hero => Boolean(h));

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-hexgrid opacity-60 [mask-image:linear-gradient(#000,transparent)]" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-80"
        style={{ background: "radial-gradient(50% 80% at 80% 0%, rgba(155,28,49,0.28), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-12 md:px-8">
        <p className="font-body text-sm font-semibold text-ember">{u.seasonLabel}</p>
        <h1 className="mt-1 text-balance font-display text-5xl text-paper sm:text-6xl lg:text-7xl">{u.name}</h1>
        <p className="mt-3 font-body text-sm text-fog">{u.dateMn}-нд нээгдсэн</p>
        <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-mist">{u.introMn}</p>
        <a
          href={OFFICIAL_PATCH_NOTES}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-4 inline-flex items-center gap-1.5 font-body text-sm text-fog underline-offset-4 hover:text-paper hover:underline"
        >
          Эх сурвалж: Blizzard-ийн албан ёсны patch notes <ExternalLink size={13} />
        </a>

        <nav
          aria-label="Шинэчлэлийн хэсгүүд"
          className="no-scrollbar sticky top-16 z-30 -mx-5 mt-8 flex gap-1 overflow-x-auto border-b border-line/60 bg-void/90 px-5 py-2.5 backdrop-blur-md md:mx-0 md:rounded-lg md:border md:px-3"
        >
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="focus-ring shrink-0 rounded-md px-3 py-1.5 font-body text-sm font-semibold text-mist transition-colors hover:bg-white/5 hover:text-paper"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* New hero */}
        <section id="new" className={SECTION}>
          <h2 className="font-display text-4xl text-paper">Шинэ баатар</h2>
          {newHeroes.map((h) => (
            <div key={h.id} className="mt-6 grid gap-8 md:grid-cols-[230px_1fr]">
              <div className="max-w-[230px]">
                <HeroCard hero={h} />
              </div>
              <div>
                <p className="font-body text-base leading-relaxed text-mist">{h.overview?.summaryMn}</p>
                <dl className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {h.abilities.map((a) => (
                    <div key={a.id} className="border-l-2 pl-3" style={{ borderColor: `${h.colorAccent}cc` }}>
                      <dt className="font-display text-xl text-paper">
                        {a.name} <span className="font-body text-xs font-medium text-fog">{a.type}</span>
                      </dt>
                      <dd className="mt-0.5 font-body text-sm leading-relaxed text-mist">{a.descriptionMn}</dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href={`/heroes/${h.id}`}
                  className="focus-ring mt-6 inline-flex items-center gap-1.5 rounded-lg bg-ember px-5 py-2.5 font-body text-sm font-bold text-void transition-transform hover:scale-[1.03]"
                >
                  {h.name}-ийн бүрэн хуудас <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* Reworks */}
        <section id="reworks" className={SECTION}>
          <h2 className="font-display text-4xl text-paper">Rework хийгдсэн баатрууд</h2>
          <p className="mt-1 font-body text-sm text-fog">Өмнөх нь хэвтээ зураастай, шинэ нь тод бичигдсэн.</p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {u.reworkDetails.map((r) => {
              const h = getHeroBySlug(r.heroId);
              if (!h) return null;
              return (
                <article key={r.heroId} className="rounded-2xl border border-line bg-panel p-5">
                  <div className="flex items-center gap-4">
                    <HeroPhoto
                      heroId={h.id}
                      initials={h.initials}
                      accent={h.colorAccent}
                      role={h.role}
                      variant="card"
                      showCrest={false}
                      className="h-16 w-16 shrink-0 rounded-xl"
                    />
                    <div>
                      <h3 className="font-display text-3xl leading-none text-paper">{h.name}</h3>
                      <p className="mt-1 font-body text-xs text-fog">
                        {h.role} · {h.subRole}
                      </p>
                    </div>
                    <Link
                      href={`/heroes/${h.id}`}
                      className="focus-ring ml-auto inline-flex shrink-0 items-center gap-1 font-body text-sm font-semibold text-ember hover:underline"
                    >
                      Хуудас <ArrowRight size={14} />
                    </Link>
                  </div>
                  <p className="mt-4 font-body text-sm leading-relaxed text-mist">{r.devNoteMn}</p>
                  <ul className="mt-4 divide-y divide-line/60 border-t border-line/60">
                    {r.rows.map((row, i) => (
                      <li key={i} className="grid grid-cols-[6.5rem_1fr] gap-x-3 py-2.5 font-body text-sm">
                        <span className="text-fog">{row.label}</span>
                        <span className="text-paper">
                          {row.from && (
                            <>
                              <span className="text-fog line-through decoration-fog/50">{row.from}</span>
                              <ArrowRight size={13} className="mx-1.5 inline -translate-y-px text-ember" aria-label="болсон" />
                            </>
                          )}
                          <span className="font-semibold">{row.to}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        {/* Balance */}
        <section id="balance" className={SECTION}>
          <h2 className="font-display text-4xl text-paper">Тэнцвэржүүлэлт</h2>
          <div className="mt-6 space-y-10">
            {ROLE_ORDER.map((role: Role) => {
              const entries = u.balance.filter((b) => b.role === role);
              if (!entries.length) return null;
              const R = ROLE_META[role];
              return (
                <div key={role}>
                  <h3 className="flex items-center gap-2 font-display text-2xl" style={{ color: R.color }}>
                    <R.icon size={20} /> {R.label}
                  </h3>
                  <ul className="mt-2 divide-y divide-line/60 border-t border-line/60">
                    {entries.map((b) => {
                      const h = getHeroBySlug(b.heroId);
                      if (!h) return null;
                      return (
                        <li key={b.heroId} className="grid gap-x-6 gap-y-1 py-4 sm:grid-cols-[11rem_1fr]">
                          <Link href={`/heroes/${h.id}`} className="focus-ring flex items-center gap-3 self-start">
                            <HeroPhoto
                              heroId={h.id}
                              initials={h.initials}
                              accent={h.colorAccent}
                              role={h.role}
                              variant="card"
                              showCrest={false}
                              className="h-10 w-10 shrink-0 rounded-lg"
                            />
                            <span className="font-display text-xl text-paper hover:text-ember">{h.name}</span>
                          </Link>
                          <ul className="space-y-1 font-body text-sm leading-relaxed text-mist">
                            {b.lines.map((l, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="text-ember">▸</span>
                                {l}
                              </li>
                            ))}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Maps & modes */}
        <section id="places" className={SECTION}>
          <h2 className="font-display text-4xl text-paper">Газрын зураг, горим, event</h2>
          <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {u.places.map((p) => (
              <div key={p.title} className="bg-void p-6">
                <h3 className="font-display text-2xl text-paper">{p.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-mist">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Everything else */}
        <section id="other" className="scroll-mt-32 pt-12">
          <h2 className="font-display text-4xl text-paper">Бусад өөрчлөлт</h2>
          <div className="mt-6 grid gap-10 md:grid-cols-2">
            {u.other.map((g) => (
              <div key={g.title} className={g.items.length > 5 ? "md:col-span-2" : ""}>
                <h3 className="font-display text-2xl text-paper">{g.title}</h3>
                <ul className="mt-2 space-y-2 border-l-2 border-line pl-4 font-body text-sm leading-relaxed text-mist">
                  {g.items.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
