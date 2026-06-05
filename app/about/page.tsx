import type { Metadata } from "next";
import { Award, Globe2, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Road Path Immigration and our premium Canadian immigration consulting approach."
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="Trustworthy Canadian immigration advice with a premium client experience." copy="Road Path Immigration supports individuals, families, students, and professionals with structured guidance for Canadian immigration and temporary residence goals." />
      <section className="section-pad bg-white">
        <div className="container-lux grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-serif text-4xl leading-tight text-charcoal">A clear, confidential, and client-centered process.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Confidential", copy: "Private intake and careful document handling." },
              { icon: Globe2, title: "Global", copy: "Support for clients in Canada and abroad." },
              { icon: Award, title: "Refined", copy: "Premium service standards from first contact onward." }
            ].map(({ icon: Icon, title, copy }) => (
              <article key={title} className="rounded-lg border border-charcoal/10 p-6 transition hover:border-gold hover:shadow-luxury">
                <Icon className="text-burgundy" size={28} />
                <h2 className="mt-5 font-serif text-2xl text-charcoal">{title}</h2>
                <p className="mt-3 leading-7 text-charcoal/68">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
