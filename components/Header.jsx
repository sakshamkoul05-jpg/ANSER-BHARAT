import Link from "next/link";
import { site } from "@/lib/site-data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-forest-100/70 bg-[#fcfaf4]/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-700 text-sm font-semibold text-white shadow-soft">
              AB
            </div>
            <div>
              <div className="text-sm font-semibold tracking-[0.18em] text-forest-800">
                {site.name}
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-sand-700">
                Peaceful growth
              </div>
            </div>
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-forest-700 px-4 py-2 text-sm font-medium text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-forest-800"
          >
            Enquire
          </Link>
        </div>
        <nav className="mt-4 flex gap-3 overflow-x-auto pb-1 lg:hidden">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-forest-100 bg-white px-4 py-2 text-sm text-forest-700 shadow-sm transition hover:border-forest-200 hover:text-forest-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <nav className="mt-4 hidden items-center gap-6 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-forest-700 transition hover:text-forest-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
