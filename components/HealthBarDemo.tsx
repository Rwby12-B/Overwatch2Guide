"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Seg = { key: string; label: string; color: string; width: number; text: string; note: string };

const SEGMENTS: Seg[] = [
  { key: "hp", label: "Health", color: "#f4f2ec", width: 45, text: "Үндсэн HP", note: "Бүх баатрын суурь эрүүл мэнд. Ямар ч damage-аар шууд буурна. 0 хүрвэл elimination болно." },
  { key: "armor", label: "Armor", color: "#ffd166", width: 20, text: "Armor (шар)", note: "Жижиг hit бүрээс тогтмол хэмжээгээр damage-ийг бууруулдаг — олон удаагийн бага damage-аас сайн хамгаална, гэхдээ нэг том цохилтын эсрэг тийм ч үр дүнтэй биш. Зарим баатар (Orisa, Roadhog зэрэг) энэ төрлийн HP-тэй." },
  { key: "shield", label: "Shield", color: "#9cc3ff", width: 20, text: "Shield (цэнхэр)", note: "Хэдэн секунд damage авахгүй байвал автоматаар дахин дүүрдэг HP. Зогсолтгүй тулаанд буурсаар байх ч, тулаанаас гарч амарвал хурдан сэргэнэ. Symmetra, Sigma, Baptiste зэрэг баатрын HP-ийн нэг хэсэг ийм төрөлтэй." },
  { key: "over", label: "Overhealth", color: "#46d69c", width: 25, text: "Overhealth (ногоон, шинэ давхарга)", note: "Ability-аар түр зуур нэмэгддэг \"бонус HP\" — HP bar-ийн дээгүүр нэмэлт давхарга болж харагддаг. Цаг хугацааны дараа аажим арилдаг бөгөөд үндсэн HP-ээс өмнө эхэлж буурдаг. Ж: Zarya bubble, Kiriko Suzu, Mauga Cardiac Overdrive." },
];

export function HealthBarDemo() {
  const [active, setActive] = useState<string | null>(null);
  const total = SEGMENTS.reduce((n, s) => n + s.width, 0);

  return (
    <div>
      <div className="flex h-9 w-full overflow-hidden rounded-md border border-line/70 bg-void">
        {SEGMENTS.map((s) => (
          <motion.button
            key={s.key}
            onMouseEnter={() => setActive(s.key)}
            onFocus={() => setActive(s.key)}
            onMouseLeave={() => setActive(null)}
            onBlur={() => setActive(null)}
            onClick={() => setActive((a) => (a === s.key ? null : s.key))}
            style={{ width: `${(s.width / total) * 100}%`, background: s.color }}
            whileHover={{ filter: "brightness(1.15)" }}
            className={cn(
              "focus-ring relative h-full border-r border-void/40 last:border-r-0 transition-opacity",
              active && active !== s.key ? "opacity-40" : "opacity-100",
              s.key === "over" && "bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,rgba(0,0,0,0.15)_5px,rgba(0,0,0,0.15)_10px)]",
            )}
            aria-label={s.text}
          />
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {SEGMENTS.map((s) => (
          <button
            key={s.key}
            onClick={() => setActive((a) => (a === s.key ? null : s.key))}
            className={cn(
              "focus-ring flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-body text-xs transition-colors",
              active === s.key ? "border-transparent text-void" : "border-line text-mist hover:text-paper",
            )}
            style={active === s.key ? { background: s.color } : undefined}
          >
            <span className="h-2 w-2 rounded-full" style={{ background: s.color }} />
            {s.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={active}
            initial={{ opacity: 0, y: -6, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-3 rounded-lg border border-line bg-panel p-4">
              <p className="font-display text-sm text-paper">{SEGMENTS.find((s) => s.key === active)?.text}</p>
              <p className="mt-1.5 font-body text-sm leading-relaxed text-mist">{SEGMENTS.find((s) => s.key === active)?.note}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!active && (
        <p className="mt-3 font-body text-xs text-fog">Дээрх төрөл дээр дар эсвэл hover хий — дэлгэрэнгүй тайлбар харагдана.</p>
      )}
    </div>
  );
}
