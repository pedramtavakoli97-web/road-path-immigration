"use client";

import { AlertCircle, BriefcaseBusiness, Building2, CheckCircle2, FileBadge2, GraduationCap, HeartHandshake, Landmark, Plane } from "lucide-react";
import { useMemo, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";

type CategoryId = "family" | "economic" | "work" | "study" | "visitor" | "business" | "pr";

type Option = {
  label: string;
  value: number;
  note?: string;
};

type Field = {
  id: string;
  label: string;
  help: string;
  max: number;
  options: Option[];
};

type Section = {
  title: string;
  fields: Field[];
};

type Category = {
  id: CategoryId;
  title: string;
  short: string;
  icon: typeof Landmark;
  description: string;
  sections: Section[];
  nextStep: string;
};

const categories: Category[] = [
  {
    id: "family",
    title: "Family Sponsorship",
    short: "Family",
    icon: HeartHandshake,
    description: "Spouse, partner, dependent children, parents and grandparents sponsorship readiness.",
    nextStep: "Book a family sponsorship consultation to confirm sponsor eligibility, relationship evidence, inland or outland strategy, and document timing.",
    sections: [
      {
        title: "Sponsor Eligibility",
        fields: [
          { id: "sponsor_status", label: "Sponsor status in Canada", help: "Sponsor must generally be a Canadian citizen or permanent resident.", max: 20, options: yesNoOptions(20, "Canadian citizen or PR", "Not confirmed") },
          { id: "sponsor_residence", label: "Sponsor residence and availability", help: "Residency, intention to reside, and ability to support can affect the strategy.", max: 15, options: qualityOptions(15) },
          { id: "financial_support", label: "Financial and undertaking readiness", help: "Some sponsorship streams require stronger financial evidence.", max: 15, options: qualityOptions(15) }
        ]
      },
      {
        title: "Relationship & Documents",
        fields: [
          { id: "relationship_evidence", label: "Relationship evidence", help: "Proof of genuine relationship, family connection, or dependency.", max: 25, options: qualityOptions(25) },
          { id: "civil_documents", label: "Civil and identity documents", help: "Passports, marriage/birth records, translations, photos, and supporting evidence.", max: 15, options: qualityOptions(15) },
          { id: "previous_refusals", label: "Previous refusals or complications", help: "Prior refusals, inadmissibility, or missing records require a stronger plan.", max: 10, options: riskOptions(10) }
        ]
      }
    ]
  },
  {
    id: "economic",
    title: "Express Entry & Provincial Nominee Programs (PNPs)",
    short: "Express Entry & PNP",
    icon: Landmark,
    description: "CRS, FSW eligibility, provincial nomination fit, and permanent residence document readiness.",
    nextStep: "Request a CRS and PNP assessment to confirm exact score, target provinces, document gaps, and improvement strategy.",
    sections: [
      {
        title: "Human Capital",
        fields: [
          { id: "age", label: "Age range", help: "Age affects CRS and Federal Skilled Worker selection factors.", max: 15, options: ageOptions() },
          { id: "education", label: "Education level / ECA readiness", help: "Education and credential assessment are core economic immigration factors.", max: 20, options: educationOptions(20) },
          { id: "language", label: "Language test results", help: "IELTS, CELPIP, TEF, or TCF results can heavily affect eligibility.", max: 25, options: languageOptions(25) },
          { id: "work_experience", label: "Skilled work experience", help: "Relevant NOC/TEER experience and reference letters matter.", max: 20, options: experienceOptions(20) }
        ]
      },
      {
        title: "PNP & Application Strength",
        fields: [
          { id: "canadian_connection", label: "Canadian connection", help: "Canadian work, study, job offer, family, or province ties can improve options.", max: 15, options: qualityOptions(15) },
          { id: "pnp_fit", label: "Provincial stream fit", help: "Occupation, job offer, province ties, and targeted draws affect PNP options.", max: 20, options: qualityOptions(20) },
          { id: "settlement_funds", label: "Settlement funds and documents", help: "Proof of funds, police certificates, medicals, and references must be planned.", max: 15, options: qualityOptions(15) }
        ]
      }
    ]
  },
  {
    id: "work",
    title: "Work Permits & Employer",
    short: "Work Permits",
    icon: BriefcaseBusiness,
    description: "Employer-specific permits, LMIA, LMIA-exempt routes, Global Talent Stream, intra-company transfer, and extensions.",
    nextStep: "Book a work permit strategy review to identify LMIA, LMIA-exempt, employer-specific, open work permit, or extension options.",
    sections: [
      {
        title: "Employer & Job Offer",
        fields: [
          { id: "job_offer", label: "Canadian job offer", help: "A detailed offer letter or contract is often central to work permit strategy.", max: 25, options: yesPartialNoOptions(25, "Offer confirmed", "Offer in progress", "No offer yet") },
          { id: "employer_readiness", label: "Employer compliance readiness", help: "Employer business legitimacy, recruitment, wages, and compliance can affect applications.", max: 20, options: qualityOptions(20) },
          { id: "lmia_or_exemption", label: "LMIA or exemption pathway", help: "The route may involve LMIA, CUSMA, intra-company transfer, significant benefit, or another exemption.", max: 20, options: yesPartialNoOptions(20, "Pathway identified", "Needs review", "Unknown") }
        ]
      },
      {
        title: "Worker Profile",
        fields: [
          { id: "worker_experience", label: "Worker experience and qualifications", help: "Experience, education, licensing, and role fit support approval.", max: 20, options: qualityOptions(20) },
          { id: "temporary_intent", label: "Temporary intent and status history", help: "Travel history, current status, and purpose of work should be coherent.", max: 10, options: qualityOptions(10) },
          { id: "extension_timing", label: "Timing / extension urgency", help: "Expired or near-expiry status requires careful timing.", max: 10, options: riskOptions(10) }
        ]
      }
    ]
  },
  {
    id: "study",
    title: "Study Permits & Student Support",
    short: "Study Permits",
    icon: GraduationCap,
    description: "Study permits, extensions, PGWP planning, co-op work authorization, and study-to-PR strategy.",
    nextStep: "Start a study permit review to confirm DLI/program fit, study plan, finances, and PGWP or PR pathway.",
    sections: [
      {
        title: "Program & Study Plan",
        fields: [
          { id: "dli_acceptance", label: "DLI acceptance / admission", help: "A valid acceptance from a designated learning institution is essential.", max: 25, options: yesPartialNoOptions(25, "Accepted", "Application in progress", "Not yet") },
          { id: "study_plan", label: "Study plan strength", help: "Program choice should make sense with education, career, and future plans.", max: 25, options: qualityOptions(25) },
          { id: "academic_history", label: "Academic and career consistency", help: "Past studies, employment, and future purpose should align.", max: 15, options: qualityOptions(15) }
        ]
      },
      {
        title: "Financials & Long-Term Planning",
        fields: [
          { id: "student_funds", label: "Tuition and living expense evidence", help: "Financial proof should cover tuition, living costs, and sponsor support where applicable.", max: 25, options: qualityOptions(25) },
          { id: "home_ties", label: "Home-country ties and temporary intent", help: "Family, employment, assets, and purpose can support temporary intent.", max: 15, options: qualityOptions(15) },
          { id: "pgwp_pr", label: "PGWP / PR pathway planning", help: "The program should support future work and permanent residence plans where possible.", max: 15, options: qualityOptions(15) }
        ]
      }
    ]
  },
  {
    id: "visitor",
    title: "Visitor Visas & Super Visa",
    short: "Visitor / Super Visa",
    icon: Plane,
    description: "Temporary resident visa, eTA review, invitation letters, super visa insurance, and visitor extension planning.",
    nextStep: "Request a visitor or super visa review to prepare invitation letters, financial evidence, ties documents, and super visa insurance where needed.",
    sections: [
      {
        title: "Purpose & Temporary Intent",
        fields: [
          { id: "visit_purpose", label: "Purpose of visit", help: "Tourism, family visit, business visit, or super visa purpose should be clear.", max: 20, options: qualityOptions(20) },
          { id: "ties_home", label: "Ties to home country", help: "Employment, family, property, studies, or obligations can support return intent.", max: 25, options: qualityOptions(25) },
          { id: "travel_history", label: "Travel and compliance history", help: "Prior compliant travel can strengthen a temporary resident case.", max: 15, options: qualityOptions(15) }
        ]
      },
      {
        title: "Support & Super Visa Details",
        fields: [
          { id: "visitor_funds", label: "Financial support", help: "Applicant and host financial evidence should match the trip plan.", max: 20, options: qualityOptions(20) },
          { id: "invitation", label: "Invitation and host documents", help: "Family visits and super visa cases often need host support documents.", max: 15, options: qualityOptions(15) },
          { id: "super_visa_insurance", label: "Super visa insurance / medical readiness", help: "Parents and grandparents need super visa-specific insurance and medical planning.", max: 15, options: yesPartialNoOptions(15, "Ready if needed", "Needs review", "Not applicable / unknown") }
        ]
      }
    ]
  },
  {
    id: "business",
    title: "Business Immigration",
    short: "Business",
    icon: Building2,
    description: "Start-Up Visa, provincial entrepreneur streams, investor readiness, business plans, and performance requirements.",
    nextStep: "Schedule a business immigration strategy session to review stream fit, business plan, designated organization options, investment evidence, and timelines.",
    sections: [
      {
        title: "Business Concept & Experience",
        fields: [
          { id: "business_experience", label: "Business ownership / management experience", help: "Entrepreneur and investor programs often require strong business background.", max: 20, options: qualityOptions(20) },
          { id: "innovation", label: "Innovation or market potential", help: "Start-Up Visa and entrepreneur streams depend on a credible, scalable plan.", max: 20, options: qualityOptions(20) },
          { id: "business_plan", label: "Business plan readiness", help: "A professional plan, projections, and market strategy are usually required.", max: 25, options: qualityOptions(25) }
        ]
      },
      {
        title: "Funding & Program Fit",
        fields: [
          { id: "investment_funds", label: "Investment / settlement funds", help: "Funding source, availability, and transferability should be documented.", max: 25, options: qualityOptions(25) },
          { id: "designated_support", label: "Designated organization or provincial fit", help: "Some pathways need designated organization support or provincial stream fit.", max: 20, options: qualityOptions(20) },
          { id: "job_creation", label: "Job creation / performance commitments", help: "Provincial entrepreneur streams may require job creation and business performance.", max: 10, options: qualityOptions(10) }
        ]
      }
    ]
  },
  {
    id: "pr",
    title: "PR Card Services, Travel Documents & Appeals",
    short: "PR / Appeals",
    icon: FileBadge2,
    description: "PR card renewal or replacement, PRTD, residency obligation review, refusals, restoration, and appeal strategy.",
    nextStep: "Book a PR status or refusal consultation to review residency days, travel history, refusal reasons, deadlines, and possible remedies.",
    sections: [
      {
        title: "Status & Residency",
        fields: [
          { id: "pr_status", label: "Current PR/status document situation", help: "Valid, expired, lost, outside Canada, or complex status must be identified.", max: 20, options: yesPartialNoOptions(20, "Status documented", "Needs review", "Unclear") },
          { id: "residency_days", label: "Residency obligation evidence", help: "Days in Canada, travel records, tax filings, and proof of residence matter.", max: 25, options: qualityOptions(25) },
          { id: "travel_records", label: "Travel history records", help: "Entry/exit history and supporting documents can be central.", max: 15, options: qualityOptions(15) }
        ]
      },
      {
        title: "Remedies & Risk",
        fields: [
          { id: "deadline", label: "Deadline or urgency control", help: "Appeals, judicial review, restoration, and document requests can have strict deadlines.", max: 20, options: riskOptions(20) },
          { id: "refusal_reasons", label: "Refusal or inadmissibility reasons", help: "Written reasons, prior applications, and evidence gaps should be reviewed.", max: 20, options: riskOptions(20) },
          { id: "supporting_evidence", label: "Humanitarian or supporting evidence", help: "Family hardship, establishment, medical, employment, and compassionate factors may matter.", max: 15, options: qualityOptions(15) }
        ]
      }
    ]
  }
];

const initialAnswers = Object.fromEntries(
  categories.flatMap((category) => category.sections.flatMap((section) => section.fields.map((field) => [field.id, -1])))
) as Record<string, number>;

export function CalculatorTool() {
  const [activeId, setActiveId] = useState<CategoryId>("family");
  const [answers, setAnswers] = useState<Record<string, number>>(initialAnswers);

  const active = categories.find((category) => category.id === activeId) ?? categories[0];

  const result = useMemo(() => {
    const fields = active.sections.flatMap((section) => section.fields);
    const total = fields.reduce((sum, field) => sum + field.max, 0);
    const score = fields.reduce((sum, field) => sum + Math.max(0, answers[field.id] ?? 0), 0);
    const percent = total ? Math.round((score / total) * 100) : 0;
    const band = percent >= 78 ? "Strong readiness" : percent >= 58 ? "Promising, with gaps" : "Needs focused preparation";

    const strengths = fields
      .filter((field) => Math.max(0, answers[field.id] ?? 0) >= field.max * 0.72)
      .map((field) => field.label);

    const improvements = fields
      .filter((field) => Math.max(0, answers[field.id] ?? 0) < field.max * 0.55)
      .map((field) => field.label);

    return { total, score, percent, band, strengths, improvements };
  }, [active, answers]);

  return (
    <div className="grid gap-8">
      <div className="rounded-lg bg-charcoal p-5 text-white shadow-luxury sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Calculator Categories</p>
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = active.id === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveId(category.id)}
                aria-pressed={isActive}
                className={`focus-ring flex min-h-20 items-center gap-3 rounded border p-4 text-left transition duration-300 ${
                  isActive ? "border-gold bg-gold text-charcoal" : "border-white/10 bg-white/[0.04] text-white hover:border-gold hover:bg-white/[0.08]"
                }`}
              >
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded ${isActive ? "bg-charcoal text-gold" : "bg-white/8 text-gold"}`}>
                  <Icon size={19} />
                </span>
                <span className="font-serif text-base leading-tight sm:text-lg">{category.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_370px]">
        <div className="luxury-border rounded-lg bg-white p-6 shadow-luxury sm:p-8">
          <div className="flex flex-col gap-5 border-b border-charcoal/10 pb-7 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-burgundy">Get Your Score</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-charcoal">{active.title}</h2>
              <p className="mt-4 max-w-3xl leading-8 text-charcoal/70">{active.description}</p>
            </div>
            <ButtonLink href="/assessment-form" variant="secondary" className="shrink-0">
              Full Assessment
            </ButtonLink>
          </div>

          <div className="mt-8 grid gap-8">
            {active.sections.map((section) => (
              <section key={section.title} className="rounded-lg bg-porcelain p-5 sm:p-6">
                <h3 className="font-serif text-2xl text-charcoal">{section.title}</h3>
                <div className="mt-5 grid gap-5">
                  {section.fields.map((field) => (
                    <label key={field.id} className="grid gap-2">
                      <span className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                        <span className="font-semibold text-charcoal">{field.label}</span>
                        <span className="text-sm font-semibold text-burgundy">{Math.max(0, answers[field.id] ?? 0)} / {field.max} pts</span>
                      </span>
                      <span className="text-sm leading-6 text-charcoal/58">{field.help}</span>
                      <select
                        value={answers[field.id] ?? 0}
                        onChange={(event) => setAnswers((current) => ({ ...current, [field.id]: Number(event.target.value) }))}
                        className="focus-ring min-h-12 rounded border border-charcoal/15 bg-white px-4 text-base text-charcoal outline-none transition hover:border-gold"
                      >
                        <option value={-1}>Select an answer</option>
                        {field.options.map((option) => (
                          <option key={`${field.id}-${option.label}`} value={option.value}>
                            {option.label}{option.note ? ` - ${option.note}` : ""}
                          </option>
                        ))}
                      </select>
                    </label>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <aside className="grid gap-5 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-lg bg-charcoal p-6 text-white shadow-luxury">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Score Result</p>
            <div className="mt-5 flex items-end gap-3">
              <p className="font-serif text-6xl">{result.score}</p>
              <p className="pb-2 text-white/58">/ {result.total}</p>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-gold transition-all duration-500" style={{ width: `${result.percent}%` }} />
            </div>
            <p className="mt-5 font-serif text-2xl">{result.band}</p>
            <p className="mt-3 text-sm leading-6 text-white/64">
              This is a planning score, not a legal decision. A consultation should confirm documents, current rules, deadlines, and exact eligibility.
            </p>
          </div>

          <Breakdown title="Strong Areas" items={result.strengths} icon="good" empty="Select stronger answers to reveal profile strengths." />
          <Breakdown title="Needs Review" items={result.improvements} icon="warn" empty="No major weak areas selected for this category." />

          <div className="rounded-lg bg-porcelain p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-burgundy">Recommended Next Step</p>
            <p className="mt-3 leading-7 text-charcoal/72">{active.nextStep}</p>
            <ButtonLink href="/consultation-booking" className="mt-5 w-full">
              Book Consultation
            </ButtonLink>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Breakdown({ title, items, icon, empty }: { title: string; items: string[]; icon: "good" | "warn"; empty: string }) {
  const Icon = icon === "good" ? CheckCircle2 : AlertCircle;

  return (
    <div className="rounded-lg border border-charcoal/10 bg-white p-6 shadow-sm">
      <p className="font-serif text-2xl text-charcoal">{title}</p>
      <ul className="mt-4 grid gap-3">
        {items.length ? items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-charcoal/72">
            <Icon className={icon === "good" ? "mt-0.5 shrink-0 text-gold" : "mt-0.5 shrink-0 text-burgundy"} size={17} />
            <span>{item}</span>
          </li>
        )) : (
          <li className="text-sm leading-6 text-charcoal/55">{empty}</li>
        )}
      </ul>
    </div>
  );
}

function yesNoOptions(max: number, yes: string, no: string): Option[] {
  return [
    { label: yes, value: max },
    { label: no, value: 0 }
  ];
}

function yesPartialNoOptions(max: number, yes: string, partial: string, no: string): Option[] {
  return [
    { label: yes, value: max },
    { label: partial, value: Math.round(max * 0.55) },
    { label: no, value: 0 }
  ];
}

function qualityOptions(max: number): Option[] {
  return [
    { label: "Strong / complete", value: max },
    { label: "Moderate / needs review", value: Math.round(max * 0.6) },
    { label: "Weak / not ready", value: Math.round(max * 0.25) },
    { label: "Not available", value: 0 }
  ];
}

function riskOptions(max: number): Option[] {
  return [
    { label: "No major risk identified", value: max },
    { label: "Some risk / needs review", value: Math.round(max * 0.55) },
    { label: "High risk or urgent deadline", value: Math.round(max * 0.15) }
  ];
}

function ageOptions(): Option[] {
  return [
    { label: "18-29", value: 15 },
    { label: "30-35", value: 12 },
    { label: "36-40", value: 8 },
    { label: "41-45", value: 4 },
    { label: "46+", value: 0 }
  ];
}

function educationOptions(max: number): Option[] {
  return [
    { label: "Master's / professional / doctorate", value: max },
    { label: "Bachelor's or two credentials", value: Math.round(max * 0.82) },
    { label: "Diploma / trade / post-secondary", value: Math.round(max * 0.58) },
    { label: "Secondary or less", value: Math.round(max * 0.25) }
  ];
}

function languageOptions(max: number): Option[] {
  return [
    { label: "CLB 9+ or equivalent", value: max },
    { label: "CLB 7-8 or equivalent", value: Math.round(max * 0.72) },
    { label: "CLB 5-6 or equivalent", value: Math.round(max * 0.42) },
    { label: "No valid test yet", value: 0 }
  ];
}

function experienceOptions(max: number): Option[] {
  return [
    { label: "3+ years skilled experience", value: max },
    { label: "2 years skilled experience", value: Math.round(max * 0.72) },
    { label: "1 year skilled experience", value: Math.round(max * 0.5) },
    { label: "Less than 1 year / unclear", value: 0 }
  ];
}
