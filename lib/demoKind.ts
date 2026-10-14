export type DemoKind =
  | "hitscan" | "projectile" | "shotgun" | "beam" | "melee"
  | "dash" | "blink" | "leap"
  | "grapplepull" | "hookpull"
  | "wall" | "barrier" | "absorb" | "reflect"
  | "healshot" | "healfield"
  | "buff" | "stun" | "knockback" | "vortex" | "dot"
  | "mine" | "turret" | "stance" | "reveal" | "stealth" | "clone" | "resurrect";

export const DEMO_LABEL: Record<DemoKind, string> = {
  hitscan: "Instant hitscan",
  projectile: "Projectile",
  shotgun: "Shotgun spread",
  beam: "Continuous beam",
  melee: "Melee strike",
  dash: "Dash",
  blink: "Teleport",
  leap: "Leap / Jump",
  grapplepull: "Grapple (self-pull)",
  hookpull: "Hook (target-pull)",
  wall: "Wall",
  barrier: "Barrier",
  absorb: "Damage absorb",
  reflect: "Reflect",
  healshot: "Ranged heal",
  healfield: "Heal field",
  buff: "Buff / Link",
  stun: "Crowd control",
  knockback: "Knockback / AoE",
  vortex: "Pull vortex",
  dot: "Damage over time",
  mine: "Mine / Trap",
  turret: "Turret / Summon",
  stance: "Form change",
  reveal: "Reveal",
  stealth: "Stealth",
  clone: "Duplicate",
  resurrect: "Resurrect",
};

/**
 * Explicit per-ability overrides (by ability id) built from the real kit of
 * every hero on this site — this is what makes the demo specific rather than
 * a generic guess. Anything not listed falls back to classifyAbility().
 */
