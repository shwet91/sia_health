import React from "react";

function WhySia2() {
  const services = [
    {
      icon: (
        <svg
          className="w-10 h-10 text-[#e91e63]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M7 2v2H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V2h-2v2H9V2H7zm0 6h10v10H7V8z" />
        </svg>
      ),
      title: "Root-Cause Healing",
      subtitle: "Heal from within.",
      description:
        "We fix the cause, not just the symptoms — through personalized nutrition, fitness, and lifestyle care.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-[#e91e63]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          <path d="M12 17l-4-4h3V9h2v4h3l-4 4z" fill="white" />
        </svg>
      ),
      title: "Truly Personalized",
      subtitle: "Your body, your plan.",
      description:
        "Every plan is tailored to your hormones, habits, and goals — never one-size-fits-all.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-[#e91e63]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
      title: "Human Support",
      subtitle: "Experts who listen.",
      description:
        "Real coaches and doctors guide you daily — with care, empathy, and accountability.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-[#e91e63]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z" />
        </svg>
      ),
      title: "Science + Empathy",
      subtitle: "Logic meets care.",
      description:
        "Evidence-based plans delivered with compassion — because healing needs both.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-[#e91e63]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
        </svg>
      ),
      title: "Accountability",
      subtitle: "We keep you consistent.",
      description:
        "Daily support and reminders so you never lose track of your progress.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-[#e91e63]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z" />
        </svg>
      ),
      title: "Proven Results",
      subtitle: "Results that last.",
      description:
        "Women see real change — from balanced hormones to renewed confidence.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-8 md:py-12 lg:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-3">
            Why choose Sia Health ?
          </h2>
          <div className="w-12 h-0.5 bg-[#e91e63] mx-auto mb-3"></div>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Designed by women who truly understand your journey not just your
            symptoms. Because you deserve science-backed support that heals your
            body and empowers your mind.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 lg:p-5 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-3">{service.icon}</div>
              <h3 className="text-lg lg:text-xl font-semibold text-[#1e3a5f] mb-1.5">
                {service.title}
              </h3>
              <p className="text-sm lg:text-base font-medium text-gray-700 mb-2">
                {service.subtitle}
              </p>
              <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhySia2;
