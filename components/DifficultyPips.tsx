import { Difficulty } from "@/data/types";
import { difficultyInfo } from "@/data/difficulty";

/** Signal-strength style difficulty marker: 1, 2 or 3 bars lit. Reads at a glance, no label needed. */
export function DifficultyPips({ difficulty, className }: { difficulty: Difficulty; className?: string }) {
  const info = difficultyInfo[difficulty];
  return (
    <span
      role="img"
      aria-label={`Хэцүү зэрэг: ${info.labelMn}`}
      title={`Хэцүү зэрэг: ${info.labelMn}`}
      className={`inline-flex items-end gap-[3px] ${className ?? ""}`}
    >
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className="w-[5px] rounded-[1px]"
          style={{ height: 5 + i * 3, background: i <= info.order ? info.color : "rgba(255,255,255,0.2)" }}
        />
      ))}
    </span>
  );
}
