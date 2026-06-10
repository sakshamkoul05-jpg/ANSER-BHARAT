import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { site, leadership } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-forest-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(248,244,234,0.92))]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <BrandLogo compact />
          <p className="mt-4 max-w-xl text-sm leading-6 text-forest-700">
            {site.description}
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-800">
            Navigate
          </div>
          <div className="mt-4 flex flex-col gap-3">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-forest-700 hover:text-saffron-700">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-800">
            Contact
          </div>
          <p className="mt-4 text-sm leading-6 text-forest-700">
            Dedicated frontend for ANSER BHARAT GROUP. Logo and photos can be
            dropped in later without changing the structure.
          </p>
          <div className="mt-4 grid gap-2 text-sm">
            {leadership.slice(0, 2).map((person) => (
              <a key={person.name} href={`tel:${person.phone}`} className="text-forest-700 hover:text-saffron-700">
                {person.name}: {person.phone}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-forest-100/80 px-4 py-4 text-center text-xs tracking-[0.2em] text-forest-600 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} {site.name}. Built for calm, sustainable growth.
      </div>
    </footer>
  );
}
