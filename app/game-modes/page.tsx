import { gameModes } from "@/data/gamemodes";
import { ModeVisual } from "@/components/ModeVisual";

export const metadata = { title: "Game Mode-ууд — Overwatch Mongolia" };

const FACTS = [
  { key: "objectiveMn", label: "Зорилго" },
  { key: "howMn", label: "Хэрхэн явагддаг" },
  { key: "winMn", label: "Хэрхэн ялах" },
] as const;

export default function GameModesPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-hexgrid opacity-60 [mask-image:linear-gradient(#000,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-12 md:px-8">
        <h1 className="font-display text-5xl text-paper sm:text-6xl">Game Mode-ууд</h1>
        <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-fog">
          Тоглолт бүр доорх горимуудын нэг дээр явагдана. Горим бүрийн зорилго, явц, ялах нөхцөл болон схем animation-ыг эндээс үз.
        </p>

        {/* Jump links, colored per mode */}
        <nav aria-label="Горимууд" className="no-scrollbar sticky top-16 z-30 -mx-5 mt-8 flex gap-2 overflow-x-auto border-b border-line/60 bg-void/90 px-5 py-3 backdrop-blur-md md:mx-0 md:rounded-lg md:border md:px-3">
          {gameModes.map((m) => (
            <a
              key={m.id}
              href={`#${m.id}`}
              className="focus-ring flex shrink-0 items-center gap-2 rounded-md px-3 py-1.5 font-body text-sm font-semibold text-mist transition-colors hover:bg-white/5 hover:text-paper"
            >
              <span className="h-2 w-2 rounded-full" style={{ background: m.color }} aria-hidden />
              {m.name}
            </a>
          ))}
        </nav>

        <div className="mt-4">
          {gameModes.map((m) => (
            <section key={m.id} id={m.id} className="grid scroll-mt-32 gap-8 border-b border-line/60 py-12 last:border-b-0 md:grid-cols-[1fr_1.1fr] md:gap-12">
              <div className="md:sticky md:top-40 md:self-start">
                <ModeVisual mode={m.id} />
                <div className="mt-5 flex items-center gap-3">
                  <h2 className="font-display text-4xl" style={{ color: m.color }}>{m.name}</h2>
                  {m.special && (
                    <span className="rounded-full border border-line px-2.5 py-0.5 font-body text-xs text-fog">Тусгай горим</span>
                  )}
                </div>
                <p className="mt-1 font-body text-sm text-mist">{m.summaryMn}</p>
              </div>

              <div className="space-y-6">
                {FACTS.map((f) => (
                  <div key={f.key} className="border-l-2 pl-4" style={{ borderColor: `${m.color}88` }}>
                    <h3 className="font-display text-xl text-paper">{f.label}</h3>
                    <p className="mt-1 font-body text-[15px] leading-relaxed text-mist">{m[f.key]}</p>
                  </div>
                ))}
                {m.notesMn.length > 0 && (
                  <div>
                    <h3 className="font-display text-xl text-paper">Мэдэж аваарай</h3>
                    <ul className="mt-2 space-y-2 font-body text-sm leading-relaxed text-mist">
                      {m.notesMn.map((n, i) => (
                        <li key={i} className="flex gap-2">
                          <span style={{ color: m.color }}>▸</span>
                          {n}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
