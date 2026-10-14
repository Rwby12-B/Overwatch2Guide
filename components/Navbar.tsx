"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SearchEntry } from "@/lib/searchIndex";
import { CommandSearch } from "./CommandSearch";

const LINKS = [
  { href: "/updates", label: "Шинэчлэл", dot: true },
  { href: "/basics", label: "Үндэс" },
  { href: "/heroes", label: "Баатрууд" },
  { href: "/roles", label: "Role" },
  { href: "/game-modes", label: "Горимууд" },
  { href: "/compare", label: "Харьцуулах" },
];

const openSearch = () => window.dispatchEvent(new Event("ow:search"));

export function Navbar({ index }: { index: SearchEntry[] }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mod, setMod] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    setMod(/Mac|iPhone|iPad/.test(navigator.platform) ? "⌘K" : "Ctrl K");
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const active = (href: string) => pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-colors duration-300",
          scrolled || open ? "border-line/70 bg-void/90 backdrop-blur-md" : "border-transparent bg-void/40 backdrop-blur-sm",
        )}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-5 md:px-8">
          <Link href="/" className="focus-ring group flex items-center gap-2.5" aria-label="Overwatch Mongolia — нүүр">
            <span
              className="flex h-9 w-9 items-center justify-center bg-ember text-void transition-transform duration-500 group-hover:rotate-[360deg]"
              style={{ clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)" }}
            >
              <span className="font-display text-sm">OW</span>
            </span>
            <span className="font-display text-xl uppercase tracking-wide text-paper">
              Overwatch <span className="text-ember">Mongolia</span>
            </span>
          </Link>

          <div className="hidden flex-1 items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active(l.href) ? "page" : undefined}
                className={cn(
                  "focus-ring relative rounded-md px-3 py-2 font-body text-sm font-medium transition-colors hover:text-paper",
                  active(l.href) ? "text-paper" : "text-mist",
                )}
              >
                {l.label}
                {"dot" in l && l.dot && <span className="ml-1.5 inline-block h-1.5 w-1.5 -translate-y-1 rounded-full bg-ember" aria-hidden />}
                {active(l.href) && <motion.span layoutId="nav-underline" className="absolute inset-x-3 -bottom-[13px] h-[2px] bg-ember" />}
              </Link>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <button
              onClick={openSearch}
              aria-label="Хайх"
              className="focus-ring hidden lg:w-40 xl:w-64 items-center gap-2 rounded-lg border border-line bg-panel/70 px-3 py-2 text-left font-body text-sm text-fog transition-colors hover:border-ember/50 hover:text-paper lg:flex"
            >
              <Search size={15} />
              <span className="flex-1">Баатар, чадвар хайх</span>
              {mod && <kbd className="rounded border border-line px-1.5 py-0.5 text-[11px]">{mod}</kbd>}
            </button>
            <button onClick={openSearch} aria-label="Хайх" className="focus-ring rounded-md p-2 text-paper lg:hidden">
              <Search size={21} />
            </button>
            <button
              aria-label={open ? "Цэсийг хаах" : "Цэсийг нээх"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="focus-ring rounded-md p-2 text-paper lg:hidden"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {open && (
          <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }} className="border-t border-line/60 bg-ink px-5 py-3 lg:hidden">
            {[...LINKS, { href: "/about", label: "Төслийн тухай" }].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active(l.href) ? "page" : undefined}
                className={cn("focus-ring block rounded-md px-2 py-3 font-body text-base", active(l.href) ? "text-ember" : "text-mist")}
              >
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </header>
      <CommandSearch index={index} />
    </>
  );
}
