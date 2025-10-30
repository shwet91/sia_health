"use client";

import React from "react";
import { Merriweather } from "next/font/google";
import "../../styles/landingPage.css";
import { MoveRight } from "lucide-react";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Define form validation schema

export default function ApproachV2() {
  return (
    <section
      className={"approach-v2-container Helvetica "}
      style={{
        padding: "64px 24px",
        background: "#FFF4EB",
        color: "#FF4B00",
        fontFamily: "inherit",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            color: "#c5a78a",
            letterSpacing: 2,
            marginBottom: 12,
            fontSize: 12,
          }}
          className="hidden"
        >
          - Services -
        </p>

        <h2
          // style={{ fontSize: 36, margin: 0, fontWeight: 700 }}
          className={`${merriweather.className} text-4xl md:text-5xl`}
        >
          How Sia helps you
        </h2>

        <p style={{ color: "#6b7a70", marginTop: 12, marginBottom: 40 }}>
          Personalised, evidence-based care built around your hormonal health.
        </p>

        <div className="approach-grid">
          {/* Card 1 */}
          <div className="approach-card">
            <div
              className={`${merriweather.className} approach-img w-full h-full relative`}
            >
              <img
                src="/help3.jpg"
                alt="Medical & Health Analysis"
                className="absolute inset-0 w-full h-full object-top"
              />
            </div>

            <h3 className="approach-card-title  text-center">
              Medical &amp; Health Analysis
            </h3>
            <p className="approach-card-text  text-center">
              From diagnosis to direction, we guide you at every step. Our
              medical team reviews your blood reports, helps interpret your
              results, and connects you to trusted doctors. We keep your care
              evidence-based, non-judgmental, and centred around your hormones.
            </p>
          </div>

          {/* Card 2 */}
          <div className="approach-card">
            <div
              className={`${merriweather.className} approach-img w-full h-full relative`}
            >
              <img
                src="/help4.png"
                alt="Specialised Care Plans"
                className="absolute inset-0 w-full h-full object-top"
              />
            </div>
            <h3 className="approach-card-title  text-center">
              Specialised Care Plans
            </h3>
            <p className="approach-card-text  text-center">
              Food, fitness, and lifestyle designed around your body. Each plan
              is built using your medical data, symptoms, and goals. Our experts
              create meal, fitness, and lifestyle routines that fit your
              schedule, and work with your hormones, not against them.
            </p>
          </div>

          {/* Card 3 */}
          <div className="approach-card">
            <div className="approach-img">
              <img
                src="/help2.png"
                alt="Real, Empathetic Support"
                className=" object-top"
              />
            </div>
            <h3 className="approach-card-title  text-center">
              Real, Empathetic Support
            </h3>
            <p className="approach-card-text  text-center">
              Daily guidance from experts who actually listen.Your health coach
              and support team stay with you throughout your journey, reviewing
              progress, and keeping you accountable. We take the mental load off
              your shoulders so you can focus on getting better.
            </p>
          </div>
        </div>

        <p style={{ marginTop: 26, color: "#4a6157" }} className="hidden">
          We take the mental load off your shoulders so you can focus on getting
          better.
        </p>
        {/* Hormone Test Button - Moved to Bottom */}
        <div className="flex flex-col items-center justify-center w-full mt-5 sm:mt-8 gap-3 1hidden">
          <button
            // onClick={() => router.push("https://quiz.siahealth.in")}
            className={`1px-10 sm:w-auto justify-center w-full sm:px-5 py-3 rounded-sm flex gap-2 items-center font-bold text-[#662b00] border-[#FF7E29] border-1 text-sm sm:text-base hover:bg-[#ffe4d3] hover:scale-105 transition-all duration-300 hover:shadow-xl `}
          >
            Take the 2-minute hormone test <MoveRight></MoveRight>
          </button>
          <p className="text-[#662b00] text-xs sm:text-sm text-center max-w-[280px] sm:max-w-xs">
            Find the root cause behind your hormonal concerns with our quick
            online quiz
          </p>
        </div>
      </div>
    </section>
  );
}
