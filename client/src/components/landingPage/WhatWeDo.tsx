"use client";

import React, { useEffect, useRef, useState } from "react";
import { Merriweather } from "next/font/google";
import {
  ClipboardList,
  LineChart,
  FileText,
  Users,
  RefreshCcw,
} from "lucide-react";
import "../../styles/landingPage.css";
import { useRouter } from "next/navigation";

const merriweather = Merriweather({ subsets: ["latin"] });

export default function WhatWeDo() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [progressWidth, setProgressWidth] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger sequential animation when section comes into view
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index]);
                // Update progress bar width as each step becomes visible
                setProgressWidth(((index + 1) / steps.length) * 100);
              }, index * 200); // 200ms delay between each step
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 md:py-20 Helvetica overflow-hidden"
    >
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

        <div className="mt-8 md:mt-16 relative">
          {/* Connection lines for desktop */}
          <div
            className="hidden lg:block absolute top-8 left-0 right-0 h-0.5"
            style={{
              width: "calc(100% - 8rem)",
              left: "4rem",
            }}
          >
            {/* Background line */}
            <div className="absolute inset-0 bg-[#FFE8D9] rounded-full"></div>

            {/* Animated progress line */}
            <div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#FF4B00] via-[#FF6B2C] to-[#FF8C5A] rounded-full shadow-lg transition-all duration-500 ease-out"
              style={{
                width: `${progressWidth}%`,
              }}
            >
              {/* Glowing effect at the end of progress */}
              <div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF4B00] rounded-full shadow-[0_0_10px_rgba(255,75,0,0.8)]"
                style={{
                  opacity: progressWidth > 0 ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 relative">
            {steps.map((step, index) => {
              const isVisible = visibleSteps.includes(index);
              const isLastCard = index === steps.length - 1;
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center relative ${
                    isLastCard ? "col-span-2 sm:col-span-1" : ""
                  }`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0) scale(1)"
                      : "translateY(30px) scale(0.9)",
                    transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${
                      index * 0.1
                    }s`,
                  }}
                >
                  <div
                    className={`flex flex-col items-center ${
                      isLastCard ? "max-w-[50%] sm:max-w-none" : ""
                    }`}
                  >
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#FFF4EB] rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6 relative shadow-lg"
                      style={{
                        transform: isVisible
                          ? "rotate(0deg)"
                          : "rotate(-180deg)",
                        transition: `transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${
                          index * 0.1 + 0.2
                        }s`,
                      }}
                    >
                      <step.icon
                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#FF4B00]"
                        strokeWidth={1.5}
                      />
                      <div
                        className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-[#FF4B00] rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-md"
                        style={{
                          transform: isVisible ? "scale(1)" : "scale(0)",
                          transition: `transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${
                            index * 0.1 + 0.4
                          }s`,
                        }}
                      >
                        {index + 1}
                      </div>

                      {/* Subtle static glow (removed continuous blinking) */}
                      {isVisible && (
                        <div
                          className="absolute inset-0 bg-[#FF4B00] rounded-full opacity-15"
                          style={{
                            boxShadow: "0 0 18px rgba(255,75,0,0.35)",
                          }}
                        ></div>
                      )}
                    </div>

                    <h3
                      className="text-base sm:text-lg md:text-xl font-bold text-[#2D1810] mb-2 sm:mb-3 px-1"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateY(0)"
                          : "translateY(10px)",
                        transition: `all 0.4s ease ${index * 0.1 + 0.3}s`,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[#663014] text-xs sm:text-sm leading-relaxed px-1"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateY(0)"
                          : "translateY(10px)",
                        transition: `all 0.4s ease ${index * 0.1 + 0.4}s`,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => router.push("/about-us")}
            className="bg-[#FF4B00] text-white px-8 py-3 rounded-full font-medium hover:bg-[#e64400] transition-colors duration-300 inline-flex items-center"
          >
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
