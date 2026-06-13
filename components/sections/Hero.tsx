import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

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
            Clear immigration guidance based on your situation.
          </p>
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
            <Image
              src="/images/home-photo.jpeg"
              alt="Road Path Immigration office with Vancouver view"
              width={1536}
              height={1024}
              priority
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/11]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/58 via-transparent to-white/5" />
            <div className="absolute bottom-5 left-5 right-5 rounded border border-gold/35 bg-charcoal/82 p-5 shadow-luxury backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Proudly Canadian</p>
              <p className="font-serif text-2xl text-white">Immigration guidance for your future in Canada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
