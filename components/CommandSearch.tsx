"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, CornerDownLeft, BookOpen, Scale, Sprout, type LucideIcon } from "lucide-react";
import type { SearchEntry } from "@/lib/searchIndex";
import { ROLE_META, ROLE_ORDER } from "@/lib/roleMeta";
import { HeroPhoto } from "./HeroPhoto";
import { DifficultyPips } from "./DifficultyPips";

type Item = {
  key: string;
  href: string;
  title: string;
  sub?: string;
  hero?: SearchEntry;
  icon?: LucideIcon;
  color?: string;
  hint?: string;
};

// "Lúcio" / "D.Va" / "Soldier: 76" / "wrecking ball" should all be findable the obvious way.
const norm = (s: string) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "");

function rank(h: SearchEntry, q: string): { score: number; hint?: string } {
  const name = norm(h.name);
  const mn = norm(h.nameMn);
  if (name === q) return { score: 100 };
  if (name.startsWith(q)) return { score: 90 };
  if (mn.startsWith(q)) return { score: 85 };
  if (name.includes(q)) return { score: 70 };
  if (mn.includes(q)) return { score: 65 };
  if (norm(h.subRole).includes(q) || norm(h.role).includes(q)) return { score: 40 };
  for (const t of h.terms) {
    const n = norm(t);
    if (n.startsWith(q)) return { score: 30, hint: t };
  }
  for (const t of h.terms) {
    if (norm(t).includes(q)) return { score: 25, hint: t };
  }
  return { score: 0 };
}

const SHORTCUTS: Item[] = [
  ...ROLE_ORDER.map((r) => ({
    key: `role-${r}`,
    href: `/heroes?role=${r}`,
    title: `${r} баатрууд`,
    sub: ROLE_META[r].blurbMn,
    icon: ROLE_META[r].icon,
    color: ROLE_META[r].color,
  })),
  { key: "beginner", href: "/heroes?difficulty=beginner", title: "Эхлэгчдэд тохиромжтой баатрууд", icon: Sprout, color: "#46d69c" },
  { key: "compare", href: "/compare", title: "Баатар харьцуулах", icon: Scale, color: "#ffa620" },
  { key: "basics", href: "/basics", title: "Тоглоомын үндэс", icon: BookOpen, color: "#5aa2ff" },
];

