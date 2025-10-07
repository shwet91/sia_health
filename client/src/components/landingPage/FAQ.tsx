"use client";

import React, { useState } from "react";
import { Merriweather } from "next/font/google";
import { ChevronDown } from "lucide-react";

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
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2
            className={`${merriweather.className} text-4xl md:text-5xl font-bold mb-4`}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#663014]">
            Get answers to the most common questions about our approach and
            services.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFF4EB] rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-[#2D1810]">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#FF4B00] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-8 transition-all duration-300 ${
                  openIndex === index ? "pb-6" : "h-0 overflow-hidden"
                }`}
              >
                <p className="text-[#663014] leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
