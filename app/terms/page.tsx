import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms",
  description: "Website terms for Road Path Immigration."
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Terms" title="Website Terms" copy="These terms outline general use of the Road Path Immigration website." />
      <section className="section-pad bg-white">
        <div className="container-lux max-w-3xl space-y-5 leading-8 text-charcoal/72">
          <p>Website content is general information and does not replace individualized immigration advice.</p>
          <p>Submitting a form does not create a consultant-client relationship until an engagement is confirmed in writing.</p>
          <p>These placeholder terms should be finalized by legal counsel before launch.</p>
        </div>
      </section>
    </>
  );
}
