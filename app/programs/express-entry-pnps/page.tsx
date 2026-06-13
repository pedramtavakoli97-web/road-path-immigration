import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Express Entry & PNPs",
  description: "Express Entry and Provincial Nominee Program assessment and application support."
};

export default function ExpressEntryPnpsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Express Entry & Provincial Nominee Programs"
        copy="Economic immigration pathways for skilled workers and provincial nomination candidates."
      />

      <section className="section-pad bg-white">
        <div className="container-lux max-w-5xl">
          <div className="grid gap-6">
            <article className="rounded-lg border border-charcoal/10 bg-porcelain p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-charcoal">Overview</h2>
              <p className="mt-4 leading-8 text-charcoal/72">
                We guide applicants through Canada&apos;s economic immigration pathways: Express Entry, including Federal Skilled Worker, Canadian Experience Class, Federal Skilled Trades, and Provincial Nominee Programs. Our focus is improving your Comprehensive Ranking System (CRS) profile, identifying PNP matches, and preparing robust applications.
              </p>
            </article>

            <article className="rounded-lg border border-charcoal/10 bg-white p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-charcoal">Who this is for</h2>
              <ul className="mt-4 grid gap-3 leading-8 text-charcoal/72">
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />Skilled workers with foreign or Canadian work experience, language test results such as IELTS, CELPIP or TEF, and education credentials.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />Candidates seeking PNPs to boost CRS or secure direct nomination.</li>
              </ul>
            </article>

            <article className="rounded-lg border border-charcoal/10 bg-white p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-charcoal">What we do</h2>
              <ul className="mt-4 grid gap-3 leading-8 text-charcoal/72">
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Full CRS assessment and profile audit based on education, work experience, age, language and adaptability factors.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Identify improvement strategies, including language coaching referrals, education credential assessment (ECA), job search or LMIA possibilities, spouse or partner factors, and provincial streams.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Complete Express Entry profile setup and monitoring for draws.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Prepare PNP applications for targeted provinces, including stream-specific evidence such as job offers, work experience proof and provincial criteria.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Prepare ITA-stage complete applications, including detailed document packages, police certificates, medicals, reference letters and translation support.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Provide post-submission support, respond to IRCC or provincial requests, update profiles and guide next steps upon nomination or ITA.</li>
              </ul>
            </article>

            <article className="rounded-lg bg-charcoal p-6 text-white sm:p-8">
              <h2 className="font-serif text-2xl">Outcome & next steps</h2>
              <p className="mt-4 leading-8 text-white/76">
                Either a provincial nomination, which adds 600 CRS points, or an ITA leading to PR application processing. We assist through to final PR decision and advise on post-landing obligations.
              </p>
              <div className="mt-8">
                <ButtonLink href="/consultation-booking" className="bg-gold text-charcoal hover:bg-white">
                  Get CRS & PNP Assessment <ArrowRight size={18} />
                </ButtonLink>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
