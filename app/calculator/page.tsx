import type { Metadata } from "next";
import { CalculatorTool } from "@/components/CalculatorTool";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Express Entry CRS Calculator",
  description: "Calculate your Express Entry Comprehensive Ranking System score using the official Canada.ca CRS criteria."
};

export default function CalculatorPage() {
  return (
    <>
      <PageHero eyebrow="Calculator" title="Express Entry CRS Calculator" copy="Estimate your Comprehensive Ranking System score using the official Canada.ca CRS point tables." />
      <section className="section-pad bg-white">
        <div className="container-lux">
          <CalculatorTool />
        </div>
      </section>
    </>
  );
}
