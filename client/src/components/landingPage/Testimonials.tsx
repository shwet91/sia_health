"use client";

import React from "react";
import Image from "next/image";
import "../../styles/landingPage.css";
import { Merriweather } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const merriweatherFont = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// 3 static testimonials
const testimonials = [
  {
    name: "Sukhan, 26",
    quote:
      "I joined SIA Health when I felt very lost with my PCOS. With their simple diet plans and lifestyle support, I lost 8 kgs in 6 weeks, and got my periods for the first time in  6 months. All the credit goes to the SIA team for this",
    image: "/testimonials/Kanchan.jpeg",
  },
  {
    name: "Sakshi, 27",
    quote:
      "I needed support that didn’t end after one consultation.SIA Health helped me understand my body, stay consistent, rebuild healthy habits, and even guided me on which blood tests to do and how to move forward. They made the whole Hormonal Imbalance thing finally make sense",
    image: "/testimonials/Sakhshi.jpeg",
  },
  {
    name: "Preeti, 27",
    quote:
      "I joined SIA Health thinking I was entering perimenopause after years of PCOS. Within 2 months my acne improved, I lost 4  kgs, and, more importantly, I feel toned, confident, and ready for this next phase of life.",
    image: "/testimonials/Anjali.jpeg",
  },
];

export default function Testimonials() {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) return;

    setCurrentSlide(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  const TestimonialCard = ({
    testimonial,
  }: {
    testimonial: (typeof testimonials)[0];
  }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out h-full">
      <div className="flex flex-col items-center text-center">
        <div className="aspect-square h-20 w-20 rounded-full overflow-hidden relative">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover rounded-full object-center"
          />
        </div>

        <p className={`font-medium mt-4 mb-3 ${merriweatherFont.className}`}>
          {testimonial.name}
        </p>

        <p className="text-center italic text-sm">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>
    </div>
  );

  return (
    <section
      className="w-full Helvetica py-16 bg-[#FFF4EB] relative overflow-hidden"
      id="testimonials"
    >
      {/* Vertical text on the right side */}
      <div className="absolute right-4 md:right-10 lg:-right-33 xl:-right-30 top-40 md:top-80 lg:top-104 xl:top-1/2 md:-translate-y-1/2 hidden lg:flex">
        <p
          className="text-[10px] md:text-xs text-gray-500 whitespace-nowrap"
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "center center",
          }}
        >
          *Internal study by the SIA Health team, October 2025
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <h2
          className={`${merriweatherFont.className} text-4xl md:text-6xl font-bold text-center mb-4 mx-auto`}
        >
          Real Stories{" "}
          <span className="text-[#FF4B00] font-bold">Real Results</span>
        </h2>
        <p className="text-lg text-center text-[#522b1c] mb-12 w-full md:w-1/2 mx-auto">
          92% of our members experience improved symptoms like gut health,
          energy and cycle regularity within 6 to 8 weeks.*
        </p>

        {/* Mobile Carousel */}
        <div className="md:hidden max-w-6xl mx-auto relative">
          <Carousel
            setApi={setApi}
            plugins={[autoplayPlugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            onMouseEnter={() => autoplayPlugin.current.stop()}
            onMouseLeave={() => autoplayPlugin.current.play()}
          >
            <CarouselContent>
              {testimonials.map((t, idx) => (
                <CarouselItem key={idx}>
                  <TestimonialCard testimonial={t} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className=" hidden left-2 h-10 w-10 border-none bg-gray-300 text-white   rounded-md shadow-lg transition-all duration-300" />
            <CarouselNext className=" hidden right-2 h-10 w-10 border-none bg-gray-300 text-white  shadow-lg rounded-md transition-all duration-300" />
          </Carousel>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => api?.scrollTo(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? "w-8 bg-[#FF4B00]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Horizontal study note for mobile & tablet only (hidden on lg and up) */}
          <p className="text-[10px] md:text-xs text-gray-500 text-center mt-2 lg:hidden">
            *Internal study by the SIA Health team, October 2025
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
