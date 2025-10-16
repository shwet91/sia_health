"use client";

import React from "react";
import Image from "next/image";
import "../../styles/landingPage.css";
import { Merriweather } from "next/font/google";

const merriweatherFont = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// 6 dummy testimonials (replace images/quotes with real content as needed)
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
  // Carousel state: show 3 cards at a time, advance by 1
  const visible = 3;
  const step = 1; // advance by 1 card at a time
  const [currentIndex, setCurrentIndex] = React.useState(0); // index of left-most visible card
  const slideCount = testimonials.length;
  const maxIndex = slideCount - visible; // maximum index for sliding
  const autoplayInterval = 3000; // 3 seconds
  const autoplayRef = React.useRef<number | null>(null);
  const isHoveredRef = React.useRef(false);

  React.useEffect(() => {
    // autoplay: advance by 1 every interval
    function play() {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
      autoplayRef.current = window.setInterval(() => {
        if (!isHoveredRef.current) {
          setCurrentIndex((i) => {
            const nextIndex = i + step;
            return nextIndex > maxIndex ? 0 : nextIndex;
          });
        }
      }, autoplayInterval);
    }

    play();
    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
  }, [maxIndex, step]);

  const goTo = (idx: number) =>
    setCurrentIndex(Math.max(0, Math.min(maxIndex, idx)));
  const next = () =>
    setCurrentIndex((i) => {
      const nextIndex = i + step;
      return nextIndex > maxIndex ? 0 : nextIndex;
    });
  const prev = () =>
    setCurrentIndex((i) => {
      const prevIndex = i - step;
      return prevIndex < 0 ? 0 : prevIndex;
    });

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

        <div
          className="relative"
          onMouseEnter={() => (isHoveredRef.current = true)}
          onMouseLeave={() => (isHoveredRef.current = false)}
        >
          {/* Slides container: use flex and translateX for sliding animation */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                width: `${(slideCount / visible) * 100}%`,
                transform: `translateX(-${(currentIndex / slideCount) * 100}%)`,
              }}
            >
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="px-2"
                  style={{ width: `${100 / slideCount}%` }}
                >
                  <div className="p-4 h-full flex items-stretch">
                    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer w-full">
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
                        <p
                          className={`font-medium ${merriweatherFont.className}`}
                        >
                          {t.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            ‹
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            ›
          </button>

          {/* Indicators: show one indicator per page (maxIndex + 1 pages) */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to set starting at ${i + 1}`}
                className={`w-3 h-3 rounded-full ${
                  i === currentIndex ? "bg-[#FF4B00]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
