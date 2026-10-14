import { Hero } from "./types";

const S5 = "2026-10-08";
const UPDATED = "2026-09-18";

export const doomfist: Hero = {
  id: "doomfist",
  name: "Doomfist",
  nameMn: "Думфист",
  role: "Tank",
  subRole: "Initiator",
  colorAccent: "#8A5A2E",
  initials: "DF",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "advanced",
  overview: {
    summaryMn:
      "Думфист бол гартаа хүчирхэг Хэлбэрийн бөгжтэй, ойрын зайд асар хүчтэй цохилтоор дайсныг ханад цохиж, довтолгооны эхлэлийг хийдэг дайвлагч танк.",
    playstyleMn:
      "Seismic Slam-аар дайсны дунд орж, Rocket Punch-аар ханад цохиж, Power Block-оор довтолгоог зогсоож энерги цуглуулна.",
    strengthsMn: [
      "Rocket Punch-аар ганц баатрыг ханад цохиж шууд устгах боломжтой",
      "Power Block-оор урд талын довтолгоог блоклож нэмэлт хүч цуглуулна",
      "Маш өндөр mobility, дайсны ард шууд орно",
    ],
    weaknessesMn: ["Алсын зайд сул", "Ability бүгд cooldown-той тул алдвал эмзэг болно"],
    tipsMn: [
      "Rocket Punch-аа хана руу чиглүүлж хамгийн их damage өгөх боломжийг ашигла.",
      "Power Block-оор дайсны чухал ability-г блоклож болно.",
      "The Best Defense... Ultimate-ийг довтолгооны эхлэлд ашигла.",
    ],
  },
  abilities: [
    { id: "df-hands", name: "Hand Cannon", nameMn: "Hand Cannon", type: "Primary Fire", keybind: "LMB", descriptionMn: "Дунд-ойрын зайд бууны сум цацруулж damage өгнө.", verified: true },
    { id: "df-punch", name: "Rocket Punch", nameMn: "Rocket Punch", type: "Ability", keybind: "Shift", descriptionMn: "Урагш хүчтэй цохиж, дайсныг түлхэн хана руу цохивол нэмэлт damage өгнө.", verified: true },
    { id: "df-block", name: "Power Block", nameMn: "Power Block", type: "Defensive", keybind: "RMB", descriptionMn: "Урд талын damage-ийг блоклож, хангалттай удаан барих юм бол хүчирхэгжүүлсэн Punch авна.", verified: true },
    { id: "df-slam", name: "Seismic Slam", nameMn: "Seismic Slam", type: "Movement", keybind: "E", descriptionMn: "Урагш үсэрч газарт хүчтэй цохилт өгч ойролцоох дайснуудыг татна.", verified: true },
    { id: "df-ultimate", name: "The Best Defense...", nameMn: "The Best Defense...", type: "Ultimate", descriptionMn: "Тодорхой хугацаанд бүх чадварынхаа cooldown-ийг арилгаж, нэмэлт хамгаалалттай болно.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "df-minor-1",
        name: "One-Two",
        descriptionMn: "Rocket Punch тусахад Hand Cannon-ий бүх сум дахин ачигдаж, 2-оор илүүдэнэ.",
        effectMn: "Rocket Punch-ийн дараа шууд их damage өгч эхэлнэ.",
        verified: true,
      },
      {
        id: "df-minor-2",
        name: "Survival of the Fittest",
        descriptionMn: "The Best Defense идэвхтэй үед elimination хийх бүр 25 overhealth авч, дээд хэмжээ нь 50-иар нэмэгдэнэ.",
        effectMn: "Ultimate-ийн үеэрээ илүү удаан амьд үлдэнэ.",
        verified: true,
      },
    ],
    major: [
      {
        id: "df-major-1",
        name: "Aftershock",
        descriptionMn: "Seismic Slam тусах дайснуудыг 2 секундын турш 40%-иар slow хийнэ.",
        effectMn: "Слэм хийсний дараа дайсныг барих боломж нэмэгдэнэ.",
        verified: true,
      },
      {
        id: "df-major-2",
        name: "Power Matrix",
        descriptionMn: "Power Block идэвхжсэний эхний 0.8 секундэд projectile-ийг шингээдэг.",
        effectMn: "Power Block-оо projectile довтолгооны эсрэг ашиглаж болно.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "df-passive", name: "Kinetic Absorption", nameMn: "Kinetic Absorption", descriptionMn: "Агаарт байх үед аажмаар HP-ээ сэргээдэг (Initiator passive).", verified: true }],
};

export const hazard: Hero = {
  id: "hazard",
  name: "Hazard",
  nameMn: "Хазард",
  role: "Tank",
  subRole: "Stalwart",
  colorAccent: "#4A5A4A",
  initials: "HZ",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "intermediate",
  overview: {
    summaryMn: "Хазард бол ган хавтангаар дайснуудыг хана болгон хашиж, эргэн тойрноо ислэн хамгаалдаг түрэмгий танк.",
    playstyleMn: "Jagged Wall-аар байрлал хязгаарлаж, Violent Leap-ээр дайрч, Downpour-аар AoE damage учруулна.",
    strengthsMn: ["Jagged Wall-аар байрлал хязгаарлана", "Маш их HP, ойрын зайд аюултай", "Violent Leap-ээр давуу байрлал эзэлнэ"],
    weaknessesMn: ["Хол зайд сул", "Wall буруу тавивал багтаа саад болно"],
    tipsMn: ["Jagged Wall-ыг дайсны healer-ийг тусгаарлахад ашигла.", "Violent Leap-ийг эмзэг зорилт руу ашигла."],
  },
  abilities: [
    { id: "hz-blade", name: "Jagged Blade", nameMn: "Jagged Blade", type: "Primary Fire", keybind: "LMB", descriptionMn: "Ган хавтан шидэж ойрын-дунд зайд damage өгнө.", verified: true },
    { id: "hz-wall", name: "Jagged Wall", nameMn: "Jagged Wall", type: "Ability", keybind: "Shift", descriptionMn: "Газраас өндөр хана өргөж, дайсны замыг хаана.", verified: true },
    { id: "hz-leap", name: "Violent Leap", nameMn: "Violent Leap", type: "Movement", keybind: "E", descriptionMn: "Урагш хүчтэй үсэрч газардахдаа damage учруулна.", verified: true },
    { id: "hz-downpour", name: "Downpour", nameMn: "Downpour", type: "Ultimate", descriptionMn: "Ган хавтангуудыг агаараас унагаж талбайд тасралтгүй damage учруулна.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "hz-minor-1",
        name: "Reconstitution",
        descriptionMn: "Jagged Wall тусах бүрд хамгаалалтын систем рүү 25 энерги нэмнэ (дээд тал нь 25 нэмэлт).",
        effectMn: "Хана ашиглах тусам нэмэлт хамгаалалт цуглуулна.",
        verified: true,
      },
      {
        id: "hz-minor-2",
        name: "Anarchic Zeal",
        descriptionMn: "Хамгаалалтын мөлхөгч сумнууд 40% lifesteal авдаг болно.",
        effectMn: "Хамгаалалтаа идэвхжүүлэх тусам өөрийгөө heal хийнэ.",
        verified: true,
      },
    ],
    major: [
      {
        id: "hz-major-1",
        name: "Deep Leap",
        descriptionMn: "Violent Leap-ийн зай 20%-иар нэмэгдэнэ.",
        effectMn: "Илүү хол зайнаас дайрах боломжтой.",
        verified: true,
      },
      {
        id: "hz-major-2",
        name: "Explosive Impalements",
        descriptionMn: "Мөлхөгч сумаар тэмдэглэгдсэн дайсныг ойрын довтолгоо эсвэл Violent Leap-ээр цохивол 30 дэлбэрэлтийн damage нэмнэ.",
        effectMn: "Тэмдэглэгдсэн дайсныг дуусгах нэмэлт арга болно.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "hz-passive", name: "Steadfast", nameMn: "Steadfast", descriptionMn: "Knockback болон slow эффектийг бага хүлээн авна (Stalwart passive).", verified: true }],
};

export const junkerQueen: Hero = {
  id: "junker-queen",
  name: "Junker Queen",
  nameMn: "Жанкер Куин",
  role: "Tank",
  subRole: "Stalwart",
  colorAccent: "#C97A3A",
  initials: "JQ",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "intermediate",
  overview: {
    summaryMn: "Жанкер Куин бол шархлуулах эффектээр дайсныг бага багаар алж, өөрийгөө heal хийдэг түрэмгий танк.",
    playstyleMn: "Scattergun-аар ойрын зайд damage өгч, Jagged Blade-ээр шархлуулж, Commanding Shout-аар багаа хүчирхэгжүүлнэ.",
    strengthsMn: ["Шарх(Wound)-аар үргэлжилсэн damage учруулна", "Commanding Shout-аар багийн HP, хурдыг нэмэгдүүлнэ", "Carnage Ultimate талбайн healing, damage хоёуланг өгдөг"],
    weaknessesMn: ["Хол зайд сул", "Adrenaline Rush healing дайсанд damage учруулснаас л хамаардаг"],
    tipsMn: ["Jagged Blade-ийг эмзэг зорилт руу шидээд Knife-аа татаж илүү нэмэлт damage өгч болно.", "Commanding Shout-ыг довтолгооны эхэнд ашигла."],
  },
  abilities: [
    { id: "jq-scatter", name: "Scattergun", nameMn: "Scattergun", type: "Primary Fire", keybind: "LMB", descriptionMn: "Ойрын зайд өргөн талбайд damage учруулна.", verified: true },
    { id: "jq-blade", name: "Jagged Blade", nameMn: "Jagged Blade", type: "Ability", keybind: "Shift", descriptionMn: "Хутга шидэж, тусвал татаж авчирна. Шарх (Wound) эффект үлдээнэ.", verified: true },
    { id: "jq-shout", name: "Commanding Shout", nameMn: "Commanding Shout", type: "Ability", keybind: "E", descriptionMn: "Өөрийгөө болон ойролцоох багийн гишүүдэд нэмэлт HP, хурд өгнө.", verified: true },
    { id: "jq-rush", name: "Adrenaline Rush", nameMn: "Adrenaline Rush", type: "Ability", descriptionMn: "Дайсанд Wound учруулах бүрд өөрийгөө heal хийдэг пассив.", verified: true },
    { id: "jq-carnage", name: "Carnage", nameMn: "Carnage", type: "Ultimate", descriptionMn: "Том хутгаар урд талын бүх дайсанд damage, Wound учруулна.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "jq-minor-1",
        name: "Rampant Charge",
        descriptionMn: "Rampage идэвхжихэд Unstoppable авч, бүх ability-ийн cooldown 6 секундээр багасна.",
        effectMn: "Ultimate-ийн дараа шууд дахин чадваруудаа ашиглах боломжтой.",
        verified: true,
      },
      {
        id: "jq-minor-2",
        name: "Battle Shout",
        descriptionMn: "Commanding Shout Scattergun-ийг бүрэн ачааллаж, багийн ачилтын хурдыг 50%-иар нэмэгдүүлнэ.",
        effectMn: "Довтолгооны эхлэлд бүх багийг бэлдэнэ.",
        verified: true,
      },
    ],
    major: [
      {
        id: "jq-major-1",
        name: "Willy-Willy",
        descriptionMn: "Jagged Blade-ийг дахин дуудахад радиус 100%-иар томорч, 30 нэмэлт цохилтын damage өгнө.",
        effectMn: "Хутгаа буцаах бүрдээ нэмэлт damage өгнө.",
        verified: true,
      },
      {
        id: "jq-major-2",
        name: "Savage Satiation",
        descriptionMn: "Carnage-ийн цохилтын damage 100% lifesteal авдаг болно.",
        effectMn: "Ultimate ашиглах бүрдээ өөрийгөө бүрэн heal хийнэ.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "jq-passive", name: "Steadfast", nameMn: "Steadfast", descriptionMn: "Knockback болон slow эффектийг бага хүлээн авна (Stalwart passive).", verified: true }],
};

export const mauga: Hero = {
  id: "mauga",
  name: "Mauga",
  nameMn: "Мауга",
  role: "Tank",
  subRole: "Bruiser",
  colorAccent: "#B5522E",
  initials: "MG",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "beginner",
  beginnerWhyMn: [
    "Хоёр их буу барьж зүгээр чиглээд буудах л гол тактик — нарийн aim шаардахгүй.",
    "Маш өндөр HP, Cardiac Overdrive-ээр өөрийгөө амархан эмчилдэг.",
    "Mobility ability байхгүй тул суралцах зүйл цөөн.",
  ],
  overview: {
    summaryMn: "Мауга бол хоёр их буугаар тасралтгүй буудаж, дайсныг шатааж, Cage Fight-аар ганц дайсныг тусгаарлан устгадаг том биетэй танк.",
    playstyleMn: "Incendiary Chaingun болон Cardiac Overdrive-аар тасралтгүй damage, healing хийж, Overrun-аар дайрна.",
    strengthsMn: ["Cage Fight-аар ганц дайсныг зугтаж чадахгүй болгоно", "Cardiac Overdrive-аар өөрийгөө heal хийж, багийг хүчирхэгжүүлнэ", "Маш өндөр HP"],
    weaknessesMn: ["Mobility ability байхгүй", "CC-д эмзэг"],
    tipsMn: ["Cage Fight-ийг эмзэг зорилт эсвэл сум муутай дайсан руу ашигла.", "Overrun-аар байрлалаа сольж давуу тал эзэл."],
  },
  abilities: [
    { id: "mg-chaingun", name: "Incendiary Chaingun", nameMn: "Incendiary Chaingun", type: "Primary Fire", keybind: "LMB", descriptionMn: "Тасралтгүй буудаж, дайсныг шатаана.", verified: true },
    { id: "mg-volatile", name: "Volatile Chaingun", nameMn: "Volatile Chaingun", type: "Secondary Fire", keybind: "RMB", descriptionMn: "Дэлбэрэлттэй сум харваж AoE damage өгнө.", verified: true },
    { id: "mg-overrun", name: "Overrun", nameMn: "Overrun", type: "Movement", keybind: "Shift", descriptionMn: "Урагш гүйж дайсныг knockback хийнэ.", verified: true },
    { id: "mg-cage", name: "Cage Fight", nameMn: "Cage Fight", type: "Ability", keybind: "E", descriptionMn: "Ойролцоох дайсныг тодорхой хугацаанд тухайн газраас гарахгүй болгож хашина.", verified: true },
    { id: "mg-cardiac", name: "Cardiac Overdrive", nameMn: "Cardiac Overdrive", type: "Ultimate", descriptionMn: "Тодорхой хугацаанд өөрийгөө болон багийн гишүүдийг damage өгснөөр heal авдаг болгоно.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "mg-minor-1",
        name: "Kinetic Bandolier",
        descriptionMn: "Overrun-ийг цэнэглэх эхний секундэд дээд тал нь 150 сум дахин reload болно.",
        effectMn: "Overrun хийхийн өмнө reload-аа шинэчилнэ.",
        verified: true,
      },
      {
        id: "mg-minor-2",
        name: "Pyromaniac",
        descriptionMn: "Incendiary Chaingun-аар дайсныг шатаах бүрд 50 overhealth авна.",
        effectMn: "Дайсныг шатаах тусам илүү тэсвэртэй болно.",
        verified: true,
      },
    ],
    major: [
      {
        id: "mg-major-1",
        name: "Firewalker",
        descriptionMn: "Overrun цохисон дайснуудыг шатаадаг болно.",
        effectMn: "Overrun-оо тасралтгүй damage-ийн эх үүсвэр болгоно.",
        verified: true,
      },
      {
        id: "mg-major-2",
        name: "Combat Fuel",
        descriptionMn: "Критик цохилт хийх бүрд Cardiac Overdrive-ийн дараагийн ашиглалтад 3 түр зуурын overhealth авч, дээд тал нь 150 хүрнэ.",
        effectMn: "Cardiac Overdrive-аа илүү хүчтэй болгож бэлдэнэ.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "mg-passive", name: "Steadfast", nameMn: "Steadfast", descriptionMn: "Критик damage-ийг бага хүлээн авч, HP бага үед хурд нэмэгддэг (Bruiser passive).", verified: true }],
};

export const orisa: Hero = {
  id: "orisa",
  name: "Orisa",
  nameMn: "Ориса",
  role: "Tank",
  subRole: "Bruiser",
  colorAccent: "#C9A24A",
  initials: "OR",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "beginner",
  beginnerWhyMn: [
    "Fortify дараад л довтлох — зорилго тодорхой, CC-д бараг эмзэг биш.",
    "Хол зайн нарийвчилсан aim шаардахгүй, дунд зайд байнга буудаад байхад хангалттай.",
    "Javelin Spin-ээр ихэнх алдаа гаргасан довтолгоог хялбар засч чадна.",
  ],
  overview: {
    summaryMn: "Ориса бол Fortify-аар CC-д тэсвэртэй болж, Javelin Spin-ээр дайсныг ухрааж, тогтвортой урд шугам барьдаг танк.",
    playstyleMn: "Augmented Fusion Driver-аар тогтмол damage өгч, Energy Javelin-ээр давхар довтолж, Terra Surge-ээр багийн тулааныг шийддэг.",
    strengthsMn: ["Fortify-аар CC-д тэсвэртэй болно", "Javelin Spin-ээр урд талын довтолгоог зогсооно", "Terra Surge нь маш хүчтэй team fight ultimate"],
    weaknessesMn: ["Mobility дунд зэрэг", "Алсын зайд damage сул"],
    tipsMn: ["Fortify-аа чухал CC ирэхээс өмнө идэвхжүүл.", "Terra Surge-ийг цуглуулаад дараа нь дэлбэлж болно."],
  },
  abilities: [
    { id: "or-driver", name: "Augmented Fusion Driver", nameMn: "Augmented Fusion Driver", type: "Primary Fire", keybind: "LMB", descriptionMn: "Дунд зайд тогтмол damage өгнө.", verified: true },
    { id: "or-javelin", name: "Energy Javelin", nameMn: "Energy Javelin", type: "Ability", keybind: "Shift", descriptionMn: "Жад шидэж damage, knockback учруулна.", verified: true },
    { id: "or-spin", name: "Javelin Spin", nameMn: "Javelin Spin", type: "Defensive", keybind: "RMB", descriptionMn: "Жадаа эргүүлж урд талын сум, projectile-ийг холдуулна.", verified: true },
    { id: "or-fortify", name: "Fortify", nameMn: "Fortify", type: "Defensive", keybind: "E", descriptionMn: "Богино хугацаанд damage-ийг багасгаж, CC-д тэсвэртэй болно.", verified: true },
    { id: "or-terra", name: "Terra Surge", nameMn: "Terra Surge", type: "Ultimate", descriptionMn: "Дайснуудыг татан төвлөрүүлээд дэлбэрч их damage учруулна.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "or-minor-1",
        name: "Defense Protocol",
        descriptionMn: "Terra Surge цэнэглэх үедээ секундэд 100 HP сэргээнэ.",
        effectMn: "Ultimate цуглуулах явцдаа илүү аюулгүй болно.",
        verified: true,
      },
      {
        id: "or-minor-2",
        name: "Mobile Fortification",
        descriptionMn: "Fortify идэвхтэй үед movement speed буурахгүй, халаалт үүсэхгүй.",
        effectMn: "Fortify-гаа ашиглахдаа хурдаа алддаггүй болно.",
        verified: true,
      },
    ],
    major: [
      {
        id: "or-major-1",
        name: "Heavy Javelin",
        descriptionMn: "Energy Javelin-ийн knockback 25%-иар, хананд цохих damage 15-аар нэмэгдэнэ.",
        effectMn: "Жад шидэх довтолгоо илүү аюултай болно.",
        verified: true,
      },
      {
        id: "or-major-2",
        name: "Protective Barrier",
        descriptionMn: "Javelin Spin-ийн оронд урагш barrier шидэх боломжтой болно.",
        effectMn: "Javelin Spin-ээ Barrier болгон хувиргаж болно.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "or-passive", name: "Steadfast", nameMn: "Steadfast", descriptionMn: "Критик damage-ийг бага хүлээн авч, HP бага үед хурд нэмэгддэг (Bruiser passive).", verified: true }],
};

export const sigma: Hero = {
  id: "sigma",
  name: "Sigma",
  nameMn: "Сигма",
  role: "Tank",
  subRole: "Stalwart",
  colorAccent: "#6E8FA0",
  initials: "SG",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "advanced",
  overview: {
    summaryMn: "Сигма бол хүндийн хүчийг удирддаг, Kinetic Grasp-аар сум шингээж, Gravitic Flux-ээр дайсныг агаарт өргөдөг эрдэмтэн танк.",
    playstyleMn: "Hyperspheres-ээр алсаас damage өгч, Experimental Barrier-ийг шидэж багаа хамгаалж, Gravitic Flux-ээр group wipe хийнэ.",
    strengthsMn: ["Kinetic Grasp-аар сум шингээж healing болгоно", "Барьер-аа шидэж болдог, davхар байрлалд ашиглана", "Gravitic Flux нь маш хүчтэй team fight ultimate"],
    weaknessesMn: ["Хөдөлгөөн удаан", "Барьер тавихгүй бол эмзэг"],
    tipsMn: ["Kinetic Grasp-аар projectile-ийг шингээж HP-ээ нэмэгдүүл.", "Барьераа урагш шидэж давуу байрлал эзэл."],
  },
  abilities: [
    { id: "sg-spheres", name: "Hyperspheres", nameMn: "Hyperspheres", type: "Primary Fire", keybind: "LMB", descriptionMn: "Бөмбөлөг шидэж алсаас damage өгнө.", verified: true },
    { id: "sg-grasp", name: "Kinetic Grasp", nameMn: "Kinetic Grasp", type: "Defensive", keybind: "Shift", descriptionMn: "Ирж буй projectile-ийг шингээж HP болгоно.", verified: true },
    { id: "sg-barrier", name: "Experimental Barrier", nameMn: "Experimental Barrier", type: "Defensive", keybind: "RMB", descriptionMn: "Хөвөгч barrier үүсгэж шидэж болно.", verified: true },
    { id: "sg-accretion", name: "Accretion", nameMn: "Accretion", type: "Ability", keybind: "E", descriptionMn: "Чулуу шидэж дайсныг унагаана.", verified: true },
    { id: "sg-flux", name: "Gravitic Flux", nameMn: "Gravitic Flux", type: "Ultimate", descriptionMn: "Ойролцоох дайснуудыг агаарт өргөж дараа нь газарт унагаана.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "sg-minor-1",
        name: "Kinetic Cycle",
        descriptionMn: "Kinetic Grasp-аар projectile шингээх нь Accretion-ийн cooldown-ийг мөн багасгадаг.",
        effectMn: "Хамгаалалт хийх тусам Accretion-аа хурдан дахин авна.",
        verified: true,
      },
      {
        id: "sg-minor-2",
        name: "Hyper Regeneration",
        descriptionMn: "Hyperspheres-ийн damage-ийн 40% нь Experimental Barrier-ийн HP болж хувирдаг.",
        effectMn: "Довтлох тусам Barrier-аа сэргээнэ.",
        verified: true,
      },
    ],
    major: [
      {
        id: "sg-major-1",
        name: "Hyper Strike",
        descriptionMn: "Hyperspheres-ээр 5 удаа шууд цохих бүрд дараагийн Quick Melee дайсныг агаарт өргөж холдуулна.",
        effectMn: "Тогтмол буудлагаараа CC чадвар нэмж авна.",
        verified: true,
      },
      {
        id: "sg-major-2",
        name: "Levitation",
        descriptionMn: "Double Jump-ийг дараад барихад богино хугацаанд агаарт хөвж чадна.",
        effectMn: "Агаарт байрлалаа илүү сайн барих боломжтой.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "sg-passive", name: "Steadfast", nameMn: "Steadfast", descriptionMn: "Knockback болон slow эффектийг бага хүлээн авна (Stalwart passive).", verified: true }],
};

export const wreckingBall: Hero = {
  id: "wrecking-ball",
  name: "Wrecking Ball",
  nameMn: "Рэкинг Бол",
  role: "Tank",
  subRole: "Initiator",
  colorAccent: "#5E6E8A",
  initials: "WB",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "advanced",
  overview: {
    summaryMn: "Рэкинг Бол бол Grappling Claw-аараа газраас газарт үсэрч, Piledriver-ээр газарт хүчтэй цохилт өгдөг hamster-т удирддаг том мех.",
    playstyleMn: "Grappling Claw-аар map даяар хурдан хөдөлж, Adaptive Shield-ээр багаа хамгаалж, Minefield-ээр team fight-ийг эхлүүлнэ.",
    strengthsMn: ["Хамгийн mobile танк, газар бүх хэсэгт хүрч чадна", "Adaptive Shield нь ойролцоох дайсны тоогоор нэмэгддэг", "Minefield нь маш хүчтэй area denial ultimate"],
    weaknessesMn: ["Alone орвол дэмжлэггүй", "Aim шаардсан довтолгоо байхгүй тул зөвхөн байрлалаараа тоглодог"],
    tipsMn: ["Grappling Claw-аа map-ийн өндөрлөг газраас ашигла.", "Minefield-ийг довтолгооны эхэнд бус, дайсныг unaware байхад тавь."],
  },
  abilities: [
    { id: "wb-guns", name: "Quad Cannons", nameMn: "Quad Cannons", type: "Primary Fire", keybind: "LMB", descriptionMn: "Дөрвөн буугаар тасралтгүй damage өгнө.", verified: true },
    { id: "wb-claw", name: "Grappling Claw", nameMn: "Grappling Claw", type: "Movement", keybind: "LMB (grapple)", descriptionMn: "Дэгээгээр аль ч чиглэлд хурдан хөдөлнө.", verified: true },
    { id: "wb-roll", name: "Roll", nameMn: "Roll", type: "Movement", descriptionMn: "Бөмбөлөг хэлбэрт орж хурдан гүйнэ.", verified: true },
    { id: "wb-shield", name: "Adaptive Shield", nameMn: "Adaptive Shield", type: "Defensive", keybind: "Shift", descriptionMn: "Ойролцоох дайсны тоонд тохирсон түр зуурын нэмэлт HP авна.", verified: true },
    { id: "wb-piledriver", name: "Piledriver", nameMn: "Piledriver", type: "Ability", keybind: "E", descriptionMn: "Дайсныг барьж газарт цохиж damage учруулна.", verified: true },
    { id: "wb-minefield", name: "Minefield", nameMn: "Minefield", type: "Ultimate", descriptionMn: "Олон мина тараана, тэсрэхэд их damage учруулна.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "wb-minor-1",
        name: "Steamroller",
        descriptionMn: "Roll-оор танк руу цохих damage 100%-иар нэмэгдэнэ.",
        effectMn: "Танкуудын эсрэг Roll-оо илүү үр дүнтэй болгоно.",
        verified: true,
      },
      {
        id: "wb-minor-2",
        name: "Multi-Ball",
        descriptionMn: "Minefield ашигласны дараа 5 секундын дотор товч дарвал 7 нэмэлт мина тавина.",
        effectMn: "Ultimate-ээ илүү өргөн талбайд тарааж болно.",
        verified: true,
      },
    ],
    major: [
      {
        id: "wb-major-1",
        name: "Hang Time",
        descriptionMn: "Piledriver илүү удаан бэлдэж, агаарт удирдлагатай болж, 50% хүртэл нэмэлт damage өгнө.",
        effectMn: "Piledriver-аа илүү хүчтэй, зохицуулалттай болгоно.",
        verified: true,
      },
      {
        id: "wb-major-2",
        name: "Adaptive Barrier",
        descriptionMn: "Adaptive Shield идэвхжихэд 1 секундын турш barrier үүсгэдэг.",
        effectMn: "Adaptive Shield-ээ нэмэлт хамгаалалттай болгоно.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "wb-passive", name: "Kinetic Absorption", nameMn: "Kinetic Absorption", descriptionMn: "Агаарт байх үед аажмаар HP-ээ сэргээдэг (Initiator passive).", verified: true }],
};

// ---------------------------------------------------------------------------
// Damage
// ---------------------------------------------------------------------------

export const bastion: Hero = {
  id: "bastion",
  name: "Bastion",
  nameMn: "Бастион",
  role: "Damage",
  subRole: "Specialist",
  colorAccent: "#6E8F5A",
  initials: "BS",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "beginner",
  beginnerWhyMn: [
    "Assault хэлбэрт зогсоод л буудах — энгийн, шулуун тактиктай.",
    "Self-Repair-ээр өөрийгөө амархан эмчилнэ.",
    "Хөдөлгөөний чадвар цөөн тул суралцах зүйл бага.",
  ],
  overview: {
    summaryMn: "Бастион бол Configuration: Assault хэлбэрт шилжиж их хэмжээний тогтмол damage өгдөг хуучин дайны омник.",
    playstyleMn: "Recon хэлбэрээр байрлал сонгож, Assault болон Artillery хэлбэрт шилжиж талбайн эсвэл цэгэн damage өгнө.",
    strengthsMn: ["Assault хэлбэрт орсон үед асар их DPS", "Artillery-ээр алсаас AoE damage", "Self-Repair-ээр өөрийгөө heal хийдэг"],
    weaknessesMn: ["Хэлбэр солих үед эмзэг", "Mobility маш бага"],
    tipsMn: ["Assault хэлбэрийг өнцөг ард нуугдаж ашигла.", "Configuration: Artillery-ийг healer, бэхлэгдсэн зорилт руу ашигла."],
  },
  abilities: [
    { id: "bs-recon", name: "Configuration: Recon", nameMn: "Configuration: Recon", type: "Primary Fire", keybind: "LMB", descriptionMn: "Хөнгөн буу хэлбэрээр дунд зайд damage өгнө, хамгийн хурдан хөдөлдөг хэлбэр.", verified: true },
    { id: "bs-assault", name: "Configuration: Assault", nameMn: "Configuration: Assault", type: "Ability", keybind: "Shift", descriptionMn: "Тогтмол их damage өгдөг хүнд буу хэлбэрт шилжинэ.", verified: true },
    { id: "bs-artillery", name: "Configuration: Artillery", nameMn: "Configuration: Artillery", type: "Ultimate", descriptionMn: "Хол зайд том AoE damage учруулах гаубиц хэлбэрт шилжинэ.", verified: true },
    { id: "bs-repair", name: "Self-Repair", nameMn: "Self-Repair", type: "Ability", keybind: "E", descriptionMn: "Өөрийгөө удаан хугацаанд heal хийнэ.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "bs-minor-1",
        name: "Configuration Reload",
        descriptionMn: "Хэлбэр солиход тусгай гранатын cooldown 4 секундээр багасна.",
        effectMn: "Хэлбэр сольж байгаад л нэмэлт AoE damage өгч чадна.",
        verified: true,
      },
      {
        id: "bs-minor-2",
        name: "Smart Bomb",
        descriptionMn: "Тусгай гранатын өөрийгөө knockback хийх хүч 25%-иар нэмэгдэж, өөртөө damage өгөхгүй болно.",
        effectMn: "Ухрахад ашиглах гранатыг илүү аюулгүй болгодог.",
        verified: true,
      },
    ],
    major: [
      {
        id: "bs-major-1",
        name: "Lindholm Explosives",
        descriptionMn: "Assault хэлбэрийн зэвсэг эргэдэг их буу биш, аажим дэлбэрэх сум харвадаг болно.",
        effectMn: "Assault хэлбэрийг өөр төрлийн damage-тэй болгоно.",
        verified: true,
      },
      {
        id: "bs-major-2",
        name: "Self-Repair",
        descriptionMn: "Товч дарж өөрийгөө хурдан heal хийнэ.",
        effectMn: "Бастионы сонгодог өөрийгөө heal хийх чадвар буцаж ирдэг.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "bs-passive", name: "Specialist Passive", nameMn: "Specialist Passive", descriptionMn: "Дайсныг устгасны дараа богино хугацаанд сум ачих хурд нэмэгддэг (Specialist passive).", verified: true }],
};

export const cassidy: Hero = {
  id: "cassidy",
  name: "Cassidy",
  nameMn: "Кэссиди",
  role: "Damage",
  subRole: "Sharpshooter",
  colorAccent: "#9E6E3A",
  initials: "CS",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "intermediate",
  overview: {
    summaryMn: "Кэссиди бол Peacekeeper буугаараа критик цохилт хийж, Flashbang-аар дайсныг сохлон, Deadeye-ээр том цохилт хийдэг бэлхнэй.",
    playstyleMn: "Дунд зайд Peacekeeper-ээрээ буудаж, Flashbang-аар дайсныг богино зуур саатуулан ойртож устгана.",
    strengthsMn: ["Combat Roll-оор зугтаж дахин ачилдана", "Flashbang нь дайсныг бүрэн stun хийнэ", "Deadeye Ultimate нь харагдах бүх дайсныг устгах чадвартай"],
    weaknessesMn: ["Хол зайд сул", "Reload удаан"],
    tipsMn: ["Flashbang-аар дайсныг сохлоод шууд буудаж дуусга.", "Combat Roll-оор reload-аа шинэчлэн байрлалаа сольж болно."],
  },
  abilities: [
    { id: "cs-peacekeeper", name: "Peacekeeper", nameMn: "Peacekeeper", type: "Primary Fire", keybind: "LMB", descriptionMn: "Нарийвчилсан буу, RMB дарж хол зайд критик цохилт хийнэ.", verified: true },
    { id: "cs-roll", name: "Combat Roll", nameMn: "Combat Roll", type: "Movement", keybind: "Shift", descriptionMn: "Хажуу тийш үсрэн, reload-аа шинэчилнэ.", verified: true },
    { id: "cs-flashbang", name: "Flashbang", nameMn: "Flashbang", type: "Ability", keybind: "E", descriptionMn: "Дайсныг богино хугацаанд stun хийнэ.", verified: true },
    { id: "cs-deadeye", name: "Deadeye", nameMn: "Deadeye", type: "Ultimate", descriptionMn: "Тодорхой хугацааны дараа харагдаж буй бүх дайсанд асар их damage учруулна.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "cs-minor-1",
        name: "Bang Bang",
        descriptionMn: "Хоёр дахь Flashbang холдуу зайд хүрдэг ч хоёулаа 40%-иар бага damage-тэй болно.",
        effectMn: "Flashbang-аа хоёр зорилтод зэрэг ашиглаж болно.",
        verified: true,
      },
      {
        id: "cs-minor-2",
        name: "Giddy Up",
        descriptionMn: "Combat Roll хийсний дараа 1.5 секундын турш 60% movement speed авч аажмаар буурдаг.",
        effectMn: "Combat Roll-оо байрлал сольход илүү үр дүнтэй болгоно.",
        verified: true,
      },
    ],
    major: [
      {
        id: "cs-major-1",
        name: "Rollin' Round-Up",
        descriptionMn: "Combat Roll хийхэд ачигдсан сум тус бүрээс 15 HP heal хийдэг.",
        effectMn: "Reload хийх бүрдээ HP сэргээнэ.",
        verified: true,
      },
      {
        id: "cs-major-2",
        name: "Silver Bullet",
        descriptionMn: "Peacekeeper-ийн Secondary Fire цус гоожуулах (1.5 секундэд 50 damage) сум болж хувирна; Combat Roll, Deadeye ашиглавал cooldown нь дахин сэргэнэ.",
        effectMn: "Тогтмол damage өгдөг шинэ хэрэгсэлтэй болно.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "cs-passive", name: "Sharpshooter Passive", nameMn: "Sharpshooter Passive", descriptionMn: "Критик цохилт хийх бүрд movement ability-ийн cooldown багасна (Sharpshooter passive).", verified: true }],
};

export const echo: Hero = {
  id: "echo",
  name: "Echo",
  nameMn: "Эхо",
  role: "Damage",
  subRole: "Recon",
  colorAccent: "#8FBFD9",
  initials: "EC",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "advanced",
  overview: {
    summaryMn: "Эхо бол Duplicate ultimate-ээрээ дайсны баатрыг хуулбарлаж, Flight-ээр агаарт эрх чөлөөтэй хөдөлдөг адаптив робот.",
    playstyleMn: "Focusing Beam-ээр эмзэг зорилт руу damage нэмэгдүүлж, Sticky Bombs-аар AoE damage, Duplicate-ээр дайсны хамгийн хүчтэй баатрыг хуулбарлана.",
    strengthsMn: ["Duplicate-ээр дайсны Ultimate-ийг ашиглах боломжтой", "Focusing Beam хагасаас бага HP-тэй дайсанд их damage өгнө", "Flight-ээр газраас чөлөөтэй хөдөлдөг"],
    weaknessesMn: ["HP бага", "Нарийн aim шаарддаг"],
    tipsMn: ["Duplicate-ийг хамгийн хүчтэй танк эсвэл damage баатар руу ашигла.", "Focusing Beam-ийг hагасаас бага HP-тэй дайсан руу ашигла."],
  },
  abilities: [
    { id: "ec-beam", name: "Tri-Shot", nameMn: "Tri-Shot", type: "Primary Fire", keybind: "LMB", descriptionMn: "Гурван чиглэлд сум цацруулж damage өгнө.", verified: true },
    { id: "ec-focus", name: "Focusing Beam", nameMn: "Focusing Beam", type: "Ability", keybind: "RMB", descriptionMn: "Хагасаас бага HP-тэй дайсанд нэмэгдсэн damage өгдөг цацраг.", verified: true },
    { id: "ec-bombs", name: "Sticky Bombs", nameMn: "Sticky Bombs", type: "Ability", keybind: "Shift", descriptionMn: "Наалддаг бөмбөг шидэж AoE damage өгнө.", verified: true },
    { id: "ec-flight", name: "Flight", nameMn: "Flight", type: "Movement", keybind: "Space", descriptionMn: "Агаарт чөлөөтэй нисэж хөдөлнө.", verified: true },
    { id: "ec-duplicate", name: "Duplicate", nameMn: "Duplicate", type: "Ultimate", descriptionMn: "Дайсны баатрыг хуулбарлаж, тэдний чадваруудыг ашиглах боломжтой болно.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "ec-minor-1",
        name: "Aerial Munitions",
        descriptionMn: "Flight идэвхтэй үедээ хязгааргүй сумтай болно.",
        effectMn: "Агаарт байхдаа чөлөөтэй буудна.",
        verified: true,
      },
      {
        id: "ec-minor-2",
        name: "Partial Scan",
        descriptionMn: "Duplicate идэвхжихэд 30% ultimate charge-тай эхэлдэг.",
        effectMn: "Хуулбарласан баатрынхаа Ultimate-ийг илүү хурдан бэлдэнэ.",
        verified: true,
      },
    ],
    major: [
      {
        id: "ec-major-1",
        name: "Full Salvo",
        descriptionMn: "Sticky Bombs 2 нэмэлт бөмбөг шидэх болно.",
        effectMn: "AoE damage мэдэгдэхүйц нэмэгдэнэ.",
        verified: true,
      },
      {
        id: "ec-major-2",
        name: "Focused Rush",
        descriptionMn: "Focusing Beam-ийн зай 8 метрээр нэмэгдэж, идэвхтэй үедээ 25% хурдан хөдөлнө.",
        effectMn: "Focusing Beam-аа алсаас, хурдан ашиглах боломжтой болно.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "ec-passive", name: "Recon Passive", nameMn: "Recon Passive", descriptionMn: "Хагасаас бага HP-тэй дайсанд damage учруулсны дараа тэднийг ханаар дамжуулан илрүүлдэг (Recon passive).", verified: true }],
};

export const freja: Hero = {
  id: "freja",
  name: "Freja",
  nameMn: "Фрея",
  role: "Damage",
  subRole: "Recon",
  colorAccent: "#7A8FA0",
  initials: "FJ",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "intermediate",
  overview: {
    summaryMn: "Фрея бол реактив зэвсгээрээ агаарт үсэрч, харваачны нарийвчилсан damage өгдөг хуучин Overwatch агент, одоо бэлхнэй.",
    playstyleMn: "Take Aim-аар харваа зорилтоо нарийвчлан, Blast Jump-ээр давуу байрлал эзэлж, Hunting Party-гаар дайсныг илрүүлж их damage учруулна.",
    strengthsMn: ["Blast Jump-ээр өндөрт хүрч давуу байрлал эзэлнэ", "Take Aim-аар нарийвчилсан их damage", "Recon passive-той хослуулан дайсныг илрүүлнэ"],
    weaknessesMn: ["Ойрын зайд сул", "Нарийн aim шаарддаг"],
    tipsMn: ["Blast Jump-ээр өндөрлөг газраас довтол.", "Take Aim-аар критик цохилтоо баталгаажуулж болно."],
  },
  abilities: [
    { id: "fj-crossbow", name: "Crossbow", nameMn: "Crossbow", type: "Primary Fire", keybind: "LMB", descriptionMn: "Дунд-алс зайд сум харвана.", verified: true },
    { id: "fj-aim", name: "Take Aim", nameMn: "Take Aim", type: "Secondary Fire", keybind: "RMB", descriptionMn: "Илүү удаан, илүү нарийвчилсан харваа хийнэ.", verified: true },
    { id: "fj-jump", name: "Blast Jump", nameMn: "Blast Jump", type: "Movement", keybind: "Shift", descriptionMn: "Тэсрэлтийн хүчээр агаарт өндөрт үсэрнэ.", verified: true },
    { id: "fj-hunting", name: "Hunting Party", nameMn: "Hunting Party", type: "Ultimate", descriptionMn: "Шонхор дуудаж дайсныг илрүүлж, тэдэнд нэмэгдсэн damage учруулна.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "fj-minor-1",
        name: "Relentless Barrage",
        descriptionMn: "Take Aim шууд цохилт хийх бүрд 5 автомат сум буцааж өгдөг.",
        effectMn: "Нарийвчилсан харваа хийх тусам сумаа хэмнэнэ.",
        verified: true,
      },
      {
        id: "fj-minor-2",
        name: "Momentum Boost",
        descriptionMn: "Хурдан ухралтын (Quick Dash) зай 20%-иар нэмэгдэнэ.",
        effectMn: "Байрлал сольход илүү хол зайд шилжинэ.",
        verified: true,
      },
    ],
    major: [
      {
        id: "fj-major-1",
        name: "Aerial Recover",
        descriptionMn: "Updraft ашигласны дараа газарт хүрэх хүртлээ секундэд 30 HP сэргээнэ.",
        effectMn: "Өндөрт гарсны дараа өөрийгөө heal хийнэ.",
        verified: true,
      },
      {
        id: "fj-major-2",
        name: "Rising Winds",
        descriptionMn: "Updraft нэмэлт charge-тэй болох боловч өндөр нь 20%-иар багасна.",
        effectMn: "Updraft-аа илүү олон удаа ашиглах боломжтой.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "fj-passive", name: "Recon Passive", nameMn: "Recon Passive", descriptionMn: "Хагасаас бага HP-тэй дайсанд damage учруулсны дараа тэднийг ханаар дамжуулан илрүүлдэг (Recon passive).", verified: true }],
};

export const hanzo: Hero = {
  id: "hanzo",
  name: "Hanzo",
  nameMn: "Ханзо",
  role: "Damage",
  subRole: "Sharpshooter",
  colorAccent: "#4F6E4F",
  initials: "HZ2",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "intermediate",
  overview: {
    summaryMn: "Ханзо бол Storm Bow-гоороо аль ч зайд damage учруулж, Dragonstrike-аар бүхэл шугам дайсныг устгах чадвартай харваачин.",
    playstyleMn: "Storm Arrows-аар хурдан цуврал сум харвах, Sonic Arrow-гоор хараа авах, Lunge-ээр давуу байрлал эзлэх зэргээр тоглодог.",
    strengthsMn: ["Storm Bow-ны сум хязгааргүй", "Sonic Arrow-гоор багийн хараа өгдөг", "Dragonstrike нь бүх ханыг нэвтэрдэг"],
    weaknessesMn: ["Нарийвчилсан aim шаарддаг", "Ойрын зайд эмзэг"],
    tipsMn: ["Sonic Arrow-гоо тулааны эхэнд ашиглаж дайсныг ол.", "Storm Arrows-аар богино хугацаанд их damage өг."],
  },
  abilities: [
    { id: "hz-bow", name: "Storm Bow", nameMn: "Storm Bow", type: "Primary Fire", keybind: "LMB", descriptionMn: "Цэнэглэж болох сум харвадаг бөгж, илүү удаан цэнэглэвэл илүү их damage өгнө.", verified: true },
    { id: "hz-sonic", name: "Sonic Arrow", nameMn: "Sonic Arrow", type: "Ability", keybind: "Shift", descriptionMn: "Онох цэгийн орчимд дайсныг илрүүлдэг сум.", verified: true },
    { id: "hz-storm", name: "Storm Arrows", nameMn: "Storm Arrows", type: "Ability", keybind: "E", descriptionMn: "Хэд хэдэн сум хурдан цувруулан харвана.", verified: true },
    { id: "hz-lunge", name: "Lunge", nameMn: "Lunge", type: "Movement", descriptionMn: "Агаарт үсэрч урагш дайрна.", verified: true },
    { id: "hz-dragonstrike", name: "Dragonstrike", nameMn: "Dragonstrike", type: "Ultimate", descriptionMn: "Хоёр луу цацруулж, шугаман дагуух бүх дайсанд асар их damage учруулна.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "hz2-minor-1",
        name: "Sonic Disruption",
        descriptionMn: "Sonic Arrow ойролцоох Health Pack 30 секундэд hack хийдэг.",
        effectMn: "Дайсны healing-ийн эх үүсвэрийг тусгаарлана.",
        verified: true,
      },
      {
        id: "hz2-minor-2",
        name: "Dragon Fury",
        descriptionMn: "Үндсэн харваагаар дайсныг цохисны дараа 1.5 секундэд 20% attack speed авна.",
        effectMn: "Цохилт хийх тусам илүү хурдан харвана.",
        verified: true,
      },
    ],
    major: [
      {
        id: "hz2-major-1",
        name: "Frost Arrow",
        descriptionMn: "Тусгай товч дарж хөлдөөх сум бэлдэж, тусвал дайсныг 2 секундэд 35%-иар slow хийнэ.",
        effectMn: "Дайсныг зогсоож нэмэлт довтолгоо хийх боломж олгоно.",
        verified: true,
      },
      {
        id: "hz2-major-2",
        name: "Scatter Arrows",
        descriptionMn: "Storm Arrows анх удаа саатахдаа 5 сум болж хуваагдаж, тус бүр 33% damage-тэй, дахин 1 удаа саатдаг.",
        effectMn: "Storm Arrows-аа өргөн талбайд үр дүнтэй болгоно.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "hz-passive", name: "Sharpshooter Passive", nameMn: "Sharpshooter Passive", descriptionMn: "Критик цохилт хийх бүрд movement ability-ийн cooldown багасна (Sharpshooter passive).", verified: true }],
};

export const junkrat: Hero = {
  id: "junkrat",
  name: "Junkrat",
  nameMn: "Жанкрат",
  role: "Damage",
  subRole: "Specialist",
  colorAccent: "#C9973A",
  initials: "JR",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "beginner",
  beginnerWhyMn: [
    "Сум хана, газраас бааждаг тул нарийн aim шаардахгүй.",
    "Steel Trap, Concussion Mine энгийн, тодорхой зориулалттай chadвар.",
    "Алдаа гаргасан ч RIP-Tire-ээр тулааныг нэг мөчид эргүүлэх боломж бий.",
  ],
  overview: {
    summaryMn: "Жанкрат бол бөмбөг шидэж, Concussion Mine-аар өөрийгөө хөөргөж, Steel Trap-аар барьж, RIP-Tire-ээр асар их damage өгдөг гэмт хэрэгтэн.",
    playstyleMn: "Frag Launcher-аар булан ард damage өгч, Steel Trap-аар зорилтыг барьж, Concussion Mine-аар өөрийгөө агаарт хөөргөнө.",
    strengthsMn: ["Frag Launcher хана нэвтэрдэггүй ч тэсрэлтийн damage том талбайд нөлөөлнө", "Steel Trap-аар дайсныг бүрэн барина", "RIP-Tire нь маш хортой Ultimate"],
    weaknessesMn: ["Нарийвчилсан цохилт хийхэд хэцүү", "Өөрийгөө хохироох эрсдэлтэй"],
    tipsMn: ["Concussion Mine-аар өөрийгөө өндөрт хөөргөж давуу байрлал эзэл.", "Steel Trap-аа явган зам дээр нуу."],
  },
  abilities: [
    { id: "jr-launcher", name: "Frag Launcher", nameMn: "Frag Launcher", type: "Primary Fire", keybind: "LMB", descriptionMn: "Бөмбөг шидэж тэсрэлтийн damage учруулна.", verified: true },
    { id: "jr-mine", name: "Concussion Mine", nameMn: "Concussion Mine", type: "Movement", keybind: "Shift", descriptionMn: "Мина тавьж тэсэлгэснээр өөрийгөө эсвэл дайсныг холдуулна.", verified: true },
    { id: "jr-trap", name: "Steel Trap", nameMn: "Steel Trap", type: "Ability", keybind: "E", descriptionMn: "Барих занга тавьж дайсныг хөдөлгөөнгүй болгоно.", verified: true },
    { id: "jr-tire", name: "RIP-Tire", nameMn: "RIP-Tire", type: "Ultimate", descriptionMn: "Дугуй жолоодож зорилтод хүрч дэлбэрч их damage учруулна.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "jr-minor-1",
        name: "Bomb Voyage",
        descriptionMn: "Concussion Mine-аар өөрийгөө хөөргөсний дараа 3 секундэд 35% attack speed авна.",
        effectMn: "Мина ашигласны дараа шууд их damage өгнө.",
        verified: true,
      },
      {
        id: "jr-minor-2",
        name: "Nitro Boost",
        descriptionMn: "RIP-Tire идэвхтэй үед Shift дарж 100% хурдны нэмэгдэл авах боловч damage нь 50%-иар буурна.",
        effectMn: "RIP-Tire-аа зорилтдоо илүү хурдан хүргэнэ.",
        verified: true,
      },
    ],
    major: [
      {
        id: "jr-major-1",
        name: "Mine Recycling",
        descriptionMn: "Concussion Mine-аар устгал хийвэл нэг charge буцаж ирнэ.",
        effectMn: "Мина-аа илүү олон удаа ашиглах боломжтой.",
        verified: true,
      },
      {
        id: "jr-major-2",
        name: "Frag Cannon",
        descriptionMn: "Frag Launcher-ийн сумны хурд 25%-иар нэмэгдэнэ.",
        effectMn: "Бөмбөгөө зорилтод илүү хурдан хүргэнэ.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "jr-passive", name: "Specialist Passive", nameMn: "Specialist Passive", descriptionMn: "Дайсныг устгасны дараа богино хугацаанд сум ачих хурд нэмэгддэг (Specialist passive).", verified: true }],
};

export const mei: Hero = {
  id: "mei",
  name: "Mei",
  nameMn: "Мэй",
  role: "Damage",
  subRole: "Specialist",
  colorAccent: "#5AAECF",
  initials: "ME",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "beginner",
  beginnerWhyMn: [
    "Endothermic Blaster-ийн гэмтэл aim нарийвчлалаас хамаарал багатай.",
    "Ice Wall, Cryo-Freeze-ээр алдаанаасаа амархан гарч чадна.",
    "Хувийн HP өндөр тул ганцаараа байсан ч удаан амьд үлддэг.",
  ],
  overview: {
    summaryMn: "Мэй бол Endothermic Blaster-ээр дайсныг хөлдөөж, Ice Wall-ээр байрлал хязгаарладаг цаг уурын эрдэмтэн.",
    playstyleMn: "Icicle-ээр алсаас нарийвчилсан damage, Blaster-ээр ойрын зайд хөлдөөж, Ice Wall-ээр багаа хамгаалж эсвэл дайсныг тусгаарлана.",
    strengthsMn: ["Ice Wall-ээр байрлал бүрэн хязгаарлана", "Cryo-Freeze-ээр өөрийгөө бүрэн хамгаална", "Blizzard Ultimate талбайн CC хийж чадна"],
    weaknessesMn: ["Хөдөлгөөн удаан", "Damage өгөх хурд бага"],
    tipsMn: ["Ice Wall-аар дайсны healer-ийг тусгаарла.", "Cryo-Freeze-ийг аюул тулгарахад шууд идэвхжүүл."],
  },
  abilities: [
    { id: "me-blaster", name: "Endothermic Blaster", nameMn: "Endothermic Blaster", type: "Primary Fire", keybind: "LMB", descriptionMn: "Ойрын зайд хөлдөөх нөлөөтэй damage өгнө.", verified: true },
    { id: "me-icicle", name: "Icicle", nameMn: "Icicle", type: "Secondary Fire", keybind: "RMB", descriptionMn: "Мөсөн сум харвана.", verified: true },
    { id: "me-wall", name: "Ice Wall", nameMn: "Ice Wall", type: "Ability", keybind: "Shift", descriptionMn: "Мөсөн хана босгож замыг хаана.", verified: true },
    { id: "me-freeze", name: "Cryo-Freeze", nameMn: "Cryo-Freeze", type: "Defensive", keybind: "E", descriptionMn: "Өөрийгөө мөстэй болгож бүх damage-аас хамгаалж, heal хийнэ.", verified: true },
    { id: "me-blizzard", name: "Blizzard", nameMn: "Blizzard", type: "Ultimate", descriptionMn: "Талбайд мөндөр дуудаж, дотор нь байгаа дайсныг хөлддөг.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "me-minor-1",
        name: "Skating Rink",
        descriptionMn: "Blizzard дотор байгаа хамтрагчид 25% movement speed-тэй болж, секундэд 50 HP сэргээнэ.",
        effectMn: "Ultimate-ээ багийн дэмжлэгийн хэрэгсэл болгоно.",
        verified: true,
      },
      {
        id: "me-minor-2",
        name: "Glacial Propulsion",
        descriptionMn: "Хоёр дахь удаагийн үсрэлт (double jump) жижиг мөсөн багана үүсгэж Мэйг агаарт өргөнө.",
        effectMn: "Давхар үсрэлтийг нэмэлт өндөрлөг рүү ашиглаж болно.",
        verified: true,
      },
    ],
    major: [
      {
        id: "me-major-1",
        name: "Deep Freeze",
        descriptionMn: "Үндсэн буудлагаар тасралтгүй цохих нь дайсныг хөлддөг болгодог; танк бус баатруудад хөлдөх хурд 30%-иар нэмэгдэнэ.",
        effectMn: "Дайсныг бүрэн хөлдөөж хөдөлгөөнгүй болгоно.",
        verified: true,
      },
      {
        id: "me-major-2",
        name: "Cryo-Storm",
        descriptionMn: "Cryo-Freeze идэвхтэй үедээ ойролцоох дайсныг slow хийж, секундэд 70 damage учруулна.",
        effectMn: "Cryo-Freeze-ээ хамгаалалтаас гадна довтолгооны хэрэгсэл болгоно.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "me-passive", name: "Specialist Passive", nameMn: "Specialist Passive", descriptionMn: "Дайсныг устгасны дараа богино хугацаанд сум ачих хурд нэмэгддэг (Specialist passive).", verified: true }],
};

export const pharah: Hero = {
  id: "pharah",
  name: "Pharah",
  nameMn: "Фараа",
  role: "Damage",
  subRole: "Recon",
  colorAccent: "#3E5E9E",
  initials: "PH",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "intermediate",
  overview: {
    summaryMn: "Фараа бол Jump Jets-ээр агаарт байнга байж, Rocket Launcher-аараа дэлбэрэлтийн damage учруулдаг эгидийн дайчин.",
    playstyleMn: "Агаараас Rocket Launcher-аар AoE damage, Concussive Blast-аар дайсныг knockback хийн, Barrage-аар нэг цэгт асар их damage учруулна.",
    strengthsMn: ["Агаарт байнга байж ихэнх ойрын зайн довтолгооноос зайлсхийнэ", "Concussive Blast нь дайсныг унтраах эсвэл knockback хийх боломжтой", "Barrage Ultimate маш хортой"],
    weaknessesMn: ["Хий (hitscan) сум муутай, Widowmaker гэх мэтэд эмзэг", "Ойрын зайд сул"],
    tipsMn: ["Ямагт хөдөлгөөнтэй бай, нэг цэгт удаан бүү зогс.", "Barrage-аа хана эсвэл булангаар нуугдаж ашигла."],
  },
  abilities: [
    { id: "ph-rocket", name: "Rocket Launcher", nameMn: "Rocket Launcher", type: "Primary Fire", keybind: "LMB", descriptionMn: "Пуужин харваж AoE damage учруулна.", verified: true },
    { id: "ph-jets", name: "Jump Jet", nameMn: "Jump Jet", type: "Movement", keybind: "Space", descriptionMn: "Дээш хурдан үсэрнэ.", verified: true },
    { id: "ph-hover", name: "Hover Jets", nameMn: "Hover Jets", type: "Movement", descriptionMn: "Агаарт удаан хугацаагаар хөвнө.", verified: true },
    { id: "ph-blast", name: "Concussive Blast", nameMn: "Concussive Blast", type: "Ability", keybind: "Shift", descriptionMn: "Дэлбэрэлт үүсгэж дайсныг knockback хийнэ.", verified: true },
    { id: "ph-barrage", name: "Barrage", nameMn: "Barrage", type: "Ultimate", descriptionMn: "Олон пуужин зэрэг цацруулж их damage учруулна.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "ph-minor-1",
        name: "Concussive Force",
        descriptionMn: "Concussive Blast дээд тал нь 50 дэлбэрэлтийн damage өгдөг болно.",
        effectMn: "Concussive Blast-аа довтолгооны хэрэгсэл болгоно.",
        verified: true,
      },
      {
        id: "ph-minor-2",
        name: "Helix Shields",
        descriptionMn: "125 HP-г shield болгож, Rocket Launcher-ийн шууд цохилт shield-ийг идэвхгүй сэргээдэг болгоно.",
        effectMn: "Нарийвчилсан цохилт хийх тусам илүү тэсвэртэй болно.",
        verified: true,
      },
    ],
    major: [
      {
        id: "ph-major-1",
        name: "Fuel Stores",
        descriptionMn: "Түлшний хэрэглээ 50%-иар багасаж, дээд түлшний хэмжээ 100%-иар нэмэгдэнэ.",
        effectMn: "Агаарт илүү удаан хугацаагаар байх боломжтой.",
        verified: true,
      },
      {
        id: "ph-major-2",
        name: "Rocket Salvo",
        descriptionMn: "Movement ability ашигласны дараагийн үндсэн буудлага 2 нэмэлт эргэлддэг бяцхан пуужин, тус бүр 40 damage-тэй шидэдэг.",
        effectMn: "Довтолгооны эхлэлд нэмэлт damage өгнө.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "ph-passive", name: "Recon Passive", nameMn: "Recon Passive", descriptionMn: "Хагасаас бага HP-тэй дайсанд damage учруулсны дараа тэднийг ханаар дамжуулан илрүүлдэг (Recon passive).", verified: true }],
};

export const sojourn: Hero = {
  id: "sojourn",
  name: "Sojourn",
  nameMn: "Соджорн",
  role: "Damage",
  subRole: "Sharpshooter",
  colorAccent: "#3A6E9E",
  initials: "SJ",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "advanced",
  overview: {
    summaryMn: "Соджорн бол Railgun-аараа энерги цуглуулж, цэнэглэсэн цохилтоор дайсныг устгадаг цэргийн ахмад.",
    playstyleMn: "Автомат буугаар энерги цуглуулж, Railgun-ийн цэнэглэсэн цохилтоор эмзэг зорилтыг устгана. Power Slide-аар байрлалаа сольж авирна.",
    strengthsMn: ["Цэнэглэсэн Railgun цохилт маш их damage өгнө", "Power Slide-ээр газраас газарт хурдан хөдөлнө", "Overclock Ultimate нь дараалсан их damage өгнө"],
    weaknessesMn: ["Энерги цуглуулах цаг хэрэгтэй", "Ойрын зайд эмзэг"],
    tipsMn: ["Power Slide хийсний дараа үсрэлт хийвэл илүү өндөрт гарна.", "Энергиэ дайрахаас өмнө бүрэн цуглуулаарай."],
  },
  abilities: [
    { id: "sj-pulse", name: "Disruptor Shot / Railgun", nameMn: "Railgun", type: "Primary Fire", keybind: "LMB", descriptionMn: "Автомат буу, цэнэглэсэн цохилтоороо их damage өгнө.", verified: true },
    { id: "sj-slide", name: "Power Slide", nameMn: "Power Slide", type: "Movement", keybind: "Shift", descriptionMn: "Урагш гулсаж, дараа нь дээш үсэрч болно.", verified: true },
    { id: "sj-disruptor", name: "Disruptor Shot", nameMn: "Disruptor Shot", type: "Ability", keybind: "E", descriptionMn: "Дайсны healing-ийг хориглодог сум.", verified: true },
    { id: "sj-overclock", name: "Overclock", nameMn: "Overclock", type: "Ultimate", descriptionMn: "Тодорхой хугацаанд Railgun-ий цэнэглэлт хурдан бөгөөд илүү их damage-тэй болно.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "sj-minor-1",
        name: "Overcharged",
        descriptionMn: "Overclock идэвхтэй үед Railgun-ий дээд энерги 50-аар нэмэгдэнэ.",
        effectMn: "Ultimate-ийн үеэрээ илүү хүчтэй цохилт хийнэ.",
        verified: true,
      },
      {
        id: "sj-minor-2",
        name: "Deceleration Field",
        descriptionMn: "Disruptor Shot тусах дайсныг 25%-иар slow хийнэ.",
        effectMn: "Disruptor Shot-оо нэмэлт CC болгоно.",
        verified: true,
      },
    ],
    major: [
      {
        id: "sj-major-1",
        name: "Dual Thrusters",
        descriptionMn: "Power Slide нэмэлт charge-тэй болж, үсрэлт нь хажуу тийш хөдөлгөөн рүү шилждэг.",
        effectMn: "Power Slide-аа илүү олон удаа, өөр чиглэлд ашиглана.",
        verified: true,
      },
      {
        id: "sj-major-2",
        name: "Friction Generators",
        descriptionMn: "Гулгах үедээ Power Slide дээд тал нь 75 энерги үүсгэдэг.",
        effectMn: "Гулгалт бүрдээ Railgun-даа энерги нэмнэ.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "sj-passive", name: "Sharpshooter Passive", nameMn: "Sharpshooter Passive", descriptionMn: "Критик цохилт хийх бүрд movement ability-ийн cooldown багасна (Sharpshooter passive).", verified: true }],
};

export const sombra: Hero = {
  id: "sombra",
  name: "Sombra",
  nameMn: "Сомбра",
  role: "Support",
  subRole: "Tactician",
  colorAccent: "#6E3A9E",
  initials: "SM",
  dataComplete: true,
  lastUpdated: S5,
  difficulty: "advanced",
  overview: {
    summaryMn: "Season 5-аас Сомбра Support role-д шилжиж, Tactician болсон. Тэрээр Hotfix-ээр найзаа heal хийж, Cyberspace-ээр дайсныг Weaken болгож, Stealth-ээр дайсны ард аюулгүй нэвтэрдэг hacker.",
    playstyleMn: "Stealth-ээр аюулгүй байрлаж, Hotfix-ээр багийн гишүүдээ heal хийнэ. Cyberspace-ийг дайсны багийн дунд хаяж, тэдний damage болон healing-ийг хагасаар бууруулна. Hotfix нь эмнэлгийн боодол болон дайсны deployable-ийг hack хийж чаддаг.",
    strengthsMn: [
      "Weaken нь дайсны damage болон healing-ийг 50%-иар бууруулдаг",
      "Stealth-ийн үед ч Hotfix хэрэглэж болно",
      "Бүрэн цэнэглэгдсэн дайсны Ultimate-ийг харж чаддаг (Conspirator)",
      "Эмнэлгийн боодол болон дайсны deployable-ийг hack хийж чаддаг",
    ],
    weaknessesMn: [
      "HP бага, ойрын зайд эмзэг",
      "Translocator-ийн зай богиноссон, cooldown урт болсон",
      "EMP-ийн Ultimate cost мэдэгдэхүйц өссөн",
    ],
    tipsMn: [
      "Cyberspace-ийг дайсны healer эсвэл гол damage өгөгчийн хажууд хая.",
      "Эмнэлгийн боодол hack хийх нь Hotfix-ийн цэнэг зарцуулдаггүй — боломж гарвал заавал ашигла.",
      "EMP-ээ хайрла: Ultimate cost нь Season 5-д өссөн.",
    ],
  },
  abilities: [
    { id: "sm-pistol", name: "Machine Pistol", nameMn: "Machine Pistol", type: "Primary Fire", keybind: "LMB", descriptionMn: "Ойрын зайд хурдан буудлагаар damage өгнө.", tipMn: "Тархалт 10 сумны дараа хамгийн их болдог тул богино цуваагаар буудаж нарийвчлалаа хадгал.", damage: "7 / сум", verified: true },
    { id: "sm-hotfix", name: "Hotfix", nameMn: "Hotfix", type: "Secondary Fire", keybind: "RMB", descriptionMn: "Найз руугаа Hotfix тавьж нэн даруй 65 HP, дараа нь секундэд 25 HP heal хийнэ. Нийт 175 HP heal хийх эсвэл 12 секунд өнгөрөх хүртэл үргэлжилнэ. Мөн эмнэлгийн боодол болон дайсны deployable-ийг hack хийж болно.", tipMn: "Эмнэлгийн боодол, deployable hack хийх нь Hotfix-ийн цэнэг зарцуулдаггүй, зөвхөн 6 секундийн тусдаа cooldown-той.", cooldown: "8 сек (2 цэнэг)", healing: "65 + 25/сек (нийт 175 хүртэл)", duration: "12 сек", range: "17 м", verified: true },
    { id: "sm-cyberspace", name: "Cyberspace", nameMn: "Cyberspace", type: "Ability", keybind: "Ability 1", descriptionMn: "Дэлбэрдэг projectile харвана. Тусмагц 5 метрийн радиустай бүс үүсгэж, дотор нь байгаа дайсанд damage өгөн Weaken болгож, найзуудыг heal хийнэ.", tipMn: "Weaken хийгдсэн дайсан өөрийн damage болон healing-ийн 50%-ийг алддаг.", damage: "40 + 25/сек", healing: "40 + 30/сек", duration: "3 сек", range: "5 м радиус", verified: true },
    { id: "sm-stealth", name: "Stealth", nameMn: "Stealth", type: "Ability", keybind: "Shift", descriptionMn: "Богино хугацаанд харагдахгүй болж хурд нэмэгдэнэ. Stealth-ийн үед ч Hotfix хэрэглэхэд Stealth тасрахгүй, зөвхөн түр харагдана.", duration: "6.5 сек", verified: true },
    { id: "sm-translocator", name: "Translocator", nameMn: "Translocator", type: "Movement", keybind: "E", descriptionMn: "Тэмдэг байрлуулж, дараа нь тэр газар руу шууд шилжинэ. Шилжсэн даруйдаа хурдны нэмэгдэл авна.", cooldown: "7.5 сек", range: "12.25 м", verified: true },
    { id: "sm-emp", name: "EMP", nameMn: "EMP", type: "Ultimate", descriptionMn: "Ойролцоох бүх дайсны шил, ability-г устгаж, одоогийн HP-ийн 20%-тай тэнцэх damage учруулна.", damage: "одоогийн HP-ийн 20%", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "sm-minor-1",
        name: "Life Hack",
        descriptionMn: "EMP ашиглахад ойролцоох бүх найзад Hotfix тавигдана.",
        effectMn: "Ultimate-ээ ашигласнаар бүх багаа нэгэн зэрэг heal хийнэ.",
        verified: true,
      },
      {
        id: "sm-minor-2",
        name: "CTRL ALT ESC",
        descriptionMn: "Translocator ашиглан хагасаас бага HP-тэй үедээ шилжихэд идэвхгүй healing шууд идэвхжинэ.",
        effectMn: "Зугтах бүрдээ эмчлэгдэж эхэлнэ.",
        verified: true,
      },
    ],
    major: [
      {
        id: "sm-major-1",
        name: "Data Packet",
        descriptionMn: "Hotfix-ээр эмнэлгийн боодол hack хийх бүрд Hotfix-ийн үндсэн cooldown 4 секундээр багасна.",
        effectMn: "Боодол hack хийх нь Hotfix-ээ дахин бэлэн болгоно.",
        verified: true,
      },
      {
        id: "sm-major-2",
        name: "Cybersecurity",
        descriptionMn: "Cyberspace-ийн heal нь хагасаас доош HP-тэй найзад 2 дахин нэмэгдэнэ.",
        effectMn: "Эмзэг найзаа Cyberspace-ээр хурдан аврана.",
        verified: true,
      },
    ],
  },
  passives: [
    { id: "sm-passive", name: "Conspirator", nameMn: "Conspirator", descriptionMn: "Бүрэн цэнэглэгдсэн дайсны Ultimate-ийг чамд харуулна.", impactMn: "Season 5-д Opportunist passive-ийг орлосон.", verified: true },
    { id: "sm-passive-sub", name: "Tactician Passive", nameMn: "Tactician Passive", descriptionMn: "Ultimate ашигласны дараа илүүдэл эрчийг хадгалж, дараагийн Ultimate-даа шилжүүлж болдог (Tactician passive).", verified: true },
  ],
};

export const symmetra: Hero = {
  id: "symmetra",
  name: "Symmetra",
  nameMn: "Симметра",
  role: "Damage",
  subRole: "Specialist",
  colorAccent: "#3AA0A0",
  initials: "SY",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "intermediate",
  overview: {
    summaryMn: "Симметра бол Photon Projector-оороо ойрын зайд нэмэгдэх damage учруулж, Teleporter-ээр багаа хурдан авчирдаг hard-light инженер.",
    playstyleMn: "Ойрын зайд Photon Projector-оор дайсанд тасралтгүй өссөн damage өгч, Sentry Turret-ээр талбай хамгаалж, Teleporter-ээр багаа авчирна.",
    strengthsMn: ["Ойрын зайд damage цаг тутам нэмэгддэг", "Teleporter-ээр багийг шууд авчирна", "Photon Barrier нь дайралтыг зогсооно"],
    weaknessesMn: ["Хол зайд маш сул", "Setup хэрэгтэй, шууд тэмцэлд сул"],
    tipsMn: ["Teleporter-ээ дайсанд харагдахгүй газар байрлуул.", "Sentry Turret-ыг эргэлт хийдэг замд тавь."],
  },
  abilities: [
    { id: "sy-projector", name: "Photon Projector", nameMn: "Photon Projector", type: "Primary Fire", keybind: "LMB", descriptionMn: "Ойрын зайд тасралтгүй үргэлжлэх тусам нэмэгдэх damage өгнө.", verified: true },
    { id: "sy-turret", name: "Sentry Turret", nameMn: "Sentry Turret", type: "Ability", keybind: "Shift", descriptionMn: "Жижиг таарлага байрлуулж дайсанд damage, slow өгнө.", verified: true },
    { id: "sy-barrier", name: "Photon Barrier", nameMn: "Photon Barrier", type: "Defensive", keybind: "E", descriptionMn: "Хөдлөх barrier үүсгэнэ.", verified: true },
    { id: "sy-teleporter", name: "Teleporter", nameMn: "Teleporter", type: "Ultimate", descriptionMn: "Хоёр цэгийг холбож, багийн гишүүд шууд шилжих боломжтой болно.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "sy-minor-1",
        name: "Sentry Capacity",
        descriptionMn: "Sentry Turret нэмэлт нэг charge-тэй болно.",
        effectMn: "Илүү олон таарлага байрлуулах боломжтой.",
        verified: true,
      },
      {
        id: "sy-minor-2",
        name: "Perfect Alignment",
        descriptionMn: "Үндсэн буудлагын зай 20%-иар нэмэгдэнэ.",
        effectMn: "Дунд зайд илүү үр дүнтэй болно.",
        verified: true,
      },
    ],
    major: [
      {
        id: "sy-major-1",
        name: "Hovering Barrier",
        descriptionMn: "Teleporter-ийн оронд урагш хөдөлдөг barrier үүсгэж болно; дахин дарвал хурдыг нь slow хийнэ.",
        effectMn: "Teleporter-аа хамгаалалтын хэрэгсэл болгож хувиргаж болно.",
        verified: true,
      },
      {
        id: "sy-major-2",
        name: "Shield Battery",
        descriptionMn: "Teleporter-ээсээ 10 метрийн дотор байхад секундэд 20 shield сэргээнэ.",
        effectMn: "Teleporter-ийнхээ ойролцоо байх нь давуу тал болно.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "sy-passive", name: "Specialist Passive", nameMn: "Specialist Passive", descriptionMn: "Дайсныг устгасны дараа богино хугацаанд сум ачих хурд нэмэгддэг (Specialist passive).", verified: true }],
};

export const torbjorn: Hero = {
  id: "torbjorn",
  name: "Torbjörn",
  nameMn: "Торбьорн",
  role: "Damage",
  subRole: "Specialist",
  colorAccent: "#B5522E",
  initials: "TB",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "beginner",
  beginnerWhyMn: [
    "Turret-аа байрлуулаад орлуулаад л өгдөг — тогтвортой, тодорхой тактиктай.",
    "Overload-оор алдаанаасаа хурдан сэргэх боломжтой.",
    "Нарийн combo эсвэл цаг тохируулга шаарддаггүй.",
  ],
  overview: {
    summaryMn: "Торбьорн бол Turret байрлуулж, Overload-оор өөрийгөө хүчирхэгжүүлдэг инженер, зэвсэг хийгч.",
    playstyleMn: "Rivet Gun-аар дунд зайд damage өгч, Turret-ээ стратегийн байрлалд тавьж, Overload-оор түр зуур хүчирхэгжинэ.",
    strengthsMn: ["Turret нь автоматаар дайсанд damage өгдөг", "Overload-оор хурд, HP нэмэгдэнэ", "Molten Core Ultimate AoE damage өгдөг"],
    weaknessesMn: ["Turret байрлуулах цаг шаарддаг", "Mobility бага"],
    tipsMn: ["Turret-ээ дайсны ирэх чиглэл рүү харуулж бай.", "Overload-оо тулааны эхэнд ашигла."],
  },
  abilities: [
    { id: "tb-rivet", name: "Rivet Gun", nameMn: "Rivet Gun", type: "Primary Fire", keybind: "LMB", descriptionMn: "Дунд зайд damage өгнө, RMB дарж alsad буудна.", verified: true },
    { id: "tb-turret", name: "Turret", nameMn: "Turret", type: "Ability", keybind: "Shift", descriptionMn: "Автомат таарлага байрлуулж дайсанд damage өгнө.", verified: true },
    { id: "tb-overload", name: "Overload", nameMn: "Overload", type: "Ability", keybind: "E", descriptionMn: "Түр зуур HP, хурд, cooldown хурдасгал өгнө.", verified: true },
    { id: "tb-moltencore", name: "Molten Core", nameMn: "Molten Core", type: "Ultimate", descriptionMn: "Хайлсан металл цацруулж AoE damage учруулна.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "tb-minor-1",
        name: "Hammer Time",
        descriptionMn: "Алх зэвсэглэсэн үедээ 20%-иар хурдан хөдөлнө.",
        effectMn: "Ойрын зэвсэгтэйгээ хурдан байрлал сольж болно.",
        verified: true,
      },
      {
        id: "tb-minor-2",
        name: "Pre-Heated",
        descriptionMn: "Molten Core идэвхжихэд Overload автоматаар идэвхждэг.",
        effectMn: "Ultimate-тэйгээ хамт хүчирхэгжинэ.",
        verified: true,
      },
    ],
    major: [
      {
        id: "tb-major-1",
        name: "Anchor Bolts",
        descriptionMn: "Taarlaga шидэх зай 25%-иар нэмэгдэж, хана болон таазанд наалдах боломжтой болно.",
        effectMn: "Taarlaga-аа стратегийн өндөр цэгт байрлуулж болно.",
        verified: true,
      },
      {
        id: "tb-major-2",
        name: "Overloaded Turret",
        descriptionMn: "Overload идэвхжихэд Taarlaga 5 секундэд нэмэлт HP, damage-тэй болно.",
        effectMn: "Taarlaga-аа Ultimate шиг хүчирхэгжүүлнэ.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "tb-passive", name: "Specialist Passive", nameMn: "Specialist Passive", descriptionMn: "Дайсныг устгасны дараа богино хугацаанд сум ачих хурд нэмэгддэг (Specialist passive).", verified: true }],
};

export const venture: Hero = {
  id: "venture",
  name: "Venture",
  nameMn: "Вэнчур",
  role: "Damage",
  subRole: "Flanker",
  colorAccent: "#D98F3A",
  initials: "VN",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "intermediate",
  overview: {
    summaryMn: "Вэнчур бол малталтын машинаараа газар нэвтэрч, гэнэтийн байдлаар дайсны ард гарч ирдэг археологич.",
    playstyleMn: "Drill-ээр газар нэвтэрч байрлал сольж, Burrow-оор дайсны ард гарч, Tectonic Shock-оор AoE damage учруулна.",
    strengthsMn: ["Burrow-оор ханыг нэвтэрч дайсныг гайхшируулна", "Drill Dash-аар нэмэлт damage, mobility", "Ойрын, дунд зайд тохиромжтой"],
    weaknessesMn: ["Burrow ашиглах үед богино хугацаанд эмзэг", "Алсын зайд сул"],
    tipsMn: ["Burrow-оо дайсны ард шууд орход ашигла.", "Drill Dash-аар дайрлагад эсвэл зугтахад ашиглаж болно."],
  },
  abilities: [
    { id: "vn-drill", name: "Drill", nameMn: "Drill", type: "Primary Fire", keybind: "LMB", descriptionMn: "Ойрын-дунд зайд damage өгнө.", verified: true },
    { id: "vn-burrow", name: "Burrow", nameMn: "Burrow", type: "Movement", keybind: "Shift", descriptionMn: "Газар доор нэвтэрч, өөр газраас гарч ирнэ.", verified: true },
    { id: "vn-dash", name: "Drill Dash", nameMn: "Drill Dash", type: "Ability", keybind: "E", descriptionMn: "Урагш дайрч damage учруулна.", verified: true },
    { id: "vn-tectonic", name: "Tectonic Shock", nameMn: "Tectonic Shock", type: "Ultimate", descriptionMn: "Газар цохиж AoE damage, дайсныг унагаана.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "vn-minor-1",
        name: "Deep Burrow",
        descriptionMn: "Газар доор байх үедээ Drill Dash-ийн зай 50%-иар нэмэгдэнэ.",
        effectMn: "Burrow-той хослуулж илүү хол зайд дайрна.",
        verified: true,
      },
      {
        id: "vn-minor-2",
        name: "Excavation Exhilaration",
        descriptionMn: "Tectonic Shock идэвхтэй үедээ бүх ability-ийн cooldown 300%-иар хурдан сэргэнэ.",
        effectMn: "Ultimate-ийнхээ дараа шууд бусад чадвараа дахин ашиглана.",
        verified: true,
      },
    ],
    major: [
      {
        id: "vn-major-1",
        name: "Smart Extender",
        descriptionMn: "Тусгай товч дарж алсын зэвсгийн дээд зайг 4 секундэд 100%-иар нэмэгдүүлнэ.",
        effectMn: "Алсын зайн довтолгоог түр зуур хүчирхэгжүүлнэ.",
        verified: true,
      },
      {
        id: "vn-major-2",
        name: "Covered in Dirt",
        descriptionMn: "Ойрын довтолгоогоор damage өгөх нь дээд тал нь 30 хамгаалалтын shield өгдөг.",
        effectMn: "Ойрын довтолгоо хийх тусам илүү тэсвэртэй болно.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "vn-passive", name: "Flanker Passive", nameMn: "Flanker Passive", descriptionMn: "HP-ийн боодол ашиглахад илүү их HP сэргээдэг (Flanker passive).", verified: true }],
};

// ---------------------------------------------------------------------------
// Support
// ---------------------------------------------------------------------------

export const brigitte: Hero = {
  id: "brigitte",
  name: "Brigitte",
  nameMn: "Бригитта",
  role: "Support",
  subRole: "Survivor",
  colorAccent: "#C97A5A",
  initials: "BG",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "beginner",
  beginnerWhyMn: [
    "Ойрын зайн энгийн цохилт, нарийн aim шаардахгүй.",
    "Shield Bash, Repair Pack-ийн тодорхой, шулуун зориулалттай.",
    "Хувийн HP өндөр, Barrier Shield-тэй тул амьд үлдэхэд хялбар.",
  ],
  overview: {
    summaryMn: "Бригитта бол Rocket Flail-аараа ойрын зайд тулалдаж, Repair Pack-аар heal хийдэг, тулааны support баатар.",
    playstyleMn: "Ойрын зайд Flail-аараа тулалдаж, Repair Pack-аар эмзэг healer-ийг heal хийж, Shield Bash-аар дайсныг stun хийнэ.",
    strengthsMn: ["Ойрын зайд эсрэг flanker-т маш хүчтэй", "Repair Pack нь healing, HP хоёуланг өгнө", "Rally Ultimate нь багийг хамгаалдаг"],
    weaknessesMn: ["Хол зайд сул", "Барьер байхгүй, зөвхөн Shield Bash-тай"],
    tipsMn: ["Repair Pack-аа Ultimate-той баатарт өг.", "Shield Bash-аар flanker-ийг саатуулаад дуусга."],
  },
  abilities: [
    { id: "bg-flail", name: "Rocket Flail", nameMn: "Rocket Flail", type: "Primary Fire", keybind: "LMB", descriptionMn: "Ойрын зайд цохиж damage өгнө.", verified: true },
    { id: "bg-pack", name: "Repair Pack", nameMn: "Repair Pack", type: "Ability", keybind: "RMB", descriptionMn: "Багийн гишүүнд шидэж healing, нэмэлт HP өгнө.", verified: true },
    { id: "bg-bash", name: "Shield Bash", nameMn: "Shield Bash", type: "Ability", keybind: "Shift", descriptionMn: "Урагш дайрч дайсныг stun хийнэ.", verified: true },
    { id: "bg-shield", name: "Barrier Shield", nameMn: "Barrier Shield", type: "Defensive", keybind: "E", descriptionMn: "Жижиг barrier барина.", verified: true },
    { id: "bg-rally", name: "Rally", nameMn: "Rally", type: "Ultimate", descriptionMn: "Багийн гишүүдэд нэмэлт HP, хурд өгч довтолгоог хөнгөвчилнө.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "bg-minor-1",
        name: "Combat Medic",
        descriptionMn: "Дайсан руу ойрын довтолгоо хийх нь Repair Pack-ийн cooldown-ийг 0.75 секундээр багасгана.",
        effectMn: "Тулалдах тусам healing-ээ хурдан авна.",
        verified: true,
      },
      {
        id: "bg-minor-2",
        name: "Morale Boost",
        descriptionMn: "Whip Shot-оор идэвхжүүлсэн Inspire 3 секундээр уртасна.",
        effectMn: "Inspire-аа Whip Shot-той хослуулан удаан барина.",
        verified: true,
      },
    ],
    major: [
      {
        id: "bg-major-1",
        name: "Inspiring Strike",
        descriptionMn: "Shield Bash хийхэд 2 секундэд 30% хурд авч, Shield Bash-ээр идэвхжсэн Inspire шууд heal хийдэг.",
        effectMn: "Shield Bash-аа довтолгоо, healing хоёуланд нь ашиглана.",
        verified: true,
      },
      {
        id: "bg-major-2",
        name: "Whiplash",
        descriptionMn: "Whip Shot-ийн knockback дайсныг хананд цохивол 60 нэмэлт damage өгдөг.",
        effectMn: "Whip Shot-оо байрлал ашиглан илүү аюултай болгоно.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "bg-passive", name: "Survivor Passive", nameMn: "Survivor Passive", descriptionMn: "Movement ability ашиглах бүрд идэвхгүй HP сэргээлт идэвхждэг (Survivor passive).", verified: true }],
};

export const illari: Hero = {
  id: "illari",
  name: "Illari",
  nameMn: "Иллари",
  role: "Support",
  subRole: "Survivor",
  colorAccent: "#D9A03A",
  initials: "IL",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "intermediate",
  overview: {
    summaryMn: "Иллари бол наран энергиэр heal хийдэг, Outburst-аар агаарт үсэрдэг перугийн support баатар.",
    playstyleMn: "Solar Rifle-ээр heal хийх эсвэл дайсанд damage өгч, Healing Pylon-оор талбайн healing тавьж, Outburst-аар давуу байрлал эзэлнэ.",
    strengthsMn: ["Healing Pylon-оор идэвхгүй healing тасралтгүй өгнө", "Outburst-аар давхар байрлал эзэлдэг", "Captive Sun Ultimate нь маш их damage өгдөг"],
    weaknessesMn: ["Ойрын зайд эмзэг", "Pylon устгагдвал эмчилгээгүй болно"],
    tipsMn: ["Healing Pylon-оо аюулгүй өндөрлөг газар байрлуул.", "Outburst-аар давуу байрлал эзэлж дараа нь буудна."],
  },
  abilities: [
    { id: "il-rifle", name: "Solar Rifle", nameMn: "Solar Rifle", type: "Primary Fire", keybind: "LMB / RMB", descriptionMn: "Дайсанд damage (LMB) эсвэл багт healing (RMB) өгнө.", verified: true },
    { id: "il-pylon", name: "Healing Pylon", nameMn: "Healing Pylon", type: "Ability", keybind: "Shift", descriptionMn: "Талбайд байрлуулж ойролцоох багийн гишүүдийг тасралтгүй heal хийнэ.", verified: true },
    { id: "il-outburst", name: "Outburst", nameMn: "Outburst", type: "Movement", keybind: "E", descriptionMn: "Хүчтэй үсрэлт хийж давуу байрлал эзэлнэ.", verified: true },
    { id: "il-sun", name: "Captive Sun", nameMn: "Captive Sun", type: "Ultimate", descriptionMn: "Наранлаг энергийн цохилт хийж их damage учруулна.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "il-minor-1",
        name: "Rapid Construction",
        descriptionMn: "Healing Pylon 300%-иар хурдан баригдаж, cooldown нь 2 секундээр багасна.",
        effectMn: "Pylon-оо илүү хурдан дахин байрлуулна.",
        verified: true,
      },
      {
        id: "il-minor-2",
        name: "Summer Solstice",
        descriptionMn: "Captive Sun идэвхжихэд 20% нислэг, attack speed авч, нислэгийн хугацаа 3 секундээр уртасна.",
        effectMn: "Ultimate-ийн дараа илүү идэвхтэй тоглох боломжтой.",
        verified: true,
      },
    ],
    major: [
      {
        id: "il-major-1",
        name: "Solar Flare",
        descriptionMn: "Healing-ийн цацраг идэвхтэй үед Secondary Fire дарж өмнөө байгаа бүх хамтрагчийг 100-аар heal хийнэ.",
        effectMn: "Нэг зэрэг олон хамтрагчийг heal хийнэ.",
        verified: true,
      },
      {
        id: "il-major-2",
        name: "Sunburn",
        descriptionMn: "Outburst цохисон дайсныг 3 секундэд 50 нэмэлт гэмтэлтэйгээр шатаана.",
        effectMn: "Outburst-оо CC-ээс гадна DoT damage-тэй болгоно.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "il-passive", name: "Survivor Passive", nameMn: "Survivor Passive", descriptionMn: "Movement ability ашиглах бүрд идэвхгүй HP сэргээлт идэвхждэг (Survivor passive).", verified: true }],
};

export const juno: Hero = {
  id: "juno",
  name: "Juno",
  nameMn: "Жуно",
  role: "Support",
  subRole: "Survivor",
  colorAccent: "#7AC9D9",
  initials: "JN",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "intermediate",
  overview: {
    summaryMn: "Жуно бол Mars-аас ирсэн, Pulsar Torpedoes-оор heal хийж, Glide Boost-оор багаа хурдасгадаг support баатар.",
    playstyleMn: "Torpedoes-оор дайсанд damage эсвэл багт healing, Hyper Ring-ээр багийг хурдасгаж, Pulsar Barrage Ultimate-ээр damage учруулна.",
    strengthsMn: ["Torpedoes нь эмзэг зорилтыг дагадаг", "Hyper Ring-ээр багийг хурдасгана", "Glide Boost-оор өөрөө маш их mobility-тэй"],
    weaknessesMn: ["HP дунд зэрэг", "Barrage Ultimate дангаараа dps сул"],
    tipsMn: ["Hyper Ring-ээ давшилт хийхэд урьдчилан тавь.", "Glide Boost-оор давуу байрлал эзэл."],
  },
  abilities: [
    { id: "jn-torpedoes", name: "Pulsar Torpedoes", nameMn: "Pulsar Torpedoes", type: "Primary Fire", keybind: "LMB", descriptionMn: "Дайсныг дагадаг сум, healing горимд шилжиж болно.", verified: true },
    { id: "jn-ring", name: "Hyper Ring", nameMn: "Hyper Ring", type: "Ability", keybind: "Shift", descriptionMn: "Цагираг байрлуулж дундуур нь нэвтэрсэн багийн гишүүдийг хурдасгана.", verified: true },
    { id: "jn-glide", name: "Glide Boost", nameMn: "Glide Boost", type: "Movement", keybind: "Space", descriptionMn: "Агаарт хөвж чөлөөтэй нисэнэ.", verified: true },
    { id: "jn-orbital", name: "Orbital Ray", nameMn: "Orbital Ray", type: "Ultimate", descriptionMn: "Багийн гишүүдэд healing, хурд, дээшлэх чадвар өгдөг цацраг байрлуулна.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "jn-minor-1",
        name: "Familiar Vitals",
        descriptionMn: "Pulsar Torpedoes хамтрагч руу 35%-иар хурдан чиглэдэг.",
        effectMn: "Healing-ээ илүү хурдан хүргэнэ.",
        verified: true,
      },
      {
        id: "jn-minor-2",
        name: "Locked On",
        descriptionMn: "Pulsar Torpedoes тусах дайсан бүрд cooldown 1 секундээр багасна.",
        effectMn: "Довтолгоо хийх тусам healing-ийн сумаа хурдан сэргээнэ.",
        verified: true,
      },
    ],
    major: [
      {
        id: "jn-major-1",
        name: "Lift Off",
        descriptionMn: "Martian Overboots гурав дахин үсрэх боломжтой болно.",
        effectMn: "Агаарт илүү өндөрт гарна.",
        verified: true,
      },
      {
        id: "jn-major-2",
        name: "Faster Blaster",
        descriptionMn: "Glide Boost идэвхтэй үедээ буу секундэд 22 удаа буудна.",
        effectMn: "Нисэх үедээ довтолгоо, healing-ээ хурдасгана.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "jn-passive", name: "Survivor Passive", nameMn: "Survivor Passive", descriptionMn: "Movement ability ашиглах бүрд идэвхгүй HP сэргээлт идэвхждэг (Survivor passive).", verified: true }],
};

export const lifeweaver: Hero = {
  id: "lifeweaver",
  name: "Lifeweaver",
  nameMn: "Лайфуивэр",
  role: "Support",
  subRole: "Medic",
  colorAccent: "#6EA05A",
  initials: "LW",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "advanced",
  overview: {
    summaryMn: "Лайфуивэр бол ургамлын энергиэр heal хийж, Life Grip-ээр багийн гишүүнийг аюулаас татан авчирдаг support баатар.",
    playstyleMn: "Healing Blossom-оор heal хийн, Petal Platform-оор давуу байрлал бий болгож, Life Grip-ээр эмзэг healer-ийг аврана.",
    strengthsMn: ["Life Grip-ээр багийн гишүүнийг шууд аврах боломжтой", "Petal Platform-оор газар үүсгэж давуу байрлал өгнө", "Thorn Volley-гоор дайсанд damage өгдөг"],
    weaknessesMn: ["HP бага", "Healing-ийн хэмжээ дунд зэрэг"],
    tipsMn: ["Life Grip-ийг устгагдах гэж буй эмзэг баатар руу ашигла.", "Petal Platform-оор давуу байрлал бий болго."],
  },
  abilities: [
    { id: "lw-blossom", name: "Healing Blossom", nameMn: "Healing Blossom", type: "Primary Fire", keybind: "LMB", descriptionMn: "Багийн гишүүнийг heal хийнэ.", verified: true },
    { id: "lw-thorn", name: "Thorn Volley", nameMn: "Thorn Volley", type: "Secondary Fire", keybind: "RMB", descriptionMn: "Дайсанд damage өгнө.", verified: true },
    { id: "lw-platform", name: "Petal Platform", nameMn: "Petal Platform", type: "Ability", keybind: "Shift", descriptionMn: "Хөвөгч ургамлын тавцан үүсгэж, дээшлэх боломж олгоно.", verified: true },
    { id: "lw-grip", name: "Life Grip", nameMn: "Life Grip", type: "Ability", keybind: "E", descriptionMn: "Багийн гишүүнийг өөр рүүгээ аюулгүй газар татан авчирна.", verified: true },
    { id: "lw-treeoflife", name: "Tree of Life", nameMn: "Tree of Life", type: "Ultimate", descriptionMn: "Мод байрлуулж, ойролцоох багийн гишүүдийг тасралтгүй heal хийнэ.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "lw-minor-1",
        name: "Petal Protection",
        descriptionMn: "Petal Platform дээр байх хамтрагчид секундэд 20 HP сэргээнэ.",
        effectMn: "Тавцангаа healing-ийн хэрэгсэл болгоно.",
        verified: true,
      },
      {
        id: "lw-minor-2",
        name: "Dashing Escape",
        descriptionMn: "Rejuvenating Dash-ийн зай 30%-иар нэмэгдэнэ.",
        effectMn: "Зугтах зайгаа нэмэгдүүлнэ.",
        verified: true,
      },
    ],
    major: [
      {
        id: "lw-major-1",
        name: "Sow the Seed",
        descriptionMn: "Healing Blossom-той үедээ ойрын довтолгоо хийвэл үр шидэж, хамтрагч түүнийг аваад overhealth, хурд авна.",
        effectMn: "Healing-ээ нэмэлт бонустай болгоно.",
        verified: true,
      },
      {
        id: "lw-major-2",
        name: "Superbloom",
        descriptionMn: "Хангалттай тооны сүрэл 2.5 секундийн дотор наалдвал 40 нэмэлт damage-тэй дэлбэрдэг.",
        effectMn: "Damage өгөх чадвараа нэмэгдүүлнэ.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "lw-passive", name: "Medic Passive", nameMn: "Medic Passive", descriptionMn: "Зэвсгээрээ heal хийхэд өөрийгөө мөн heal хийдэг (Medic passive).", verified: true }],
};

export const zenyatta: Hero = {
  id: "zenyatta",
  name: "Zenyatta",
  nameMn: "Зэньятта",
  role: "Support",
  subRole: "Tactician",
  colorAccent: "#D9973A",
  initials: "ZY",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "advanced",
  overview: {
    summaryMn: "Зэньятта бол Orb of Harmony-гоор heal хийж, Orb of Discord-оор дайсанд нэмэгдэл damage учруулдаг омник лам.",
    playstyleMn: "Хол зайд healing, damage-ийн орбуудаа тавьж, Transcendence Ultimate-ээр group wipe-ээс сэргийлнэ.",
    strengthsMn: ["Orb of Discord нь дайсанд нэмэгдэл damage учруулдаг", "Transcendence нь бүхэл багийн healing, damage-аас хамгаалдаг", "Хол зайн healing, damage хоёуланд сайн"],
    weaknessesMn: ["HP бага, mobility байхгүй", "Ойрын зайд эмзэг"],
    tipsMn: ["Orb of Discord-оо танк дээр байнга барь.", "Transcendence-ийг group wipe ирэхээс өмнө ашигла."],
  },
  abilities: [
    { id: "zy-sphere", name: "Orb of Destruction", nameMn: "Orb of Destruction", type: "Primary Fire", keybind: "LMB", descriptionMn: "Энергийн бөмбөлөг харваж damage өгнө.", verified: true },
    { id: "zy-harmony", name: "Orb of Harmony", nameMn: "Orb of Harmony", type: "Ability", keybind: "Shift", descriptionMn: "Багийн гишүүнд тасралтгүй healing тавина.", verified: true },
    { id: "zy-discord", name: "Orb of Discord", nameMn: "Orb of Discord", type: "Ability", keybind: "E", descriptionMn: "Дайсанд нэмэгдэл damage авдаг нөлөө тавина.", verified: true },
    { id: "zy-transcendence", name: "Transcendence", nameMn: "Transcendence", type: "Ultimate", descriptionMn: "Тодорхой хугацаанд бүх damage-аас хамгаалагдаж, ойролцоох багийг тасралтгүй heal хийнэ.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "zy-minor-1",
        name: "Discordant Repair",
        descriptionMn: "Discord тавьсан дайсны эсрэг 10% lifesteal авна.",
        effectMn: "Discord тавьсан дайсныг довтлох тусам өөрийгөө heal хийнэ.",
        verified: true,
      },
      {
        id: "zy-minor-2",
        name: "Ascendance",
        descriptionMn: "Double Jump-ийг дараад барихад 3 секунд хүртэл агаарт хөвнө.",
        effectMn: "Байрлалаа илүү сайн хянана.",
        verified: true,
      },
    ],
    major: [
      {
        id: "zy-major-1",
        name: "Focused Destruction",
        descriptionMn: "Secondary Fire 20%-иар хурдан цэнэглэгдэж, нэг нэмэлт орб хадгалж болно.",
        effectMn: "Damage-ийн орбоо илүү олон удаа ашиглана.",
        verified: true,
      },
      {
        id: "zy-major-2",
        name: "Dual Harmony",
        descriptionMn: "Хоёр дахь Harmony Orb-той болох боловч тус бүр 70% үр дүнтэй heal хийдэг.",
        effectMn: "Хоёр хамтрагчийг зэрэг heal хийх боломжтой болно.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "zy-passive", name: "Tactician Passive", nameMn: "Tactician Passive", descriptionMn: "Ultimate ашигласны дараа илүүдэл эрч хадгалагдаж дараагийн руу шилждэг (Tactician passive).", verified: true }],
};

export const wuyang: Hero = {
  id: "wuyang",
  name: "Wuyang",
  nameMn: "Ву Ян",
  role: "Support",
  subRole: "Survivor",
  colorAccent: "#3A9E6E",
  initials: "WY",
  dataComplete: true,
  lastUpdated: UPDATED,
  difficulty: "intermediate",
  overview: {
    summaryMn: "Ву Ян бол усны эрчийг удирддаг, Xuanwu Staff-аараа heal хийж, damage хоёуланг өгдөг Wuxing их сургуулийн оюутан support баатар.",
    playstyleMn: "Xuanwu Staff-аар усны бөмбөлөг харваж, Guardian Wave-ээр healing нэмэгдүүлэн дайсныг knockback хийн, Rushing Torrent-ээр давхар байрлал эзэлнэ.",
    strengthsMn: ["Guardian Wave нь healing болон CC хоёуланг өгнө", "Rushing Torrent-ээр давуу байрлал эзэлнэ", "Tidal Blast Ultimate healing, CC хоёуланг хослуулна"],
    weaknessesMn: ["Ойрын зайд эмзэг", "Ultimate-ийн duration богино"],
    tipsMn: ["Guardian Wave-ээ давшилтын өмнө ашигла.", "Tidal Blast-аа зайлсхийх боломжгүй мөчид идэвхжүүл."],
  },
  abilities: [
    { id: "wy-staff", name: "Xuanwu Staff", nameMn: "Xuanwu Staff", type: "Primary Fire", keybind: "LMB", descriptionMn: "Усны damage-тэй бөмбөлөг харвана.", verified: true },
    { id: "wy-guardian", name: "Guardian Wave", nameMn: "Guardian Wave", type: "Ability", keybind: "Shift", descriptionMn: "Урагш усны долгион илгээж, багийн healing-ийг нэмэгдүүлж, дайсныг knockback хийнэ.", verified: true },
    { id: "wy-torrent", name: "Rushing Torrent", nameMn: "Rushing Torrent", type: "Movement", keybind: "E", descriptionMn: "Усан долгион унаж хурд, өндөрлөгт хүрэх чадвар нэмэгдэнэ.", verified: true },
    { id: "wy-tidal", name: "Tidal Blast", nameMn: "Tidal Blast", type: "Ultimate", descriptionMn: "Багийн гишүүнийг устай хамгаалж, дэлбэрэлтэд дайсныг унагаан их healing өгнө.", verified: true },
  ],
  perks: {
    minor: [
      {
        id: "wy-minor-1",
        name: "Overflow",
        descriptionMn: "Rushing Torrent идэвхжихэд 10 сум, 50% healing-ийн нөөц авна.",
        effectMn: "Torrent-оо ашиглах бүрдээ нөөцөө нөхнө.",
        verified: true,
      },
      {
        id: "wy-minor-2",
        name: "Balance",
        descriptionMn: "Усны бөмбөлгөөр damage өгөх нь Restorative Stream-ийн идэвхгүй healing-ийг 2 секундэд 30%-иар нэмэгдүүлдэг.",
        effectMn: "Довтлох тусам healing өгөх чадвар нэмэгдэнэ.",
        verified: true,
      },
    ],
    major: [
      {
        id: "wy-major-1",
        name: "Ebb and Flow",
        descriptionMn: "Guardian Wave эхлэсэн цэгээ рүүгээ буцаж ирдэг.",
        effectMn: "Guardian Wave-ээ хоёр удаа ашигласантай адил үр дүнтэй болгоно.",
        verified: true,
      },
      {
        id: "wy-major-2",
        name: "Falling Rain",
        descriptionMn: "Гурван усны бөмбөлгийг зэрэг удирдах боломжтой болох боловч тус бүр 60%-иар бага damage, 25%-иар бага дэлбэрэлттэй.",
        effectMn: "Олон зорилт руу зэрэг довтлох боломжтой.",
        verified: true,
      },
    ],
  },
  passives: [{ id: "wy-passive", name: "Survivor Passive", nameMn: "Survivor Passive", descriptionMn: "Movement ability ашиглах бүрд идэвхгүй HP сэргээлт идэвхждэг (Survivor passive).", verified: true }],
};

export const batchTwoHeroes: Hero[] = [
  doomfist, hazard, junkerQueen, mauga, orisa, sigma, wreckingBall,
  bastion, cassidy, echo, freja, hanzo, junkrat, mei, pharah, sojourn, sombra, symmetra, torbjorn, venture,
  brigitte, illari, juno, lifeweaver, zenyatta, wuyang,
];
