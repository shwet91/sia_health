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
    desc: "Personalized, evidence-based care tailored to your needs.",
    icon: <Heart className="w-6 h-6 text-[#FF7E29]" />,
  },
  {
    title: "Thyroid Disorders",
    desc: "Personalized, evidence-based care tailored to your needs.",
    icon: <Zap className="w-6 h-6 text-[#FF7E29]" />,
  },
  {
    title: "Gut Issues & bloating",
    desc: "Personalized, evidence-based care tailored to your needs.",
    icon: <Scale className="w-6 h-6 text-[#FF7E29]" />,
  },
  {
    title: "Skin, Hair, Immunity & more",
    desc: "Personalized, evidence-based care tailored to your needs.",
    icon: <Star className="w-6 h-6 text-[#FF7E29]" />,
  },
  {
    title: "Fatigue & Low Energy",
    desc: "Personalized, evidence-based care tailored to your needs.",
    icon: <Calendar className="w-6 h-6 text-[#FF7E29]" />,
  },
  {
    title: "Menopause( Peri & Post)",
    desc: "Personalized, evidence-based care tailored to your needs.",
    icon: <Moon className="w-6 h-6 text-[#FF7E29]" />,
  },
  {
    title: "Weight Management",
    desc: "Personalized, evidence-based care tailored to your needs.",
    icon: <Smile className="w-6 h-6 text-[#FF7E29]" />,
  },
  {
    title: "Fertility & pre-conception care",
    desc: "Personalized, evidence-based care tailored to your needs.",
    icon: <Brain className="w-6 h-6 text-[#FF7E29]" />,
  },
];

export default function Services() {
  return (
    <section className="w-full Helvetica bg-[rgba(255,244,235,0.6)] py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 lg:mb-12 px-4 lg:px-0">
          <h2
            className={
              merriweather.className +
              " text-3xl md:text-4xl lg:text-5xl font-bold"
            }
          >
            What We Treat
          </h2>
          <p className="mt-4 text-[#663014] text-lg max-w-2xl mx-auto">
            Comprehensive care for the full spectrum of women&apos;s hormonal
            health.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.slice(0, 4).map((s) => (
            <div
              key={s.title}
              className={
                "bg-white rounded-2xl p-2 sm:p-8 shadow-sm hover:shadow-[0_8px_30px_rgb(198,61,0,0.5)] hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden border border-[rgba(102,43,0,0.05)]"
              }
              style={{
                backgroundImage:
                  "radial-gradient(rgba(102,43,0,0.12) 1px, transparent 1px)",
                backgroundSize: "8px 8px",
                backgroundColor: "#ffffff",
              }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[rgba(255,244,235,0.6)] mb-4">
                {s.icon}
              </div>
              <h3 className="sm:text-xl font-bold text-[#2D1810] mb-3 text-center">
                {s.title}
              </h3>
              <p className="text-sm  text-[#663014] text-center">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-6 lg:mt-10">
          {services.slice(4).map((s) => (
            <div
              key={s.title}
              className={
                "bg-white rounded-2xl p-2 sm:p-8 shadow-sm hover:shadow-[0_8px_30px_rgb(198,61,0,0.5)] hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden border border-[rgba(102,43,0,0.05)]"
              }
              style={{
                backgroundImage:
                  "radial-gradient(rgba(102,43,0,0.12) 1px, transparent 1px)",
                backgroundSize: "8px 8px",
                backgroundColor: "#ffffff",
              }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[rgba(255,244,235,0.6)] mb-4">
                {s.icon}
              </div>
              <h3 className="sm:text-xl font-bold text-[#2D1810] mb-3 text-center">
                {s.title}
              </h3>
              <p className="text-sm text-[#663014] text-center">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
