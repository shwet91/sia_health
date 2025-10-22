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
    name: "Kanchan",
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
    name: "Anjali",
    quote:
      "Before joining SIA Health( then Triya Health), I struggled to stay consistent and was confused about what to eat and how much. The personalized health chart, structured workouts, and daily check-ins helped me stay on track. For the first time, I felt clear, supported, and truly understood my body. I now feel stronger, healthier - and this journey has been a game-changer.",
    image: "/testimonials/Anjali.jpeg",
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
                    className="object-cover rounded-full object-center"
                  />
                </div>

                <p
                  className={`font-medium mt-4 mb-3 ${merriweatherFont.className}`}
                >
                  {t.name}
                </p>

                <p className="text-center italic text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
