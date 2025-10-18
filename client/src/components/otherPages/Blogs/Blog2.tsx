import React from "react";
import Image from "next/image";
import { Merriweather } from "next/font/google";
import "../../../styles/landingPage.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

function Blog2() {
  return (
    <article className="w-full bg-white mt-10 Helvetica">
      {/* Hero Section */}
      <div className="max-w-[1200px] mx-auto px-6 pt-12 pb-8">
        <div className="max-w-[900px]">
          <div className="flex gap-4 items-center mb-6 flex-wrap">
            <span className="bg-[#ff914d] text-white px-4 py-1.5 rounded-full text-sm font-semibold">
              PCOS
            </span>
            <span className="bg-[#ff914d] text-white px-4 py-1.5 rounded-full text-sm font-semibold">
              STRESS
            </span>
            <span className="text-gray-600 text-sm">July 1, 2025</span>
            <span className="text-gray-600 text-sm">2 min read</span>
          </div>
          <h1
            className={`text-5xl md:text-[56px] leading-tight text-[#0b0b0b] mb-6 ${merriweather.className}`}
          >
            Stress and PCOS: How Cortisol Worsens Hormonal Imbalance
          </h1>
          <p className="text-xl leading-relaxed text-gray-700 mb-8">
            Learn how chronic stress affects PCOS symptoms like weight gain,
            acne, and irregular periods and discover 6 natural ways to reduce
            stress and restore balance.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1">
              <span className="font-bold text-base text-[#0b0b0b]">
                Dt. Sikita
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="w-full max-w-[1200px] mx-auto mb-12 px-6">
        <Image
          src="/blogs/8.avif"
          alt="PCOS and stress impact on hormones"
          width={1200}
          height={600}
          className="w-full h-[500px] max-h-[600px] rounded-xl object-cover"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="max-w-[800px] mx-auto px-6 pb-16">
        <section className="mb-12">
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Polycystic Ovary Syndrome (PCOS) affects 5–10% of women of
            reproductive age globally, causing symptoms like hormonal imbalance,
            irregular periods, weight gain, acne, and fertility issues. But one
            often-overlooked contributor to PCOS flare-ups is chronic stress.
          </p>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            In this guide, we explore the link between stress and PCOS, how
            stress worsens symptoms, and natural strategies to manage it.
          </p>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            The Link Between Stress and PCOS
          </h2>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Stress doesn&apos;t just affect your mind it disrupts your entire
            endocrine system. When you&apos;re exposed to ongoing stress from
            work, relationships, or poor sleep, your body increases production
            of cortisol, the primary stress hormone. Over time, elevated
            cortisol can create a ripple effect that aggravates PCOS symptoms.
          </p>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            How Stress Worsens PCOS Symptoms?
          </h2>

          <h3
            className={`text-[28px] leading-tight text-[#0b0b0b] mt-8 mb-4 font-bold ${merriweather.className}`}
          >
            1. Hormonal Imbalance and Irregular Periods
          </h3>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Chronic stress disrupts the hypothalamic-pituitary-ovarian (HPO)
            axis, a critical hormonal pathway for ovulation and menstrual
            regularity. This imbalance can lead to:
          </p>
          <ul className="pl-6 my-6">
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Missed or irregular periods
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Ovulation problems
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Increased androgen (male hormone) production, resulting in acne,
              facial hair, and hair thinning on the scalp
            </li>
          </ul>

          <h3
            className={`text-[28px] leading-tight text-[#0b0b0b] mt-8 mb-4 font-bold ${merriweather.className}`}
          >
            2. Increased Insulin Resistance
          </h3>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Elevated cortisol worsens insulin resistance, which is already a
            common issue in PCOS. When insulin levels rise, they trigger the
            ovaries to produce more androgens intensifying symptoms like weight
            gain and irregular cycles.
          </p>

          <h3
            className={`text-[28px] leading-tight text-[#0b0b0b] mt-8 mb-4 font-bold ${merriweather.className}`}
          >
            3. Inflammation in the Body
          </h3>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Chronic psychological stress promotes low-grade inflammation, which
            interferes with metabolism and ovulation. This can result in:
          </p>
          <ul className="pl-6 my-6">
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Fatigue
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Slower weight loss
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Aggravated PCOS symptoms
            </li>
          </ul>

          <h3
            className={`text-[28px] leading-tight text-[#0b0b0b] mt-8 mb-4 font-bold ${merriweather.className}`}
          >
            4. Mood Disorders and Mental Health Struggles
          </h3>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Women with PCOS have a higher risk of anxiety, depression, and mood
            swings. These mental health issues are often worsened by hormonal
            changes, poor body image, and societal pressure creating a vicious
            cycle where stress worsens PCOS, and PCOS increases stress.
          </p>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            6 Natural Ways to Reduce Stress and Manage PCOS
          </h2>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            You may not be able to eliminate stress entirely but you can manage
            it effectively. Here are science-backed, natural ways to reduce
            stress and ease PCOS symptoms:
          </p>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-6">
            <h3
              className={`text-[#d9661b] text-[22px] mb-3 font-bold ${merriweather.className}`}
            >
              1. Practice Daily Mindfulness or Meditation
            </h3>
            <p className="m-0 text-gray-700 text-base leading-[1.7]">
              Just 10–15 minutes a day can lower cortisol and calm your nervous
              system.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-6">
            <h3
              className={`text-[#d9661b] text-[22px] mb-3 font-bold ${merriweather.className}`}
            >
              2. Exercise Gently but Consistently
            </h3>
            <p className="m-0 text-gray-700 text-base leading-[1.7]">
              Try yoga, walking, swimming, or light strength training to boost
              endorphins and improve insulin sensitivity.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-6">
            <h3
              className={`text-[#d9661b] text-[22px] mb-3 font-bold ${merriweather.className}`}
            >
              3. Balance Blood Sugar with the Right Diet
            </h3>
            <p className="text-gray-700 text-base leading-[1.7] mb-3">
              <strong className="font-bold">Eat more:</strong>
            </p>
            <ul className="pl-6 mb-3">
              <li className="text-gray-700 text-base leading-[1.7] mb-2">
                Whole grains
              </li>
              <li className="text-gray-700 text-base leading-[1.7] mb-2">
                Healthy fats (like avocado, nuts)
              </li>
              <li className="text-gray-700 text-base leading-[1.7] mb-2">
                Lean proteins
              </li>
              <li className="text-gray-700 text-base leading-[1.7] mb-2">
                High-fiber veggies
              </li>
            </ul>
            <p className="text-gray-700 text-base leading-[1.7] mb-3">
              <strong className="font-bold">Avoid:</strong>
            </p>
            <ul className="pl-6 mb-0">
              <li className="text-gray-700 text-base leading-[1.7] mb-2">
                Refined sugars
              </li>
              <li className="text-gray-700 text-base leading-[1.7]">
                Caffeine (especially if anxiety-prone)
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-6">
            <h3
              className={`text-[#d9661b] text-[22px] mb-3 font-bold ${merriweather.className}`}
            >
              4. Prioritize Deep, Quality Sleep
            </h3>
            <p className="m-0 text-gray-700 text-base leading-[1.7]">
              Aim for 7–9 hours of sleep to support hormone repair and cortisol
              regulation.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-6">
            <h3
              className={`text-[#d9661b] text-[22px] mb-3 font-bold ${merriweather.className}`}
            >
              5. Limit Screen Time and Set Healthy Boundaries
            </h3>
            <p className="m-0 text-gray-700 text-base leading-[1.7]">
              Excess screen time especially before bed disrupts melatonin and
              increases stress. Practice digital detoxes and say no when needed.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h3
              className={`text-[#d9661b] text-[22px] mb-3 font-bold ${merriweather.className}`}
            >
              6. Seek Emotional Support
            </h3>
            <p className="m-0 text-gray-700 text-base leading-[1.7]">
              Whether it&apos;s therapy, journaling, or joining a PCOS support
              group, your mental health matters. Emotional healing supports
              hormonal healing.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            Final Thoughts: Managing Stress to Support PCOS Healing
          </h2>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            PCOS is a multifaceted condition, and stress management plays a
            crucial role in recovery. While you can&apos;t eliminate all sources
            of stress, building small daily habits can lead to major shifts in
            how your body and hormones respond.
          </p>
          <div className="bg-[#fff7f0] border-l-4 border-[#ff914d] p-8 my-8 rounded-lg">
            <p className="text-[22px] leading-relaxed text-[#0b0b0b] italic font-medium m-0">
              &ldquo;Remember: You don&apos;t have to cure stress, you just have
              to manage it better.&rdquo;
            </p>
          </div>
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

export default Blog2;
