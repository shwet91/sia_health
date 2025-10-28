"use client";

import React from "react";
import Image from "next/image";
import "../../styles/landingPage.css";
// import { Patrick_Hand } from "next/font/google";
import { Merriweather } from "next/font/google";
import { useRouter } from "next/navigation";

// const patrickHand = Patrick_Hand({ subsets: ["latin"], weight: ["400" , "400"] });
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "400"],
});

function WhySia2() {
  const services = [
    {
      icon: (
        <svg
          className="w-10 h-10 md:w-12 md:h-12 text-[#FF4B00]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M7 2v2H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V2h-2v2H9V2H7zm0 6h10v10H7V8z" />
        </svg>
      ),
      title: "Root-Cause Healing",
      subtitle: "",
      description:
        "We do not just manage symptoms. We address what is actually causing them.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 md:w-12 md:h-12 text-[#FF4B00]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          <path d="M12 17l-4-4h3V9h2v4h3l-4 4z" fill="white" />
        </svg>
      ),
      title: "Personalized, Not Prescribed",
      subtitle: "",
      description:
        "Every woman’s body is unique, and so is her care. Your plans are created around your schedule.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 md:w-12 md:h-12 text-[#FF4B00]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
      title: "Transparent Care",
      subtitle: "",
      description:
        "You will always know what is happening and why. We keep you informed and involved at every step.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 md:w-12 md:h-12 text-[#FF4B00]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z" />
        </svg>
      ),
      title: "Real, Human Support",
      subtitle: "",
      description: "Daily support from a team of experts that truly listens.",
    },
  ];

  const router = useRouter();

  return (
    <section className="bg-white py-6 md:py-8 Helvetica lg:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 items-center">
          {/* Left Side - Heading and Description */}
          <div className="lg:pr-4">
            <div className="mb-4 md:mb-6 relative w-full h-[120px] md:h-[150px] hidden">
              <Image
                src="/yoga.jpg"
                alt="Woman practicing wellness"
                fill
                className="rounded-2xl object-cover"
              />
            </div>
            <h2
              className={`text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight ${merriweather.className}`}
            >
              See the{" "}
              <span className="text-[#FF4B00] font-bold">SIA Difference</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
              SIA Health helps women regain clarity, confidence, and control
              over their hormones with science-backed, empathetic, and long-term
              support designed just for you.
            </p>
            <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed hidden xl:block">
              Women already juggle enough with work, home, and responsibilities.
              Your health should not be another burden. At SIA Health, we help you take control of your
              hormones through real, daily support so you can focus on feeling
              better.
            </p>
            <button
              onClick={() => router.push("https://quiz.siahealth.in")}
              className="bg-[#FF4B00] text-white px-6 py-2 rounded-md hover:bg-[#ff6827] transition-colors duration-300 text-xs md:text-sm font-medium"
            >
              Find the best for you
            </button>
          </div>

          {/* Right Side - Cards Grid */}
          <div className="grid grid-cols-2 gap-2.5 md:gap-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-xl p-3 md:p-4 hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="mb-2">{service.icon}</div>
                <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-0.5">
                  {service.title}
                </h3>
                <p className="text-xs font-medium text-gray-700 mb-1">
                  {service.subtitle}
                </p>
                <p className="text-xs text-gray-600 leading-snug">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhySia2;
