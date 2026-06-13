import { ExternalLink } from "lucide-react";

const newsItems = [
  {
    title: "Canada strengthens borders while supporting economic and tourism ties with Saint-Pierre-et-Miquelon",
    date: "June 4, 2026",
    summary: "IRCC announced border screening changes for direct marine travel from Saint-Pierre-et-Miquelon to Canada.",
    href: "https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/06/canada-strengthens-borders-while-supporting-economic-and-tourism-ties-with-saint-pierre-et-miquelon.html"
  },
  {
    title: "Canada strengthens Indo-Pacific ties through changes to visa requirements",
    date: "May 25, 2026",
    summary: "Eligible travellers from Indonesia and Malaysia may be able to apply for an eTA instead of a visitor visa for air travel.",
    href: "https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/05/canada-strengthens-indo-pacific-ties-through-changes-to-visa-requirements-for-eligible-travellers-from-indonesia-and-malaysia.html"
  },
  {
    title: "Building the workforce needed to deliver more homes in Halifax",
    date: "May 11, 2026",
    summary: "IRCC highlighted immigration's role in supporting skilled trades and housing-related workforce needs.",
    href: "https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/05/building-the-workforce-needed-to-deliver-more-homes-in-halifax.html"
  },
  {
    title: "Canada strengthens regulation of immigration and citizenship consultants",
    date: "May 6, 2026",
    summary: "New regulations were announced to enhance oversight of immigration and citizenship consultants in Canada.",
    href: "https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/05/canada-strengthens-regulation-of-immigration-and-citizenship-consultants.html"
  }
];

export function NewsLinkCta() {
  return (
    <section className="bg-white pb-16">
      <div className="container-lux px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-burgundy">Canadian Immigration</p>
            <h2 className="mt-2 font-serif text-3xl text-charcoal">News</h2>
          </div>
          <a
            href="https://www.canada.ca/en/immigration-refugees-citizenship/news.html"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-burgundy transition hover:text-charcoal"
          >
            View IRCC News <ExternalLink size={17} />
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
                Read on Canada.ca <ExternalLink size={15} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
