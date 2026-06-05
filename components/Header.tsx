"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { navItems, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isFarsi = pathname.startsWith("/fa");
  const consultationLabel = isFarsi ? "رزرو مشاوره" : "Book Consultation";

  return (
    <header dir={isFarsi ? "rtl" : "ltr"} className="sticky top-0 z-50 border-b border-charcoal/10 bg-white/92 backdrop-blur-xl">
      <div className="container-lux flex h-[var(--header-height)] items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="focus-ring group flex shrink-0 items-center gap-3 rounded transition hover:opacity-90" aria-label="Road Path Immigration home">
          <Image
            src="/images/road-path-logo-mark-v2.jpeg"
            alt="Road Path Immigration"
            width={150}
            height={110}
            priority
            className="h-12 w-auto object-contain sm:h-14"
          />
          <span>
            <span dir="ltr" className="block font-serif text-xl leading-none text-charcoal">{site.name}</span>
            <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              {isFarsi ? "مشاوره مهاجرت کانادا" : "Canadian Immigration"}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label={isFarsi ? "ناوبری اصلی" : "Primary navigation"}>
          {navItems.map((item) => (
            <Link key={item.href} href={isFarsi ? item.faHref : item.href} className="text-sm font-medium text-charcoal/80 transition hover:text-burgundy">
              {isFarsi ? item.faLabel : item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={isFarsi ? "/fa/consultation-booking" : "/consultation-booking"}>{consultationLabel}</ButtonLink>
        </div>

        <button
          type="button"
          aria-label={isFarsi ? "باز و بسته کردن منو" : "Toggle navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid h-11 w-11 place-items-center rounded border border-charcoal/15 text-charcoal transition hover:border-burgundy hover:text-burgundy lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-charcoal/10 bg-white px-5 py-5 shadow-luxury lg:hidden">
          <nav className="grid gap-2" aria-label={isFarsi ? "ناوبری موبایل" : "Mobile navigation"}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={isFarsi ? item.faHref : item.href}
                onClick={() => setOpen(false)}
                className="rounded px-3 py-3 text-sm font-semibold text-charcoal transition hover:bg-porcelain hover:text-burgundy"
              >
                {isFarsi ? item.faLabel : item.label}
              </Link>
            ))}
            <ButtonLink href={isFarsi ? "/fa/consultation-booking" : "/consultation-booking"} className="mt-3 w-full">
              {consultationLabel}
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
