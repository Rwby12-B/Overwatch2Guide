"use client";

import { useId } from "react";
import { Role } from "@/data/types";
import { getHeroFamily, hashSeed, mulberry32 } from "@/lib/heroVisuals";
import { cn } from "@/lib/utils";

const ROLE_TINT: Record<Role, string> = { Tank: "#4cc3ff", Damage: "#ff5c61", Support: "#46d69c" };

/**
 * Original stylised bust/portrait for a hero: a silhouette (varied by "family"
 * — human / visored / helmeted / robotic / mech-pilot / animal / hooded /
 * masked) lit from one side, with glowing eyes/visor in the hero's accent
 * colour and a small role-tinted rim light. This is entirely original artwork
 * — no Blizzard character likeness is referenced or traced — intended as a
 * stand-in for a licensed hero portrait, which this project cannot include.
 */
export function HeroBust({
  heroId,
  role,
  accent,
  className,
  showBadge = false,
}: {
  heroId: string;
  role: Role;
  accent: string;
  className?: string;
  showBadge?: boolean;
}) {
  const uid = useId().replace(/:/g, "");
  const family = getHeroFamily(heroId);
  const rand = mulberry32(hashSeed(heroId + "-bust"));
  const rim = ROLE_TINT[role];

  // Small per-hero variation so two heroes of the same family don't look identical.
  const jaw = 60 + rand() * 6;
  const browTilt = (rand() - 0.5) * 6;
  const markCount = family === "robot" || family === "mech" ? 2 + Math.floor(rand() * 3) : 0;

  const head = () => {
    switch (family) {
      case "animal":
        return (
          <>
            <path d="M62 118 C58 78 76 46 100 46 C124 46 142 78 138 118 C134 150 66 150 62 118 Z" fill={`url(#skin-${uid})`} />
            <path d="M66 54 L54 24 L78 42 Z" fill={`url(#skin-${uid})`} />
            <path d="M134 54 L146 24 L122 42 Z" fill={`url(#skin-${uid})`} />
            <ellipse cx="83" cy="98" rx="7" ry="9" fill={accent} style={{ filter: `drop-shadow(0 0 6px ${accent})` }} />
            <ellipse cx="117" cy="98" rx="7" ry="9" fill={accent} style={{ filter: `drop-shadow(0 0 6px ${accent})` }} />
          </>
        );
      case "robot":
        return (
          <>
            <path d="M64 60 L136 60 L142 96 L130 150 L70 150 L58 96 Z" fill={`url(#skin-${uid})`} />
            <rect x="70" y="88" width="60" height="14" rx="3" fill={accent} opacity="0.9" style={{ filter: `drop-shadow(0 0 8px ${accent})` }} />
            {Array.from({ length: markCount }).map((_, i) => (
              <rect key={i} x={70 + i * 14} y={112} width="8" height="8" fill={rim} opacity="0.7" />
            ))}
          </>
        );
      case "mech":
        return (
          <>
            <path d="M56 70 Q100 40 144 70 L152 130 Q100 158 48 130 Z" fill={`url(#skin-${uid})`} />
            <path d="M74 82 Q100 68 126 82 L124 112 Q100 124 76 112 Z" fill="#05070B" />
            <path d="M74 82 Q100 68 126 82 L124 112 Q100 124 76 112 Z" fill={accent} opacity="0.28" />
            <ellipse cx="100" cy="98" rx="20" ry="9" fill={accent} opacity="0.85" style={{ filter: `drop-shadow(0 0 10px ${accent})` }} />
            {Array.from({ length: markCount }).map((_, i) => (
              <circle key={i} cx={66 + i * 22} cy={140} r="3.5" fill={rim} opacity="0.8" />
            ))}
          </>
        );
      case "hood":
        return (
          <>
            <path d="M60 138 C54 90 66 48 100 48 C134 48 146 90 140 138 C140 150 60 150 60 138 Z" fill={`url(#skin-${uid})`} />
            <path d="M50 96 C46 60 72 30 100 30 C128 30 154 60 150 96 C150 74 128 44 100 44 C72 44 50 74 50 96 Z" fill="#05070B" opacity="0.92" />
            <path d="M78 104 Q100 96 122 104 L120 116 Q100 122 80 116 Z" fill={accent} opacity="0.7" style={{ filter: `drop-shadow(0 0 6px ${accent})` }} />
          </>
        );
      case "mask":
        return (
          <>
            <path d="M64 118 C60 78 76 46 100 46 C124 46 140 78 136 118 C132 148 68 148 64 118 Z" fill={`url(#skin-${uid})`} />
            <path
              d="M72 92 Q100 80 128 92 L124 108 Q100 118 76 108 Z"
              fill="#05070B" stroke={accent} strokeWidth="1.5" opacity="0.95"
            />
            <ellipse cx="86" cy="99" rx="6" ry="4" fill={accent} style={{ filter: `drop-shadow(0 0 6px ${accent})` }} />
            <ellipse cx="114" cy="99" rx="6" ry="4" fill={accent} style={{ filter: `drop-shadow(0 0 6px ${accent})` }} />
          </>
        );
      case "visor":
        return (
          <>
            <path d="M66 116 C62 78 78 46 100 46 C122 46 138 78 134 116 C130 146 70 146 66 116 Z" fill={`url(#skin-${uid})`} />
            <rect x="70" y="88" width="60" height="12" rx="6" fill="#05070B" />
            <rect x="70" y="88" width="60" height="12" rx="6" fill={accent} opacity="0.55" style={{ filter: `drop-shadow(0 0 8px ${accent})` }} />
          </>
        );
      case "helmet":
        return (
          <>
            <path d="M62 122 C58 80 74 46 100 46 C126 46 142 80 138 122 C134 150 66 150 62 122 Z" fill={`url(#skin-${uid})`} />
            <path d="M54 88 C54 56 74 34 100 34 C126 34 146 56 146 88 L134 88 C134 62 118 48 100 48 C82 48 66 62 66 88 Z" fill="#05070B" opacity="0.92" />
            <rect x="60" y="86" width="80" height="8" fill={rim} opacity="0.6" />
            <circle cx="86" cy="102" r="4.5" fill={accent} style={{ filter: `drop-shadow(0 0 5px ${accent})` }} />
            <circle cx="114" cy="102" r="4.5" fill={accent} style={{ filter: `drop-shadow(0 0 5px ${accent})` }} />
          </>
        );
      default:
        return (
          <>
            <path d="M66 118 C62 80 78 46 100 46 C122 46 138 80 134 118 C130 148 70 148 66 118 Z" fill={`url(#skin-${uid})`} />
            <circle cx="86" cy="100" r="4.5" fill="#05070B" />
            <circle cx="114" cy="100" r="4.5" fill="#05070B" />
          </>
        );
    }
  };

  return (
    <div className={cn("relative aspect-[4/5] overflow-hidden", className)}>
      <svg viewBox="0 0 200 220" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <linearGradient id={`bg-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={accent} stopOpacity="0.35" />
            <stop offset="0.55" stopColor="#0A0D14" stopOpacity="1" />
            <stop offset="1" stopColor="#05070B" stopOpacity="1" />
          </linearGradient>
          <linearGradient id={`skin-${uid}`} x1="0" y1="0" x2="1" y2="0.3">
            <stop offset="0" stopColor="#3a4256" />
            <stop offset="0.45" stopColor="#232a3a" />
            <stop offset="1" stopColor="#11151f" />
          </linearGradient>
          <radialGradient id={`vg-${uid}`} cx="50%" cy="30%" r="75%">
            <stop offset="0" stopColor="#000" stopOpacity="0" />
            <stop offset="1" stopColor="#000" stopOpacity="0.55" />
          </radialGradient>
        </defs>

        <rect width="200" height="220" fill={`url(#bg-${uid})`} />

        {/* shoulders / torso silhouette */}
        <path d="M22 220 C22 176 54 156 100 156 C146 156 178 176 178 220 Z" fill="#161B26" />
        <path d="M22 220 C22 176 54 156 100 156 C146 156 178 176 178 220 Z" fill={accent} opacity="0.08" />
        <path d="M100 156 L100 220" stroke={rim} strokeOpacity="0.25" strokeWidth="1" />

        <g style={{ transform: `rotate(${browTilt}deg)`, transformOrigin: "100px 100px" }}>{head()}</g>

        {/* rim light edge (role colour) */}
        <path
          d="M100 46 C126 46 142 80 138 118 C136 132 128 142 118 148"
          fill="none" stroke={rim} strokeOpacity="0.55" strokeWidth="2"
        />

        <rect width="200" height="220" fill={`url(#vg-${uid})`} />
      </svg>

      {showBadge && (
        <span
          className="absolute bottom-2 left-2 rounded px-1.5 py-0.5 font-display text-[10px] text-paper/70"
          style={{ background: "rgba(5,7,11,0.55)" }}
        >
          Original art
        </span>
      )}
    </div>
  );
}
