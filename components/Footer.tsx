import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line/60 bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-display text-lg font-semibold text-paper">
              Overwatch <span className="text-ember">Mongolia</span>
            </div>
            <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-fog">
              Overwatch-ийн бүх баатар, чадвар, Perk болон Passive-ийн мэдээллийг
              Монгол хэлээр тайлбарласан лавлах сан.
            </p>
          </div>
          <div>
            <div className="font-body text-sm font-semibold text-paper">Холбоос</div>
            <ul className="mt-3 space-y-2 font-body text-sm text-fog">
              <li><Link className="hover:text-ember" href="/updates">Season 5 шинэчлэл</Link></li>
              <li><Link className="hover:text-ember" href="/basics">Тоглоомын үндэс</Link></li>
              <li><Link className="hover:text-ember" href="/heroes">Бүх баатар</Link></li>
              <li><Link className="hover:text-ember" href="/heroes?difficulty=beginner">Эхлэгчдэд тохиромжтой</Link></li>
              <li><Link className="hover:text-ember" href="/game-modes">Game Mode-ууд</Link></li>
              <li><Link className="hover:text-ember" href="/compare">Баатар харьцуулах</Link></li>
              <li><Link className="hover:text-ember" href="/roles">Role-ууд</Link></li>
              <li><Link className="hover:text-ember" href="/about">Төслийн тухай</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-body text-sm font-semibold text-paper">Мэдээлэл</div>
            <p className="mt-3 font-body text-sm leading-relaxed text-fog">
              Энэ бол албан бус, шүтэн бишрэгчдийн хийсэн лавлах сайт. Overwatch болон
              холбогдох бүх нэр, зураг нь Blizzard Entertainment-ийн өмч бөгөөд зөвхөн
              боловсролын зорилгоор дурдагдав.
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-line/60 pt-6 font-body text-xs text-fog">
          © {new Date().getFullYear()} Overwatch Mongolia — албан бус шүтэн бишрэгчдийн төсөл.
        </div>
      </div>
    </footer>
  );
}
