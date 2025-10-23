"use client";

import React from "react";
import Image from "next/image";
import { Merriweather } from "next/font/google";
import "../../styles/landingPage.css";

const merriweather = Merriweather({ subsets: ["latin"] });

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20 mt-10">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h2
          className={
            merriweather.className +
            " text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b0b0b]"
          }
        >
          Our Why?
        </h2>
        <p className="text-2xl md:text-3xl text-[#d9661b] italic mt-2">
          Because Women Deserve Better.
        </p>
      </div>

      {/* Top article: image left, text right */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 my-8">
        <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/sunflower.avif"
            alt="Women in field"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm md:text-base text-[#222222] leading-relaxed mb-4">
            <strong>Our mission is simple:</strong> to make hormonal healthcare{" "}
            <strong>accessible, evidence-based,</strong> and full of{" "}
            <strong>empathy.</strong>
          </p>

          <p className="text-sm md:text-base text-[#222222] leading-relaxed mb-4">
            Whether it&apos;s PCOS, thyroid, perimenopause or anything, we know the
            journey is confusing, often dismissed, and lonely.
          </p>

          <p className="text-sm md:text-base text-[#222222] leading-relaxed">
            That&rsquo;s why we&rsquo;re building a root-cause, expert-led platform to give
            women the care they deserve, all in one place.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-16">
        <div className="md:col-span-2">
          <h1
            className={
              merriweather.className +
              " text-3xl md:text-4xl lg:text-5xl font-bold text-[#d9661b] leading-tight mb-6"
            }
          >
            Why am I building this
            <br />
            <span className="block text-4xl md:text-5xl text-[#111111] mt-2">
              & what&apos;s my goal?
            </span>
          </h1>

          <div className="mt-8">
            <p className="text-sm md:text-base text-[#222222] leading-relaxed my-4">
              “I&rsquo;ve struggled with <strong>PCOS</strong> for over 12 years:
              irregular cycles, mood swings, hair growth, hair fall, hormonal
              acne, weight gain, unexplained fatigue. I tried everything - birth
              control, crash diets, endless doctor visits (without lifestyle
              awareness).”
            </p>

            <p className="text-sm md:text-base text-[#222222] leading-relaxed my-4">
              It wasn&rsquo;t until I connected the dots between medical support,
              lifestyle changes, and root-cause care that things truly started
              to shift.
            </p>

            <p className="text-sm md:text-base text-[#222222] leading-relaxed my-4">
              SIA Health was born out of that struggle. Not as a shortcut , but
              as a <strong>support system I wish I had.</strong>
              <br />
              Now, we&rsquo;re building that system for every woman who&rsquo;s still trying
              to figure it out.”
            </p>

            <p className="mt-4 italic text-sm text-[#111111]">
              — Aditi Tiwari, Founder
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/founder.avif"
              alt="Founder"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
