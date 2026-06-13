import Image from "next/image";

export function FarsiHero() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="container-lux grid min-h-[calc(100vh-var(--header-height))] items-center gap-12 px-5 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div dir="rtl" className="animate-rise text-right">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-burgundy">راهنمایی مهاجرت کانادا</p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.15] text-charcoal sm:text-6xl lg:text-7xl">
            مسیر شما به کانادا از اینجا آغاز می‌شود
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/72 sm:text-xl">
            راهنمایی روشن مهاجرتی بر اساس شرایط شما.
          </p>
        </div>

        <div className="relative animate-rise [animation-delay:140ms]">
          <div className="luxury-border relative overflow-hidden rounded-lg bg-porcelain shadow-luxury">
            <Image
              src="/images/home-photo.jpeg"
              alt="دفتر Road Path Immigration با نمای ونکوور"
              width={1536}
              height={1024}
              priority
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/11]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/58 via-transparent to-white/5" />
            <div className="absolute bottom-5 left-5 right-5 rounded border border-gold/35 bg-charcoal/82 p-5 shadow-luxury backdrop-blur">
              <p className="font-serif text-2xl text-white">همراه شما در مسیر مهاجرت به کانادا</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
