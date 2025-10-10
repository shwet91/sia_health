import React from "react";

function ResponseHeader() {
  return (
    <div className="relative">
      {/* Hero Section with Background Image */}
      <div
        className="relative h-[450px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/girl_swings.jpg')",
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Assessment Complete
          </h1>
          <p className="text-lg md:text-xl font-light">
            Thank you for trusting us with your health information. Your
            responses have been securely collected and are now being reviewed by
            our hormonal health experts.
          </p>
        </div>
      </div>

      {/* What Happens Next Section */}
      <div className="bg-gradient-to-b from-orange-50 to-white py-16">
        <div className="container mx-auto px-4">
          {/* Decorative circles */}
          <div className="relative flex justify-center items-center mb-8">
            <div className="absolute left-0 w-64 h-64 bg-orange-200 rounded-full opacity-40 -translate-y-1/2"></div>
            <div className="absolute right-0 w-64 h-64 bg-orange-200 rounded-full opacity-40 -translate-y-1/2"></div>

            {/* User Icon */}
            <div className="relative z-10 w-24 h-24 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-orange-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12">
            WHAT HAPPENS NEXT?
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ResponseHeader;
