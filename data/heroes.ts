import { Hero } from "./types";
import { batchTwoHeroes } from "./heroes-batch2";
import { batchThreeHeroes } from "./heroes-batch3";

const UPDATED = "2026-09-18";
const S5 = "2026-10-08";

// ---------------------------------------------------------------------------
// STAGE 1: fully detailed heroes (overview + all abilities + perks + passive)
// ---------------------------------------------------------------------------

const reinhardt: Hero = {
  id: "reinhardt",
  name: "Reinhardt",
  nameMn: "Рейнхардт",
  role: "Tank",
  subRole: "Stalwart",
  colorAccent: "#8C6A3F",
  initials: "RH",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "beginner",
  beginnerWhyMn: [
    "Aim төвийн чадвар шаардахгүй — ойрын зайн цохилт, зүгээр урагшлахад анхаарал хандуул.",
    "Barrier Field бариад багийн ард зогсох энгийн, тодорхой үүрэгтэй.",
    "Charge, Earthshatter зэрэг чадвар алдаа гаргасан ч шууд цохигддоггүй, сурах зай өгдөг.",
  ],
  overview: {
    summaryMn:
      "Рейнхардт бол том barrier барьж, багийнхаа урдуур зогсдог сонгодог фронтлайн танк. Тэрээр Rocket Hammer-аараа ойрын зайд хүчтэй цохилт өгч, Charge-аараа дайсныг ханад цохиж чаддаг.",
    playstyleMn:
      "Barrier Field-ээ өмнөө барьж багийг ойртуулан явуулж, зайлшгүй үед Fire Strike-аар алсаас damage өгнө. Charge-аа ухаалгаар ашиглан дайсны healer-ийг тусгаарлах нь Рейнхардтын гол стратеги.",
    strengthsMn: [
      "Маш өндөр HP болон том barrier",
      "Charge, Fire Strike, Earthshatter зэрэг хүчтэй CC (control) чадвартай",
      "Багийн урд байрлаж дэмжлэг өгөхөд тохиромжтой",
    ],
    weaknessesMn: [
      "Хөдөлгөөн удаан, дайрах зайг зөв тооцоолохгүй бол эмзэг",
      "Шил барих үед ар тал нь бүрэн онгойдог",
      "Sniper болон slow хийх чадвартай баатруудад сул",
    ],
    tipsMn: [
      "Шилээ бүү бөглөр — healer-үүд хараа өгөхийн тулд бага зэрэг доошлуулж болно.",
      "Charge-аа зөвхөн итгэлтэй тохиолдолд ашигла, эс тэгвээс дангаараа дайсны дунд орох эрсдэлтэй.",
      "Earthshatter-ыг булан эсвэл нарийн газар ашиглавал илүү олон дайсныг унагаана.",
    ],
  },
  abilities: [
    {
      id: "rh-rockethammer",
      name: "Rocket Hammer",
      nameMn: "Rocket Hammer",
      type: "Primary Fire",
      keybind: "LMB",
      descriptionMn:
        "Рейнхардтын үндсэн зэвсэг. Урд талдаа том алхаар цохиж ойрын зайд хүчтэй damage учруулна.",
      tipMn: "Цохилтын дараа бага зэрэг саатал байдаг тул цагийг сайн барь.",
      verified: true,
    },
    {
      id: "rh-charge",
      name: "Charge",
      nameMn: "Charge",
      type: "Ability",
      keybind: "Shift",
      descriptionMn:
        "Рейнхардт урагш хурдан гүйж, замдаа таарсан дайсныг түлхэж, хананд цохивол нэмэлт damage учруулна.",
      tipMn: "Ганцаараа дайсны шугаман руу орохгүй байхыг хичээ, буцах зам бэлдэж бай.",
      cooldown: "Дунд зэргийн cooldown",
      verified: true,
    },
    {
      id: "rh-firestrike",
      name: "Fire Strike",
      nameMn: "Fire Strike",
      type: "Ability",
      keybind: "E",
      descriptionMn:
        "Галт долгион шиг хэлбэртэй track цацруулж, зам дээрх дайсанд алсаас damage учруулна. Хана нэвтэрч чаддаг.",
      verified: true,
    },
    {
      id: "rh-barrier",
      name: "Barrier Field",
      nameMn: "Barrier Field",
      type: "Defensive",
      keybind: "RMB",
      descriptionMn:
        "Урд талдаа том barrier үүсгэж багийг довтолгооноос хамгаална. Шил damage хүлээж авах тусам эвдэрч эцэст нь бүрэн унана.",
      tipMn: "Шилээ байнга дээш доош хийж, ард нь буугаа буудах боломж олго.",
      verified: true,
    },
    {
      id: "rh-earthshatter",
      name: "Earthshatter",
      nameMn: "Earthshatter",
      type: "Ultimate",
      descriptionMn:
        "Газарт хүчтэй цохилт өгч урд талын бүх дайсныг унагаана (knock down). Багтай хамт довтлоход маш үр дүнтэй.",
      tipMn: "Дайсан бөөгнөрсөн үед, ялангуяа хана эсвэл булангаар ашиглавал зайлсхийх боломжгүй болно.",
      verified: true,
    },
  ],
  perks: {
    minor: [
      {
        id: "rh-minor-1",
        name: "Crusader's Resolve",
        descriptionMn: "Barrier Field ашиглаж байх үед идэвхгүй HP сэргээлт 75%-иар эрт эхэлдэг.",
        effectMn: "Шилээ барьж байх үедээ илүү хурдан HP сэргээж эхэлнэ.",
        verified: true,
      },
      {
        id: "rh-minor-2",
        name: "Crusader's Fire",
        descriptionMn: "Fire Strike-ээр дайсныг stun хийх бүрд нэг charge буцаж ирнэ (дээд тал нь 3 хүртэл).",
        effectMn: "Fire Strike-ийг илүү олон удаа дараалан ашиглах боломжтой.",
        verified: true,
      },
    ],
    major: [
      {
        id: "rh-major-1",
        name: "Shield Slam",
        descriptionMn: "Barrier Field идэвхтэй үед Secondary Fire дарж дайсныг цохиж, knockback хийнэ.",
        effectMn: "Шилээ барьсан хэвээр дайсанд damage, knockback учруулах боломжтой болно.",
        verified: true,
      },
      {
        id: "rh-major-2",
        name: "Ignited Fury",
        descriptionMn: "Fire Strike-ээр цохисон дайсан тус бүрд 2 секундын турш 25% нэмэгдэл attack speed авна.",
        effectMn: "Fire Strike ашигласны дараа цохилтын хурд нэмэгддэг.",
        verified: true,
      },
    ],
  },
  passives: [
    {
      id: "rh-passive",
      name: "Steadfast",
      nameMn: "Steadfast",
      descriptionMn: "Knockback болон slow эффектийг бага хүлээн авна (Stalwart sub-role passive).",
      impactMn: "Crowd control-д тэсвэртэй болж, байрлалаа илүү сайн барих боломжтой.",
      verified: true,
    },
  ],
};

const winston: Hero = {
  id: "winston",
  name: "Winston",
  nameMn: "Уинстон",
  role: "Tank",
  subRole: "Initiator",
  colorAccent: "#7D8FA9",
  initials: "WN",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "intermediate",
  overview: {
    summaryMn:
      "Уинстон бол Tesla Cannon болон Jump Pack ашиглан дайсны шугамын ард шууд үсэрч, дайсны эмзэг баатруудыг зорьдог дайвлагч (dive) танк.",
    playstyleMn:
      "Jump Pack ашиглан дайсны ар тал руу орж, Barrier Projector-оороо өөрийгөө болон дэргэдэх багийн гишүүдийг хамгаалж, эмзэг зорилтуудыг эвдэлдэг.",
    strengthsMn: [
      "Маш сайн mobility, дайсны ард шууд орох чадвартай",
      "Bubble Shield нь өөрийгөө болон бусдыг хамгаална",
      "Primal Rage Ultimate нь маш их дарамт өгдөг",
    ],
    weaknessesMn: [
      "Ganцаараа орсон тохиолдолд амархан устгагддаг",
      "Алсын довтолгооны хэрэгслэлгүй",
      "Тусламжгүйгээр урт хугацаагаар тулалдах чадваргүй",
    ],
    tipsMn: [
      "Jump Pack-аа зөвхөн буцах зам байгаа үед ашигла.",
      "Bubble Shield-ээ өөрийгөө хамгаалахаас гадна эмзэг healer-ийг хамгаалахад ч ашиглаж болно.",
      "Primal Rage-ийг довтлохоос гадна ухрахад мөн ашиглаж болно.",
    ],
  },
  abilities: [
    {
      id: "wn-tesla",
      name: "Tesla Cannon",
      nameMn: "Tesla Cannon",
      type: "Primary Fire",
      keybind: "LMB",
      descriptionMn: "Ойрын зайд тасралтгүй цахилгаан damage учруулах үндсэн зэвсэг.",
      verified: true,
    },
    {
      id: "wn-jumppack",
      name: "Jump Pack",
      nameMn: "Jump Pack",
      type: "Movement",
      keybind: "Space",
      descriptionMn:
        "Өндөрт үсэрч газардах үедээ ойролцоох дайсанд damage, богино хугацааны сааталт учруулна.",
      verified: true,
    },
    {
      id: "wn-bubble",
      name: "Barrier Projector",
      nameMn: "Barrier Projector",
      type: "Defensive",
      keybind: "RMB",
      descriptionMn: "Тойрог хэлбэрийн barrier үүсгэж багтаа хамт орогнох боломж олгоно.",
      verified: true,
    },
    {
      id: "wn-primalrage",
      name: "Primal Rage",
      nameMn: "Primal Rage",
      type: "Ultimate",
      descriptionMn:
        "Уинстон илүү хүчтэй хэлбэрт шилжиж, нэмэлт HP, damage, хурдацтай Jump Pack-тэй болно.",
      verified: true,
    },
  ],
  perks: {
    minor: [
      {
        id: "wn-minor-1",
        name: "Electric Charge",
        descriptionMn: "Tesla Cannon-аар цохисон дайсан тус бүрд 10% movement speed авна (дээд тал нь 30%).",
        effectMn: "Олон дайсныг зэрэг цохих тусам хурдан хөдөлдөг болно.",
        verified: true,
      },
      {
        id: "wn-minor-2",
        name: "Heavy Landing",
        descriptionMn: "Primal Rage үед агаарт байхдаа Jump Pack-ийн damage, талбай 75% хүртэл нэмэгддэг.",
        effectMn: "Ultimate үедээ Jump Pack-аа илүү аюултай болгодог.",
        verified: true,
      },
    ],
    major: [
      {
        id: "wn-major-1",
        name: "Chain Lightning",
        descriptionMn: "Бүрэн цэнэглэсэн Secondary Fire цохилт 2 нэмэлт зорилт руу шидэгддэг.",
        effectMn: "Нэг цохилтоор гурван дайсанд зэрэг damage учруулна.",
        verified: true,
      },
      {
        id: "wn-major-2",
        name: "Revitalizing Barrier",
        descriptionMn: "Barrier Projector дотор байгаа багийн гишүүдийг секундэд 30 HP-аар heal хийдэг.",
        effectMn: "Bubble Shield-ээ healing-ийн хэрэгсэл болгож ашиглах боломжтой.",
        verified: true,
      },
    ],
  },
  passives: [
    {
      id: "wn-passive",
      name: "Kinetic Absorption",
      nameMn: "Kinetic Absorption",
      descriptionMn: "Агаарт байх үед аажмаар HP-ээ сэргээдэг (Initiator sub-role passive).",
      impactMn: "Jump Pack-аар довтлох, Knockback үед бага зэрэг HP сэргэдэг тул амьд үлдэх магадлал нэмэгддэг.",
      verified: true,
    },
  ],
};

