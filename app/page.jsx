import Link from "next/link";
import Image from "next/image";
import BrandLogo from "@/components/BrandLogo";
import LeadershipCard from "@/components/LeadershipCard";
import SectionHeading from "@/components/SectionHeading";
import { PillList, SoftCard } from "@/components/ContentBlocks";
import { branches, leadership, site, values } from "@/lib/site-data";

export const metadata = {
  title: "Home",
  description:
    "A peaceful, sustainable, and community-first website for ANSER BHARAT GROUP.",
};

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-organic-grid bg-[length:28px_28px] opacity-35" />
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-saffron-200/30 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <div className="relative z-10">
            <BrandLogo className="mb-7" />
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-saffron-700">
              Sustainable growth, built with trust and dignity
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight text-forest-900 sm:text-6xl lg:text-7xl">
              A peaceful brand for trade, land, service, and living.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-forest-700">
              {site.tagline} A calm umbrella brand spanning trading, real estate,
              seva, and the long-term vision of Anand Sthali.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/about"
                className="rounded-full bg-saffron-600 px-6 py-3 text-sm font-medium text-white shadow-soft transition hover:bg-saffron-700"
              >
                Explore the group
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-forest-200 bg-white px-6 py-3 text-sm font-medium text-forest-800 transition hover:border-forest-300 hover:bg-forest-50"
              >
                Contact the team
              </Link>
            </div>
            <div className="mt-10">
              <PillList items={values.slice(0, 4)} />
            </div>
          </div>
          <div className="relative z-10">
            <div className="rounded-[2rem] border border-forest-100 bg-white/85 p-6 shadow-soft backdrop-blur">
              <div className="rounded-[1.6rem] bg-[linear-gradient(180deg,rgba(245,171,55,0.10),rgba(241,246,242,0.56))] p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.35em] text-saffron-700">
                      Brand identity
                    </div>
                    <h2 className="mt-3 text-2xl font-semibold text-forest-900">
                      Round logo, warm palette, calm presence.
                    </h2>
                  </div>
                  <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_18px_40px_rgba(34,57,35,0.12)]">
                    <Image
                      src="/brand/logo-anser.jpeg"
                      alt="ANSER BHARAT GROUP logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="mt-6 grid gap-4">
                  {[
                    "Local sourcing with care",
                    "Livelihoods and distribution",
                    "Long-term real estate value",
                    "Spiritual and sustainable living",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/70 bg-white/85 px-4 py-4 text-sm text-forest-800"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Branches"
          title="A connected group, with each branch serving a different need."
          description="The structure is intentionally separate, so each branch and project gets a clear identity while staying under one calm brand system."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {branches.map((branch) => (
            <SoftCard
              key={branch.title}
              title={branch.title}
              text={branch.blurb}
              href={branch.href}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Leadership"
          title="Respectful leadership, grounded in work and continuity."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="rounded-[2rem] border border-forest-100 bg-[linear-gradient(180deg,rgba(245,171,55,0.10),rgba(255,255,255,0.88))] p-8 shadow-soft">
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-saffron-700">
              Board of Members
            </div>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-forest-900">
              Three different strengths, one aligned direction.
            </h3>
            <p className="mt-4 text-sm leading-7 text-forest-700">
              The board layout is intentionally calm and structured so the
              visitor can understand who leads the group and how each member
              contributes to long-term trust, growth, and continuity.
            </p>
            <div className="mt-6 grid gap-3">
              {[
                "Sher Singh: resilience, continuity, and family stewardship",
                "Ashish Sharma: self-made growth and disciplined execution",
                "Azeem Siddique: humble relationship-building and support",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/80 bg-white/85 px-4 py-3 text-sm text-forest-800"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {leadership.map((person) => (
              <LeadershipCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-[2rem] border border-forest-100 bg-white p-8 shadow-soft">
          <SectionHeading
            eyebrow="Stories"
            title="Sher Singh Ji and Ashish Sharma represent two powerful journeys of grit."
            description="One grew through hands-on work across many trades before entering property and group leadership. The other started from scratch and built step by step through perseverance."
          />
        </div>
        <div className="rounded-[2rem] border border-forest-100 bg-[linear-gradient(180deg,rgba(245,171,55,0.10),rgba(255,255,255,0.82))] p-8 shadow-soft">
          <div className="grid gap-4">
            {[
              "Sher Singh Ji's journey honors resilience, trust, and gradual success built over years.",
              "Ashish Sharma's story reflects discipline, hard work, and the courage to rise from nothing.",
              "Together, the leadership creates a stable foundation for growth and service.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/80 bg-white/85 px-5 py-4 text-sm leading-6 text-forest-800"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Values"
          title="A peaceful business identity rooted in care, fairness, and spirituality."
        />
        <div className="mt-8">
          <PillList items={values} />
        </div>
      </section>
    </div>
  );
}
