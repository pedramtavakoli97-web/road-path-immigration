import type { Metadata } from "next";
import { FarsiPageHero } from "@/components/FarsiPageHero";

export const metadata: Metadata = {
  title: "فرم ارزیابی",
  description: "فرم ارزیابی مهاجرت کانادا به زبان فارسی."
};

export default function FarsiAssessmentPage() {
  return (
    <>
      <FarsiPageHero eyebrow="فرم ارزیابی" title="شرایط خود را برای ارزیابی اولیه ارسال کنید" copy="اطلاعات کلی خود را وارد کنید تا بتوانیم مسیرهای مناسب مهاجرتی شما را بهتر بررسی کنیم." />
      <section dir="rtl" className="section-pad bg-white">
        <form className="container-lux luxury-border grid gap-6 rounded-lg bg-porcelain p-6 shadow-luxury sm:p-8 lg:grid-cols-2">
          {["نام و نام خانوادگی", "ایمیل", "شماره تماس", "کشور محل اقامت"].map((label) => (
            <label key={label} className="grid gap-2 text-sm font-semibold text-charcoal">
              {label}
              <input className="focus-ring min-h-12 rounded border border-charcoal/15 bg-white px-4 text-base font-normal outline-none hover:border-gold" />
            </label>
          ))}
          <label className="grid gap-2 text-sm font-semibold text-charcoal lg:col-span-2">
            هدف مهاجرتی
            <select className="focus-ring min-h-12 rounded border border-charcoal/15 bg-white px-4 text-base font-normal outline-none hover:border-gold">
              <option>اقامت دائم</option>
              <option>تحصیل در کانادا</option>
              <option>کار در کانادا</option>
              <option>ویزای توریستی یا سوپر ویزا</option>
              <option>اسپانسرشیپ خانواده</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-charcoal lg:col-span-2">
            توضیحات
            <textarea rows={6} className="focus-ring rounded border border-charcoal/15 bg-white p-4 text-base font-normal outline-none hover:border-gold" />
          </label>
          <button type="submit" className="focus-ring min-h-12 rounded bg-burgundy px-6 text-sm font-semibold text-white transition hover:bg-charcoal lg:w-fit">
            ارسال فرم ارزیابی
          </button>
        </form>
      </section>
    </>
  );
}
