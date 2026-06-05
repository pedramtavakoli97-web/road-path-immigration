import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { FarsiServiceSlider } from "@/components/sections/FarsiServiceSlider";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "فارسی",
  description: "خدمات مشاوره مهاجرت کانادا به زبان فارسی از Road Path Immigration.",
  openGraph: {
    title: "خدمات مهاجرت کانادا | Road Path Immigration",
    description: "خدمات مشاوره مهاجرت کانادا به زبان فارسی.",
    locale: "fa_CA"
  },
  twitter: {
    title: "خدمات مهاجرت کانادا | Road Path Immigration",
    description: "خدمات مشاوره مهاجرت کانادا به زبان فارسی."
  }
};

const services = [
  {
    title: "ویزای کار و مهاجرت از طریق کارفرما",
    overview:
      "ما به کارفرمایان و نیروی کار خارجی در تمامی مراحل اخذ مجوز کار و مهاجرت کاری کمک می‌کنیم. خدمات ما شامل پرونده‌های LMIA، انتقال درون‌شرکتی (Intra-Company Transfer)، برنامه Global Talent Stream، تمدید مجوز کار و سایر مسیرهای کاری کانادا است. هدف ما کاهش احتمال ریجکتی و تسریع روند رسیدگی به پرونده‌ها است.",
    audience: [
      "کارفرمایانی که قصد استخدام نیروی کار خارجی یا انتقال کارکنان بین‌المللی خود به کانادا را دارند.",
      "افرادی که به دنبال دریافت مجوز کار اختصاصی، مجوز کار آزاد یا فرصت‌های شغلی مبتنی بر LMIA هستند."
    ],
    services: [
      "ارزیابی بهترین مسیر دریافت مجوز کار متناسب با شرایط شما.",
      "کمک به کارفرمایان در تهیه و ارسال درخواست LMIA و رعایت الزامات قانونی.",
      "آماده‌سازی و ارسال درخواست‌های مجوز کار، تمدید و تغییر شرایط کاری.",
      "مشاوره درباره انتقال درون‌شرکتی، توافقنامه‌های بین‌المللی و برنامه‌های معاف از LMIA.",
      "بررسی قراردادهای کاری و مدارک استخدامی مطابق با استانداردهای اداره مهاجرت کانادا."
    ],
    outcome:
      "دریافت مجوز کار معتبر و امکان اشتغال قانونی در کانادا. همچنین در مسیر تبدیل اقامت موقت به اقامت دائم از طریق برنامه‌هایی مانند اکسپرس انتری و PNP در کنار شما خواهیم بود.",
    cta: "همین امروز برای بررسی گزینه‌های کاری خود و دریافت مشاوره تخصصی اقدام کنید."
  },
  {
    title: "ویزای تحصیلی و خدمات دانشجویی",
    overview:
      "ما به دانشجویان بین‌المللی و خانواده‌های آن‌ها در دریافت ویزای تحصیلی، تمدید مجوز تحصیل، مجوز کار پس از فارغ‌التحصیلی (PGWP) و مسیرهای تبدیل تحصیل به اقامت دائم کمک می‌کنیم.",
    audience: [
      "دانشجویانی که قصد تحصیل در مؤسسات آموزشی مورد تأیید کانادا (DLI) را دارند.",
      "فارغ‌التحصیلانی که به دنبال دریافت PGWP و مسیر اقامت دائم هستند."
    ],
    services: [
      "بررسی شرایط پذیرش و انتخاب برنامه تحصیلی مناسب.",
      "آماده‌سازی پرونده ویزای تحصیلی با ارائه برنامه تحصیلی قوی و مدارک مالی کامل.",
      "راهنمایی درباره مجوزهای کار دانشجویی، کارآموزی و کار حین تحصیل.",
      "مشاوره و آماده‌سازی پرونده PGWP.",
      "برنامه‌ریزی برای تبدیل وضعیت دانشجویی به اقامت دائم."
    ],
    outcome:
      "دریافت ویزای تحصیلی، مجوز کار پس از فارغ‌التحصیلی و ایجاد مسیر مطمئن برای اخذ اقامت دائم کانادا.",
    cta: "برای شروع مسیر تحصیلی خود در کانادا، همین امروز با ما تماس بگیرید."
  },
  {
    title: "ویزای توریستی و سوپر ویزا",
    overview:
      "ما پرونده‌های ویزای توریستی و سوپر ویزای والدین و پدربزرگ و مادربزرگ را با تمرکز بر اثبات وابستگی به کشور مبدا، توان مالی و ارائه مدارک کامل آماده می‌کنیم.",
    audience: [
      "افرادی که قصد سفر کوتاه‌مدت به کانادا برای گردشگری، دیدار خانواده یا اهداف تجاری دارند.",
      "والدین و پدربزرگ و مادربزرگ‌هایی که قصد اقامت طولانی‌مدت در کانادا از طریق سوپر ویزا را دارند."
    ],
    services: [
      "بررسی شرایط و انتخاب بهترین گزینه بین TRV، eTA و سوپر ویزا.",
      "تهیه دعوتنامه و مدارک مالی مورد نیاز.",
      "آماده‌سازی بیمه درمانی و سایر مدارک مورد نیاز سوپر ویزا.",
      "ارسال پرونده و پیگیری درخواست‌ها و مکاتبات اداره مهاجرت."
    ],
    outcome:
      "دریافت مجوز ورود موقت به کانادا و ارائه مشاوره در خصوص تمدید اقامت یا تغییر وضعیت در صورت نیاز.",
    cta: "برای دریافت ویزای توریستی یا سوپر ویزا با پرونده‌ای کامل و حرفه‌ای اقدام کنید."
  },
  {
    title: "مهاجرت تجاری، سرمایه‌گذاری و کارآفرینی",
    overview:
      "ما به کارآفرینان، صاحبان کسب‌وکار و سرمایه‌گذاران در مسیرهای مهاجرت تجاری کانادا از جمله استارتاپ ویزا، برنامه‌های کارآفرینی استانی و سایر مسیرهای سرمایه‌گذاری کمک می‌کنیم.",
    audience: [
      "کارآفرینان دارای ایده‌های نوآورانه.",
      "سرمایه‌گذاران خارجی.",
      "صاحبان کسب‌وکار که قصد توسعه فعالیت خود در کانادا را دارند."
    ],
    services: [
      "ارزیابی شرایط کسب‌وکار و انتخاب بهترین برنامه مهاجرتی.",
      "تهیه بیزینس پلن حرفه‌ای و پیش‌بینی‌های مالی.",
      "هماهنگی با سازمان‌های مورد تأیید برای برنامه استارتاپ ویزا.",
      "پشتیبانی در رعایت الزامات سرمایه‌گذاری و ایجاد اشتغال.",
      "برنامه‌ریزی برای تبدیل وضعیت تجاری به اقامت دائم."
    ],
    outcome: "دریافت تأییدیه‌های استانی یا فدرال و حرکت به سمت اخذ اقامت دائم کانادا.",
    cta: "برای بررسی شرایط و دریافت استراتژی اختصاصی مهاجرت تجاری، جلسه مشاوره رزرو کنید."
  },
  {
    title: "خدمات کارت اقامت دائم (PR Card)، مدارک سفر و اعتراضات مهاجرتی",
    overview:
      "ما در زمینه تمدید یا تعویض کارت اقامت دائم، دریافت مدارک سفر، بررسی شرایط حفظ اقامت و همچنین اعتراض به تصمیمات اداره مهاجرت و بازگرداندن وضعیت اقامتی خدمات تخصصی ارائه می‌دهیم.",
    audience: [
      "دارندگان اقامت دائم که نیاز به تمدید یا تعویض کارت PR دارند.",
      "افرادی که با ریجکتی، دستور خروج یا مشکلات مربوط به وضعیت اقامت مواجه شده‌اند."
    ],
    services: [
      "آماده‌سازی پرونده تمدید یا تعویض کارت PR.",
      "تهیه درخواست مدارک سفر برای مقیمان دائم خارج از کانادا.",
      "بررسی شرایط حفظ اقامت و محاسبه روزهای حضور در کانادا.",
      "تهیه پرونده‌های اعتراض، بررسی قضایی (Judicial Review) و درخواست‌های انسان‌دوستانه (H&C).",
      "همکاری با وکلای مهاجرت در پرونده‌های پیچیده و حساس."
    ],
    outcome:
      "حفظ یا بازگرداندن وضعیت اقامت دائم، دریافت مدارک سفر و افزایش شانس موفقیت در اعتراضات و درخواست‌های مهاجرتی.",
    cta: "برای بررسی وضعیت اقامت خود یا دریافت مشاوره در خصوص اعتراض به پرونده‌های ریجکت شده، با ما تماس بگیرید."
  }
];

