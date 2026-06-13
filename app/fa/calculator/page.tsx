import type { Metadata } from "next";
import { CalculatorTool } from "@/components/CalculatorTool";
import { FarsiPageHero } from "@/components/FarsiPageHero";

export const metadata: Metadata = {
  title: "ماشین حساب",
  description: "ماشین حساب و ارزیابی اولیه مهاجرت کانادا."
};

export default function FarsiCalculatorPage() {
  return (
    <>
      <FarsiPageHero eyebrow="ماشین حساب" title="ماشین حساب CRS اکسپرس انتری" copy="امتیاز Comprehensive Ranking System خود را بر اساس جدول رسمی Canada.ca محاسبه کنید." />
      <section className="section-pad bg-white">
        <div className="container-lux">
          <CalculatorTool />
        </div>
      </section>
    </>
  );
}
