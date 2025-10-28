import React from "react";

const WhySia3 = () => {
  return (
    <section className="bg-[#f7f6f2] py-12 px-4 md:px-0 flex justify-center">
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8 items-stretch">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-between bg-transparent rounded-2xl p-8">
          <div>
            <div className="text-sm text-[#e09b6c] tracking-widest mb-2 font-semibold">
              - Services -
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#23423b] mb-4 leading-tight">
              Services for Kids
              <br />
              at Our Clinic
            </h2>
            <p className="text-[#4b5c57] text-base mb-3">
              We offer a variety of dental services for kids of different ages.
            </p>
            <p className="text-[#4b5c57] text-base mb-6">
              Our attentive dentists will make each visit as comfortable as
              possible for your child.
            </p>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#f7e3d0]">
              {/* Icon placeholder */}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="#e09b6c" />
              </svg>
            </span>
            <div>
              <div className="font-semibold text-[#23423b]">
                Discount for the First Visit
              </div>
              <div className="text-sm text-[#4b5c57]">
                Book your visit and get a 15% discount!
              </div>
            </div>
          </div>
        </div>

        {/* Restorative Dentistry Card */}
        <div className="flex-1 bg-[#f7e3d0] rounded-2xl p-8 flex flex-col justify-between shadow-md min-w-[280px]">
          <div className="flex flex-col items-start">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#fff] mb-4">
              {/* Icon placeholder */}
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="14" fill="#e09b6c" />
              </svg>
            </span>
            <h3 className="text-xl font-semibold text-[#c97b4a] mb-2">
              Restorative Dentistry
            </h3>
            <p className="text-[#c97b4a] mb-3 text-base">
              We improve the health and aesthetics of your child’s smile.
            </p>
            <ul className="text-[#c97b4a] text-base list-disc pl-5 space-y-1">
              <li>Dental crowns;</li>
              <li>Dental fillings;</li>
              <li>Dental sealants;</li>
              <li>Performing root canals.</li>
            </ul>
          </div>
          <button className="mt-6 bg-[#e09b6c] text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-[#d18a5c] transition">
            Learn More
          </button>
        </div>

        {/* Preventive Dental Care Card */}
        <div className="flex-1 bg-[#e6f0ec] rounded-2xl p-8 flex flex-col justify-between shadow-md min-w-[280px]">
          <div className="flex flex-col items-start">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#fff] mb-4">
              {/* Icon placeholder */}
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="14" fill="#4b5c57" />
              </svg>
            </span>
            <h3 className="text-xl font-semibold text-[#23423b] mb-2">
              Preventive Dental Care
            </h3>
            <p className="text-[#23423b] mb-3 text-base">
              It is essential for ensuring that kids’ teeth are in proper
              condition.
            </p>
            <ul className="text-[#23423b] text-base list-disc pl-5 space-y-1">
              <li>Dental cleanings;</li>
              <li>Dental sealants;</li>
              <li>Fluoride treatments;</li>
              <li>Regular checkups.</li>
            </ul>
          </div>
          <button className="mt-6 bg-[#23423b] text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-[#18332a] transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhySia3;
