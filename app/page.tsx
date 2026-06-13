import { Hero } from "@/components/sections/Hero";
import { HomeActionCards } from "@/components/sections/HomeActionCards";
import { MapleProgramPuzzle } from "@/components/sections/MapleProgramPuzzle";
import { NewsLinkCta } from "@/components/sections/NewsLinkCta";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeActionCards />
      <MapleProgramPuzzle />
      <WhyChooseUs />
      <NewsLinkCta />
    </>
  );
}
