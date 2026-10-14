import { Shield, Crosshair, HeartPulse } from "lucide-react";
import { Role } from "@/data/types";
import { cn } from "@/lib/utils";

const ROLE_META: Record<Role, { icon: typeof Shield; color: string; bg: string }> = {
  Tank: { icon: Shield, color: "text-tank", bg: "bg-tank/10 border-tank/30" },
  Damage: { icon: Crosshair, color: "text-damage", bg: "bg-damage/10 border-damage/30" },
  Support: { icon: HeartPulse, color: "text-support", bg: "bg-support/10 border-support/30" },
};

export function RoleBadge({
  role,
  subRoleLabel,
  size = "md",
}: {
  role: Role;
  subRoleLabel?: string;
  size?: "sm" | "md";
}) {
  const meta = ROLE_META[role];
  const Icon = meta.icon;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-body font-medium",
        meta.bg,
        meta.color,
        size === "sm" ? "px-2 py-0.5 text-[11px]" : "px-3 py-1 text-xs",
      )}
    >
      <Icon size={size === "sm" ? 12 : 14} strokeWidth={2.25} />
      {role}
      {subRoleLabel ? <span className="opacity-60">· {subRoleLabel}</span> : null}
    </span>
  );
}
