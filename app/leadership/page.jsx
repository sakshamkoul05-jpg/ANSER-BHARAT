import PageHero from "@/components/PageHero";
import LeadershipCard from "@/components/LeadershipCard";
import { leadership } from "@/lib/site-data";

export const metadata = {
  title: "Leadership",
  description:
    "Meet the board members of ANSER BHARAT GROUP and the leadership stories behind the brand.",
};

export default function LeadershipPage() {
  return (
    <div className="pb-20">
      <PageHero
        eyebrow="Board of Members"
        title="Leadership shaped by resilience, humility, and hard work."
        description="Each leader contributes a different strength, but all are aligned around growth, trust, and the well-being of the broader community."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {leadership.map((person) => (
            <LeadershipCard key={person.name} person={person} />
          ))}
        </div>
      </section>
    </div>
  );
}