const dva: Hero = {
  id: "dva",
  name: "D.Va",
  nameMn: "Ди.Ва",
  role: "Tank",
  subRole: "Initiator",
  colorAccent: "#F385C0",
  initials: "DV",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "beginner",
  beginnerWhyMn: [
    "Том hitbox, өндөр HP-тэй тул алдаа гаргахад илүү өршөөлтэй.",
    "Defense Matrix нэг товч дараад л дайсны ихэнх довтолгоог хаана.",
    "Мех устгагдсан ч дахин дуудаж болдог тул эрсдэл бага.",
  ],
  overview: {
    summaryMn:
      "Ди.Ва бол дэвшилтэт мех (mech) дотор тулалддаг эсвэл түүнээс гарч бяцхан биетэйгээр тулалдаж чаддаг уян хатан танк.",
    playstyleMn:
      "Fusion Cannons-аар ойрын довтолгоо хийж, Defense Matrix-аар багийн эмзэг гишүүдийг сум, бөмбөгнөөс хамгаална. Мех эвдрэхэд Self-Destruct болгож ашиглах боломжтой.",
    strengthsMn: [
      "Defense Matrix-ээр олон төрлийн projectile-ийг саармагжуулна",
      "Boosters-аар агаараар довтолж чадна",
      "Мех эвдэрсэн ч Self-Destruct нь маш аюултай",
    ],
    weaknessesMn: [
      "Мех эвдэрвэл богино хугацаанд эмзэг болно",
      "Defense Matrix нь бүх довтолгоог блоклодоггүй",
      "Нэг цэгт удаан зогсоход сул",
    ],
    tipsMn: [
      "Defense Matrix-аа Ultimate болон чухал чадваруудыг зогсооход хэмнэж ашигла.",
      "Мех эвдрэхэд Self-Destruct-ыг стратегийн байдлаар шидэж болно.",
      "Boosters-аар байнга байрлалаа сольж дайсныг будилуулж болно.",
    ],
  },
  abilities: [
    {
      id: "dv-fusion",
      name: "Fusion Cannons",
      nameMn: "Fusion Cannons",
      type: "Primary Fire",
      keybind: "LMB",
      descriptionMn: "Мехийн хоёр их буугаар ойрын-дунд зайд тасралтгүй damage учруулна.",
      verified: true,
    },
    {
      id: "dv-boosters",
      name: "Boosters",
      nameMn: "Boosters",
      type: "Movement",
      keybind: "Shift",
      descriptionMn: "Мехийг чиглэлд нь хурдан нисгэж, замдаа таарсан дайсныг мөргөж унагаана.",
      verified: true,
    },
    {
      id: "dv-matrix",
      name: "Defense Matrix",
      nameMn: "Defense Matrix",
      type: "Defensive",
      keybind: "RMB",
      descriptionMn:
        "Урд талын ихэнх сум, sniper-ийн харваа зэргийг устгаж багийг довтолгооноос хамгаална.",
      tipMn: "Melee болон зарим Ultimate-д ажиллахгүй тул анхаарах хэрэгтэй.",
      verified: true,
    },
    {
      id: "dv-selfdestruct",
      name: "Self-Destruct",
      nameMn: "Self-Destruct",
      type: "Ultimate",
      descriptionMn:
        "Мехээс гарч мехийг тэсрэлт болгон шидэж, том талбайд хүчтэй damage учруулна.",
      verified: true,
    },
    {
      id: "dv-callmech",
      name: "Call Mech",
      nameMn: "Call Mech",
      type: "Ability",
      descriptionMn: "Мех устгагдсаны дараа тодорхой хугацааны дараа шинэ мехийг дуудна.",
      verified: true,
    },
  ],
  perks: {
    minor: [
      {
        id: "dv-minor-1",
        name: "Bunny Power",
        descriptionMn: "Call Mech-ийн дэлбэрэлтийн талбай 50%-иар томорч, гарахдаа 75 нэмэлт overhealth авна.",
        effectMn: "Мехээ дуудахдаа илүү аюултай, илүү аюулгүй болно.",
        verified: true,
      },
      {
        id: "dv-minor-2",
        name: "Extended Boosters",
        descriptionMn: "Boosters-аар дайсныг цохиход 40% нэмэгдэл damage өгч, duration 0.5 секундээр уртасна.",
        effectMn: "Boosters-аа довтолгооны хэрэгсэл болгож илүү үр дүнтэй ашиглана.",
        verified: true,
      },
    ],
    major: [
      {
        id: "dv-major-1",
        name: "Shield System",
        descriptionMn: "100 HP-г shield болгон хувиргаж, Defense Matrix шингээсэн damage-ийн 25%-аар shield сэргээдэг.",
        effectMn: "Defense Matrix-ээ идэвхтэй ашиглах тусам илүү тэсвэртэй болно.",
        verified: true,
      },
      {
        id: "dv-major-2",
        name: "Precision Fusion",
        descriptionMn: "Товч дараад Fusion Cannons-ийн тархалтыг 3 секундын турш 75%-иар нарийсгана.",
        effectMn: "Алсын зайд илүү нарийвчилсан damage өгөх боломжтой болно.",
        verified: true,
      },
    ],
  },
  passives: [
    {
      id: "dv-passive",
      name: "Kinetic Absorption",
      nameMn: "Kinetic Absorption",
      descriptionMn: "Агаарт байх үед аажмаар HP-ээ сэргээдэг (Initiator sub-role passive).",
      verified: true,
    },
  ],
};

const zarya: Hero = {
  id: "zarya",
  name: "Zarya",
  nameMn: "Заря",
  role: "Tank",
  subRole: "Bruiser",
  colorAccent: "#F075D6",
  initials: "ZR",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "intermediate",
  overview: {
    summaryMn:
      "Заря бол Particle Barrier-ээрээ damage-ийг шингээж, түүгээрээ өөрийн зэвсгийг хүчирхэгжүүлдэг өвөрмөц механик бүхий танк.",
    playstyleMn:
      "Barrier-аа өөртөө болон багийн гишүүдэд цагт нь тавьж энерги цуглуулан, өндөр энергитэй үед Particle Cannon-оороо асар их damage учруулна.",
    strengthsMn: [
      "Энерги өндөр үед туйлын их damage өгнө",
      "Хоёр Barrier-ээр багаа хамгаалж чадна",
      "Graviton Surge Ultimate нь багийн тулаанд маш хүчтэй",
    ],
    weaknessesMn: [
      "Энерги бага үед damage өгөх чадвар сул",
      "Mobility ability байхгүй",
      "Barrier зөв цагт тавихгүй бол энерги хуримтлуулж чадахгүй",
    ],
    tipsMn: [
      "Barrier-аа дайралт ирэхийн өмнө урьдчилан тавь.",
      "Graviton Surge-ийг багийн бусад Ultimate-тэй хослуулж ашигла.",
      "Өөрийн Barrier-ийг дайсны gэмтэлтэй эсвэл чухал баатар руу тавьж болно.",
    ],
  },
  abilities: [
    {
      id: "zr-cannon",
      name: "Particle Cannon",
      nameMn: "Particle Cannon",
      type: "Primary Fire",
      keybind: "LMB",
      descriptionMn:
        "Хуримтлагдсан энергиэс хамааран damage нэмэгддэг үндсэн зэвсэг. Хоёрдогч буудлага бөмбөлөг харвана.",
      verified: true,
    },
    {
      id: "zr-selfbarrier",
      name: "Particle Barrier",
      nameMn: "Particle Barrier",
      type: "Defensive",
      keybind: "Shift",
      descriptionMn: "Өөртөө богино хугацааны barrier тавьж, хүлээж авсан гэмтлээрээ энерги цуглуулна.",
      verified: true,
    },
    {
      id: "zr-projectedbarrier",
      name: "Projected Barrier",
      nameMn: "Projected Barrier",
      type: "Defensive",
      keybind: "E",
      descriptionMn: "Багийн гишүүнд barrier тавьж, тэдний хүлээж авсан damage-ээр энерги цуглуулна.",
      verified: true,
    },
    {
      id: "zr-graviton",
      name: "Graviton Surge",
      nameMn: "Graviton Surge",
      type: "Ultimate",
      descriptionMn:
        "Тодорхой цэгт таталцлын бөмбөг үүсгэж дайснуудыг татан төвлөрүүлж, damage учруулна. Бусад Ultimate-тэй маш сайн хослодог.",
      verified: true,
    },
  ],
  perks: {
    minor: [
      {
        id: "zr-minor-1",
        name: "Jump-ups",
        descriptionMn: "Particle Cannon-ий Secondary Fire-аас өөрийгөө knockback хийх хүч 75%-иар нэмэгддэг.",
        effectMn: "Бөмбөлгөө ашиглаж давхар байрлал хийх боломжтой.",
        verified: true,
      },
      {
        id: "zr-minor-2",
        name: "Spotter",
        descriptionMn: "Projected Barrier тавьсан үедээ тухайн баатрын идэвхгүй healing-ийг идэвхжүүлж, хурдыг нь 20%-иар нэмэгдүүлдэг.",
        effectMn: "Barrier тавьсан хамтрагчаа нэмэлтээр дэмждэг.",
        verified: true,
      },
    ],
    major: [
      {
        id: "zr-major-1",
        name: "Extra Oomph",
        descriptionMn: "Barrier идэвхтэй үед Particle Cannon-ий цацрагаар damage өгөх нь нэмэлт энерги үүсгэдэг.",
        effectMn: "Barrier-аа хамгаалалтын зэрэгцээ энерги цуглуулах хэрэгсэл болгодог.",
        verified: true,
      },
      {
        id: "zr-major-2",
        name: "Energy Lance",
        descriptionMn: "Particle Cannon-ий энергийн цацраг дайсныг нэвтэрдэг болно.",
        effectMn: "Шугаман дагуух олон дайсанд зэрэг damage өгнө.",
        verified: true,
      },
    ],
  },
  passives: [
    {
      id: "zr-passive",
      name: "Steadfast",
      nameMn: "Steadfast",
      descriptionMn: "Критик damage-ийг бага хүлээн авдаг, HP бага үед хурд нэмэгддэг (Bruiser passive).",
      verified: true,
    },
  ],
};

