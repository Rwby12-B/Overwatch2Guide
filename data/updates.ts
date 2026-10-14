import type { Role } from "./types";

/**
 * Season 5 — "A Grim Doctrine" (live 2026-10-06).
 * Source: Blizzard's official Overwatch patch notes (overwatch.blizzard.com/en-us/news/patch-notes).
 * Add the next season as a new object and point `currentUpdate` at it.
 */

export type HeroStatusKind = "new" | "rework" | "changed";

export interface ReworkRow {
  label: string;
  /** previous value; omit when the thing is brand new */
  from?: string;
  to: string;
}

export interface Rework {
  heroId: string;
  devNoteMn: string;
  rows: ReworkRow[];
}

export interface BalanceEntry {
  heroId: string;
  role: Role;
  lines: string[];
}

export interface InfoBlock {
  title: string;
  text: string;
}

export interface InfoGroup {
  title: string;
  items: string[];
}

export const OFFICIAL_PATCH_NOTES = "https://overwatch.blizzard.com/en-us/news/patch-notes/";

export const season5 = {
  id: "season-5",
  name: "Season 5: A Grim Doctrine",
  seasonLabel: "Reign of Talon",
  dateMn: "2026 оны 10-р сарын 6",
  introMn:
    "Шинэ Support баатар Doctrine нэмэгдэж, Сомбра Support role руу шилжин, Роудхог бүхэлдээ rework хийгдлээ. Мөн шинэ Escort газрын зураг, Halloween event болон тэнцвэржүүлэлт орсон.",

  newHeroes: ["doctrine"],
  reworks: ["sombra", "roadhog"],

  reworkDetails: [
    {
      heroId: "sombra",
      devNoteMn:
        "Blizzard: Сомбрагийн «disruptive mastermind» дүр Damage role-той зөрчилддөг байсан тул Support руу шилжүүлсэн. Дайснаа түр бүрэн түгждэг Hack-ийн оронд damage болон healing-ийг хагасаар бууруулдаг Weaken статус орсон.",
      rows: [
        { label: "Role", from: "Damage", to: "Support" },
        { label: "Sub-role", from: "Recon", to: "Tactician" },
        { label: "Secondary Fire", from: "Hack", to: "Hotfix — найзыг heal хийж, эмнэлгийн боодол, deployable hack хийнэ" },
        { label: "Ability", from: "Virus", to: "Cyberspace — бүс үүсгэж дайсныг Weaken, найзыг heal" },
        { label: "Passive", from: "Opportunist", to: "Conspirator — дайсны бүрэн цэнэгтэй Ultimate-ийг харна" },
        { label: "Translocator", from: "Stealth 5 сек, cooldown 6 сек, зай 18 м", to: "Stealth 6.5 сек, cooldown 7.5 сек, зай 12.25 м" },
        { label: "Machine Pistol", from: "8 damage / сум", to: "7 damage / сум" },
        { label: "EMP", from: "Damage 25% HP", to: "Damage 20% HP, Ultimate cost +67.5%" },
        { label: "Minor Perk", from: "Encrypted Upload", to: "Life Hack" },
        { label: "Major Perk", from: "High-Speed Bandwidth", to: "Data Packet" },
        { label: "Major Perk", from: "Viral Replication", to: "Cybersecurity" },
      ],
    },
    {
      heroId: "roadhog",
      devNoteMn:
        "Blizzard: Chain Hook хэт lethal байдгаас үүдэх бухимдлыг бууруулж, Роудхогт багаа дэмжих шинэ хэрэгсэл өгөх нь зорилго байсан. Тиймээс Scrap Gun хоёр burst-тэй болж, шинэ Trash Compactor нэмэгдсэн.",
      rows: [
        { label: "Scrap Gun", from: "1 volley, 175 damage, 6 сум", to: "2 burst, 204 damage, 12 сум" },
        { label: "Scrap Gun", from: "Critical 2x, falloff 30–50 м", to: "Critical 1.5x, falloff 20–35 м" },
        { label: "Secondary Fire", from: "Scrap Gun-ы secondary fire", to: "Trash Compactor — projectile шингээж 75–200 damage-тай дэлбэрэлт болгоно" },
        { label: "Chain Hook", from: "Cooldown 7 сек, stun 0.4 сек, зай 3 м", to: "Cooldown 6 сек, stun 0.3 сек, зай 4.5 м" },
        { label: "Take a Breather", from: "3 сек, 150 HP/сек, 40% хамгаалалт", to: "2 сек, 200 HP/сек, 35% хамгаалалт" },
        { label: "Minor Perk", from: "Shrapnel Launcher", to: "Here, Piggy Piggy" },
        { label: "Minor Perk", from: "Scrap Hook: 2 сум reload", to: "Scrap Hook: 4 сум reload" },
        { label: "Major Perk", from: "Pulled Pork", to: "Toxic Exhaust" },
      ],
    },
  ] as Rework[],

  balance: [
    { heroId: "dva", role: "Tank", lines: ["Micro Missiles-ийн галын хурд 11 → 14 сум/сек."] },
    { heroId: "domina", role: "Tank", lines: ["Crystal Charge-ийн cooldown 8 → 7 сек.", "Reconstruction (passive)-ийн lifesteal 75% → 100%."] },
    { heroId: "bastion", role: "Damage", lines: ["Reconfigure-ийн хугацаа 6 → 5 сек."] },
    { heroId: "cassidy", role: "Damage", lines: ["Deadeye ашиглаж байхдаа Jetpack Cat-ийн Lifeline-д наалдах боломжгүй болсон."] },
    { heroId: "emre", role: "Damage", lines: ["Cyber Frag-ийн cooldown 10 → 9 сек."] },
    { heroId: "genji", role: "Damage", lines: ["Swift Strike-ийн damage 50 → 60.", "Dragonblade-ийн damage 110 → 100, цохилтын хурд +15%."] },
    { heroId: "shion", role: "Damage", lines: ["Rapid Reload (minor perk) устаж, Survival Instinct нэмэгдсэн: Evade-ийн overhealth +1 сек."] },
    { heroId: "ana", role: "Support", lines: ["Groggy (minor perk) устаж, Local Anesthetic нэмэгдсэн: Sleep Dart дэлбэрч slow хийж 3 секундэд 45 damage өгнө."] },
    { heroId: "lucio", role: "Support", lines: ["Sound Barrier-ийн хугацаа 5 → 6 сек.", "Beat Drop: Sound Barrier-ийн дараа Amp It Up 4 секунд идэвхтэй."] },
    {
      heroId: "doctrine",
      role: "Support",
      lines: [
        "Trial-ийн дараах тохируулга: Ultimate cost +8%.",
        "Invigorating Drones-ийн attack speed 35% → 30%.",
        "Shrouded Momentum: cooldown 7 → 8 сек, хамгаалалт 50% → 40%, critical hit-ээс хамгаалахаа больсон.",
        "Deliverance: drone-ы галын хурд 4 → 5, overhealth болон debuff 8 → 6 сек.",
        "Transfusion (major perk)-ийн хөрвүүлэлт 50%-иар буурсан.",
      ],
    },
  ] as BalanceEntry[],

  places: [
    {
      title: "Grímsvötn — шинэ Escort газар",
      text: "Дэлхийн хамгийн аюултай гэмт хэрэгтнүүдийн шоронгийн сэдэвтэй шинэ payload газрын зураг. Eichenwalde-ийн эхний chokepoint дахь хуучин sightline-ийг мөн засчээ.",
    },
    {
      title: "Halloween газрууд",
      text: "Hollywood, Lijiang Tower, Château Guillard-ын Halloween хувилбарууд 11-р сарын 3 хүртэл бүх queue-д нээлттэй.",
    },
    {
      title: "Mystery Madness: Graveyard Games",
      text: "4 долоо хоногийн Halloween event-ийн шинэ arcade горим. 5v5 Open Queue боловч 1-2-2 role заавал, Best-of-3 Control хэлбэртэй. Эхэнд санамсаргүй role болон 3 баатрын сонголт өгнө, үхэх бүрд Power сонгоно. Doctrine мөн энд тоглогдоно.",
    },
  ] as InfoBlock[],

  other: [
    {
      title: "Тоглоомын ерөнхий",
      items: [
        "Бүх баатрын hit volume-ийг төстэй төрлийн баатруудтай ойртуулж шинэчилсэн — aim илүү тогтвортой болно.",
        "Hitscan projectile-ийн хэмжээ багассан (том: 0.07 → 0.04 м, жижиг: 0.04 → 0.02 м).",
        "Advanced Info Panel дээр Projectile Speed болон Projectile Size харагдана.",
        "Damage reduction, overhealth чадвартай tank-ууд Protects-ийг илүү олддог болсон.",
        "Mystery Heroes-д дээд тал нь 3 tank байх дүрэм сэргээгдсэн.",
        "Map Voting: сүүлд тоглосон 2 газар 2 цагийн дотор санал болгогдохгүй, Escort болон Hybrid нэг горим гэж тооцогдоно.",
        "Chat-д Custom Restricted Words нэмэгдсэн, Legacy Pass-аар өмнөх улирлын Battle Pass-уудыг үргэлжлүүлж болно.",
      ],
    },
    {
      title: "Competitive",
      items: [
        "Top 500 leaderboard одоо Rank-аар эрэмбэлэгдэнэ, Heat Bonus устсан.",
        "Challenger Score нь зөвхөн leaderboard-д орох шаардлага болж үлдсэн.",
      ],
    },
    {
      title: "Stadium",
      items: [
        "Quick Play нь Open Queue болсон: 1 Tank (заавал), 2 Damage, 3 Support хүртэл.",
        "Currency-ээс авах passive health 50%-иар буурсан.",
        "Healing reduction-тэй item-үүд 35% → 40% болсон; шинэ Ultimate E.M.P item нэмэгдэж, Biolight Overflow устсан.",
        "Divine Intervention-ий shield 50 → 75, Nebula Conduit-ийн health 50 → 75.",
      ],
    },
  ] as InfoGroup[],
};

export const currentUpdate = season5;

export const heroStatus: Record<string, HeroStatusKind> = (() => {
  const m: Record<string, HeroStatusKind> = {};
  season5.balance.forEach((b) => (m[b.heroId] = "changed"));
  season5.reworks.forEach((id) => (m[id] = "rework"));
  season5.newHeroes.forEach((id) => (m[id] = "new"));
  return m;
})();
