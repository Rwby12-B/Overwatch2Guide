"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DemoKind, DEMO_LABEL } from "@/lib/demoKind";
import { cn } from "@/lib/utils";

const ENEMY = "#ff5c61";
const ALLY = "#46d69c";
const ENEMIES = [30, 55, 80];
const HAS_ENEMIES: DemoKind[] = [
  "hitscan", "projectile", "shotgun", "beam", "melee", "knockback", "vortex",
  "dot", "mine", "turret", "reveal", "stun", "reflect", "hookpull",
];

export function AbilityDemo({
  kind,
  color,
  heroColor = "#ffffff",
  className,
  showLabel = true,
  allyTarget = false,
}: {
  kind: DemoKind;
  color: string;
  heroColor?: string;
  className?: string;
  showLabel?: boolean;
  /** For "hookpull": true = pulling an ally toward the caster (e.g. Life Grip), false = pulling an enemy (e.g. Chain Hook). */
  allyTarget?: boolean;
}) {
  const reduce = useReducedMotion();
  const loop = (duration: number, extra: Record<string, unknown> = {}) => ({
    duration, repeat: Infinity, ease: "linear" as const, ...extra,
  });
  const ease = (duration: number, extra: Record<string, unknown> = {}) => ({
    duration, repeat: Infinity, ease: "easeInOut" as const, ...extra,
  });

  const renderFx = () => {
    switch (kind) {
      case "hitscan":
        return (
          <>
            {[0, 1, 2].map((i) => (
              <motion.line key={i} x1={52} y1={55} x2={198} y2={55} stroke={color} strokeWidth={2.5}
                initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }}
                transition={loop(0.9, { delay: i * 0.28, repeatDelay: 0.55, times: [0, 0.15, 1] })} />
            ))}
            <motion.circle cx={40} cy={55} r={5} fill="#fff"
              animate={{ opacity: [0, 1, 0], scale: [0.6, 1.4, 0.6] }} transition={loop(0.9, { repeatDelay: 0.55 })}
              style={{ transformOrigin: "40px 55px" }} />
          </>
        );

      case "projectile":
        return (
          <>
            {[0, 1, 2].map((i) => (
              <motion.rect key={i} y={53.5} width={12} height={3} rx={1.5} fill={color}
                initial={{ x: 52, opacity: 0 }} animate={{ x: [52, 192], opacity: [0, 1, 1, 0] }}
                transition={loop(0.8, { delay: i * 0.2, repeatDelay: 0.7, times: [0, 0.1, 0.88, 1] })} />
            ))}
            <motion.circle cx={205} cy={55} r={11} fill="#fff"
              animate={{ opacity: [0, 0, 0.75, 0], scale: [0.6, 0.6, 1.2, 1.4] }}
              transition={loop(1.5, { times: [0, 0.5, 0.58, 0.75] })} style={{ transformOrigin: "205px 55px" }} />
          </>
        );

      case "shotgun":
        return (
          <>
            {ENEMIES.map((y, i) => (
              <motion.line key={y} x1={44} y1={55} x2={196} y2={y} stroke={color} strokeWidth={1.8}
                initial={{ opacity: 0, pathLength: 0 }} animate={{ opacity: [0, 0.9, 0], pathLength: [0, 1, 1] }}
                transition={loop(0.9, { delay: i * 0.06, repeatDelay: 0.9 })} />
            ))}
            <motion.circle cx={40} cy={55} r={7} fill="#fff" opacity={0.5}
              animate={{ scale: [1, 1.8], opacity: [0.5, 0] }} transition={loop(0.9, { repeatDelay: 0.9 })}
              style={{ transformOrigin: "40px 55px" }} />
          </>
        );

      case "beam":
        return (
          <>
            <motion.line x1={50} y1={55} x2={198} y2={55} stroke={color} strokeWidth={9} strokeLinecap="round"
              animate={{ opacity: [0.12, 0.32, 0.12] }} transition={ease(0.9)} />
            <motion.line x1={50} y1={55} x2={198} y2={55} stroke={color} strokeWidth={3} strokeLinecap="round"
              strokeDasharray="7 7" animate={{ strokeDashoffset: [0, -28] }} transition={loop(0.5)} />
          </>
        );

      case "melee":
        return (
          <>
            <motion.path d="M56 32 A32 32 0 0 1 56 78" fill="none" stroke={color} strokeWidth={5} strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1], opacity: [0, 1, 1, 0], rotate: [0, 20] }}
              transition={loop(1, { repeatDelay: 0.5, times: [0, 0.35, 0.75, 1] })}
              style={{ transformOrigin: "40px 55px" }} />
            <motion.circle cx={72} cy={55} r={9} fill={ENEMY}
              animate={{ x: [0, 8, 0], opacity: [1, 0.4, 1] }} transition={loop(1, { repeatDelay: 0.5, times: [0, 0.4, 1] })} />
          </>
        );

      case "dash":
        return (
          <>
            {[0, 1, 2, 3].map((i) => (
              <motion.circle key={i} cy={55} r={9 - i * 1.2} fill={i === 0 ? heroColor : color}
                stroke="#fff" strokeOpacity={i === 0 ? 0.9 : 0} initial={{ cx: 40 }}
                animate={{ cx: [40, 192, 192, 40], opacity: i === 0 ? [1, 1, 1, 1] : [0, 0.5 - i * 0.1, 0, 0] }}
                transition={loop(2.2, { times: [0, 0.3, 0.75, 1], delay: i * 0.05, ease: "easeInOut" })} />
            ))}
          </>
        );

      case "blink":
        return (
          <>
            <motion.circle cx={40} cy={55} r={9} fill={heroColor}
              animate={{ opacity: [1, 1, 0, 0, 1], scale: [1, 1.3, 0.2, 0.2, 1] }}
              transition={loop(1.8, { times: [0, 0.18, 0.24, 0.7, 0.78] })} style={{ transformOrigin: "40px 55px" }} />
            <motion.circle cx={40} cy={55} r={14} fill="none" stroke={color} strokeWidth={2}
              animate={{ opacity: [0, 0.8, 0], scale: [0.6, 1.6, 1.6] }}
              transition={loop(1.8, { times: [0.18, 0.3, 0.4] })} style={{ transformOrigin: "40px 55px" }} />
            <motion.circle cx={168} cy={55} r={9} fill={heroColor}
              animate={{ opacity: [0, 0, 0, 1, 1], scale: [0.2, 0.2, 0.2, 1.3, 1] }}
              transition={loop(1.8, { times: [0, 0.68, 0.74, 0.82, 0.9] })} style={{ transformOrigin: "168px 55px" }} />
            <motion.circle cx={168} cy={55} r={14} fill="none" stroke={color} strokeWidth={2}
              animate={{ opacity: [0, 0.8, 0], scale: [0.6, 1.6, 1.6] }}
              transition={loop(1.8, { times: [0.74, 0.86, 0.96] })} style={{ transformOrigin: "168px 55px" }} />
          </>
        );

      case "leap":
        return (
          <>
            <path d="M40 80 Q120 5 200 80" fill="none" stroke={color} strokeOpacity={0.25} strokeDasharray="3 5" />
            <motion.circle r={9} fill={heroColor}
              animate={{
                cx: [40, 120, 200, 200, 40], cy: [80, 8, 80, 80, 80],
                opacity: [1, 1, 1, 0, 0],
              }}
              transition={loop(2.4, { times: [0, 0.5, 1, 1, 1] })} />
            <motion.ellipse cx={40} cy={83} rx={10} ry={3} fill="#000" opacity={0.3}
              animate={{ scaleX: [1, 0.4, 1] }} transition={loop(2.4)} />
          </>
        );

      case "grapplepull":
        return (
          <>
            <motion.line x1={40} y1={55} x2={175} y2={40} stroke={color} strokeWidth={2}
              initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }}
              transition={loop(2, { times: [0, 0.25, 0.6, 0.85] })} />
            <circle cx={175} cy={40} r={5} fill="none" stroke={color} strokeWidth={2} />
            <motion.circle r={9} fill={heroColor}
              animate={{ cx: [40, 40, 175, 175], cy: [55, 55, 40, 40], opacity: [1, 1, 1, 0] }}
              transition={loop(2, { times: [0, 0.25, 0.6, 0.9] })} />
          </>
        );

      case "hookpull":
        return (
          <>
            <motion.line x1={44} y1={55} x2={196} y2={55} stroke={color} strokeWidth={2}
              initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }}
              transition={loop(2, { times: [0, 0.3, 0.55, 0.8] })} />
            <motion.circle r={9} fill={allyTarget ? ALLY : ENEMY}
              animate={{ cx: [200, 200, 70, 70], opacity: [1, 1, 1, 1] }}
              transition={loop(2, { times: [0, 0.3, 0.65, 1] })} cy={55} />
            <circle cx={40} cy={55} r={9} fill={heroColor} stroke="#fff" strokeOpacity={0.7} strokeWidth={1.5} />
          </>
        );

      case "wall":
        return (
          <>
            <circle cx={40} cy={55} r={9} fill={heroColor} />
            {ENEMIES.map((y) => (
              <circle key={y} cx={198} cy={y} r={6} fill={ENEMY} />
            ))}
            <motion.rect x={116} y={20} width={10} height={70} rx={2} fill={color}
              initial={{ scaleY: 0 }} animate={{ scaleY: [0, 1, 1, 0] }}
              transition={loop(2.4, { times: [0, 0.2, 0.8, 1] })} style={{ transformOrigin: "121px 90px" }} />
            {ENEMIES.map((y, i) => (
              <motion.rect key={y} y={y - 1.5} width={10} height={3} rx={1.5} fill={ENEMY}
                initial={{ x: 190, opacity: 0 }}
                animate={{ x: [190, 132, 132, 190], opacity: [0, 1, 1, 0] }}
                transition={loop(2.4, { delay: 0.3, times: [0, 0.35, 0.5, 0.65] })} />
            ))}
          </>
        );

      case "barrier":
        return (
          <>
            <motion.path d="M104 16 Q136 55 104 94" fill="none" stroke={color} strokeWidth={6} strokeLinecap="round"
              animate={{ opacity: [0.75, 1, 0.75] }} transition={ease(1.2)} />
            <path d="M104 16 Q136 55 104 94" fill="none" stroke="#fff" strokeOpacity={0.35} strokeWidth={1.5} />
            {ENEMIES.map((y, i) => (
              <motion.rect key={i} y={y - 1.5} width={10} height={3} rx={1.5} fill={ENEMY}
                initial={{ x: 196, opacity: 0 }} animate={{ x: [196, 122], opacity: [0, 1, 1, 0] }}
                transition={loop(0.9, { delay: i * 0.3, repeatDelay: 0.5, times: [0, 0.1, 0.88, 1] })} />
            ))}
            <motion.circle cx={118} cy={55} r={16} fill="none" stroke="#fff"
              animate={{ opacity: [0, 0.6, 0], scale: [0.7, 1.1, 1.3] }} transition={loop(0.9, { repeatDelay: 0.5 })}
              style={{ transformOrigin: "118px 55px" }} />
          </>
        );

      case "absorb":
        return (
          <>
            <motion.circle cx={40} cy={55} r={17} fill="none" stroke={color} strokeWidth={2.5}
              animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.95, 1.05, 0.95] }} transition={ease(1.3)}
              style={{ transformOrigin: "40px 55px" }} />
            <circle cx={40} cy={55} r={9} fill={heroColor} />
            {[0, 1].map((i) => (
              <motion.rect key={i} y={53.5} width={10} height={3} rx={1.5} fill={ENEMY}
                initial={{ x: 200, opacity: 0 }} animate={{ x: [200, 62, 62], opacity: [0, 1, 0] }}
                transition={loop(1.6, { delay: i * 0.8, times: [0, 0.75, 0.8] })} />
            ))}
            <motion.circle cx={58} cy={55} r={0} fill="#fff"
              animate={{ r: [0, 10, 0], opacity: [0, 0.8, 0] }} transition={loop(1.6, { times: [0.7, 0.8, 0.9] })} />
          </>
        );

      case "reflect":
        return (
          <>
            <circle cx={40} cy={55} r={9} fill={heroColor} />
            <motion.line x1={30} y1={40} x2={50} y2={70} stroke="#fff" strokeWidth={3} strokeLinecap="round"
              animate={{ rotate: [0, 40, 0] }} transition={loop(1.6, { times: [0, 0.5, 1] })} style={{ transformOrigin: "40px 55px" }} />
            <motion.rect y={53.5} width={10} height={3} rx={1.5} fill={ENEMY}
              animate={{ x: [200, 46, 200], opacity: [1, 1, 1] }} transition={loop(1.6, { times: [0, 0.5, 1] })} />
          </>
        );

      case "healshot":
        return (
          <>
            <line x1={52} y1={55} x2={176} y2={55} stroke={ALLY} strokeOpacity={0.35} strokeDasharray="4 6" />
            <circle cx={190} cy={55} r={8} fill={ALLY} />
            <motion.circle cx={190} cy={55} r={10} fill="none" stroke={ALLY} strokeWidth={2}
              animate={{ scale: [0.8, 2.2], opacity: [0.8, 0] }} transition={ease(1.4)} style={{ transformOrigin: "190px 55px" }} />
            {[0, 1, 2].map((i) => (
              <motion.text key={i} x={176 + i * 12} fontSize={16} fontWeight={700} fill={ALLY} textAnchor="middle"
                initial={{ y: 60, opacity: 0 }} animate={{ y: [60, 26], opacity: [0, 1, 0] }}
                transition={loop(1.5, { delay: i * 0.45 })}>+</motion.text>
            ))}
          </>
        );

      case "healfield":
        return (
          <>
            <circle cx={150} cy={62} r={30} fill={color} fillOpacity={0.08} stroke={color} strokeOpacity={0.35} />
            <motion.circle cx={150} cy={62} r={30} fill="none" stroke={color} strokeWidth={2}
              animate={{ scale: [0.6, 1.15], opacity: [0.9, 0] }} transition={ease(1.6)} style={{ transformOrigin: "150px 62px" }} />
            <circle cx={150} cy={62} r={6} fill={color} />
            {[[132, 50], [166, 50], [150, 78]].map(([x, y], i) => (
              <motion.circle key={i} cx={x} cy={y} r={7} fill={ALLY}
                animate={{ opacity: [0.6, 1, 0.6] }} transition={ease(1.4, { delay: i * 0.3 })} />
            ))}
          </>
        );

      case "buff":
        return (
          <>
            <line x1={52} y1={55} x2={150} y2={55} stroke={color} strokeOpacity={0.4} strokeDasharray="4 6" />
            <circle cx={40} cy={55} r={9} fill={heroColor} />
            <circle cx={170} cy={55} r={8} fill={ALLY} />
            <motion.circle cx={170} cy={55} r={20} fill="none" stroke={color} strokeWidth={2}
              animate={{ scale: [0.85, 1.25], opacity: [0.9, 0] }} transition={ease(1.3)} style={{ transformOrigin: "170px 55px" }} />
            {[0, 1, 2].map((i) => (
              <motion.path key={i} d="M162 60 L170 52 L178 60" fill="none" stroke={color} strokeWidth={3}
                strokeLinecap="round" strokeLinejoin="round"
                animate={{ y: [8, -22], opacity: [0, 1, 0] }} transition={loop(1.2, { delay: i * 0.4 })} />
            ))}
          </>
        );

      case "stun":
        return (
          <>
            <circle cx={40} cy={55} r={9} fill={heroColor} />
            <motion.circle cx={190} cy={55} r={9} fill={ENEMY}
              animate={{ x: [0, -1, 1, -1, 0] }} transition={loop(0.35, { repeatDelay: 0.5 })} />
            <motion.g animate={{ rotate: [0, 15, -15, 0] }} transition={loop(1, { repeatDelay: 0.4 })} style={{ transformOrigin: "190px 38px" }}>
              <path d="M188 30 L193 30 L189 38 L194 38 L186 48 L189 40 L184 40 Z" fill={color} />
            </motion.g>
            <motion.circle cx={190} cy={55} r={16} fill="none" stroke={color} strokeWidth={2}
              animate={{ opacity: [0, 0.7, 0], scale: [0.8, 1.3, 1.3] }} transition={loop(1.4, { repeatDelay: 0.2 })}
              style={{ transformOrigin: "190px 55px" }} />
          </>
        );

      case "knockback":
        return (
          <>
            {[0, 0.55].map((d) => (
              <motion.circle key={d} cx={150} cy={55} fill="none" stroke={color} strokeWidth={3}
                initial={{ r: 4, opacity: 0 }} animate={{ r: [4, 52], opacity: [0.9, 0] }} transition={loop(1.4, { delay: d })} />
            ))}
            <motion.circle cx={150} cy={55} r={10} fill={color}
              animate={{ opacity: [0.9, 0], scale: [1, 2.2] }} transition={loop(1.4)} style={{ transformOrigin: "150px 55px" }} />
            {ENEMIES.map((y, i) => (
              <motion.circle key={y} cy={y} r={7} fill={ENEMY} initial={{ cx: 176 }}
                animate={{ cx: [176, 176, 214, 176] }} transition={loop(1.4, { times: [0, 0.1, 0.5, 1], ease: "easeOut", delay: i * 0.02 })} />
            ))}
          </>
        );

      case "vortex":
        return (
          <>
            <motion.circle cx={150} cy={55} r={5} fill={color}
              animate={{ scale: [1, 1.6, 1] }} transition={ease(1.6)} style={{ transformOrigin: "150px 55px" }} />
            {[0, 1, 2].map((i) => (
              <motion.circle key={i} r={16} fill="none" stroke={color} strokeWidth={2}
                cx={150} cy={55} animate={{ scale: [2.4, 0.2], opacity: [0, 0.8, 0] }}
                transition={loop(1.8, { delay: i * 0.6 })} style={{ transformOrigin: "150px 55px" }} />
            ))}
            {ENEMIES.map((y, i) => (
              <motion.circle key={y} r={7} fill={ENEMY} cy={y}
                animate={{ cx: [205, 150], cy: [y, 55], opacity: [1, 0] }}
                transition={loop(1.8, { delay: i * 0.15, times: [0, 1] })} />
            ))}
          </>
        );

      case "dot":
        return (
          <>
            <circle cx={40} cy={55} r={9} fill={heroColor} />
            <circle cx={180} cy={55} r={9} fill={ENEMY} />
            {[0, 1, 2].map((i) => (
              <motion.path key={i} d="M178 48 q4 -8 0 -14 q6 6 2 14 z" fill={color}
                initial={{ y: 0, opacity: 0 }} animate={{ y: [4, -10], opacity: [0, 1, 0], scale: [0.7, 1.1, 0.7] }}
                transition={loop(1.1, { delay: i * 0.35 })} style={{ transformOrigin: "180px 48px" }} />
            ))}
            <motion.circle cx={180} cy={55} r={11} fill="none" stroke={color} strokeWidth={1.5}
              animate={{ opacity: [0, 0.6, 0] }} transition={loop(1.1)} />
          </>
        );

      case "mine":
        return (
          <>
            <motion.path d="M130 46 L139 55 L130 64 L121 55 Z" fill={color} fillOpacity={0.35} stroke={color} strokeWidth={2}
              animate={{ opacity: [0.6, 1, 0.6] }} transition={ease(1)} />
            <motion.circle cy={55} r={7} fill={ENEMY} initial={{ cx: 226 }}
              animate={{ cx: [226, 138, 138, 226], opacity: [1, 1, 0.3, 1] }}
              transition={loop(3, { times: [0, 0.45, 0.62, 1], ease: "easeInOut" })} />
            <motion.circle cx={130} cy={55} fill="none" stroke={color} strokeWidth={3}
              initial={{ r: 4, opacity: 0 }} animate={{ r: [4, 4, 4, 38, 38], opacity: [0, 0, 0.95, 0, 0] }}
              transition={loop(3, { times: [0, 0.44, 0.47, 0.68, 1] })} />
            <circle cx={40} cy={55} r={9} fill={heroColor} />
          </>
        );

      case "turret":
        return (
          <>
            <motion.g initial={{ opacity: 0, y: 10 }} animate={{ opacity: [0, 1, 1, 1], y: [10, 0, 0, 0] }}
              transition={loop(3, { times: [0, 0.15, 0.9, 1], ease: "easeOut" })}>
              <rect x={108} y={62} width={26} height={10} rx={2} fill={color} fillOpacity={0.35} stroke={color} />
              <circle cx={121} cy={58} r={8} fill={color} fillOpacity={0.6} stroke="#fff" strokeOpacity={0.6} />
              <rect x={126} y={55} width={16} height={4} rx={1.5} fill={color} />
            </motion.g>
            {[0, 1, 2].map((i) => (
              <motion.rect key={i} y={56.5} width={9} height={3} rx={1.5} fill={color}
                initial={{ x: 144, opacity: 0 }} animate={{ x: [144, 196], opacity: [0, 1, 1, 0] }}
                transition={loop(0.6, { delay: 0.6 + i * 0.2, repeatDelay: 1.2, times: [0, 0.1, 0.85, 1] })} />
            ))}
            <circle cx={202} cy={56} r={6} fill={ENEMY} />
          </>
        );

      case "stance":
        return (
          <>
            <motion.circle cx={40} cy={55} r={9} fill={heroColor}
              animate={{ r: [9, 15, 9], filter: ["brightness(1)", "brightness(1.6)", "brightness(1)"] }}
              transition={ease(1.6)} style={{ transformOrigin: "40px 55px" }} />
            <motion.circle cx={40} cy={55} r={20} fill="none" stroke={color} strokeWidth={2}
              animate={{ scale: [0.6, 1.5], opacity: [0.9, 0] }} transition={loop(1.6)} style={{ transformOrigin: "40px 55px" }} />
            <motion.path d="M30 55 L40 40 L50 55 L40 70 Z" fill="none" stroke={color} strokeWidth={1.5}
              animate={{ rotate: [0, 360] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "40px 55px" }} />
          </>
        );

      case "reveal":
        return (
          <>
            <circle cx={40} cy={55} r={9} fill={heroColor} />
            {ENEMIES.map((y, i) => (
              <g key={y}>
                <circle cx={195} cy={y} r={7} fill="none" stroke={ENEMY} strokeOpacity={0.4} />
                <motion.circle cx={195} cy={y} r={7} fill={ENEMY}
                  animate={{ opacity: [0.15, 1, 0.15] }} transition={ease(1.6, { delay: i * 0.25 })} />
                <motion.circle cx={195} cy={y} r={13} fill="none" stroke={color} strokeWidth={1.5}
                  animate={{ scale: [0.7, 1.3], opacity: [0.8, 0] }} transition={loop(1.6, { delay: i * 0.25 })}
                  style={{ transformOrigin: `195px ${y}px` }} />
              </g>
            ))}
            <motion.path d="M52 55 H190" stroke={color} strokeWidth={1} strokeDasharray="3 4" strokeOpacity={0.4}
              animate={{ strokeDashoffset: [0, -14] }} transition={loop(0.8)} />
          </>
        );

      case "stealth":
        return (
          <>
            <motion.circle cx={90} cy={55} r={9} fill={heroColor} stroke={color} strokeWidth={1.5}
              animate={{ opacity: [1, 0.15, 1] }} transition={ease(1.8)} />
            <motion.circle cx={90} cy={55} r={15} fill="none" stroke={color} strokeOpacity={0.4}
              animate={{ scale: [0.8, 1.3], opacity: [0.5, 0] }} transition={loop(1.8)} style={{ transformOrigin: "90px 55px" }} />
            <circle cx={195} cy={55} r={7} fill={ENEMY} opacity={0.6} />
            <motion.path d="M180 45 L210 65 M210 45 L180 65" stroke={ENEMY} strokeWidth={2}
              animate={{ opacity: [0, 0, 0.8, 0] }} transition={loop(1.8, { times: [0, 0.5, 0.65, 0.8] })} />
          </>
        );

      case "clone":
        return (
          <>
            <circle cx={70} cy={55} r={9} fill={heroColor} />
            <motion.g initial={{ opacity: 0, x: -12 }} animate={{ opacity: [0, 0, 1, 1], x: [-12, -12, 0, 0] }}
              transition={loop(2.2, { times: [0, 0.4, 0.55, 1] })}>
              <circle cx={150} cy={55} r={9} fill="none" stroke={color} strokeWidth={2} strokeDasharray="3 3" />
              <circle cx={150} cy={55} r={9} fill={color} fillOpacity={0.25} />
            </motion.g>
            <motion.circle cx={150} cy={55} r={16} fill="none" stroke={color} strokeWidth={1.5}
              animate={{ opacity: [0, 0, 0.8, 0], scale: [0.6, 0.6, 1.3, 1.3] }}
              transition={loop(2.2, { times: [0.4, 0.5, 0.65, 0.9] })} style={{ transformOrigin: "150px 55px" }} />
          </>
        );

      case "resurrect":
        return (
          <>
            <circle cx={40} cy={55} r={9} fill={heroColor} />
            <motion.circle cx={170} cy={62} r={9} fill={ALLY}
              initial={{ opacity: 0.25 }} animate={{ opacity: [0.25, 0.25, 1], cy: [68, 68, 55] }}
              transition={loop(2.4, { times: [0, 0.55, 0.85] })} />
            <motion.path d="M162 30 v14 M155 37 h14" stroke={color} strokeWidth={2.5} strokeLinecap="round"
              animate={{ opacity: [0, 1, 1, 0], scale: [0.6, 1.1, 1.1, 0.6] }}
              transition={loop(2.4, { times: [0.55, 0.7, 0.85, 1] })} style={{ transformOrigin: "162px 37px" }} />
            <motion.circle cx={170} cy={55} r={18} fill="none" stroke={ALLY} strokeWidth={2}
              animate={{ opacity: [0, 0, 0.8, 0], scale: [0.6, 0.6, 1.4, 1.4] }}
              transition={loop(2.4, { times: [0.55, 0.65, 0.8, 1] })} style={{ transformOrigin: "170px 55px" }} />
          </>
        );

      default:
        return <circle cx={40} cy={55} r={9} fill={heroColor} />;
    }
  };

  return (
    <div className={cn("relative overflow-hidden rounded-lg border border-line/70 bg-void/70", className)}>
      <svg viewBox="0 0 240 110" className="block w-full" role="img" aria-label={`${DEMO_LABEL[kind]} схем`}>
        <defs>
          <pattern id="dgrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" stroke="#fff" strokeOpacity="0.045" />
          </pattern>
          <radialGradient id="dglow" cx="20%" cy="50%" r="70%">
            <stop offset="0" stopColor={color} stopOpacity="0.16" />
            <stop offset="1" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="240" height="110" fill="url(#dgrid)" />
        <rect width="240" height="110" fill="url(#dglow)" />

        {HAS_ENEMIES.includes(kind) &&
          kind !== "melee" && kind !== "reflect" && kind !== "wall" && kind !== "barrier" &&
          kind !== "mine" && kind !== "turret" && kind !== "reveal" && kind !== "stun" && kind !== "hookpull" &&
          ENEMIES.map((y) => <circle key={y} cx={205} cy={y} r={7} fill={ENEMY} fillOpacity={0.85} />)}

        {!["dash", "blink", "leap", "grapplepull", "hookpull", "wall", "absorb", "reflect", "stun",
           "knockback", "vortex", "dot", "mine", "turret", "stance", "reveal", "stealth", "clone", "resurrect", "healshot", "healfield", "buff"].includes(kind) && (
          <>
            <circle cx={40} cy={55} r={9} fill={heroColor} stroke="#fff" strokeOpacity={0.85} strokeWidth={1.5} />
            <circle cx={40} cy={55} r={15} fill="none" stroke={heroColor} strokeOpacity={0.3} />
          </>
        )}

        {reduce ? (
          <line x1={56} y1={55} x2={190} y2={55} stroke={color} strokeWidth={2} strokeDasharray="5 6" />
        ) : (
          renderFx()
        )}
      </svg>
      {showLabel && (
        <span
          className="absolute left-2 top-2 rounded px-1.5 py-0.5 font-body text-[10px] font-semibold"
          style={{ background: `${color}22`, color }}
        >
          {DEMO_LABEL[kind]}
        </span>
      )}
    </div>
  );
}
