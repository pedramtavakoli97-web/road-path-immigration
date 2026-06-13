import type { Metadata } from "next";
import { FarsiMapleProgramPuzzle } from "@/components/sections/FarsiMapleProgramPuzzle";

export const metadata: Metadata = {
  title: "برنامه‌ها",
  description: "برنامه‌ها و خدمات مهاجرتی کانادا به زبان فارسی."
};

export default function FarsiProgramsPage() {
  return (
    <div dir="rtl">
      <section className="bg-porcelain px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="container-lux">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-burgundy">برنامه‌ها</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-charcoal sm:text-6xl">برنامه‌های مهاجرتی کانادا</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-charcoal/72">
            مسیر مورد نظر خود را انتخاب کنید تا صفحه همان برنامه را ببینید.
          </p>
        </div>
      </section>
      <FarsiMapleProgramPuzzle />
    </div>
  );
}
