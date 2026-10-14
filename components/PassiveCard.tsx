import { Passive } from "@/data/types";
import { Sparkles } from "lucide-react";

export function PassiveCard({ passive, label }: { passive: Passive; label: string }) {
  return (
    <div className="rounded-xl border border-line bg-panel p-5">
      <div className="flex items-center gap-2">
        <Sparkles size={15} className="text-support" />
        <span className="font-body text-[11px] text-support">{label}</span>
      </div>
      <h5 className="mt-1 font-display text-lg font-semibold text-paper">{passive.name}</h5>
      <p className="mt-2 font-body text-sm leading-relaxed text-mist">{passive.descriptionMn}</p>
      {passive.impactMn && (
        <p className="mt-2 font-body text-xs leading-relaxed text-fog">{passive.impactMn}</p>
      )}
    </div>
  );
}
