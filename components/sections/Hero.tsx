import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";

export function Hero() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="container-lux grid min-h-[calc(100vh-var(--header-height))] items-center gap-12 px-5 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="animate-rise">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-burgundy">Licensed Canadian Immigration Guidance</p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.03] text-charcoal sm:text-6xl lg:text-7xl">
            Your Path to Canada Starts Here
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/72 sm:text-xl">
            Professional immigration guidance tailored to your unique journey.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/consultation-booking">
              Book Consultation <ArrowRight size={18} />
            </ButtonLink>
            <ButtonLink href="/assessment-form" variant="secondary">
              Free Assessment
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-3 text-sm font-medium text-charcoal/70 sm:grid-cols-3">
            {["Confidential review", "Online consultations", "Clear next steps"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 className="text-gold" size={18} /> {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative animate-rise [animation-delay:140ms]">
          <div className="luxury-border relative overflow-hidden rounded-lg bg-porcelain shadow-luxury">
            <video
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/11]"
              src="/videos/canada-hero-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Canadian landscape video representing immigration pathways"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/42 via-transparent to-white/5" />
            <div className="absolute bottom-5 left-5 right-5 rounded border border-gold/35 bg-charcoal/82 p-5 shadow-luxury backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Proudly Canadian</p>
              <p className="mt-2 font-serif text-2xl text-white">Premium immigration strategy for your future in Canada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
