import type { Metadata } from "next";
import { InputField } from "@/components/InputField";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Free Assessment",
  description: "Submit a free immigration assessment request to Road Path Immigration."
};

export default function AssessmentFormPage() {
  return (
    <>
      <PageHero eyebrow="Free Assessment" title="Tell us where you are now and where you want to go." copy="Use this secure intake-style form to begin your eligibility review. Our team can follow up with suitable next steps." />
      <section className="section-pad bg-white">
        <form className="container-lux luxury-border grid gap-6 rounded-lg bg-porcelain p-6 shadow-luxury sm:p-8 lg:grid-cols-2">
          <InputField label="Full name" name="name" required />
          <InputField label="Email" name="email" type="email" required />
          <InputField label="Phone" name="phone" type="tel" />
          <InputField label="Country of residence" name="country" required />
          <label className="grid gap-2 text-sm font-semibold text-charcoal lg:col-span-2">
            Immigration goal
            <select name="goal" className="focus-ring min-h-12 rounded border border-charcoal/15 bg-white px-4 text-base font-normal text-charcoal outline-none transition hover:border-gold">
              <option>Permanent residence</option>
              <option>Study in Canada</option>
              <option>Work in Canada</option>
              <option>Visit Canada</option>
              <option>Family sponsorship</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-charcoal lg:col-span-2">
            Brief background
            <textarea name="message" rows={6} className="focus-ring rounded border border-charcoal/15 bg-white p-4 text-base font-normal text-charcoal outline-none transition hover:border-gold" placeholder="Education, work experience, family status, language results, timeline..." />
          </label>
          <button type="submit" className="focus-ring min-h-12 rounded bg-burgundy px-6 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-charcoal lg:w-fit">
            Submit Assessment
          </button>
        </form>
      </section>
    </>
  );
}
