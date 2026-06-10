import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { values } from "@/lib/site-data";

export const metadata = {
  title: "About the Group",
  description:
    "Learn how ANSER BHARAT GROUP is structured around sustainable development, dignity of work, and community upliftment.",
};

export default function AboutPage() {
  return (
    <div className="pb-20">
      <PageHero
        eyebrow="About the Group"
        title="One umbrella, many responsibilities."
        description="ANSER BHARAT GROUP brings together trading, real estate, seva, and the longer vision of Anand Sthali under a single calm and trustworthy identity."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-forest-100 bg-white p-8 shadow-soft">
            <SectionHeading
              eyebrow="Mission"
              title="We create value with people, not just for them."
              description="The group is built on a simple idea: sustained development should create dignity, opportunity, and lasting benefit for families and communities."
            />
          </div>
          <div className="rounded-3xl border border-forest-100 bg-[linear-gradient(180deg,rgba(88,121,90,0.09),rgba(255,255,255,0.84))] p-8 shadow-soft">
            <SectionHeading
              eyebrow="What guides us"
              title="The group stays calm in style, serious in work, and generous in intent."
            />
            <div className="mt-6 grid gap-3">
              {values.map((item) => (
                <div key={item} className="rounded-2xl border border-white/80 bg-white/80 px-4 py-3 text-sm text-forest-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
