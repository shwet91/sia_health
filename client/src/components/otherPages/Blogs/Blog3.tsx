import React from "react";
import Image from "next/image";
import { Merriweather } from "next/font/google";
import "../../../styles/landingPage.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

function Blog3() {
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
              FITNESS
            </span>
            <span className="text-gray-600 text-sm">June 22, 2025</span>
            <span className="text-gray-600 text-sm">4 min read</span>
          </div>
          <h1
            className={`text-5xl md:text-[56px] leading-tight text-[#0b0b0b] mb-6 ${merriweather.className}`}
          >
            Strength Training for PCOS: The Ultimate Workout for Hormonal
            Balance & Weight Loss
          </h1>
          <p className="text-xl leading-relaxed text-gray-700 mb-8">
            Discover why strength training is the best PCOS workout for hormonal
            balance, insulin resistance & sustainable weight loss. Your gym
            guide starts here.
          </p>
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
          src="/blogs/9.avif"
          alt="Strength training for PCOS"
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
            When I first started working with women dealing with PCOS
            (Polycystic Ovary Syndrome), I noticed something very quickly, most
            of them had been told to &ldquo;just lose weight&rdquo; or
            &ldquo;just do cardio.&rdquo;
          </p>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            But here&apos;s the truth: if you&apos;re only focusing on the
            treadmill, you&apos;re missing a huge piece of the PCOS workout
            puzzle.
          </p>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Strength training for PCOS is a game-changer. And I say that not
            just as a coach, but as someone who&apos;s seen the results, over
            and over again.
          </p>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Let me walk you through why lifting weights for PCOS (yes, even
            light ones!) should be part of your weekly PCOS fitness plan if
            you&apos;re managing hormonal imbalance, weight gain, or irregular
            periods.
          </p>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            1. It Boosts Insulin Sensitivity
          </h2>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Most women with PCOS have some degree of insulin resistance, which
            means their body struggles to use insulin effectively. That leads to
            higher insulin levels, and high insulin stimulates the ovaries to
            produce more androgens (male hormones), which worsens PCOS symptoms
            like acne, irregular periods, and hair growth.
          </p>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            The amazing part?{" "}
            <strong className="font-bold">
              Strength training for PCOS improves your body&apos;s response to
              insulin.
            </strong>{" "}
            Even just 3 days a week of a consistent PCOS gym routine can
            increase glucose uptake in your muscles, reducing insulin resistance
            naturally.
          </p>
          <div className="bg-[#fff7f0] border-l-4 border-[#ff914d] p-6 my-8 rounded-lg">
            <p className="text-base leading-relaxed text-gray-700 m-0">
              A 2024 study showed significant improvements in insulin
              sensitivity in women with PCOS following high-intensity and
              strength training programs.
            </p>
          </div>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            No magic pills. Just PCOS-friendly workouts and movement.
          </p>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            2. It Helps Burn Fat Without Losing Muscle
          </h2>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            If you&apos;re only doing cardio, you might lose weight, but
            you&apos;re often losing muscle mass along with fat. And for PCOS
            weight loss, that&apos;s a problem.
          </p>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            <strong className="font-bold">
              More muscle = better metabolism, better hormonal balance, and a
              stronger body that works for you, not against you.
            </strong>
          </p>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Strength training for PCOS helps preserve lean muscle while reducing
            body fat, especially abdominal fat, which is common in PCOS due to
            hormonal imbalances.
          </p>
          <div className="bg-[#fff7f0] border-l-4 border-[#ff914d] p-6 my-8 rounded-lg">
            <p className="text-base leading-relaxed text-gray-700 m-0">
              This 2024 research found that a combined resistance and aerobic
              program reduced abdominal fat and improved testosterone and lipid
              levels significantly more than aerobic training alone.
            </p>
          </div>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            If your PCOS workout plan includes weights, you&apos;re on the right
            track.
          </p>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            3. It Supports Hormonal Balance and Period Regulation
          </h2>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            You might not think of weights when you think of your period, but
            listen to this: exercise-induced reductions in insulin and androgens
            can actually help restore ovulation in women with PCOS.
          </p>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            I&apos;ve had clients who went months (sometimes years!) without a
            regular cycle, and within 2–3 months of consistent PCOS strength
            work, their periods returned naturally.
          </p>
          <div className="bg-[#fff7f0] border-l-4 border-[#ff914d] p-6 my-8 rounded-lg">
            <p className="text-base leading-relaxed text-gray-700 m-0">
              One 2023 review confirmed that regular physical activity,
              particularly strength training, can improve menstrual regularity
              and reduce testosterone in women with PCOS.
            </p>
          </div>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            So if you&apos;re struggling with irregular cycles, strength work
            should be part of your PCOS exercise plan.
          </p>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            4. It Reduces Stress, Which Lowers Cortisol
          </h2>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Living with PCOS can be incredibly frustrating, and chronic stress
            makes it worse. Elevated cortisol can spike insulin, increase fat
            storage, and throw your hormones even more off-balance.
          </p>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Strength training for PCOS isn&apos;t just about your muscles,
            it&apos;s also a major mental health booster.
          </p>
          <div className="bg-[#fff7f0] border-l-4 border-[#ff914d] p-6 my-8 rounded-lg">
            <p className="text-base leading-relaxed text-gray-700 m-0">
              A 2025 study highlighted how multimodal training (including
              strength work) significantly reduced cortisol levels and improved
              mental health outcomes for women with PCOS.
            </p>
          </div>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            It increases dopamine and endorphins, helping manage anxiety,
            depression, and that &ldquo;stuck&rdquo; feeling so many women with
            PCOS experience.
          </p>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            5. You Get Strong – Physically and Mentally
          </h2>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Let me say this clearly:{" "}
            <strong className="font-bold">you are not fragile.</strong>
          </p>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            I&apos;ve seen women walk into the gym feeling broken, ashamed, or
            like their body betrayed them. And then, I watched them pick up a
            dumbbell and take back control with the help of a tailored PCOS gym
            routine.
          </p>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Strength training for PCOS is about more than reps and sets.
            It&apos;s about resilience.
          </p>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            It&apos;s the moment you realize your body is capable of healing and
            thriving with the right kind of PCOS fitness plan.
          </p>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            6. You Can Build More Muscle
          </h2>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Here&apos;s something rarely talked about: women with PCOS often
            have higher levels of estrogen, which can actually support muscle
            growth and recovery when channeled correctly.
          </p>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Estrogen helps protect muscle tissue and improves recovery after
            workouts.
          </p>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            That means strength training isn&apos;t just safe, it&apos;s
            something your body is actually primed to benefit from.
          </p>
          <div className="bg-[#fff7f0] border-l-4 border-[#ff914d] p-6 my-8 rounded-lg">
            <p className="text-base leading-relaxed text-gray-700 m-0">
              According to a 2024 review, estrogen plays an anabolic role that
              supports muscle preservation and post-workout recovery, especially
              relevant for women with PCOS.
            </p>
          </div>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            With the right PCOS exercise, you can turn your hormonal imbalance
            into a training advantage.
          </p>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            How to Start (Even If You&apos;ve Never Lifted Before)?
          </h2>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            You don&apos;t need fancy machines or heavy barbells to start your
            PCOS strength training journey. Here&apos;s a simple,
            beginner-friendly PCOS workout I often give my clients:
          </p>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 my-8">
            <h3
              className={`text-[#d9661b] text-[22px] mb-4 font-bold ${merriweather.className}`}
            >
              2–3 Days a Week | 30–40 Minutes Per Session
            </h3>
            <p className="text-gray-700 text-base leading-[1.7] mb-3">
              <strong className="font-bold">Start with:</strong>
            </p>
            <ul className="pl-6 mb-4">
              <li className="text-gray-700 text-base leading-[1.7] mb-2">
                Squats (bodyweight or dumbbell)
              </li>
              <li className="text-gray-700 text-base leading-[1.7] mb-2">
                Push-ups (wall or knee variation)
              </li>
              <li className="text-gray-700 text-base leading-[1.7] mb-2">
                Glute bridges
              </li>
              <li className="text-gray-700 text-base leading-[1.7] mb-2">
                Dumbbell rows
              </li>
              <li className="text-gray-700 text-base leading-[1.7] mb-2">
                Standing overhead presses
              </li>
              <li className="text-gray-700 text-base leading-[1.7]">
                Core work (planks, dead bugs)
              </li>
            </ul>
            <p className="text-gray-700 text-base leading-[1.7] mb-3 mt-6">
              <strong className="font-bold">
                Tips for your PCOS strength routine:
              </strong>
            </p>
            <ul className="pl-6 mb-0">
              <li className="text-gray-700 text-base leading-[1.7] mb-2">
                Focus on form, not weight
              </li>
              <li className="text-gray-700 text-base leading-[1.7] mb-2">
                Rest 30–60 seconds between sets
              </li>
              <li className="text-gray-700 text-base leading-[1.7]">
                Track how you feel each week - not just the scale
              </li>
            </ul>
          </div>

          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            This kind of PCOS workout plan fits easily into your week and works
            with your body, not against it.
          </p>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            Final Thoughts: Strength is a Lifestyle, Not a Trend
          </h2>
          <div className="bg-[#fff7f0] border-l-4 border-[#ff914d] p-8 my-8 rounded-lg">
            <p className="text-[22px] leading-relaxed text-[#0b0b0b] italic font-medium m-0">
              &ldquo;You don&apos;t need to be perfect. You just need to show
              up. For your hormones. For your heart. For your confidence. For
              your PCOS healing.&rdquo;
            </p>
          </div>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            And if you&apos;re dealing with PCOS, I want you to know strength
            training isn&apos;t off-limits. It&apos;s your secret weapon.
            It&apos;s an essential part of any effective PCOS workout routine.
          </p>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            If you ever feel stuck or unsure where to begin, I&apos;m here to
            guide you with personalized PCOS fitness plans.
          </p>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Let&apos;s lift heavy. Let&apos;s heal naturally with SIA Health.
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

export default Blog3;
