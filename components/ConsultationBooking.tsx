"use client";

import { CalendarDays, CheckCircle2, CreditCard, FileText, ShieldCheck, Video } from "lucide-react";
import { useMemo, useState } from "react";
import { site } from "@/lib/site";

type Locale = "en" | "fa";
type PaymentId = "card" | "etransfer" | "invoice";

const consultationPackage = {
  en: { title: "Basic Immigration Consultation", duration: "30 minutes", price: 150, description: "A focused session to review your situation, discuss suitable pathways, and outline next steps." },
  fa: { title: "مشاوره پایه مهاجرت", duration: "۳۰ دقیقه", price: 150, description: "جلسه‌ای متمرکز برای بررسی شرایط شما، معرفی مسیرهای مناسب و توضیح مراحل بعدی." }
} satisfies Record<Locale, { title: string; duration: string; price: number; description: string }>;

const paymentMethods = {
  en: [
    { id: "card", title: "Credit / Debit Card", description: "Recommended for online payment after your appointment time is confirmed." },
    { id: "etransfer", title: "Interac e-Transfer", description: "Client receives payment instructions after submitting the booking request." },
    { id: "invoice", title: "Invoice", description: "Available for corporate or employer-paid consultations." }
  ],
  fa: [
    { id: "card", title: "کارت اعتباری / دبیت", description: "گزینه پیشنهادی برای پرداخت آنلاین پس از تأیید زمان جلسه." },
    { id: "etransfer", title: "اینتراک ای‌ترنسفر", description: "پس از ارسال درخواست، دستورالعمل پرداخت برای متقاضی ارسال می‌شود." },
    { id: "invoice", title: "فاکتور", description: "مناسب برای شرکت‌ها، کارفرمایان یا پرداخت‌های سازمانی." }
  ]
} satisfies Record<Locale, Array<{ id: PaymentId; title: string; description: string }>>;

const copy = {
  en: {
    eyebrow: "Consultation Booking",
    title: "Book your consultation and choose a payment method.",
    intro: "Reserve a private consultation with Road Path Immigration. Select the session type, preferred time, and payment method so our team can confirm your appointment.",
    step1: "Consultation package",
    step2: "2. Appointment details",
    step3: "3. Payment method",
    fullName: "Full name",
    email: "Email",
    phone: "Phone",
    topic: "Immigration topic",
    date: "Preferred date",
    time: "Preferred time",
    notes: "Brief notes",
    summary: "Booking Summary",
    selected: "Selected consultation",
    payment: "Payment method",
    total: "Total",
    submit: "Request Booking & Payment Link",
    secure: "Secure online consultations",
    bullets: ["Private video or phone consultation", "Eligibility and document priorities", "Clear next steps after the session"]
  },
  fa: {
    eyebrow: "رزرو مشاوره",
    title: "مشاوره خود را رزرو کنید و روش پرداخت را انتخاب نمایید.",
    intro: "برای رزرو جلسه خصوصی با Road Path Immigration، نوع مشاوره، زمان پیشنهادی و روش پرداخت را انتخاب کنید تا تیم ما زمان جلسه را تأیید کند.",
    step1: "پکیج مشاوره",
    step2: "۲. اطلاعات جلسه",
    step3: "۳. روش پرداخت",
    fullName: "نام و نام خانوادگی",
    email: "ایمیل",
    phone: "شماره تماس",
    topic: "موضوع مهاجرتی",
    date: "تاریخ پیشنهادی",
    time: "زمان پیشنهادی",
    notes: "توضیحات کوتاه",
    summary: "خلاصه رزرو",
    selected: "مشاوره انتخاب‌شده",
    payment: "روش پرداخت",
    total: "مبلغ",
    submit: "ارسال درخواست رزرو و لینک پرداخت",
    secure: "مشاوره آنلاین",
    bullets: ["مشاوره خصوصی ویدئویی یا تلفنی", "بررسی شرایط و اولویت مدارک", "ارائه مراحل بعدی پس از جلسه"]
  }
} satisfies Record<Locale, Record<string, string | string[]>>;

