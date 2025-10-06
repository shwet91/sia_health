"use client";

import React from "react";

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
              className="text-3xl md:text-4xl font-extrabold text-[#2e1300] leading-tight"
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
            <div className="grid grid-cols-3 gap-4 max-w-sm">
              <div className="bg-[#fff7f0] rounded-xl p-4 flex flex-col items-center text-center shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-[#ff7e29]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2v6"
                    stroke="#FF7E29"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 8c0 3.866 3.134 7 7 7s7-3.134 7-7"
                    stroke="#FF7E29"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="mt-3 font-semibold text-sm text-[#2e1300]">
                  Fatigue
                </div>
                <div className="text-xs text-[#6b6158] mt-1">
                  Low energy, brain fog
                </div>
              </div>

              <div className="bg-[#fff7f0] rounded-xl p-4 flex flex-col items-center text-center shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-[#ff7e29]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 3c1.657 0 3 1.343 3 3 0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3z"
                    stroke="#FF7E29"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 21c1.5-4 6-7 7-7s5.5 3 7 7"
                    stroke="#FF7E29"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="mt-3 font-semibold text-sm text-[#2e1300]">
                  Mood
                </div>
                <div className="text-xs text-[#6b6158] mt-1">
                  Anxiety & swings
                </div>
              </div>

              <div className="bg-[#fff7f0] rounded-xl p-4 flex flex-col items-center text-center shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-[#ff7e29]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 7h16M7 11h10M9 15h6"
                    stroke="#FF7E29"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="mt-3 font-semibold text-sm text-[#2e1300]">
                  Weight
                </div>
                <div className="text-xs text-[#6b6158] mt-1">
                  Unexplained gain
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
