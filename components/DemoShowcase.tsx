"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AbilityDemo } from "./AbilityDemo";
import { DemoKind, DEMO_LABEL } from "@/lib/demoKind";
import { cn } from "@/lib/utils";

const ITEMS: { kind: DemoKind; color: string; text: string; example: string }[] = [
  { kind: "hitscan", color: "#5aa2ff", text: "Instant hitscan — буу нэн даруй онолт хийдэг, aim нарийвчлал шийдвэрлэдэг.", example: "Ж: Widowmaker — Widow's Kiss (Scoped)" },
  { kind: "projectile", color: "#5aa2ff", text: "Projectile — сум/orb тодорхой хугацаанд явж очдог тул зайг тооцох хэрэгтэй.", example: "Ж: Hanzo — Storm Bow" },
  { kind: "blink", color: "#4ADEDE", text: "Teleport — байрлал шууд солигдоно, зам дагуу gap-ийг алгасна.", example: "Ж: Tracer — Blink" },
  { kind: "grapplepull", color: "#4ADEDE", text: "Grapple — өөрийгөө тодорхой цэг рүү хурдан татан авчирна.", example: "Ж: Widowmaker — Grappling Hook" },
  { kind: "hookpull", color: "#4ADEDE", text: "Hook — дайсныг (эсвэл хамтрагчийг) өөр рүүгээ татан авчирна.", example: "Ж: Roadhog — Chain Hook" },
  { kind: "wall", color: "#46d69c", text: "Wall — газраас хана босгож замыг бүрэн хаана.", example: "Ж: Mei — Ice Wall" },
  { kind: "barrier", color: "#46d69c", text: "Barrier — урд талд шил барьж, ард талынхаа багийг хамгаална.", example: "Ж: Reinhardt — Barrier Field" },
  { kind: "absorb", color: "#46d69c", text: "Damage absorb — өөртөө ирэх довтолгоог бүрэн саармагжуулна.", example: "Ж: D.Va — Defense Matrix" },
  { kind: "reflect", color: "#46d69c", text: "Reflect — ирсэн сумыг буцааж дайсан руу нь чиглүүлнэ.", example: "Ж: Genji — Deflect" },
  { kind: "healshot", color: "#46d69c", text: "Ranged heal — хамтрагч руу зайнаас эмчилгээ илгээнэ.", example: "Ж: Mercy — Caduceus Staff" },
  { kind: "healfield", color: "#46d69c", text: "Heal field — байрлуулсан цэгээс тойрон эмчилгээ тарааж байдаг.", example: "Ж: Illari — Healing Pylon" },
  { kind: "stun", color: "#ffd166", text: "Crowd control — дайсныг богино хугацаанд бүрэн саатуулна.", example: "Ж: Ana — Sleep Dart" },
  { kind: "knockback", color: "#ffd166", text: "AoE / Knockback — талбайд damage өгч, дайсныг түлхэнэ.", example: "Ж: Pharah — Concussive Blast" },
  { kind: "vortex", color: "#ffd166", text: "Vortex — ойролцоох дайснуудыг нэг цэг рүү татан төвлөрүүлнэ.", example: "Ж: Zarya — Graviton Surge" },
  { kind: "mine", color: "#ffd166", text: "Mine / Trap — байрлуулаад дайсан ойртохыг хүлээнэ.", example: "Ж: Junkrat — Steel Trap" },
  { kind: "turret", color: "#ffd166", text: "Turret — байрлуулсан төхөөрөмж өөрөө автоматаар довтолно.", example: "Ж: Torbjörn — Turret" },
  { kind: "stance", color: "#ffa620", text: "Form change — баатар өөр, илүү хүчирхэг хэлбэрт шилждэг.", example: "Ж: Winston — Primal Rage" },
  { kind: "reveal", color: "#ffa620", text: "Reveal — дайсныг ханаар дамжуулан, эсвэл алсаас илрүүлнэ.", example: "Ж: Widowmaker — Infra-Sight" },
  { kind: "stealth", color: "#ffa620", text: "Stealth — баатар харагдахгүй болж чимээгүйхэн ойртоно.", example: "Ж: Sombra — Stealth" },
  { kind: "clone", color: "#ffa620", text: "Duplicate — өөр баатрын хуулбарыг үүсгэж, чадварыг нь ашиглана.", example: "Ж: Echo — Duplicate" },
  { kind: "resurrect", color: "#ffa620", text: "Resurrect — унасан хамтрагчийг дахин амьдруулна.", example: "Ж: Mercy — Resurrect" },
];

export function DemoShowcase() {
  const [idx, setIdx] = useState(0);
  const cur = ITEMS[idx];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
      <div>
        <div role="tablist" aria-label="Чадварын төрөл" className="flex flex-wrap gap-2">
          {ITEMS.map((it, i) => (
            <button
              key={it.kind}
              role="tab"
              aria-selected={i === idx}
              onClick={() => setIdx(i)}
              className={cn(
                "focus-ring relative rounded-lg border px-3 py-1.5 font-body text-xs font-semibold transition-colors",
                i === idx ? "border-transparent text-void" : "border-line bg-panel text-mist hover:text-paper",
              )}
            >
              {i === idx && (
                <motion.span
                  layoutId="demo-tab"
                  className="absolute inset-0 -z-10 rounded-lg"
                  style={{ background: it.color }}
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span className="relative">{DEMO_LABEL[it.kind]}</span>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={cur.kind}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mt-6"
          >
            <h3 className="font-display text-2xl" style={{ color: cur.color }}>{DEMO_LABEL[cur.kind]}</h3>
            <p className="mt-3 max-w-md font-body text-[15px] leading-relaxed text-mist">{cur.text}</p>
            <p className="mt-3 font-body text-xs text-fog">{cur.example}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="rounded-2xl border border-line bg-panel p-3 shadow-[0_20px_60px_-30px_rgba(255,166,32,0.35)]">
        <AnimatePresence mode="wait">
          <motion.div key={cur.kind} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            <AbilityDemo kind={cur.kind} color={cur.color} heroColor="#f4f2ec" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
