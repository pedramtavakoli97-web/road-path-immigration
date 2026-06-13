import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "PR Card Services, Travel Documents & Appeals",
  description: "PR card renewal, travel document, residency obligation and appeal support."
};

export default function PrCardsAppealsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="PR Card Services, Travel Documents & Appeals"
        copy="Support for PR card renewals, travel documents, residency obligations and immigration remedies."
      />

      <section className="section-pad bg-white">
        <div className="container-lux max-w-5xl">
          <div className="grid gap-6">
            <article className="rounded-lg border border-charcoal/10 bg-porcelain p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-charcoal">Overview</h2>
              <p className="mt-4 leading-8 text-charcoal/72">
                We handle PR card renewals, replacements, travel documents, residency obligation assessments, and legal remedies such as appeals, judicial reviews and restoration of status. We assist clients facing refusals, inadmissibility or removal proceedings.
              </p>
            </article>

            <article className="rounded-lg border border-charcoal/10 bg-white p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-charcoal">Who this is for</h2>
              <ul className="mt-4 grid gap-3 leading-8 text-charcoal/72">
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />Permanent residents needing to renew or replace PR cards, or those who lost status and seek restoration.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />Individuals facing refusals, removal orders, or admissibility challenges.</li>
              </ul>
            </article>

            <article className="rounded-lg border border-charcoal/10 bg-white p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-charcoal">What we do</h2>
              <ul className="mt-4 grid gap-3 leading-8 text-charcoal/72">
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Prepare PR card renewal and replacement applications with evidence of residency days and tax filings.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Draft travel document applications for PRs without valid PR cards.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Advise on residency obligation calculations and steps to preserve PR status.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Prepare appeals, applications for judicial review, humanitarian & compassionate submissions, and restoration of status applications.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Represent or coordinate with legal counsel where required for court proceedings or complex inadmissibility cases.</li>
              </ul>
            </article>

            <article className="rounded-lg bg-charcoal p-6 text-white sm:p-8">
              <h2 className="font-serif text-2xl">Outcome & next steps</h2>
              <p className="mt-4 leading-8 text-white/76">
                Restoration or confirmation of PR status, successful issuance of travel documents or PR cards, or legal routes toward overturning refusals.
              </p>
              <div className="mt-8">
                <ButtonLink href="/consultation-booking" className="bg-gold text-charcoal hover:bg-white">
                  Get Residency Obligation Review <ArrowRight size={18} />
                </ButtonLink>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
