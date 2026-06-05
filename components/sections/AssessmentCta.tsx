import { FileCheck2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";

export function AssessmentCta() {
  return (
    <section className="section-pad bg-burgundy text-white">
      <div className="container-lux grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="grid h-20 w-20 place-items-center rounded border border-gold/45 bg-white/8 text-gold">
          <FileCheck2 size={34} />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Free Assessment</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Start with a confidential eligibility review.</h2>
          <p className="mt-5 max-w-3xl leading-8 text-white/76">Share your goals and background so our team can identify suitable Canadian immigration pathways and consultation priorities.</p>
          <ButtonLink href="/assessment-form" variant="secondary" className="mt-8 border-gold bg-white text-charcoal hover:bg-gold hover:text-charcoal">
            Complete Free Assessment
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
