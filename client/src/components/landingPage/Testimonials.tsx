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
  // Carousel state for simple sliding
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [visibleCards, setVisibleCards] = React.useState(3);
  const autoplayInterval = 3000; // 3 seconds
  const autoplayRef = React.useRef<number | null>(null);
  const isHoveredRef = React.useRef(false);

  // Touch/drag state
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [currentTranslate, setCurrentTranslate] = React.useState(0);
  const [prevTranslate, setPrevTranslate] = React.useState(0);
  const sliderRef = React.useRef<HTMLDivElement>(null);

  // Calculate max index based on visible cards
  const maxIndex = Math.max(0, testimonials.length - visibleCards);

  // Track visible cards for proper navigation
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1); // mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // tablet
      } else {
        setVisibleCards(3); // desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset index if it exceeds max after resize
  React.useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  React.useEffect(() => {
    // autoplay: advance by 1 every interval
    function play() {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
      autoplayRef.current = window.setInterval(() => {
        if (!isHoveredRef.current) {
          setCurrentIndex((i) => {
            const nextIndex = i + 1;
            return nextIndex > maxIndex ? 0 : nextIndex;
          });
        }
      }, autoplayInterval);
    }

    play();
    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
  }, [maxIndex]);

  const next = () =>
    setCurrentIndex((i) => {
      const nextIndex = i + 1;
      return nextIndex > maxIndex ? 0 : nextIndex;
    });
  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));

  // Touch/drag handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setPrevTranslate(currentTranslate);
    isHoveredRef.current = true; // Pause autoplay while dragging
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const currentPosition = clientX;
    const diff = currentPosition - startX;
    setCurrentTranslate(prevTranslate + diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    isHoveredRef.current = false;

    const movedBy = currentTranslate - prevTranslate;
    const threshold = 50; // Minimum swipe distance to trigger slide

    if (movedBy < -threshold && currentIndex < maxIndex) {
      // Swiped left - go to next
      setCurrentIndex((i) => i + 1);
    } else if (movedBy > threshold && currentIndex > 0) {
      // Swiped right - go to previous
      setCurrentIndex((i) => i - 1);
    }

    // Reset translate values
    setCurrentTranslate(0);
    setPrevTranslate(0);
  };

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

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
          onMouseLeave={() => {
            isHoveredRef.current = false;
            handleMouseLeave();
          }}
        >
          {/* Slides container with responsive grid */}
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            ref={sliderRef}
          >
            {/* Mobile: 1 card at a time (100%), Tablet: 2 cards (50%), Desktop: 3 cards (33.33%) */}
            <div
              className="flex [--slide-width:100%] md:[--slide-width:50%] lg:[--slide-width:33.333%]"
              style={{
                transform: `translateX(calc(-${currentIndex} * var(--slide-width) + ${
                  isDragging ? currentTranslate : 0
                }px))`,
                transition: isDragging ? "none" : "transform 700ms ease-in-out",
              }}
            >
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2"
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
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
          >
            ‹
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
          >
            ›
          </button>

          {/* Indicators - show dots based on possible slide positions */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-colors ${
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
