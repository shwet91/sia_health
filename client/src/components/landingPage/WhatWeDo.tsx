import React from "react";
import { Merriweather } from "next/font/google";
import {
  ClipboardList,
  LineChart,
  FileText,
  Users,
  RefreshCcw,
} from "lucide-react";

const merriweather = Merriweather({ subsets: ["latin"] });

export default function WhatWeDo() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Assessment",
      description:
        "Comprehensive intake form and detailed health history review",
    },
    {
      icon: LineChart,
      title: "Map",
      description:
        "Advanced testing to identify your unique hormonal landscape",
    },
    {
      icon: FileText,
      title: "Protocol",
      description:
        "Personalized treatment plan tailored to your specific needs",
    },
    {
      icon: Users,
      title: "Guidance",
      description: "Ongoing support and regular check-ins with your care team",
    },
    {
      icon: RefreshCcw,
      title: "Rework",
      description: "Continuous optimization based on your progress and results",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-4xl mx-auto">
          <h2
            className={`${merriweather.className} text-4xl md:text-5xl font-bold mb-4`}
          >
            We don&apos;t just track symptoms.{" "}
            <span className="text-[#FF4B00]">We translate them.</span>
          </h2>
          <p className="text-xl text-[#663014]">
            Our proven 5-step process transforms confusion into clarity,
            symptoms into solutions.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#FFF4EB] rounded-full flex items-center justify-center mb-6 relative">
                <step.icon
                  className="w-8 h-8 text-[#FF4B00]"
                  strokeWidth={1.5}
                />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FF4B00] rounded-full flex items-center justify-center text-white text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#2D1810] mb-3">
                {step.title}
              </h3>
              <p className="text-[#663014] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#FF4B00] text-white px-8 py-3 rounded-full font-medium hover:bg-[#e64400] transition-colors duration-300 inline-flex items-center">
            Explore Your Journey
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
      </div>
    </section>
  );
}
