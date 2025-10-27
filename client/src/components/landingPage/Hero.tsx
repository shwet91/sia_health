"use client";

import Image from "next/image";
import { Merriweather } from "next/font/google";
import "../../styles/landingPage.css";
import { useRouter } from "next/navigation";
import { MoveRight } from "lucide-react";

const merriweatherFont = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Hero() {
  const router = useRouter();

  return (
    <section className="bg-gradient-to-b bg-[#FFF4EB] pt-13 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Tagline */}
        <div className="text-center mb-12 mt-8 md:mt-5">
          <p className="text-gray-700 text-lg">
            Made for <span className="font-semibold italic">Women</span>, guided
            by doctors & health coaches.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center text-center">
          {/* Left Content */}
          <div className="space-y-6 md:flex md:flex-col md:items-center md:ml-32 lg:ml-44">
            <h1
              className={`${merriweatherFont.className} text-4xl md:text-5xl lg:text-6xl font-bold md:text-center`}
            >
              <span className="text-orange-600 lg:whitespace-nowrap">
                Personalised Hormonal Care
              </span>
              <br />
              <span className="text-gray-800 lg:whitespace-nowrap">
                that actually works
              </span>
            </h1>

            <p className="text-gray-700 text-lg md:text-center lg:whitespace-nowrap">
              <span className="font-semibold">
                PCOS/PCOD || Thyroid || Fertility || Perimenopause and more.
              </span>
            </p>

            <button
              onClick={() => router.push("/contact")}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book a FREE Expert consult
            </button>

            <p className="text-gray-600 text-sm md:text-center md:max-w-md lg:whitespace-nowrap">
              Talk to our hormonal health coaches and get a clear{" "}
              <span className="font-semibold">next step</span> for your goals.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center md:justify-end">
            <Image
              src="/Herp.jpeg"
              alt="Hormonal health coach with calendar"
              width={400}
              height={400}
              className="w-auto h-auto max-w-[300px] md:max-w-[350px] rounded-lg border"
              priority
            />
          </div>
        </div>

        {/* Bottom Features */}
        <div className="sm:grid md:grid-cols-3 gap-8 mt-3 hidden">
          {/* Feature 1 */}
          <div className="text-center space-y-3 bg-white/30 backdrop-blur-sm border border-orange-200/50 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
            <h3 className="text-orange-600 text-xl font-semibold">
              All in one care
            </h3>
            <p className="text-gray-700 text-sm">
              Everything your hormones need. Meal plans backed by Medical
              Insights, Health Analysis fitness & Lifestyle
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center space-y-3 bg-white/30 backdrop-blur-sm border border-orange-200/50 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
            <h3 className="text-orange-600 text-xl font-semibold">
              Your Health, Our Team
            </h3>
            <p className="text-gray-700 text-sm">
              Doctors, nutritionists and coaches working together for lasting
              results.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center space-y-3 bg-white/30 backdrop-blur-sm border border-orange-200/50 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
            <h3 className="text-orange-600 text-xl font-semibold">
              Expert-Led Support
            </h3>
            <p className="text-gray-700 text-sm">
              Root-cause plans tailored to your goals . Evidence backed, No FAD
              Approach
            </p>
          </div>
        </div>

        {/* Hormone Test Button - Moved to Bottom */}
        <div className="flex flex-col items-center justify-center w-full mt-5 sm:mt-8 gap-3 1hidden">
          <button
            onClick={() => router.push("https://quiz.siahealth.in")}
            className={`1px-10 sm:w-auto justify-center w-full sm:px-5 py-3 rounded-sm flex gap-2 items-center font-bold text-[#662b00] border-[#FF7E29] border-1 text-sm sm:text-base hover:bg-[#ffe4d3] hover:scale-105 transition-all duration-300 hover:shadow-xl ${merriweatherFont.className}`}
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
