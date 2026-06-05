import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { FarsiPageHero } from "@/components/FarsiPageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "تماس با ما",
  description: "تماس با Road Path Immigration."
};

export default function FarsiContactPage() {
  return (
    <>
      <FarsiPageHero eyebrow="تماس با ما" title="برای رزرو مشاوره با ما تماس بگیرید" copy="جزئیات خود را ارسال کنید تا برای انتخاب مسیر مناسب مهاجرتی با شما هماهنگ کنیم." />
      <section dir="rtl" className="section-pad bg-white">
        <div className="container-lux grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-lg bg-charcoal p-8 text-white shadow-luxury">
            <p className="font-serif text-3xl">اطلاعات تماس</p>
            <div className="mt-8 grid gap-5 text-white/74">
              <p className="flex gap-3"><Mail className="text-gold" size={20} /><span dir="ltr">{site.email}</span></p>
              <p className="flex gap-3"><Phone className="text-gold" size={20} /><span dir="ltr">{site.phone}</span></p>
              <p className="flex gap-3"><MapPin className="text-gold" size={20} />{site.farsiAddress}</p>
            </div>
          </aside>
          <form className="luxury-border grid gap-6 rounded-lg bg-porcelain p-6 shadow-luxury sm:p-8 sm:grid-cols-2">
            {["نام و نام خانوادگی", "ایمیل", "شماره تماس", "تاریخ پیشنهادی"].map((label) => (
              <label key={label} className="grid gap-2 text-sm font-semibold text-charcoal">
                {label}
                <input className="focus-ring min-h-12 rounded border border-charcoal/15 bg-white px-4 text-base font-normal outline-none hover:border-gold" />
              </label>
            ))}
            <label className="grid gap-2 text-sm font-semibold text-charcoal sm:col-span-2">
              پیام
              <textarea rows={6} className="focus-ring rounded border border-charcoal/15 bg-white p-4 text-base font-normal outline-none hover:border-gold" />
            </label>
            <button type="submit" className="focus-ring min-h-12 rounded bg-burgundy px-6 text-sm font-semibold text-white transition hover:bg-charcoal sm:w-fit">
              ارسال درخواست
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
