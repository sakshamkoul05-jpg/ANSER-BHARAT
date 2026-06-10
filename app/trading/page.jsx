import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { PillList, SoftCard } from "@/components/ContentBlocks";
import { tradingProducts } from "@/lib/site-data";

export const metadata = {
  title: "ANSER BHARAT TRADING",
  description:
    "Premium goods distribution centered on local sourcing, quality, and trusted movement of essential products.",
};

export default function TradingPage() {
  return (
    <div className="pb-20">
      <PageHero
        eyebrow="ANSER BHARAT TRADING"
        title="Carefully sourced goods for everyday nourishment."
        description="Trading focuses on premium Himalayan tea, local farm-linked essentials, and distribution that respects quality from source to shelf."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Products"
          title="A calm supply chain, built around useful and trusted staples."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tradingProducts.map((product) => (
            <SoftCard
              key={product.title}
              title={product.title}
              text={product.text}
            />
          ))}
        </div>
        <div className="mt-10 rounded-3xl border border-forest-100 bg-white p-8 shadow-soft">
          <SectionHeading
            eyebrow="Focus"
            title="Distribution that feels reliable, humane, and rooted in local strength."
          />
          <div className="mt-6">
            <PillList
              items={[
                "Premium Himalayan tea",
                "Bharuch peanuts",
                "Chickpeas",
                "Chikki",
                "Pure ghee",
                "Sattu",
                "Dehydrated vegetables",
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
