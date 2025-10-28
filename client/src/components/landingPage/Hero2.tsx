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

export default function Hero2() {
  const router = useRouter();

  return (
    <div
      className="w-full 1min-h-screen pt-16 flex flex-col items-center justify-center py-8 sm:pt-14 md:pt-20 px-4 sm:px-6 md:px-10 overflow-hidden"
      data-name="Hero Section"
      data-node-id="42:1942"
      style={{ background: "#FFF4EB" }}
    >
      <div className={` Helvetica container mx-auto max-w-7xl `}>
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className=" w-full md:w-[60%] flex flex-col gap-6 items-center justify-center text-center md:text-left">
            <div className="mt-6 md:mt-0 bg-[rgba(255,244,235,0.4)] border border-[rgba(102,43,0,0.1)] border-solid flex gap-3 items-center justify-center md:justify-start px-4 py-2.5 rounded-lg text-[#2e1300] text-sm md:text-base font-medium">
              Hormonal empathy meets warm science
            </div>

            <div
              className={` ${merriweatherFont.className} flex flex-col items-center gap-0 w-full `}
            >
              <h1
                className=" bg-clip-text text-transparent text-4xl sm:text-4xl md:text-6xl 1font-light 1leading-tight text-center whitespace-nowrap sm:whitespace-normal"
                style={{
                  backgroundImage:
                    "linear-gradient(172.293deg, #EB5200 0%, #FF7E29 100%)",
                }}
              >
                Personalised Support
              </h1>
              <p className="text-[#522b1c] text-xl md:text-2xl font-normal">
                for
              </p>
              <h1 className="text-[#522b1c] bg-clip-text 1text-transparent text-4xl sm:text-6xl text-center">
                Women&apos;s Hormonal Health
              </h1>
            </div>

            <div className=" flex flex-col gap-2 text-[#662b00] max-w-md mx-auto md:mx-0">
              <p className="text-xs sm:text-lg md:text-xl font-normal text-center whitespace-nowrap sm:whitespace-normal">
                Daily, expert-led care for PCOS/PCOD, Thyroid, Perimenopause,
                Fertility & more
              </p>
            </div>

            {/* Large themed CTA placed just below the two buttons */}
            <div
              className={` ${merriweatherFont.className} mt-0 w-full sm:w-auto`}
            >
              <button
                onClick={() => router.push("/contact")}
                className="w-full sm:w-auto px-8 py-3 rounded-sm text-white text-lg shadow-xl transition-transform hover:scale-[0.995]"
                style={{
                  background:
                    "linear-gradient(170.948deg, #EB5200 0%, #FF7E29 100%)",
                }}
                aria-label="Give a Harmone Test in a minute"
              >
                Book a Free Expert Consult
              </button>
            </div>

            <div className="hidden 1sm:block mt-4 bg-[rgba(255,244,235,0.4)] border-2 border-[rgba(102,43,0,0.1)] rounded-lg px-6 py-3 text-[#2e1300] text-sm md:text-base font-medium text-center 1md:text-left ">
              92% of users reported improved symptoms within 3 months.
            </div>
          </div>

          {/* <div className=" w-full md:w-[50%] flex justify-center items-center hidden ">
            <div className=" relative aspect-square1 w-full max-w-[400px] flex md:max-w-[400px] ">
              <Image
                src="/heroFounder.jpeg"
                alt="Hero Image"
                // fill
                width={450}
                height={450}
                // fill
                className="object-fill "
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div> */}

          <div className="w-full md:w-[50%] flex justify-center items-center hidden1">
            <div className="relative aspect-square1 w-full sm:max-w-[400px] xl:max-w-[400px] flex justify-center items-center ">
              <Image
                src="/heroFounder.jpeg"
                alt="Hero Image"
                width={180}
                height={180}
                className="object-fill w-[250px] h-[280px] md:w-[400px] md:h-[400px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px]"
                priority
                sizes="(max-width: 768px) 60vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="sm:grid md:grid-cols-3 gap-8 mt-10 hidden">
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
  );
}
