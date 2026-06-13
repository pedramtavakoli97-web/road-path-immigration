import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";

type FarsiProgramPageProps = {
  title: string;
  copy: string;
  overview: string;
  audience?: string[];
  services: string[];
  outcome: string;
  cta: string;
};

export function FarsiProgramPage({ title, copy, overview, audience, services, outcome, cta }: FarsiProgramPageProps) {
  return (
    <div dir="rtl">
      <section className="bg-porcelain px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="container-lux">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-burgundy">برنامه‌ها</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-charcoal sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-charcoal/72">{copy}</p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-lux max-w-5xl">
          <div className="grid gap-6">
            <article className="rounded-lg border border-charcoal/10 bg-porcelain p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-charcoal">معرفی</h2>
              <p className="mt-4 leading-8 text-charcoal/72">{overview}</p>
            </article>

            {audience ? (
              <article className="rounded-lg border border-charcoal/10 bg-white p-6 sm:p-8">
                <h2 className="font-serif text-2xl text-charcoal">این برنامه مناسب چه کسانی است؟</h2>
                <ul className="mt-4 grid gap-3 leading-8 text-charcoal/72">
                  {audience.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ) : null}

            <article className="rounded-lg border border-charcoal/10 bg-white p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-charcoal">خدمات ما</h2>
              <ul className="mt-4 grid gap-3 leading-8 text-charcoal/72">
                {services.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-lg bg-charcoal p-6 text-white sm:p-8">
              <h2 className="font-serif text-2xl">نتیجه و مراحل بعدی</h2>
              <p className="mt-4 leading-8 text-white/76">{outcome}</p>
              <div className="mt-8">
                <ButtonLink href="/fa/consultation-booking" className="bg-gold text-charcoal hover:bg-white">
                  {cta} <ArrowRight size={18} />
                </ButtonLink>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
