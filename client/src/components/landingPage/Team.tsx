import React from "react";
import Image from "next/image";
import { Merriweather } from "next/font/google";
import "../../styles/landingPage.css";

const merriweather = Merriweather({ subsets: ["latin"] });

const teamMembers = [
  {
    name: "Dr. Anupama Gangwal",
    role: "Senior Gynaecologist",
    image: "/doc1.avif",
    experience: 30,
    quote:
      "I always recommend sustainable lifestyle changes to my patients with hormonal imbalances. I'm glad to be associated with SIA Health, a platform that's finally making this accessible and structured.",
  },
  {
    name: "Rashmeet Kaur Gupta",
    role: "Nutrition Expert",
    image: "/doc2.avif",
    experience: 8,
    quote:
      "As an advisor, I truly value how SIA supports women's health with a science-backed, no-fads approach. It's about real, lasting change - rooted in evidence, not short term trends.",
  },
];

export default function Team() {
  return (
    <section className="w-full Helvetica py-8 md:py-12 bg-black1 bg-[#FFF4EB] relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          // src="/TeamBG.jpg"
          src={"https://i.pinimg.com/1200x/e6/29/8d/e6298de1bb0995583f00157a3a438f88.jpg"}
          alt="Background"
          fill
          className="object-cover opacity-0"
          priority
        />
      </div>

      <div className="container mx-auto max-w-[1400px] px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <h2
            className={
              "text-3xl md:text-4xl font-bold mb-3 text-[#2D1810] " +
              merriweather.className
            }
          >
            What Our Experts and Doctors say
          </h2>
          <p className="text-lg md:text-xl text-[#663014]">
            All of our plans & processes our co-created with hormonal health
            experts. Meet some of them:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 lg:gap-12 w-full max-w-[1100px] mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full flex flex-col items-center">
              {/* Profile Image */}
              <div className="w-28 h-28 md:w-36 md:h-36 mb-4 relative flex-shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>

              {/* Info Card with overlay styling - Fixed Height */}
              <div className="w-[70%] mb-3 bg-black/40 backdrop-blur-sm rounded-lg p-4 text-center min-h-[120px] flex flex-col justify-center ">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <h4 className="text-base md:text-lg font-semibold text-white mb-1">
                  {member.role}
                </h4>
                <p className="text-white/90 text-sm md:text-base">
                  with over {member.experience}+ yrs of experience
                </p>
              </div>

              {/* Testimonial Quote - Fixed Height */}
              <div className="w-full 1bg-black/30 1backdrop-blur-sm  rounded-lg p-4 text-center h-[100px] md:h-[140px] flex items-center justify-center">
                <p className="text-[#663014] text-sm md:text-base leading-relaxed">
                  {member.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
