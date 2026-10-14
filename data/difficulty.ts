import { Difficulty } from "./types";

export interface DifficultyInfo {
  id: Difficulty;
  labelMn: string;
  short: string; // short English/neutral tag, used in compact UI
  color: string;
  dot: string; // emoji dot used in a few text contexts
  order: number;
}

export const difficultyInfo: Record<Difficulty, DifficultyInfo> = {
  beginner: {
    id: "beginner",
    labelMn: "Эхлэгч",
    short: "Beginner",
    color: "#46d69c",
    dot: "🟢",
    order: 1,
  },
  intermediate: {
    id: "intermediate",
    labelMn: "Дунд зэрэг",
    short: "Intermediate",
    color: "#ffd166",
    dot: "🟡",
    order: 2,
  },
  advanced: {
    id: "advanced",
    labelMn: "Ахисан түвшин",
    short: "Advanced",
    color: "#ff5c61",
    dot: "🔴",
    order: 3,
  },
};

export const difficultyOrder: Difficulty[] = ["beginner", "intermediate", "advanced"];
