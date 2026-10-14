import { Difficulty } from "@/data/types";
import { difficultyInfo } from "@/data/difficulty";
import { cn } from "@/lib/utils";

export function DifficultyBadge({
  difficulty,
  size = "md",
  className,
}: {
  difficulty: Difficulty;
  size?: "sm" | "md";
  className?: string;
}) {
  const info = difficultyInfo[difficulty];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-body font-medium",
        size === "sm" ? "px-2 py-0.5 text-[11px]" : "px-3 py-1 text-xs",
        className,
      )}
      style={{ borderColor: `${info.color}55`, color: info.color, background: `${info.color}14` }}
      title={`Хэцүү зэрэг: ${info.labelMn}`}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: info.color }} aria-hidden />
      {info.labelMn}
    </span>
  );
}
