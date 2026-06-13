import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Immigration Programs",
  description: "Family sponsorship and Canadian immigration program support."
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero eyebrow="Programs" title="Canadian immigration pathways planned with precision." copy="Review core permanent and temporary residence options, then book a consultation for a profile-specific strategy." />
      <section id="family-sponsorship" className="section-pad scroll-mt-28 bg-white">
        <div className="container-lux max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-burgundy">Family Sponsorship</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-charcoal sm:text-5xl">Family Sponsorship</h2>

          <div className="mt-10 grid gap-6">
            <article className="rounded-lg border border-charcoal/10 bg-porcelain p-6 sm:p-8">
              <h3 className="font-serif text-2xl text-charcoal">Overview</h3>
              <p className="mt-4 leading-8 text-charcoal/72">
                We prepare and file complete sponsorship and permanent residence applications for spouses, common-law or conjugal partners, dependent children, parents and grandparents. Our goal is to present a clear, well-documented case that meets IRCC requirements while minimizing processing delays and requests for further evidence.
              </p>
            </article>

            <article className="rounded-lg border border-charcoal/10 bg-white p-6 sm:p-8">
              <h3 className="font-serif text-2xl text-charcoal">Who this is for?</h3>
              <ul className="mt-4 grid gap-3 leading-8 text-charcoal/72">
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />Canadian citizens or permanent residents who want to sponsor eligible family members.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />Sponsored family members living inside or outside Canada seeking permanent residence.</li>
              </ul>
            </article>

            <article className="rounded-lg border border-charcoal/10 bg-white p-6 sm:p-8">
              <h3 className="font-serif text-2xl text-charcoal">What we do</h3>
              <ul className="mt-4 grid gap-3 leading-8 text-charcoal/72">
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Assess sponsor and sponsored person eligibility.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Advise on the appropriate sponsorship stream, including inland or outland, required documents and timing.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Prepare and submit sponsorship and permanent residence applications, forms, and government payment.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Monitor application progress, respond to IRCC procedural requests, and advise on bridging open work permits for inland spousal cases where applicable.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Provide guidance and support throughout the process.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Support appeals or re-application strategies in case of refusal.</li>
              </ul>
            </article>

            <article className="rounded-lg bg-charcoal p-6 text-white sm:p-8">
              <h3 className="font-serif text-2xl">Outcome & next steps</h3>
              <p className="mt-4 leading-8 text-white/76">
                Successful sponsorship leads to permanent residence for the sponsored person. We continue to advise on PR card issuance, residency obligations and future citizenship eligibility.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/assessment-form" variant="secondary" className="border-gold bg-white text-charcoal hover:bg-gold hover:text-charcoal">
                  Start Eligibility Assessment
                </ButtonLink>
                <ButtonLink href="/consultation-booking" className="bg-gold text-charcoal hover:bg-white">
                  Book Consultation <ArrowRight size={18} />
                </ButtonLink>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
