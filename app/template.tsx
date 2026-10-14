"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// Opacity-only: a route change should feel instant, not like content is sliding around.
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}
