import React from "react";
import Image from "next/image";
import { Merriweather } from "next/font/google";
import "../../styles/landingPage.css";

const merriweather = Merriweather({ subsets: ["latin"] });

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Endocrinologist",
    image: "/team/sarah-chen.jpg",
    quote: "Every woman deserves to feel heard and understood.",
  },
  {
    name: "Maria Rodriguez",
    role: "Registered Dietitian",
    image: "/team/maria-rodriguez.jpg",
    quote: "Nutrition is medicine, and food should be your friend.",
  },
  {
    name: "Dr. Amanda Kim",
    role: "Functional Medicine",
    image: "/team/amanda-kim.jpg",
    quote: "We treat the root cause, not just the symptoms.",
  },
  {
    name: "Jessica Thompson",
    role: "Health Coach",
    image: "/team/jessica-thompson.jpg",
    quote: "Your journey to wellness should feel supported every step.",
  },
];

export default function Team() {
  return (
    <section className="w-full Helvetica py-16 md:py-20 bg-gradient-to-br from-[#FFF4EB] to-[#FFE4D3]">
      <div className="container mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <h2
            className={
              "text-4xl md:text-5xl font-bold mb-4 " + merriweather.className
            }
          >
            Meet Your Care Team
          </h2>
          <p className="text-xl text-[#663014]">
            Compassionate experts who understand the complexity of women&apos;s
            health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-6 place-items-center justify-items-center w-full">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-[0_8px_30px_rgb(198,61,0,0.5)] hover:-translate-y-1 transition-all duration-300 relative group w-full max-w-[260px] aspect-square flex flex-col justify-between"
            >
              <div className="w-28 h-28 mx-auto mb-4 relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>

              <h3 className="text-xl font-bold mb-2">{member.name}</h3>

              <p className="text-[#FF4B00] font-medium mb-3">{member.role}</p>

              <p className="text-[#663014] italic text-sm">
                &ldquo;{member.quote}&rdquo;
              </p>

              {/* Decorative dots pattern */}
              <div className="absolute inset-0 -z-10 opacity-[0.2]">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      "radial-gradient(#FF4B00 2px, transparent 2px)",
                    backgroundSize: "15px 15px",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
