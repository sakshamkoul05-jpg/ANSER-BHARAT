import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { anandSthaliPoints } from "@/lib/site-data";

export const metadata = {
  title: "ANAND STHALI",
  description:
    "A peaceful sustainable housing vision centered on agriculture, airy spaces, furniture, and spiritual living.",
};

export default function AnandSthaliPage() {
  return (
    <div className="pb-20">
      <PageHero
        eyebrow="ANAND STHALI"
        title="A peaceful way of sustainable living."
        description="ANAND STHALI is imagined as a community rooted in harmony, taking everyone along through spirituality-led living."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Vision"
          title="Housing, agriculture, and everyday comfort brought together with calm intention."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {anandSthaliPoints.map((item) => (
            <div key={item} className="rounded-3xl border border-forest-100 bg-white p-7 shadow-soft">
              <h3 className="text-xl font-semibold text-forest-900">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-forest-700">
                A serene, people-first approach to long-term living and shared growth.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
