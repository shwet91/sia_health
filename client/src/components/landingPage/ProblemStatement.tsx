"use client";

import React from "react";
import { Lato } from "next/font/google";
import Image from "next/image";

const latoFont = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export default function ProblemStatement() {
  return (
    <section
      aria-labelledby="problem-heading"
      className="py-16 px-6 sm:px-10 lg:px-20 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3
              id="problem-heading"
              className={`text-3xl md:text-4xl ${latoFont.className} text-[#2e1300] leading-tight`}
            >
              Why women struggle with hormonal health today
            </h3>

            <p className="mt-6 text-base md:text-lg text-[#6b6158] max-w-xl">
              Many women face persistent hormonal challenges because the system
              often misunderstands or minimizes their experience. Quick fixes or
              one-size-fits-all approaches don’t address the root causes — and
              that leaves people exhausted, frustrated, and alone.
            </p>

            <ul className="mt-8 space-y-4 text-[#403531]">
              <li className="flex gap-4 items-start">
                <span className="mt-1 text-orange-500">●</span>
                <span>
                  <strong>
                    Symptoms ignored unless fertility is affected.
                  </strong>
                  <div className="text-sm text-[#6b6158]">
                    Many providers focus on fertility-related symptoms, leaving
                    other chronic issues under-addressed.
                  </div>
                </span>
              </li>

              <li className="flex gap-4 items-start">
                <span className="mt-1 text-orange-500">●</span>
                <span>
                  <strong>One-size-fits-all, quick fixes don’t work.</strong>
                  <div className="text-sm text-[#6b6158]">
                    Hormones require individualized assessment — not a generic
                    pill or fad diet.
                  </div>
                </span>
              </li>

              <li className="flex gap-4 items-start">
                <span className="mt-1 text-orange-500">●</span>
                <span>
                  <strong>
                    The emotional + mental burden women carry alone.
                  </strong>
                  <div className="text-sm text-[#6b6158]">
                    Stress, anxiety, and stigma compound physical symptoms and
                    reduce access to empathetic care.
                  </div>
                </span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/girl_swings.jpg"
                alt="woman illustrating fatigue"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
