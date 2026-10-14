# Overwatch Mongolia

Overwatch-ийн бүх баатрыг Монгол хэлээр тайлбарласан лавлах сайт. Next.js (App
Router) + TypeScript + Tailwind CSS + Framer Motion дээр баригдсан.

## Ажиллуулах

Энэ төслийг **өөрийн компьютер дээрээ** ажиллуулна уу (энд, Claude-ийн
сервер дээр интернэт/сүлжээ хаалттай тул `npm install` хийх боломжгүй байсан
тул код зөвхөн энд бичигдсэн, туршигдаагүй болно):

```bash
npm install
npm run dev
```

Дараа нь [http://localhost:3000](http://localhost:3000) хаягаар нээнэ.

Хэрэв алдаа гарвал эхлээд `node -v` (Node 18.18+ эсвэл 20+ шаардлагатай) шалгаад,
дараа нь `npm install` дахин ажиллуулж, алдааны текстийг надад илгээгээрэй — засаж
өгье.

## Одоогийн байдал — бүрэн болсон (53/53 баатар)

- ✅ Бүтэн Next.js төслийн бүтэц, Tailwind тохиргоо, компонентууд
- ✅ Нүүр хуудас, "Бүх баатар" хуудас (хайлт + шүүлтүүр), баатар тус бүрийн
  дэлгэрэнгүй хуудас (`/heroes/[slug]`), Role-ийн хуудас, Тухай хуудас
- ✅ Нийт **53 баатрын** бүрэн дэлгэрэнгүй мэдээлэл: бүх Ability, Minor/Major
  Perk, Hero Passive, Role/Sub-role Passive, тойм, давуу/сул тал, зөвлөгөө —
  бүгд Монгол хэлээр. Үүнд:
  - **Stage 1** (гар аргаар мэдэгдэж байсан сонгодог 18 баатар): Reinhardt,
    Winston, D.Va, Zarya, Roadhog, Ramattra, Tracer, Genji, Widowmaker,
    Soldier: 76, Reaper, Ashe, Mercy, Ana, Lúcio, Moira, Baptiste, Kiriko
  - **Stage 2** (үлдсэн сонгодог 26 баатар): Doomfist, Hazard, Junker Queen,
    Mauga, Orisa, Sigma, Wrecking Ball, Bastion, Cassidy, Echo, Freja, Hanzo,
    Junkrat, Mei, Pharah, Sojourn, Sombra, Symmetra, Torbjörn, Venture,
    Brigitte, Illari, Juno, Lifeweaver, Zenyatta, Wuyang
  - **Stage 3** (2026 онд нэмэгдсэн 9 шинэ баатар, вэб хайлтаар баталгаажуулсан
    албан ёсны kit-ийн дагуу): Domina, Emre, Mizuki, Anran, Jetpack Cat, D.Mon,
    Sierra, Shion, Vendetta
- ⏳ Зураг/дүрс: Blizzard-ийн албан ёсны зураг зүйл нь зохиогчийн эрхтэй тул
  энд шууд ашиглаагүй болно (даалгаврын §9-д зааснаар). Оронд нь өнгөөр
  ялгагдсан, эвдрэхгүй fallback icon систем (`HeroPortrait.tsx`) ашигласан.
  Хэрэв та лицензтэй зураг нэмэх бол `/public/images/heroes/{slug}.jpg`-д
  байрлуулаад `HeroPortrait`-ийг `<Image>`-тэй сольж болно.

## Мэдэгдэж буй хязгаарлалт / дараагийн сайжруулалт (санал)

1. Perks: бүх 53 баатар одоо жинхэнэ тоглоомын дагуу **2 Minor + 2 Major** Perk-тэй
   (нийт 4), эх сурвалж: dotesports.com "All hero Perks in Overwatch" (2026-09-13
   өдрийн шинэчлэлт). Jetpack Cat-ийн "Purr" чадварын тодорхой нөлөө Blizzard-аас
   бүрэн тодорхойгүй тул `verified: false` гэж үлдээсэн.
2. Font: гарчиг (`--font-display`) одоо **Russo One** ашигладаг — Overwatch-ийн
   өөрийнх нь фонт эрхийн шалтгаанаар ашиглагдахгүй тул үүнтэй ойролцоо, Cyrillic
   (Монгол) үсэг дэмждэг тод, ирээдүйн загварын Google Font сонгосон.
3. Favorites систем (localStorage) нэмэх — `/heroes` хуудсанд.
4. Илүү нарийвчилсан хайлт (ability/perk нэрээр хайх) нэмэх.
5. Хэрэв та лицензтэй эсвэл өөрийн зурсан hero art/icon-той бол
   `/public/images` болон `/public/icons`-д нэмээд холбоно.

## Файлын бүтэц

```
app/            — Next.js App Router хуудсууд
  page.tsx            — Нүүр
  heroes/page.tsx      — Бүх баатар
  heroes/[slug]/page.tsx — Баатрын дэлгэрэнгүй
  roles/page.tsx       — Role-ууд
  about/page.tsx       — Тухай
components/     — Дахин ашиглагдах UI компонентууд
data/           — Баатар, Role, Sub-role-ийн бүтэцлэгдсэн өгөгдөл (TypeScript)
lib/            — Туслах функцууд
public/         — Статик файл (зураг/icon нэмэх газар)
```

## Өгөгдлийн үнэн зөв байдлын талаар

`data/heroes.ts` доторх `verified: true/false` талбар нь тухайн Ability/Perk-ийн
тайлбарыг эх сурвалжтай нийцүүлж баталгаажуулсан эсэхийг заана. Тоон
үзүүлэлт (гэмтэл, cooldown гэх мэт) баталгаажаагүй тохиолдолд UI дээр
харагдахгүй — зохиомол тоо гаргахгүй байх зарчмыг баримталсан.

## UI / Animation шинэчлэл

- **Hero emblem**: баатар бүр өөрийн гэсэн emblem-тэй (`components/HeroEmblem.tsx`) — role-оор (Tank=shield,
  Damage=diamond, Support=circle) хэлбэрлэсэн frame, hero id-аас үүсгэсэн цагираг/нум/tick, мөн баатарт
  тохирсон дүрс (`lib/heroVisuals.ts`). Бүгд эх зохиол — Blizzard-ийн зураг ашиглаагүй.
- **Ability animation** (`components/AbilityDemo.tsx`): чадвар бүр өөрийн төрлөөрөө (Projectile, Beam, Dash, Barrier,
  Heal, AoE/Knockback, Trap, Buff, Turret, Ultimate) давтагдах схем animation-тай. Төрлийг `lib/demoKind.ts`
  автоматаар тодорхойлно. Энэ нь схем дүрслэл, бодит gameplay бичлэг биш.
- Нүүр хуудсанд orbit carousel, count-up статистик, interactive "Чадвар хэрхэн ажилладаг вэ?" хэсэг.
- Framer Motion: page transition, card hover, animated filter (layout), tab underline, perk accordion.
  `prefers-reduced-motion` үед animation унтардаг.
- Орчуулга: gaming нэр томьёог (damage, heal, barrier, knockback, HP, reload, cooldown...) Англиар үлдээж,
  яриа хэллэгт ойртуулсан. Дахин тааруулах бол `/home/claude/glossary.py` шиг rule-уудыг засаж болно.

## Adding your own hero images — TWO independent slots

You can drop in real images without touching any code. There are two separate
folders, because the mini icon shown while browsing and the bigger image shown
on a hero's own page can be different images:

| Folder | Used for | Variant | Size |
|---|---|---|---|
| `public/images/heroes/icons/` | Hero grid, search results, filter cards, homepage orbit ring | `HeroPhoto variant="card"` | 256x256px |
| `public/images/heroes/full/` | The hero's own detail-page header, homepage carousel's centre hero | `HeroPhoto variant="bust"` | 256x256 or larger, square |

Steps:

1. Filename = hero id in both folders, e.g. `icons/tracer.jpg` and/or `full/tracer.jpg`.
   The exact id for every hero is listed in `public/images/heroes/icons/README.md`
   and `public/images/heroes/full/README.md`.
2. Format: `.jpg` is tried first, then `.jpeg`, `.png`, `.webp`.
3. The two slots are fully independent — add only an icon, only a full image, both,
   or neither for any given hero. Whatever's missing falls back automatically to the
   generated artwork (`HeroBust` / `HeroPortrait` / `HeroEmblem`), so nothing ever
   breaks or shows blank.
4. This repo does not ship with or link to Blizzard's official art — only add images
   you actually have the rights to use.
