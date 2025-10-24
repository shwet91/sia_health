"use client";

import Image from "next/image";
// import { Rubik } from "next/font/google";
// import { Lato } from "next/font/google";
import { Merriweather } from "next/font/google";
import "../../styles/landingPage.css";
import { useRouter } from "next/navigation";
import { MoveRight } from "lucide-react";

const merriweatherFont = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// const rubikFont = Rubik({ subsets: ["latin"], weight: ["300", "300", "700"] });
// const latoFont = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export default function Hero() {
  const router = useRouter();

  return (
    <div
      className="w-full min-h-screen pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center justify-center overflow-hidden relative"
      data-name="Hero Section"
      data-node-id="42:1942"
      style={{ background: "#FFF4EB" }}
    >
      {/* Vertical text on the right side */}
      <div className="hidden lg:block absolute right-2 top-1/2 -translate-y-1/2">
        <p
          className="text-[11px]  text-[#371801] opacity-80 tracking-wide font-normal"
          style={{
            writingMode: "vertical-lr",
            textOrientation: "mixed",
            whiteSpace: "nowrap",
            transform: "rotate(180deg)",
          }}
        >
          * Internal study by the SIA Health team, October 2025
        </p>
      </div>

      <div className={`Helvetica container mx-auto max-w-7xl`}>
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          <div className="w-full md:w-[60%] flex flex-col gap-4 sm:gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
            <div className="bg-[rgba(255,244,235,0.4)] border border-[rgba(102,43,0,0.1)] border-solid flex gap-2 sm:gap-3 items-center justify-center px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg text-[#2e1300] text-sm sm:text-base md:text-lg font-medium w-full md:w-auto">
              Made for Women, guided by doctors & health coaches.
            </div>

            <div
              className={`${merriweatherFont.className} flex flex-col items-center md:items-start gap-2 w-full`}
            >
              <h1
                className="bg-clip-text text-transparent text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl leading-tight text-center md:text-left"
                style={{
                  backgroundImage:
                    "linear-gradient(172.293deg, #EB5200 0%, #FF7E29 100%)",
                }}
              >
                Personalised Hormonal Care
              </h1>
              <p className="text-[#522b1c] text-xl md:text-2xl font-normal hidden">
                care
              </p>
              <h1 className="text-[#522b1c] text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl text-center md:text-left leading-tight">
                that actually works
              </h1>
            </div>

            <div className="flex flex-col gap-2 text-[#662b00] max-w-md mx-auto md:mx-0 w-full">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-center md:text-left">
                PCOS, thyroid, fertility, perimenopause and more.
              </p>
            </div>

            {/* Large themed CTA placed just below the two buttons */}
            <div
              className={`${merriweatherFont.className} w-full flex flex-col items-center md:items-start gap-3`}
            >
              <button
                onClick={() => router.push("/contact")}
                className="w-full sm:w-auto min-w-[280px] px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-sm text-white text-base sm:text-lg md:text-xl shadow-xl transition-transform hover:scale-[0.995]"
                style={{
                  background:
                    "linear-gradient(170.948deg, #EB5200 0%, #FF7E29 100%)",
                }}
                aria-label="Give a Hormone Test in a minute"
              >
                Book a free expert consultation
              </button>
              <p className="text-[#662b00] text-sm sm:text-base text-center md:text-left max-w-[320px] sm:max-w-md px-2 sm:px-0">
                Talk to our hormonal health coaches and get a clear next step
                for your goals.
              </p>
            </div>

            <div className="hidden sm:flex bg-[rgba(255,244,235,0.4)] border-2 border-[rgba(102,43,0,0.1)] rounded-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-[#2e1300] text-sm sm:text-base md:text-lg font-medium text-center md:text-left w-full">
              92% of our members noticed better energy, gut health, and cycle
              regularity within 6 – 8 weeks.
            </div>
          </div>

          <div className="w-full md:w-[50%] flex justify-center items-center mt-8 md:mt-0">
            <div className="relative aspect-square w-full max-w-[350px] sm:max-w-[400px] md:max-w-full">
              <Image
                src="/del.avif"
                alt="Hero Image"
                fill
                className="object-cover rounded-2xl sm:rounded-3xl shadow-lg"
                priority
                sizes="(max-width: 640px) 350px, (max-width: 768px) 400px, 40vw"
              />
            </div>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="w-full mt-12 sm:mt-14 md:mt-16 mb-6 sm:mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-[rgba(102,43,0,0.1)] hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col gap-3 sm:gap-4 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-[#522b1c]">
                  Expert-Led Care
                </h3>
                <p className="text-[#662b00] text-sm sm:text-base">
                  Get personalized support from certified doctors and health
                  coaches who understand hormonal health.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-[rgba(102,43,0,0.1)] hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col gap-3 sm:gap-4 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-[#522b1c]">
                  Proven Results
                </h3>
                <p className="text-[#662b00] text-sm sm:text-base">
                  92% of our members see improvement in energy, gut health, and
                  cycle regularity within 6-8 weeks.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-[rgba(102,43,0,0.1)] hover:shadow-xl transition-shadow duration-300 sm:col-span-2 md:col-span-1">
              <div className="flex flex-col gap-3 sm:gap-4 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-[#522b1c]">
                  Holistic Approach
                </h3>
                <p className="text-[#662b00] text-sm sm:text-base">
                  Comprehensive care covering PCOS, thyroid, fertility,
                  perimenopause, and more through science-backed methods.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hormone Test Button - Moved to Bottom */}
        <div className="flex flex-col items-center justify-center w-full mt-6 sm:mt-8 gap-2 sm:gap-3 px-2 sm:px-0">
          <button
            onClick={() => router.push("https://quiz.siahealth.in")}
            className={`w-full sm:w-auto min-w-[280px] px-4 sm:px-5 py-2.5 sm:py-3 rounded-sm flex gap-2 items-center justify-center font-bold text-[#662b00] border border-[#FF7E29] text-sm sm:text-base hover:bg-[#ffe4d3] hover:scale-105 transition-all duration-300 hover:shadow-xl ${merriweatherFont.className}`}
          >
            Take the 2-minute hormone test{" "}
            <MoveRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <p className="text-[#662b00] text-xs sm:text-sm text-center max-w-[280px] sm:max-w-xs px-4 sm:px-0">
            Find the root cause behind your hormonal concerns with our quick
            online quiz
          </p>
        </div>
      </div>
    </div>
  );
}
