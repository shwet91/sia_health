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
    name: "Kanchan, 26",
    quote:
      "After struggling to find the right balance in my diet to manage both migraine and PCOS, Sia Health came to my rescue with their deep understanding of the unique needs of a PCOS-affected female body. Their guidance has significantly boosted my body strength, improved my immune system, and I am truly grateful for their expertise and care.",
    image: "/testimonials/Kanchan.jpeg",
  },
  {
    name: "Sakshi, 27",
    quote:
      "I’ve always been confused about where to go when it comes to my health. I needed a place where there is ongoing support so I can understand my body better and build habits accordingly. Sia Health is that place. The safe haven I needed.",
    image: "/testimonials/Sakhshi.jpeg",
  },
  {
    name: "Anjali, 27",
    quote:
      "Before joining SIA Health( then Triya Health), I struggled to stay consistent and was confused about what to eat and how much. The personalized health chart, structured workouts, and daily check-ins helped me stay on track. For the first time, I felt clear, supported, and truly understood my body. I now feel stronger, healthier - and this journey has been a game-changer.",
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
    <section className="w-full Helvetica py-16 bg-[#FFF4EB]" id="testimonials">
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className={`${merriweatherFont.className} text-4xl md:text-6xl font-bold text-center mb-4 mx-auto`}
        >
          Real Stories{" "}
          <span className="text-[#FF4B00] font-bold">Real Results</span>
        </h2>
        <p className="text-lg text-center text-[#522b1c] mb-12 w-full md:w-1/2 mx-auto">
          See how women like you have transformed their health with our
          personalized approach
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
