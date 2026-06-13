"use client";

import { AlertCircle, CheckCircle2, ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";

type Education =
  | "less-secondary"
  | "secondary"
  | "one-year"
  | "two-year"
  | "bachelor"
  | "two-more"
  | "masters"
  | "doctoral";

type CanadianStudy = "none" | "one-two" | "three-plus";

const ageWithSpouse: Record<string, number> = {
  "17": 0, "18": 90, "19": 95, "20-29": 100, "30": 95, "31": 90, "32": 85, "33": 80, "34": 75, "35": 70, "36": 65, "37": 60, "38": 55, "39": 50, "40": 45, "41": 35, "42": 25, "43": 15, "44": 5, "45": 0
};

const ageSingle: Record<string, number> = {
  "17": 0, "18": 99, "19": 105, "20-29": 110, "30": 105, "31": 99, "32": 94, "33": 88, "34": 83, "35": 77, "36": 72, "37": 66, "38": 61, "39": 55, "40": 50, "41": 39, "42": 28, "43": 17, "44": 6, "45": 0
};

const educationWithSpouse: Record<Education, number> = {
  "less-secondary": 0,
  secondary: 28,
  "one-year": 84,
  "two-year": 91,
  bachelor: 112,
  "two-more": 119,
  masters: 126,
  doctoral: 140
};

const educationSingle: Record<Education, number> = {
  "less-secondary": 0,
  secondary: 30,
  "one-year": 90,
  "two-year": 98,
  bachelor: 120,
  "two-more": 128,
  masters: 135,
  doctoral: 150
};

const spouseEducation: Record<Education, number> = {
  "less-secondary": 0,
  secondary: 2,
  "one-year": 6,
  "two-year": 7,
  bachelor: 8,
  "two-more": 9,
  masters: 10,
  doctoral: 10
};

const canadianWorkWithSpouse = [0, 35, 46, 56, 63, 70];
const canadianWorkSingle = [0, 40, 53, 64, 72, 80];
const spouseCanadianWork = [0, 5, 7, 8, 9, 10];

const clbOptions = [
  { value: 0, label: "Less than CLB 4" },
  { value: 4, label: "CLB 4" },
  { value: 5, label: "CLB 5" },
  { value: 6, label: "CLB 6" },
  { value: 7, label: "CLB 7" },
  { value: 8, label: "CLB 8" },
  { value: 9, label: "CLB 9" },
  { value: 10, label: "CLB 10 or more" }
];

const ageOptions: Array<[string, string]> = [
  ["17", "17 years of age or less"],
  ["18", "18 years of age"],
  ["19", "19 years of age"],
  ["20-29", "20 to 29 years of age"],
  ["30", "30 years of age"],
  ["31", "31 years of age"],
  ["32", "32 years of age"],
  ["33", "33 years of age"],
  ["34", "34 years of age"],
  ["35", "35 years of age"],
  ["36", "36 years of age"],
  ["37", "37 years of age"],
  ["38", "38 years of age"],
  ["39", "39 years of age"],
  ["40", "40 years of age"],
  ["41", "41 years of age"],
  ["42", "42 years of age"],
  ["43", "43 years of age"],
  ["44", "44 years of age"],
  ["45", "45 years of age or more"]
];

const educationOptions: Array<[Education, string]> = [
  ["less-secondary", "Less than secondary school"],
  ["secondary", "Secondary diploma"],
  ["one-year", "One-year degree, diploma or certificate"],
  ["two-year", "Two-year program"],
  ["bachelor", "Bachelor's degree or three-year program"],
  ["two-more", "Two or more credentials, one three years or longer"],
  ["masters", "Master's or professional degree"],
  ["doctoral", "Doctoral level university degree"]
];

function firstLanguageAbilityPoints(clb: number, withSpouse: boolean) {
  if (clb < 4) return 0;
  if (clb <= 5) return 6;
  if (clb === 6) return withSpouse ? 8 : 9;
  if (clb === 7) return withSpouse ? 16 : 17;
  if (clb === 8) return withSpouse ? 22 : 23;
  if (clb === 9) return withSpouse ? 29 : 31;
  return withSpouse ? 32 : 34;
}

function secondLanguageAbilityPoints(clb: number) {
  if (clb <= 4) return 0;
  if (clb <= 6) return 1;
  if (clb <= 8) return 3;
  return 6;
}

function spouseLanguageAbilityPoints(clb: number) {
  if (clb <= 4) return 0;
  if (clb <= 6) return 1;
  if (clb <= 8) return 3;
  return 5;
}

function educationTransferTier(education: Education) {
  if (education === "less-secondary" || education === "secondary") return "none";
  if (education === "one-year" || education === "two-year" || education === "bachelor") return "post-secondary";
  return "advanced";
}

function yearsIndex(value: number) {
  return Math.min(Math.max(value, 0), 5);
}

function allAtLeast(values: number[], minimum: number) {
  return values.every((value) => value >= minimum);
}

function someBelow(values: number[], minimum: number) {
  return values.some((value) => value < minimum);
}

export function CalculatorTool() {
  const [marital, setMarital] = useState("single");
  const [spouseCanadian, setSpouseCanadian] = useState("no");
  const [spouseComing, setSpouseComing] = useState("yes");
  const [age, setAge] = useState("20-29");
  const [education, setEducation] = useState<Education>("bachelor");
  const [firstLanguage, setFirstLanguage] = useState([9, 9, 9, 9]);
  const [secondLanguage, setSecondLanguage] = useState([0, 0, 0, 0]);
  const [canadianWork, setCanadianWork] = useState(0);
  const [foreignWork, setForeignWork] = useState(0);
  const [certificate, setCertificate] = useState(false);
  const [nomination, setNomination] = useState(false);
  const [sibling, setSibling] = useState(false);
  const [canadianStudy, setCanadianStudy] = useState<CanadianStudy>("none");
  const [frenchNclc7, setFrenchNclc7] = useState(false);
  const [englishLevel, setEnglishLevel] = useState("none-low");
  const [spouseEducationLevel, setSpouseEducationLevel] = useState<Education>("less-secondary");
  const [spouseLanguage, setSpouseLanguage] = useState([0, 0, 0, 0]);
  const [spouseWork, setSpouseWork] = useState(0);

  const withSpouse = (marital === "married" || marital === "common-law") && spouseCanadian === "no" && spouseComing === "yes";

  const result = useMemo(() => {
    const agePoints = (withSpouse ? ageWithSpouse : ageSingle)[age] ?? 0;
    const educationPoints = (withSpouse ? educationWithSpouse : educationSingle)[education];
    const firstLanguagePoints = firstLanguage.reduce((sum, clb) => sum + firstLanguageAbilityPoints(clb, withSpouse), 0);
    const secondLanguageRaw = secondLanguage.reduce((sum, clb) => sum + secondLanguageAbilityPoints(clb), 0);
    const secondLanguagePoints = Math.min(secondLanguageRaw, withSpouse ? 22 : 24);
    const canadianWorkPoints = (withSpouse ? canadianWorkWithSpouse : canadianWorkSingle)[yearsIndex(canadianWork)];
    const core = agePoints + educationPoints + firstLanguagePoints + secondLanguagePoints + canadianWorkPoints;

    const spouse = withSpouse
      ? spouseEducation[spouseEducationLevel] +
        Math.min(spouseLanguage.reduce((sum, clb) => sum + spouseLanguageAbilityPoints(clb), 0), 20) +
        spouseCanadianWork[yearsIndex(spouseWork)]
      : 0;

    const languageAt7 = allAtLeast(firstLanguage, 7);
    const languageAt9 = allAtLeast(firstLanguage, 9);
    const languageAt5 = allAtLeast(firstLanguage, 5);
    const languageAt7SomeBelow9 = languageAt7 && someBelow(firstLanguage, 9);
    const languageAt5SomeBelow7 = languageAt5 && someBelow(firstLanguage, 7);
    const educationTier = educationTransferTier(education);

    const educationLanguage =
      educationTier === "none" || !languageAt7 ? 0 : languageAt9 ? (educationTier === "advanced" ? 50 : 25) : languageAt7SomeBelow9 ? (educationTier === "advanced" ? 25 : 13) : 0;

    const educationCanadianWork =
      educationTier === "none" || canadianWork < 1 ? 0 : canadianWork >= 2 ? (educationTier === "advanced" ? 50 : 25) : educationTier === "advanced" ? 25 : 13;

    const foreignLanguage =
      foreignWork < 1 || !languageAt7 ? 0 : languageAt9 ? (foreignWork >= 3 ? 50 : 25) : languageAt7SomeBelow9 ? (foreignWork >= 3 ? 25 : 13) : 0;

    const foreignCanadianWork =
      foreignWork < 1 || canadianWork < 1 ? 0 : canadianWork >= 2 ? (foreignWork >= 3 ? 50 : 25) : foreignWork >= 3 ? 25 : 13;

    const certificatePoints = certificate && languageAt5 ? (allAtLeast(firstLanguage, 7) ? 50 : languageAt5SomeBelow7 ? 25 : 0) : 0;
    const transferability = Math.min(educationLanguage + educationCanadianWork + foreignLanguage + foreignCanadianWork + certificatePoints, 100);

    const frenchPoints = frenchNclc7 ? (englishLevel === "clb5-plus" ? 50 : 25) : 0;
    const additional =
      (sibling ? 15 : 0) +
      frenchPoints +
      (canadianStudy === "one-two" ? 15 : canadianStudy === "three-plus" ? 30 : 0) +
      (nomination ? 600 : 0);

    const total = core + spouse + transferability + additional;

    return {
      total,
      core,
      spouse,
      transferability,
      additional,
      details: [
        ["Age", agePoints],
        ["Education", educationPoints],
        ["First official language", firstLanguagePoints],
        ["Second official language", secondLanguagePoints],
        ["Canadian work experience", canadianWorkPoints],
        ["Spouse factors", spouse],
        ["Skill transferability", transferability],
        ["Additional points", additional]
      ] as Array<[string, number]>
    };
  }, [age, canadianStudy, canadianWork, certificate, education, englishLevel, firstLanguage, foreignWork, frenchNclc7, nomination, secondLanguage, sibling, spouseEducationLevel, spouseLanguage, spouseWork, withSpouse]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_370px]">
      <div className="luxury-border rounded-lg bg-white p-6 shadow-luxury sm:p-8">
        <div className="border-b border-charcoal/10 pb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-burgundy">Express Entry CRS Calculator</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-charcoal">Comprehensive Ranking System score</h2>
          <p className="mt-4 max-w-3xl leading-8 text-charcoal/70">
            This calculator follows the official Canada.ca CRS criteria. Job offer points are not included because IRCC removed them from the CRS as of March 25, 2025.
          </p>
          <a
            href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score.html"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-burgundy transition hover:text-charcoal"
          >
            Official Canada.ca calculator <ExternalLink size={16} />
          </a>
        </div>

        <div className="mt-8 grid gap-8">
          <FormSection title="Marital status">
            <Select label="What is your marital status?" value={marital} onChange={setMarital} options={[
              ["single", "Never married / single, divorced, separated or widowed"],
              ["married", "Married"],
              ["common-law", "Common-law"]
            ]} />
            {(marital === "married" || marital === "common-law") ? (
              <div className="grid gap-5 md:grid-cols-2">
                <Select label="Is your spouse or partner a Canadian citizen or permanent resident?" value={spouseCanadian} onChange={setSpouseCanadian} options={[["no", "No"], ["yes", "Yes"]]} />
                <Select label="Will your spouse or partner come with you to Canada?" value={spouseComing} onChange={setSpouseComing} options={[["yes", "Yes"], ["no", "No"]]} />
              </div>
            ) : null}
          </FormSection>

          <FormSection title="Core / human capital factors">
            <div className="grid gap-5 md:grid-cols-2">
              <Select label="Age" value={age} onChange={setAge} options={ageOptions} />
              <Select label="Level of education" value={education} onChange={(value) => setEducation(value as Education)} options={educationOptions} />
              <Select label="Canadian skilled work experience" value={String(canadianWork)} onChange={(value) => setCanadianWork(Number(value))} options={yearOptions(5)} />
              <Select label="Foreign skilled work experience" value={String(foreignWork)} onChange={(value) => setForeignWork(Number(value))} options={yearOptions(3)} />
            </div>
          </FormSection>

          <LanguageSection title="First official language" values={firstLanguage} onChange={setFirstLanguage} />
          <LanguageSection title="Second official language" values={secondLanguage} onChange={setSecondLanguage} />

          {withSpouse ? (
            <FormSection title="Spouse or common-law partner factors">
              <div className="grid gap-5 md:grid-cols-2">
                <Select label="Spouse education" value={spouseEducationLevel} onChange={(value) => setSpouseEducationLevel(value as Education)} options={educationOptions} />
                <Select label="Spouse Canadian work experience" value={String(spouseWork)} onChange={(value) => setSpouseWork(Number(value))} options={yearOptions(5)} />
              </div>
              <LanguageSection title="Spouse first official language" values={spouseLanguage} onChange={setSpouseLanguage} nested />
            </FormSection>
          ) : null}

          <FormSection title="Certificates and additional points">
            <div className="grid gap-5 md:grid-cols-2">
              <Select label="Certificate of qualification from Canada" value={certificate ? "yes" : "no"} onChange={(value) => setCertificate(value === "yes")} options={[["no", "No"], ["yes", "Yes"]]} />
              <Select label="Provincial or territorial nomination" value={nomination ? "yes" : "no"} onChange={(value) => setNomination(value === "yes")} options={[["no", "No"], ["yes", "Yes, 600 points"]]} />
              <Select label="Sibling in Canada" value={sibling ? "yes" : "no"} onChange={(value) => setSibling(value === "yes")} options={[["no", "No"], ["yes", "Yes, 15 points"]]} />
              <Select label="Canadian post-secondary education" value={canadianStudy} onChange={(value) => setCanadianStudy(value as CanadianStudy)} options={[
                ["none", "No"],
                ["one-two", "One- or two-year credential"],
                ["three-plus", "Credential of three years or longer"]
              ]} />
              <Select label="French language skills: NCLC 7 or higher in all four abilities" value={frenchNclc7 ? "yes" : "no"} onChange={(value) => setFrenchNclc7(value === "yes")} options={[["no", "No"], ["yes", "Yes"]]} />
              <Select label="English language level for French additional points" value={englishLevel} onChange={setEnglishLevel} options={[
                ["none-low", "CLB 4 or lower, or no English test"],
                ["clb5-plus", "CLB 5 or higher in all four abilities"]
              ]} />
            </div>
          </FormSection>
        </div>
      </div>

      <aside className="grid gap-5 lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-lg bg-charcoal p-6 text-white shadow-luxury">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">CRS Score</p>
          <div className="mt-5 flex items-end gap-3">
            <p className="font-serif text-6xl">{result.total}</p>
            <p className="pb-2 text-white/58">/ 1200</p>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-gold transition-all duration-500" style={{ width: `${Math.min(100, (result.total / 1200) * 100)}%` }} />
          </div>
          <p className="mt-5 text-sm leading-6 text-white/64">
            This result is for general guidance. If the official Express Entry system gives a different result, the official system governs.
          </p>
        </div>

        <div className="rounded-lg border border-charcoal/10 bg-white p-6 shadow-sm">
          <p className="font-serif text-2xl text-charcoal">Score breakdown</p>
          <ul className="mt-4 grid gap-3">
            {result.details.map(([label, value]) => (
              <li key={label} className="flex items-center justify-between gap-4 text-sm leading-6 text-charcoal/72">
                <span>{label}</span>
                <span className="font-semibold text-burgundy">{value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-charcoal/10 bg-white p-6 shadow-sm">
          <p className="font-serif text-2xl text-charcoal">Notes</p>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-charcoal/72">
            <li className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-gold" size={17} />Score includes a maximum of 100 points for skill transferability.</li>
            <li className="flex gap-3"><AlertCircle className="mt-0.5 shrink-0 text-burgundy" size={17} />Job offer CRS points are not counted under the current Canada.ca rules.</li>
          </ul>
        </div>

        <div className="rounded-lg bg-porcelain p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-burgundy">Next Step</p>
          <p className="mt-3 leading-7 text-charcoal/72">Review your CRS score, documents, language results, ECA and possible PNP options in a consultation.</p>
          <ButtonLink href="/consultation-booking" className="mt-5 w-full">
            Book Consultation
          </ButtonLink>
        </div>
      </aside>
    </div>
  );
}

function FormSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-lg bg-porcelain p-5 sm:p-6">
      <h3 className="font-serif text-2xl text-charcoal">{title}</h3>
      <div className="mt-5 grid gap-5">{children}</div>
    </section>
  );
}

function LanguageSection({ title, values, onChange, nested = false }: { title: string; values: number[]; onChange: (values: number[]) => void; nested?: boolean }) {
  const labels = ["Speaking", "Listening", "Reading", "Writing"];

  return (
    <section className={nested ? "rounded-lg bg-white p-5" : "rounded-lg bg-porcelain p-5 sm:p-6"}>
      <h3 className="font-serif text-2xl text-charcoal">{title}</h3>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {labels.map((label, index) => (
          <label key={label} className="grid gap-2">
            <span className="font-semibold text-charcoal">{label}</span>
            <select
              value={values[index]}
              onChange={(event) => {
                const next = [...values];
                next[index] = Number(event.target.value);
                onChange(next);
              }}
              className="focus-ring min-h-12 rounded border border-charcoal/15 bg-white px-4 text-base text-charcoal outline-none transition hover:border-gold"
            >
              {clbOptions.map((option) => (
                <option key={`${label}-${option.value}`} value={option.value}>{option.label}</option>
              ))}
            </select>
          </label>
        ))}
      </div>
    </section>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: Array<[string, string]> }) {
  return (
    <label className="grid gap-2">
      <span className="font-semibold text-charcoal">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="focus-ring min-h-12 rounded border border-charcoal/15 bg-white px-4 text-base text-charcoal outline-none transition hover:border-gold"
      >
        {options.map(([optionValue, optionLabel]) => (
          <option key={optionValue} value={optionValue}>{optionLabel}</option>
        ))}
      </select>
    </label>
  );
}

function yearOptions(maximum: 3 | 5): Array<[string, string]> {
  const base: Array<[string, string]> = [
    ["0", "None or less than a year"],
    ["1", "1 year"],
    ["2", "2 years"],
    ["3", maximum === 3 ? "3 years or more" : "3 years"]
  ];

  if (maximum === 5) {
    base.push(["4", "4 years"], ["5", "5 years or more"]);
  }

  return base;
}
