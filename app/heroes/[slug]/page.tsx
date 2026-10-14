import { notFound } from "next/navigation";
import Link from "next/link";
import { ThumbsUp, ThumbsDown, Lightbulb, ChevronLeft, ChevronRight, Info, Scale } from "lucide-react";
import { heroes, getHeroBySlug } from "@/data/heroes";
import { roles } from "@/data/roles";
import { subRoles } from "@/data/subroles";
import { HeroHeader } from "@/components/HeroHeader";
import { HeroTabNav } from "@/components/HeroTabNav";
import { AbilityCard } from "@/components/AbilityCard";
import { PerkCard } from "@/components/PerkCard";
import { PassiveCard } from "@/components/PassiveCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { HeroCard } from "@/components/HeroCard";

export function generateStaticParams() {
  return heroes.map((h) => ({ slug: h.id }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const hero = getHeroBySlug(params.slug);
  if (!hero) return {};
  return { title: `${hero.name} — Overwatch Mongolia` };
}

const TYPE_ORDER: Record<string, number> = {
  "Primary Fire": 0, "Secondary Fire": 1, Ability: 2, Movement: 3, Defensive: 4, Ultimate: 9,
};

export default function HeroDetailPage({ params }: { params: { slug: string } }) {
  const hero = getHeroBySlug(params.slug);
  if (!hero) notFound();

  const roleInfo = roles[hero.role];
  const subRoleInfo = subRoles[hero.subRole];
  const abilities = [...hero.abilities].sort((a, b) => (TYPE_ORDER[a.type] ?? 5) - (TYPE_ORDER[b.type] ?? 5));
  // Ultimate goes full-width only if that doesn't leave a hole in the 2-column grid above it.
  const wideUlt = abilities.filter((a) => a.type !== "Ultimate").length % 2 === 0;
  const others = heroes.filter((h) => h.id !== hero.id);
  const related = [
    ...others.filter((h) => hero.subRole !== "Тодорхойгүй" && h.subRole === hero.subRole),
    ...others.filter((h) => h.role === hero.role && h.subRole !== hero.subRole),
  ].slice(0, 4);
  const idx = heroes.findIndex((h) => h.id === hero.id);
  const prev = heroes[(idx - 1 + heroes.length) % heroes.length];
  const next = heroes[(idx + 1) % heroes.length];

  return (
    <div>
      <HeroHeader hero={hero} />

      <div className="mx-auto max-w-6xl px-5 py-8 md:px-8">
        <HeroTabNav />

        {/* Overview */}
        <AnimatedSection>
          <section id="overview" className="scroll-mt-32 py-10">
            <h2 className="font-display text-3xl text-paper">Тойм</h2>
            <p className="mt-4 max-w-3xl font-body text-[15px] leading-relaxed text-mist">{hero.overview?.playstyleMn}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-support/30 bg-support/5 p-5">
                <h3 className="flex items-center gap-2 font-display text-base text-support"><ThumbsUp size={15} /> Давуу тал</h3>
                <ul className="mt-3 space-y-2 font-body text-sm text-mist">
                  {hero.overview?.strengthsMn.map((s, i) => (
                    <li key={i} className="flex gap-2"><span className="text-support">▸</span>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-damage/30 bg-damage/5 p-5">
                <h3 className="flex items-center gap-2 font-display text-base text-damage"><ThumbsDown size={15} /> Сул тал</h3>
                <ul className="mt-3 space-y-2 font-body text-sm text-mist">
                  {hero.overview?.weaknessesMn.map((s, i) => (
                    <li key={i} className="flex gap-2"><span className="text-damage">▸</span>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Abilities */}
        <section id="abilities" className="scroll-mt-32 border-t border-line/60 py-10">
          <h2 className="font-display text-3xl text-paper">Чадварууд</h2>
          <p className="mt-2 flex items-start gap-2 font-body text-xs leading-relaxed text-fog">
            <Info size={14} className="mt-0.5 shrink-0" />
            Карт бүрийн animation нь чадвар хэрхэн ажилладгийг ойлгуулах схем дүрслэл — тоглоомын бодит бичлэг биш.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {abilities.map((a, i) => (
              <AbilityCard key={a.id} ability={a} accent={hero.colorAccent} index={i} wide={wideUlt && a.type === "Ultimate"} />
            ))}
          </div>
        </section>

        {/* Perks */}
        <section id="perks" className="scroll-mt-32 border-t border-line/60 py-10">
          <h2 className="font-display text-3xl text-paper">Perks</h2>
          <p className="mt-2 font-body text-xs text-fog">Perk дээр дарж дэлгэрэнгүйг харна. Тоглоомд 1 Minor + 1 Major сонгодог.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-display text-base text-signal">Minor Perks</h3>
              <div className="mt-3 space-y-3">
                {hero.perks.minor.map((p, i) => <PerkCard key={p.id} perk={p} tier="minor" index={i} />)}
              </div>
            </div>
            <div>
              <h3 className="font-display text-base text-ember">Major Perks</h3>
              <div className="mt-3 space-y-3">
                {hero.perks.major.map((p, i) => <PerkCard key={p.id} perk={p} tier="major" index={i} />)}
              </div>
            </div>
          </div>
        </section>

        {/* Passives */}
        <AnimatedSection>
          <section id="passives" className="scroll-mt-32 border-t border-line/60 py-10">
            <h2 className="font-display text-3xl text-paper">Passives</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {subRoleInfo && (
                <div className="rounded-xl border border-line bg-panel p-5">
                  <span className="font-body text-[11px] text-signal">Global Role Passive</span>
                  <h5 className="mt-1 font-display text-lg text-paper">{hero.role} — {subRoleInfo.nameMn}</h5>
                  <p className="mt-2 font-body text-sm leading-relaxed text-mist">{roleInfo.passiveMn}</p>
                  <p className="mt-2 font-body text-xs leading-relaxed text-fog">{subRoleInfo.passiveMn}</p>
                </div>
              )}
              {hero.passives.map((p) => (
                <PassiveCard key={p.id} passive={p} label="Hero Passive" />
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Tips */}
        <AnimatedSection>
          <section id="tips" className="scroll-mt-32 border-t border-line/60 py-10">
            <h2 className="font-display text-3xl text-paper">Tips</h2>
            <ul className="mt-6 space-y-3">
              {hero.overview?.tipsMn.map((t, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl border border-line bg-panel p-4 font-body text-sm leading-relaxed text-mist">
                  <Lightbulb size={16} className="mt-0.5 shrink-0 text-amber" />
                  {t}
                </li>
              ))}
            </ul>
          </section>
        </AnimatedSection>

        {/* Related */}
        {related.length > 0 && (
          <section className="border-t border-line/60 py-10">
            <h2 className="font-display text-3xl text-paper">Төстэй баатрууд</h2>
            <p className="mt-1 font-body text-sm text-fog">{hero.subRole !== "Тодорхойгүй" ? `${hero.subRole} болон ${hero.role} role-ийн бусад баатрууд` : `${hero.role} role-ийн бусад баатрууд`}</p>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {related.map((h, i) => (
                <HeroCard key={h.id} hero={h} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* Compare */}
        <div className="border-t border-line/60 pt-8">
          <Link
            href={`/compare?a=${hero.id}`}
            className="focus-ring inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 font-body text-sm font-semibold text-paper transition-colors hover:border-ember/50 hover:bg-ember/5"
          >
            <Scale size={16} className="text-ember" /> {hero.name}-г өөр баатартай харьцуулах
          </Link>
        </div>

        {/* Prev / next */}
        <div className="grid gap-3 border-t border-line/60 pt-8 sm:grid-cols-2">
          <Link href={`/heroes/${prev.id}`} className="focus-ring group flex items-center gap-3 rounded-xl border border-line bg-panel p-4 transition-colors hover:border-ember/40">
            <ChevronLeft className="text-fog transition-transform group-hover:-translate-x-1" />
            <div>
              <p className="font-body text-[11px] text-fog">Өмнөх</p>
              <p className="font-display text-lg text-paper">{prev.name}</p>
            </div>
          </Link>
          <Link href={`/heroes/${next.id}`} className="focus-ring group flex items-center justify-end gap-3 rounded-xl border border-line bg-panel p-4 text-right transition-colors hover:border-ember/40">
            <div>
              <p className="font-body text-[11px] text-fog">Дараах</p>
              <p className="font-display text-lg text-paper">{next.name}</p>
            </div>
            <ChevronRight className="text-fog transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
