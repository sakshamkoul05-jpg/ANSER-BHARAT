import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { projects, realEstateServices } from "@/lib/site-data";

export const metadata = {
  title: "ANSER BHARAT REAL ESTATE",
  description:
    "Property purchase, plotting, development, and commission agent services with a structured, trustworthy presence.",
};

export default function RealEstatePage() {
  return (
    <div className="pb-20">
      <PageHero
        eyebrow="ANSER BHARAT REAL ESTATE"
        title="Premium property work with a grounded, long-term outlook."
        description="From purchase to plotting to development, the real estate branch is built to feel structured, trustworthy, and calm."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="The branch supports buying, planning, and development with clear intent."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-4">
          {realEstateServices.map((service) => (
            <div key={service} className="rounded-3xl border border-forest-100 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-semibold text-forest-900">{service}</h3>
              <p className="mt-3 text-sm leading-6 text-forest-700">
                Structured for trust, clarity, and long-term value.
              </p>
            </div>
          ))}
        </div>
        <div className="mt-14">
          <SectionHeading
            eyebrow="Projects"
            title="Current projects under ANSER BHARAT REAL ESTATE."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group rounded-3xl border border-forest-100 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sand-700">
                  {project.detail}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-forest-900">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-forest-700">{project.summary}</p>
                <div className="mt-5 text-sm font-medium text-forest-700">Open project page</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