const roadhog: Hero = {
  id: "roadhog",
  name: "Roadhog",
  nameMn: "Роудхог",
  role: "Tank",
  subRole: "Bruiser",
  colorAccent: "#B5893A",
  initials: "RD",
  dataComplete: true,
  lastUpdated: S5,
  difficulty: "beginner",
  beginnerWhyMn: [
    "Chain Hook нь сурахад гол анхаарах чадвар — тусвал дайсан шууд ойр ирнэ.",
    "Take a Breather-ээр өөрийгөө амархан эмчилж, алдаанаасаа сэргэж чаддаг.",
    "Trash Compactor нь дайсны projectile-ийг шингээж буцааж харвадаг тул хамгаалалт ба довтолгоог нэг товчоор хослуулна.",
  ],
  overview: {
    summaryMn:
      "Season 5-д Роудхог том rework хийгдсэн. Тэрээр Chain Hook-оороо дайсныг татаж, 2 burst-ээр буудах Scrap Gun болон projectile шингээдэг шинэ Trash Compactor чадвартай, ойрын зайд аюултай танк.",
    playstyleMn:
      "Chain Hook-оор эмзэг зорилтыг татаж авчирч, Scrap Gun-ы хоёр burst-ээр дуусгана. Trash Compactor-оор дайсны projectile-ийг шингээж, багаа хамгаалан буцаан дэлбэрэх цохилт өгнө. Take a Breather-ээр өөрийгөө heal хийж удаан амьд үлдэнэ.",
    strengthsMn: [
      "Chain Hook нь дайсныг татаж, тэр дундаа өмнөхөөс бага lethal болсон ч хүчтэй тоглоомын хэрэгсэл хэвээр",
      "Trash Compactor нь projectile шингээж, 75–200 damage-тай дэлбэрэлт болгон буцаадаг",
      "Take a Breather-ээр секундэд 200 HP өөрийгөө heal хийнэ",
      "Маш их HP-тэй",
    ],
    weaknessesMn: [
      "Scrap Gun-ы critical multiplier буурч, falloff зай богиносон",
      "Hook алдвал cooldown-оо дэмий үрдэг",
      "Mobility байхгүй, Trash Compactor-ийн үед 15% удаан хөдөлнө",
    ],
    tipsMn: [
      "Hook хийхийн өмнө дайсныг хана эсвэл булан руу татах боломжтой эсэхийг тооц.",
      "Trash Compactor-ийг дайсны projectile олон ирэх үед ашигла — хэдий чинээ их шингээнэ, төдий чинээ их damage болно.",
      "Whole Hog ашиглаж байхдаа Here, Piggy Piggy perk-тэй бол Chain Hook-ийн cooldown 80% бага байна.",
    ],
  },
  abilities: [
    {
      id: "rd-scrapgun",
      name: "Scrap Gun",
      nameMn: "Scrap Gun",
      type: "Primary Fire",
      keybind: "LMB",
      descriptionMn: "Нэг удаа дарахад 2 burst буудна. Burst бүрд олон жижиг хог, төвд нь нэг том projectile гарна. Secondary Fire нь Trash Compactor-оор солигдсон.",
      tipMn: "Critical multiplier 1.5x болж буурсан тул толгой бараадахаас илүү ойр зайд тогтвортой цохь.",
      damage: "204 / volley",
      range: "falloff 20–35 м",
      verified: true,
    },
    {
      id: "rd-trash",
      name: "Trash Compactor",
      nameMn: "Trash Compactor",
      type: "Defensive",
      keybind: "RMB",
      descriptionMn: "2 секундийн турш урд талын projectile-ийг шингээнэ. Дууссаны дараа шингээсэн damage-ийн 30%-тай тэнцэх хүчтэй дэлбэрэх projectile харвана.",
      tipMn: "Идэвхтэй байхдаа 15% удаан хөдөлдөг. Дайсны олон projectile ирэх мөчид ашиглавал хамгийн их damage болно.",
      cooldown: "10 сек",
      damage: "75–200",
      duration: "2 сек",
      range: "дэлбэрэлт 2–6 м",
      verified: true,
    },
    {
      id: "rd-hook",
      name: "Chain Hook",
      nameMn: "Chain Hook",
      type: "Ability",
      keybind: "Shift",
      descriptionMn: "Гинжин дэгээ шидэж, тусвал дайсныг өөр рүүгээ татна. Одоо дайсан 4.5 метрийн зайд буулгагдаж, 0.3 секунд stun авна.",
      tipMn: "Hook-той дайсныг нэн даруй Scrap Gun-аар дуусга.",
      cooldown: "6 сек",
      verified: true,
    },
    {
      id: "rd-breather",
      name: "Take a Breather",
      nameMn: "Take a Breather",
      type: "Defensive",
      keybind: "E",
      descriptionMn: "Богино хугацаанд өөрийн HP-ийг секундэд 200-аар сэргээж, ирж буй damage-ийг 35%-иар багасгана.",
      cooldown: "2 сек",
      healing: "200 / сек",
      duration: "2 сек хүртэл",
      verified: true,
    },
    {
      id: "rd-wholehog",
      name: "Whole Hog",
      nameMn: "Whole Hog",
      type: "Ultimate",
      descriptionMn:
        "Асар хүчтэй Scrap Gun болгож урд талын бүх дайсныг ухрааж их damage учруулна.",
      verified: true,
    },
  ],
  perks: {
    minor: [
      {
        id: "rd-minor-1",
        name: "Scrap Hook",
        descriptionMn: "Chain Hook тусах бүрд 4 сум дахин reload болно (өмнө нь 2).",
        effectMn: "Hook хийсний дараа шууд буудах боломжтой.",
        verified: true,
      },
      {
        id: "rd-minor-2",
        name: "Here, Piggy Piggy",
        descriptionMn: "Whole Hog идэвхтэй үед Chain Hook-ийн cooldown 80%-иар багасна.",
        effectMn: "Ultimate-ийн үеэр дайсныг үргэлжлүүлэн татаж чадна.",
        verified: true,
      },
    ],
    major: [
      {
        id: "rd-major-1",
        name: "Toxic Exhaust",
        descriptionMn: "Trash Compactor идэвхтэй үед урд талын дайснууд 30% удааширч, секундэд 20 damage авна.",
        effectMn: "Trash Compactor-оор дайсны урсгалыг удаашруулж, damage өгнө.",
        verified: true,
      },
      {
        id: "rd-major-2",
        name: "Hogdrogen Exposure",
        descriptionMn: "Take a Breather нь ойролцоох 10 метр дотор байгаа багийн гишүүдийг мөн 50%-ийн хэмжээгээр heal хийдэг.",
        effectMn: "Өөрийгөө heal хийхийн зэрэгцээ багийнхаа support болдог.",
        verified: true,
      },
    ],
  },
  passives: [
    {
      id: "rd-passive",
      name: "Steadfast",
      nameMn: "Steadfast",
      descriptionMn: "Критик damage-ийг бага хүлээн авч, HP бага үед хурд нэмэгддэг (Bruiser passive).",
      verified: true,
    },
  ],
};

const ramattra: Hero = {
  id: "ramattra",
  name: "Ramattra",
  nameMn: "Раматра",
  role: "Tank",
  subRole: "Stalwart",
  colorAccent: "#6E7DAE",
  initials: "RM",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "advanced",
  overview: {
    summaryMn:
      "Раматра хоёр хэлбэртэй: Omnic хэлбэрээрээ алсаас Void damage өгч, Nemesis хэлбэрт шилжсэнээр ойрын зайд хүчтэй tank болдог.",
    playstyleMn:
      "Void Barrier-аар багийг хамгаалж, Nemesis Form руу шилжин довтолгооны эхлэлийг хийдэг. Хоёр хэлбэрийн хооронд ухаалгаар шилжих нь чухал.",
    strengthsMn: [
      "Хоёр хэлбэрийн ачаар алсаас болон ойрын зайд damage өгч чадна",
      "Nemesis Form үед амьд үлдэх чадвар нэмэгддэг",
      "Void Barrier багийн ирэлтийг хамгаалдаг",
    ],
    weaknessesMn: ["Omnic хэлбэрт mobility сул", "Хэлбэр солиход тодорхой цаг зарцуулагддаг"],
    tipsMn: [
      "Void Barrier-ээ дайралтын өмнө урьдчилан тавь.",
      "Nemesis Form-ийг эмзэг зорилт руу довтлоход ашигла.",
      "Annihilation Ultimate-ийг багийн бөөгнөрсөн үед ашигла.",
    ],
  },
  abilities: [
    {
      id: "rm-voidaccel",
      name: "Void Accelerator",
      nameMn: "Void Accelerator",
      type: "Primary Fire",
      keybind: "LMB",
      descriptionMn: "Omnic хэлбэрт алсаас Void энергийн damage өгнө.",
      verified: true,
    },
    {
      id: "rm-blockade",
      name: "Block",
      nameMn: "Block",
      type: "Defensive",
      keybind: "RMB",
      descriptionMn: "Урд талын damage-ийг блоклож, зарим ultimate-ийг ч тодорхой хэмжээгээр тэсвэрлэнэ.",
      verified: true,
    },
    {
      id: "rm-pummel",
      name: "Pummel",
      nameMn: "Pummel",
      type: "Ability",
      descriptionMn: "Nemesis Form-д ойрын зайд хүчтэй цохилт өгнө.",
      verified: true,
    },
    {
      id: "rm-nemesisform",
      name: "Nemesis Form",
      nameMn: "Nemesis Form",
      type: "Ability",
      keybind: "Shift",
      descriptionMn: "Илүү том, тэсвэртэй хэлбэрт шилжиж ойрын зайн довтолгоонд шилждэг.",
      verified: true,
    },
    {
      id: "rm-annihilation",
      name: "Annihilation",
      nameMn: "Annihilation",
      type: "Ultimate",
      descriptionMn: "Nemesis Form-д орж ойролцоох бүх дайсанд тасралтгүй damage, өөртөө healing өгнө.",
      verified: true,
    },
  ],
  perks: {
    minor: [
      {
        id: "rm-minor-1",
        name: "Relentless Form",
        descriptionMn: "Nemesis Form идэвхтэй үед дайсныг устгах бүрд duration 2 секундээр уртасна (Annihilation үед хагас нөлөөтэй).",
        effectMn: "Nemesis Form-оо тулаанд удаан хугацаагаар барих боломжтой.",
        verified: true,
      },
      {
        id: "rm-minor-2",
        name: "Prolonged Barrier",
        descriptionMn: "Void Barrier-ийн duration 50%-иар уртасна.",
        effectMn: "Хамгаалалтын шилээ илүү удаан барина.",
        verified: true,
      },
    ],
    major: [
      {
        id: "rm-major-1",
        name: "Nanite Repair",
        descriptionMn: "Ravenous Vortex дотор байх үедээ секундэд 100 HP-аар heal авна.",
        effectMn: "Ultimate-ийн талбайдаа удаан хугацаагаар байх боломжтой.",
        verified: true,
      },
      {
        id: "rm-major-2",
        name: "Void Surge",
        descriptionMn: "Void Accelerator тасралтгүй буудах үедээ үе үе 6 нэмэлт цацраг цацруулна.",
        effectMn: "Алсын зайн damage мэдэгдэхүйц нэмэгдэнэ.",
        verified: true,
      },
    ],
  },
  passives: [
    {
      id: "rm-passive",
      name: "Steadfast",
      nameMn: "Steadfast",
      descriptionMn: "Knockback болон slow эффектийг бага хүлээн авна (Stalwart passive).",
      verified: true,
    },
  ],
};

