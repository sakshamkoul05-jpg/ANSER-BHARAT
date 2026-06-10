import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Tang - 32.5 Marla",
  description: "A 32.5 Marla real estate project under ANSER BHARAT REAL ESTATE.",
};

export default function TangPage() {
  return (
    <div className="pb-20">
      <PageHero
        eyebrow="Project"
        title="Tang - 32.5 Marla"
        description="A compact project with premium potential, carefully positioned for practical and thoughtful growth."
      />
    </div>
  );
}
