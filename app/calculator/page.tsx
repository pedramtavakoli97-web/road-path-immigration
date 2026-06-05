import type { Metadata } from "next";
import { CalculatorTool } from "@/components/CalculatorTool";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Immigration Calculator",
  description: "Use a detailed Canadian immigration eligibility planner for early pathway assessment."
};

export default function CalculatorPage() {
  return (
    <>
      <PageHero eyebrow="Calculator" title="Explore your Canadian immigration pathway with clearer details." copy="Choose a pathway, answer practical eligibility questions, and review your score, strengths, gaps, and next steps before booking a consultation." />
      <section className="section-pad bg-white">
        <div className="container-lux">
          <CalculatorTool />
        </div>
      </section>
    </>
  );
}
