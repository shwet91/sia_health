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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left image with overlay card */}
        <div className="relative">
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/HowWeHelp.jpeg"
              alt="nutrition"
              width={900}
              height={700}
              className="w-full h-auto object-cover block"
            />
          </div>

          {/* overlay card removed as requested */}
        </div>

        {/* Right content */}
        <div>
          <p className="text-sm text-[#FF4B00] font-semibold">How we healp ?</p>
          <h2 className="mt-3 text-4xl lg:text-5xl font-serif text-gray-900">Better Eat, Better Life</h2>
          <p className="mt-4 text-gray-500 max-w-xl">If You Get A Better Nutrition, You Can Enjoy A Healthy Age</p>

          <p className="mt-6 text-gray-400 max-w-xl">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

          <h3 className="mt-8 text-2xl font-serif text-gray-900">We Can Help You</h3>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 mt-1 text-[#FF4B00]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="ml-3 text-gray-700">Low Energy</span>
              </li>

              <li className="flex items-start">
                <span className="flex-shrink-0 mt-1 text-[#FF4B00]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="ml-3 text-gray-700">Stress & Anxiety</span>
              </li>

              <li className="flex items-start">
                <span className="flex-shrink-0 mt-1 text-[#FF4B00]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="ml-3 text-gray-700">Poor Eating Habits</span>
              </li>

              <li className="flex items-start">
                <span className="flex-shrink-0 mt-1 text-[#FF4B00]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="ml-3 text-gray-700">Digestive Problems</span>
              </li>
            </ul>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 mt-1 text-[#FF4B00]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="ml-3 text-gray-700">Balance Body & Mind</span>
              </li>

              <li className="flex items-start">
                <span className="flex-shrink-0 mt-1 text-[#FF4B00]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="ml-3 text-gray-700">Advice</span>
              </li>

              <li className="flex items-start">
                <span className="flex-shrink-0 mt-1 text-[#FF4B00]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="ml-3 text-gray-700">Workout Routines</span>
              </li>

              <li className="flex items-start">
                <span className="flex-shrink-0 mt-1 text-[#FF4B00]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="ml-3 text-gray-700">Protein</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