export function CommandSearch({ index }: { index: SearchEntry[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  // open from anywhere: ⌘K / Ctrl+K, "/" outside inputs, or the "ow:search" event (navbar + home buttons)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
        return;
      }
      if (e.key === "/" && !open) {
        const t = e.target as HTMLElement | null;
        if (t && (["INPUT", "TEXTAREA", "SELECT"].includes(t.tagName) || t.isContentEditable)) return;
        e.preventDefault();
        setOpen(true);
      }
    };
    const onEvent = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("ow:search", onEvent);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("ow:search", onEvent);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      returnFocus.current = document.activeElement as HTMLElement | null;
      setQuery("");
      setActive(0);
      document.body.style.overflow = "hidden";
      const t = setTimeout(() => inputRef.current?.focus(), 30);
      return () => {
        clearTimeout(t);
        document.body.style.overflow = "";
      };
    }
    returnFocus.current?.focus?.();
  }, [open]);

  const q = norm(query);
  const items: Item[] = useMemo(() => {
    if (!q) return SHORTCUTS;
    return index
      .map((h) => ({ h, r: rank(h, q) }))
      .filter((x) => x.r.score > 0)
      .sort((a, b) => b.r.score - a.r.score || a.h.name.localeCompare(b.h.name))
      .slice(0, 7)
      .map(({ h, r }) => ({ key: h.id, href: `/heroes/${h.id}`, title: h.name, sub: h.nameMn, hero: h, hint: r.hint }));
  }, [q, index]);

  useEffect(() => setActive(0), [q]);
  useEffect(() => {
    document.getElementById(`cmd-opt-${active}`)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const go = (href: string) => {
    close();
    router.push(href);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % Math.max(items.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a - 1 + items.length) % Math.max(items.length, 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (items[active]) go(items[active].href);
      else if (query.trim()) go(`/heroes?q=${encodeURIComponent(query.trim())}`);
    } else if (e.key === "Tab") {
      e.preventDefault(); // keep focus in the field; arrows move through results
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[9vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <button aria-label="Хайлтыг хаах" tabIndex={-1} onClick={close} className="absolute inset-0 cursor-default bg-void/80 backdrop-blur-sm" />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Хурдан хайлт"
            onKeyDown={onKeyDown}
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.99 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-line bg-ink shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)]"
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <Search size={18} className="shrink-0 text-fog" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                role="combobox"
                aria-expanded="true"
                aria-controls="cmd-list"
                aria-activedescendant={items[active] ? `cmd-opt-${active}` : undefined}
                aria-label="Баатар, чадвар, Perk хайх"
                placeholder="Баатар, чадвар, Perk хайх..."
                autoComplete="off"
                spellCheck={false}
                className="h-14 w-full bg-transparent font-body text-base text-paper outline-none placeholder:text-fog"
              />
              <kbd className="hidden shrink-0 rounded-md border border-line px-1.5 py-0.5 font-body text-[11px] text-fog sm:block">Esc</kbd>
            </div>

            <ul id="cmd-list" role="listbox" className="max-h-[56vh] overflow-y-auto p-2">
              {!q && <li role="presentation" className="px-3 pb-1 pt-2 font-body text-xs text-fog">Түргэн холбоос</li>}
              {items.map((it, i) => {
                const on = i === active;
                const Icon = it.icon;
                return (
                  <li
                    key={it.key}
                    id={`cmd-opt-${i}`}
                    role="option"
                    aria-selected={on}
                    onMouseMove={() => setActive(i)}
                    onClick={() => go(it.href)}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border-l-2 px-3 py-2.5 transition-colors ${
                      on ? "bg-panel2" : "border-transparent"
                    }`}
                    style={on ? { borderLeftColor: it.hero?.accent ?? it.color ?? "#ffa620" } : { borderLeftColor: "transparent" }}
                  >
                    {it.hero ? (
                      <HeroPhoto
                        heroId={it.hero.id}
                        initials={it.hero.name.slice(0, 2)}
                        accent={it.hero.accent}
                        role={it.hero.role}
                        variant="card"
                        showCrest={false}
                        className="h-10 w-10 shrink-0 rounded-lg"
                      />
                    ) : (
                      Icon && (
                        <span
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                          style={{ background: `${it.color}1f`, color: it.color }}
                        >
                          <Icon size={18} />
                        </span>
                      )
                    )}
                    <div className="min-w-0 flex-1">
                      <div className={`truncate ${it.hero ? "font-display text-xl leading-tight" : "font-body text-sm font-semibold"} text-paper`}>
                        {it.title}
                      </div>
                      {it.sub && <div className="truncate font-body text-xs text-fog">{it.sub}</div>}
                    </div>
                    {it.hero && (
                      <div className="flex shrink-0 items-center gap-3">
                        {it.hint && <span className="hidden max-w-[9rem] truncate font-body text-xs text-ember sm:block">{it.hint}</span>}
                        <DifficultyPips difficulty={it.hero.difficulty} />
                        {(() => {
                          const R = ROLE_META[it.hero.role];
                          return <R.icon size={16} style={{ color: R.color }} aria-label={it.hero.role} />;
                        })()}
                      </div>
                    )}
                    {on && !it.hero && <CornerDownLeft size={14} className="shrink-0 text-fog" />}
                  </li>
                );
              })}
              {q && items.length === 0 && (
                <li role="presentation" className="px-3 py-8 text-center">
                  <p className="font-display text-xl text-paper">“{query}” олдсонгүй</p>
                  <p className="mt-1 font-body text-sm text-fog">Нэрийг англиар нь бичиж үзнэ үү. Жишээ нь: Tracer, Blink.</p>
                  <button onClick={() => go(`/heroes?q=${encodeURIComponent(query.trim())}`)} className="mt-3 font-body text-sm font-semibold text-ember hover:underline">
                    Бүх баатраас хайх
                  </button>
                </li>
              )}
            </ul>

            <div className="hidden items-center gap-4 border-t border-line px-4 py-2.5 font-body text-[11px] text-fog sm:flex">
              <span><kbd className="rounded border border-line px-1">↑</kbd> <kbd className="rounded border border-line px-1">↓</kbd> сонгох</span>
              <span><kbd className="rounded border border-line px-1">↵</kbd> нээх</span>
              <span className="ml-auto">Хаанаас ч <kbd className="rounded border border-line px-1">/</kbd> дарж нээнэ</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
