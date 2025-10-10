"use client";

import React from "react";
import Image from "next/image";
import { Merriweather } from "next/font/google";
import "../../styles/landingPage.css";

const merriweather = Merriweather({ subsets: ["latin"] });

export default function IntegratedCare() {
  return (
    <section className="w-full Helvetica bg-[#0f0a0f] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 lg:mb-12 px-4 lg:px-0">
          <h2
            className={
              merriweather.className +
              " text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            }
          >
            Our Integrated Care
          </h2>
          <p className="mt-4 text-[#f3d9c9] text-lg max-w-2xl mx-auto">
            Multi-disciplinary support combining lifestyle guidance, medical
            access, and community-led reviews to help you thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <article className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="h-48 w-full relative">
              <Image
                src="/founder.avif"
                alt="Lifestyle"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 border-t border-[rgba(0,0,0,0.06)]">
              <h3 className="text-xl font-semibold text-[#FF7E29] mb-3">
                Lifestyle Guidance & Daily Support
              </h3>
              <p className="text-sm text-[#333333] leading-relaxed">
                Hormonal health isn&apos;t just about food or exercise.
                It&apos;s about your habits, stress, sleep, and mindset. Our
                experts help you stay on track with regular check-ins,
                habit-building, and small, meaningful changes that don&apos;t
                disrupt your life - but uplift it.
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="h-48 w-full relative">
              <Image
                src="/del.avif"
                alt="Medical Access"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 border-t border-[rgba(0,0,0,0.06)]">
              <h3 className="text-xl font-semibold text-[#FF7E29] mb-3">
                Medical Health Access
              </h3>
              <p className="text-sm text-[#333333] leading-relaxed">
                From Gynaecologists to Therapists, we connect you with trusted
                professionals who understand hormonal health and help you get
                personalised solutions tailored to the problems you face daily.
              </p>
            </div>
          </article>

          {/* Card 3 */}
          <article className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="h-48 w-full relative">
              <Image
                src="/yoga.jpg"
                alt="Community"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 border-t border-[rgba(0,0,0,0.06)]">
              <h3 className="text-xl font-semibold text-[#FF7E29] mb-3">
                Expert Reviews & Community Support
              </h3>
              <p className="text-sm text-[#333333] leading-relaxed">
                Your progress is regularly reviewed by a team of experts so your
                plan evolves with you. Join live sessions, workshops and support
                circles to connect with other women navigating similar journeys.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
