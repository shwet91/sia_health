import React from "react";
import Image from "next/image";
import { Merriweather } from "next/font/google";
import "../../../styles/landingPage.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

function Blog4() {
  return (
    <article className="w-full bg-white mt-10 Helvetica">
      {/* Hero Section */}
      <div className="max-w-[1200px] mx-auto px-6 pt-12 pb-8">
        <div className="max-w-[900px]">
          <div className="flex gap-4 items-center mb-6 flex-wrap">
            <span className="bg-[#ff914d] text-white px-4 py-1.5 rounded-full text-sm font-semibold">
              FITNESS
            </span>
            <span className="bg-[#ff914d] text-white px-4 py-1.5 rounded-full text-sm font-semibold">
              PCOS
            </span>
            <span className="bg-[#ff914d] text-white px-4 py-1.5 rounded-full text-sm font-semibold">
              INSULIN SENSITIVITY
            </span>
            <span className="text-gray-600 text-sm">June 11, 2025</span>
            <span className="text-gray-600 text-sm">3 min read</span>
          </div>
          <h1
            className={`text-5xl md:text-[56px] leading-tight text-[#0b0b0b] mb-6 ${merriweather.className}`}
          >
            How Fitness Can Transform PCOS: A Complete Guide to Movement &
            Hormonal Balance
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1">
              <span className="font-bold text-base text-[#0b0b0b]">
                Karishma Dhamija
              </span>
              <span className="text-sm text-gray-600">
                Fitness Expert, SIA Health
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="w-full max-w-[1200px] mx-auto mb-12 px-6">
        <Image
          src="/blogs/10.avif"
          alt="Fitness and PCOS transformation"
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
            Understanding the Root Cause
          </h2>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            At its core, PCOS is a hormonal imbalance, often involving:
          </p>
          <ul className="pl-6 my-6">
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Elevated insulin levels (insulin resistance)
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Increased androgens (male hormones)
            </li>
          </ul>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Insulin resistance means your body struggles to process sugar
            efficiently, which not only affects blood sugar but also drives up
            androgen levels. This leads to many of the hallmark PCOS symptoms:
            acne, irregular periods, unwanted hair growth, and more.
          </p>
          <div className="bg-[#fff7f0] border-l-4 border-[#ff914d] p-8 my-8 rounded-lg">
            <p className="text-[22px] leading-relaxed text-[#0b0b0b] italic font-medium m-0">
              The good news? Regular movement improves insulin sensitivity and
              helps restore hormonal balance naturally.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            5 Ways Fitness Changes the Game for PCOS
          </h2>

          <h3
            className={`text-[28px] leading-tight text-[#0b0b0b] mt-8 mb-4 font-bold ${merriweather.className}`}
          >
            1. It Improves Insulin Sensitivity
          </h3>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            This is a big one. Regular physical activity helps your cells
            respond better to insulin, which reduces insulin levels and, in
            turn, helps bring down androgen levels. One study showed that just
            12 weeks of moderate aerobic exercise improved insulin sensitivity
            and reduced abdominal fat in women with PCOS (Hutchison et al.,
            2004). That&apos;s a powerful shift in just 3 months.
          </p>

          <h3
            className={`text-[28px] leading-tight text-[#0b0b0b] mt-8 mb-4 font-bold ${merriweather.className}`}
          >
            2. It Supports Sustainable Weight Loss
          </h3>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Let me be clear: weight loss isn&apos;t the goal for everyone, and
            it&apos;s not the only measure of progress. But for those who are
            overweight and dealing with PCOS, even a small weight loss (5–10%)
            can lead to huge improvements in symptoms from more regular periods
            to improved fertility (Clark et al., 2005).
          </p>

          <h3
            className={`text-[28px] leading-tight text-[#0b0b0b] mt-8 mb-4 font-bold ${merriweather.className}`}
          >
            3. It Helps Regulate Your Cycle
          </h3>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Many of the women I work with notice that after a few months of
            consistent movement, their periods start to become more regular.
            That&apos;s not a coincidence. Exercise helps balance the hormones
            involved in the menstrual cycle and can actually promote ovulation,
            (Thomson et al., 2011) which is incredibly important for anyone
            trying to conceive.
          </p>

          <h3
            className={`text-[28px] leading-tight text-[#0b0b0b] mt-8 mb-4 font-bold ${merriweather.className}`}
          >
            4. It Reduces Your Risk of Long-Term Health Issues
          </h3>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            PCOS isn&apos;t just about fertility or periods, it&apos;s a
            metabolic condition. Women with PCOS are at higher risk of Type 2
            diabetes, heart disease, and high blood pressure. By making fitness
            a regular part of your life, you can reduce those risks
            significantly.
          </p>

          <h3
            className={`text-[28px] leading-tight text-[#0b0b0b] mt-8 mb-4 font-bold ${merriweather.className}`}
          >
            5. It Supports Your Mental Health
          </h3>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Let&apos;s not forget the emotional toll of PCOS. Anxiety,
            depression, and low self-esteem are common. Exercise increases
            endorphins (those feel-good chemicals), boosts energy, and helps
            with sleep and mood regulation. A 2018 review confirmed that
            exercise improves mental health in women with PCOS (Cooney et al.,
            2018). And honestly? Just stepping outside for a walk or finishing a
            short workout can do wonders for your mood.
          </p>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            What Kind of Exercise Works Best for PCOS?
          </h2>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            If you&apos;re wondering where to begin, here&apos;s what I
            recommend (and what I do with my clients):
          </p>

          <div className="space-y-6 my-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h3
                className={`text-[#d9661b] text-[22px] mb-3 font-bold ${merriweather.className}`}
              >
                Aerobic (walking, cycling, swimming, dancing)
              </h3>
              <p className="m-0 text-gray-700 text-base leading-[1.7]">
                Aim for 30 minutes, 3–5 times a week.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h3
                className={`text-[#d9661b] text-[22px] mb-3 font-bold ${merriweather.className}`}
              >
                Strength training (weights, resistance bands, bodyweight)
              </h3>
              <p className="m-0 text-gray-700 text-base leading-[1.7]">
                2–3 times a week helps build lean muscle and improves insulin
                response.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h3
                className={`text-[#d9661b] text-[22px] mb-3 font-bold ${merriweather.className}`}
              >
                HIIT (High-Intensity Interval Training)
              </h3>
              <p className="m-0 text-gray-700 text-base leading-[1.7]">
                Great if you&apos;re short on time. Short bursts of effort
                followed by rest can boost fat loss and insulin sensitivity.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h3
                className={`text-[#d9661b] text-[22px] mb-3 font-bold ${merriweather.className}`}
              >
                Yoga or Pilates
              </h3>
              <p className="m-0 text-gray-700 text-base leading-[1.7]">
                These help lower stress hormones like cortisol and improve
                flexibility. One study even found that yoga helped reduce
                testosterone and improved menstrual frequency in teens with PCOS
                (Nidhi et al., 2015).
              </p>
            </div>
          </div>

          <div className="bg-[#fff7f0] border-l-4 border-[#ff914d] p-8 my-8 rounded-lg">
            <p className="text-[22px] leading-relaxed text-[#0b0b0b] italic font-medium m-0">
              The key is consistency, not perfection. You don&apos;t need to
              train like an athlete. You just need to move your body in ways
              that feel good and are sustainable.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            Starting Your Fitness Journey with PCOS: Quick Tips
          </h2>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            I get it. PCOS can leave you feeling exhausted, discouraged, and
            unsure of where to begin. My advice?
          </p>
          <ul className="pl-6 my-6">
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              <strong className="font-bold text-[#0b0b0b]">Start small.</strong>{" "}
              Even 10–15 minutes a day is a win.
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              <strong className="font-bold text-[#0b0b0b]">
                Pick an activity you enjoy.
              </strong>{" "}
              If you hate running, don&apos;t run! Dance, stretch, swim, or
              walk.
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              <strong className="font-bold text-[#0b0b0b]">
                Track how you feel, not just your weight.
              </strong>{" "}
              Are you sleeping better? Is your mood lifting? Are your cycles
              becoming more regular?
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              <strong className="font-bold text-[#0b0b0b]">
                Don&apos;t do it alone.
              </strong>{" "}
              Whether it&apos;s a friend, a coach, or a community, support makes
              a huge difference.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            Final Thoughts
          </h2>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            PCOS may be complex, but you are not powerless. Fitness is one of
            the most effective and empowering tools we have, not just for
            managing symptoms but for reclaiming your energy, your confidence,
            and your well-being.
          </p>
          <div className="bg-[#fff7f0] border-l-4 border-[#ff914d] p-8 my-8 rounded-lg">
            <p className="text-[22px] leading-relaxed text-[#0b0b0b] italic font-medium m-0">
              And remember: it&apos;s not about perfection. It&apos;s about
              progress. Every step, every squat, every deep breath on your yoga
              mat is a step toward balance.
            </p>
          </div>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            <strong className="font-bold text-[#0b0b0b]">
              Need guidance on your fitness journey?
            </strong>
            <br />
            We&apos;re here to help. Book a personalized fitness consultation at
            SIA Health and start reclaiming your balance.
          </p>
          <p className="text-lg leading-[1.8] text-gray-800 mb-8">
            Warmly,
            <br />
            <strong className="font-bold">Karishma Dhamija</strong>
            <br />
            Fitness Expert, SIA Health
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

export default Blog4;
