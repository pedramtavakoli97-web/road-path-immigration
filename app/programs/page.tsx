import type { Metadata } from "next";
import { Programs } from "@/components/sections/Programs";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Immigration Programs",
  description: "Explore Express Entry, PNP, study permits, work permits, visitor visas, and family sponsorship support."
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero eyebrow="Programs" title="Canadian immigration pathways planned with precision." copy="Review core permanent and temporary residence options, then book a consultation for a profile-specific strategy." />
      <Programs />
    </>
  );
}
