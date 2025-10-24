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
      className="w-full 1min-h-screen pt-10 flex flex-col items-center justify-center py-4 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-10 overflow-hidden relative"
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

      <div className={` Helvetica container mx-auto max-w-7xl `}>
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-16 ">
          <div className="  w-full md:w-[60%] flex flex-col gap-8 items-center justify-center text-center md:text-left">
            <div className="mt-0 md:mt-0 bg-[rgba(255,244,235,0.4)] border border-[rgba(102,43,0,0.1)] border-solid flex gap-3 items-center justify-center md:justify-start px-5 py-3 rounded-lg text-[#2e1300] text-base md:text-lg font-medium">
              Made for Women, guided by doctors & health coaches.
            </div>

            <div
              className={` ${merriweatherFont.className} flex flex-col items-center gap-2 w-full`}
            >
              <h1
                className="bg-clip-text text-transparent text-6xl sm:text-5xl md:text-6xl lg:text-6xl 1font-light leading-tight text-center  whitespace-nowrap"
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
              <h1 className="text-[#522b1c] bg-clip-text 1text-transparent text-6xl sm:text-5xl md:text-6xl lg:text-7xl text-center leading-tight">
                that actually works
              </h1>
            </div>

            <div className=" flex flex-col gap-2 text-[#662b00] max-w-md mx-auto md:mx-0">
              <p className="text-lg sm:text-xl md:text-2xl font-normal text-center">
                PCOS, thyroid, fertility, perimenopause and more.
              </p>
            </div>

            {/* Large themed CTA placed just below the two buttons */}
            <div
              className={` ${merriweatherFont.className} mt-0 w-full sm:w-auto flex flex-col items-center gap-3`}
            >
              <button
                onClick={() => router.push("/contact")}
                className="w-full sm:w-auto px-10 py-4 rounded-sm text-white text-xl shadow-xl transition-transform hover:scale-[0.995]"
                style={{
                  background:
                    "linear-gradient(170.948deg, #EB5200 0%, #FF7E29 100%)",
                }}
                aria-label="Give a Hormone Test in a minute"
              >
                Book a free expert consultation
              </button>
              <p className="text-[#662b00] text-sm sm:text-base text-center max-w-[320px] sm:max-w-md">
                Talk to our hormonal health coaches and get a clear next step
                for your goals.
              </p>
            </div>

            <div className="hidden 1sm:block mt-0 bg-[rgba(255,244,235,0.4)] border-2 border-[rgba(102,43,0,0.1)] rounded-lg px-8 py-4 text-[#2e1300] text-base md:text-lg font-medium text-center 1md:text-left ">
              92% of our members noticed better energy, gut health, and cycle
              regularity within 6 – 8 weeks.
            </div>
          </div>

          <div className="w-full md:w-[50%]  flex justify-center items-center">
            <div className="relative aspect-square w-full 1max-w-[400px]">
              <Image
                src="/del.avif"
                alt="Hero Image"
                fill
                className="object-cover rounded-3xl 1shadow-lg"
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="w-full mt-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-[rgba(102,43,0,0.1)] hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col gap-4 text-center">
                <h3 className="text-xl font-bold text-[#522b1c]">
                  Expert-Led Care
                </h3>
                <p className="text-[#662b00] text-base">
                  Get personalized support from certified doctors and health
                  coaches who understand hormonal health.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-[rgba(102,43,0,0.1)] hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col gap-4 text-center">
                <h3 className="text-xl font-bold text-[#522b1c]">
                  Proven Results
                </h3>
                <p className="text-[#662b00] text-base">
                  92% of our members see improvement in energy, gut health, and
                  cycle regularity within 6-8 weeks.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-[rgba(102,43,0,0.1)] hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col gap-4 text-center">
                <h3 className="text-xl font-bold text-[#522b1c]">
                  Holistic Approach
                </h3>
                <p className="text-[#662b00] text-base">
                  Comprehensive care covering PCOS, thyroid, fertility,
                  perimenopause, and more through science-backed methods.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hormone Test Button - Moved to Bottom */}
        <div className="flex flex-col items-center justify-center w-full mt-8 gap-3">
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
    </div>
  );
}
