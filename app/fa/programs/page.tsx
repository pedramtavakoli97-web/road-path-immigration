import type { Metadata } from "next";
import { FarsiPageHero } from "@/components/FarsiPageHero";
import { FarsiServiceSlider } from "@/components/sections/FarsiServiceSlider";

export const metadata: Metadata = {
  title: "برنامه‌ها",
  description: "برنامه‌ها و خدمات مهاجرتی کانادا به زبان فارسی."
};

export default function FarsiProgramsPage() {
  return (
    <>
      <FarsiPageHero eyebrow="برنامه‌ها" title="برنامه‌های مهاجرتی کانادا" copy="بر اساس هدف خود، مسیرهای مهاجرتی، تحصیلی، کاری، خانوادگی، تجاری و اقامت دائم را بررسی کنید." />
      <FarsiServiceSlider />
    </>
  );
}
