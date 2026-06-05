import { AssessmentCta } from "@/components/sections/AssessmentCta";
import { BookingCta } from "@/components/sections/BookingCta";
import { Hero } from "@/components/sections/Hero";
import { Programs } from "@/components/sections/Programs";
import { ServiceSlider } from "@/components/sections/ServiceSlider";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceSlider />
      <WhyChooseUs />
      <Programs />
      <AssessmentCta />
      <BookingCta />
    </>
  );
}