const tracer: Hero = {
  id: "tracer",
  name: "Tracer",
  nameMn: "Трейсер",
  role: "Damage",
  subRole: "Flanker",
  colorAccent: "#F5A623",
  initials: "TR",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "advanced",
  overview: {
    summaryMn:
      "Трейсер бол цагийг удирдах чадвартай, маш өндөр хөдөлгөөнт, дайсны ард шууд орж эмзэг зорилтуудыг зорьдог flanker damage баатар.",
    playstyleMn:
      "Blink-ээр байрлалаа хурдан сольж, Pulse Pistols-аараа ойрын зайд их damage өгнө. Асуудалд орвол Recall-аар өмнөх байрлал руугаа буцна.",
    strengthsMn: [
      "Маш өндөр mobility",
      "Recall-аар алдаагаа засах боломжтой",
      "Ойрын зайд асар их DPS",
    ],
    weaknessesMn: ["HP маш бага", "Алсын зайд сул", "Тогтвортой тулаанд амьд үлдэхэд хэцүү"],
    tipsMn: [
      "Blink-ээ дэмий бүү үр, буцах зам үлдээж бай.",
      "Recall-аа HP их байхад нь идэвхжүүлж дараа нь эрсдэлтэй орж болно.",
      "Pulse Bomb-оо танк дээр биш эмзэг баатар эсвэл бөөгнөрсөн бүлэг рүү шид.",
    ],
  },
  abilities: [
    {
      id: "tr-pistols",
      name: "Pulse Pistols",
      nameMn: "Pulse Pistols",
      type: "Primary Fire",
      keybind: "LMB",
      descriptionMn: "Хоёр гар буугаар ойрын зайд хурдан бууджиж их damage өгнө.",
      verified: true,
    },
    {
      id: "tr-blink",
      name: "Blink",
      nameMn: "Blink",
      type: "Movement",
      keybind: "Shift",
      descriptionMn: "Богино зайд шууд шилжинэ. Дайсны довтолгооноос зайлсхийх, байрлалаа хурдан солиход тустай.",
      verified: true,
    },
    {
      id: "tr-recall",
      name: "Recall",
      nameMn: "Recall",
      type: "Ability",
      keybind: "E",
      descriptionMn: "Хэдэн секундийн өмнөх байрлал болон HP-дээ буцна.",
      verified: true,
    },
    {
      id: "tr-pulsebomb",
      name: "Pulse Bomb",
      nameMn: "Pulse Bomb",
      type: "Ultimate",
      descriptionMn: "Дайсанд наалддаг бөмбөг шидэж, богино хугацааны дараа асар их damage учруулан тэсэрнэ.",
      verified: true,
    },
  ],
  perks: {
    minor: [
      {
        id: "tr-minor-1",
        name: "Temporal Regen",
        descriptionMn: "Идэвхгүй HP сэргээлт 50%-иар хурдан эхэлдэг.",
        effectMn: "Тулааны завсарлагаанд илүү хурдан сэргэнэ.",
        verified: true,
      },
      {
        id: "tr-minor-2",
        name: "Kinetic Reload",
        descriptionMn: "Ойрын довтолгоо (melee) хийх бүрд 12 сум reload болно.",
        effectMn: "Ойрын довтолгоог ашиглаад шууд буудах боломжтой.",
        verified: true,
      },
    ],
    major: [
      {
        id: "tr-major-1",
        name: "Blink Packs",
        descriptionMn: "HP-ийн боодол Blink-ийн нэг charge-ийг сэргээдэг.",
        effectMn: "Boodol авах бүрдээ Blink-ээ нэмж авна.",
        verified: true,
      },
      {
        id: "tr-major-2",
        name: "Quantum Entanglement",
        descriptionMn: "Recall идэвхжихэд 50 overhealth, цаг хугацааны дараа алга болдог 20 сум авна.",
        effectMn: "Recall-аа зугтахаас гадна довтлоход бэлтгэхэд ашиглаж болно.",
        verified: true,
      },
    ],
  },
  passives: [
    {
      id: "tr-passive",
      name: "Flanker Passive",
      nameMn: "Flanker Passive",
      descriptionMn: "HP-ийн боодол ашиглахад илүү их HP сэргээдэг (Flanker sub-role passive).",
      verified: true,
    },
  ],
};

const genji: Hero = {
  id: "genji",
  name: "Genji",
  nameMn: "Гэнжи",
  role: "Damage",
  subRole: "Flanker",
  colorAccent: "#8CE05A",
  initials: "GJ",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "advanced",
  overview: {
    summaryMn:
      "Гэнжи бол сум сэлмээр няслан буцаадаг, маш их mobility-тэй самурай damage баатар.",
    playstyleMn:
      "Shuriken-аар дунд зайд damage өгч, Swift Strike-аар дайсныг зорьж, Deflect-ээр алсын довтолгооноос хамгаалагдана.",
    strengthsMn: [
      "Deflect-ээр сум, зарим Ultimate-ийг буцаана",
      "Маш сайн mobility (Double Jump, Wall Climb, Swift Strike)",
      "Dragonblade Ultimate нь ойрын зайд асар аюултай",
    ],
    weaknessesMn: ["HP бага", "Deflect зөв цагт хийхгүй бол хэрэглээгүй", "Нарийн aim шаарддаг"],
    tipsMn: [
      "Deflect-ийг зөвхөн ирж буй довтолгоог харсан үед идэвхжүүл.",
      "Swift Strike-аар дайсныг устгавал cooldown дахин сэргэдэг тул дараалан ашиглаж болно.",
      "Dragonblade-ийг flank-аас гэнэтийн байдлаар ашигла.",
    ],
  },
  abilities: [
    {
      id: "gj-shuriken",
      name: "Shuriken",
      nameMn: "Shuriken",
      type: "Primary Fire",
      keybind: "LMB",
      descriptionMn: "Гурван сум шидэж дунд зайд damage өгнө.",
      verified: true,
    },
    {
      id: "gj-swiftstrike",
      name: "Swift Strike",
      nameMn: "Swift Strike",
      type: "Movement",
      keybind: "Shift",
      descriptionMn: "Урагш хурдан гүйж замдаа таарсан дайсанд сэлмээрээ damage учруулна. Дайсныг устгавал cooldown дахин сэргэнэ.",
      verified: true,
    },
    {
      id: "gj-deflect",
      name: "Deflect",
      nameMn: "Deflect",
      type: "Defensive",
      keybind: "RMB",
      descriptionMn: "Урд талаас ирэх сум болон projectile-ийг буцааж дайсан руу нь чиглүүлнэ.",
      verified: true,
    },
    {
      id: "gj-doublejump",
      name: "Cyber-Agility",
      nameMn: "Cyber-Agility",
      type: "Movement",
      descriptionMn: "Агаарт хоёр дахь удаагаа үсрэх (double jump) болон хана авирах чадвар.",
      verified: true,
    },
    {
      id: "gj-dragonblade",
      name: "Dragonblade",
      nameMn: "Dragonblade",
      type: "Ultimate",
      descriptionMn: "Сэлмээ идэвхжүүлж, ойрын зайд маш хурдан, хүчтэй цохилт хийх боломжтой болно.",
      verified: true,
    },
  ],
  perks: {
    minor: [
      {
        id: "gj-minor-1",
        name: "Swift Cuts",
        descriptionMn: "Ойрын довтолгоо (Quick Melee) Swift Strike-ийн cooldown-ийг 3 секундээр багасгана.",
        effectMn: "Swift Strike-аа илүү олон удаа ашиглах боломжтой.",
        verified: true,
      },
      {
        id: "gj-minor-2",
        name: "Dragon's Thirst",
        descriptionMn: "Dragonblade-ийн цохилт бүр 30% lifesteal өгдөг.",
        effectMn: "Dragonblade идэвхтэй үедээ өөрийгөө heal хийнэ.",
        verified: true,
      },
    ],
    major: [
      {
        id: "gj-major-1",
        name: "Blade Twisting",
        descriptionMn: "Elimination хийсний дараа шууд Swift Strike ашиглавал 25 нэмэлт үргэлжилсэн damage өгнө.",
        effectMn: "Дараалсан elimination хийхэд илүү үр дүнтэй.",
        verified: true,
      },
      {
        id: "gj-major-2",
        name: "Meditation",
        descriptionMn: "Deflect идэвхтэй үедээ секундэд 50 HP сэргээнэ.",
        effectMn: "Deflect-ээ хамгаалалт төдийгүй healing-ийн хэрэгсэл болгоно.",
        verified: true,
      },
    ],
  },
  passives: [
    {
      id: "gj-passive",
      name: "Flanker Passive",
      nameMn: "Flanker Passive",
      descriptionMn: "HP-ийн боодол ашиглахад илүү их HP сэргээдэг (Flanker sub-role passive).",
      verified: true,
    },
  ],
};

const widowmaker: Hero = {
  id: "widowmaker",
  name: "Widowmaker",
  nameMn: "Видоумэйкер",
  role: "Damage",
  subRole: "Sharpshooter",
  colorAccent: "#6E5B9E",
  initials: "WM",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "advanced",
  overview: {
    summaryMn:
      "Видоумэйкер бол алсаас нарийвчилсан цохилтоор дайснуудыг нэг харваасаар устгадаг мэргэн буучин.",
    playstyleMn:
      "Grappling Hook-оор өндөр байрлал эзэлж, Widow's Kiss буугаар алсаас критик цохилт хийж эмзэг зорилтуудыг устгана.",
    strengthsMn: [
      "Нэг критик цохилтоор ихэнх эмзэг баатрыг устгана",
      "Infra-Sight Ultimate нь бүх багийн хараанд туслана",
      "Grappling Hook-оор давуу байрлал эзэлдэг",
    ],
    weaknessesMn: ["Ойрын зайд маш сул", "HP бага", "Нарийн aim шаарддаг"],
    tipsMn: [
      "Байнга байрлалаа сольж дайсанд урьдчилан таамаглуулах боломжийг бүү өг.",
      "Venom Mine-аа ар талаа хамгаалахад ашигла.",
      "Infra-Sight-аа довтолгооны эхэнд идэвхжүүл.",
    ],
  },
  abilities: [
    {
      id: "wm-widowskiss-hip",
      name: "Widow's Kiss (Hip Fire)",
      nameMn: "Widow's Kiss — энгийн буудлага",
      type: "Primary Fire",
      keybind: "LMB",
      descriptionMn: "Автомат буу хэлбэрээр дунд зайд damage өгнө.",
      verified: true,
    },
    {
      id: "wm-widowskiss-scope",
      name: "Widow's Kiss (Scoped)",
      nameMn: "Widow's Kiss — Sniper зорилтот",
      type: "Secondary Fire",
      keybind: "RMB",
      descriptionMn: "Sniper горимд шилжиж хол зайд критик их damage өгнө.",
      verified: true,
    },
    {
      id: "wm-grapple",
      name: "Grappling Hook",
      nameMn: "Grappling Hook",
      type: "Movement",
      keybind: "Shift",
      descriptionMn: "Дэгээ шидэж өөрийгөө тухайн зүг рүү хурдан татан авчирна.",
      verified: true,
    },
    {
      id: "wm-venommine",
      name: "Venom Mine",
      nameMn: "Venom Mine",
      type: "Ability",
      descriptionMn: "Мина байрлуулж, дайсан ойртоход хор цацруулан damage, хараа муутгана.",
      verified: true,
    },
    {
      id: "wm-infrasight",
      name: "Infra-Sight",
      nameMn: "Infra-Sight",
      type: "Ultimate",
      descriptionMn: "Тодорхой хугацаанд бүх багийнхаа хана нэвтэрсэн харааг нээж өгнө.",
      verified: true,
    },
  ],
  perks: {
    minor: [
      {
        id: "wm-minor-1",
        name: "Scoped Efficiency",
        descriptionMn: "Scoped буудлага 5 биш 3 сум зарцуулдаг.",
        effectMn: "Scope-той буудлагыг илүү олон удаа хийх боломжтой.",
        verified: true,
      },
      {
        id: "wm-minor-2",
        name: "Sniper's Instinct",
        descriptionMn: "Grappling Hook ашигласны дараа 2 секундын турш Scoped цохилт 100%-иар хурдан цэнэглэгддэг.",
        effectMn: "Байрлал сольсны дараа шууд буудах бэлэн болно.",
        verified: true,
      },
    ],
    major: [
      {
        id: "wm-major-1",
        name: "Seeker Mine",
        descriptionMn: "Venom Mine идэвхэссэний дараа ойролцоох 10 метрийн дайсан руу хортой сум харвасаар байдаг.",
        effectMn: "Мина илүү удаан хугацаагаар аюултай хэвээр байна.",
        verified: true,
      },
      {
        id: "wm-major-2",
        name: "Widow's Bite",
        descriptionMn: "Scoped цохилт 125% хүртэл цэнэглэгдэж, бүрэн цэнэглэгдвэл дайсныг нэвтэрдэг болно.",
        effectMn: "Шугаман дагуух хэд хэдэн дайсанд зэрэг damage өгнө.",
        verified: true,
      },
    ],
  },
  passives: [
    {
      id: "wm-passive",
      name: "Sharpshooter Passive",
      nameMn: "Sharpshooter Passive",
      descriptionMn: "Критик цохилт хийх бүрд movement ability-ийн cooldown багасна (Sharpshooter passive).",
      verified: true,
    },
  ],
};

