import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Road Path Immigration."
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="Privacy Policy" copy="Road Path Immigration treats client information with care and confidentiality." />
      <section className="section-pad bg-white">
        <div className="container-lux max-w-3xl space-y-5 leading-8 text-charcoal/72">
          <p>Information submitted through this website is used to respond to inquiries, assess consultation needs, and provide requested services.</p>
          <p>Personal details are not sold. Client documents and intake information should be shared only through approved secure channels.</p>
          <p>This placeholder policy should be reviewed by legal counsel before launch.</p>
        </div>
      </section>
    </>
  );
}
