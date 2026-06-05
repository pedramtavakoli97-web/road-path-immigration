import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { programs } from "@/lib/site";

const descriptions: Record<string, string> = {
  "Family Sponsorship": "Complete sponsorship and permanent residence support for spouses, partners, children, parents and grandparents.",
  "Express Entry & PNPs": "CRS assessment, profile strategy, PNP matching, ITA-stage preparation and post-submission support.",
  "Work Permits": "Employer-specific, open, LMIA-based and LMIA-exempt work permit guidance for employers and workers.",
  "Study Permits": "Study permit, extension, PGWP and study-to-permanent-residence planning for international students.",
  "Visitor Visas & Super Visa": "Temporary resident visa and super visa applications with invitation, financial and ties documentation.",
  "Business Immigration": "Start-Up Visa, investor and entrepreneur stream strategy with business plans and eligibility review.",
  "PR Cards & Appeals": "PR card renewals, travel documents, residency obligation reviews, refusals and appeal strategy."
};

export function Programs() {
  return (
    <section className="section-pad bg-white">
      <div className="container-lux">
        <SectionHeading eyebrow="Immigration Programs" title="Strategic pathways for every stage of your journey" copy="Explore the Canadian immigration options most often used by skilled professionals, families, students, and visitors." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program) => (
            <Link key={program} href="/programs" className="group rounded-lg border border-charcoal/10 bg-white p-7 shadow-sm transition duration-300 hover:border-gold hover:shadow-luxury">
              <div className="flex items-start justify-between gap-6">
                <h3 className="font-serif text-2xl text-charcoal">{program}</h3>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded bg-porcelain text-burgundy transition group-hover:bg-burgundy group-hover:text-white">
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <p className="mt-5 leading-7 text-charcoal/68">{descriptions[program]}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