const soldier76: Hero = {
  id: "soldier-76",
  name: "Soldier: 76",
  nameMn: "Сольдиер: 76",
  role: "Damage",
  subRole: "Specialist",
  colorAccent: "#6E7B8F",
  initials: "S76",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "beginner",
  beginnerWhyMn: [
    "Энгийн автомат буу, тусгай тооцоолол шаардахгүй шулуун харваатай.",
    "Biotic Field-ээр өөрийгөө эмчилж чаддаг тул алдаанаасаа хурдан сэргэнэ.",
    "Sprint, Helix Rockets хоёр л гол ойлгох ёстой нэмэлт чадвар.",
  ],
  overview: {
    summaryMn:
      "Сольдиер: 76 бол сурахад амархан, тогтвортой DPS-тэй, healer дэмжлэгтэй классик боец damage баатар.",
    playstyleMn:
      "Heavy Pulse Rifle-аараа тогтмол damage өгч, Helix Rockets-аар нэмэлт хохирол учруулна. Sprint-ээр байрлалаа хурдан сольж, Biotic Field-ээр өөрийгөө болон ойролцоох багийн гишүүдийг heal хийнэ.",
    strengthsMn: [
      "Сурахад хялбар, тогтвортой damage",
      "Biotic Field-ээр өөрийгөө heal хийж чадна",
      "Tactical Visor Ultimate нь нарийвчлал өгдөг",
    ],
    weaknessesMn: ["Mobility дунд зэрэг", "Онцгой хол зайн эсвэл ойрын зайн давуу тал байхгүй"],
    tipsMn: [
      "Biotic Field-ээ тулааны эхэнд урьдчилан тавьж болно.",
      "Sprint-ээр байрлал сонгож, ойртсоны дараа буудна.",
      "Tactical Visor-ийг олон дайсан харагдаж байх үед ашигла.",
    ],
  },
  abilities: [
    {
      id: "s76-rifle",
      name: "Heavy Pulse Rifle",
      nameMn: "Heavy Pulse Rifle",
      type: "Primary Fire",
      keybind: "LMB",
      descriptionMn: "Автомат буу хэлбэрээр тогтмол damage өгнө.",
      verified: true,
    },
    {
      id: "s76-rockets",
      name: "Helix Rockets",
      nameMn: "Helix Rockets",
      type: "Secondary Fire",
      keybind: "RMB",
      descriptionMn: "Пуужин шидэж AoE damage учруулна.",
      verified: true,
    },
    {
      id: "s76-sprint",
      name: "Sprint",
      nameMn: "Sprint",
      type: "Movement",
      keybind: "Shift",
      descriptionMn: "Хөдөлгөөний хурдаа түр зуур нэмэгдүүлнэ.",
      verified: true,
    },
    {
      id: "s76-biotic",
      name: "Biotic Field",
      nameMn: "Biotic Field",
      type: "Defensive",
      keybind: "E",
      descriptionMn: "Тодорхой хугацаанд healing-ийн талбай үүсгэж дотор нь байгаа багийн гишүүдийг heal хийнэ.",
      verified: true,
    },
    {
      id: "s76-visor",
      name: "Tactical Visor",
      nameMn: "Tactical Visor",
      type: "Ultimate",
      descriptionMn: "Тодорхой хугацаанд бүх харагдах дайсан руу автоматаар зорилт тогтоож буудна.",
      verified: true,
    },
  ],
  perks: {
    minor: [
      {
        id: "s76-minor-1",
        name: "Helix Propulsion",
        descriptionMn: "Helix Rockets-ийн хурд 50%-иар нэмэгдэнэ.",
        effectMn: "Пуужингаа илүү хурдан хүргэнэ.",
        verified: true,
      },
      {
        id: "s76-minor-2",
        name: "Tactical Salvo",
        descriptionMn: "Tactical Visor идэвхтэй үед Helix Rockets-ийн cooldown 80%-иар багасаж, буудлагыг тасалдуулахгүй.",
        effectMn: "Ultimate үедээ Helix Rockets-ээ илүү олон удаа ашиглана.",
        verified: true,
      },
    ],
    major: [
      {
        id: "s76-major-1",
        name: "Full Stride",
        descriptionMn: "Sprint-ийн хурдны нэмэгдэл 2 секундын дотор нэмэлт 25%-иар өсдөг.",
        effectMn: "Удаан гүйх тусам хурдан болно.",
        verified: true,
      },
      {
        id: "s76-major-2",
        name: "Stim Pack",
        descriptionMn: "Biotic Field-ийг Stim Pack болгон ашиглаж болно — 5 секундын турш довтолгоо, reload speed 20%-иар нэмэгдэх боловч энэ хугацаанд эмчлэгдэхгүй.",
        effectMn: "Healing-ийн оронд түр зуурын хүчирхэгжүүлэлт сонгож болно.",
        verified: true,
      },
    ],
  },
  passives: [
    {
      id: "s76-passive",
      name: "Specialist Passive",
      nameMn: "Specialist Passive",
      descriptionMn: "Дайсныг устгасны дараа богино хугацаанд сум ачих хурд нэмэгддэг (Specialist passive).",
      verified: true,
    },
  ],
};

const reaper: Hero = {
  id: "reaper",
  name: "Reaper",
  nameMn: "Рийпэр",
  role: "Damage",
  subRole: "Flanker",
  colorAccent: "#7A2E2E",
  initials: "RP",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "beginner",
  beginnerWhyMn: [
    "Ойрын зайд шууд буудаад байхад л их гэмтэл өгдөг — нарийн aim шаардахгүй.",
    "Wraith Form-оор буруу орсон тулаанаас шууд, найдвартай гарч чадна.",
    "Life Steal passive-аараа байнга эмчлэгдэнэ.",
  ],
  overview: {
    summaryMn:
      "Рийпэр бол ойрын зайд асар их damage өгч, Wraith Form-оороо аюулаас зугтдаг flanker damage баатар.",
    playstyleMn:
      "Shadow Step-ээр дайсны ард орж, Hellfire Shotguns-аараа ойрын зайд шууд их damage учруулна. Wraith Form-оор амьд үлдэж, Life Steal-аар HP-ээ сэргээнэ.",
    strengthsMn: [
      "Ойрын зайд асар их damage",
      "Wraith Form-оор damage огт хүлээж авахгүй болно",
      "Life Steal-аар байнга healing авна",
    ],
    weaknessesMn: ["Алсын зайд маш сул", "Hitbox том", "Тодорхой ил гарсан үед амархан устгагддаг"],
    tipsMn: [
      "Shadow Step-ээ дайсанд харагдахгүй газраас ашигла.",
      "Wraith Form-оо аюул ирэхэд шууд идэвхжүүл.",
      "Death Blossom-ийг ойролцоо олон дайсан байх үед ашигла.",
    ],
  },
  abilities: [
    {
      id: "rp-shotguns",
      name: "Hellfire Shotguns",
      nameMn: "Hellfire Shotguns",
      type: "Primary Fire",
      keybind: "LMB",
      descriptionMn: "Хоёр буудгаар ойрын зайд асар их damage учруулна.",
      verified: true,
    },
    {
      id: "rp-wraith",
      name: "Wraith Form",
      nameMn: "Wraith Form",
      type: "Defensive",
      keybind: "Shift",
      descriptionMn: "Богино хугацаанд бүх damage-аас хамгаалагдаж хурдан хөдөлнө.",
      verified: true,
    },
    {
      id: "rp-shadowstep",
      name: "Shadow Step",
      nameMn: "Shadow Step",
      type: "Movement",
      keybind: "E",
      descriptionMn: "Хараат газар шууд шилжиж очно (богино саатлаар).",
      verified: true,
    },
    {
      id: "rp-deathblossom",
      name: "Death Blossom",
      nameMn: "Death Blossom",
      type: "Ultimate",
      descriptionMn: "Эргэн тойрны бүх дайсанд тасралтгүй асар их damage учруулна.",
      verified: true,
    },
  ],
  perks: {
    minor: [
      {
        id: "rp-minor-1",
        name: "Soul Reaving",
        descriptionMn: "Устгасан дайснаас гарах Soul Globe-ийг цуглуулж 50 HP сэргээнэ.",
        effectMn: "Elimination хийх тусам HP-ээ нөхнө.",
        verified: true,
      },
      {
        id: "rp-minor-2",
        name: "Lingering Wraith",
        descriptionMn: "Wraith Form-оос гарахад 2 секундын турш 30% movement speed авна.",
        effectMn: "Wraith Form-оос гарсны дараа ч түр зуур хурдан хэвээр байна.",
        verified: true,
      },
    ],
    major: [
      {
        id: "rp-major-1",
        name: "Shadow Blink",
        descriptionMn: "Shadow Step-ийн бэлтгэх хугацаа, cooldown 25%-иар хурдасна, харин зай 25%-иар багасна.",
        effectMn: "Илүү олон удаа, гэхдээ ойрхон зайд Shadow Step хийх боломжтой.",
        verified: true,
      },
      {
        id: "rp-major-2",
        name: "Trigger Finger",
        descriptionMn: "Ямар нэгэн ability ашиглах эсвэл reload хийх бүрд нэмэлт чадвар дахин идэвхждэг.",
        effectMn: "Тасралтгүй тулаанд нэмэлт чадвараа илүү олон удаа ашиглана.",
        verified: true,
      },
    ],
  },
  passives: [
    {
      id: "rp-passive",
      name: "Flanker Passive",
      nameMn: "Flanker Passive",
      descriptionMn: "HP-ийн боодол ашиглахад илүү их HP сэргээдэг (Flanker passive).",
      verified: true,
    },
  ],
};

