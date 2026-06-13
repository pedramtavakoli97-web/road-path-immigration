import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Work Permit",
  description: "Work permit, LMIA, employer compliance, and work authorization support."
};

export default function WorkPermitPage() {
  return (
    <>
      <PageHero eyebrow="Programs" title="Work Permit" copy="Support for employers and foreign workers seeking Canadian work authorization." />
      <section className="section-pad bg-white">
        <div className="container-lux max-w-5xl">
          <div className="grid gap-6">
            <article className="rounded-lg border border-charcoal/10 bg-porcelain p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-charcoal">Overview</h2>
              <p className="mt-4 leading-8 text-charcoal/72">We support employers and foreign workers through employer-specific and open work authorizations, LMIA processes, intra-company transfers, Global Talent Stream and work permit extensions. We ensure employer compliance and prepare worker applications to reduce refusals and delays.</p>
            </article>
            <article className="rounded-lg border border-charcoal/10 bg-white p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-charcoal">Who this is for</h2>
              <ul className="mt-4 grid gap-3 leading-8 text-charcoal/72">
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />Employers hiring temporary foreign workers or transferring staff from foreign affiliates.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />Foreign workers seeking employer-specific work permits, open work permits, or LMIA-based positions.</li>
              </ul>
            </article>
            <article className="rounded-lg border border-charcoal/10 bg-white p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-charcoal">What we do</h2>
              <ul className="mt-4 grid gap-3 leading-8 text-charcoal/72">
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Assess which work permit route fits, including LMIA-based, LMIA-exempt, employer-specific, open work permit, and bridging open work permit.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Assist employers with Labour Market Impact Assessment (LMIA) applications, job advertisements and compliance requirements.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Prepare and submit worker work permit applications, including work permit, initial entry and extensions, and provide guidance on work permit conditions.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Advise on intra-company transfer, NAFTA/CUSMA, significant benefit and international agreements.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Help with employer compliance audits, offer letters, and employment contracts that meet IRCC requirements.</li>
              </ul>
            </article>
            <article className="rounded-lg bg-charcoal p-6 text-white sm:p-8">
              <h2 className="font-serif text-2xl">Outcome & next steps</h2>
              <p className="mt-4 leading-8 text-white/76">Successful issuance of a work permit allowing lawful employment in Canada. We advise on transition strategies from temporary to permanent status, including Express Entry and PNP employer-driven streams.</p>
              <div className="mt-8">
                <ButtonLink href="/consultation-booking" className="bg-gold text-charcoal hover:bg-white">Discuss Work Permit Options <ArrowRight size={18} /></ButtonLink>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
