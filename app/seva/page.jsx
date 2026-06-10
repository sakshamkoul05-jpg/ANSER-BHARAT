import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { SoftCard } from "@/components/ContentBlocks";
import { sevaHighlights } from "@/lib/site-data";

export const metadata = {
  title: "ANSER BHARAT SEVA",
  description:
    "A social and distribution-focused branch centered on local sourcing, jobs, and community care.",
};

export default function SevaPage() {
  return (
    <div className="pb-20">
      <PageHero
        eyebrow="ANSER BHARAT SEVA"
        title="Service that honors people, families, and local farmers."
        description="This branch carries a humane and community-first mission: support livelihoods, source locally, and distribute essential goods responsibly."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {sevaHighlights.map((item) => (
            <SoftCard
              key={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
        <div className="mt-12 rounded-3xl border border-forest-100 bg-white p-8 shadow-soft">
          <SectionHeading
            eyebrow="Purpose"
            title="A mission focused on jobs for needy people and dignified distribution."
            description="The family-led role inside ANSER BHARAT SEVA is presented as continuity, trust, and responsibility rather than ownership alone."
          />
        </div>
      </section>
    </div>
  );
}