const ashe: Hero = {
  id: "ashe",
  name: "Ashe",
  nameMn: "Эш",
  role: "Damage",
  subRole: "Sharpshooter",
  colorAccent: "#B33A3A",
  initials: "AS",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "intermediate",
  overview: {
    summaryMn:
      "Эш бол Viper буугаараа алсаас нарийвчилсан damage өгч, B.O.B робот дуудаж дайрдаг versatile damage баатар.",
    playstyleMn:
      "Дунд-алс зайд Viper буугаараа тогтмол damage өгч, Coach Gun-аар өөрийгөө knockback хийн зайлсхийнэ. Dynamite-аар бүлэг дайсанд damage, шатаах эффект өгнө.",
    strengthsMn: [
      "Дунд-алс зайд тогтвортой damage",
      "Coach Gun-аар өөрийгөө knockback хийх эсвэл дайсныг холдуулах",
      "B.O.B. Ultimate нь довтолгоо болон хамгаалалт хоёуланд нь ашигтай",
    ],
    weaknessesMn: ["Ойрын зайд сул", "Reload удаан", "Scoped үед хөдөлгөөнгүй болно"],
    tipsMn: [
      "Coach Gun-аар цохилт мөн эргэн тойрны довтолгооноос зайлсхийхэд ашигла.",
      "Dynamite-аар дайсныг эмчлэхээс сэргийлж болно.",
      "B.O.B-ийг эсрэг довтолгоо (contest) хийхэд ч ашиглаж болно.",
    ],
  },
  abilities: [
    {
      id: "as-viper",
      name: "The Viper",
      nameMn: "The Viper",
      type: "Primary Fire",
      keybind: "LMB",
      descriptionMn: "Буу хэлбэрээр дунд-алс зайд damage өгнө, RMB дарж scope хийж болно.",
      verified: true,
    },
    {
      id: "as-coachgun",
      name: "Coach Gun",
      nameMn: "Coach Gun",
      type: "Ability",
      keybind: "Shift",
      descriptionMn: "Ойрын довтолгоонд өөрийгөө knockback хийн, дайсныг knockback хийнэ.",
      verified: true,
    },
    {
      id: "as-dynamite",
      name: "Dynamite",
      nameMn: "Dynamite",
      type: "Ability",
      keybind: "E",
      descriptionMn: "Тэсрэх бөмбөг шидэж, дэлбэрэлтийн дараа шатаах эффект (DoT) үлдээнэ.",
      verified: true,
    },
    {
      id: "as-bob",
      name: "B.O.B.",
      nameMn: "B.O.B.",
      type: "Ultimate",
      descriptionMn: "B.O.B. робот дуудаж дайснуудыг мөргөж, буудна.",
      verified: true,
    },
  ],
  perks: {
    minor: [
      {
        id: "as-minor-1",
        name: "Remote Detonator",
        descriptionMn: "Dynamite шидсэний дараа товчийг дахин дарвал 0.5 секундын дараа дэлбэлнэ.",
        effectMn: "Dynamite-аа цагийг сонгож дэлбэлэх боломжтой.",
        verified: true,
      },
      {
        id: "as-minor-2",
        name: "Double-Barreled",
        descriptionMn: "Coach Gun-аар дайсныг knockback хийхэд богино хугацаанд дахин нэг удаа ашиглах боломжтой болно.",
        effectMn: "Coach Gun-аа дараалан хоёр удаа ашиглаж болно.",
        verified: true,
      },
    ],
    major: [
      {
        id: "as-major-1",
        name: "Viper's Sting",
        descriptionMn: "Дараалсан хоёр scoped цохилт хийвэл 25 нэмэлт damage өгнө.",
        effectMn: "Нарийвчилсан цохилтуудаа дараалуулбал илүү их damage өгнө.",
        verified: true,
      },
      {
        id: "as-major-2",
        name: "Airburst",
        descriptionMn: "Dynamite агаарт байх үедээ дэлбэрэлтийн радиус 40%-иар томорч, шидэхэд 6 сум буцааж өгдөг.",
        effectMn: "Dynamite-аа агаараас шидэхэд илүү үр дүнтэй болно.",
        verified: true,
      },
    ],
  },
  passives: [
    {
      id: "as-passive",
      name: "Sharpshooter Passive",
      nameMn: "Sharpshooter Passive",
      descriptionMn: "Критик цохилт хийх бүрд movement ability-ийн cooldown багасна (Sharpshooter passive).",
      verified: true,
    },
  ],
};

const mercy: Hero = {
  id: "mercy",
  name: "Mercy",
  nameMn: "Мёрси",
  role: "Support",
  subRole: "Medic",
  colorAccent: "#F4E28C",
  initials: "MC",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "beginner",
  beginnerWhyMn: [
    "Багийн гишүүн рүү чиглээд л эмчлэх — энгийн, ойлгомжтой гол механик.",
    "Guardian Angel-ээр аюулаас амархан зугтаж чадна.",
    "Resurrect, Damage Boost зэрэг цөөн тооны тодорхой чадвартай.",
  ],
  overview: {
    summaryMn:
      "Мёрси бол Caduceus Staff-аараа heal хийж эсвэл хүчирхэгжүүлж, Angelic Descent болон Guardian Angel-аараа маш уян хатан хөдөлгөөнтэй support баатар.",
    playstyleMn:
      "Багийн гишүүн рүү Guardian Angel-аар шууд ниссэн heal хийж, шаардлагатай үед Damage Boost-руу шилжиж хор хөнөөлийг нэмэгдүүлнэ. Resurrect-ээр унасан баатрыг дахин амьдруулна.",
    strengthsMn: [
      "Resurrect-ээр устгагдсан баатрыг буцааж авчирна",
      "Guardian Angel-аар маш хурдан байрлалаа сольж heal хийнэ",
      "Damage Boost-оор багийн DPS-ийг мэдэгдэхүйц нэмэгдүүлнэ",
    ],
    weaknessesMn: ["Дангаараа damage өгөх чадвар сул", "Дайрлагад орсон үед эмзэг"],
    tipsMn: [
      "Resurrect-ээ ил задгай газар бүү ашигла, дайсанд харагдахгүй байхыг хичээ.",
      "Guardian Angel-ийг дайснаас зугтахад ч ашиглаж болно.",
      "Valkyrie-г идэвхжүүлснээр бүх support чадвар хүчирхэгждэг тул чухал мөчид хадгал.",
    ],
  },
  abilities: [
    {
      id: "mc-staff",
      name: "Caduceus Staff",
      nameMn: "Caduceus Staff",
      type: "Primary Fire",
      keybind: "LMB / RMB",
      descriptionMn: "Багийн гишүүнийг heal хийх (LMB) эсвэл Damage Boost өгөх (RMB) луужин.",
      verified: true,
    },
    {
      id: "mc-guardianangel",
      name: "Guardian Angel",
      nameMn: "Guardian Angel",
      type: "Movement",
      keybind: "Shift",
      descriptionMn: "Зорилт болгосон багийн гишүүн рүү хурдан ниснэ.",
      verified: true,
    },
    {
      id: "mc-descent",
      name: "Angelic Descent",
      nameMn: "Angelic Descent",
      type: "Movement",
      descriptionMn: "Удаан унана, унахдаа damage авахгүй.",
      verified: true,
    },
    {
      id: "mc-resurrect",
      name: "Resurrect",
      nameMn: "Resurrect",
      type: "Ability",
      keybind: "E",
      descriptionMn: "Ойрхон устгагдсан баатрыг дахин амьдруулна.",
      verified: true,
    },
    {
      id: "mc-valkyrie",
      name: "Valkyrie",
      nameMn: "Valkyrie",
      type: "Ultimate",
      descriptionMn: "Тодорхой хугацаанд бүх чадвараа хүчирхэгжүүлж, олон баатрыг зэрэг heal хийх боломжтой болно.",
      verified: true,
    },
  ],
  perks: {
    minor: [
      {
        id: "mc-minor-1",
        name: "Angelic Resurrection",
        descriptionMn: "Resurrect идэвхжүүлсний дараа Мёрси 100 overhealth авна.",
        effectMn: "Resurrect хийсний дараа өөрийгөө хамгаалах боломжтой.",
        verified: true,
      },
      {
        id: "mc-minor-2",
        name: "Divine Momentum",
        descriptionMn: "Guardian Angel-ийг цуцалсны дараа 15%-иар хурдан хөдөлнө.",
        effectMn: "Guardian Angel-аа зогсоосны дараа ч хурдан байрлалаа сольж болно.",
        verified: true,
      },
    ],
    major: [
      {
        id: "mc-major-1",
        name: "Chain Boost",
        descriptionMn: "Secondary Fire хоёр дахь ойролцоох баатар руу мөн холбогдож, Damage Boost-ийн хэмжээ 5%-иар нэмэгдэнэ.",
        effectMn: "Нэг зэрэг хоёр баатрыг damage boost хийх боломжтой.",
        verified: true,
      },
      {
        id: "mc-major-2",
        name: "Double Dose",
        descriptionMn: "Flash Heal нэмэлт нэг charge-тэй болох боловч суурь healing нь 10-аар багасна.",
        effectMn: "Богино хугацаанд олон удаа хурдан heal хийх боломжтой.",
        verified: true,
      },
    ],
  },
  passives: [
    {
      id: "mc-passive",
      name: "Medic Passive",
      nameMn: "Medic Passive",
      descriptionMn: "Зэвсгээрээ heal хийхэд өөрийгөө мөн heal хийдэг (Medic sub-role passive).",
      verified: true,
    },
  ],
};

