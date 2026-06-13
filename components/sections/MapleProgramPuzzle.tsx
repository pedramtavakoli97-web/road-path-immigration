"use client";

import { Building2, FileBadge2, GraduationCap, HeartHandshake, Landmark, Plane, BriefcaseBusiness, ShieldCheck, BadgeCheck } from "lucide-react";
import { useState } from "react";

const programs = [
  {
    id: "family",
    title: "Family Sponsorship",
    short: "Family Sponsorship",
    icon: HeartHandshake,
    href: "/programs/family-sponsorship"
  },
  {
    id: "express",
    title: "Express Entry & PNPs",
    short: "Express Entry",
    icon: Landmark,
    href: "/programs/express-entry-pnps"
  },
  {
    id: "work",
    title: "Work Permits & Employer",
    short: "Work Permit",
    icon: BriefcaseBusiness,
    href: "/programs/work-permits"
  },
  {
    id: "study",
    title: "Study Permits",
    short: "Study Permit",
    icon: GraduationCap,
    href: "/programs/study-permits"
  },
  {
    id: "visitor",
    title: "Visitor Visa & Super Visa",
    short: "Visitor Visa",
    icon: Plane,
    href: "/programs/visitor-visas-super-visa"
  },
  {
    id: "business",
    title: "Business Immigration",
    short: "Business Immigration",
    icon: Building2,
    href: "/programs/business-immigration"
  },
  {
    id: "pr",
    title: "PR Cards & Appeals",
    short: "PR Card",
    icon: FileBadge2,
    href: "/programs/pr-cards-appeals"
  },
  {
    id: "refugee",
    title: "Refugee Protection",
    short: "Refugee",
    icon: ShieldCheck,
    href: "/programs/refugee"
  },
  {
    id: "citizenship",
    title: "Citizenship",
    short: "Citizenship",
    icon: BadgeCheck,
    href: "/programs/citizenship"
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

export function MapleProgramPuzzle() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="section-pad bg-white">
      <div className="container-lux">
        <div>
          <div className="relative mx-auto max-w-[760px]">
            <div className="rounded-lg border border-charcoal/10 bg-porcelain p-3 shadow-sm sm:p-8">
              <svg className="mx-auto block aspect-square w-full max-w-[650px]" viewBox="0 0 640 640" role="img" aria-label="Interactive circle puzzle of immigration programs">
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
                      aria-label={`Open ${program.title}`}
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
                      <foreignObject x={labelPosition.x - 68} y={labelPosition.y - 50} width="136" height="100" className="pointer-events-none">
                        <div className={`flex h-full flex-col items-center justify-center text-center ${isActive ? "text-white" : "text-charcoal"}`}>
                            <Icon className={isActive ? "text-gold" : "text-burgundy"} size={26} />
                            <span className="mt-2 text-[13px] font-semibold uppercase leading-5 tracking-[0.08em]">{program.short}</span>
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
      </div>
    </section>
  );
}
