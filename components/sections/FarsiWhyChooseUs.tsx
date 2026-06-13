import { Compass, LockKeyhole, MessagesSquare, Scale } from "lucide-react";

const items = [
  { title: "راهنمایی بر اساس شرایط شما", icon: Compass, copy: "برنامه‌ریزی متناسب با سابقه، هدف خانوادگی، زمان‌بندی و شرایط پرونده شما." },
  { title: "روند شفاف", icon: Scale, copy: "توضیح مراحل، ارتباط روشن و مشخص بودن انتظارها از ارزیابی تا ارسال پرونده." },
  { title: "پشتیبانی مدارک", icon: MessagesSquare, copy: "بررسی مدارک، برنامه‌ریزی پرونده و همراهی در تصمیم‌های مهم مهاجرتی." },
  { title: "مشاوره آنلاین", icon: LockKeyhole, copy: "جلسات خصوصی آنلاین و فرم‌های محرمانه برای متقاضیان داخل و خارج از کانادا." }
];

export function FarsiWhyChooseUs() {
  return (
    <section dir="rtl" className="section-pad bg-porcelain">
      <div className="container-lux">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-burgundy">چرا ما</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-charcoal sm:text-5xl">راهنمایی روشن با برنامه‌ریزی دقیق مهاجرتی</h2>
          <p className="mt-5 text-lg leading-8 text-charcoal/68">Road Path Immigration با توجه به جزئیات پرونده، مسیرهای مهاجرتی را بررسی و برنامه‌ریزی می‌کند.</p>
        </div>
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