const ana: Hero = {
  id: "ana",
  name: "Ana",
  nameMn: "Ана",
  role: "Support",
  subRole: "Tactician",
  colorAccent: "#3E7C6E",
  initials: "AN",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "advanced",
  overview: {
    summaryMn:
      "Ана бол алсаас нарийвчилсан харваагаараа heal хийж, дайсныг сохлон, healing хориглодог өндөр ур чадвар шаардсан support баатар.",
    playstyleMn:
      "Biotic Rifle-ээр heal хийх эсвэл дайсанд damage өгөх, Sleep Dart-аар аюултай баатрыг унтуулж, Biotic Grenade-ээр healing нэмэгдүүлэх эсвэл хориглоно.",
    strengthsMn: [
      "Sleep Dart-аар дайсныг бүрэн stun хийнэ",
      "Biotic Grenade-ээр healing-ийг нэмэгдүүлж эсвэл хориглодог",
      "Nano Boost Ultimate нь бусад баатрыг маш хүчирхэгжүүлдэг",
    ],
    weaknessesMn: ["Нарийн aim шаарддаг", "Ойрын зайд эмзэг", "Mobility ability байхгүй"],
    tipsMn: [
      "Sleep Dart-аа flank хийж буй дайсан руу ашигла.",
      "Biotic Grenade-ийг ultimate-той дайсанд хориглоход ашиглаж болно.",
      "Nano Boost-ийг довтолж буй танк эсвэл дайвлагч дээр өг.",
    ],
  },
  abilities: [
    {
      id: "an-rifle",
      name: "Biotic Rifle",
      nameMn: "Biotic Rifle",
      type: "Primary Fire",
      keybind: "LMB / RMB",
      descriptionMn: "Багийн гишүүнийг heal хийх эсвэл дайсанд damage өгөх боломжтой sniper төрлийн буу.",
      verified: true,
    },
    {
      id: "an-sleepdart",
      name: "Sleep Dart",
      nameMn: "Sleep Dart",
      type: "Ability",
      keybind: "Shift",
      descriptionMn: "Тусвал дайсныг тодорхой хугацаагаар унтуулна (damage авбал сэрнэ).",
      verified: true,
    },
    {
      id: "an-grenade",
      name: "Biotic Grenade",
      nameMn: "Biotic Grenade",
      type: "Ability",
      keybind: "E",
      descriptionMn: "Багт healing-ийг нэмэгдүүлж, дайсанд healing-ийг хориглоно.",
      verified: true,
    },
    {
      id: "an-nanoboost",
      name: "Nano Boost",
      nameMn: "Nano Boost",
      type: "Ultimate",
      descriptionMn: "Багийн гишүүнд damage, healing, хурд зэргийг түр зуур ихээхэн нэмэгдүүлнэ.",
      verified: true,
    },
  ],
  perks: {
    minor: [
      {
        id: "an-minor-1",
        name: "Local Anesthetic",
        descriptionMn: "Sleep Dart нөлөөлөхөд дэлбэрч, ойролцоох дайснуудыг slow хийж 3 секундэд 45 damage өгнө.",
        effectMn: "Sleep Dart нэг зорилтоос гадна ойролцоох дайснуудад ч нөлөөлнө.",
        verified: true,
      },
      {
        id: "an-minor-2",
        name: "Speed Serum",
        descriptionMn: "Nano Boost идэвхжихэд Ана болон зорилт хоёулаа 30% movement speed авна.",
        effectMn: "Nano Boost-той хамтдаа хурдан давших боломжтой.",
        verified: true,
      },
    ],
    major: [
      {
        id: "an-major-1",
        name: "Headhunter",
        descriptionMn: "Biotic Rifle-ээр критик цохилт хийх боломжтой болно.",
        effectMn: "Толгойн цохилтоор илүү их damage өгнө.",
        verified: true,
      },
      {
        id: "an-major-2",
        name: "Biotic Bounce",
        descriptionMn: "Biotic Grenade дэлбэрсний дараа дахин нэг удаа сарнин дэлбэрч 60 damage/healing өгнө.",
        effectMn: "Biotic Grenade-ийн нөлөө хоёр дахин нэмэгддэг.",
        verified: true,
      },
    ],
  },
  passives: [
    {
      id: "an-passive",
      name: "Tactician Passive",
      nameMn: "Tactician Passive",
      descriptionMn: "Ultimate ашигласны дараа илүүдэл эрч хадгалагдаж дараагийн руу шилждэг (Tactician passive).",
      verified: true,
    },
  ],
};

const lucio: Hero = {
  id: "lucio",
  name: "Lúcio",
  nameMn: "Люсио",
  role: "Support",
  subRole: "Tactician",
  colorAccent: "#4AC98F",
  initials: "LC",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "intermediate",
  overview: {
    summaryMn:
      "Люсио бол хана авирч, хөгжимийн долгионоороо багийг heal хийж эсвэл хурдасгадаг маш их mobility-тэй support баатар.",
    playstyleMn:
      "Crossfade-аар Heal эсвэл Speed Boost сонгож багтаа тасралтгүй нөлөөлж, Wall Ride-аар байнга хөдөлгөөнтэй байна. Sound Barrier-аар багийг том damage-аас хамгаална.",
    strengthsMn: [
      "Speed Boost-оор багийг хурдасгаж давшилт хийхэд тусална",
      "Хана авирч маш хурдан хөдөлдөг",
      "Sound Barrier-аар group wipe-аас хамгаална",
    ],
    weaknessesMn: ["Дан healing бага", "Damage өгөх чадвар сул"],
    tipsMn: [
      "Push хийх үед Speed Boost, хамгаалах үед Heal сонго.",
      "Sound Barrier-аа дайсны Ultimate-ийг таамаглаж идэвхжүүл.",
      "Хана ашиглаж дайснаас зайлсхийж healer-ийг хамгаал.",
    ],
  },
  abilities: [
    {
      id: "lc-blaster",
      name: "Sonic Amplifier",
      nameMn: "Sonic Amplifier",
      type: "Primary Fire",
      keybind: "LMB",
      descriptionMn: "Дунд зайд дуу долгионы damage өгнө.",
      verified: true,
    },
    {
      id: "lc-crossfade",
      name: "Crossfade",
      nameMn: "Crossfade",
      type: "Ability",
      descriptionMn: "Heal эсвэл Speed Boost хөгжим сонгож ойролцоох багийн гишүүдэд тасралтгүй нөлөөлнө.",
      verified: true,
    },
    {
      id: "lc-wallride",
      name: "Wall Ride",
      nameMn: "Wall Ride",
      type: "Movement",
      descriptionMn: "Хана дагаж маш хурдан хөдөлнө.",
      verified: true,
    },
    {
      id: "lc-boop",
      name: "Amp It Up",
      nameMn: "Amp It Up",
      type: "Ability",
      keybind: "Shift",
      descriptionMn: "Crossfade-ийн нөлөөг богино хугацаанд ихээхэн нэмэгдүүлнэ.",
      verified: true,
    },
    {
      id: "lc-soundbarrier",
      name: "Sound Barrier",
      nameMn: "Sound Barrier",
      type: "Ultimate",
      descriptionMn: "Ойролцоох бүх багийн гишүүнд түр зуурын нэмэлт HP (shield) өгнө.",
      verified: true,
    },
  ],
  perks: {
    minor: [
      {
        id: "lc-minor-1",
        name: "Soundwave Rider",
        descriptionMn: "Хананд авирсны дараагийн Soundwave 25% нэмэлт knockback, 50% нэмэлт damage-тэй болно.",
        effectMn: "Wall Ride-аа довтолгоонд бэлтгэлд ашигла.",
        verified: true,
      },
      {
        id: "lc-minor-2",
        name: "Beat Drop",
        descriptionMn: "Sound Barrier ашигласны дараа 4 секундийн турш Amp It Up автоматаар идэвхждэг.",
        effectMn: "Ultimate-тэй хамт Amp It Up-аа хэмнэж болно.",
        verified: true,
      },
    ],
    major: [
      {
        id: "lc-major-1",
        name: "Noise Violation",
        descriptionMn: "Amp It Up идэвхтэй үед Crossfade-ийн нөлөөллийн хүрээ 150%-иар томорно.",
        effectMn: "Илүү олон багийн гишүүнд нэгэн зэрэг нөлөөлнө.",
        verified: true,
      },
      {
        id: "lc-major-2",
        name: "Accelerando",
        descriptionMn: "Speed Song идэвхтэй үед 15% attack speed-тэй болж, Amp It Up үед энэ нь гурав дахин нэмэгдэнэ.",
        effectMn: "Хурдны дуу тоглуулж байхдаа өөрийн DPS-ийг нэмэгдүүлнэ.",
        verified: true,
      },
    ],
  },
  passives: [
    {
      id: "lc-passive",
      name: "Tactician Passive",
      nameMn: "Tactician Passive",
      descriptionMn: "Ultimate ашигласны дараа илүүдэл эрч хадгалагдаж дараагийн руу шилждэг (Tactician passive).",
      verified: true,
    },
  ],
};

const moira: Hero = {
  id: "moira",
  name: "Moira",
  nameMn: "Мойра",
  role: "Support",
  subRole: "Medic",
  colorAccent: "#7C4FA6",
  initials: "MR",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "beginner",
  beginnerWhyMn: [
    "Biotic Grasp-ийн heal/damage аль аль нь нарийн aim шаардахгүй (homing).",
    "Fade-ээр аюулаас бараг үргэлж найдвартай гарч чадна.",
    "Mana level-ийг л хянавал хангалттай — өөр combo бараг байхгүй.",
  ],
  overview: {
    summaryMn:
      "Мойра бол Biotic Grasp-аараа зэрэг heal хийж эсвэл damage өгч чаддаг, mana удирдаж тоглодог support баатар.",
    playstyleMn:
      "Biotic Grasp-аар heal хийх/довтлохоо сонгож, Biotic Orb-аар талбайн healing эсвэл damage нэмнэ. Fade-ээр хурдан зайлсхийж чадна.",
    strengthsMn: [
      "Аль аль нь healing, damage өгч чаддаг",
      "Fade-ээр damage огт хүлээж авахгүй зугтдаг",
      "Coalescence Ultimate нь healing болон damage хоёуланг өгдөг",
    ],
    weaknessesMn: ["Mana хязгаартай", "Нарийвчилсан зорилт (aim) шаарддаггүй ч удирдахад дадлага хэрэгтэй"],
    tipsMn: [
      "Mana дуусахаас өмнө тэнцвэржүүл.",
      "Biotic Orb-оо тулааны эхэнд шид, тасралтгүй нөлөө үзүүлдэг.",
      "Fade-ийг аюул тулгарахад шууд ашигла.",
    ],
  },
  abilities: [
    {
      id: "mr-grasp",
      name: "Biotic Grasp",
      nameMn: "Biotic Grasp",
      type: "Primary Fire",
      keybind: "LMB / RMB",
      descriptionMn: "Багийн гишүүнийг heal хийх (LMB) эсвэл дайсанд damage өгөх (RMB).",
      verified: true,
    },
    {
      id: "mr-orb",
      name: "Biotic Orb",
      nameMn: "Biotic Orb",
      type: "Ability",
      keybind: "Shift",
      descriptionMn: "Healing эсвэл damage-ийн бөмбөлөг шидэж, зам дагуу тасралтгүй нөлөөлнө.",
      verified: true,
    },
    {
      id: "mr-fade",
      name: "Fade",
      nameMn: "Fade",
      type: "Movement",
      keybind: "E",
      descriptionMn: "Богино хугацаанд харагдахгүй болж хурдан хөдөлнө.",
      verified: true,
    },
    {
      id: "mr-coalescence",
      name: "Coalescence",
      nameMn: "Coalescence",
      type: "Ultimate",
      descriptionMn: "Шулуун track цацруулж, багт healing эсвэл дайсанд damage тасралтгүй өгнө.",
      verified: true,
    },
  ],
  perks: {
    minor: [
      {
        id: "mr-minor-1",
        name: "Destruction's Divide",
        descriptionMn: "Coalescence-ийг зөвхөн healing эсвэл зөвхөн damage болгож сонгож болох бөгөөд нөлөө нь 30%-иар нэмэгдэнэ.",
        effectMn: "Ultimate-аа нөхцөл байдалд тохируулан чиглүүлж болно.",
        verified: true,
      },
      {
        id: "mr-minor-2",
        name: "Ethical Nourishment",
        descriptionMn: "Biotic Orb туссан баатар бүрт эхний 30 healing-ийг шууд өгдөг.",
        effectMn: "Орбоор heal хийх эхлэл хурдасна.",
        verified: true,
      },
    ],
    major: [
      {
        id: "mr-major-1",
        name: "Reversal",
        descriptionMn: "Biotic Orb-оо дахин идэвхжүүлэхэд чиглэлээ буцаана.",
        effectMn: "Орбоо ижил замд хоёр удаа ашиглаж болно.",
        verified: true,
      },
      {
        id: "mr-major-2",
        name: "Phantom Step",
        descriptionMn: "Fade 0.5 секундээр уртасаж, үсрэлтийн өндөр 50%-иар нэмэгдэнэ.",
        effectMn: "Fade-ээрээ илүү өндөр, илүү удаан хугацаагаар зайлсхийнэ.",
        verified: true,
      },
    ],
  },
  passives: [
    {
      id: "mr-passive",
      name: "Medic Passive",
      nameMn: "Medic Passive",
      descriptionMn: "Зэвсгээрээ heal хийхэд өөрийгөө мөн heal хийдэг (Medic passive).",
      verified: true,
    },
  ],
};

