"use client";

import React from "react";
import Image from "next/image";
import { Merriweather } from "next/font/google";
import "../../styles/landingPage.css";

const merriweather = Merriweather({ subsets: ["latin"] });

export default function MoreAboutServices() {
  return (
    <section className="w-full Helvetica bg-[rgba(255,244,235,0.6)] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14 px-4 lg:px-0">
          <h1
            className={
              merriweather.className +
              " text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D1810]"
            }
          >
            Let&apos;s read more about OUR services
          </h1>
          <p className="mt-4 text-[#663014] text-lg max-w-3xl mx-auto">
            Our goal is help you completely in your health journey: From
            Diagnosis to Daily Lifestyle interventions. We are there with you
            every step of the way, giving you exactly what you need.
          </p>
        </div>
        {/* Article 1: Image left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16 lg:mb-24">
          <div className="order-1 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-md h-[380px]">
              <Image
                src="/founder.avif"
                alt="Health Analysis"
                width={900}
                height={280}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <h2
              className={
                merriweather.className +
                " text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D1810] mb-4"
              }
            >
              Health Analysis & Root Cause Discovery
            </h2>
            <p className="text-[#663014] text-lg mb-4">
              We start by asking the right questions : analyzing your health
              history, patterns, and lab reports.
            </p>
            <p className="text-[#663014] text-lg">
              Our team helps you identify the “why” behind your symptoms - so
              your care is truly aligned to your needs.
            </p>
          </div>
        </div>

        {/* Article 2: Text left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16 lg:mb-24">
          <div className="order-2 lg:order-1">
            <h2
              className={
                merriweather.className +
                " text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D1810] mb-4"
              }
            >
              Nutrition Support & Supplement Guidance
            </h2>
            <p className="text-[#663014] text-lg mb-4">
              Your nutrition plan is designed around your body’s unique
              requirements - whether it’s inflammation, insulin resistance,
              digestive concerns, or fatigue
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-md h-[380px]">
              <Image
                src="/del.avif"
                alt="Nutrition Support"
                width={900}
                height={280}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Article 3: Image left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="order-1 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-md h-[380px]">
              <Image
                src="/founder.avif"
                alt="Health Analysis"
                width={900}
                height={280}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <h2
              className={
                merriweather.className +
                " text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D1810] mb-4"
              }
            >
              Health Analysis & Root Cause Discovery
            </h2>
            <p className="text-[#663014] text-lg mb-4">
              We start by asking the right questions : analyzing your health
              history, patterns, and lab reports.
            </p>
            <p className="text-[#663014] text-lg">
              Our team helps you identify the “why” behind your symptoms - so
              your care is truly aligned to your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
