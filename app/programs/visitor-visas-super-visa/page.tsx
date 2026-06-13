import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Visitor Visa & Super Visa",
  description: "Temporary resident visa and super visa application support."
};

export default function VisitorVisasSuperVisaPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Visitor Visa & Super Visa"
        copy="Temporary resident visa and super visa application support."
      />

      <section className="section-pad bg-white">
        <div className="container-lux max-w-5xl">
          <div className="grid gap-6">
            <article className="rounded-lg border border-charcoal/10 bg-porcelain p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-charcoal">Overview</h2>
              <p className="mt-4 leading-8 text-charcoal/72">
                We prepare visitor visa (temporary resident visa) applications and super visa applications for parents and grandparents. We focus on demonstrating temporary intent, financial support and strong ties, while handling invitation letters and supporting documents.
              </p>
            </article>

            <article className="rounded-lg border border-charcoal/10 bg-white p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-charcoal">Who this is for</h2>
              <ul className="mt-4 grid gap-3 leading-8 text-charcoal/72">
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />Visitors from visa-required countries seeking short-term travel for tourism, family visits or business.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />Parents and grandparents seeking super visas for extended stays, up to 5 years per entry.</li>
              </ul>
            </article>

            <article className="rounded-lg border border-charcoal/10 bg-white p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-charcoal">What we do</h2>
              <ul className="mt-4 grid gap-3 leading-8 text-charcoal/72">
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Assess eligibility and advise whether a TRV, eTA or super visa is appropriate.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Draft invitation letters, sponsorship undertakings, and financial evidence packages.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Prepare super visa-specific medical insurance requirements and supporting documentation to meet IRCC&apos;s long-stay criteria.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Submit applications and follow up on requests from visa offices.</li>
              </ul>
            </article>

            <article className="rounded-lg bg-charcoal p-6 text-white sm:p-8">
              <h2 className="font-serif text-2xl">Outcome & next steps</h2>
              <p className="mt-4 leading-8 text-white/76">
                Temporary entry authorization for short or extended visits; advice on extensions or change of status if circumstances change.
              </p>
              <div className="mt-8">
                <ButtonLink href="/consultation-booking" className="bg-gold text-charcoal hover:bg-white">
                  Apply for Visitor Visa <ArrowRight size={18} />
                </ButtonLink>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
