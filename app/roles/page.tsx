import Link from "next/link";
import { roles } from "@/data/roles";
import { subRoles, SubRoleInfo } from "@/data/subroles";
import { RoleBadge } from "@/components/RoleBadge";
import { Role } from "@/data/types";

export const metadata = { title: "Role-ууд — Overwatch Mongolia" };

const ROLE_ORDER: Role[] = ["Tank", "Damage", "Support"];

export default function RolesPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-12 md:px-8">
      <h1 className="font-display text-3xl font-bold text-paper sm:text-4xl">Role ба Sub-role</h1>
      <p className="mt-2 max-w-2xl font-body text-sm leading-relaxed text-fog">
        Overwatch-ийн баатрууд гурван үндсэн role-д хуваагддаг бөгөөд тус бүр өөрийн
        гэсэн Sub-role-той. Sub-role бүр өөрийн гэсэн Global Passive-той ирдэг.
      </p>

      <div className="mt-10 space-y-10">
        {ROLE_ORDER.map((roleKey) => {
          const info = roles[roleKey];
          const roleSubRoles = (Object.values(subRoles) as SubRoleInfo[]).filter(
            (sr) => sr.role === roleKey && sr.id !== "Тодорхойгүй",
          );
          return (
            <section key={roleKey} className="rounded-2xl border border-line bg-panel p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <RoleBadge role={roleKey} />
                <Link
                  href={`/heroes?role=${roleKey}`}
                  className="focus-ring font-body text-sm text-ember hover:underline"
                >
                  {info.nameMn} баатрууд руу очих →
                </Link>
              </div>
              <p className="mt-4 font-body text-sm leading-relaxed text-mist">{info.descriptionMn}</p>
              <p className="mt-3 rounded-lg border border-line/60 bg-panel2 p-3 font-body text-xs leading-relaxed text-fog">
                <strong className="text-mist">Global Role Passive: </strong>
                {info.passiveMn}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {roleSubRoles.map((sr) => (
                  <div key={sr.id} className="rounded-lg border border-line/60 bg-panel2 p-4">
                    <h3 className="font-display text-base font-semibold text-paper">{sr.nameMn}</h3>
                    <p className="mt-1 font-body text-xs leading-relaxed text-fog">{sr.passiveMn}</p>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
