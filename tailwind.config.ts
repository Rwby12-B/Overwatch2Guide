import type { Config } from "tailwindcss";

const hex =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='%23ffffff' stroke-opacity='0.06'/%3E%3Cpath d='M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34' fill='none' stroke='%23ffffff' stroke-opacity='0.06'/%3E%3C/svg%3E\")";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#090e1f",
        ink: "#0e1530",
        panel: "#131c3a",
        panel2: "#19244a",
        line: "#27345f",
        fog: "#8e9ac0",
        mist: "#bcc5e3",
        paper: "#f4f2ec",
        ember: { DEFAULT: "#ffa620", soft: "#ffc15e", dim: "#8a5a12" },
        amber: { DEFAULT: "#ffd166" },
        signal: { DEFAULT: "#5aa2ff", soft: "#9cc3ff" },
        tank: "#4cc3ff",
        damage: "#ff5c61",
        support: "#46d69c",
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Narrow", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        hexgrid: hex,
      },
      boxShadow: {
        ember: "0 0 0 1px rgba(255,166,32,0.35), 0 8px 30px -8px rgba(255,166,32,0.35)",
      },
      keyframes: {
        drift: {
          "0%,100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-14px,0)" },
        },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        "spin-rev": { from: { transform: "rotate(360deg)" }, to: { transform: "rotate(0deg)" } },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseSoft: { "0%,100%": { opacity: "0.45" }, "50%": { opacity: "1" } },
      },
      animation: {
        drift: "drift 7s ease-in-out infinite",
        "spin-slow": "spin-slow 48s linear infinite",
        "spin-slow-rev": "spin-rev 36s linear infinite",
        "spin-mid": "spin-slow 7s linear infinite",
        "spin-orbit": "spin-slow 70s linear infinite",
        "spin-orbit-rev": "spin-rev 70s linear infinite",
        shimmer: "shimmer 3s linear infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
