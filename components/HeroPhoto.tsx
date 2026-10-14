"use client";

import { useState, useEffect, useRef } from "react";
import { Role } from "@/data/types";
import { HeroPortrait } from "./HeroPortrait";
import { HeroBust } from "./HeroBust";
import { HeroEmblem } from "./HeroEmblem";
import { cn } from "@/lib/utils";

const EXTS = ["jpg", "jpeg", "png", "webp"];

function capitalize(id: string) {
  return id.charAt(0).toUpperCase() + id.slice(1);
}

/**
 * Builds the list of filenames to try for a hero, in order. The hero id
 * itself (e.g. "ana", "wrecking-ball") is tried first for every extension,
 * then a Capitalized-first-letter variant (e.g. "Ana") is tried as a safety
 * net, since that's the most common naming mistake (saving a file as
 * "Ana.jpg" instead of "ana.jpg") — this matters because production hosting
 * (Linux) is case-sensitive even though a local Windows/macOS folder isn't.
 * This does NOT fix a genuine misspelling (e.g. "wreking-ball.jpg" for
 * "wrecking-ball") — that file has to be renamed to match the real hero id.
 */
function candidateNames(heroId: string): string[] {
  const variants = Array.from(new Set([heroId, capitalize(heroId)]));
  const names: string[] = [];
  for (const ext of EXTS) {
    for (const v of variants) names.push(`${v}.${ext}`);
  }
  return names;
}

/**
 * Drop-in hero image with automatic fallback, using TWO independent slots:
 *
 *  - variant="card" -> looks for /public/images/heroes/icons/{heroId}.{ext}
 *    (small square icon shown in the hero grid / search results / orbit ring)
 *  - variant="bust" -> looks for /public/images/heroes/full/{heroId}.{ext}
 *    (bigger image shown on the hero's own detail page header)
 *
 * Each slot is independent: a hero can have one, both, or neither. If a file
 * is missing or fails to load, this falls back to the generated artwork for
 * that slot, so the site never shows a broken image.
 */
export function HeroPhoto({
  heroId,
  role,
  accent,
  initials,
  className,
  variant = "card",
  showCrest = true,
}: {
  heroId: string;
  role: Role;
  accent: string;
  initials: string;
  className?: string;
  variant?: "card" | "bust";
  showCrest?: boolean;
}) {
  const folder = variant === "card" ? "icons" : "full";
  const names = candidateNames(heroId);
  const [nameIndex, setNameIndex] = useState(0);
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const lastIndex = names.length - 1;

  // Reset fallback state when switching heroes (e.g. prev/next on a detail page).
  useEffect(() => {
    setNameIndex(0);
    setFailed(false);
  }, [heroId, variant]);

  // The first <img> comes from server HTML, so the browser can hit a 404 *before* React hydrates and
  // attaches onError — that event is lost and the fallback would never run (broken-image icon forever).
  // After mount, look at the element directly: finished loading with zero width = it failed.
  const src0 = `/images/heroes/${folder}/${names[nameIndex]}`;
  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) {
      if (nameIndex < lastIndex) setNameIndex((i) => i + 1);
      else setFailed(true);
    }
  }, [src0, nameIndex, lastIndex]);

  if (failed) {
    return variant === "card" ? (
      <HeroPortrait heroId={heroId} role={role} accent={accent} initials={initials} className={className} showCrest={showCrest} />
    ) : (
      <div className={cn("relative overflow-hidden", className)}>
        <HeroBust heroId={heroId} role={role} accent={accent} className="h-full w-full" />
        {showCrest && (
          <div className="absolute right-2 top-2 h-9 w-9 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            <HeroEmblem heroId={heroId} role={role} accent={accent} className="h-full w-full" />
          </div>
        )}
      </div>
    );
  }

  const src = `/images/heroes/${folder}/${names[nameIndex]}`;

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        key={src}
        src={src}
        alt=""
        className="h-full w-full object-cover"
        onError={() => {
          if (nameIndex < names.length - 1) setNameIndex((i) => i + 1);
          else setFailed(true);
        }}
      />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: `inset 0 -40px 50px -20px rgba(5,7,11,0.65)` }} />
      {showCrest && (
        <div className="absolute right-2 top-2 h-9 w-9 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
          <HeroEmblem heroId={heroId} role={role} accent={accent} className="h-full w-full" />
        </div>
      )}
    </div>
  );
}
