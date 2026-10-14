import {
  Hammer, Atom, Bot, Magnet, Anchor, Orbit, Gem, Sword, Swords, Hand, Skull, Crown, Flame,
  Cog, Waves, CircleDot, Clock, Crosshair, Target, Ghost, Bomb, Fan, Cpu, Star, Sparkles, Zap,
  Wind, Bird, Snowflake, Rocket, Compass, Eye, Hexagon, Wrench, Pickaxe, Radio, Flag, Axe,
  Feather, Moon, Music, Droplets, HeartPulse, Leaf, Shield, Sun, Heart, Sprout, Flower, Cat,
  type LucideIcon,
} from "lucide-react";

export const HERO_ICONS: Record<string, LucideIcon> = {
  reinhardt: Hammer, winston: Atom, dva: Bot, zarya: Magnet, roadhog: Anchor, ramattra: Orbit,
  domina: Gem, dmon: Sword, doomfist: Hand, hazard: Skull, "junker-queen": Crown, mauga: Flame,
  orisa: Cog, sigma: Waves, "wrecking-ball": CircleDot,
  tracer: Clock, genji: Swords, widowmaker: Crosshair, "soldier-76": Target, reaper: Ghost,
  ashe: Bomb, anran: Fan, bastion: Cpu, cassidy: Star, echo: Sparkles, emre: Zap, freja: Wind,
  hanzo: Bird, junkrat: Bomb, mei: Snowflake, pharah: Rocket, sojourn: Compass, sombra: Eye,
  symmetra: Hexagon, torbjorn: Wrench, venture: Pickaxe, sierra: Radio, shion: Flag, vendetta: Axe,
  mercy: Feather, ana: Moon, lucio: Music, moira: Droplets, baptiste: HeartPulse, kiriko: Leaf,
  brigitte: Shield, illari: Sun, juno: Heart, lifeweaver: Sprout, zenyatta: Orbit, wuyang: Waves,
  mizuki: Flower, "jetpack-cat": Cat,
};

export function getHeroIcon(id: string): LucideIcon {
  return HERO_ICONS[id] ?? Star;
}

/**
 * Silhouette "family" used by HeroBust to vary head/shoulder shape so every
 * portrait reads as a distinct kind of character (robot, mech pilot, animal,
 * hooded, visored, plain) without tracing any real Blizzard design.
 */
export type BustFamily = "human" | "visor" | "helmet" | "robot" | "mech" | "animal" | "hood" | "mask";

export const HERO_FAMILY: Record<string, BustFamily> = {
  // Tank
  reinhardt: "helmet", winston: "animal", dva: "mech", zarya: "helmet", roadhog: "mask",
  ramattra: "robot", domina: "helmet", dmon: "mech", doomfist: "mask", hazard: "helmet",
  "junker-queen": "human", mauga: "human", orisa: "robot", sigma: "human", "wrecking-ball": "mech",
  // Damage
  tracer: "visor", genji: "mask", widowmaker: "visor", "soldier-76": "visor", reaper: "hood",
  ashe: "helmet", anran: "human", bastion: "robot", cassidy: "helmet", echo: "robot",
  emre: "mask", freja: "helmet", hanzo: "human", junkrat: "mask", mei: "human",
  pharah: "helmet", shion: "visor", sierra: "helmet", sojourn: "visor", sombra: "hood",
  symmetra: "human", torbjorn: "helmet", venture: "helmet", vendetta: "mask",
  // Support
  mercy: "human", ana: "hood", lucio: "visor", moira: "human", baptiste: "helmet",
  kiriko: "mask", brigitte: "helmet", illari: "human", "jetpack-cat": "animal", juno: "visor",
  lifeweaver: "human", mizuki: "mask", wuyang: "human", zenyatta: "robot",
};

export function getHeroFamily(id: string): BustFamily {
  return HERO_FAMILY[id] ?? "human";
}

export function hashSeed(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function mulberry32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
