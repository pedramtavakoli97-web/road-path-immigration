import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Study Permit",
  description: "Study permit, extension, PGWP, and student pathway support."
};

export default function StudyPermitPage() {
  return (
    <>
      <PageHero eyebrow="Programs" title="Study Permit" copy="Study permit, PGWP, and student pathway support for Canada." />
      <section className="section-pad bg-white">
        <div className="container-lux max-w-5xl">
          <div className="grid gap-6">
            <article className="rounded-lg border border-charcoal/10 bg-porcelain p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-charcoal">Overview</h2>
              <p className="mt-4 leading-8 text-charcoal/72">We help international students, their families and educational institutions with study permit applications, study permit extensions, post-graduation work permit (PGWP) guidance and pathways from study to permanent residence.</p>
            </article>
            <article className="rounded-lg border border-charcoal/10 bg-white p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-charcoal">Who this is for</h2>
              <ul className="mt-4 grid gap-3 leading-8 text-charcoal/72">
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />Prospective international students enrolling in designated learning institutions (DLIs).</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />Graduates seeking PGWP and pathways to PR.</li>
              </ul>
            </article>
            <article className="rounded-lg border border-charcoal/10 bg-white p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-charcoal">What we do</h2>
              <ul className="mt-4 grid gap-3 leading-8 text-charcoal/72">
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Assess program eligibility, DLI status, and study plan that supports permit approval.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Prepare study permit applications with strong ties, intent to study statements, financial proof and acceptance letters.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Advise on co-op or internship work authorizations and on-campus work eligibility.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Guide on PGWP eligibility, application timing and documentation.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Counsel on transitioning from study permits to work permits and economic class PR, including Express Entry and PNP streams.</li>
              </ul>
            </article>
            <article className="rounded-lg bg-charcoal p-6 text-white sm:p-8">
              <h2 className="font-serif text-2xl">Outcome & next steps</h2>
              <p className="mt-4 leading-8 text-white/76">Approval of study permit and post-graduation work permit where eligible; guidance toward permanent residency routes after work experience.</p>
              <div className="mt-8">
                <ButtonLink href="/consultation-booking" className="bg-gold text-charcoal hover:bg-white">Start Student Pathway <ArrowRight size={18} /></ButtonLink>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
