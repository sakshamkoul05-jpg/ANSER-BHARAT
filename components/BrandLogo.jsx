import Image from "next/image";
import Link from "next/link";

export default function BrandLogo({ compact = false, showText = true, className = "" }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 ${className}`}>
      <span className="relative inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white shadow-[0_18px_40px_rgba(34,57,35,0.16)] ring-1 ring-forest-100">
        <Image
          src="/brand/logo-anser.jpeg"
          alt="ANSER BHARAT GROUP logo"
          fill
          className="rounded-full object-cover"
          priority
        />
      </span>
      {showText ? (
        <span className="leading-tight">
          <span className={`block font-semibold tracking-[0.16em] text-forest-900 ${compact ? "text-xs" : "text-sm"}`}>
            ANSER BHARAT GROUP
          </span>
          <span className="block text-[0.65rem] uppercase tracking-[0.34em] text-saffron-700">
            Peaceful growth
          </span>
        </span>
      ) : null}
    </Link>
  );
}
