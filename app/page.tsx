import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { heroes, heroCount } from "@/data/heroes";
import { ROLE_META, ROLE_ORDER } from "@/lib/roleMeta";
import { HeroCard } from "@/components/HeroCard";
import { HeroOrbit } from "@/components/HeroOrbit";
import { DemoShowcase } from "@/components/DemoShowcase";
import { HomeSearch } from "@/components/HomeSearch";

const ORBIT_IDS = ["tracer", "reinhardt", "mercy", "genji", "widowmaker", "winston", "kiriko", "sombra"];
const FALLBACK_STARTERS = ["reinhardt", "winston", "soldier-76", "cassidy", "mercy", "lucio"];

const PATHS = [
  {
    href: "/basics",
    title: "Шинэ тоглогч уу?",
    text: "HP bar, багийн бүрэлдэхүүн, горим, яаж ялахыг нэг хуудсаар тайлбарлана.",
    cta: "Үндэс сурах",
  },
  {
    href: "/heroes?difficulty=beginner",
    title: "Баатраа сонгох",
    text: "Эхлэхэд хялбар баатруудыг role-оор нь ялгаж үзүүлнэ.",
    cta: "Эхлэгчийн баатрууд",
  },
  {
    href: "/compare",
    title: "Хоёр баатрыг зэрэгцүүлэх",
    text: "Чадвар, давуу болон сул талыг хажуу хажууд нь тавьж харна.",
    cta: "Харьцуулах",
  },
];

