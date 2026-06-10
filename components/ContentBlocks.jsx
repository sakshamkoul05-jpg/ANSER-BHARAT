import Link from "next/link";

export function SoftCard({ title, text, href, detail }) {
  const Wrapper = href ? Link : "div";
  return (
    <Wrapper
      href={href}
      className="group rounded-3xl border border-forest-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
    >
      {detail ? (
        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-sand-700">
          {detail}
        </div>
      ) : null}
      <h3 className="mt-3 text-xl font-semibold text-forest-900 group-hover:text-forest-700">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-forest-700">{text}</p>
      {href ? (
        <div className="mt-5 text-sm font-medium text-forest-700">
          Explore more
        </div>
      ) : null}
    </Wrapper>
  );
}

export function PillList({ items }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-forest-100 bg-white px-4 py-2 text-sm text-forest-700 shadow-sm"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