export default function PersianPage() {
  return (
    <>
      <section dir="rtl" className="section-pad bg-porcelain">
        <div className="container-lux grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-burgundy">فارسی</p>
          <h1 className="mt-5 font-serif text-5xl leading-tight text-charcoal sm:text-6xl">
            خدمات مهاجرت کانادا
          </h1>
          <p className="mt-6 text-lg leading-9 text-charcoal/72">
            <span dir="ltr" className="inline-block font-semibold text-charcoal">{site.name}</span>{" "}
            خدمات مشاوره حرفه‌ای برای برنامه‌های مهاجرتی، تحصیلی، کاری و اقامت دائم کانادا ارائه می‌دهد.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <ButtonLink href="/fa/consultation-booking">رزرو مشاوره</ButtonLink>
            <ButtonLink href="/fa/assessment-form" variant="secondary">ارزیابی رایگان</ButtonLink>
          </div>
          </div>

          <div className="relative animate-rise [animation-delay:140ms]">
            <div className="luxury-border relative overflow-hidden rounded-lg bg-porcelain shadow-luxury">
              <video
                className="aspect-[4/3] w-full object-cover sm:aspect-[16/11]"
                src="/videos/canada-hero-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="ویدئوی کانادا برای مسیرهای مهاجرتی"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/42 via-transparent to-white/5" />
              <div className="absolute bottom-5 left-5 right-5 rounded border border-gold/35 bg-charcoal/82 p-5 shadow-luxury backdrop-blur">
                <p className="mt-2 font-serif text-2xl text-white">همراه شما در مسیر مهاجرت به کانادا</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FarsiServiceSlider />

      <section dir="rtl" className="section-pad bg-white">
        <div className="container-lux grid gap-6">
          {services.map((service, index) => (
            <article key={service.title} className="luxury-border rounded-lg bg-porcelain p-6 shadow-sm sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-burgundy">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-4 font-serif text-3xl leading-tight text-charcoal sm:text-4xl">{service.title}</h2>
                  <div className="mt-6 rounded bg-white p-5">
                    <h3 className="font-serif text-2xl text-charcoal">معرفی</h3>
                    <p className="mt-3 leading-8 text-charcoal/72">{service.overview}</p>
                  </div>
                  <div className="mt-5 rounded bg-charcoal p-5 text-white">
                    <h3 className="font-serif text-2xl">نتیجه و مراحل بعدی</h3>
                    <p className="mt-3 leading-8 text-white/76">{service.outcome}</p>
                    <p className="mt-4 leading-8 text-gold">{service.cta}</p>
                  </div>
                </div>

                <div className="grid gap-5">
                  <div className="rounded bg-white p-5">
                    <h3 className="font-serif text-2xl text-charcoal">این برنامه مناسب چه کسانی است؟</h3>
                    <ul className="mt-4 grid gap-3 leading-8 text-charcoal/72">
                      {service.audience.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded bg-white p-5">
                    <h3 className="font-serif text-2xl text-charcoal">خدمات ما</h3>
                    <ul className="mt-4 grid gap-3 leading-8 text-charcoal/72">
                      {service.services.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
