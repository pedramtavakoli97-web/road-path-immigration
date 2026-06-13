"use client";

import { BadgeCheck, BriefcaseBusiness, Building2, FileBadge2, GraduationCap, HeartHandshake, Landmark, Plane, ShieldCheck } from "lucide-react";
import { useState } from "react";

const programs = [
  {
    id: "family",
    title: "حمایت خانوادگی",
    short: "خانوادگی",
    icon: HeartHandshake,
    href: "/fa/programs/family-sponsorship"
  },
  {
    id: "express",
    title: "اکسپرس انتری و PNP",
    short: "اکسپرس انتری",
    icon: Landmark,
    href: "/fa/programs/express-entry-pnps"
  },
  {
    id: "work",
    title: "مجوز کار",
    short: "مجوز کار",
    icon: BriefcaseBusiness,
    href: "/fa/programs/work-permits"
  },
  {
    id: "study",
    title: "مجوز تحصیل",
    short: "مجوز تحصیل",
    icon: GraduationCap,
    href: "/fa/programs/study-permits"
  },
  {
    id: "visitor",
    title: "ویزای بازدید",
    short: "ویزای بازدید",
    icon: Plane,
    href: "/fa/programs/visitor-visas-super-visa"
  },
  {
    id: "business",
    title: "مهاجرت تجاری",
    short: "مهاجرت تجاری",
    icon: Building2,
    href: "/fa/programs/business-immigration"
  },
  {
    id: "pr",
    title: "کارت PR",
    short: "کارت PR",
    icon: FileBadge2,
    href: "/fa/programs/pr-cards-appeals"
  },
  {
    id: "refugee",
    title: "پناهندگی",
    short: "پناهندگی",
    icon: ShieldCheck,
    href: "/fa/programs/refugee"
  },
  {
    id: "citizenship",
    title: "شهروندی",
    short: "شهروندی",
    icon: BadgeCheck,
    href: "/fa/programs/citizenship"
  }
];

const circle = { cx: 320, cy: 320, radius: 270 };
const sliceAngle = 360 / programs.length;

function polarToCartesian(angle: number, radius = circle.radius) {
  const radians = ((angle - 90) * Math.PI) / 180;
  return {
    x: circle.cx + radius * Math.cos(radians),
    y: circle.cy + radius * Math.sin(radians)
  };
}

function describeSlice(startAngle: number, endAngle: number) {
  const start = polarToCartesian(startAngle);
  const end = polarToCartesian(endAngle);
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;

  return [
    `M ${circle.cx} ${circle.cy}`,
    `L ${start.x} ${start.y}`,
    `A ${circle.radius} ${circle.radius} 0 ${largeArc} 1 ${end.x} ${end.y}`,
    "Z"
  ].join(" ");
}

export function FarsiMapleProgramPuzzle() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section dir="rtl" className="section-pad bg-white">
      <div className="container-lux">
        <div className="relative mx-auto max-w-[760px]">
          <div className="rounded-lg border border-charcoal/10 bg-porcelain p-3 shadow-sm sm:p-8">
            <svg className="mx-auto block aspect-square w-full max-w-[650px]" viewBox="0 0 640 640" role="img" aria-label="دایره برنامه‌های مهاجرتی">
              <circle cx={circle.cx} cy={circle.cy} r={circle.radius} className="fill-white stroke-charcoal stroke-[4]" />
              {programs.map((program, index) => {
                const Icon = program.icon;
                const isActive = program.id === activeId;
                const startAngle = index * sliceAngle;
                const endAngle = (index + 1) * sliceAngle;
                const labelPosition = polarToCartesian(startAngle + sliceAngle / 2, 168);

                return (
                  <a
                    key={program.id}
                    href={program.href}
                    aria-label={`باز کردن ${program.title}`}
                    onMouseEnter={() => setActiveId(program.id)}
                    onMouseLeave={() => setActiveId(null)}
                    onFocus={() => setActiveId(program.id)}
                    onBlur={() => setActiveId(null)}
                    className="outline-none"
                  >
                    <g
                      className="transition duration-300 ease-out"
                      style={{
                        transformBox: "fill-box",
                        transformOrigin: `${circle.cx}px ${circle.cy}px`,
                        transform: isActive ? "scale(1.06)" : "scale(1)"
                      }}
                    >
                      <path
                        d={describeSlice(startAngle, endAngle)}
                        className={`cursor-pointer stroke-white stroke-[5] outline-none transition duration-300 ${
                          isActive ? "fill-burgundy" : index % 2 === 0 ? "fill-porcelain" : "fill-white"
                        }`}
                      />
                      <foreignObject x={labelPosition.x - 72} y={labelPosition.y - 50} width="144" height="100" className="pointer-events-none">
                        <div className={`flex h-full flex-col items-center justify-center text-center ${isActive ? "text-white" : "text-charcoal"}`}>
                          <Icon className={isActive ? "text-gold" : "text-burgundy"} size={26} />
                          <span className="mt-2 text-[13px] font-semibold leading-5">{program.short}</span>
                        </div>
                      </foreignObject>
                    </g>
                  </a>
                );
              })}
              <circle cx={circle.cx} cy={circle.cy} r="72" className="pointer-events-none fill-white stroke-charcoal/10 stroke-[3]" />
              <text x={circle.cx} y={circle.cy - 4} textAnchor="middle" className="pointer-events-none fill-burgundy font-serif text-[28px]">
                RPI
              </text>
              <text x={circle.cx} y={circle.cy + 24} textAnchor="middle" className="pointer-events-none fill-charcoal text-[10px] font-semibold uppercase tracking-[0.18em]">
                Programs
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
