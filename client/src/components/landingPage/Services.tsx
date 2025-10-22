"use client";

import React from "react";
import Image from "next/image";
import { Merriweather } from "next/font/google";
import "../../styles/landingPage.css";

const merriweather = Merriweather({ subsets: ["latin"] });

const services = [
  {
    title: "PCOS/PCOD & Irregular Periods",
    desc: "Restore your hormonal balance and regain cycle control — naturally and sustainably.",
  },
  {
    title: "Thyroid Disorders & Imbalances",
    desc: "Stabilize your energy, mood, and metabolism with targeted thyroid care.",
  },
  {
    title: "Gut Issues, Bloating & Digestion",
    desc: "Heal your gut, improve digestion, and reduce bloating from within.",
  },
  {
    title: "Skin, Hair, Immunity & More",
    desc: "Glow from the inside out with balanced hormones and better nutrition.",
  },
  {
    title: "Fatigue, Low Energy & Burnout",
    desc: "Reclaim your energy and feel refreshed — all day, every day.",
  },
  {
    title: "Menopause (Peri & Post)",
    desc: "Navigate hormonal shifts smoothly with expert, compassionate care.",
  },
  {
    title: "Weight Management & Metabolism",
    desc: "Balance hormones to achieve sustainable, long-term weight goals.",
  },
  {
    title: "Fertility & Pre-conception Care",
    desc: "Support your body naturally for healthy cycles and conception readiness.",
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

        {/* Use Approach-style image cards for visual parity */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((s, idx) => {
            const images = [
              "/Solutions/1.avif",
              "/Solutions/2.avif",
              "/Solutions/3.avif",
              "/Solutions/4.avif",
              "/Solutions/5.avif",
              "/Solutions/6.avif",
            ];
            const img = images[idx % images.length];
            return (
              <div
                key={s.title}
                className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-48 group"
              >
                <Image
                  src={img}
                  alt={s.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
                {/* Stronger gradient + tint layer to make the cards darker */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 group-hover:from-black/60 group-hover:via-black/70 group-hover:to-black/80 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                  <h3 className="text-white font-bold text-lg leading-tight drop-shadow-lg">
                    {s.title}
                  </h3>
                </div>
                {/* Keep description only for screen readers - no visual reveal on hover */}
                <p className="sr-only">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
