import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Reza Azizpour and Road Path Immigration."
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-porcelain px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="container-lux">
          <div className="luxury-border overflow-hidden rounded-lg bg-charcoal shadow-luxury">
            <Image
              src="/images/reza-azizpour-about.jpeg"
              alt="Reza Azizpour of Road Path Immigration"
              width={1536}
              height={1024}
              priority
              className="max-h-[720px] w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-lux max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-burgundy">About</p>
          <h1 className="mt-4 font-serif text-5xl leading-tight text-charcoal sm:text-6xl">Road Path Immigration</h1>
          <div className="mt-8 rounded-lg border border-charcoal/10 bg-porcelain p-6 shadow-sm sm:p-8">
            <p className="text-lg leading-9 text-charcoal/78">
              Reza Azizpour is a Regulated Canadian Immigration Consultant (RCIC IRB) in good standing with the ICCRC, holding a Doctorate Business Administration in Strategic Management and a Graduate Diploma in Immigration and Citizenship Law from Queen’s University. With experience managing multinational companies at national and regional levels, he applies strategic, results-oriented experience to provide immigration support across pathways, including permanent residence, family sponsorship, study and work permits, appeals and reviews. He prepares case-specific documentation and personalized strategies to support each client through the process while reducing stress.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
