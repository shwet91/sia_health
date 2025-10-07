import React from "react";
import Image from "next/image";

const steps = [
  {
    title: "Health Analysis",
    description:
      "We start with a comprehensive analysis of your health, including diagnosis, understanding root causes, and detailed blood report interpretation.",
    icon: "/icons/analysis.svg", // You'll need to add these icons
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
    icon: "/icons/nutrition.svg",
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
    icon: "/icons/lifestyle.svg",
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
    <section className="w-full py-16 bg-gradient-to-b from-white to-[#FFF4EB]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How we <span className="text-[#FF4B00]">HELP</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#663014] max-w-3xl mx-auto">
            We TAKE CARE of all your health needs. As women, we understand the
            challenges of balancing multiple responsibilities, which is why at
            SIA we take away the mental load and provide expert, empathetic
            solutions for all your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6 h-16 w-16 bg-[#FFF4EB] rounded-full flex items-center justify-center">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={32}
                  height={32}
                />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-[#FF4B00]">
                {step.title}
              </h3>

              <p className="text-[#663014] mb-6">{step.description}</p>

              <ul className="space-y-3">
                {step.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm text-[#663014]"
                  >
                    <span className="text-[#FF4B00] mr-2">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-[#663014] max-w-3xl mx-auto italic">
            With SIA there is no guessing - we recommend what to take, help you
            build small habits that work, and provide solutions that last longer
            than our care plans.
          </p>
        </div>
      </div>
    </section>
  );
}
