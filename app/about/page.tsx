import { heroCount } from "@/data/heroes";

export const metadata = { title: "Тухай — Overwatch Mongolia" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:px-8">
      <h1 className="font-display text-3xl font-bold text-paper sm:text-4xl">Төслийн тухай</h1>

      <div className="mt-8 space-y-6 font-body text-sm leading-relaxed text-mist">
        <p>
          Overwatch Mongolia бол Overwatch тоглоомын бүх баатар, тэдний чадвар, Perk,
          Passive, role болон sub-role-ийн мэдээллийг Монгол хэлээр тайлбарласан,
          шүтэн бишрэгчдийн хийсэн албан бус лавлах сайт юм.
        </p>
        <p>
          Одоогийн байдлаар нийт {heroCount} баатрын бүрэн дэлгэрэнгүй мэдээлэл
          (чадвар, Minor/Major Perk, Passive, тойм, зөвлөгөө) сайтад бэлэн болсон
          бөгөөд үүнд 2026 оны эхэн үеийн шинэ баатрууд (Domina, Emre, Mizuki, Anran,
          Jetpack Cat), мөн оны туршид нэмэгдсэн Sierra, Shion, Vendetta, D.Mon зэрэг
          хамгийн сүүлийн үеийн баатрууд ч багтсан.
        </p>
        <p>
          Бид тоглоомын статистик өгөгдөл дуурайлган зохиохгүй. Тоон үзүүлэлт
          (гэмтэл, cooldown, эмчилгээ гэх мэт) баталгаажаагүй тохиолдолд хуудсан дээр
          харагдахгүй бөгөөд харин чадварын үйлдэл, стратегийн тайлбарыг Монгол хэлээр
          дэлгэрэнгүй өгсөн болно.
        </p>
        <p>
          Overwatch, түүний бүх баатрын нэр, дүрс болон холбогдох контент нь Blizzard
          Entertainment-ийн өмч бөгөөд энэхүү сайт нь Blizzard-тай ямар нэгэн байдлаар
          холбоогүй, зөвхөн Монгол хэл дээрх боловсролын лавлах материал болгох
          зорилготой.
        </p>
      </div>
    </div>
  );
}
