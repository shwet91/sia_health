"use client";

import Image from "next/image";
import { Merriweather } from "next/font/google";
import "../../styles/landingPage.css";
import { useRouter } from "next/navigation";

const merriweatherFont = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Hero() {
  const router = useRouter();

  return (
    <section className="bg-gradient-to-b bg-[#FFF4EB] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Tagline */}
        <div className="text-center mb-12 mt-8 md:mt-5">
          <p className="text-gray-700 text-lg">
            Made for <span className="font-semibold italic">Women</span>, guided
            by doctors & health coaches.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8  items-center ">
          {/* Left Content */}
          <div className="space-y-6  md:ml-0 lg:ml-16">
            <h1
              className={`${merriweatherFont.className} text-4xl md:text-5xl lg:text-6xl font-bold`}
            >
              <span className="text-orange-600">
                Personalised Hormonal Care
              </span>
              <br />
              <span className="text-gray-800">that actually works</span>
            </h1>

            <p className="text-gray-700 text-lg">
              <span className="font-semibold">
                PCOS/PCOD || Thyroid || Fertility || Perimenopause and more.
              </span>
            </p>

            <button
              onClick={() => router.push("/contact")}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book a FREE Expert consult
            </button>

            <p className="text-gray-600 text-sm">
              Talk to our hormonal health coaches and get a clear{" "}
              <span className="font-semibold">next step</span> for your goals.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center md:justify-end">
            <Image
              src="/Herp.jpeg"
              alt="Hormonal health coach with calendar"
              width={400}
              height={400}
              className="w-auto h-auto max-w-[300px] md:max-w-[350px] rounded-lg border"
              priority
            />
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Feature 1 */}
          <div className="text-center space-y-3">
            <h3 className="text-orange-600 text-xl font-semibold">
              All in one care
            </h3>
            <p className="text-gray-700 text-sm">
              Everything your hormones need. Meal plans backed by Medical
              Insights, Health Analysis fitness & Lifestyle
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center space-y-3">
            <h3 className="text-orange-600 text-xl font-semibold">
              Your Health, Our Team
            </h3>
            <p className="text-gray-700 text-sm">
              Doctors, nutritionists and coaches working together for lasting
              results.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center space-y-3">
            <h3 className="text-orange-600 text-xl font-semibold">
              Expert-Led Support
            </h3>
            <p className="text-gray-700 text-sm">
              Root-cause plans tailored to your goals . Evidence backed, No FAD
              Approach
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
