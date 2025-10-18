import React from "react";
import Image from "next/image";
import { Merriweather } from "next/font/google";
import "../../../styles/landingPage.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

function Blog1() {
  return (
    <article className="w-full bg-white mt-10 Helvetica">
      {/* Hero Section */}
      <div className="max-w-[1200px] mx-auto px-6 pt-12 pb-8">
        <div className="max-w-[900px]">
          <div className="flex gap-4 items-center mb-6 flex-wrap">
            <span className="bg-[#ff914d] text-white px-4 py-1.5 rounded-full text-sm font-semibold">
              Nutrition & Hormones
            </span>
            <span className="text-gray-600 text-sm">August 14, 2025</span>
            <span className="text-gray-600 text-sm">2 min read</span>
          </div>
          <h1
            className={`text-5xl md:text-[56px] leading-tight text-[#0b0b0b] mb-6 ${merriweather.className}`}
          >
            How Fad Diets Mess up Your Hormones?
          </h1>
          <p className="text-xl leading-relaxed text-gray-700 mb-8">
            Discover why popular fad diets may promise quick results but can
            wreak havoc on your hormonal balance, affecting everything from your
            metabolism to your fertility.
          </p>
        </div>
      </div>

      {/* Featured Image */}
      <div className="w-full max-w-[1200px] mx-auto mb-12 px-6">
        <Image
          src="/blogs/7.avif"
          alt="Fad diets impact on hormones"
          width={1200}
          height={600}
          className="w-full h-[500px] max-h-[600px] rounded-xl object-cover"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="max-w-[800px] mx-auto px-6 pb-16">
        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            What Are Fad Diets?
          </h2>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Fad diets are popular diets that promise faster weight loss or other
            health advantages with minimal effort.
          </p>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            They typically have no scientific support and are not long-term
            viable. Here are a few examples:
          </p>
          <ul className="pl-6 my-6">
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Diet for Cabbage Soup
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Keto (when overdone or misused)
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Cleanses for detoxification
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Diets extremely low in calories (VLCDs)
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Raw food-only or carnivorous diets
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            Why are fad diets popular but misleading?
          </h2>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Fad diets are easy and are successful at first because they remove
            the main food groups, make a calorie deficit, cause a loss of water.
          </p>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            However, this weight loss is rarely long-lasting and may eventually
            have a detrimental impact on hormonal health.
          </p>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Problems like irregular periods, infertility, weight gain, insulin
            resistance, exhaustion, anxiety, and even chronic long-term diseases
            can result from hormonal imbalances.
          </p>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            Are Your &apos;Healthy&apos; Diets Messing with Your Hormones?
          </h2>

          <h3
            className={`text-[28px] leading-tight text-[#0b0b0b] mt-8 mb-4 font-bold ${merriweather.className}`}
          >
            1. Extreme Calorie Restriction
          </h3>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Many fad diets rely on more calorie cuts, which can send your body
            into &ldquo;starvation mode.&rdquo; What&apos;s the point of a flat
            stomach if your energy crashes by 3PM? These all disrupts:
          </p>
          <ul className="pl-6 my-6">
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Leptin and ghrelin, leading to increased hunger and reduced
              satiety.
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Thyroid hormones, slowing down metabolism.
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Reproductive hormones, causing menstrual irregularities or
              amenorrhea in women.
            </li>
          </ul>

          <h3
            className={`text-[28px] leading-tight text-[#0b0b0b] mt-8 mb-4 font-bold ${merriweather.className}`}
          >
            2. Low Carbohydrate Intake
          </h3>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Carbs are essential for:
          </p>
          <ul className="pl-6 my-6">
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Balancing cortisol (stress hormone)
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Producing serotonin (mood and sleep regulator)
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Supporting insulin sensitivity
            </li>
          </ul>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Extremely low-carb diets (like keto) may result in chronic fatigue,
            mood swings, or elevated cortisol levels due to stress response.
          </p>

          <h3
            className={`text-[28px] leading-tight text-[#0b0b0b] mt-8 mb-4 font-bold ${merriweather.className}`}
          >
            3. Fat-Free or Low-Fat Diets
          </h3>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Healthy fats are critical for:
          </p>
          <ul className="pl-6 my-6">
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Hormone synthesis (especially estrogen, progesterone, and
              testosterone)
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Absorption of fat-soluble vitamins (A, D, E, and K)
            </li>
          </ul>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Avoiding fats can lead to imbalances in sex hormones, leading to
            PMS, acne, low libido, and fertility issues.
          </p>

          <h3
            className={`text-[28px] leading-tight text-[#0b0b0b] mt-8 mb-4 font-bold ${merriweather.className}`}
          >
            4. Detox and Cleanse Diets
          </h3>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            These diets often cause rapid weight loss due to water retention and
            no fat loss as such that lead to:
          </p>
          <ul className="pl-6 my-6">
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Blood sugar instability
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Electrolyte imbalances
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Adrenal fatigue due to elevated cortisol from chronic
              undernourishment
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            Best Diet for Hormonal Balance (What to Eat)
          </h2>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            To support hormonal health, a more sustainable, whole-food-based
            approach is recommended:
          </p>
          <ul className="pl-6 my-6">
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Include complex carbohydrates (quinoa, oats, brown rice) for
              energy and hormone regulation.
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Add healthy fats (avocado, nuts, seeds, olive oil) for hormone
              production.
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Prioritize lean proteins and plant-based proteins.
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Manage meal timing and avoid prolonged fasting unless medically
              advised.
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Ensure micronutrient sufficiency, especially iron, B vitamins,
              magnesium, and zinc.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            Conclusion
          </h2>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Fad diets may deliver short-term results but often compromise
            long-term health, especially hormonal balance. Hormones are
            delicate, and restrictive or extreme dietary practices can tip the
            scale toward dysfunction.
          </p>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            As a health coach I recommend instead of chasing quick fixes, aim
            for a sustainable, nourishing diet that honors your body&apos;s
            natural rhythms.
          </p>
          <div className="bg-[#fff7f0] border-l-4 border-[#ff914d] p-6 my-8 rounded-lg">
            <p className="text-base leading-relaxed text-gray-700 mb-2">
              <strong className="font-bold">Disclaimer</strong> - This
              information is provided for educational purposes and should not be
              construed as medical advice. Please consult with your healthcare
              practitioners before undertaking any changes in your diet or
              adding supplements.
            </p>
            <p className="text-base leading-relaxed text-gray-700 m-0">
              Sia Health is a digital clinic for women, offering accessible,
              personalized, and compassionate health-care solutions -{" "}
              <a
                href="https://www.siahealth.in"
                className="text-[#ff914d] underline hover:text-[#d9661b]"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.siahealth.in
              </a>
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}

export default Blog1;
