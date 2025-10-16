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
              Healthcare Innovation
            </span>
            <span className="text-gray-600 text-sm">October 10, 2025</span>
            <span className="text-gray-600 text-sm">8 min read</span>
          </div>
          <h1
            className={`text-5xl md:text-[56px] leading-tight text-[#0b0b0b] mb-6 ${merriweather.className}`}
          >
            Transforming Healthcare: How Integrated Care is Revolutionizing
            Patient Outcomes
          </h1>
          <p className="text-xl leading-relaxed text-gray-700 mb-8">
            Discover how SIA Health&apos;s integrated care approach is bridging
            the gap between mental and physical health, creating better outcomes
            for patients across the healthcare spectrum.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1">
              <span className="font-bold text-base text-[#0b0b0b]">
                Dr. Sarah Mitchell
              </span>
              <span className="text-sm text-gray-600">
                Chief Medical Officer, SIA Health
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="w-full max-w-[1200px] mx-auto mb-12 px-6">
        <Image
          src="/blogs/2.jpg"
          alt="Healthcare professionals collaborating"
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
            The Healthcare Gap We&apos;re Addressing
          </h2>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            In today&apos;s healthcare landscape, one of the most pressing
            challenges is the disconnect between mental and physical health
            services. Patients often find themselves navigating separate
            systems, duplicate appointments, and fragmented care that fails to
            address their holistic needs.
          </p>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            At SIA Health, we&apos;ve witnessed firsthand the consequences of
            this fragmentation. Patients with chronic conditions like diabetes
            or heart disease often struggle with concurrent mental health
            challenges such as depression or anxiety—yet these conditions are
            rarely treated in coordination.
          </p>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            What is Integrated Care?
          </h2>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Integrated care is a comprehensive approach that coordinates mental
            health, physical health, and social services to provide seamless,
            patient-centered treatment. Instead of operating in silos,
            healthcare providers work collaboratively, sharing information and
            coordinating treatment plans.
          </p>
          <div className="bg-[#fff7f0] border-l-4 border-[#ff914d] p-8 my-8 rounded-lg">
            <p className="text-[22px] leading-relaxed text-[#0b0b0b] italic font-medium m-0">
              &ldquo;Integrated care isn&apos;t just about treating
              symptoms—it&apos;s about treating the whole person in the context
              of their life, their community, and their unique
              circumstances.&rdquo;
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            The SIA Health Approach
          </h2>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Our integrated care model is built on three foundational pillars:
          </p>
          <div className="grid grid-cols-1 gap-8 mt-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h3
                className={`text-[#d9661b] text-[22px] mb-3 font-bold ${merriweather.className}`}
              >
                1. Collaborative Care Teams
              </h3>
              <p className="m-0 text-gray-700 text-base leading-[1.7]">
                We bring together primary care physicians, mental health
                specialists, care coordinators, and social workers who
                communicate regularly and share a unified care plan for each
                patient.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h3
                className={`text-[#d9661b] text-[22px] mb-3 font-bold ${merriweather.className}`}
              >
                2. Technology-Enabled Coordination
              </h3>
              <p className="m-0 text-gray-700 text-base leading-[1.7]">
                Our proprietary platform ensures all providers have real-time
                access to patient information, reducing redundancies and
                enabling more informed decision-making.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h3
                className={`text-[#d9661b] text-[22px] mb-3 font-bold ${merriweather.className}`}
              >
                3. Patient-Centered Goals
              </h3>
              <p className="m-0 text-gray-700 text-base leading-[1.7]">
                Every care plan is developed in partnership with the patient,
                focusing on their personal health goals, preferences, and
                values.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            Real-World Impact: The Data Speaks
          </h2>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Since implementing our integrated care model, we&apos;ve seen
            remarkable improvements in patient outcomes:
          </p>
          <ul className="list-none p-0 my-6">
            <li className="text-lg leading-[1.8] text-gray-800 py-3 border-b border-gray-200">
              <strong className="text-[#d9661b] font-bold">
                42% reduction
              </strong>{" "}
              in emergency room visits among patients with chronic conditions
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 py-3 border-b border-gray-200">
              <strong className="text-[#d9661b] font-bold">
                35% improvement
              </strong>{" "}
              in medication adherence rates
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 py-3 border-b border-gray-200">
              <strong className="text-[#d9661b] font-bold">58% increase</strong>{" "}
              in patient satisfaction scores
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 py-3">
              <strong className="text-[#d9661b] font-bold">27% decrease</strong>{" "}
              in hospital readmissions within 30 days
            </li>
          </ul>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            These aren&apos;t just numbers—they represent real people
            experiencing better health, reduced stress, and improved quality of
            life.
          </p>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            Breaking Down Barriers
          </h2>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            One of the most significant benefits of integrated care is its
            ability to address the social determinants of health. Our care
            coordinators help patients navigate:
          </p>
          <ul className="pl-6 my-6">
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Transportation challenges
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Food insecurity
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Housing instability
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Access to medication
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              Insurance and financial concerns
            </li>
          </ul>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            By addressing these fundamental needs, we remove barriers that often
            prevent patients from receiving and adhering to necessary care.
          </p>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            The Role of Technology
          </h2>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Technology serves as the backbone of effective integrated care. Our
            platform enables:
          </p>
          <ul className="pl-6 my-6">
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              <strong className="font-bold text-[#0b0b0b]">
                Secure messaging
              </strong>{" "}
              between care team members and patients
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              <strong className="font-bold text-[#0b0b0b]">
                Shared electronic health records
              </strong>{" "}
              accessible to all authorized providers
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              <strong className="font-bold text-[#0b0b0b]">
                Automated care reminders
              </strong>{" "}
              and follow-up scheduling
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              <strong className="font-bold text-[#0b0b0b]">
                Real-time monitoring
              </strong>{" "}
              of patient progress and medication adherence
            </li>
            <li className="text-lg leading-[1.8] text-gray-800 mb-3">
              <strong className="font-bold text-[#0b0b0b]">
                Telehealth capabilities
              </strong>{" "}
              for convenient access to care
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            Patient Stories: Maria&apos;s Journey
          </h2>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Maria, a 54-year-old patient with Type 2 diabetes and depression,
            exemplifies the power of integrated care. Before joining SIA Health,
            she juggled appointments with multiple specialists, often missing
            visits due to conflicting schedules and transportation issues.
          </p>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            With our integrated approach, Maria now has a coordinated care team
            that communicates regularly. Her primary care physician and
            psychiatrist work together to manage medications that support both
            her diabetes control and mental health. A care coordinator helped
            her secure reliable transportation and connect with community
            resources.
          </p>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            Six months into the program, Maria&apos;s HbA1c levels have improved
            significantly, her depression symptoms have decreased by 60%, and
            she reports feeling &ldquo;finally understood and supported&rdquo;
            by her healthcare team.
          </p>
        </section>

        <section className="mb-12">
          <h2
            className={`text-4xl leading-tight text-[#d9661b] mb-5 font-bold ${merriweather.className}`}
          >
            The Future of Healthcare
          </h2>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            As healthcare continues to evolve, integrated care isn&apos;t just
            an innovative approach—it&apos;s becoming the standard of
            excellence. The evidence is clear: when we treat the whole person
            rather than isolated symptoms, everyone benefits.
          </p>
          <p className="text-lg leading-[1.8] text-gray-800 mb-4">
            At SIA Health, we&apos;re committed to expanding access to
            integrated care, partnering with healthcare organizations
            nationwide, and continuing to refine our model based on patient
            feedback and emerging research.
          </p>
        </section>
      </div>
    </article>
  );
}

export default Blog1;
