import React from "react";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "PCOS/PCOD & Irregular Periods",
      description:
        "Balance your hormones naturally and restore regular cycles with a holistic, root-cause approach.",
      icon: (
        <svg
          className="w-16 h-16 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Thyroid Disorders",
      description:
        "Manage hypo or hyperthyroidism through nutrition, lifestyle, and personalised hormone support.",
      icon: (
        <svg
          className="w-16 h-16 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Gut Issues & Bloating",
      description:
        "Heal your gut, improve digestion, and reduce bloating with science-backed, personalised guidance.",
      icon: (
        <svg
          className="w-16 h-16 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Skin, Hair, Immunity & More",
      description:
        "Glow from within — support skin, hair, and immunity by addressing hormonal and nutritional imbalances.",
      icon: (
        <svg
          className="w-16 h-16 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Fatigue & Low Energy",
      description:
        "Reclaim your energy by identifying and treating the underlying hormonal or metabolic causes.",
      icon: (
        <svg
          className="w-16 h-16 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Menopause (Peri & Post)",
      description:
        "Navigate menopause smoothly with tailored support to balance hormones and ease symptoms naturally.",
      icon: (
        <svg
          className="w-16 h-16 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      id: 7,
      title: "Weight Management",
      description:
        "Achieve sustainable weight balance by aligning your metabolism and hormones — no crash diets.",
      icon: (
        <svg
          className="w-16 h-16 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
          />
        </svg>
      ),
    },
    {
      id: 8,
      title: "Fertility & Pre-Conception Care",
      description:
        "Boost fertility and prepare your body for a healthy pregnancy with holistic hormone care.",
      icon: (
        <svg
          className="w-16 h-16 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#090718]1 bg-[#F97B4F]  bg-gradient-to-br1 from-[#FFF4EB]1 to-[#FFE4D3]1 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 md:gap-x-12 md:gap-y-16 items-start">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-start">
              {/* Icon - Smaller on mobile */}
              <div className="flex-shrink-0 mb-2 md:mb-4">
                <div className="w-10 h-10 md:w-16 md:h-16">
                  {React.cloneElement(service.icon, {
                    className: "w-full h-full text-white",
                  })}
                </div>
              </div>

              {/* Title - Smaller on mobile */}
              <h3 className="text-[#090718]1 text-white text-sm md:text-lg font-bold mb-1 md:mb-2">
                {service.title}
              </h3>

              {/* Description - Smaller on mobile */}
              <p className="text-gray-4001 text-[#090718]1 text-white text-xs md:text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
