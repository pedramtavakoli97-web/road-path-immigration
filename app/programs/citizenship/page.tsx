import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Citizenship",
  description: "Canadian citizenship application, certificate, refusal and appeal support."
};

export default function CitizenshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Citizenship"
        copy="Canadian citizenship application and dispute support for permanent residents."
      />

      <section className="section-pad bg-white">
        <div className="container-lux max-w-5xl">
          <div className="grid gap-6">
            <article className="rounded-lg border border-charcoal/10 bg-porcelain p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-charcoal">Overview</h2>
              <p className="mt-4 leading-8 text-charcoal/72">
                We assist permanent residents with all aspects of Canadian citizenship applications and disputes, including eligibility assessment, completion and review of applications, residency calculation and residency questionnaires, language and knowledge test preparation, interview coaching, and representation in cases of refusal, revocation, or appeals.
              </p>
            </article>

            <article className="rounded-lg border border-charcoal/10 bg-white p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-charcoal">What we do</h2>
              <ul className="mt-4 grid gap-3 leading-8 text-charcoal/72">
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Assess citizenship eligibility, including physical presence, tax filing, language and knowledge requirements.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Complete and review citizenship applications and supporting documents.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Prepare residency calculations, residency questionnaires and responses for complex files.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Provide language and knowledge test preparation and interview coaching.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Assist with citizenship certificates, replacement certificates and confirmation of citizenship status.</li>
                <li className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />Represent or support clients in cases of refusal, revocation or appeals.</li>
              </ul>
            </article>

            <article className="rounded-lg bg-charcoal p-6 text-white sm:p-8">
              <h2 className="font-serif text-2xl">Outcome & next steps</h2>
              <p className="mt-4 leading-8 text-white/76">
                Careful documentation and early review help make citizenship applications accurate and easier to follow. We review eligibility, identify any concerns and prepare the next step.
              </p>
              <div className="mt-8">
                <ButtonLink href="/consultation-booking" className="bg-gold text-charcoal hover:bg-white">
                  Book Citizenship Consultation <ArrowRight size={18} />
                </ButtonLink>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
