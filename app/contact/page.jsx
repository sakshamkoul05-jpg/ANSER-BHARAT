import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import { leadership } from "@/lib/site-data";

export const metadata = {
  title: "Contact",
  description: "Get in touch with ANSER BHARAT GROUP through a calm and structured contact page.",
};

export default function ContactPage() {
  return (
    <div className="pb-20">
      <PageHero
        eyebrow="Contact"
        title="Start a conversation with the group."
        description="Use the form below to reach out about trading, real estate, seva, or Anand Sthali. This page is ready for a backend form service later."
      />
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Reach out"
          title="A clean contact path for enquiries, partnerships, and project discussions."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {leadership.slice(0, 2).map((person) => (
            <a
              key={person.name}
              href={`tel:${person.phone}`}
              className="rounded-3xl border border-forest-100 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-sand-700">
                {person.role}
              </div>
              <div className="mt-2 text-xl font-semibold text-forest-900">{person.name}</div>
              <div className="mt-2 text-sm text-forest-700">{person.phone}</div>
            </a>
          ))}
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
