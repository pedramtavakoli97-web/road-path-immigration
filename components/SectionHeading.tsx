type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, copy, align = "center" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-semibold uppercase tracking-[0.26em] text-burgundy">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-3xl leading-tight text-charcoal sm:text-4xl lg:text-5xl">{title}</h2>
      {copy ? <p className="mt-5 text-base leading-8 text-charcoal/70 sm:text-lg">{copy}</p> : null}
    </div>
  );
}
