import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Hotel - 14 Kanal",
  description: "A 14 Kanal hospitality project under ANSER BHARAT REAL ESTATE.",
};

export default function HotelPage() {
  return (
    <div className="pb-20">
      <PageHero
        eyebrow="Project"
        title="Hotel - 14 Kanal"
        description="A hospitality-led project intended for regional growth, premium presence, and long-term trust."
      />
    </div>
  );
}
