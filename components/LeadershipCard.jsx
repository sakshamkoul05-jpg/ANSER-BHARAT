import Image from "next/image";

const accentStyles = {
  forest: {
    frame:
      "bg-[radial-gradient(circle_at_top,rgba(88,121,90,0.22),transparent_50%),linear-gradient(180deg,rgba(241,246,242,0.98),rgba(255,255,255,0.98))]",
    glow: "bg-[linear-gradient(135deg,rgba(86,120,90,0.24),rgba(198,170,106,0.10))]",
    pill: "bg-forest-50 text-forest-800 border-forest-100",
  },
  sand: {
    frame:
      "bg-[radial-gradient(circle_at_top,rgba(198,170,106,0.18),transparent_50%),linear-gradient(180deg,rgba(249,244,232,0.98),rgba(255,255,255,0.98))]",
    glow: "bg-[linear-gradient(135deg,rgba(198,170,106,0.18),rgba(86,120,90,0.12))]",
    pill: "bg-sand-50 text-sand-800 border-sand-100",
  },
  sage: {
    frame:
      "bg-[radial-gradient(circle_at_top,rgba(140,176,146,0.22),transparent_50%),linear-gradient(180deg,rgba(242,247,244,0.98),rgba(255,255,255,0.98))]",
    glow: "bg-[linear-gradient(135deg,rgba(140,176,146,0.22),rgba(198,170,106,0.10))]",
    pill: "bg-forest-50 text-forest-800 border-forest-100",
  },
};

export default function LeadershipCard({ person }) {
  const accent = accentStyles[person.accent] ?? accentStyles.forest;

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-forest-100 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(34,57,35,0.14)]">
      <div className={`relative min-h-[23rem] overflow-hidden ${accent.frame}`}>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(86,120,90,0.08),transparent_40%,rgba(198,170,106,0.10))] transition-opacity duration-300 group-hover:opacity-80" />
        <div className={`absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent`} />
        <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full ${accent.glow} blur-3xl transition-transform duration-300 group-hover:scale-110`} />
        <div className="relative flex h-full items-end justify-center px-6 pt-8">
          <div className="relative w-full max-w-[17rem] transition-transform duration-300 group-hover:-translate-y-1">
            <div className="absolute -inset-5 rounded-[2rem] bg-[linear-gradient(135deg,rgba(86,120,90,0.18),rgba(198,170,106,0.14))] blur-2xl transition-opacity duration-300 group-hover:opacity-90" />
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/70 bg-white shadow-[0_30px_70px_rgba(34,57,35,0.12)] ring-1 ring-white/60">
              <div className="relative aspect-[4/5]">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  priority={person.role === "Chairman"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.26em] ${accent.pill}`}>
          {person.role}
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-forest-900">{person.name}</h3>
        <p className="mt-3 text-sm leading-6 text-forest-700">{person.highlight}</p>
        <p className="mt-3 text-sm leading-7 text-forest-700">{person.summary}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {person.phone ? (
            <a
              href={`tel:${person.phone}`}
              className="rounded-full bg-forest-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-forest-800"
            >
              Call {person.phone}
            </a>
          ) : null}
          {person.phone ? (
            <a
              href={`https://wa.me/91${person.phone}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-forest-200 bg-forest-50 px-4 py-2 text-sm font-medium text-forest-800 transition hover:bg-forest-100"
            >
              WhatsApp
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