export function ConsultationBooking({ locale = "en" }: { locale?: Locale }) {
  const [paymentId, setPaymentId] = useState<PaymentId>("card");
  const isFarsi = locale === "fa";
  const text = copy[locale];
  const selectedPackage = consultationPackage[locale];
  const selectedPayment = useMemo(() => paymentMethods[locale].find((item) => item.id === paymentId) ?? paymentMethods[locale][0], [locale, paymentId]);

  return (
    <section dir={isFarsi ? "rtl" : "ltr"} className="section-pad bg-white">
      <div className="container-lux grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="luxury-border rounded-lg bg-porcelain p-6 shadow-luxury sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-burgundy">{text.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-charcoal sm:text-5xl">{text.title}</h1>
          <p className="mt-5 max-w-3xl leading-8 text-charcoal/70">{text.intro}</p>

          <div className="mt-10">
            <h2 className="font-serif text-2xl text-charcoal">{text.step1}</h2>
            <div className="mt-5 rounded-lg border border-gold bg-white p-6 shadow-gold">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded bg-burgundy text-white">
                    <Video size={21} />
                  </span>
                  <div>
                    <p className="font-serif text-2xl leading-tight text-charcoal">{selectedPackage.title}</p>
                    <p className="mt-2 text-sm font-semibold text-burgundy">{selectedPackage.duration}</p>
                    <p className="mt-3 max-w-2xl leading-7 text-charcoal/68">{selectedPackage.description}</p>
                  </div>
                </div>
                <p className="shrink-0 font-serif text-4xl text-charcoal">$150 CAD</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-serif text-2xl text-charcoal">{text.step2}</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <Field label={text.fullName as string} />
              <Field label={text.email as string} type="email" />
              <Field label={text.phone as string} type="tel" />
              <Field label={text.topic as string} />
              <Field label={text.date as string} type="date" />
              <Field label={text.time as string} type="time" />
              <label className="grid gap-2 text-sm font-semibold text-charcoal md:col-span-2">
                {text.notes}
                <textarea rows={5} className="focus-ring rounded border border-charcoal/15 bg-white p-4 text-base font-normal text-charcoal outline-none transition hover:border-gold" />
              </label>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-serif text-2xl text-charcoal">{text.step3}</h2>
            <div className="mt-5 grid gap-4">
              {paymentMethods[locale].map((method) => {
                const active = method.id === paymentId;
                return (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setPaymentId(method.id)}
                    className={`focus-ring flex gap-4 rounded border p-4 text-start transition ${active ? "border-gold bg-white shadow-gold" : "border-charcoal/10 bg-white hover:border-gold"}`}
                  >
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded ${active ? "bg-burgundy text-white" : "bg-porcelain text-burgundy"}`}>
                      <CreditCard size={19} />
                    </span>
                    <span>
                      <span className="block font-serif text-xl text-charcoal">{method.title}</span>
                      <span className="mt-1 block text-sm leading-6 text-charcoal/62">{method.description}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <aside className="grid gap-5 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-lg bg-charcoal p-6 text-white shadow-luxury">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">{text.summary}</p>
            <div className="mt-6 grid gap-5">
              <SummaryRow icon={CalendarDays} label={text.selected as string} value={`${selectedPackage.title} • ${selectedPackage.duration}`} />
              <SummaryRow icon={CreditCard} label={text.payment as string} value={selectedPayment.title} />
              <SummaryRow icon={FileText} label={text.total as string} value={`$${selectedPackage.price} CAD`} />
            </div>
            <button type="button" className="focus-ring mt-7 min-h-12 w-full rounded bg-gold px-6 text-sm font-semibold uppercase tracking-[0.14em] text-charcoal transition hover:bg-white">
              {text.submit}
            </button>
          </div>

          <div className="rounded-lg border border-charcoal/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-burgundy" size={24} />
              <p className="font-serif text-2xl text-charcoal">{text.secure}</p>
            </div>
            <ul className="mt-5 grid gap-3">
              {(text.bullets as string[]).map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-charcoal/70">
                  <CheckCircle2 className="mt-1 shrink-0 text-gold" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-charcoal/10 pt-5 text-sm leading-6 text-charcoal/58">
              <span dir="ltr">{site.email}</span>
              <br />
              <span dir="ltr">{site.phone}</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-charcoal">
      {label}
      <input type={type} className="focus-ring min-h-12 rounded border border-charcoal/15 bg-white px-4 text-base font-normal text-charcoal outline-none transition hover:border-gold" />
    </label>
  );
}

function SummaryRow({ icon: Icon, label, value }: { icon: typeof CalendarDays; label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-1 shrink-0 text-gold" size={19} />
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">{label}</p>
        <p className="mt-1 leading-7 text-white/82">{value}</p>
      </div>
    </div>
  );
}
