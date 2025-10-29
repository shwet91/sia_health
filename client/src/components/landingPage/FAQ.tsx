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
    question: "How will my journey with SIA Health look once I join?",
    answer:
      "You’ll start with an onboarding call where we go through your reports, symptoms, and goals. Your health coach then creates a personalized daily plan with meals, fitness, and habits that fit your routine. You’ll get regular check ins through WhatsApp and our app, progress reviews, and expert support across nutrition, fitness, and medical guidance all in one place.",
  },
  {
    question:
      "I already have a nutritionist or take supplements. Do I still need SIA Health?",
    answer:
      "Absolutely. Our goal isn’t to replace what’s working for you but to connect all the pieces. SIA brings your nutrition, medical insights, fitness, and lifestyle guidance under one roof with experts reviewing your progress daily. If you already have a nutritionist or supplement plan, our team can align with that and ensure it’s scientifically consistent and working with your hormones, not against them.",
  },
  {
    question:
      "Why should I come to SIA Health if I already have a gynecologist?",
    answer:
      "We’re not a replacement for your gynecologist. We are your day to day support system. We handle meal planning, symptom tracking, fitness adjustments, lifestyle tweaks, and expert consultations when needed. Think of us as your personalized long term chronic care partner.",
  },
  {
    question:
      "What makes SIA Health different from other health or wellness platforms?",
    answer:
      "Hormonal health isn’t a small category for us. It is our entire focus. Every SIA expert, from doctors and nutritionists to fitness coaches, is trained in hormonal science and follows an evidence based, empathy first approach. You don’t just get a plan. You get a care team that stays with you every step of the way.",
  },
  {
    question:
      "How much do the plans cost, and how do I know SIA Health is worth it?",
    answer:
      "Our plans start from ₹600/month and go up to ₹4,000/month depending on the level of support. You’re not paying for one consultation. You’re investing in ongoing personalized care. You get access to a coordinated team of doctors, nutritionists, fitness trainers, and health coaches working together daily to help you improve your health sustainably.",
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
          <div className=" bg-[#FFF4EB] 1bg-gray-200 rounded-xl p-6 text-gray-900 flex flex-col justify-center">
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
                    <p className="text-sm font-medium">support@siahealth.in</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📞</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">+91-7007640890</p>
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
