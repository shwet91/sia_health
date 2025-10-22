import React from "react";
import Image from "next/image";
import "../../styles/landingPage.css";
import { Merriweather } from "next/font/google";

const merriweatherFont = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// 3 static testimonials
const testimonials = [
  {
    name: "Sarah M.",
    quote:
      "SIA didn't just treat my PCOS—they helped me understand my body for the first time in years.",
    image: "/testimonials/sarah.jpg",
  },
  {
    name: "Maria L.",
    quote:
      "My thyroid levels are finally balanced, and I feel like myself again. The personalized approach made all the difference.",
    image: "/testimonials/maria.jpg",
  },
  {
    name: "Jessica K.",
    quote:
      "From struggling with weight to feeling empowered about my health journey—SIA transformed everything.",
    image: "/testimonials/jessica.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full Helvetica py-16 bg-[#FFF4EB]" id="testimonials">
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className={`${merriweatherFont.className} text-4xl md:text-6xl font-bold text-center mb-4 mx-auto`}
        >
          Real Stories{" "}
          <span className="text-[#FF4B00] font-bold">Real Results</span>
        </h2>
        <p className="text-2xl text-center text-[#522b1c] mb-12 w-full md:w-1/2 mx-auto">
          See how women like you have transformed their health with our
          personalized approach.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              <div className="flex flex-col items-center text-center">
                <div className="aspect-square h-20 w-20 rounded-full overflow-hidden relative">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>

                <p className="text-center italic mb-3 mt-4 text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className={`font-medium ${merriweatherFont.className}`}>
                  {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
