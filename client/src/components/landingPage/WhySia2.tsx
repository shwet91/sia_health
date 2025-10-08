import React from "react";
import Image from "next/image";

const imgVector =
  "http://localhost:3845/assets/b67ead631ab70b035119303ff5aa8330059e5b54.svg";
const imgGroup =
  "http://localhost:3845/assets/435a5f4fef72fb9b9bd2bbf1d5b25c536e424e8f.svg";
const imgGroup1 =
  "http://localhost:3845/assets/96a452a41ac3191a607518c1bd52579962f56b0c.svg";
const imgVector1 =
  "http://localhost:3845/assets/7c3ad74d5534db570657a9e7b4a6f2e5f6a2fbff.svg";

function WhySia2() {
  return (
    <section className="bg-[#ffe8c9] py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['Itim'] text-center mb-8 md:mb-12 lg:mb-16">
          <span className="text-black">Why Choose </span>
          <span className="text-[#ef3400]">Sia Health</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Root-Cause Healing */}
          <div className="bg-white rounded-3xl p-6 lg:p-8 flex flex-col items-center text-center shadow-sm">
            <div className="mb-4 lg:mb-6">
              <div className="w-16 h-16 lg:w-20 lg:h-20 relative">
                <Image
                  src={imgVector}
                  alt="Root-Cause Healing"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl lg:text-2xl font-['Barlow'] mb-2 lg:mb-3">
              <span className="text-[#fd4800]">Root-Cause Healing</span>
              <br />
              <span className="text-black">Not Quick Fixes</span>
            </h3>
            <p className="text-[#01002d] text-sm lg:text-base font-['Itim']">
              We fix the cause, not just the symptoms — through personalized
              nutrition, fitness, and lifestyle care.
            </p>
          </div>

          {/* Card 2: Truly Personalized */}
          <div className="bg-white rounded-3xl p-6 lg:p-8 flex flex-col items-center text-center shadow-sm">
            <div className="mb-4 lg:mb-6">
              <div className="w-16 h-16 lg:w-20 lg:h-20 relative flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={imgGroup1}
                    alt="Truly Personalized"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute inset-0">
                    <Image
                      src={imgVector1}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl lg:text-2xl font-['Barlow'] mb-2 lg:mb-3">
              <span className="text-[#fd4800]">Truly Personalized</span>
              <br />
              <span className="text-black">Your body, your plan</span>
            </h3>
            <p className="text-[#01002d] text-sm lg:text-base font-['Itim']">
              Every plan is tailored to your hormones, habits, and goals — never
              one-size-fits-all
            </p>
          </div>

          {/* Card 3: Human Support */}
          <div className="bg-white rounded-3xl p-6 lg:p-8 flex flex-col items-center text-center shadow-sm md:col-span-2 lg:col-span-1">
            <div className="mb-4 lg:mb-6">
              <div className="w-16 h-16 lg:w-20 lg:h-20 relative">
                <Image
                  src={imgGroup}
                  alt="Human Support"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl lg:text-2xl font-['Barlow'] mb-2 lg:mb-3">
              <span className="text-[#fd4800]">Human Support</span>
              <br />
              <span className="text-black">Experts who listen</span>
            </h3>
            <p className="text-[#01002d] text-sm lg:text-base font-['Itim']">
              Real coaches and doctors guide you daily — with care, empathy, and
              accountability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhySia2;
