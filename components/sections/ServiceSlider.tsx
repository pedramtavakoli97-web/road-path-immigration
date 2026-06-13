"use client";

import { ArrowLeft, ArrowRight, BriefcaseBusiness, Building2, FileBadge2, GraduationCap, HeartHandshake, Landmark, Plane, Scale } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";

const services = [
  {
    title: "Family Sponsorship",
    kicker: "Spouse, partner, children, parents and grandparents",
    icon: HeartHandshake,
    summary: "We prepare and file complete sponsorship and permanent residence applications with a clear, well-documented case that meets IRCC requirements while minimizing delays and evidence requests.",
    audience: "Canadian citizens or permanent residents sponsoring eligible family members, and sponsored relatives living inside or outside Canada.",
    details: ["Assess sponsor and applicant eligibility", "Advise on inland vs. outland streams, documents and timing", "Prepare applications, forms and government payment", "Monitor progress and respond to IRCC requests", "Support appeals or re-application strategies after refusal"],
    outcome: "Successful sponsorship leads to permanent residence. We continue to advise on PR card issuance, residency obligations and future citizenship eligibility.",
    cta: "Start with a free eligibility assessment or book a consultation for a personalized plan and fee estimate.",
    href: "/programs"
  },
  {
    title: "Express Entry & PNPs",
    kicker: "Economic immigration",
    icon: Landmark,
    summary: "We guide applicants through Express Entry and Provincial Nominee Programs with a focus on CRS improvement, PNP matches, and robust permanent residence applications.",
    audience: "Skilled workers with foreign or Canadian work experience, language results and education credentials, plus candidates seeking PNP nominations.",
    details: ["Complete CRS assessment and profile audit", "Identify language, ECA, LMIA, spouse and provincial strategies", "Set up and monitor Express Entry profiles", "Prepare targeted PNP applications", "Prepare ITA-stage document packages and post-submission responses"],
    outcome: "A provincial nomination can add 600 CRS points, or an ITA can lead to PR processing. We assist through final PR decision and post-landing guidance.",
    cta: "Get a CRS and PNP assessment with a clear action plan.",
    href: "/programs"
  },
  {
    title: "Work Permits",
    kicker: "Employer-sponsored immigration",
    icon: BriefcaseBusiness,
    summary: "We support employers and foreign workers through employer-specific and open work authorizations, LMIA processes, intra-company transfers, Global Talent Stream and extensions.",
    audience: "Employers hiring temporary foreign workers or transferring staff, and foreign workers seeking employer-specific, open or LMIA-based work permits.",
    details: ["Assess LMIA-based, LMIA-exempt, employer-specific and open options", "Assist employers with LMIA ads and compliance", "Prepare initial and extension work permit applications", "Advise on CUSMA, intra-company transfer and significant benefit options", "Support offer letters, contracts and compliance audits"],
    outcome: "Successful issuance of a work permit allows lawful employment in Canada. We also advise on transition strategies to permanent residence.",
    cta: "Discuss employer or worker options and get a compliance checklist.",
    href: "/programs"
  },
  {
    title: "Study Permits",
    kicker: "Student support",
    icon: GraduationCap,
    summary: "We help international students, families and institutions with study permits, extensions, PGWP guidance and pathways from study to permanent residence.",
    audience: "Prospective international students enrolling in DLIs, and graduates seeking PGWP and permanent residence pathways.",
    details: ["Assess program eligibility, DLI status and study plan clarity", "Prepare study permit applications with financial proof and acceptance letters", "Advise on co-op, internship and on-campus work eligibility", "Guide PGWP timing and documentation", "Counsel on transition from study to work and PR"],
    outcome: "Approval of study permits and PGWPs where eligible, with guidance toward permanent residency after Canadian work experience.",
    cta: "Start your student pathway with an eligibility review and document checklist.",
    href: "/programs"
  },
  {
    title: "Visitor Visas & Super Visa",
    kicker: "Temporary visits",
    icon: Plane,
    summary: "We prepare visitor visa and super visa applications by demonstrating temporary intent, financial support and documented ties, while handling invitation letters and supporting documents.",
    audience: "Visitors from visa-required countries travelling for tourism, family visits or business, plus parents and grandparents seeking extended stays.",
    details: ["Assess whether TRV, eTA or super visa is appropriate", "Draft invitation letters and financial evidence packages", "Prepare super visa medical insurance documentation", "Submit applications and follow visa office requests"],
    outcome: "Temporary entry authorization for short or extended visits, plus advice on extensions or change of status when circumstances change.",
    cta: "Apply with a complete invitation and documentation package.",
    href: "/programs"
  },
  {
    title: "Business Immigration",
    kicker: "Start-up, investor and entrepreneur streams",
    icon: Building2,
    summary: "We advise entrepreneurs and investors on business-class immigration streams, including Start-Up Visa, provincial entrepreneur streams and available investor categories.",
    audience: "Entrepreneurs with innovative business ideas, foreign investors and business owners seeking to establish operations in Canada.",
    details: ["Evaluate business eligibility and recommend federal or provincial streams", "Prepare business plans, projections and ownership evidence", "Coordinate with designated organizations and provincial programs", "Support provincial performance requirements", "Assist with transition from temporary business status to PR"],
    outcome: "Federal endorsement or provincial nomination can lead to a PR application, with ongoing support for post-landing business obligations.",
    cta: "Schedule a business immigration strategy session.",
    href: "/programs"
  },
  {
    title: "PR Cards & Appeals",
    kicker: "Travel documents, refusals and remedies",
    icon: FileBadge2,
    summary: "We handle PR card renewals, replacements, travel documents, residency obligation assessments and legal remedies for refusals or status challenges.",
    audience: "Permanent residents renewing or replacing PR cards, people needing travel documents, and individuals facing refusals, removal orders or admissibility issues.",
    details: ["Prepare PR card renewal and replacement applications", "Draft travel document applications", "Advise on residency obligation calculations", "Prepare appeals, judicial review support, H&C submissions and restoration applications", "Coordinate with legal counsel for court or complex inadmissibility matters"],
    outcome: "Confirmation or restoration of PR status, successful travel document or PR card issuance, or a clear legal route to challenge refusals.",
    cta: "Get a residency obligation review or appeal consultation.",
    href: "/programs"
  }
];

