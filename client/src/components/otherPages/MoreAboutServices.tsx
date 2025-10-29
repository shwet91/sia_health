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
              " text-3xl md:text-4xl lg:text-6xl font-bold text-[#2D1810]"
            }
          >
            Let&apos;s read more about{" "}
            <span className="text-[#FF4B00]">our services</span>
          </h1>
          <p className="mt-4 text-[#6b7a70] text-lg max-w-3xl mx-auto">
            Our goal is help you completely in your health journey: From
            Diagnosis to Daily Lifestyle interventions. We are there with you
            every step of the way, giving you exactly what you need.
          </p>
        </div>
        {/* Article 1: Image left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16 lg:mb-24">
          <div className="order-1 lg:order-1">
            <div className="rounded-lg overflow-hidden shadow-md h-[280px] sm:h-[380px]">
              <Image
                src="/contactImg/1.jpeg"
                alt="Health Analysis"
                width={900}
                height={280}
                className="w-full h-full object-cover "
              />
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <h2
              className={
                merriweather.className +
                " text-center text-3xl md:text-4xl lg:text-4xl font-bold text-[#2D1810] mb-4 leading-tight"
              }
            >
              Health Analysis & Root Cause Discovery
            </h2>
            <p className="text-[#6b7a70] text-lg mb-4 text-center">
              We start by asking the right questions, analyzing your health
              history, patterns, and lab reports. Helping you get bloodwork
              done, if something is missing. Our team helps you identify the
              rootcause behind your symptoms, so your care is truly aligned to
              your needs.
            </p>
          </div>
        </div>

        {/* Article 2: Text left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16 lg:mb-24">
          <div className="order-2 lg:order-1">
            <h2
              className={
                merriweather.className +
                " text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D1810] mb-4 text-center leading-tight"
              }
            >
              Nutrition Support & Supplement Guidance
            </h2>
            <p className="text-[#6b7a70] text-lg mb-4 text-center">
              Your nutrition plan is tailored to your body&apos;s unique needs,
              addressing inflammation, insulin resistance, digestive issues, or
              fatigue. We combine expert guidance with evidence-based
              supplements to support hormonal balance, energy, and overall
              wellbeing. This holistic approach ensures you heal from within,
              creating sustainable health improvements.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-sm overflow-hidden shadow-md h-[280px] sm:h-[380px]">
              <Image
                src="https://media.istockphoto.com/id/953638668/photo/vegan-sweet-potato-chickpea-curry-in-wooden-bowl-on-light-background-top-view-copy-space.jpg?s=2048x2048&w=is&k=20&c=JkXWoQo_Q6S3-cukX52XLwe4EWxQ9qZxe102hZ3Nzrg="
                alt="Nutrition Support"
                width={900}
                height={280}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Article 3: Image left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-1 lg:order-1">
            <div className="rounded-sm overflow-hidden shadow-md h-[280px] sm:h-[380px]">
              <Image
                src="https://media.istockphoto.com/id/1295315075/photo/african-american-woman-doing-stretching-at-home-she-sits-on-a-training-mat-in-front-of-a.jpg?s=2048x2048&w=is&k=20&c=U3RONFFgmjjkLB6b3TIylT4-304XuSzW3deS0JZSNW8="
                alt="Health Analysis"
                width={900}
                height={280}
                className="w-full h-full object-cover object-left"
              />
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <h2
              className={
                merriweather.className +
                " text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D1810] mb-4 text-center leading-tight"
              }
            >
              Fitness Support and Live Classes
            </h2>
            <p className="text-[#6b7a70] text-lg mb-4 text-center">
              We understand that fitness looks different for everyone depending
              on age, goals, and symptoms. Our experts help you find exercises
              that work best for your body and hormonal health. You get
              structured fitness guidance along with optional live sessions so
              that staying active feels simple, safe, and enjoyable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
