import Link from "next/link";
import { Sparkles, RefreshCw, Wrench } from "lucide-react";
import { heroStatus, currentUpdate, type HeroStatusKind } from "@/data/updates";

const META: Record<HeroStatusKind, { label: string; chip: string; color: string; icon: typeof Sparkles }> = {
  new: { label: "Шинэ", chip: "Season 5: шинэ баатар", color: "#ffa620", icon: Sparkles },
  rework: { label: "Rework", chip: "Season 5: rework хийгдсэн", color: "#9cc3ff", icon: RefreshCw },
  changed: { label: "", chip: "Season 5-д өөрчлөгдсөн", color: "#bcc5e3", icon: Wrench },
};

/** Small corner pill for roster cards. Only new heroes and reworks get one; balance tweaks stay quiet. */
export function StatusBadge({ heroId }: { heroId: string }) {
  const kind = heroStatus[heroId];
  if (!kind || kind === "changed") return null;
  const m = META[kind];
  return (
    <span
      className="absolute left-1/2 top-2.5 flex -translate-x-1/2 items-center gap-1 rounded-md px-2 py-1 font-body text-[11px] font-bold text-void"
      style={{ background: m.color }}
    >
      <m.icon size={11} />
      {m.label}
    </span>
  );
}

/** Link chip for the hero page header: says what changed and leads to the full update. */
export function StatusChip({ heroId }: { heroId: string }) {
  const kind = heroStatus[heroId];
  if (!kind) return null;
  const m = META[kind];
  return (
    <Link
      href="/updates"
      title={currentUpdate.name}
      className="focus-ring inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-body text-xs font-semibold transition-colors hover:bg-white/5"
      style={{ borderColor: `${m.color}88`, color: m.color }}
    >
      <m.icon size={12} />
      {m.chip}
    </Link>
  );
}
