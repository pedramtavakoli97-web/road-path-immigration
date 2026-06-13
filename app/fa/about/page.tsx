import type { Metadata } from "next";
import { FarsiPageHero } from "@/components/FarsiPageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "درباره Road Path Immigration و خدمات مشاوره مهاجرت کانادا."
};

export default function FarsiAboutPage() {
  return (
    <>
      <FarsiPageHero eyebrow="درباره ما" title="مشاوره مهاجرت کانادا با رویکردی دقیق" copy="ما در Road Path Immigration به متقاضیان مهاجرت، خانواده‌ها، دانشجویان، کارفرمایان و صاحبان کسب‌وکار کمک می‌کنیم تا مسیر مناسب خود را با آگاهی و برنامه‌ریزی انتخاب کنند." />
      <section dir="rtl" className="section-pad bg-white">
        <div className="container-lux grid gap-5 md:grid-cols-3">
          {["بررسی دقیق شرایط", "برنامه‌ریزی پرونده", "پشتیبانی مرحله‌به‌مرحله"].map((item) => (
            <article key={item} className="rounded-lg border border-charcoal/10 bg-porcelain p-6 shadow-sm">
              <h2 className="font-serif text-2xl text-charcoal">{item}</h2>
              <p className="mt-4 leading-8 text-charcoal/70">تمرکز ما بر ارائه راهکار روشن، مدارک کامل و پیگیری منظم پرونده شما است.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
