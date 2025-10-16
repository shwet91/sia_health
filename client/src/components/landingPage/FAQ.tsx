"use client";

import React, { useState } from "react";
import { Merriweather } from "next/font/google";
import { ChevronRight } from "lucide-react";
import "../../styles/landingPage.css";
import { useRouter } from "next/navigation";

const merriweather = Merriweather({ subsets: ["latin"] });

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How is SIA Health different from my regular doctor?",
    answer:
      "While your regular doctor focuses on disease management, we specialize in optimization and prevention. We spend more time with you, run comprehensive testing, and create personalized protocols that address root causes rather than just managing symptoms.",
  },
  {
    question: "What types of testing do you recommend?",
    answer:
      "We offer comprehensive hormone panels, thyroid function tests, nutrient testing, and advanced metabolic assessments. Our testing is tailored to your specific symptoms and health goals, going beyond standard blood work to uncover underlying imbalances.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most patients begin to notice improvements within 4-6 weeks of starting their personalized protocol. However, sustainable healing takes time, and our comprehensive programs typically run for 3-6 months for optimal results.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We provide detailed invoices and documentation that you can submit to your insurance for potential reimbursement. While we don't accept direct insurance payments, many of our services may be eligible for HSA/FSA funds.",
  },
  {
    question: "Can you work with my existing medications?",
    answer:
      "Yes, we work collaboratively with your current healthcare providers and can incorporate existing medications into your treatment plan. Our goal is to optimize your health while ensuring safety and compatibility with your current treatments.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const router = useRouter();

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 Helvetica">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <h2
            className={`${merriweather.className} text-3xl md:text-4xl font-bold mb-2 text-[#100f2f]`}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#663014]">
            Get answers to the most common questions about our approach and
            services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* FAQ Section - Left Side */}
          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-5 py-3 flex items-center gap-3 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="flex-grow text-sm md:text-base font-medium text-[#1a4d3e]">
                    {item.question}
                  </span>
                  <ChevronRight
                    className={`flex-shrink-0 w-4 h-4 text-gray-600 transition-transform duration-300 ${
                      openIndex === index ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="px-5 pb-3 pl-[3.5rem]">
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Content Panel */}
          <div className=" bg-[#FFE4D3] 1bg-gray-200 rounded-xl p-6 text-gray-900 flex flex-col justify-center">
            <div className="space-y-4">
              <h3
                className={`${merriweather.className} text-xl md:text-2xl font-bold`}
              >
                Have More Questions?
              </h3>
              <p className="text-sm leading-relaxed opacity-90">
                We&apos;re here to help you on your health journey.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📧</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">info@siahealth.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📞</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => router.push("/contact")}
                className="mt-4 w-full bg-white text-[#1a4d3e] px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
