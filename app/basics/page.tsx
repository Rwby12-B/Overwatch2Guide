import Link from "next/link";
import { Users, Target, Zap, ShieldCheck, Info } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { HealthBarDemo } from "@/components/HealthBarDemo";
import { ModeVisual } from "@/components/ModeVisual";
import { gameModes } from "@/data/gamemodes";
import { ArrowRight } from "lucide-react";

export const metadata = { title: "Тоглоомын үндэс — Overwatch Mongolia" };

const roles = [
  { name: "1 Tank", color: "#4cc3ff", desc: "Багийн урд зогсож орон зай нээж, дайралтыг өөр рүүгээ татна." },
  { name: "2 Damage", color: "#ff5c61", desc: "Дайсны эрсдэлтэй зорилтуудыг устгаж, довтолгооны хор хөнөөлийг өгнө." },
  { name: "2 Support", color: "#46d69c", desc: "Багаа heal хийж, buff/debuff тавьж, амьд байлгана." },
];

export default function BasicsPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-hexgrid opacity-70 [mask-image:linear-gradient(#000,transparent)]" />

      <div className="relative mx-auto max-w-5xl px-5 py-12 md:px-8">
        <h1 className="mt-2 font-display text-4xl text-paper sm:text-5xl">Тоглоомын үндэс</h1>
        <p className="mt-3 max-w-2xl font-body text-[15px] leading-relaxed text-mist">
          Overwatch анх удаа тоглож буй хүнд зориулж HP bar, team composition, game mode, win condition зэрэг
          үндсэн ойлголтуудыг эндээс товч тайлбарлав.
        </p>

        {/* Team comp */}
        <AnimatedSection>
          <section className="mt-14">
            <h2 className="flex items-center gap-2 font-display text-3xl text-paper">
              <Users size={20} className="text-ember" /> 5v5 Team Composition
            </h2>
            <p className="mt-2 font-body text-sm leading-relaxed text-fog">
              Нэг баг 5 хүнээс бүрдэнэ: 1 Tank, 2 Damage, 2 Support. Role Queue горимд энэ хуваарь автоматаар баримтлагддаг.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {roles.map((r) => (
                <div key={r.name} className="rounded-xl border border-line bg-panel p-5">
                  <span className="inline-block rounded-full px-2.5 py-1 font-display text-sm text-void" style={{ background: r.color }}>
                    {r.name}
                  </span>
                  <p className="mt-3 font-body text-sm leading-relaxed text-mist">{r.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* HP bar anatomy */}
        <AnimatedSection>
          <section className="mt-14 border-t border-line/60 pt-14">
            <h2 className="flex items-center gap-2 font-display text-3xl text-paper">
              <ShieldCheck size={20} className="text-ember" /> HP Bar: Health, Armor, Shield, Overhealth
            </h2>
            <p className="mt-2 max-w-2xl font-body text-sm leading-relaxed text-fog">
              Баатар бүрийн HP bar нэг төрлийн биш байж болно. Дараах жишээ дээр дар/hover хийж ялгааг харна уу.
            </p>
            <div className="mt-6 rounded-2xl border border-line bg-panel p-6">
              <HealthBarDemo />
            </div>
          </section>
        </AnimatedSection>

        {/* Game modes */}
        <AnimatedSection>
          <section className="mt-14 border-t border-line/60 pt-14">
            <h2 className="flex items-center gap-2 font-display text-3xl text-paper">
              <Target size={20} className="text-ember" /> Game Mode-ууд
            </h2>
            <p className="mt-2 max-w-2xl font-body text-sm leading-relaxed text-fog">
              Стандарт тоглолт (Quick Play, Competitive) эдгээр горимын аль нэг дээр random map-тай тохиолддог.
              Горим бүрийн дэлгэрэнгүй тайлбар, зөвлөгөөг{" "}
              <Link href="/game-modes" className="text-ember underline-offset-2 hover:underline">
                Game Modes хуудаснаас
              </Link>{" "}
              үз.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {gameModes.map((m) => (
                <Link
                  key={m.id}
                  href={`/game-modes#${m.id}`}
                  className="focus-ring group overflow-hidden rounded-xl border border-line bg-panel transition-colors hover:border-ember/40"
                >
                  <ModeVisual mode={m.id} className="rounded-none border-0 border-b border-line/70" />
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-display text-lg" style={{ color: m.color }}>{m.name}</span>
                      {m.special && (
                        <span className="rounded-full border border-line px-2 py-0.5 font-body text-[10px] text-fog">Тусгай</span>
                      )}
                    </div>
                    <p className="mt-1 font-body text-xs text-fog">{m.summaryMn}</p>
                    <span className="mt-3 inline-flex items-center gap-1 font-body text-xs font-semibold text-ember group-hover:underline">
                      Дэлгэрэнгүй <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Overtime + flow */}
        <AnimatedSection>
          <section className="mt-14 border-t border-line/60 pt-14">
            <h2 className="flex items-center gap-2 font-display text-3xl text-paper">
              <Zap size={20} className="text-ember" /> Overtime, Ultimate, Elimination
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-line bg-panel p-5">
                <h3 className="font-display text-base text-signal">Overtime</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-mist">
                  Хугацаа дуусах мөчид attacker payload/point-той ойрхон бол цаг богино хугацаагаар сунгагдана — "clock
                  шатаж" байгаа тохиолдолд л ажилладаг.
                </p>
              </div>
              <div className="rounded-xl border border-line bg-panel p-5">
                <h3 className="font-display text-base text-ember">Ultimate</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-mist">
                  Damage өгөх, heal хийх, дайрах бүрд Ultimate charge аажим цуглардаг. 100% болмогц хамгийн хүчтэй
                  чадвараа (Ultimate) ашиглах боломжтой болно.
                </p>
              </div>
              <div className="rounded-xl border border-line bg-panel p-5">
                <h3 className="font-display text-base text-damage">Elimination</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-mist">
                  HP 0 хүрвэл elimination болж, тодорхой хугацааны дараа spawn дээрээ дахин амилна (respawn). Байнга
                  устгагдах нь багийнхаа тоо давуу байдлыг алддаг.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Beginner tips */}
        <AnimatedSection>
          <section className="mt-14 border-t border-line/60 pt-14 pb-6">
            <h2 className="flex items-center gap-2 font-display text-3xl text-paper">
              <Info size={20} className="text-ember" /> Эхлэгчдэд зориулсан зөвлөгөө
            </h2>
            <ul className="mt-5 space-y-3">
              {[
                "Байнга багтайгаа хамт бай (\"stick with your team\") — ганцаараа явах нь хамгийн түгээмэл алдаа.",
                "Health Pack (эрүүл мэндийн боодол) map даяар байрладаг — байршлыг нь цээжлэх нь том давуу тал.",
                "Ultimate-аа шууд бүү ашигла, багийн бусад Ultimate-тэй хослуулбал илүү үр дүнтэй.",
                "Эхэлж нэг role, 1-2 баатар дээр анхаарлаа төвлөрүүл — бүх баатрыг нэг дор сурах шаардлагагүй.",
                "Killfeed болон mini-map-аа тогтмол шалгаж, дайсны байрлалыг таамагла.",
              ].map((t, i) => (
                <li key={i} className="rounded-xl border border-line bg-panel p-4 font-body text-sm leading-relaxed text-mist">
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/heroes" className="focus-ring inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-3 font-body text-sm font-bold text-void">
                Баатруудыг судлах →
              </Link>
              <Link href="/roles" className="focus-ring inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 font-body text-sm font-bold text-paper hover:border-signal/50">
                Role-уудыг үзэх
              </Link>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
}
