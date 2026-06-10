import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Sukkad - 400 Marla",
  description: "A 400 Marla real estate project under ANSER BHARAT REAL ESTATE.",
};

export default function SukkadPage() {
  return (
    <div className="pb-20">
      <PageHero
        eyebrow="Project"
        title="Sukkad - 400 Marla"
        description="A larger land vision with room for structured development, strategy, and community-centered value."
      />
    </div>
  );
}
