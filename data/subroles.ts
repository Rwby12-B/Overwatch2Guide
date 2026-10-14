import { SubRole, Role } from "./types";

export interface SubRoleInfo {
  id: SubRole;
  role: Role;
  nameMn: string;
  passiveMn: string;
}

export const subRoles: Record<string, SubRoleInfo> = {
  Bruiser: {
    id: "Bruiser",
    role: "Tank",
    nameMn: "Bruiser",
    passiveMn:
      "Критик damage-ийг бага хүлээн авдаг. HP маш бага үед movement speed нэмэгддэг.",
  },
  Initiator: {
    id: "Initiator",
    role: "Tank",
    nameMn: "Initiator",
    passiveMn: "Агаарт байх үед аажмаар HP-ээ сэргээдэг.",
  },
  Stalwart: {
    id: "Stalwart",
    role: "Tank",
    nameMn: "Stalwart",
    passiveMn: "Knockback (knockback) болон slow (slow) эффектийг бага хүлээн авдаг.",
  },
  Sharpshooter: {
    id: "Sharpshooter",
    role: "Damage",
    nameMn: "Sharpshooter",
    passiveMn: "Критик цохилт өгөх бүрд movement ability-ийн Cooldown багасдаг.",
  },
  Flanker: {
    id: "Flanker",
    role: "Damage",
    nameMn: "Flanker",
    passiveMn: "HP-ийн боодол (Health Pack) илүү их HP сэргээдэг.",
  },
  Specialist: {
    id: "Specialist",
    role: "Damage",
    nameMn: "Specialist",
    passiveMn: "Дайсныг устгасны дараа богино хугацаанд сум ачих хурд нэмэгддэг.",
  },
  Recon: {
    id: "Recon",
    role: "Damage",
    nameMn: "Recon",
    passiveMn:
      "Хагасаас бага HP-тэй дайсанд damage учруулсны дараа тэднийг ханаар дамжуулан богино хугацаанд илрүүлдэг.",
  },
  Tactician: {
    id: "Tactician",
    role: "Support",
    nameMn: "Tactician",
    passiveMn:
      "Ultimate ашигласны дараа илүүдэл эрчийг хадгалж, дараагийн Ultimate-даа шилжүүлж болдог.",
  },
  Medic: {
    id: "Medic",
    role: "Support",
    nameMn: "Medic",
    passiveMn: "Зэвсгээрээ багийн гишүүдийг heal хийхэд өөрийгөө мөн heal хийдэг.",
  },
  Survivor: {
    id: "Survivor",
    role: "Support",
    nameMn: "Survivor",
    passiveMn: "Movement ability ашиглах бүрд идэвхгүй HP сэргээлт идэвхждэг.",
  },
  Тодорхойгүй: {
    id: "Тодорхойгүй",
    role: "Damage",
    nameMn: "Тодорхойгүй",
    passiveMn:
      "Энэ баатрын Sub-role одоогоор баталгаажаагүй тул удахгүй шинэчлэгдэнэ.",
  },
};

// Reverse lookup used to sanity-check hero -> subrole assignment during data entry.
export const subRoleMembers: Record<string, string[]> = {
  Bruiser: ["mauga", "orisa", "roadhog", "zarya"],
  Initiator: ["dva", "doomfist", "winston", "wrecking-ball"],
  Stalwart: ["domina", "hazard", "junker-queen", "ramattra", "reinhardt", "sigma", "dmon"],
  Sharpshooter: ["ashe", "cassidy", "hanzo", "sojourn", "widowmaker"],
  Flanker: ["anran", "genji", "reaper", "tracer", "vendetta", "venture"],
  Specialist: ["bastion", "emre", "junkrat", "mei", "soldier-76", "symmetra", "torbjorn"],
  Recon: ["echo", "freja", "pharah"],
  Tactician: ["ana", "baptiste", "jetpack-cat", "lucio", "sombra", "zenyatta"],
  Medic: ["kiriko", "lifeweaver", "mercy", "moira"],
  Survivor: ["brigitte", "doctrine", "illari", "juno", "mizuki", "wuyang"],
};
