import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Kandi - 5 Kanal",
  description: "A 5 Kanal real estate project under ANSER BHARAT REAL ESTATE.",
};

export default function KandiPage() {
  return (
    <div className="pb-20">
      <PageHero
        eyebrow="Project"
        title="Kandi - 5 Kanal"
        description="A grounded land opportunity designed for calm, long-term planning and premium development potential."
      />
    </div>
  );
}
