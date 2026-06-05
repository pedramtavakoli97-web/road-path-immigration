"use client";

import { ArrowLeft, ArrowRight, BriefcaseBusiness, Building2, FileBadge2, GraduationCap, Plane } from "lucide-react";
import { useMemo, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";

const services = [
  {
    title: "ویزای کار",
    fullTitle: "ویزای کار و مهاجرت از طریق کارفرما",
    kicker: "مهاجرت کاری",
    icon: BriefcaseBusiness,
    summary:
      "ما به کارفرمایان و نیروی کار خارجی در تمامی مراحل اخذ مجوز کار و مهاجرت کاری کمک می‌کنیم؛ از پرونده‌های LMIA تا تمدید مجوز کار و مسیرهای کاری کانادا.",
    focus: ["ارزیابی بهترین مسیر دریافت مجوز کار", "تهیه و ارسال درخواست LMIA", "آماده‌سازی درخواست‌های مجوز کار و تمدید", "بررسی قراردادها و مدارک استخدامی"],
    outcome:
      "دریافت مجوز کار معتبر و امکان اشتغال قانونی در کانادا، همراه با برنامه‌ریزی برای تبدیل اقامت موقت به اقامت دائم."
  },
  {
    title: "ویزای تحصیلی",
    fullTitle: "ویزای تحصیلی و خدمات دانشجویی",
    kicker: "دانشجویان",
    icon: GraduationCap,
    summary:
      "ما به دانشجویان بین‌المللی و خانواده‌های آن‌ها در دریافت ویزای تحصیلی، تمدید مجوز تحصیل، PGWP و مسیرهای تبدیل تحصیل به اقامت دائم کمک می‌کنیم.",
    focus: ["بررسی شرایط پذیرش و برنامه تحصیلی", "آماده‌سازی پرونده ویزای تحصیلی", "راهنمایی درباره کار حین تحصیل", "مشاوره و آماده‌سازی پرونده PGWP"],
    outcome:
      "دریافت ویزای تحصیلی، مجوز کار پس از فارغ‌التحصیلی و ایجاد مسیر مطمئن برای اخذ اقامت دائم کانادا."
  },
  {
    title: "ویزای توریستی",
    fullTitle: "ویزای توریستی و سوپر ویزا",
    kicker: "اقامت موقت",
    icon: Plane,
    summary:
      "ما پرونده‌های ویزای توریستی و سوپر ویزای والدین و پدربزرگ و مادربزرگ را با تمرکز بر مدارک کامل، توان مالی و وابستگی به کشور مبدا آماده می‌کنیم.",
    focus: ["انتخاب بهترین گزینه بین TRV، eTA و سوپر ویزا", "تهیه دعوتنامه و مدارک مالی", "آماده‌سازی بیمه درمانی سوپر ویزا", "ارسال پرونده و پیگیری مکاتبات"],
    outcome:
      "دریافت مجوز ورود موقت به کانادا و دریافت مشاوره برای تمدید اقامت یا تغییر وضعیت در صورت نیاز."
  },
  {
    title: "مهاجرت تجاری",
    fullTitle: "مهاجرت تجاری، سرمایه‌گذاری و کارآفرینی",
    kicker: "بیزینس و سرمایه‌گذاری",
    icon: Building2,
    summary:
      "ما به کارآفرینان، صاحبان کسب‌وکار و سرمایه‌گذاران در مسیرهای مهاجرت تجاری کانادا مانند استارتاپ ویزا و برنامه‌های کارآفرینی استانی کمک می‌کنیم.",
    focus: ["ارزیابی شرایط کسب‌وکار", "تهیه بیزینس پلن و پیش‌بینی مالی", "هماهنگی با سازمان‌های مورد تأیید", "برنامه‌ریزی برای تبدیل وضعیت به اقامت دائم"],
    outcome:
      "دریافت تأییدیه‌های استانی یا فدرال و حرکت به سمت اخذ اقامت دائم کانادا."
  },
  {
    title: "PR و اعتراضات",
    fullTitle: "خدمات کارت اقامت دائم، مدارک سفر و اعتراضات مهاجرتی",
    kicker: "اقامت دائم",
    icon: FileBadge2,
    summary:
      "ما در زمینه تمدید یا تعویض کارت اقامت دائم، دریافت مدارک سفر، بررسی شرایط حفظ اقامت و اعتراض به تصمیمات اداره مهاجرت خدمات تخصصی ارائه می‌دهیم.",
    focus: ["آماده‌سازی پرونده تمدید یا تعویض کارت PR", "تهیه درخواست مدارک سفر", "بررسی شرایط حفظ اقامت", "تهیه پرونده‌های اعتراض و Judicial Review"],
    outcome:
      "حفظ یا بازگرداندن وضعیت اقامت دائم، دریافت مدارک سفر و افزایش شانس موفقیت در اعتراضات مهاجرتی."
  }
];

export function FarsiServiceSlider() {
  const [active, setActive] = useState(0);
  const selected = services[active];
  const Icon = selected.icon;
  const slideNumber = useMemo(() => String(active + 1).padStart(2, "0"), [active]);

  const next = () => setActive((current) => (current + 1) % services.length);
  const previous = () => setActive((current) => (current - 1 + services.length) % services.length);

  return (
    <section dir="rtl" className="section-pad bg-white">
      <div className="container-lux">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-burgundy">انتخاب خدمات</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-charcoal sm:text-4xl lg:text-5xl">خدمات مهاجرتی را بر اساس مسیر خود انتخاب کنید</h2>
          <p className="mt-5 text-base leading-8 text-charcoal/70 sm:text-lg">
            هر بخش را انتخاب کنید تا خلاصه خدمات، تمرکز مشاوره و نتیجه مورد انتظار را مشاهده کنید.
          </p>
        </div>

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
                  aria-pressed={isActive}
                  className={`focus-ring group flex min-h-20 items-center gap-4 rounded border p-4 text-right transition duration-300 ${
                    isActive
                      ? "border-gold bg-burgundy text-white shadow-gold"
                      : "border-charcoal/10 bg-porcelain text-charcoal hover:border-gold hover:bg-white hover:shadow-luxury"
                  }`}
                >
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded transition ${isActive ? "bg-white text-burgundy" : "bg-white text-burgundy group-hover:bg-gold group-hover:text-charcoal"}`}>
                    <ServiceIcon size={21} />
                  </span>
                  <span>
                    <span className={`block text-xs font-semibold uppercase tracking-[0.12em] ${isActive ? "text-gold" : "text-burgundy"}`}>{service.kicker}</span>
                    <span className="mt-1 block font-serif text-xl leading-tight">{service.title}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <article key={selected.fullTitle} className="luxury-border relative overflow-hidden rounded-lg bg-charcoal p-7 text-white shadow-luxury animate-rise sm:p-10 lg:p-12">
            <div className="absolute left-8 top-8 font-serif text-8xl text-white/[0.04]">{slideNumber}</div>
            <div className="relative z-10 grid gap-10 xl:grid-cols-[1fr_0.82fr]">
              <div>
                <div className="grid h-16 w-16 place-items-center rounded border border-gold/40 bg-white/8 text-gold">
                  <Icon size={30} />
                </div>
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-gold">{selected.kicker}</p>
                <h3 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">{selected.fullTitle}</h3>
                <p className="mt-5 max-w-2xl text-lg leading-9 text-white/72">{selected.summary}</p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <ButtonLink href="/assessment-form" variant="secondary" className="border-gold bg-white text-charcoal hover:bg-gold hover:text-charcoal">
                    ارزیابی رایگان
                  </ButtonLink>
                  <ButtonLink href="/fa/consultation-booking" className="bg-gold text-charcoal hover:bg-white">
                    رزرو مشاوره
                  </ButtonLink>
                </div>
              </div>

              <div className="rounded border border-white/10 bg-white/[0.06] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">تمرکز خدمات</p>
                <ul className="mt-5 grid gap-4">
                  {selected.focus.map((detail) => (
                    <li key={detail} className="flex gap-3 text-white/76">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 border-t border-white/10 pt-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">نتیجه و مراحل بعدی</p>
                  <p className="mt-3 leading-8 text-white/72">{selected.outcome}</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-10 flex items-center justify-between gap-5 border-t border-white/10 pt-6">
              <div className="flex gap-2">
                {services.map((service, index) => (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`نمایش ${service.title}`}
                    className={`h-2.5 rounded-full transition-all ${index === active ? "w-10 bg-gold" : "w-2.5 bg-white/25 hover:bg-white/55"}`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={previous} aria-label="خدمت قبلی" className="focus-ring grid h-11 w-11 place-items-center rounded border border-white/15 text-white transition hover:border-gold hover:text-gold">
                  <ArrowRight size={19} />
                </button>
                <button type="button" onClick={next} aria-label="خدمت بعدی" className="focus-ring grid h-11 w-11 place-items-center rounded bg-gold text-charcoal transition hover:bg-white">
                  <ArrowLeft size={19} />
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
