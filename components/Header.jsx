import Link from "next/link";
import { site } from "@/lib/site-data";
import BrandLogo from "@/components/BrandLogo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-[rgba(252,249,241,0.84)] backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <BrandLogo />
          <Link
            href="/contact"
            className="rounded-full bg-saffron-600 px-4 py-2 text-sm font-medium text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-saffron-700"
          >
            Enquire
          </Link>
        </div>
        <nav className="mt-4 flex gap-3 overflow-x-auto pb-1 lg:hidden">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-forest-100 bg-white/90 px-4 py-2 text-sm text-forest-700 shadow-sm transition hover:border-saffron-200 hover:text-forest-900 hover:shadow-md"
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
              className="text-sm text-forest-700 transition hover:text-saffron-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
