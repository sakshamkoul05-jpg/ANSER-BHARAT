export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden border-b border-forest-100 bg-[linear-gradient(180deg,rgba(238,246,240,0.85),rgba(252,250,244,0.96))]">
      <div className="absolute inset-0 bg-organic-grid bg-[length:26px_26px] opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sand-700">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-forest-900 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-forest-700">
          {description}
        </p>
      </div>
    </section>
  );
}
