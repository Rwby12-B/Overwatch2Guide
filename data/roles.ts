import { Role } from "./types";

export const roles: Record<
  Role,
  {
    nameMn: string;
    descriptionMn: string;
    passiveMn: string;
    color: string;
  }
> = {
  Tank: {
    nameMn: "Танк",
    descriptionMn:
      "Танк баатрууд амьд үлдэх өндөр чадвартай бөгөөд багийнхаа өмнө зогсож дайсны довтолгоог өөр рүүгээ татдаг. Тэд байрлал барьж, орон зай нээж, багийн бусад гишүүдийг хамгаалдаг.",
    passiveMn:
      "Ерөнхий Tank Role Passive: damage хүлээн авахад бага зэрэг эрч хугацаа (Ultimate charge) хурдан цугладаг ба нокбэк (knockback) эффектийг бага хүлээж авдаг.",
    color: "#4cc3ff",
  },
  Damage: {
    nameMn: "Damage",
    descriptionMn:
      "Damage баатрууд багийн гол хор хөнөөл учруулагчид. Тэд дайсныг устгах, довтолгооны эхлэл болон дуусгалыг хариуцдаг өндөр хор хөнөөлтэй баатрууд юм.",
    passiveMn:
      "Ерөнхий Damage Role Passive: дайсныг устгасны дараа богино хугацаанд movement speed нэмэгддэг.",
    color: "#ff5c61",
  },
  Support: {
    nameMn: "Support",
    descriptionMn:
      "Support баатрууд багийнхаа амьдралыг сэргээж, heal хийж, дэмждэг. Тэд дайсны эсрэг debuff тавьж, багийн гишүүдийг хүчирхэгжүүлдэг чухал үүрэгтэй.",
    passiveMn:
      "Ерөнхий Support Role Passive: идэвхгүй байдалд HP-ээ бага зэрэг сэргээдэг бөгөөд healing-ийн хурд хамгаалалттай үед нэмэгддэг.",
    color: "#46d69c",
  },
};
