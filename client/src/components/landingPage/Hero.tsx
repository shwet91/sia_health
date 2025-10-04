"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="w-full min-h-screen pt-16 flex flex-col items-center justify-center py-8 sm:py-14 md:py-20 px-4 sm:px-6 md:px-10 bg-orange-200 1bg-gradient-to-br from-[#FFF4EB] via-[#FFD4B3] to-[#FFB380] overflow-hidden"
      data-name="Hero Section"
      data-node-id="42:1942"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full md:w-[60%] flex flex-col gap-6 items-center md:items-start justify-center text-center md:text-left">
            <div className="bg-[rgba(255,244,235,0.4)] border border-[rgba(102,43,0,0.1)] border-solid flex gap-3 items-center justify-center md:justify-start px-4 py-2.5 rounded-full text-[#2e1300] text-sm md:text-base font-medium">
              Hormonal empathy meets warm science
            </div>

            <div className="flex flex-col items-center md:items-start gap-3 w-full">
              <h1 className="font-['Playball:Regular',_sans-serif] text-[#2e1300] text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
                Your Hormones,{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(172.293deg, #EB5200 0%, #FF7E29 100%)",
                  }}
                >
                  Decoded
                </span>
              </h1>
              <h2 className="font-['Playball:Regular',_sans-serif] text-[#2e1300] text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
                Your Health,{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(172.293deg, #EB5200 0%, #FF7E29 100%)",
                  }}
                >
                  Reclaimed
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-2 text-[#662b00] max-w-md mx-auto md:mx-0">
              <p className="text-base sm:text-lg md:text-xl font-normal">
                Personalized, science-backed care for PCOS, thyroid, fertility,
                weight & more.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-normal">
                Because you deserve more than symptom silencing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                className="px-6 sm:px-8 py-3 rounded-full shadow-md text-white font-medium text-sm sm:text-base w-full sm:w-auto hover:opacity-90 transition-opacity"
                style={{
                  background:
                    "linear-gradient(170.948deg, #EB5200 0%, #FF7E29 100%)",
                }}
              >
                Do you have PCOS ?
              </button>
              <button className="px-6 sm:px-8 py-3 rounded-full border border-[#EB5200] bg-[#fff4eb] text-[#2e1300] font-medium text-sm sm:text-base w-full sm:w-auto hover:bg-[#FFE4D1] transition-colors">
                Free Discovery Call
              </button>
            </div>

            {/* Large themed CTA placed just below the two buttons */}
            <div className="mt-4 w-full sm:w-auto">
              <button
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-white font-semibold text-lg shadow-xl transition-transform hover:scale-[0.995]"
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
