"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, site } from "@/lib/site";

export function Footer() {
  const pathname = usePathname();
  const isFarsi = pathname.startsWith("/fa");

  return (
    <footer dir={isFarsi ? "rtl" : "ltr"} className="bg-charcoal text-white">
      <div className="container-lux px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr_1fr]">
          <div>
            <p dir="ltr" className="font-serif text-3xl">{site.name}</p>
            <p className="mt-4 max-w-md leading-7 text-white/70">{isFarsi ? site.farsiDescription : site.description}</p>
            <div className="mt-6 flex gap-3">
              {[
                { label: "LinkedIn", icon: Linkedin },
                { label: "Instagram", icon: Instagram },
                { label: "Facebook", icon: Facebook }
              ].map(({ label, icon: Icon }) => (
                <a key={label} href="#" aria-label={label} className="grid h-10 w-10 place-items-center rounded border border-white/15 text-gold transition hover:border-gold hover:bg-white/5">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">{isFarsi ? "دسترسی سریع" : "Navigation"}</p>
            <nav className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={isFarsi ? item.faHref : item.href} className="text-sm text-white/72 transition hover:text-gold">
                  {isFarsi ? item.faLabel : item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">{isFarsi ? "تماس" : "Contact"}</p>
            <ul className="mt-5 grid gap-4 text-sm text-white/72">
              <li className="flex gap-3"><Mail className="mt-0.5 text-gold" size={18} /><span dir="ltr">{site.email}</span></li>
              <li className="flex gap-3"><Phone className="mt-0.5 text-gold" size={18} /><span dir="ltr">{site.phone}</span></li>
              <li className="flex gap-3"><MapPin className="mt-0.5 text-gold" size={18} />{isFarsi ? site.farsiAddress : site.address}</li>
            </ul>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/58">
              <Link href="/privacy-policy" className="hover:text-gold">{isFarsi ? "حریم خصوصی" : "Privacy Policy"}</Link>
              <Link href="/terms" className="hover:text-gold">{isFarsi ? "قوانین و شرایط" : "Terms"}</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/50">
          © {new Date().getFullYear()} {site.name}. {isFarsi ? "تمامی حقوق محفوظ است." : "All rights reserved."}
        </div>
      </div>
    </footer>
  );
}
