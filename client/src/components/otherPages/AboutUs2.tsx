"use client";

import React from "react";
import Image from "next/image";
import { Merriweather } from "next/font/google";
import "../../styles/landingPage.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function AboutUs2() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-white">
      {/* Main Heading */}
      <h1
        className={`${merriweather.className} text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 leading-tight max-w-4xl`}
      >
        Because women deserve
        <br />
        better care.
      </h1>

      {/* Subheading */}
      <p className="Helvetica mt-8 text-lg md:text-xl text-gray-500 text-center max-w-2xl">
        We are on a mission to make hormonal healthcare
        <br className="hidden md:block" />
        accessible, evidence-based, and filled with empathy.
      </p>

      {/* CTA Button */}
      <button className="Helvetica mt-10 bg-[#D97740] hover:bg-[#c56835] text-white font-medium px-8 py-4 rounded-full flex items-center gap-2 transition-colors duration-300">
        Take the 2-minute Hormone Test
        <span className="ml-1">→</span>
      </button>

      {/* Our Story Section */}
      <div className="mt-32 max-w-4xl w-full">
        <p className="Helvetica text-[#D97740] text-sm font-medium tracking-wider uppercase mb-6">
          OUR STORY
        </p>
        <h2
          className={`${merriweather.className} text-4xl md:text-5xl font-bold text-gray-900 mb-6`}
        >
          Why I Built SIA Health
        </h2>
        <p className="Helvetica text-lg md:text-xl text-gray-600 leading-relaxed">
          Built from personal experience, now growing into a shared mission to
          change how women&apos;s health is cared for.
        </p>
      </div>

      {/* Founder Story Section */}
      <div className="hidden mt-20 max-w-6xl w-full grid1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Founder Image */}
        <div className="Helvetica flex flex-col justify-start space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
          <p>
            Like many women, I struggled for years with hormonal issues that
            were dismissed, misunderstood, or treated with a one-size-fits-all
            approach. Every doctor&apos;s visit felt rushed. Every symptom felt
            minimized. And the worst part? I was told this was just
            &ldquo;normal.&rdquo;
          </p>

          <p>
            But it wasn&apos;t normal. And I knew other women were going through
            the same thing —feeling unheard, unsupported, and unsure of where to
            turn.
          </p>

          <p>
            That&apos;s why I built SIA Health. I wanted to create the kind of
            care I wished I had received: continuous, personalized,
            evidence-based support that treats women as whole people, not just a
            collection of symptoms.
          </p>

          <p>
            What started as a personal mission has become something much bigger.
            Today, we&apos;re building a movement to change how women&apos;s
            health is approached—with empathy, expertise, and the understanding
            that every woman deserves care that truly sees her.
          </p>

          <p className="text-gray-500 text-sm md:text-base mt-8">
            Founder & CEO
          </p>
        </div>

        {/* Right: Story Text */}

        <div className="relative rounded-3xl overflow-hidden">
          <Image
            src="/founder.avif"
            alt="Founder"
            width={550}
            height={700}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Founder Story Section */}
      <div className="mt-20 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Founder Image */}
        <div className="relative rounded-3xl overflow-hidden">
          <Image
            src="/founder.avif"
            alt="Founder"
            width={550}
            height={700}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right: Story Text */}
        <div className="Helvetica flex flex-col justify-start space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
          <p>
            Like many women, I struggled for years with hormonal issues that
            were dismissed, misunderstood, or treated with a one-size-fits-all
            approach. Every doctor&apos;s visit felt rushed. Every symptom felt
            minimized. And the worst part? I was told this was just
            &ldquo;normal.&rdquo;
          </p>

          <p>
            But it wasn&apos;t normal. And I knew other women were going through
            the same thing —feeling unheard, unsupported, and unsure of where to
            turn.
          </p>

          <p>
            That&apos;s why I built SIA Health. I wanted to create the kind of
            care I wished I had received: continuous, personalized,
            evidence-based support that treats women as whole people, not just a
            collection of symptoms.
          </p>

          <p>
            What started as a personal mission has become something much bigger.
            Today, we&apos;re building a movement to change how women&apos;s
            health is approached—with empathy, expertise, and the understanding
            that every woman deserves care that truly sees her.
          </p>

          <p className="text-gray-500 text-sm md:text-base mt-8">
            Founder & CEO
          </p>
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="mt-32 max-w-4xl w-full">
        <p className="Helvetica text-[#D97740] text-sm font-medium tracking-wider uppercase mb-6">
          OUR VISION
        </p>
        <h2
          className={`${merriweather.className} text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight`}
        >
          To help one million women take charge of their hormonal health
        </h2>
        <p className="Helvetica text-lg md:text-xl text-gray-600 leading-relaxed">
          Through continuous, evidence-based, and empathetic care.
        </p>
      </div>

      {/* Our Values Section */}
      <div className="mt-32 max-w-6xl w-full">
        <p className="Helvetica text-[#D97740] text-sm font-medium tracking-wider uppercase mb-6">
          OUR VALUES
        </p>
        <h2
          className={`${merriweather.className} text-4xl md:text-5xl font-bold text-gray-900 mb-16`}
        >
          What We Stand For
        </h2>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {/* Value 1: Empathy First */}
          <div>
            <div className="w-12 h-1 bg-[#D97740] mb-4"></div>
            <h3
              className={`${merriweather.className} text-2xl md:text-3xl font-bold text-gray-900 mb-4`}
            >
              Empathy First
            </h3>
            <p className="Helvetica text-base md:text-lg text-gray-600 leading-relaxed">
              We listen, we understand, and we care. Your experience matters,
              and you deserve to be heard.
            </p>
          </div>

          {/* Value 2: Science Over Trends */}
          <div>
            <div className="w-12 h-1 bg-[#D97740] mb-4"></div>
            <h3
              className={`${merriweather.className} text-2xl md:text-3xl font-bold text-gray-900 mb-4`}
            >
              Science Over Trends
            </h3>
            <p className="Helvetica text-base md:text-lg text-gray-600 leading-relaxed">
              Evidence-based care backed by research and trusted medical
              expertise—not fads or quick fixes.
            </p>
          </div>

          {/* Value 3: Transparency Always */}
          <div>
            <div className="w-12 h-1 bg-[#D97740] mb-4"></div>
            <h3
              className={`${merriweather.className} text-2xl md:text-3xl font-bold text-gray-900 mb-4`}
            >
              Transparency Always
            </h3>
            <p className="Helvetica text-base md:text-lg text-gray-600 leading-relaxed">
              Clear communication, honest answers, and no hidden agendas. You
              deserve to know the &apos;why&apos; behind every recommendation.
            </p>
          </div>

          {/* Value 4: Progress, Not Perfection */}
          <div>
            <div className="w-12 h-1 bg-[#D97740] mb-4"></div>
            <h3
              className={`${merriweather.className} text-2xl md:text-3xl font-bold text-gray-900 mb-4`}
            >
              Progress, Not Perfection
            </h3>
            <p className="Helvetica text-base md:text-lg text-gray-600 leading-relaxed">
              Sustainable change takes time. We celebrate small wins and support
              you through every step of your journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
