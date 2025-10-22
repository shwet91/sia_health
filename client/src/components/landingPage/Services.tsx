"use client";

import React from "react";
import {
  Heart,
  Zap,
  Scale,
  Star,
  Calendar,
  Smile,
  Brain,
  Moon,
} from "lucide-react";
import { Merriweather } from "next/font/google";
import "../../styles/landingPage.css";

const merriweather = Merriweather({ subsets: ["latin"] });

const services = [
  {
    title: "PCOS/PCOD & Irregular Periods",
    desc: "Restore your hormonal balance and regain cycle control — naturally and sustainably.",
    icon: <Heart className="w-4 h-4 text-[#FF7E29]" />,
  },
  {
    title: "Thyroid Disorders & Imbalances",
    desc: "Stabilize your energy, mood, and metabolism with targeted thyroid care.",
    icon: <Zap className="w-4 h-4 text-[#FF7E29]" />,
  },
  {
    title: "Gut Issues, Bloating & Digestion",
    desc: "Heal your gut, improve digestion, and reduce bloating from within.",
    icon: <Scale className="w-4 h-4 text-[#FF7E29]" />,
  },
  {
    title: "Skin, Hair, Immunity & More",
    desc: "Glow from the inside out with balanced hormones and better nutrition.",
    icon: <Star className="w-4 h-4 text-[#FF7E29]" />,
  },
  {
    title: "Fatigue, Low Energy & Burnout",
    desc: "Reclaim your energy and feel refreshed — all day, every day.",
    icon: <Calendar className="w-4 h-4 text-[#FF7E29]" />,
  },
  {
    title: "Menopause (Peri & Post)",
    desc: "Navigate hormonal shifts smoothly with expert, compassionate care.",
    icon: <Moon className="w-4 h-4 text-[#FF7E29]" />,
  },
  {
    title: "Weight Management & Metabolism",
    desc: "Balance hormones to achieve sustainable, long-term weight goals.",
    icon: <Smile className="w-4 h-4 text-[#FF7E29]" />,
  },
  {
    title: "Fertility & Pre-conception Care",
    desc: "Support your body naturally for healthy cycles and conception readiness.",
    icon: <Brain className="w-4 h-4 text-[#FF7E29]" />,
  },
];

export default function Services() {
  return (
    <section className="w-full Helvetica bg-[rgba(255,244,235,0.6)] py-6 md:py-8 lg:py-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-6 lg:mb-8 px-4 lg:px-0">
          <h2
            className={
              merriweather.className +
              " text-2xl md:text-3xl lg:text-4xl font-bold"
            }
          >
            What We Treat
          </h2>
          <p className="mt-3 text-[#663014] text-base max-w-xl mx-auto">
            Comprehensive care for the full spectrum of women&apos;s hormonal
            health.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.slice(0, 4).map((s) => (
            <div
              key={s.title}
              className={
                "bg-white rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-[0_6px_20px_rgb(198,61,0,0.35)] hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden border border-[rgba(102,43,0,0.05)]"
              }
              style={{
                backgroundImage:
                  "radial-gradient(rgba(102,43,0,0.12) 1px, transparent 1px)",
                backgroundSize: "6px 6px",
                backgroundColor: "#ffffff",
              }}
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[rgba(255,244,235,0.6)] mb-3">
                {s.icon}
              </div>
              <h3 className="text-sm font-bold text-[#2D1810] mb-2 text-center">
                {s.title}
              </h3>
              <p className="text-xs text-[#663014] text-center">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-4 lg:mt-6">
          {services.slice(4).map((s) => (
            <div
              key={s.title}
              className={
                "bg-white rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-[0_6px_20px_rgb(198,61,0,0.35)] hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden border border-[rgba(102,43,0,0.05)]"
              }
              style={{
                backgroundImage:
                  "radial-gradient(rgba(102,43,0,0.12) 1px, transparent 1px)",
                backgroundSize: "6px 6px",
                backgroundColor: "#ffffff",
              }}
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[rgba(255,244,235,0.6)] mb-3">
                {s.icon}
              </div>
              <h3 className="text-sm font-bold text-[#2D1810] mb-2 text-center">
                {s.title}
              </h3>
              <p className="text-xs text-[#663014] text-center">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
