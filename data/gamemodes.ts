import { ModeId } from "@/components/ModeVisual";

export interface GameMode {
  id: ModeId;
  name: string;
  color: string;
  summaryMn: string;
  objectiveMn: string;
  howMn: string;
  winMn: string;
  /** Extra "good to know" gameplay notes, shown as a bullet list. */
  notesMn: string[];
  /** true for the separate build-your-loadout mode (not part of standard Quick Play/Competitive rotation). */
  special?: boolean;
}

export const gameModes: GameMode[] = [
  {
    id: "escort",
    name: "Escort",
    color: "#5aa2ff",
    summaryMn: "Payload (тэрэг) шахах горим.",
    objectiveMn: "Attacker багийнхаа тэргийг (payload) газрын зураг дагуу эцсийн цэг хүртэл хөдөлгөх.",
    howMn:
      "Нэг баг Attacker, нөгөө нь Defender. Attacker багийн гишүүн payload-ийн дэргэд байх тусам тэрэг замаараа урагшилна. Ойролцоо attacker байхгүй бол тэрэг зогсоно.",
    winMn: "Attacker payload-ийг эцсийн checkpoint хүртэл хугацаандаа хүргэвэл ялна. Хүрэхгүй бол Defender ялна.",
    notesMn: [
      "Payload дотор нь байх үед аажмаар эмчлэгддэг тул дэргэд нь байхыг хичээ.",
      "Checkpoint бүрт хугацаа нэмэгддэг тул payload-аа зогсоохгүй байх нь чухал.",
      "Defender талд байхдаа payload-ийн өмнө choke point дээр хамгаалах нь үр дүнтэй.",
    ],
  },
  {
    id: "hybrid",
    name: "Hybrid",
    color: "#46d69c",
    summaryMn: "Control point + Escort хосолсон горим.",
    objectiveMn: "Эхлээд нэг Control point эзлээд, дараа нь payload-ийг эцсийн цэг хүртэл хөдөлгөх.",
    howMn:
      "Эхлээд Attacker нэг Control point-ийг эзэлнэ. Эзэлмэгц payload идэвхжиж, түүнийг escort хийх шатанд шилждэг — Escort-той адил зарчим.",
    winMn: "Attacker хугацаандаа Control point-ийг эзэлж, payload-ийг эцэст нь хүргэвэл ялна.",
    notesMn: [
      "Эхний Control point дээр хурдан давуу байдал олж авах нь дараагийн шатанд маш чухал.",
      "Control point эзлэх, payload шахах хоёр өөр тактик шаарддаг тул багийн зохицуулалт чухал.",
    ],
  },
  {
    id: "control",
    name: "Control",
    color: "#ffd166",
    summaryMn: "Дан цэгийг эзлэх горим (King of the Hill).",
    objectiveMn: "Газрын зураг дундах нэг Control point-ийг дайснаас илүү удаан эзэмших.",
    howMn:
      "Хоёр баг ижил нэг Control point дээр тэмцэлддэг. Тухайн цэгийг эзэмшиж байгаа баг аажмаар capture % цуглуулна. Дайсан ойртвол цуглуулалт зогсож, эсрэг тал эзэлбэл % буурч эхэлнэ.",
    winMn: "Аль нэг баг 100%-д хүрвэл тухайн round-ыг авна. Match нь Best of 3 (эхэлж 2 round хожсон баг ялна).",
    notesMn: [
      "Payload, HP-pack байхгүй тул цэвэр team fight-ын мэдрэмжтэй горим.",
      "Round бүр өөр газрын зураг (эсвэл зургийн өөр хэсэг) дээр тоглогддог.",
    ],
  },
  {
    id: "push",
    name: "Push",
    color: "#ffa620",
    summaryMn: "Хоёр баг нэг robot-ыг өөр өөр чиглэлд түлхэх горим.",
    objectiveMn: "Robot-ыг дайсны бааз руу аль болох хол түлхэх.",
    howMn:
      "Голд байрлах robot-ыг аль нэг багийн гишүүн дэргэд нь зогсож байгаагаас хамааран өөрсдийн чиглэлдээ түлхэнэ. Хоёр багийн гишүүн зэрэг ойрхон байвал robot зогсоно — tug-of-war шиг.",
    winMn: "Robot-ыг дайсны бааз хүртэл бүрэн түлхсэн баг шууд ялна; цаг дуусвал robot-ыг илүү хол түлхсэн баг ялна.",
    notesMn: [
      "Robot хамгаалалт болгож ашиглаж болно — дэргэд нь зогсож байхад доторх хамгаалалтын давуу талтай.",
      "Map хоёр чиглэлд тэгш хэмтэй учраас байрлал тэнцвэртэй.",
    ],
  },
  {
    id: "flashpoint",
    name: "Flashpoint",
    color: "#ff5c61",
    summaryMn: "Байнга шилждэг олон Control point-той горим.",
    objectiveMn: "Санамсаргүй идэвхжсэн Control point-уудаас 3-ыг хамгийн түрүүнд эзлэх.",
    howMn:
      "Маш том map дээр 5 цэг байдаг. Эхлээд төвийн цэг идэвхждэг, дараа нь санамсаргүй нэг цэг идэвхжиж, багууд шинэ спавнаас шинэ цэг рүү тэмцэлддэг.",
    winMn: "3 flashpoint-ыг хамгийн түрүүнд capture хийсэн баг ялна.",
    notesMn: [
      "Спавн цэг бүр удаа дутамд өөрчлөгддөг тул газрын зураг мэдлэг чухал.",
      "Control-той адил payload/escort механик байхгүй.",
    ],
  },
  {
    id: "stadium",
    name: "Stadium",
    color: "#ffd166",
    summaryMn: "Build-your-loadout тусгай горим — стандарт rotation-д ордоггүй.",
    objectiveMn: "Round бүрийн хооронд цуглуулсан мөнгөөр item/perk худалдан авч, баатраа улам хүчирхэгжүүлэн Best of 7 series-ийг хожих.",
    howMn:
      "Round бүрийн эхэнд болон төгсгөлд мөнгө олж, дэлгүүрээс тухайн баатартаа зориулсан тусгай item, power зэргийг худалдан авч өөрийн build-ээ бэхжүүлнэ. Эдийн засаг, item сонголт round бүр дээшилнэ.",
    winMn: "Best of 7 series-ийн 4 round-ыг эхэлж хожсон баг ялна.",
    notesMn: [
      "Энэ горим нь Quick Play / Competitive-ийн стандарт 5 горимоос тусдаа, сонголтоор тоглогддог.",
      "Эхлэгчдэд эхлээд стандарт горимуудыг эзэмшихийг зөвлөж байна — item/economy давхар суралцах шаардлагатай.",
    ],
    special: true,
  },
];
