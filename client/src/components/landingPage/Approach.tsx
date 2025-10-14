import React from "react";
import Image from "next/image";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({ subsets: ["latin"], weight: "400" });
import "../../styles/landingPage.css";
const steps = [
  {
    title: "Health Analysis",
    description:
      "We start with a comprehensive analysis of your health, including diagnosis, understanding root causes, and detailed blood report interpretation.",
    image: "/Solutions/1.avif",
    highlights: [
      "Expert diagnosis",
      "Root cause analysis",
      "Blood report interpretation",
      "Personalized health insights",
    ],
  },
  {
    title: "Daily Nutrition Support",
    description:
      "Receive personalized nutrition guidance based on your blood reports and symptoms, making healthy eating simple and effective.",
    image: "/Solutions/2.avif",
    highlights: [
      "Customized meal plans",
      "Easy-to-follow recipes",
      "Blood work-based recommendations",
      "Symptom-specific guidance",
    ],
  },
  {
    title: "Supplements & Lifestyle Support",
    description:
      "Get clear guidance on supplements and develop sustainable lifestyle habits that work for you long-term.",
    image: "/Solutions/3.avif",
    highlights: [
      "Evidence-based supplements",
      "Sustainable habit building",
      "Long-term solutions",
      "Ongoing support",
    ],
  },
];

export default function Approach() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 Helvetica">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left side - Grid of 4 image cards */}
        <div className="grid grid-cols-2 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-48 group"
            >
              <Image
                src={step.image}
                alt={step.title}
                width={400}
                height={300}
                className="w-full h-full object-cover"
                priority={index === 0}
              />
              {/* Light overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40 group-hover:from-black/30 group-hover:via-black/40 group-hover:to-black/50 transition-all duration-300"></div>
              {/* Heading text */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <h3 className="text-white text-center font-bold text-lg leading-tight drop-shadow-lg">
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
          {/* Fourth card */}
          <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-48 group">
            <Image
              src="/Solutions/4.avif"
              alt="Ongoing Support"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
            {/* Light overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40 group-hover:from-black/30 group-hover:via-black/40 group-hover:to-black/50 transition-all duration-300"></div>
            {/* Heading text */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <h3 className="text-white text-center font-bold text-lg leading-tight drop-shadow-lg">
                Ongoing Support
              </h3>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div>
          {/* <p className="text-sm text-[#FF4B00] font-semibold">At Sia Health, we understand that</p> */}
          <h2
            className={`mt-3 text-4xl lg:text-6xl font-serif text-[#FF4B00] ${merriweather.className}`}
          >
            At Sia Health
          </h2>
          <h2
            className={` text-4xl lg:text-5xl font-serif text-gray-900 ${merriweather.className}`}
          >
            {" "}
            <span>We Take Care of Everything, So You Don`t Have To</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl">
            Women already juggle a lot — work, family,
            responsibilities — and their health often takes the back seat.
          </p>

          <div className="mt-6 text-gray-700 max-w-xl space-y-4">
            <p className="text-gray-700">
              We take the mental load off your shoulders, guiding you from
              diagnosis to daily nutrition and lifestyle changes — all with
              continuous support, clinical expertise, and empathy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
