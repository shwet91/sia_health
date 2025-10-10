"use client";

import React from "react";
// import { Lato } from "next/font/google";
import Image from "next/image";

import { Merriweather } from "next/font/google";
import "../../styles/landingPage.css";

// const latoFont = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const merriweather = Merriweather({ subsets: ["latin"] });

export default function ProblemStatement() {
  return (
    <section
      aria-labelledby="problem-heading"
      className="py-16 px-6 sm:px-10 lg:px-20 bg-white Helvetica "
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3
              id="problem-heading"
              className={`text-3xl md:text-5xl ${merriweather.className} text-[#130e2e] leading-tight`}
            >
              Why <span className="text-[#FF4B00]">women struggle</span> with{" "}
              <span className="text-[#FF4B00]">hormonal</span> health today
              today
            </h3>

            <p className="mt-3 text-base md:text-md text-[#6b6158] max-w-xl">
              Many women face persistent hormonal challenges because the system
              often misunderstands or minimizes their experience. Quick fixes or
              one-size-fits-all approaches don’t address the root causes — and
              that leaves people exhausted, frustrated, and alone.
            </p>

            <ul className="mt-8 space-y-4 text-[#130e2e]">
              <li className="flex gap-4 items-start">
                <span>
                  <strong className="text-[#130e2e]">
                    Symptoms ignored unless fertility is affected.
                  </strong>
                  <div className="text-sm text-[#6b6158]">
                    Many providers focus on fertility-related symptoms, leaving
                    other chronic issues under-addressed.
                  </div>
                </span>
              </li>

              <li className="flex gap-4 items-start">
                <span>
                  <strong className="text-[#130e2e]">
                    One-size-fits-all, quick fixes don’t work.
                  </strong>
                  <div className="text-sm text-[#6b6158]">
                    Hormones require individualized assessment — not a generic
                    pill or fad diet.
                  </div>
                </span>
              </li>

              <li className="flex gap-4 items-start">
                <span>
                  <strong className="text-[#130e2e]">
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
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] rounded-xl overflow-hidden 1shadow-lg">
              <Image
                src="/gitl_weight.jpg"
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
