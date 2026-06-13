import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Refugee Protection",
  description: "Refugee protection claim, appeal, PRRA and related remedy support."
};

export default function RefugeePage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Refugee Protection"
        copy="Support for refugee protection claims, hearings, appeals and related remedies in Canada."
      />

      <section className="section-pad bg-white">
        <div className="container-lux max-w-5xl">
          <div className="grid gap-6">
            <article className="rounded-lg border border-charcoal/10 bg-porcelain p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-charcoal">Overview</h2>
              <p className="mt-4 leading-8 text-charcoal/72">
                We provide comprehensive representation for refugee protection claims in Canada, assisting individuals who fear persecution or serious harm on grounds such as race, religion, nationality, political opinion, gender, sexual orientation, or membership in a particular social group.
              </p>
            </article>

            <article className="rounded-lg border border-charcoal/10 bg-white p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-charcoal">What we do</h2>
              <ul className="mt-4 grid gap-3 leading-8 text-charcoal/72">
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Assess eligibility for refugee protection claims in Canada.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Prepare and file claim forms and compile case-specific evidence.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Prepare clients for hearings before the Refugee Protection Division (RPD).</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Represent clients at appeals, including Refugee Appeal Division matters where applicable.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Prepare Pre-Removal Risk Assessment (PRRA) applications and Humanitarian & Compassionate (H&C) or other related remedies.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Handle inadmissibility and removal matters with case planning and support through each stage of the refugee process.</li>
              </ul>
            </article>

            <article className="rounded-lg bg-charcoal p-6 text-white sm:p-8">
              <h2 className="font-serif text-2xl">Outcome & next steps</h2>
              <p className="mt-4 leading-8 text-white/76">
                Refugee matters require careful documentation, hearing preparation and timely responses. We review the file, identify the available options and help prepare the next step.
              </p>
              <div className="mt-8">
                <ButtonLink href="/consultation-booking" className="bg-gold text-charcoal hover:bg-white">
                  Book Refugee Consultation <ArrowRight size={18} />
                </ButtonLink>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
