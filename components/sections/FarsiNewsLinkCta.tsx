import { ExternalLink } from "lucide-react";

const newsItems = [
  {
    title: "کانادا مرزها را تقویت می‌کند و از روابط اقتصادی و گردشگری با سن‌پیر و میکلون حمایت می‌کند",
    date: "۴ ژوئن ۲۰۲۶",
    summary: "IRCC تغییراتی را درباره بررسی مرزی سفر دریایی مستقیم از سن‌پیر و میکلون به کانادا اعلام کرد.",
    href: "https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/06/canada-strengthens-borders-while-supporting-economic-and-tourism-ties-with-saint-pierre-et-miquelon.html"
  },
  {
    title: "کانادا روابط خود را در منطقه هند و اقیانوس آرام با تغییرات الزامات ویزا تقویت می‌کند",
    date: "۲۵ مه ۲۰۲۶",
    summary: "برخی مسافران واجد شرایط از اندونزی و مالزی ممکن است برای سفر هوایی بتوانند به جای ویزای بازدید، eTA درخواست کنند.",
    href: "https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/05/canada-strengthens-indo-pacific-ties-through-changes-to-visa-requirements-for-eligible-travellers-from-indonesia-and-malaysia.html"
  },
  {
    title: "ساخت نیروی کار مورد نیاز برای ساخت خانه‌های بیشتر در هالیفکس",
    date: "۱۱ مه ۲۰۲۶",
    summary: "IRCC نقش مهاجرت را در پشتیبانی از نیروی کار ماهر و نیازهای مرتبط با ساخت‌وساز مسکن برجسته کرد.",
    href: "https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/05/building-the-workforce-needed-to-deliver-more-homes-in-halifax.html"
  },
  {
    title: "کانادا نظارت بر مشاوران مهاجرت و شهروندی را تقویت می‌کند",
    date: "۶ مه ۲۰۲۶",
    summary: "مقررات جدیدی برای افزایش نظارت بر مشاوران مهاجرت و شهروندی در کانادا اعلام شد.",
    href: "https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/05/canada-strengthens-regulation-of-immigration-and-citizenship-consultants.html"
  }
];

export function FarsiNewsLinkCta() {
  return (
    <section dir="rtl" className="bg-white pb-16">
      <div className="container-lux px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-burgundy">مهاجرت کانادا</p>
            <h2 className="mt-2 font-serif text-3xl text-charcoal">اخبار</h2>
          </div>
          <a
            href="https://www.canada.ca/en/immigration-refugees-citizenship/news.html"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-burgundy transition hover:text-charcoal"
          >
            مشاهده اخبار IRCC <ExternalLink size={17} />
          </a>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {newsItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-64 flex-col rounded-lg border border-charcoal/10 bg-porcelain p-5 transition hover:border-gold hover:bg-white"
            >
              <p className="text-sm font-semibold text-burgundy">{item.date}</p>
              <h3 className="mt-4 font-serif text-xl leading-7 text-charcoal">{item.title}</h3>
              <p className="mt-4 grow text-sm leading-6 text-charcoal/68">{item.summary}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-burgundy transition group-hover:text-charcoal">
                خواندن در Canada.ca <ExternalLink size={15} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
