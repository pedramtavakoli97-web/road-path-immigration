import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary: "bg-burgundy text-white shadow-luxury hover:bg-charcoal hover:shadow-gold",
  secondary: "border border-gold/70 bg-white text-charcoal hover:border-burgundy hover:text-burgundy hover:shadow-gold",
  ghost: "text-charcoal hover:text-burgundy"
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded px-6 text-sm font-semibold uppercase tracking-[0.16em] transition duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
