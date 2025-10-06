"use client";

import React from "react";
import { Lato } from "next/font/google";

const latoFont = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export default function Mission() {
  return (
    <section
      aria-labelledby="mission-heading"
      className="py-16 px-6 sm:px-10 lg:px-20 bg-[#fffaf8]"
      style={{ background: "#fef7e5" }}
    >
      <div className="  max-w-7xl mx-auto">
        <div className="  items-center">
          <div>
            <h3
              id="mission-heading"
              className={`text-3xl text-center md:text-4xl ${latoFont.className} text-[#2e1300] font-extrabold leading-tight`}
            >
              We exist to give women clarity, confidence & control over their
              health
            </h3>

            {/* Three responsive cards (vertical on mobile, horizontal on lg) */}
            <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-stretch">
              <div className="flex items-center justify-center flex-col bg-white border border-[rgba(46,19,0,0.06)] rounded-xl p-5 shadow-sm">
                <h4 className="font-semibold text-[#2e1300]">
                  Holistic Approach
                </h4>
                <p className="text-sm text-[#6b6158] mt-2 text-center">
                  Nutrition, fitness, lifestyle & medical guidance - helping you
                  with what you need.
                </p>
              </div>

              <div className="flex items-center justify-center flex-col bg-white border border-[rgba(46,19,0,0.06)] rounded-xl p-5 shadow-sm">
                <h4 className="font-semibold text-[#2e1300]">
                  Your Health, Our Team
                </h4>
                <p className="text-sm text-[#6b6158] mt-2 text-center">
                  Structured around your symptoms, lab markers, and lifestyle
                </p>
              </div>

              <div className="flex items-center justify-center flex-col bg-white border border-[rgba(46,19,0,0.06)] rounded-xl p-5 shadow-sm">
                <h4 className="font-semibold text-[#2e1300]">
                  Expert-Led, Personalised Care
                </h4>
                <p className="text-sm text-[#6b6158] mt-2 text-center">
                  Feel heard and cared by dedicated team of experts just for
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
