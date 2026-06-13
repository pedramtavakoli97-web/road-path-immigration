import { CalendarCheck, FileCheck2 } from "lucide-react";
import Link from "next/link";

const actions = [
  {
    title: "ارزیابی رایگان",
    copy: "اطلاعات و هدف‌های خود را ارسال کنید تا پیش از مشاوره شرایط شما بررسی شود.",
    href: "/fa/assessment-form",
    label: "شروع ارزیابی",
    icon: FileCheck2
  },
  {
    title: "رزرو مشاوره",
    copy: "یک جلسه مشاوره ۳۰ دقیقه‌ای رزرو کنید و روش پرداخت مورد نظر خود را انتخاب کنید.",
    href: "/fa/consultation-booking",
    label: "رزرو مشاوره",
    icon: CalendarCheck
  }
];

export function FarsiHomeActionCards() {
  return (
    <section dir="rtl" className="bg-white pb-10">
      <div className="container-lux px-5 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {actions.map(({ title, copy, href, label, icon: Icon }) => (
            <Link
              key={title}
              href={href}
              className="group rounded-lg border border-charcoal/10 bg-porcelain p-7 transition hover:border-gold hover:bg-white sm:p-8"
            >
              <div className="flex items-start gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded bg-burgundy text-white transition group-hover:bg-gold group-hover:text-charcoal">
                  <Icon size={25} />
                </span>
                <div>
                  <h2 className="font-serif text-3xl leading-tight text-charcoal">{title}</h2>
                  <p className="mt-4 leading-7 text-charcoal/68">{copy}</p>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-burgundy transition group-hover:text-charcoal">
                    {label}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
