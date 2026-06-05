type FarsiPageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

export function FarsiPageHero({ eyebrow, title, copy }: FarsiPageHeroProps) {
  return (
    <section dir="rtl" className="bg-porcelain px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="container-lux">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-burgundy">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-charcoal sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-9 text-charcoal/72">{copy}</p>
      </div>
    </section>
  );
}
