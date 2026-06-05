import { Compass, LockKeyhole, MessagesSquare, Scale } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const items = [
  { title: "Personalized Guidance", icon: Compass, copy: "A focused strategy shaped around your background, family goals, timeline, and eligibility profile." },
  { title: "Transparent Process", icon: Scale, copy: "Clear milestones, direct communication, and practical expectations from first assessment to submission." },
  { title: "Professional Support", icon: MessagesSquare, copy: "Document review, application planning, and calm guidance through high-stakes decisions." },
  { title: "Secure Online Consultations", icon: LockKeyhole, copy: "Private virtual meetings and confidential intake workflows for clients in Canada and abroad." }
];

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-porcelain">
      <div className="container-lux">
        <SectionHeading eyebrow="Why Choose Us" title="Premium service with practical immigration clarity" copy="Road Path Immigration combines refined client care with a disciplined, detail-first consulting process." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, copy, icon: Icon }, index) => (
            <article key={title} className="luxury-border group rounded-lg bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-luxury" style={{ animationDelay: `${index * 80}ms` }}>
              <div className="grid h-12 w-12 place-items-center rounded bg-burgundy text-white transition group-hover:bg-gold group-hover:text-charcoal">
                <Icon size={22} />
              </div>
              <h3 className="mt-6 font-serif text-2xl text-charcoal">{title}</h3>
              <p className="mt-4 leading-7 text-charcoal/68">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
