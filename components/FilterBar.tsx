"use client";

import { motion } from "framer-motion";
import { Role, Difficulty } from "@/data/types";
import { difficultyInfo, difficultyOrder } from "@/data/difficulty";
import { ROLE_META, ROLE_ORDER } from "@/lib/roleMeta";
import { cn } from "@/lib/utils";

const selectCls =
  "focus-ring rounded-lg border border-line bg-panel px-3 py-2 font-body text-xs text-mist transition-colors hover:border-fog/50";

export function FilterBar({
  role, onRole, counts, sub, onSub, subOptions, difficulty, onDifficulty, sort, onSort, onClear, dirty,
}: {
  role: Role | "All";
  onRole: (r: Role | "All") => void;
  counts: Record<Role | "All", number>;
  sub: string;
  onSub: (s: string) => void;
  subOptions: string[];
  difficulty: Difficulty | "All";
  onDifficulty: (d: Difficulty | "All") => void;
  sort: "name" | "role";
  onSort: (s: "name" | "role") => void;
  onClear: () => void;
  dirty: boolean;
}) {
  const roleOptions: (Role | "All")[] = ["All", ...ROLE_ORDER];
  const diffOptions: (Difficulty | "All")[] = ["All", ...difficultyOrder];
  // Compact labels for the filter row; the full names are explained in the legend under it.
  const SHORT: Record<Difficulty | "All", string> = { All: "Бүгд", beginner: "Эхлэгч", intermediate: "Дунд", advanced: "Ахисан" };

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      <div role="group" aria-label="Role" className="no-scrollbar flex w-full max-w-full overflow-x-auto rounded-lg border border-line bg-panel p-1 sm:w-auto">
        {roleOptions.map((r) => {
          const on = role === r;
          const R = r === "All" ? null : ROLE_META[r];
          const color = R?.color ?? "#ffa620";
          return (
            <button
              key={r}
              aria-pressed={on}
              onClick={() => onRole(r)}
              className={cn(
                "focus-ring relative z-10 flex flex-1 items-center justify-center gap-1.5 rounded-md px-2.5 py-1.5 font-body text-xs font-semibold transition-colors sm:flex-none sm:px-3",
                on ? "text-void" : "text-fog hover:text-paper",
              )}
            >
              {on && (
                <motion.span
                  layoutId="role-pill"
                  className="absolute inset-0 -z-10 rounded-md"
                  style={{ background: color }}
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              )}
              {R && <R.icon size={13} className="hidden sm:block" />}
              {r === "All" ? "Бүгд" : R!.label}
              <span className={cn("font-medium", on ? "text-void/70" : "text-fog/70")}>{counts[r]}</span>
            </button>
          );
        })}
      </div>

      <div role="group" aria-label="Хэцүү зэрэг" className="no-scrollbar flex w-full max-w-full overflow-x-auto rounded-lg border border-line bg-panel p-1 sm:w-auto">
        {diffOptions.map((d) => {
          const on = difficulty === d;
          const info = d === "All" ? null : difficultyInfo[d];
          return (
            <button
              key={d}
              aria-pressed={on}
              onClick={() => onDifficulty(d)}
              className={cn(
                "focus-ring relative z-10 flex flex-1 items-center justify-center gap-1.5 rounded-md px-2.5 py-1.5 font-body text-xs font-semibold transition-colors sm:flex-none sm:px-3",
                on ? "text-paper" : "text-fog hover:text-paper",
              )}
            >
              {on && (
                <motion.span
                  layoutId="diff-pill"
                  className="absolute inset-0 -z-10 rounded-md bg-panel2"
                  style={{ boxShadow: `inset 0 0 0 1px ${info?.color ?? "#8e9ac0"}88` }}
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              )}
              {info && <span className="h-1.5 w-1.5 rounded-full" style={{ background: info.color }} aria-hidden />}
              {SHORT[d]}
            </button>
          );
        })}
      </div>

      <select value={sub} onChange={(e) => onSub(e.target.value)} aria-label="Sub-role" className={selectCls}>
        <option value="All">Бүх sub-role</option>
        {subOptions.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      <select value={sort} onChange={(e) => onSort(e.target.value as "name" | "role")} aria-label="Эрэмбэлэх" className={selectCls}>
        <option value="name">Нэрээр (A–Z)</option>
        <option value="role">Role-оор</option>
      </select>
      {dirty && (
        <button onClick={onClear} className="focus-ring rounded-lg px-2 py-2 font-body text-xs font-semibold text-ember underline-offset-2 hover:underline">
          Цэвэрлэх
        </button>
      )}
    </div>
  );
}
