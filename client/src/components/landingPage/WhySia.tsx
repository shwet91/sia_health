import React from "react";
import { Merriweather } from "next/font/google";
import { Check } from "lucide-react";
import "../../styles/landingPage.css";

const merriweather = Merriweather({ subsets: ["latin"] });

export default function WhySia() {
  return (
    <section className="w-full Helvetica bg-white py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <h2
          className={
            merriweather.className +
            " text-3xl md:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 max-w-3xl px-4 lg:px-0"
          }
        >
          Why Choose <span className="text-[#FF4B00]">SIA Health</span>?
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left side - Benefits list */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              {/* Each benefit item */}
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Check className="text-[#FF4B00] w-5 h-5" />
                </div>
                <p className="text-lg text-[#2D1810]">
                  Root-cause first, not symptom-chasing
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Check className="text-[#FF4B00] w-5 h-5" />
                </div>
                <p className="text-lg text-[#2D1810]">
                  Backed by science, delivered with empathy
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Check className="text-[#FF4B00] w-5 h-5" />
                </div>
                <p className="text-lg text-[#2D1810]">
                  Personalized protocols, not one-size-fits-all
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Check className="text-[#FF4B00] w-5 h-5" />
                </div>
                <p className="text-lg text-[#2D1810]">
                  Comprehensive testing, clear explanations
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Check className="text-[#FF4B00] w-5 h-5" />
                </div>
                <p className="text-lg text-[#2D1810]">
                  Ongoing support, not just appointments
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Check className="text-[#FF4B00] w-5 h-5" />
                </div>
                <p className="text-lg text-[#2D1810]">
                  Evidence-based supplements, not guesswork
                </p>
              </div>
            </div>

            <p className="mt-8 text-[#663014] text-lg">
              We don&apos;t just treat symptoms—we uncover and address the
              underlying imbalances that are keeping you from feeling your best.
            </p>

            <button className="mt-6 text-[#FF4B00] font-medium flex items-center hover:text-[#e64400] transition-colors">
              Learn about our approach
              <svg
                className="ml-2 w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right side - Comparison cards */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              {/* Generic Plans Card */}
              <div className="bg-[#FFF4EB] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#2D1810] mb-6">
                  Generic Plans
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-[#663014]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#663014]" />
                    One-size-fits-all protocols
                  </li>
                  <li className="flex items-center gap-3 text-[#663014]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#663014]" />
                    Symptom suppression
                  </li>
                  <li className="flex items-center gap-3 text-[#663014]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#663014]" />
                    Limited testing
                  </li>
                </ul>
              </div>

              {/* The SIA Method Card */}
              <div className="bg-[#FFF4EB] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#2D1810] mb-6">
                  The SIA Method
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-[#663014]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#663014]" />
                    Personalized protocols
                  </li>
                  <li className="flex items-center gap-3 text-[#663014]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#663014]" />
                    Root-cause medicine
                  </li>
                  <li className="flex items-center gap-3 text-[#663014]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#663014]" />
                    Comprehensive testing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
