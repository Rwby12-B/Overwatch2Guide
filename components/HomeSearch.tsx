"use client";

import { Search } from "lucide-react";

/** Looks like a search field, opens the quick-search palette (same one as ⌘K and the navbar). */
export function HomeSearch({ count }: { count: number }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("ow:search"))}
      className="focus-ring group flex w-full max-w-xl items-center gap-3 rounded-xl border border-line bg-panel/80 px-5 py-4 text-left backdrop-blur transition-colors hover:border-ember/60"
    >
      <Search size={20} className="shrink-0 text-fog transition-colors group-hover:text-ember" />
      <span className="flex-1 font-body text-base text-fog">{count} баатраас хайх — Tracer, Blink, Ultimate…</span>
      <kbd className="hidden rounded-md border border-line px-2 py-0.5 font-body text-xs text-fog sm:block">/</kbd>
    </button>
  );
}
