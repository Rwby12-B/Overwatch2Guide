import { Hero } from "./types";

const UPDATED = "2026-09-18";
const S5 = "2026-10-08";

export const domina: Hero = {
  id: "domina",
  name: "Domina",
  nameMn: "Домина",
  role: "Tank",
  subRole: "Stalwart",
  colorAccent: "#B24A6B",
  initials: "DM",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "intermediate",
  overview: {
    summaryMn:
      "Домина бол Vishkar корпорацийн удирдагч бөгөөд hard-light технологи ашиглан алсаас байрлал эзэлдэг, Sigma-гаас хойшхи анхны жинхэнэ 'poke' танк.",
    playstyleMn:
      "Photon Magnum-аараа дунд зайд эрчимтэй цохилт хийж, хэсэгчилсэн Barrier Array-гаараа байрлалаа хамгаалж, Sonic Repulsors-оор дайсныг холдуулж эсвэл нокдаун хийнэ.",
    strengthsMn: [
      "Barrier Array хэсэг тус бүрдээ эвдэрдэг тул дайсанд илүү хэцүү сонголт өгдөг",
      "Sonic Repulsors-оор dive-ийг холдуулж, ханад цохиж чадна",
      "Panopticon Ultimate дайсныг бүрэн тусгаарлаж healing хаадаг",
    ],
    weaknessesMn: ["Ойрын зайд эмзэг", "Хамгаалалт нь бөглөрсөн шил биш тул тодорхой өнцгөөс эвдэрдэг"],
    tipsMn: [
      "Barrier Array-гийн аль хэсгийг эвдэж байгааг ажиглаж эсрэг талаас нөхөж дэмж.",
      "Panopticon-ыг ганц дайсныг эмчлэгчээс нь тусгаарлахад ашигла — EMP зэрэг Hack чадвар үүнийг устгадаг гэдгийг сана.",
      "Efficient Design perk нь Barrier Array ашигласны дараа shield болон passive healing өгдгийг ашиглаж удаан хугацаагаар байрлал бариарай.",
    ],
  },
  abilities: [
    { id: "dm-magnum", name: "Photon Magnum", nameMn: "Photon Magnum", type: "Primary Fire", keybind: "LMB", descriptionMn: "Дунд зайд цацраг харвадаг буу, хэдэн секундын дараа эцсийн хүчтэй цохилт өгнө.", verified: true },
    { id: "dm-barrier", name: "Barrier Array", nameMn: "Barrier Array", type: "Defensive", keybind: "Shift", descriptionMn: "Урд талдаа хэсэгчилсэн hard-light barrier байрлуулна. Хэсэг тус бүрийг тусад нь эвдэх шаардлагатай.", verified: true },
    { id: "dm-repulsors", name: "Sonic Repulsors", nameMn: "Sonic Repulsors", type: "Ability", keybind: "E", descriptionMn: "Дайсныг холдуулж, хана руу цохивол stun хийнэ.", verified: true },
    { id: "dm-crystal", name: "Crystal Charge", nameMn: "Crystal Charge", type: "Ability", descriptionMn: "Тэсрэх болор шидэж, дэлбэрэлтээр эсвэл дахин идэвхжүүлж дэлбэлж болно.", verified: true },
    { id: "dm-panopticon", name: "Panopticon", nameMn: "Panopticon", type: "Ultimate", descriptionMn: "Хос чиглэлтэй хамгаалалттай торон торго үүсгэж дайсныг дотор нь хорино. Гарахгүй бол дэлбэрч damage учруулна.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "dm-minor-1",
        name: "Efficient Design",
        descriptionMn: "Barrier Array ашигласны дараа 50 нэмэлт shield авч, идэвхгүй HP сэргээлт идэвхждэг.",
        effectMn: "Барьераа ашигласны дараа илүү удаан хугацаагаар байрлал барих боломжтой.",
        verified: true,
      },
      {
        id: "dm-minor-2",
        name: "Extended Power",
        descriptionMn: "Photon Magnum-ий довтолгооны зай 20%-иар нэмэгдэнэ.",
        effectMn: "Хол зайд илүү нөлөөтэй болно.",
        verified: true,
      },
    ],
    major: [
      {
        id: "dm-major-1",
        name: "Disruptive Detonation",
        descriptionMn: "Crystal Charge дэлбэрэлт дайсныг 2 секундэд 30%-иар slow хийнэ.",
        effectMn: "Дайвлагч танк болон эмзэг баатруудыг пиннэж болно.",
        verified: true,
      },
      {
        id: "dm-major-2",
        name: "Corporate Retreat",
        descriptionMn: "Barrier Array идэвхтэй үед нэг удаа өөр байрлал руу зөөж болно.",
        effectMn: "Хамгаалалтаа шинэ өнцөгт шилжүүлж болно.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "dm-passive", name: "Steadfast", nameMn: "Steadfast", descriptionMn: "Knockback болон slow эффектийг бага хүлээн авна (Stalwart passive).", verified: true }],
};

export const emre: Hero = {
  id: "emre",
  name: "Emre",
  nameMn: "Эмрэ",
  role: "Damage",
  subRole: "Specialist",
  colorAccent: "#B04A4A",
  initials: "EM",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "intermediate",
  overview: {
    summaryMn:
      "Эмрэ бол Overwatch-ийн үүсгэн байгуулагчдын нэг байсан, одоо cyborg болж эргэн ирсэн, лайфстилтэй дайрагч damage баатар.",
    playstyleMn:
      "Synthetic Burst Rifle-аар цуврал буудлага хийж, Cyber Frag-аар AoE damage, Siphon Blaster-аар healing авч, Override Protocol Ultimate-ээр group fight-ийг шийднэ.",
    strengthsMn: [
      "Siphon Blaster-аар өөрийгөө heal хийдэг тул удаан хугацаагаар тулаанд оролцоно",
      "Cyber Frag хананаас цохиж давхар байрлалд ашиглагдана",
      "Override Protocol нь бүхэл group-д асар их damage өгдөг",
    ],
    weaknessesMn: ["Хол зайд сул", "Take Aim идэвхжүүлэх үед хөдөлгөөн хязгаарлагдана"],
    tipsMn: [
      "Siphon Blaster-аа тулааны дунд ашиглаж HP-ээ хадгал.",
      "Cyber Frag-аа булан ард нуугдсан дайсан руу шидэж болно.",
      "Override Protocol-оо бөөгнөрсөн дайсан руу ашигла.",
    ],
  },
  abilities: [
    { id: "em-rifle", name: "Synthetic Burst Rifle", nameMn: "Synthetic Burst Rifle", type: "Primary Fire", keybind: "LMB", descriptionMn: "Гурван суманд буудлага хийдэг автомат буу.", verified: true },
    { id: "em-aim", name: "Take Aim", nameMn: "Take Aim", type: "Secondary Fire", keybind: "RMB", descriptionMn: "Зэвсгийн зорилтот горимд шилжиж нарийвчлал нэмэгдүүлнэ.", verified: true },
    { id: "em-frag", name: "Cyber Frag", nameMn: "Cyber Frag", type: "Ability", keybind: "Shift", descriptionMn: "Ханаас бартаж чаддаг тэсрэх бөмбөг шиднэ.", verified: true },
    { id: "em-siphon", name: "Siphon Blaster", nameMn: "Siphon Blaster", type: "Ability", keybind: "E", descriptionMn: "Түр зуурын гар буу ашиглаж, damage өгснөөр өөрийгөө heal хийдэг.", verified: true },
    { id: "em-override", name: "Override Protocol", nameMn: "Override Protocol", type: "Ultimate", descriptionMn: "Амьд зэвсэг хэлбэрт шилжиж, хурдан дэлбэрэлт эсвэл цэнэглэсэн мега-цохилт хийнэ.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "em-minor-1",
        name: "Suppressive Security",
        descriptionMn: "Override Protocol-ийн хөнгөн сум дайсныг 1 секундэд 30%-иар slow хийнэ.",
        effectMn: "Ultimate-ээрээ дайсныг зогсооно.",
        verified: true,
      },
      {
        id: "em-minor-2",
        name: "Enhanced Agility",
        descriptionMn: "Siphon Blaster идэвхтэй үедээ, буудахгүй үед хөдөлгөөний хурдны нэмэгдэл 20%-иар өснө.",
        effectMn: "Siphon Blaster-ээ байрлал сольход ашиглаж болно.",
        verified: true,
      },
    ],
    major: [
      {
        id: "em-major-1",
        name: "Heat Sink",
        descriptionMn: "Siphon Blaster-ээр шууд цохих нь халаалтын 60%-ийг буцаан өгч, үргэлжлэх хугацааг 0.1 секундээр нэмэгдүүлнэ.",
        effectMn: "Siphon Blaster-ээ илүү удаан хугацаагаар ашиглах боломжтой.",
        verified: true,
      },
      {
        id: "em-major-2",
        name: "Cyber Adhesion",
        descriptionMn: "Cyber Frag дайсанд наалдаж, наалдсан дайсанд 40 нэмэлт damage өгдөг.",
        effectMn: "Cyber Frag-аа нэг зорилтод чиглэсэн бөмбөг болгоно.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "em-passive", name: "Specialist Passive", nameMn: "Specialist Passive", descriptionMn: "Дайсныг устгасны дараа богино хугацаанд сум ачих хурд нэмэгддэг (Specialist passive).", verified: true }],
};

export const mizuki: Hero = {
  id: "mizuki",
  name: "Mizuki",
  nameMn: "Мизуки",
  role: "Support",
  subRole: "Survivor",
  colorAccent: "#9E5A9E",
  initials: "MZ",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "advanced",
  overview: {
    summaryMn:
      "Мизуки бол Хашимото овгийн гишүүн, гэхдээ Overwatch-ийн нөлөөгөөр эргэлзэж эхэлсэн, Spirit Glaive болон Healing Kasa ашигладаг support баатар.",
    playstyleMn:
      "Spirit Glaive-ээр дайсанд тасралтгүй damage өгч, Healing Kasa-гаар багийг heal хийж, Katashiro Return-ээр аюулаас зайлсхийж, Kekkai Sanctuary-гаар багийг хамгаална.",
    strengthsMn: [
      "Spirit Glaive нь ханаас цохиж бариулаас нуугдсан дайсанд хүрдэг",
      "Katashiro Return-ээр аюулаас найдвартай зугтдаг",
      "Kekkai Sanctuary нь healing, projectile хамгаалалт хоёуланг өгдөг",
    ],
    weaknessesMn: ["HP дунд зэрэг", "Healing (Healing Kasa) cooldown-той тул удаан хугацаанд бага"],
    tipsMn: [
      "Spirit Glaive-ээ ханаас цохиулж өнцгийн ард байгаа дайсныг ол.",
      "Katashiro Return-ийн буцах цэгээ дайсан мэдэхгүй газар байрлуул.",
      "Kekkai Sanctuary-г Ultimate ирэхийг мэдэрсэн үедээ идэвхжүүл.",
    ],
  },
  abilities: [
    { id: "mz-glaive", name: "Spirit Glaive", nameMn: "Spirit Glaive", type: "Primary Fire", keybind: "LMB", descriptionMn: "Эргэлддэг ир шидэж, ханаас цохиж, тасралтгүй damage учруулна.", verified: true },
    { id: "mz-kasa", name: "Healing Kasa", nameMn: "Healing Kasa", type: "Ability", keybind: "Shift", descriptionMn: "Малгайгаа шидэж багийн гишүүдийг heal хийж, буцахдаа өөрийгөө мөн heal хийдэг.", verified: true },
    { id: "mz-chain", name: "Binding Chain", nameMn: "Binding Chain", type: "Ability", descriptionMn: "Гинж шидэж, тусвал эхний дайсныг stun хийнэ.", verified: true },
    { id: "mz-return", name: "Katashiro Return", nameMn: "Katashiro Return", type: "Movement", keybind: "E", descriptionMn: "Урагш үсэрч цаасан хүн үлдээгээд, дахин идэвхжүүлж түүн рүү буцаж хурд нэмэгдэнэ.", verified: true },
    { id: "mz-sanctuary", name: "Kekkai Sanctuary", nameMn: "Kekkai Sanctuary", type: "Ultimate", descriptionMn: "Дотор нь heal хийдэг, гаднаас ирэх projectile-ийг блоклодог ариун газар үүсгэнэ.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "mz-minor-1",
        name: "Wellspring",
        descriptionMn: "Remedy Aura-ийн үүсгэх хэмжээ 25%-иар нэмэгдэнэ.",
        effectMn: "Идэвхгүй healing-ээ хурдан цуглуулна.",
        verified: true,
      },
      {
        id: "mz-minor-2",
        name: "Exposed Soul",
        descriptionMn: "Binding Chain тусах дайсан 2 секундэд 30% нэмэлт damage авдаг болно.",
        effectMn: "Chain тусгасны дараа шууд их damage өгч болно.",
        verified: true,
      },
    ],
    major: [
      {
        id: "mz-major-1",
        name: "Resonant Return",
        descriptionMn: "Healing Kasa нэг удаа нэмэлт сарнидаг бөгөөд сарнилт бүр 10 нэмэлт healing-тэй болно.",
        effectMn: "Healing Kasa-аараа илүү олон, илүү их healing хийнэ.",
        verified: true,
      },
      {
        id: "mz-major-2",
        name: "Quickstep",
        descriptionMn: "Katashiro Return идэвхтэй үед Remedy Aura дотор байгаа хамтрагчид 25% хурдтай болно.",
        effectMn: "Ultimate шиг биш ч түр зуур багаа хурдасгана.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "mz-passive", name: "Remedy Aura / Survivor Passive", nameMn: "Remedy Aura", descriptionMn: "Ойролцоох багийн гишүүдийг heal хийдэг ая — damage, healing өгсний хэрээр хүчирхэгждэг. Movement ability ашиглах бүрд идэвхгүй HP сэргээлт идэвхждэг (Survivor passive).", verified: true }],
};

export const anran: Hero = {
  id: "anran",
  name: "Anran",
  nameMn: "Анран",
  role: "Damage",
  subRole: "Flanker",
  colorAccent: "#D9633A",
  initials: "AR",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "intermediate",
  overview: {
    summaryMn:
      "Анран бол Ву Яны эгч, Wuxing их сургуулийн Галын коллежийн шилдэг төгсөгч, дайсныг шатааж, эрсдэлтэй ч өндөр хор хөнөөлтэй тоглодог flanker damage баатар.",
    playstyleMn:
      "Zhuque Fans-аараа дайсанд Ignition (шаталт) хуримтлуулж, Fan the Flames-ээр дуусгана. Inferno Rush, Dancing Blaze-ээр дайрч, ямар нэгэн зорилтод хүрэлгүй үлдвэл аюулгүй ухарна.",
    strengthsMn: [
      "Ignition эффектээр цаг хугацааны туршид нэмэлт damage учруулна",
      "Dancing Blaze-ээр бүх damage-аас зайлсхийж эргэн тойрны дайсанд damage өгнө",
      "Vermillion Ascent/Revival — амьд болон нас барсан үедээ ч хэрэглэж болох хос Ultimate-тэй",
    ],
    weaknessesMn: ["Mobility ашиглахгүй бол нэг байрлалд эмзэг", "Хол зайн эсрэг сул тал"],
    tipsMn: [
      "Zhuque Fans-аар эхлээд Ignition тавиад Fan the Flames-ээр дуусга.",
      "Inferno Rush-аа дайрах болон гарахад хоёуланд нь ашиглаж cooldown-оо анхаарч бай.",
      "Vermillion Revival Ultimate-ыг сонговол устгагдсаны дараа ч дахин довтлох боломжтой гэдгийг санаарай.",
    ],
  },
  abilities: [
    { id: "ar-fans", name: "Zhuque Fans", nameMn: "Zhuque Fans", type: "Primary Fire", keybind: "LMB", descriptionMn: "Галт төсөл шидэж damage өгнө, дараалан хоёр цохилт Ignition эффект тавина.", verified: true },
    { id: "ar-flames", name: "Fan the Flames", nameMn: "Fan the Flames", type: "Secondary Fire", keybind: "RMB", descriptionMn: "Халуун салхи цацруулж, шатаж буй дайсанд нэмэгдэл damage өгнө.", verified: true },
    { id: "ar-rush", name: "Inferno Rush", nameMn: "Inferno Rush", type: "Movement", keybind: "Shift", descriptionMn: "Урагш дайрч замд таарсан дайсанд damage учруулна.", verified: true },
    { id: "ar-blaze", name: "Dancing Blaze", nameMn: "Dancing Blaze", type: "Ability", keybind: "E", descriptionMn: "Бүх damage-аас зайлсхийж ойролцоох дайсанд цохилт өгч, цохисон бүр тутамд HP-ээ сэргээнэ.", verified: true },
    { id: "ar-ascent", name: "Vermillion Ascent / Revival", nameMn: "Vermillion Ascent / Revival", type: "Ultimate", descriptionMn: "Амьд байвал урагш дайрч дэлбэрч дайсныг шатаана; нас барсан бол галт дэлбэрэлтээр амилна.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "ar-minor-1",
        name: "Smoulder",
        descriptionMn: "Шатаж буй дайсны Ignition 1.5 секундээр уртасна.",
        effectMn: "Дайсан илүү удаан хугацаагаар шатна.",
        verified: true,
      },
      {
        id: "ar-minor-2",
        name: "Heat Shield",
        descriptionMn: "Ultimate ашиглах болон түүгээр шатаасан дайсан тус бүрд 50 overhealth авна.",
        effectMn: "Ultimate ашигласны дараа илүү тэсвэртэй болно.",
        verified: true,
      },
    ],
    major: [
      {
        id: "ar-major-1",
        name: "Short Fuse",
        descriptionMn: "Inferno Rush-аар дайсанд цохилт өгвөл cooldown нь 1.5 секундээр багасна.",
        effectMn: "Inferno Rush-аа дараалан ашиглах боломжтой.",
        verified: true,
      },
      {
        id: "ar-major-2",
        name: "Hungering Blaze",
        descriptionMn: "Dancing Blaze-ийн дараагийн цохилтууд 25 нэмэлт healing өгдөг.",
        effectMn: "Dancing Blaze-аа өөрийгөө heal хийх хэрэгсэл болгоно.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "ar-passive", name: "Ignition / Flanker Passive", nameMn: "Ignition", descriptionMn: "Галт довтолгоогоор цохисон дайсныг шатаадаг. Дайсанд damage учруулах нь тэдний healing-ийг түр хугацаанд бууруулдаг. HP-ийн боодол ашиглахад илүү их HP сэргээдэг (Flanker passive).", verified: true }],
};

export const jetpackCat: Hero = {
  id: "jetpack-cat",
  name: "Jetpack Cat",
  nameMn: "Жетпак Кэт",
  role: "Support",
  subRole: "Tactician",
  colorAccent: "#E08A3A",
  initials: "JC",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "beginner",
  beginnerWhyMn: [
    "Байнга агаарт байдаг тул ойрын зайн довтолгооноос байгалиараа зайлсхийдэг.",
    "Biotic Pawjectiles-ийн тархалт том тул нарийн aim шаардахгүй.",
    "Lifeline-ээр хамтрагчаа аврах нь тодорхой, ойлгомжтой гол үүрэг.",
  ],
  overview: {
    summaryMn:
      "Жетпак Кэт (Фика) бол Гибралтараас гаралтай, байнга агаарт хөвдөг, зөвхөн муур мяалзсан дуутай гайхалтай support баатар.",
    playstyleMn:
      "Байнга агаарт хөвж Biotic Pawjectiles-ээр heal хийж/damage өгч, Frenetic Flight-ээр түлш ашиглан хурдан хөдөлж, багийн гишүүдийг Lifeline-ээр чирж авчирна.",
    strengthsMn: [
      "Байнга агаарт байдаг тул ихэнх ойрын зайн довтолгооноос зайлсхийнэ",
      "Lifeline-ээр эмзэг эсвэл орхигдсон баатрыг татан авчирна",
      "Biotic Pawjectiles нь олон зорилтод зэрэг нөлөөлдөг тархамал сум",
    ],
    weaknessesMn: ["Түлш хязгаартай тул Frenetic Flight байнга ашиглаж болдоггүй", "Нарийн зорилт тохируулах чадвар өндөр биш"],
    tipsMn: [
      "Түлшээ ажиглаж, дуусахаас өмнө сэргээх боломж хайж бай.",
      "Lifeline-ээ довтолгооноос гарах гэж буй эмзэг баатар руу ашигла.",
      "Байнга өндөрт байж дайсны ойрын зайн довтолгооноос зайлсхий.",
    ],
  },
  abilities: [
    { id: "jc-pawjectiles", name: "Biotic Pawjectiles", nameMn: "Biotic Pawjectiles", type: "Primary Fire", keybind: "LMB", descriptionMn: "Дунд зайд тархамал сум цацруулж, дайсанд damage, багт healing өгнө.", verified: true },
    { id: "jc-flight", name: "Frenetic Flight", nameMn: "Frenetic Flight", type: "Movement", keybind: "Shift", descriptionMn: "Түлш зарцуулж хурдан урагш нисдэг. Түлш идэвхгүй үедээ аажмаар сэргэдэг.", verified: true },
    { id: "jc-purr", name: "Purr", nameMn: "Purr", type: "Ability", descriptionMn: "Cooldown-той тусгай чадвар (дэлгэрэнгүй нөлөө тодорхойгүй байна).", verified: false },
    { id: "jc-lifeline", name: "Lifeline", nameMn: "Lifeline", type: "Ability", descriptionMn: "Багийн гишүүнийг өөртэйгээ холбож чирж, аюулаас гаргана.", verified: true },
    { id: "jc-jetpack", name: "Jetpack", nameMn: "Jetpack", type: "Movement", descriptionMn: "Байнгын нислэгийн пассив чадвар — үргэлж агаарт байдаг.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "jc-minor-1",
        name: "Ulterior Motive",
        descriptionMn: "Biotic Pawjectiles-ийн healing-ийн 15% нь түлш болж хувирдаг.",
        effectMn: "Heal хийх тусам түлшээ нөхнө.",
        verified: true,
      },
      {
        id: "jc-minor-2",
        name: "Transport Shielding",
        descriptionMn: "Хамтрагчаа зөөж явах үедээ 3 секундэд дээд тал нь 50 нэмэлт shield авна.",
        effectMn: "Lifeline ашиглах үедээ илүү аюулгүй болно.",
        verified: true,
      },
    ],
    major: [
      {
        id: "jc-major-1",
        name: "Purrfect Form",
        descriptionMn: "Purr-ийн долгион тус бүр 3 давхар нөлөөтэй болно.",
        effectMn: "Purr-ийн нөлөө мэдэгдэхүйц нэмэгдэнэ.",
        verified: true,
      },
      {
        id: "jc-major-2",
        name: "Claws Out",
        descriptionMn: "6 секунд тутам ойрын довтолгоо хүчирхэгжиж, 40 damage, 1 секундэд 30% slow өгдөг.",
        effectMn: "Ойрын зайд өөрийгөө хамгаалах чадвартай болно.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "jc-passive", name: "Tactician Passive", nameMn: "Tactician Passive", descriptionMn: "Ultimate ашигласны дараа илүүдэл эрч хадгалагдаж дараагийн руу шилждэг (Tactician passive).", verified: true }],
};

export const dmon: Hero = {
  id: "dmon",
  name: "D.Mon",
  nameMn: "Ди.Мон",
  role: "Tank",
  subRole: "Stalwart",
  colorAccent: "#4F6B8F",
  initials: "DM2",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "intermediate",
  overview: {
    summaryMn:
      "Ди.Мон (Юна Ли) бол Ди.Вагийн хуучин хамтрагч, Beast нэртэй мехээрээ сэлмээр ойрын зайд тулалддаг MEKA багийн танк.",
    playstyleMn:
      "Plasma Sword-оор ойрын зайд цохиж, Power Barrier-аар өөрийгөө хамгаалж, Surging Strike-аар дайрч, шаардлагатай үед мехээ орхиж Fusion Repeater-ээр алсын зайд тулалдана.",
    strengthsMn: [
      "Reinhardt шиг ойрын зайд сэлмээр асар их damage учруулна",
      "Мех орхиход ч Fusion Repeater-тэй тул бүрэн хамгаалалтгүй болдоггүй",
      "Limit Break Ultimate дайсанд discord төрлийн debuff тавьдаг",
    ],
    weaknessesMn: ["Мех эвдэрсний дараа богино хугацаанд эмзэг", "Reinhardt-ээс өөр хэлбэрээр ч ойрын зайд хамааралтай"],
    tipsMn: [
      "Power Barrier-аа хослуулан Surging Strike хийж давхар цохилт хий.",
      "Мех эвдэрвэл Fusion Repeater-ээр ухарч дахин дуудах хугацаагаа хүлээ.",
      "Limit Break-ийг олон дайсан бөөгнөрсөн үед ашигла.",
    ],
  },
  abilities: [
    { id: "dm2-sword", name: "Plasma Sword", nameMn: "Plasma Sword", type: "Primary Fire", keybind: "LMB", descriptionMn: "Ойрын зайд сэлмээр цохиж damage өгнө.", verified: true },
    { id: "dm2-repeater", name: "Fusion Repeater", nameMn: "Fusion Repeater", type: "Ability", descriptionMn: "Мөрөнд суурилуулсан буу, дунд зайд damage өгнө (мех дотор болон гарсан үед аль алинд нь ашиглагдана).", verified: true },
    { id: "dm2-barrier", name: "Power Barrier", nameMn: "Power Barrier", type: "Defensive", keybind: "RMB", descriptionMn: "Урд талдаа шил барьж хамгаална.", verified: true },
    { id: "dm2-propulsors", name: "Propulsors", nameMn: "Propulsors", type: "Movement", keybind: "Shift", descriptionMn: "Хэвтээ чиглэлд хурдан хөдөлж, Power Barrier идэвхтэй үед Surging Strike-руу шилждэг.", verified: true },
    { id: "dm2-limitbreak", name: "Limit Break", nameMn: "Limit Break", type: "Ultimate", descriptionMn: "Сэлмээр олон дайсанд цохилт хийж, тэдэнд нэмэгдэл damage авдаг debuff тавьж, өөртөө overhealth авна.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "dm2-minor-1",
        name: "Beast Within",
        descriptionMn: "Plasma Sword-ийн цохилт Power Barrier-ийг 40 HP-аар heal хийдэг.",
        effectMn: "Ойрын довтолгоо хийх тусам барьераа сэргээнэ.",
        verified: true,
      },
      {
        id: "dm2-minor-2",
        name: "Meka Mobility",
        descriptionMn: "Power Barrier барьж байх үедээ Propulsors-ийн түлшний зарцуулалт 30%-иар багасна.",
        effectMn: "Хамгаалалттайгаа хамт илүү хурдан хөдөлнө.",
        verified: true,
      },
    ],
    major: [
      {
        id: "dm2-major-1",
        name: "Overstrike",
        descriptionMn: "Surging Strike 150% lifesteal авдаг болно.",
        effectMn: "Дайрах тусам их хэмжээгээр heal авна.",
        verified: true,
      },
      {
        id: "dm2-major-2",
        name: "Focused Fusion",
        descriptionMn: "Fusion Repeater удаан боловч тархалтгүй, илүү хүчтэй сум харвадаг болно.",
        effectMn: "Fusion Repeater-ээ нарийвчилсан алсын зэвсэг болгоно.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "dm2-passive", name: "Steadfast", nameMn: "Steadfast", descriptionMn: "Knockback болон slow эффектийг бага хүлээн авна (Stalwart passive).", verified: true }],
};

export const sierra: Hero = {
  id: "sierra",
  name: "Sierra",
  nameMn: "Сиерра",
  role: "Damage",
  subRole: "Recon",
  colorAccent: "#9E3A5A",
  initials: "SR",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "intermediate",
  overview: {
    summaryMn:
      "Сиерра бол Helix Security-ийн ахмад, Helix Rifle болон Anchor Drone ашиглан дайсныг дагаж, илрүүлдэг Recon damage баатар.",
    playstyleMn:
      "Helix Rifle-ээр spiral хэлбэрийн буудлагаа тогтмол барьж нарийвчлалаа нэмэгдүүлж, Tracking Shot-оор зорилтоо тэмдэглэж, Anchor Drone-оор давуу байрлал эзэлнэ.",
    strengthsMn: [
      "Tracking Shot-той дайсанд сум автоматаар чиглэдэг",
      "Anchor Drone-оор давхар байрлал сонголт өгдөг",
      "Recon passive-тай хослуулан дайсныг байнга илрүүлж чадна",
    ],
    weaknessesMn: ["Тасралтгүй буудахгүй бол нарийвчлал муу", "Тодорхой статистик хараахан бүрэн батлагдаагүй"],
    tipsMn: [
      "Buudlagaa тасалдалгүй барьж нарийвчлалаа нэмэгдүүл.",
      "Tracking Shot-оо эрсдэлтэй, хурдан хөдөлдөг баатар руу ашигла.",
      "Anchor Drone-оор өндөрлөг газраас довтол.",
    ],
  },
  abilities: [
    { id: "sr-rifle", name: "Helix Rifle", nameMn: "Helix Rifle", type: "Primary Fire", keybind: "LMB", descriptionMn: "Spiral хэлбэрээр буудаж, тасралтгүй барих тусам нарийвчлал нэмэгддэг автомат буу.", verified: true },
    { id: "sr-tracking", name: "Tracking Shot", nameMn: "Tracking Shot", type: "Ability", descriptionMn: "Дайсныг тэмдэглэж, Helix Rifle-ийн сум тэдэн рүү автоматаар чиглэдэг болгоно.", verified: true },
    { id: "sr-drone", name: "Anchor Drone", nameMn: "Anchor Drone", type: "Movement", keybind: "Shift", descriptionMn: "Агаарт дрон илгээж, дрон руугаа хурдан үсэрнэ.", verified: true },
    { id: "sr-tremor", name: "Tremor Charge", nameMn: "Tremor Charge", type: "Ability", descriptionMn: "Гранат шиг чадвар шидэж AoE damage, доргилт учруулна.", verified: true },
    { id: "sr-trailblazer", name: "Trailblazer", nameMn: "Trailblazer", type: "Ultimate", descriptionMn: "Талбайг хааж, Knockback эсвэл дайрах замыг хязгаарладаг Ultimate.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "sr-minor-1",
        name: "Full Flight",
        descriptionMn: "Anchor Drone-ийн нислэг, дэгээний зай 25%-иар нэмэгдэнэ.",
        effectMn: "Drone-оо илүү хол зайд ашиглаж болно.",
        verified: true,
      },
      {
        id: "sr-minor-2",
        name: "Tight Grip",
        descriptionMn: "Helix Rifle-ийн сумны тархалт 70%-иар хурдан нарийсаж, 30%-иар удаан тэлдэг.",
        effectMn: "Тасралтгүй буудлагын нарийвчлал илүү хурдан сайжирна.",
        verified: true,
      },
    ],
    major: [
      {
        id: "sr-major-1",
        name: "Medi-Drone",
        descriptionMn: "Anchor Drone-д эмнэлгийн хэрэгсэл байрлуулж Сиеррагийн HP-ийг сэргээнэ.",
        effectMn: "Drone-оо healing-ийн эх үүсвэр болгоно.",
        verified: true,
      },
      {
        id: "sr-major-2",
        name: "Locked In",
        descriptionMn: "Tracking Shot тусахад 2 секундэд 20% attack speed авна.",
        effectMn: "Tracking Shot-ийн дараа шууд их damage өгнө.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "sr-passive", name: "Recon Passive", nameMn: "Recon Passive", descriptionMn: "Хагасаас бага HP-тэй дайсанд damage учруулсны дараа тэднийг ханаар дамжуулан илрүүлдэг (Recon passive).", verified: true }],
};

export const shion: Hero = {
  id: "shion",
  name: "Shion",
  nameMn: "Шион",
  role: "Damage",
  subRole: "Flanker",
  colorAccent: "#7A5A9E",
  initials: "SH",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "advanced",
  overview: {
    summaryMn:
      "Шион бол Хашимото овгийг удирддаг омник маафи ахлагч, хоёр гар буу болон мотоциклоороо дайрдаг flanker damage баатар.",
    playstyleMn:
      "Kira Pistols-аар ойрын-дунд зайд буудаж, Execution-оор X хэлбэрийн цуврал буудлага хийж, Evade-ээр overhealth авч, Joyride-аар мотоцикл унаж, шидэж болно.",
    strengthsMn: [
      "Joyride-аар маш хурдан газраас газарт хөдөлж, мотоциклоо зэвсэг болгон шиднэ",
      "Evade нь дайралтаас зайлсхийхийн зэрэгцээ overhealth өгдөг",
      "Satsuriku Spree Ultimate гурван удаа дайрч их damage учруулна",
    ],
    weaknessesMn: ["HP бага", "Joyride ашиглахын тулд эхлээд бэлдэх (rev up) хугацаа шаардана"],
    tipsMn: [
      "Joyride-аар флэнк хийж, мотоциклоо бөөгнөрсөн дайсан руу шид.",
      "Execution-ийг хагасаас бага HP-тэй дайсан руу ашиглавал нэмэгдэл damage өгнө.",
      "Evade-ийг дайралтаас зайлсхийхийн зэрэгцээ довтлох боломж бий болгоход ашигла.",
    ],
  },
  abilities: [
    { id: "sh-pistols", name: "Kira Pistols", nameMn: "Kira Pistols", type: "Primary Fire", keybind: "LMB", descriptionMn: "Хоёр гар буугаар ойрын-дунд зайд буудна.", verified: true },
    { id: "sh-execution", name: "Execution", nameMn: "Execution", type: "Ability", descriptionMn: "X хэлбэрийн цуврал буудлага хийж damage учруулна.", verified: true },
    { id: "sh-evade", name: "Evade", nameMn: "Evade", type: "Movement", keybind: "Shift", descriptionMn: "Дайрч зайлсхийж, богино хугацааны overhealth авна.", verified: true },
    { id: "sh-joyride", name: "Joyride", nameMn: "Joyride", type: "Movement", keybind: "E", descriptionMn: "Мотоциклын хөдөлгүүрээ асааж, дахин идэвхжүүлбэл буунаас буугаад мотоциклоо урагш шиднэ.", verified: true },
    { id: "sh-spree", name: "Satsuriku Spree", nameMn: "Satsuriku Spree", type: "Ultimate", descriptionMn: "Гурван удаа урагш дайрч, галт бууны шуургаар их damage учруулна.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "sh-minor-1",
        name: "Survival Instinct",
        descriptionMn: "Evade-ийн overhealth-ийн үргэлжлэх хугацаа 1 секундээр нэмэгдэнэ.",
        effectMn: "Evade-ийн дараа илүү удаан амьд үлдэнэ.",
        verified: true,
      },
      {
        id: "sh-minor-2",
        name: "X Machina",
        descriptionMn: "Execution хагасаас бага HP-тэй дайсанд 20% нэмэгдэл damage учруулна.",
        effectMn: "Дуусгах цохилтод илүү найдвартай.",
        verified: true,
      },
    ],
    major: [
      {
        id: "sh-major-1",
        name: "Refuel",
        descriptionMn: "Joyride идэвхжихэд шууд 50 HP сэргээж, идэвхтэй үедээ секундэд 20 HP сэргээнэ.",
        effectMn: "Мотоцикл унасан үедээ өөрийгөө heal хийдэг болно.",
        verified: true,
      },
      {
        id: "sh-major-2",
        name: "Faces of Death",
        descriptionMn: "Бусад бүх Damage sub-role passive (Recon, Specialist, Sharpshooter) авна.",
        effectMn: "Нэг дор бүх Damage passive-тай болно — маш хүчтэй сонголт.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "sh-passive", name: "Flanker Passive", nameMn: "Flanker Passive", descriptionMn: "HP-ийн боодол ашиглахад илүү их HP сэргээдэг (Flanker passive).", verified: true }],
};

export const vendetta: Hero = {
  id: "vendetta",
  name: "Vendetta",
  nameMn: "Вендетта",
  role: "Damage",
  subRole: "Flanker",
  colorAccent: "#7A2E3A",
  initials: "VD",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "advanced",
  overview: {
    summaryMn:
      "Вендетта (Марзия Барталотти) бол Colosseo-гийн гладиатор аваргаас Talon-ийн удирдагч болсон, hard-light сэлмээр ойрын зайд тулалддаг damage баатар.",
    playstyleMn:
      "Palatine Fang-аараа ойрын зайд цохиж, Soaring Slice болон Whirlwind Dash-аар дайрч, Warding Stance-аар довтолгоог няслан, Onslaught стек цуглуулж хүчирхэгжинэ.",
    strengthsMn: [
      "Onslaught стек цугларах тусам lifesteal болон cooldown хурдасгал нэмэгддэг",
      "Маш өндөр mobility бүхий ойрын зайн damage баатар",
      "Sundering Blade Ultimate асар их damage өгдөг",
    ],
    weaknessesMn: ["Хол зайд огт сул", "Onslaught стекгүй үед харьцангуй сул"],
    tipsMn: [
      "Onslaught стекээ тулааны эхэнд аль болох хурдан цуглуул.",
      "Warding Stance-аар чухал довтолгоог няслаж болно.",
      "Soaring Slice-аар дайрч, Whirlwind Dash-аар дараагийн зорилт руу шилжиж бол.",
    ],
  },
  abilities: [
    { id: "vd-fang", name: "Palatine Fang", nameMn: "Palatine Fang", type: "Primary Fire", keybind: "LMB", descriptionMn: "Hard-light сэлмээр ойрын зайд цуврал цохилт хийнэ.", verified: true },
    { id: "vd-warding", name: "Warding Stance", nameMn: "Warding Stance", type: "Secondary Fire", keybind: "RMB", descriptionMn: "Хамгаалалтын байрлалд орж ирж буй довтолгоог няслана.", verified: true },
    { id: "vd-soaring", name: "Soaring Slice", nameMn: "Soaring Slice", type: "Ability", keybind: "Shift", descriptionMn: "Агаарт үсэрч цохилт хийж дайсныг доош унагаана.", verified: true },
    { id: "vd-whirlwind", name: "Whirlwind Dash", nameMn: "Whirlwind Dash", type: "Movement", descriptionMn: "Хурдан дайрч ойролцоох дайснуудад damage учруулна.", verified: true },
    { id: "vd-projected", name: "Projected Edge", nameMn: "Projected Edge", type: "Ability", descriptionMn: "Hard-light ир алсаас шиднэ.", verified: true },
    { id: "vd-sundering", name: "Sundering Blade", nameMn: "Sundering Blade", type: "Ultimate", descriptionMn: "Асар том hard-light сэлмээр хүчтэй цохилт хийж их damage учруулна.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "vd-minor-1",
        name: "Extra Edge",
        descriptionMn: "Projected Edge 25% бага энерги зарцуулна.",
        effectMn: "Алсын довтолгоогоо илүү олон удаа ашиглана.",
        verified: true,
      },
      {
        id: "vd-minor-2",
        name: "Raging Storm",
        descriptionMn: "Whirlwind Dash үргэлжлүүлэн эргэлдэж, өргөн талбайд 3 нэмэлт удаа 30 damage өгдөг.",
        effectMn: "Dash-аа олон дайсанд зэрэг нөлөөлдөг болгоно.",
        verified: true,
      },
    ],
    major: [
      {
        id: "vd-major-1",
        name: "Siphoning Strike",
        descriptionMn: "Дээрээс цохих цохилтууд 40% lifesteal авдаг.",
        effectMn: "Агаараас дайрах тусам их хэмжээгээр heal авна.",
        verified: true,
      },
      {
        id: "vd-major-2",
        name: "Relentless",
        descriptionMn: "Onslaught 3 нэмэлт stack хуримтлуулж, stack тус бүрд 5% довтолгоо, 2% movement speed нэмэгддэг.",
        effectMn: "Урт тулаанд улам бүр хүчирхэгжинэ.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "vd-passive", name: "Onslaught / Flanker Passive", nameMn: "Onslaught", descriptionMn: "Стек тус бүрд 4% lifesteal, 3% хурдан cooldown авна. HP-ийн боодол ашиглахад илүү их HP сэргээдэг (Flanker passive).", verified: true }],
};

export const doctrine: Hero = {
  id: "doctrine",
  name: "Doctrine",
  nameMn: "Доктрин",
  role: "Support",
  subRole: "Survivor",
  releaseYear: 2026,
  colorAccent: "#9B1C31",
  initials: "DT",
  dataComplete: true,
  lastUpdated: S5,
  difficulty: "intermediate",
  overview: {
    summaryMn: "Доктрин бол Season 5-ийн шинэ Support баатар (Overwatch-ийн 54 дэх баатар). Вампираас санаа авсан тэрээр Eternal Scepter-ээрээ найзаа heal хийж, дайсанд damage өгдөг бөгөөд Infuse-ээр дараагийн чадвараа хүчирхэгжүүлнэ.",
    playstyleMn: "Eternal Scepter-ээрээ дунд зайнаас багаа heal хийж, шаардлагатай үедээ дайсанд damage өгнө. Infuse-ийн цэнэгээ Invigorating Drones эсвэл Shrouded Momentum-д хадгалж, зөв мөчид хүчирхэгжүүл. Хөдөлгөөний чадвараа ашиглах бүрд Survivor passive-аар өөрөө эдгэрч эхэлнэ.",
    strengthsMn: [
      "Нэг зэвсгээр heal болон damage хоёуланг нь өгдөг",
      "Infused Shrouded Momentum-аар чөлөөтэй нисч, аюулаас зугтана",
      "Invigorating Drones нь heal-ийн зэрэгцээ attack speed өгдөг — бусад support-д байхгүй",
      "Deliverance нь дайсны дээд HP-г бууруулж, багийг overhealth-ээр хамгаалдаг",
    ],
    weaknessesMn: [
      "Дайсан хэт ойртвол Shrouded Momentum-аар зугтахад хүрэлцэхгүй",
      "Infuse-ээ завшаад ашиглавал cooldown хүлээх хугацаа урт",
      "Shrouded Momentum-аа ашигласны дараа эмзэг",
    ],
    tipsMn: [
      "Infuse-ийн нэг цэнэгийг Invigorating Drones-доо хадгал — тэр чамайг болон найзаа хоёуланг heal хийнэ.",
      "Дунд зай бол хамгийн тохиромжтой байрлал. Дайсны dive-аас хол, багийнхаа ард байхыг хичээ.",
      "Deliverance-ыг group fight эхлэхийн өмнө ашиглаж багаа overhealth-ээр хамгаал.",
    ],
  },
  abilities: [
    {
      id: "dt-scepter",
      name: "Eternal Scepter",
      nameMn: "Eternal Scepter",
      type: "Primary Fire",
      keybind: "LMB",
      descriptionMn: "Дунд зайн зэвсэг: найзуудыг heal хийж, дайснуудад damage өгнө. Infuse хийсэн үед илүү том, нэвт цохидог цохилт болно.",
      tipMn: "Нэг зэвсгээр heal, damage хоёуланг нь хийдэг тул байрлалаа солилгүйгээр үүргээ сольж болно.",
      verified: true,
    },
    {
      id: "dt-infuse",
      name: "Infuse",
      nameMn: "Infuse",
      type: "Secondary Fire",
      keybind: "RMB",
      descriptionMn: "Дараагийн чадвар (эсвэл үндсэн зэвсгийн цохилт)-даа хүчтэй нэмэлт нөлөө өгнө. 2 цэнэгтэй, цэнэг нь прицелийн дэргэд улаан тэгш өнцөгт хэлбэрээр харагдана.",
      tipMn: "Нэг цэнэгийг үргэлж Invigorating Drones-доо хадгалж бай.",
      cooldown: "8 сек (2 цэнэг)",
      verified: true,
    },
    {
      id: "dt-momentum",
      name: "Shrouded Momentum",
      nameMn: "Shrouded Momentum",
      type: "Movement",
      keybind: "Shift",
      descriptionMn: "Хэвтээ чиглэлд хурдтай шумбаж, ирж буй damage-ийг 40%-иар багасгана. Infused үед чөлөөт нислэг олгоно.",
      tipMn: "Season 5-аас Critical hit-ээс хамгаалахаа больсон тул ойр дайснаас болгоомжил. Хөдөлгөөний чадвар тул Survivor passive-ийг идэвхжүүлнэ.",
      cooldown: "8 сек",
      verified: true,
    },
    {
      id: "dt-drones",
      name: "Invigorating Drones",
      nameMn: "Invigorating Drones",
      type: "Ability",
      keybind: "E",
      descriptionMn: "Найзад drone илгээж, heal болон 30% attack speed өгнө. Infused үед өөртөө ч drone илгээнэ.",
      tipMn: "Dive хийж буй найздаа Infused drone өгвөл та хоёулаа нэгэн зэрэг эдгэнэ.",
      verified: true,
    },
    {
      id: "dt-deliverance",
      name: "Deliverance",
      nameMn: "Deliverance",
      type: "Ultimate",
      keybind: "Q",
      descriptionMn: "Drone-ы сүрэг хөөргөж, дайсны дээд HP-г бууруулж, найзуудад overhealth өгнө. Infuse хийгддэггүй.",
      tipMn: "Group fight эхлэхийн өмнө ашиглавал найзуудын overhealth дайсны эхний damage-ийг шингээнэ.",
      duration: "6 сек",
      verified: true,
    },
  ],
  perks: {
    minor: [
      {
        id: "dt-minor-1",
        name: "Saving Grace",
        descriptionMn: "Invigorating Drones өгөх мөчид 40 HP heal хийнэ.",
        effectMn: "Drone өгөх даруйд нэн даруй heal хүрнэ.",
        whenUsefulMn: "Dive хийж байгаа эсвэл дайрагдаж буй найздаа шууд тусламж хэрэгтэй үед.",
        verified: true,
      },
      {
        id: "dt-minor-2",
        name: "Sanguine Siphon",
        descriptionMn: "Infused Eternal Scepter-ээр өгсөн damage-ийн 50%-тай тэнцэх HP-ийг өөртөө heal болгоно.",
        effectMn: "Damage өгөх нь өөрийгөө эдгээх хэрэгсэл болно.",
        whenUsefulMn: "Өөрөө damage өгч тоглох хандлагатай үед.",
        verified: true,
      },
    ],
    major: [
      {
        id: "dt-major-1",
        name: "Transfusion",
        descriptionMn: "Damage өгч, heal хийснээр Infuse-ийн cooldown багасна. Season 5-д энэ хөрвүүлэлтийн хурдыг 50%-иар бууруулсан.",
        effectMn: "Infuse-ийг илүү олон удаа ашиглах боломжтой.",
        whenUsefulMn: "Infused чадваруудаа байнга ашиглахыг хүсвэл.",
        verified: true,
      },
      {
        id: "dt-major-2",
        name: "Cost of Life",
        descriptionMn: "Дээд HP-ээс 25-ыг золиослоно (250-аас 225 болно). Үүний оронд Eternal Scepter-ийн heal 20%-иар нэмэгдэнэ.",
        effectMn: "Эмзэг болох хэрээр илүү хүчтэй heal хийнэ.",
        whenUsefulMn: "Багаа heal хийхэд бүрэн төвлөрч, аюулгүй байрлалтай тоглож чадах үед.",
        verified: true,
      },
    ],
  },
  passives: [
    {
      id: "dt-passive",
      name: "Survivor Passive",
      nameMn: "Survivor Passive",
      descriptionMn: "Хөдөлгөөний чадвар (Shrouded Momentum) ашиглахад идэвхгүй HP сэргээлт эхэлнэ (Survivor passive).",
      verified: true,
    },
  ],
};

export const batchThreeHeroes: Hero[] = [
  domina, emre, mizuki, anran, jetpackCat, dmon, sierra, shion, vendetta, doctrine,
];