export const ABILITY_KIND_OVERRIDE: Record<string, DemoKind> = {
  // Reinhardt
  "rh-rockethammer": "melee", "rh-charge": "dash", "rh-firestrike": "projectile",
  "rh-barrier": "barrier", "rh-earthshatter": "knockback",
  // Winston
  "wn-tesla": "beam", "wn-jumppack": "leap", "wn-bubble": "barrier", "wn-primalrage": "stance",
  // D.Va
  "dv-fusion": "beam", "dv-boosters": "dash", "dv-matrix": "absorb",
  "dv-selfdestruct": "knockback", "dv-callmech": "turret",
  // Zarya
  "zr-cannon": "beam", "zr-selfbarrier": "absorb", "zr-projectedbarrier": "absorb", "zr-graviton": "vortex",
  // Roadhog
  "rd-scrapgun": "shotgun", "rd-hook": "hookpull", "rd-breather": "buff", "rd-wholehog": "knockback", "rd-trash": "absorb",
  // Ramattra
  "rm-voidaccel": "beam", "rm-blockade": "absorb", "rm-pummel": "melee",
  "rm-nemesisform": "stance", "rm-annihilation": "dot",
  // Tracer
  "tr-pistols": "hitscan", "tr-blink": "blink", "tr-recall": "blink", "tr-pulsebomb": "mine",
  // Genji
  "gj-shuriken": "projectile", "gj-swiftstrike": "dash", "gj-deflect": "reflect",
  "gj-doublejump": "leap", "gj-dragonblade": "melee",
  // Widowmaker
  "wm-widowskiss-hip": "hitscan", "wm-widowskiss-scope": "hitscan",
  "wm-grapple": "grapplepull", "wm-venommine": "mine", "wm-infrasight": "reveal",
  // Soldier: 76
  "s76-rifle": "hitscan", "s76-rockets": "projectile", "s76-sprint": "dash",
  "s76-biotic": "healfield", "s76-visor": "hitscan",
  // Reaper
  "rp-shotguns": "shotgun", "rp-wraith": "absorb", "rp-shadowstep": "blink", "rp-deathblossom": "dot",
  // Ashe
  "as-viper": "hitscan", "as-coachgun": "knockback", "as-dynamite": "dot", "as-bob": "turret",
  // Mercy
  "mc-staff": "healshot", "mc-guardianangel": "grapplepull",
  "mc-descent": "leap", "mc-resurrect": "resurrect", "mc-valkyrie": "buff",
  // Ana
  "an-rifle": "healshot", "an-sleepdart": "stun", "an-grenade": "healshot", "an-nanoboost": "buff",
  // Lúcio
  "lc-blaster": "shotgun", "lc-crossfade": "buff", "lc-wallride": "dash",
  "lc-boop": "buff", "lc-soundbarrier": "barrier",
  // Moira
  "mr-grasp": "healshot", "mr-orb": "projectile", "mr-fade": "stealth", "mr-coalescence": "beam",
  // Baptiste
  "bp-launcher": "projectile", "bp-immortality": "healfield",
  "bp-exoboots": "leap", "bp-burst": "buff", "bp-amp": "buff",
  // Kiriko
  "kr-ofuda": "healshot", "kr-kunai": "hitscan", "kr-swiftstep": "blink",
  "kr-suzu": "buff", "kr-kitsune": "buff",
  // Doomfist
  "df-hands": "shotgun", "df-punch": "dash", "df-block": "absorb", "df-slam": "knockback", "df-ultimate": "buff",
  // Hazard
  "hz-blade": "projectile", "hz-wall": "wall", "hz-leap": "leap", "hz-downpour": "dot",
  // Junker Queen
  "jq-scatter": "shotgun", "jq-blade": "projectile", "jq-shout": "buff", "jq-rush": "buff", "jq-carnage": "melee",
  // Mauga
  "mg-chaingun": "beam", "mg-volatile": "projectile", "mg-overrun": "dash", "mg-cage": "wall", "mg-cardiac": "buff",
  // Orisa
  "or-driver": "projectile", "or-javelin": "projectile", "or-spin": "reflect", "or-fortify": "absorb", "or-terra": "vortex",
  // Sigma
  "sg-spheres": "projectile", "sg-grasp": "absorb", "sg-barrier": "barrier", "sg-accretion": "knockback", "sg-flux": "vortex",
  // Wrecking Ball
  "wb-guns": "beam", "wb-claw": "grapplepull", "wb-roll": "dash",
  "wb-shield": "absorb", "wb-piledriver": "knockback", "wb-minefield": "mine",
  // Bastion
  "bs-recon": "hitscan", "bs-assault": "stance", "bs-artillery": "projectile", "bs-repair": "buff",
  // Cassidy
  "cs-peacekeeper": "hitscan", "cs-roll": "dash", "cs-flashbang": "stun", "cs-deadeye": "reveal",
  // Echo
  "ec-beam": "projectile", "ec-focus": "beam", "ec-bombs": "mine", "ec-flight": "leap", "ec-duplicate": "clone",
  // Freja
  "fj-crossbow": "projectile", "fj-aim": "hitscan", "fj-jump": "leap", "fj-hunting": "reveal",
  // Hanzo
  "hz-bow": "projectile", "hz-sonic": "reveal", "hz-storm": "projectile", "hz-lunge": "leap", "hz-dragonstrike": "beam",
  // Junkrat
  "jr-launcher": "projectile", "jr-mine": "mine", "jr-trap": "mine", "jr-tire": "mine",
  // Mei
  "me-blaster": "beam", "me-icicle": "hitscan", "me-wall": "wall", "me-freeze": "absorb", "me-blizzard": "dot",
  // Pharah
  "ph-rocket": "projectile", "ph-jets": "leap", "ph-hover": "leap", "ph-blast": "knockback", "ph-barrage": "knockback",
  // Sojourn
  "sj-pulse": "hitscan", "sj-slide": "dash", "sj-disruptor": "projectile", "sj-overclock": "buff",
  // Sombra
  "sm-pistol": "hitscan", "sm-hotfix": "healshot", "sm-cyberspace": "healfield", "sm-stealth": "stealth", "sm-translocator": "blink", "sm-emp": "stun",
  // Symmetra
  "sy-projector": "beam", "sy-turret": "turret", "sy-barrier": "barrier", "sy-teleporter": "blink",
  // Torbjörn
  "tb-rivet": "projectile", "tb-turret": "turret", "tb-overload": "buff", "tb-moltencore": "dot",
  // Venture
  "vn-drill": "shotgun", "vn-burrow": "blink", "vn-dash": "dash", "vn-tectonic": "knockback",
  // Brigitte
  "bg-flail": "melee", "bg-pack": "healshot", "bg-bash": "stun", "bg-shield": "barrier", "bg-rally": "buff",
  // Illari
  "il-rifle": "healshot", "il-pylon": "healfield", "il-outburst": "leap", "il-sun": "beam",
  // Juno
  "jn-torpedoes": "healshot", "jn-ring": "buff", "jn-glide": "leap", "jn-orbital": "healfield",
  // Lifeweaver
  "lw-blossom": "healshot", "lw-thorn": "projectile", "lw-platform": "wall", "lw-grip": "hookpull", "lw-treeoflife": "healfield",
  // Zenyatta
  "zy-sphere": "projectile", "zy-harmony": "buff", "zy-discord": "buff", "zy-transcendence": "healfield",
  // Wuyang
  "wy-staff": "healshot", "wy-guardian": "beam", "wy-torrent": "leap", "wy-tidal": "healfield",
  // Domina
  "dm-magnum": "projectile", "dm-barrier": "barrier", "dm-repulsors": "knockback", "dm-crystal": "mine", "dm-panopticon": "wall",
  // Emre
  "em-rifle": "hitscan", "em-aim": "hitscan", "em-frag": "projectile", "em-siphon": "buff", "em-override": "stance",
  // Mizuki
  "mz-glaive": "projectile", "mz-kasa": "healshot", "mz-chain": "stun", "mz-return": "blink", "mz-sanctuary": "healfield",
  // Anran
  "ar-fans": "projectile", "ar-flames": "dot", "ar-rush": "dash", "ar-blaze": "absorb", "ar-ascent": "knockback",
  // Jetpack Cat
  "jc-pawjectiles": "healshot", "jc-flight": "dash", "jc-purr": "buff", "jc-lifeline": "hookpull", "jc-jetpack": "leap",
  // D.Mon
  "dm2-sword": "melee", "dm2-repeater": "projectile", "dm2-barrier": "barrier", "dm2-propulsors": "dash", "dm2-limitbreak": "melee",
  // Sierra
  "sr-rifle": "hitscan", "sr-tracking": "reveal", "sr-drone": "grapplepull", "sr-tremor": "knockback", "sr-trailblazer": "wall",
  // Shion
  "sh-pistols": "hitscan", "sh-execution": "shotgun", "sh-evade": "dash", "sh-joyride": "dash", "sh-spree": "dash",
  // Vendetta
  "vd-fang": "melee", "vd-warding": "absorb", "vd-soaring": "leap",
  "vd-whirlwind": "dash", "vd-projected": "projectile", "vd-sundering": "melee",
  // Doctrine
  "dt-scepter": "healshot", "dt-infuse": "buff", "dt-momentum": "dash", "dt-drones": "buff", "dt-deliverance": "healfield",
};

export function classifyAbility(a: { id: string; name: string; type: string; descriptionMn: string }): DemoKind {
  const override = ABILITY_KIND_OVERRIDE[a.id];
  if (override) return override;

  // Fallback heuristic for any ability not in the table above (e.g. future additions).
  const t = a.type;
  const name = a.name.toLowerCase();
  const text = (a.name + " " + a.descriptionMn).toLowerCase();
  if (t === "Ultimate") return "knockback";
  if (/turret|sentry|drone|pylon/.test(name)) return "turret";
  if (/mine|trap/.test(name)) return "mine";
  if (t === "Movement") return "dash";
  if (t === "Defensive") return "absorb";
  if (/heal|эмчил/.test(text)) return "healshot";
  if (t === "Ability" && /buff|boost|хүчирх|aura/.test(text)) return "buff";
  if (/дэлбэр|тэсэр|knockback|slam|shock/.test(text)) return "knockback";
  return "projectile";
}
