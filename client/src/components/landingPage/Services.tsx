import React from "react";
import { Merriweather } from "next/font/google";
import { Heart, Zap, Scale, Sprout, Calendar, Baby, Smile } from "lucide-react";
import "../../styles/landingPage.css";

const merriweather = Merriweather({ subsets: ["latin"] });

export default function Services() {
  return (
    <section className="w-full Helvetica bg-gradient-to-br from-[#FFF4EB] to-[#FFE4D3] py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2
            className={
              "text-4xl md:text-5xl font-bold mb-4 " + merriweather.className
            }
          >
            What We Treat
          </h2>
          <p className="text-xl text-[#663014] max-w-3xl mx-auto">
            Comprehensive care for the full spectrum of women&apos;s hormonal
            health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* PCOS Card */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-[0_15px_45px_rgb(255,75,0,0.25)] transform hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative flex flex-col items-center text-center overflow-hidden">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-full bg-[#FFF4EB] flex items-center justify-center">
                <Heart size={24} className="text-[#FF4B00]" strokeWidth={2} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#2D1810]">PCOS</h3>
            <p className="text-[#663014] text-sm leading-relaxed">
              Comprehensive care for polycystic ovary syndrome, from symptoms to
              root causes.
            </p>
          </div>

          {/* Thyroid Card */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-[0_15px_45px_rgb(255,75,0,0.25)] transform hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative flex flex-col items-center text-center overflow-hidden">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-full bg-[#FFF4EB] flex items-center justify-center">
                <Zap size={24} className="text-[#FF4B00]" strokeWidth={2} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#2D1810]">Thyroid</h3>
            <p className="text-[#663014] text-sm leading-relaxed">
              Optimize thyroid function with personalized protocols and ongoing
              support.
            </p>
          </div>

          {/* Weight Card */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-[0_15px_45px_rgb(255,75,0,0.25)] transform hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative flex flex-col items-center text-center overflow-hidden">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-full bg-[#FFF4EB] flex items-center justify-center">
                <Scale size={24} className="text-[#FF4B00]" strokeWidth={2} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#2D1810]">Weight</h3>
            <p className="text-[#663014] text-sm leading-relaxed">
              Sustainable weight management through hormonal balance, not
              restriction.
            </p>
          </div>

          {/* Skin Card */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-[0_15px_45px_rgb(255,75,0,0.25)] transform hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative flex flex-col items-center text-center overflow-hidden">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-full bg-[#FFF4EB] flex items-center justify-center">
                <Sprout size={24} className="text-[#FF4B00]" strokeWidth={2} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#2D1810]">Skin</h3>
            <p className="text-[#663014] text-sm leading-relaxed">
              Clear skin from the inside out by addressing hormonal acne and
              inflammation.
            </p>
          </div>

          {/* Periods Card */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-[0_15px_45px_rgb(255,75,0,0.25)] transform hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative flex flex-col items-center text-center overflow-hidden">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-full bg-[#FFF4EB] flex items-center justify-center">
                <Calendar
                  size={24}
                  className="text-[#FF4B00]"
                  strokeWidth={2}
                />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#2D1810]">Periods</h3>
            <p className="text-[#663014] text-sm leading-relaxed">
              Regular, pain-free cycles through targeted hormone support.
            </p>
          </div>

          {/* Fertility Card */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-[0_15px_45px_rgb(255,75,0,0.25)] transform hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative flex flex-col items-center text-center overflow-hidden">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-full bg-[#FFF4EB] flex items-center justify-center">
                <Baby size={24} className="text-[#FF4B00]" strokeWidth={2} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#2D1810]">Fertility</h3>
            <p className="text-[#663014] text-sm leading-relaxed">
              Support your fertility journey with evidence-based care.
            </p>
          </div>

          {/* Mood Card */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-[0_15px_45px_rgb(255,75,0,0.25)] transform hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative flex flex-col items-center text-center overflow-hidden">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-full bg-[#FFF4EB] flex items-center justify-center">
                <Smile size={24} className="text-[#FF4B00]" strokeWidth={2} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#2D1810]">Mood</h3>
            <p className="text-[#663014] text-sm leading-relaxed">
              Balance mood swings, anxiety, and depression naturally.
            </p>
          </div>
        </div>

        {/* Not sure where you fit section */}
        <div className="text-center  mt-10 bg-white rounded-2xl p-5 max-w-4xl mx-auto">
          <h2 className={`text-3xl font-bold mb-4 text-[#2D1810] ${merriweather.className}`}>
            Not sure where you fit?
          </h2>
          <p className="text-[#663014] text-lg mb-4">
            Take our comprehensive assessment to discover your personalized path
            to hormonal wellness.
          </p>
          <button className="bg-[#FF4B00] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#e64400] transition-colors duration-300">
            Take the quiz
          </button>
        </div>
      </div>
    </section>
  );
}