export default function HomePage() {
  const byId = (ids: string[]) => ids.map((id) => heroes.find((h) => h.id === id)).filter((h): h is NonNullable<typeof h> => Boolean(h));
  const orbit = byId(ORBIT_IDS);
  const roleCounts = ROLE_ORDER.map((role) => ({ role, n: heroes.filter((h) => h.role === role).length }));

  // Two beginner-friendly heroes per role, so every role is represented.
  let starters = ROLE_ORDER.flatMap((r) => heroes.filter((h) => h.role === r && h.difficulty === "beginner").slice(0, 2));
  if (starters.length < 4) starters = byId(FALLBACK_STARTERS);

  return (
    <>
      {/* What's new: one line, always above the fold */}
      <Link
        href="/updates"
        className="focus-ring group block border-b border-line/60 bg-panel transition-colors hover:bg-panel2"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-5 py-2.5 md:px-8">
          <span className="shrink-0 rounded-md bg-ember px-2 py-0.5 font-body text-xs font-bold text-void">Season 5</span>
          <span className="min-w-0 flex-1 truncate font-body text-sm text-paper">
            Шинэ Support Doctrine, Сомбра Support болж, Роудхог rework хийгдлээ
          </span>
          <span className="hidden shrink-0 items-center gap-1 font-body text-sm font-semibold text-ember sm:inline-flex">
            Дэлгэрэнгүй <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>

      {/* Landing: the search is the front door */}
      <section className="relative overflow-hidden border-b border-line/60 bg-ink">
        <div className="absolute inset-0 bg-hexgrid opacity-70 [mask-image:radial-gradient(70%_80%_at_70%_40%,#000,transparent)]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 55% at 78% 30%, rgba(255,166,32,0.18) 0%, transparent 60%), radial-gradient(45% 45% at 8% 90%, rgba(90,162,255,0.16) 0%, transparent 60%)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 md:grid-cols-[1.1fr_1fr] md:px-8 md:pb-24 md:pt-20">
          <div>
            <h1 className="text-balance font-display text-5xl leading-[0.98] text-paper sm:text-6xl lg:text-7xl">
              Overwatch-ийн бүх баатрыг Монголоор судал.
            </h1>
            <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-mist">
              Баатар бүрийн чадвар, Perk, Passive-ийг Монгол хэлээр тайлбарласан, чадвар бүрийг нь animation-аар харж
              ойлгодог гарын авлага.
            </p>

            <div className="mt-8">
              <HomeSearch count={heroCount} />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap">
              {roleCounts.map(({ role, n }) => {
                const R = ROLE_META[role];
                return (
                  <Link
                    key={role}
                    href={`/heroes?role=${role}`}
                    className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border px-3 py-2 font-body text-sm font-semibold text-paper transition-colors hover:bg-white/5 sm:px-3.5"
                    style={{ borderColor: `${R.color}55` }}
                  >
                    <R.icon size={16} className="shrink-0" style={{ color: R.color }} />
                    {R.label}
                    <span className="font-medium text-fog">{n}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="pb-8">
            <HeroOrbit heroes={orbit} />
          </div>
        </div>
      </section>

      {/* Where to start */}
      <section className="mx-auto max-w-7xl px-5 pt-16 md:px-8">
        <h2 className="font-display text-4xl text-paper">Хаанаас эхлэх вэ?</h2>
        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {PATHS.map((p) => (
            <Link key={p.href} href={p.href} className="focus-ring group flex flex-col gap-2 bg-void p-6 transition-colors hover:bg-panel">
              <h3 className="font-display text-2xl text-paper">{p.title}</h3>
              <p className="font-body text-sm leading-relaxed text-mist">{p.text}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-ember">
                {p.cta}
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Starter heroes */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-4xl text-paper">Эхлэхэд тохиромжтой баатрууд</h2>
            <p className="mt-1 font-body text-sm text-fog">Role бүрээс хамгийн хялбар нь</p>
          </div>
          <Link href="/heroes?difficulty=beginner" className="focus-ring hidden shrink-0 items-center gap-1 font-body text-sm font-semibold text-ember hover:underline sm:inline-flex">
            Бүгдийг харах <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {starters.map((h, i) => (
            <HeroCard hero={h} key={h.id} index={i} />
          ))}
        </div>
      </section>

      {/* Demo showcase */}
      <section className="relative border-y border-line/60 bg-ink">
        <div className="absolute inset-0 bg-hexgrid opacity-40 [mask-image:linear-gradient(90deg,transparent,#000_30%,#000_70%,transparent)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8">
          <h2 className="font-display text-4xl text-paper">Чадвар хэрхэн ажилладаг вэ?</h2>
          <p className="mt-2 max-w-xl font-body text-sm leading-relaxed text-fog">
            Чадварын төрөл бүрийг animation-аар харж, баатрын хуудас дахь карт бүр дээр яг ийм схемээр харагдахыг ойлго.
          </p>
          <div className="mt-8">
            <DemoShowcase />
          </div>
        </div>
      </section>

      {/* News */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="font-display text-4xl text-paper">Сүүлийн мэдээлэл</h2>
        <div className="mt-6 grid gap-x-10 gap-y-8 md:grid-cols-2">
          <article className="border-l-2 border-ember pl-5">
            <span className="font-body text-sm font-semibold text-ember">2026 оны 10-р сар</span>
            <h3 className="mt-1 font-display text-2xl text-paper">Season 5: A Grim Doctrine нээгдлээ</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-mist">
              Шинэ Support баатар Doctrine нэмэгдэж, нийт {heroCount} баатартай боллоо. Сомбра Support role руу шилжиж,
              Роудхог бүхэлдээ rework хийгдсэн. Шинэ Grímsvötn газар болон Halloween event мөн орсон.
            </p>
            <Link href="/updates" className="focus-ring mt-2 inline-flex items-center gap-1 font-body text-sm font-semibold text-ember hover:underline">
              Бүх өөрчлөлтийг харах <ArrowRight size={14} />
            </Link>
          </article>
          <article className="border-l-2 border-line pl-5">
            <span className="font-body text-sm font-semibold text-fog">2026 оны 2-р сар</span>
            <h3 className="mt-1 font-display text-2xl text-paper">"Overwatch 2" нэрээ "Overwatch" болгож өөрчилсөн</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-mist">
              Blizzard тоглоомынхоо нэрийг дахин "Overwatch" болгож, шинэ Sub-role систем болон таван шинэ баатар (Domina,
              Emre, Mizuki, Anran, Jetpack Cat) нэмсэн.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
