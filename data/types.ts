export type Role = "Tank" | "Damage" | "Support";

export type Difficulty = "beginner" | "intermediate" | "advanced";

export type SubRole =
  | "Bruiser"
  | "Initiator"
  | "Stalwart"
  | "Sharpshooter"
  | "Flanker"
  | "Specialist"
  | "Recon"
  | "Tactician"
  | "Medic"
  | "Survivor"
  | "Тодорхойгүй"; // "Unconfirmed" — used only until verified for very new heroes

export interface Ability {
  id: string;
  name: string;
  nameMn: string;
  type: string; // e.g. "Primary Fire", "Ability", "Movement", "Defensive", "Ultimate"
  keybind?: string;
  descriptionMn: string;
  tipMn?: string;
  cooldown?: string;
  damage?: string;
  healing?: string;
  duration?: string;
  range?: string;
  verified: boolean;
}

export interface Perk {
  id: string;
  name: string;
  descriptionMn: string;
  effectMn: string;
  whenUsefulMn?: string;
  verified: boolean;
}

export interface Passive {
  id: string;
  name: string;
  nameMn: string;
  descriptionMn: string;
  impactMn?: string;
  verified: boolean;
}

export interface HeroOverview {
  summaryMn: string;
  playstyleMn: string;
  strengthsMn: string[];
  weaknessesMn: string[];
  tipsMn: string[];
}

export interface Hero {
  id: string; // slug
  name: string;
  nameMn: string;
  role: Role;
  subRole: SubRole;
  alignment?: string;
  releaseYear?: number;
  colorAccent: string; // small hex used for portrait fallback + accents
  initials: string;
  overview?: HeroOverview;
  abilities: Ability[];
  perks: {
    minor: Perk[];
    major: Perk[];
  };
  passives: Passive[];
  dataComplete: boolean; // false = stage-2/3 hero, only core fields populated so far
  lastUpdated: string;
  /** 1-3 tier difficulty, shown as a badge and used for filtering + the /heroes/beginner page. */
  difficulty: Difficulty;
  /** Only populated for difficulty: "beginner" heroes — short, specific reasons shown on /heroes/beginner. */
  beginnerWhyMn?: string[];
}
