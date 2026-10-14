import { Shield, Crosshair, HeartPulse, type LucideIcon } from "lucide-react";
import type { Role } from "@/data/types";

/** One source of truth for how a role looks, so cards, filters, badges and the search palette always agree. */
export const ROLE_META: Record<Role, { icon: LucideIcon; color: string; label: string; blurbMn: string }> = {
  Tank: { icon: Shield, color: "#4cc3ff", label: "Tank", blurbMn: "Орон зай нээж, багаа хамгаалдаг" },
  Damage: { icon: Crosshair, color: "#ff5c61", label: "Damage", blurbMn: "Багийн гол damage өгөгчид" },
  Support: { icon: HeartPulse, color: "#46d69c", label: "Support", blurbMn: "Heal хийж, багаа хүчирхэгжүүлдэг" },
};

export const ROLE_ORDER: Role[] = ["Tank", "Damage", "Support"];
