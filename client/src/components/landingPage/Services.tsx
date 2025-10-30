"use client";

import React from "react";
import Image from "next/image";
import { Merriweather } from "next/font/google";
import "../../styles/landingPage.css";

const merriweather = Merriweather({ subsets: ["latin"] });

const services = [
  {
    title: "PCOS/PCOD or Irregular Periods",
    desc: "We focus on finding your root cause, whether it's insulin resistance, inflammation, thyroid, or stress etc. We make lifestyle changes around your symptoms, routine and blood work.",
  },
  {
    title: "Thyroid Imbalances",
    desc: "Whether it's hypo or hyper-thyroid, our team helps you understand your lab reports, reduce fatigue and manage weight naturally.We work on your metabolism, stress and daily habits to support your thyroid health.",
  },
  {
    title: "Menopause / Perimenopause",
    desc: "Joint pain, hot flashes, mood shifts or poor sleep, we help you manage them through food, movement and lifestyle changes that support hormonal transition. Our experts guide you with calm, clarity and daily care through this new phase.",
  },
  {
    title: "Fertility & Pre-conception Care",
    desc: "We help you prepare your body during pregnancy or for conception by improving egg health, balancing hormones and reducing inflammation. Our nutrition and lifestyle plans are tailored for your current reports and goals.",
  },
  {
    title: "Weight & Metabolism",
    desc: "We don't chase quick fixes. Instead, we help you understand your metabolism, hormones and habits that affect weight.With balanced meals and sustainable movement, results come naturally.",
  },
  {
    title: "Gut & Digestion Health",
    desc: "Your gut affects everything, from skin to mood.We build meal plans that calm inflammation, improve digestion, help with bloating and support your hormones from within.",
  },
  {
    title: "Fatigue & Low Energy",
    desc: "Constant tiredness isn't normal. We identify nutritional, hormonal or lifestyle gaps causing low energy. You get a personalised plan to feel lighter, focused and more energetic daily.",
  },
  {
    title: "Skin, Hair & Immunity",
    desc: "Hormones often show up on your skin and hair first.We address the internal causes like nutrition gaps, stress, gut health, so your glow comes back naturally.",
  },
];

export default function Services() {
  return (
    <section className="w-full Helvetica bg-[#FFF4EB] py-6 md:py-8 lg:py-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-6 lg:mb-8 px-4 lg:px-0">
          <h2
            className={
              merriweather.className +
              " text-2xl md:text-3xl lg:text-5xl font-bold"
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
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
          {services.map((s, idx) => {
            // const images = [
            //   "/Solutions/1.avif",
            //   "/Solutions/2.avif",
            //   "/Solutions/3.avif",
            //   "/Solutions/4.avif",
            //   "/Solutions/5.avif",
            //   "/Solutions/6.avif",
            // ];

            const images = [
              "https://i.pinimg.com/736x/68/8a/9c/688a9c85e73fad2dda5a002921cfcb80.jpg",
              "https://i.pinimg.com/1200x/c3/43/db/c343db9e157695432f1ca4415ec85437.jpg",
              "https://i.pinimg.com/736x/a7/5b/59/a75b59fbd7d8dbcd4c750fe5e8c6bae6.jpg",
              "https://i.pinimg.com/736x/66/fb/13/66fb131c2d73afe73ea42514220f0f96.jpg",
              "https://i.pinimg.com/736x/ff/2d/60/ff2d608fc0833538e2ebc3bccca4da4f.jpg",
              "https://i.pinimg.com/736x/61/c9/61/61c9616ccb27d8511134cee1c019f15b.jpg",
              "https://i.pinimg.com/1200x/55/12/80/5512808adf46954e80a236a10ecdd331.jpg",
              "https://i.pinimg.com/1200x/4f/58/90/4f589009f97e02f818773bad680bb3dd.jpg",
            ];
            const img = images[idx % images.length];
            return (
              <div
                key={s.title}
                className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-32 sm:h-36 lg:h-48 group"
              >
                <Image
                  src={img}
                  alt={s.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
                {/* Stronger gradient + tint layer to make the cards darker */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 group-hover:from-black/60 group-hover:via-black/70 group-hover:to-black/80 transition-all duration-500 ease-in-out"></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 ease-in-out"></div>

                {/* Title - always visible */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 sm:p-3 lg:p-4 text-center">
                  <h3 className=" text-white font-bold text-sm sm:text-base lg:text-lg leading-tight drop-shadow-lg transition-all duration-300 ease-in-out group-hover:hidden group-hover:translate-y-2">
                    {s.title}
                  </h3>

                  {/* Description - only visible on hover with slide-up animation */}
                  <p className="text-white text-[8px] sm:text-[9px] lg:text-xs leading-tight drop-shadow-md mt-1 sm:mt-0 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out max-h-0 group-hover:max-h-30 overflow-hidden">
                    {s.desc}
                  </p>

                  <div className=" hidden h-15 w-15 border"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
