"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    service: "",
    department: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <section
      id="contact"
      className="w-full bg-gray-1001 bg-white p-0 m-0 flex justify-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl w-full min-h-[500px]  bg-[#FFE4D3] rounded-2xl overflow-hidden ">
        {/* Left Side - Image */}
        <div className="relative overflow-hidden bg-gray-300">
          <Image
            src="/contact.jpg"
            alt="Healthcare professionals"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Right Side - Form */}
        <div className="bg-[#1a1a1a]1 flex items-center justify-center px-6 py-8 lg:px-12">
          <div className="w-full max-w-[500px]">
            {/* Subtitle with line */}
            <p className="text-[#FF4B00] text-xs font-medium tracking-wider mb-2 uppercase flex items-center">
              <span className="inline-block w-8 h-0.5 bg-[#FF4B00] mr-2"></span>
              Reservation
            </p>

            {/* Title */}
            <h2 className="text-[#130e2e] text-2xl lg:text-3xl font-bold mb-3 leading-tight">
              Book An <span className="text-[#FF4B00]">Appointment Now!</span>
            </h2>

            {/* Description */}
            <p className="text-[#130e2e] text-sm leading-relaxed mb-6">
              Sia Health provides great services. We are dedicated to helping
              you achieve optimal health and wellness through personalized care
              and expert guidance.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full py-2.5 bg-transparent border-0 border-b border-[#404040] text-[#130e2e] text-sm outline-none focus:border-[#FF4B00] transition-colors placeholder:text-[#130e2e]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-2.5 bg-transparent border-0 border-b border-[#404040] text-[#130e2e] text-sm outline-none focus:border-[#FF4B00] transition-colors placeholder:text-[#130e2e]"
                  required
                />
              </div>

              {/* Row 2: Phone & Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full py-2.5 bg-transparent border-0 border-b border-[#404040] text-[#130e2e] text-sm outline-none focus:border-[#FF4B00] transition-colors placeholder:text-[#130e2e]"
                  required
                />
                <input
                  type="date"
                  name="date"
                  placeholder="Appointment Date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full py-2.5 bg-transparent border-0 border-b border-[#404040] text-[#130e2e] text-sm outline-none focus:border-[#FF4B00] transition-colors placeholder:text-[#130e2e] [color-scheme:dark]"
                  required
                />
              </div>

              {/* Row 3: Service & Department Dropdowns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full py-2.5 bg-transparent border-0 border-b border-[#404040] text-[#130e2e] text-sm outline-none focus:border-[#FF4B00] transition-colors cursor-pointer appearance-none pr-6 invalid:text-[#130e2e]"
                    required
                  >
                    <option value="">- Select Service</option>
                    <option
                      value="nutrition"
                      className="bg-[#1a1a1a] text-[#130e2e]"
                    >
                      Nutrition Consulting
                    </option>
                    <option
                      value="fitness"
                      className="bg-[#1a1a1a] text-[#130e2e]"
                    >
                      Fitness Training
                    </option>
                    <option
                      value="wellness"
                      className="bg-[#1a1a1a] text-[#130e2e]"
                    >
                      Wellness Coaching
                    </option>
                    <option
                      value="therapy"
                      className="bg-[#1a1a1a] text-[#130e2e]"
                    >
                      Therapy Sessions
                    </option>
                  </select>
                  <svg
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#808080"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                <div className="relative">
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full py-2.5 bg-transparent border-0 border-b border-[#404040] text-[#130e2e] text-sm outline-none focus:border-[#FF4B00] transition-colors cursor-pointer appearance-none pr-6 invalid:text-[#130e2e]"
                    required
                  >
                    <option value="">- Select Department</option>
                    <option
                      value="nutrition"
                      className="bg-[#1a1a1a] text-[#130e2e]"
                    >
                      Nutrition
                    </option>
                    <option
                      value="fitness"
                      className="bg-[#1a1a1a] text-[#130e2e]"
                    >
                      Fitness
                    </option>
                    <option
                      value="mental-health"
                      className="bg-[#1a1a1a] text-[#130e2e]"
                    >
                      Mental Health
                    </option>
                    <option
                      value="general"
                      className="bg-[#1a1a1a] text-[#130e2e]"
                    >
                      General Wellness
                    </option>
                  </select>
                  <svg
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#808080"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#FF4B00] text-[#130e2e] border-none py-3 px-7 text-xs font-bold tracking-wider cursor-pointer transition-all duration-300 w-fit mt-1 rounded hover:bg-[#dd4200] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(126,217,87,0.3)] active:translate-y-0"
              >
                MAKE APPOINTMENT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
