"use client";

import React from "react";
import Image from "next/image";
import "../../styles/landingPage.css";
import { Merriweather } from "next/font/google";

const merriweatherFont = Merriweather({ subsets: ["latin"], weight: ["400", "700"] });

const testimonials = [
  {
    name: "Sarah M.",
    score: 92,
    quote:
      "SIA didn't just treat my PCOS—they helped me understand my body for the first time in years.",
    image: "/testimonials/sarah.jpg",
    stars: 5,
  },
  {
    name: "Maria L.",
    score: 88,
    quote:
      "My thyroid levels are finally balanced, and I feel like myself again. The personalized approach made all the difference.",
    image: "/testimonials/maria.jpg",
    stars: 5,
  },
  {
    name: "Jessica K.",
    score: 95,
    quote:
      "From struggling with weight to feeling empowered about my health journey—SIA transformed everything.",
    image: "/testimonials/jessica.jpg",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="w-full Helvetica py-16 bg-[#FFF4EB]" id="testimonials">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className={ `${merriweatherFont.className} text-4xl md:text-6xl font-bold text-center mb-4 mx-auto` }>
          Real Stories. Real Results.
        </h2>
        <p className="text-2xl text-center text-[#663014]1 text-[#522b1c] mb-12 w-full md:w-1/2 mx-auto">
          See how women like you have transformed their health with our
          personalized approach.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 relative shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2 cursor-pointer"
            >
              <div className="absolute -top-4 right-8 bg-[#FF4B00] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                {testimonial.score}
              </div>
              <div className="flex flex-col items-center">
                <div className="aspect-square h-20 rounded-full overflow-hidden relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className=" object-cover rounded-full mb-4"
                  />
                </div>

                <p className="text-center italic mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className={`font-medium ${merriweatherFont.className}`}>{testimonial.name}</p>
                <div className="flex gap-1 text-[#FF4B00] mt-2">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="text-[#FF4B00] font-medium inline-flex items-center gap-2 hover:underline"
          >
            See More Transformations
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
