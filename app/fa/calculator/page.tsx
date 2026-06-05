import type { Metadata } from "next";
import { FarsiPageHero } from "@/components/FarsiPageHero";

export const metadata: Metadata = {
  title: "ماشین حساب",
  description: "ماشین حساب و ارزیابی اولیه مهاجرت کانادا."
};

export default function FarsiCalculatorPage() {
  return (
    <>
      <FarsiPageHero eyebrow="ماشین حساب" title="ارزیابی اولیه مسیر مهاجرتی" copy="برای محاسبه دقیق امتیازها، نسخه انگلیسی ماشین حساب در حال حاضر فعال است. می‌توانید از فرم ارزیابی فارسی نیز استفاده کنید تا شرایط شما بررسی شود." />
      <section dir="rtl" className="section-pad bg-white">
        <div className="container-lux rounded-lg bg-porcelain p-8">
          <p className="font-serif text-3xl text-charcoal">برای بررسی دقیق‌تر، فرم ارزیابی را تکمیل کنید یا مشاوره رزرو نمایید.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="/fa/assessment-form" className="focus-ring inline-flex min-h-12 items-center justify-center rounded bg-burgundy px-6 text-sm font-semibold text-white transition hover:bg-charcoal">فرم ارزیابی</a>
            <a href="/fa/consultation-booking" className="focus-ring inline-flex min-h-12 items-center justify-center rounded border border-gold bg-white px-6 text-sm font-semibold text-charcoal transition hover:border-burgundy">رزرو مشاوره</a>
          </div>
        </div>
      </section>
    </>
  );
}
