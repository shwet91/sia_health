import React from "react";
import Image from "next/image";
import { Merriweather } from "next/font/google";
import "../../styles/landingPage.css";

const merriweather = Merriweather({ subsets: ["latin"] });

export default function LovableProblem() {
  return (
    <section className="w-full Helvetica min-h-screen bg-gradient-to-br from-[#FFF4EB] to-[#FFE4D3] relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <div className="w-96 h-96 rounded-full bg-[#FF4B00] opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className={ "text-4xl md:text-5xl lg:text-6xl " + merriweather.className }>
              Because women deserve more than{" "}
              <span className="text-[#FF4B00] block">symptom silencing.</span>
            </h2>

            <p className="text-lg md:text-xl text-[#663014]">
              I started SIA because I was misdiagnosed — and tired of being
              dismissed. After years of being told my symptoms were &quot;normal&quot; or
              &quot;in my head,&quot; I knew there had to be a better way.
            </p>

            <p className="text-lg md:text-xl text-[#663014]">
              Today, SIA Health stands as a beacon for women who refuse to
              accept &quot;that&apos;s just how it is&quot; as an answer. We believe in
              root-cause medicine, in listening deeply, and in empowering you
              with knowledge about your own body.
            </p>

            <div>
              <a
                href="#"
                className="inline-flex items-center text-lg text-[#FF4B00] hover:underline"
              >
                We&apos;re hormonally, emotionally intelligent living now{" "}
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative w-48 h-48 rounded-full overflow-hidden bg-[#FFE4D3]">
              <Image
                src="/founder.avif"
                alt="Dr. [Founder Name]"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Aditi</h3>
              <p className="text-[#663014] italic mt-2">
                &quot;Your health journey deserves
                <br />
                compassion and expertise.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
