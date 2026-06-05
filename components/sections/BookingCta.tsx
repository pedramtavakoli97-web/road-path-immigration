import { CalendarCheck } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";

export function BookingCta() {
  return (
    <section className="section-pad bg-white">
      <div className="container-lux luxury-border overflow-hidden rounded-lg bg-charcoal p-8 text-white shadow-luxury sm:p-12 lg:p-16">
        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Consultation Booking</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">Book and pay online for dedicated immigration guidance.</h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/72">Reserve a private consultation to review your profile, documents, timing, and best next steps with a premium advisory experience.</p>
          </div>
          <ButtonLink href="/consultation-booking" className="bg-gold text-charcoal hover:bg-white">
            <CalendarCheck size={18} /> Book Consultation
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