export function ServiceSlider() {
  const [active, setActive] = useState(0);
  const selected = services[active];
  const Icon = selected.icon;

  const next = () => setActive((current) => (current + 1) % services.length);
  const previous = () => setActive((current) => (current - 1 + services.length) % services.length);

  const slideNumber = useMemo(() => String(active + 1).padStart(2, "0"), [active]);

  return (
    <section className="section-pad bg-white">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Select A Service"
          title="Explore immigration services by pathway"
          copy="Choose a service to see the kind of strategy, documentation, and consultation focus Road Path Immigration can provide."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[360px_1fr]">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              const isActive = index === active;

              return (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`focus-ring group flex min-h-20 items-center gap-4 rounded border p-4 text-left transition duration-300 ${
                    isActive
                      ? "border-gold bg-burgundy text-white shadow-gold"
                      : "border-charcoal/10 bg-porcelain text-charcoal hover:border-gold hover:bg-white hover:shadow-luxury"
                  }`}
                  aria-pressed={isActive}
                >
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded transition ${isActive ? "bg-white text-burgundy" : "bg-white text-burgundy group-hover:bg-gold group-hover:text-charcoal"}`}>
                    <ServiceIcon size={21} />
                  </span>
                  <span>
                    <span className={`block text-xs font-semibold uppercase tracking-[0.18em] ${isActive ? "text-gold" : "text-burgundy"}`}>{service.kicker}</span>
                    <span className="mt-1 block font-serif text-xl leading-tight">{service.title}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <article key={selected.title} className="luxury-border relative overflow-hidden rounded-lg bg-charcoal p-7 text-white shadow-luxury animate-rise sm:p-10 lg:p-12">
            <div className="absolute right-8 top-8 font-serif text-8xl text-white/[0.04]">{slideNumber}</div>
            <div className="relative z-10 grid gap-10 xl:grid-cols-[1fr_0.82fr]">
              <div>
                <div className="grid h-16 w-16 place-items-center rounded border border-gold/40 bg-white/8 text-gold">
                  <Icon size={30} />
                </div>
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-gold">{selected.kicker}</p>
                <h3 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">{selected.title}</h3>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">{selected.summary}</p>
                <div className="mt-7 rounded border border-white/10 bg-white/[0.05] p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                    <Scale size={17} /> Who this is for
                  </p>
                  <p className="mt-3 leading-7 text-white/70">{selected.audience}</p>
                </div>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <ButtonLink href="/assessment-form" variant="secondary" className="border-gold bg-white text-charcoal hover:bg-gold hover:text-charcoal">
                    Free Assessment
                  </ButtonLink>
                  <ButtonLink href="/consultation-booking" className="bg-gold text-charcoal hover:bg-white">
                    Book Consultation
                  </ButtonLink>
                </div>
              </div>

              <div className="rounded border border-white/10 bg-white/[0.06] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">What We Do</p>
                <ul className="mt-5 grid gap-4">
                  {selected.details.map((detail) => (
                    <li key={detail} className="flex gap-3 text-white/76">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 border-t border-white/10 pt-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Outcome & Next Steps</p>
                  <p className="mt-3 leading-7 text-white/70">{selected.outcome}</p>
                  <p className="mt-4 leading-7 text-white/82">{selected.cta}</p>
                </div>
                <Link href={selected.href} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-gold transition hover:text-white">
                  View all programs <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            <div className="relative z-10 mt-10 flex items-center justify-between gap-5 border-t border-white/10 pt-6">
              <div className="flex gap-2">
                {services.map((service, index) => (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Show ${service.title}`}
                    className={`h-2.5 rounded-full transition-all ${index === active ? "w-10 bg-gold" : "w-2.5 bg-white/25 hover:bg-white/55"}`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={previous} aria-label="Previous service" className="focus-ring grid h-11 w-11 place-items-center rounded border border-white/15 text-white transition hover:border-gold hover:text-gold">
                  <ArrowLeft size={19} />
                </button>
                <button type="button" onClick={next} aria-label="Next service" className="focus-ring grid h-11 w-11 place-items-center rounded bg-gold text-charcoal transition hover:bg-white">
                  <ArrowRight size={19} />
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