const baptiste: Hero = {
  id: "baptiste",
  name: "Baptiste",
  nameMn: "Баптист",
  role: "Support",
  subRole: "Tactician",
  colorAccent: "#3E6E9E",
  initials: "BP",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "intermediate",
  overview: {
    summaryMn:
      "Баптист бол цэргийн эмч, Immortality Field-ээрээ багийг бүрэн устгалаас хамгаалж, Amplification Matrix-аар DPS-ийг нэмэгдүүлдэг support баатар.",
    playstyleMn:
      "Biotic Launcher-аар heal хийх эсвэл damage өгч, Immortality Field-ийг чухал мөчид тавьж, Regenerative Burst-ээр багийг эрчимтэй heal хийнэ.",
    strengthsMn: [
      "Immortality Field-ээр group wipe-ийг зогсооно",
      "Amplification Matrix нь damage, healing хоёуланг нь нэмэгдүүлнэ",
      "Exo Boots-оор өндөрт үсрэх боломжтой",
    ],
    weaknessesMn: ["Ойрын зайд эмзэг", "Positioning алдвал Immortality Field хугацаандаа тус болохгүй"],
    tipsMn: [
      "Immortality Field-ийг Ultimate ирэхээс өмнө тавь.",
      "Amplification Matrix-ийг DPS баатрууд дундуур тавьж дараа нь харваад.",
      "Exo Boots-оор давуу байрлал эзэл.",
    ],
  },
  abilities: [
    {
      id: "bp-launcher",
      name: "Biotic Launcher",
      nameMn: "Biotic Launcher",
      type: "Primary Fire",
      keybind: "LMB / RMB",
      descriptionMn: "Дайсанд damage (LMB) эсвэл багт healing-ийн бөмбөлөг (RMB) харвана.",
      verified: true,
    },
    {
      id: "bp-immortality",
      name: "Immortality Field",
      nameMn: "Immortality Field",
      type: "Ability",
      keybind: "Shift",
      descriptionMn: "Хамгаалалтын талбай тавьж, түүн дотор байгаа багийн гишүүд устгагдахгүй байх боломжтой болно.",
      verified: true,
    },
    {
      id: "bp-exoboots",
      name: "Exo Boots",
      nameMn: "Exo Boots",
      type: "Movement",
      keybind: "E",
      descriptionMn: "Дээш хүчтэй үсэрнэ.",
      verified: true,
    },
    {
      id: "bp-burst",
      name: "Regenerative Burst",
      nameMn: "Regenerative Burst",
      type: "Ability",
      descriptionMn: "Ойролцоох багийн гишүүдэд шуурхай healing өгнө.",
      verified: true,
    },
    {
      id: "bp-amp",
      name: "Amplification Matrix",
      nameMn: "Amplification Matrix",
      type: "Ultimate",
      descriptionMn: "Дундуур нь дайсан руу чиглэсэн бүх довтолгоо, healing-ийг нэмэгдүүлдэг талбай үүсгэнэ.",
      verified: true,
    },
  ],
  perks: {
    minor: [
      {
        id: "bp-minor-1",
        name: "Expanded Field",
        descriptionMn: "Immortality Field-ийн радиус 30%-иар томорно.",
        effectMn: "Илүү олон багийн гишүүнийг нэг дор хамгаална.",
        verified: true,
      },
      {
        id: "bp-minor-2",
        name: "Assault Burst",
        descriptionMn: "Regenerative Burst идэвхжихэд 4 секундын турш 30% attack speed авна (гэхдээ бага HP-тэй зорилтыг критик эмчлэхгүй).",
        effectMn: "Healing-ээ довтолгоонд шилжүүлэх боломжтой.",
        verified: true,
      },
    ],
    major: [
      {
        id: "bp-major-1",
        name: "Automated Healing",
        descriptionMn: "Amplification Matrix тавьсны дараа мөрний буу үе үе 3 хүртэл сум харвж, тус бүр 40 HP heal хийдэг.",
        effectMn: "Ultimate тавьсны дараа ч нэмэлт healing авдаг.",
        verified: true,
      },
      {
        id: "bp-major-2",
        name: "Rocket Boots",
        descriptionMn: "Exo Boots-оор агаарт байх үед хэвтээ чиглэлд дэсээр дайрч болно.",
        effectMn: "Exo Boots-оо давуу байрлал эзлэхэд илүү уян хатан болгоно.",
        verified: true,
      },
    ],
  },
  passives: [
    {
      id: "bp-passive",
      name: "Tactician Passive",
      nameMn: "Tactician Passive",
      descriptionMn: "Ultimate ашигласны дараа илүүдэл эрч хадгалагдаж дараагийн руу шилждэг (Tactician passive).",
      verified: true,
    },
  ],
};

const kiriko: Hero = {
  id: "kiriko",
  name: "Kiriko",
  nameMn: "Кирико",
  role: "Support",
  subRole: "Medic",
  colorAccent: "#E05A7A",
  initials: "KR",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "intermediate",
  overview: {
    summaryMn:
      "Кирико бол Swift Step-ээрээ ханаар дамжин багийн гишүүн рүү шууд орж heal хийдэг, маш хурдан support баатар.",
    playstyleMn:
      "Healing Ofuda-аар heal хийж, Swift Step-ээр эрсдэлтэй мөчид багийн гишүүн рүүгээ шууд шилжинэ. Protection Suzu-гээр бүлэг heal авах debuff-ээс хамгаалж чадна.",
    strengthsMn: [
      "Swift Step-ээр хана нэвтэрч багтаа шууд орно",
      "Protection Suzu нь дайсны CC болон debuff-ийг цэвэрлэнэ",
      "Kitsune Rush Ultimate нь багийн бүх чадварыг хурдасгана",
    ],
    weaknessesMn: ["HP дунд зэрэг", "Healing Ofuda нарийвчлал шаарддаг"],
    tipsMn: [
      "Swift Step-ийг эмзэг healer-ийг аврахад ашигла.",
      "Protection Suzu-г Ultimate болон CC-ийг зогсооход хадгал.",
      "Kitsune Rush-ийг давшилтын өмнө идэвхжүүл.",
    ],
  },
  abilities: [
    {
      id: "kr-ofuda",
      name: "Healing Ofuda",
      nameMn: "Healing Ofuda",
      type: "Primary Fire",
      keybind: "LMB",
      descriptionMn: "Цаасан сум шидэж багийн гишүүнийг heal хийнэ.",
      verified: true,
    },
    {
      id: "kr-kunai",
      name: "Kunai",
      nameMn: "Kunai",
      type: "Secondary Fire",
      keybind: "RMB",
      descriptionMn: "Дайсанд damage учруулах хутга шиднэ.",
      verified: true,
    },
    {
      id: "kr-swiftstep",
      name: "Swift Step",
      nameMn: "Swift Step",
      type: "Movement",
      keybind: "Shift",
      descriptionMn: "Хана нэвтэрч зорилт болгосон багийн гишүүн рүү шууд шилжинэ.",
      verified: true,
    },
    {
      id: "kr-suzu",
      name: "Protection Suzu",
      nameMn: "Protection Suzu",
      type: "Ability",
      keybind: "E",
      descriptionMn: "Ойролцоох багийн гишүүдийг богино хугацаанд damage-аас хамгаалж, дайсны debuff-ийг цэвэрлэнэ.",
      verified: true,
    },
    {
      id: "kr-kitsune",
      name: "Kitsune Rush",
      nameMn: "Kitsune Rush",
      type: "Ultimate",
      descriptionMn: "Замыг тодорхойлж, замд байгаа багийн гишүүдийн чадварын cooldown болон хурдыг ихээхэн нэмэгдүүлнэ.",
      verified: true,
    },
  ],
  perks: {
    minor: [
      {
        id: "kr-minor-1",
        name: "Urgent Care",
        descriptionMn: "Healing Ofuda чухал HP-тэй холбоотон руу чиглэх үед 50%-иар хурдан нисдэг.",
        effectMn: "Хамгийн их шаардлагатай хамтрагч руугаа хурдан healing хүргэнэ.",
        verified: true,
      },
      {
        id: "kr-minor-2",
        name: "Fortune Teller",
        descriptionMn: "Kunai тусах бүрд өмнөө байгаа хамтрагч руу 2 Healing Ofuda илгээдэг.",
        effectMn: "Дайсанд damage өгөхийн зэрэгцээ багаа heal хийнэ.",
        verified: true,
      },
    ],
    major: [
      {
        id: "kr-major-1",
        name: "Ready Step",
        descriptionMn: "Swift Step ашигласны дараа 3 секундын турш 40% довтолгоо, ачилтын хурдтай болно.",
        effectMn: "Swift Step-ийн дараа шууд их damage өгнө.",
        verified: true,
      },
      {
        id: "kr-major-2",
        name: "Foxtrot",
        descriptionMn: "Protection Suzu идэвхжихэд 4 секундын турш багийн гишүүд 30% movement speed авна.",
        effectMn: "Suzu-гаа хамгаалалтаас гадна давшилтад ашиглаж болно.",
        verified: true,
      },
    ],
  },
  passives: [
    {
      id: "kr-passive",
      name: "Medic Passive",
      nameMn: "Medic Passive",
      descriptionMn: "Зэвсгээрээ heal хийхэд өөрийгөө мөн heal хийдэг (Medic passive).",
      verified: true,
    },
  ],
};

export const heroes: Hero[] = [
  reinhardt,
  winston,
  dva,
  zarya,
  roadhog,
  ramattra,
  tracer,
  genji,
  widowmaker,
  soldier76,
  reaper,
  ashe,
  mercy,
  ana,
  lucio,
  moira,
  baptiste,
  kiriko,
  ...batchTwoHeroes,
  ...batchThreeHeroes,
];

export function getHeroBySlug(slug: string): Hero | undefined {
  return heroes.find((h) => h.id === slug);
}

export const heroCount = heroes.length; // 54 (Season 5)
export const stageOneCount = heroes.filter((h) => h.dataComplete).length; // 18
