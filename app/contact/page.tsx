import type { Metadata } from "next";
import { CalendarDays, CreditCard, Mail, Phone } from "lucide-react";
import { InputField } from "@/components/InputField";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Road Path Immigration to book a premium Canadian immigration consultation."
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Book your private consultation with Road Path Immigration." copy="Send your details and preferred timing. Online booking and payment can be connected to your scheduling provider of choice." />
      <section className="section-pad bg-white">
        <div className="container-lux grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-lg bg-charcoal p-8 text-white shadow-luxury">
            <p className="font-serif text-3xl">Consultation details</p>
            <div className="mt-8 grid gap-5 text-white/74">
              <p className="flex gap-3"><Mail className="text-gold" size={20} /> {site.email}</p>
              <p className="flex gap-3"><Phone className="text-gold" size={20} /> {site.phone}</p>
              <p className="flex gap-3"><CalendarDays className="text-gold" size={20} /> Online and Toronto-based appointments</p>
              <p className="flex gap-3"><CreditCard className="text-gold" size={20} /> Ready for online payment integration</p>
            </div>
          </aside>
          <form className="luxury-border grid gap-6 rounded-lg bg-porcelain p-6 shadow-luxury sm:p-8 sm:grid-cols-2">
            <InputField label="Full name" name="name" required />
            <InputField label="Email" name="email" type="email" required />
            <InputField label="Phone" name="phone" type="tel" />
            <InputField label="Preferred date" name="date" type="date" />
            <label className="grid gap-2 text-sm font-semibold text-charcoal sm:col-span-2">
              Message
              <textarea name="message" rows={6} className="focus-ring rounded border border-charcoal/15 bg-white p-4 text-base font-normal text-charcoal outline-none transition hover:border-gold" />
            </label>
            <button type="submit" className="focus-ring min-h-12 rounded bg-burgundy px-6 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-charcoal sm:w-fit">
              Request Booking
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
