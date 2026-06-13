import type { Metadata } from "next";
import { FarsiHero } from "@/components/sections/FarsiHero";
import { FarsiHomeActionCards } from "@/components/sections/FarsiHomeActionCards";
import { FarsiMapleProgramPuzzle } from "@/components/sections/FarsiMapleProgramPuzzle";
import { FarsiNewsLinkCta } from "@/components/sections/FarsiNewsLinkCta";
import { FarsiWhyChooseUs } from "@/components/sections/FarsiWhyChooseUs";

export const metadata: Metadata = {
  title: "فارسی",
  description: "خدمات مهاجرت کانادا به زبان فارسی از Road Path Immigration.",
  openGraph: {
    title: "خدمات مهاجرت کانادا | Road Path Immigration",
    description: "خدمات مهاجرت کانادا به زبان فارسی.",
    locale: "fa_CA"
  },
  twitter: {
    title: "خدمات مهاجرت کانادا | Road Path Immigration",
    description: "خدمات مهاجرت کانادا به زبان فارسی."
  }
};

export default function PersianPage() {
  return (
    <>
      <FarsiHero />
      <FarsiHomeActionCards />
      <FarsiMapleProgramPuzzle />
      <FarsiWhyChooseUs />
      <FarsiNewsLinkCta />
    </>
  );
}
