"use client";

import Image from "next/image";
import { Rubik } from "next/font/google";
import { Lato } from "next/font/google";

const rubikFont = Rubik({ subsets: ["latin"], weight: ["300", "300", "700"] });
const latoFont = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export default function Hero() {
  return (
    <div
      className="w-full min-h-screen pt-16 flex flex-col items-center justify-center py-8 sm:py-14 md:py-20 px-4 sm:px-6 md:px-10 overflow-hidden"
      data-name="Hero Section"
      data-node-id="42:1942"
      style={{ background: "#fef7e5" }}
    >
      <div className={` ${latoFont.className} container mx-auto max-w-7xl`}>
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full md:w-[60%] flex flex-col gap-6 items-center justify-center text-center md:text-left">
            <div className="mt-6 md:mt-0 bg-[rgba(255,244,235,0.4)] border border-[rgba(102,43,0,0.1)] border-solid flex gap-3 items-center justify-center md:justify-start px-4 py-2.5 rounded-xl text-[#2e1300] text-sm md:text-base font-medium">
              Hormonal empathy meets warm science
            </div>

            <div
              className={` ${rubikFont.className} flex flex-col items-center gap-0 w-full `}
            >
              <h1 className=" text-[#2e1300] text-5xl sm:text-4xl md:text-7xl 1font-light 1leading-tight">
                Reclaim Your
              </h1>
              <h1
                className="bg-clip-text text-transparent text-7xl"
                style={{
                  backgroundImage:
                    "linear-gradient(172.293deg, #EB5200 0%, #FF7E29 100%)",
                }}
              >
                Harmonal Health
              </h1>
            </div>

            <div className=" flex flex-col gap-2 text-[#662b00] max-w-md mx-auto md:mx-0">
              <p className="text-base sm:text-lg md:text-xl font-normal text-center">
                Personalized, expert-led care for PCOS, thyroid, fertility &
                more.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="px-6 sm:px-8 py-3 rounded-xl border border-[#EB5200] bg-[#fff4eb] text-[#2e1300] font-medium text-sm sm:text-base w-full sm:w-auto hover:bg-[#FFE4D1] transition-colors">
                Free Discovery Call
              </button>
            </div>

            {/* Large themed CTA placed just below the two buttons */}
            <div className={` ${rubikFont.className} mt-0 w-full sm:w-auto`}>
              <button
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-white text-lg shadow-xl transition-transform hover:scale-[0.995]"
                style={{
                  background:
                    "linear-gradient(170.948deg, #EB5200 0%, #FF7E29 100%)",
                }}
                aria-label="Give a Harmone Test in a minute"
              >
                Give a Harmone Test in a minute
              </button>
            </div>

            <div className="mt-4 bg-[rgba(255,244,235,0.4)] border-2 border-[rgba(102,43,0,0.1)] rounded-lg px-6 py-3 text-[#2e1300] text-sm md:text-base font-medium text-center md:text-left ">
              92% of users reported improved symptoms within 3 months.
            </div>
          </div>

          <div className="w-full md:w-[50%]  flex justify-center items-center">
            <div className="relative aspect-square w-full 1max-w-[400px]">
              <Image
                src="/del.avif"
                alt="Hero Image"
                fill
                className="object-cover rounded-3xl shadow-lg"
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
