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
    <section id="contact" className="w-full bg-gray-1001 bg-[#FFE4D3] p-0 m-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-full h-screen min-h-[700px]">
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
        <div className="bg-[#1a1a1a]1 flex items-center justify-center px-10 py-16 lg:px-20">
          <div className="w-full max-w-[600px]">
            {/* Subtitle with line */}
            <p className="text-[#FF4B00] text-sm font-medium tracking-wider mb-3 uppercase flex items-center">
              <span className="inline-block w-10 h-0.5 bg-[#FF4B00] mr-3"></span>
              Reservation
            </p>

            {/* Title */}
            <h2 className="text-[#130e2e] text-4xl lg:text-[42px] font-bold mb-5 leading-tight">
              Book An <span className="text-[#FF4B00]">Appointment Now!</span>
            </h2>

            {/* Description */}
            <p className="text-[#b0b0b0] text-[15px] leading-relaxed mb-9">
              Sia Health provides great services. We are dedicated to helping
              you achieve optimal health and wellness through personalized care
              and expert guidance.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full py-4 bg-transparent border-0 border-b border-[#404040] text-white text-[15px] outline-none focus:border-[#FF4B00] transition-colors placeholder:text-[#808080]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-4 bg-transparent border-0 border-b border-[#404040] text-white text-[15px] outline-none focus:border-[#FF4B00] transition-colors placeholder:text-[#808080]"
                  required
                />
              </div>

              {/* Row 2: Phone & Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full py-4 bg-transparent border-0 border-b border-[#404040] text-white text-[15px] outline-none focus:border-[#FF4B00] transition-colors placeholder:text-[#808080]"
                  required
                />
                <input
                  type="date"
                  name="date"
                  placeholder="Appointment Date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full py-4 bg-transparent border-0 border-b border-[#404040] text-[#808080] text-[15px] outline-none focus:border-[#FF4B00] transition-colors placeholder:text-[#808080] [color-scheme:dark]"
                  required
                />
              </div>

              {/* Row 3: Service & Department Dropdowns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full py-4 bg-transparent border-0 border-b border-[#404040] text-[#808080] text-[15px] outline-none focus:border-[#FF4B00] transition-colors cursor-pointer appearance-none pr-8 invalid:text-[#808080]"
                    required
                  >
                    <option value="">- Select Service</option>
                    <option
                      value="nutrition"
                      className="bg-[#1a1a1a] text-white"
                    >
                      Nutrition Consulting
                    </option>
                    <option value="fitness" className="bg-[#1a1a1a] text-white">
                      Fitness Training
                    </option>
                    <option
                      value="wellness"
                      className="bg-[#1a1a1a] text-white"
                    >
                      Wellness Coaching
                    </option>
                    <option value="therapy" className="bg-[#1a1a1a] text-white">
                      Therapy Sessions
                    </option>
                  </select>
                  <svg
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
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
                    className="w-full py-4 bg-transparent border-0 border-b border-[#404040] text-[#808080] text-[15px] outline-none focus:border-[#FF4B00] transition-colors cursor-pointer appearance-none pr-8 invalid:text-[#808080]"
                    required
                  >
                    <option value="">- Select Department</option>
                    <option
                      value="nutrition"
                      className="bg-[#1a1a1a] text-white"
                    >
                      Nutrition
                    </option>
                    <option value="fitness" className="bg-[#1a1a1a] text-white">
                      Fitness
                    </option>
                    <option
                      value="mental-health"
                      className="bg-[#1a1a1a] text-white"
                    >
                      Mental Health
                    </option>
                    <option value="general" className="bg-[#1a1a1a] text-white">
                      General Wellness
                    </option>
                  </select>
                  <svg
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
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
                className="bg-[#FF4B00] text-[#130e2e] border-none py-[18px] px-10 text-sm font-bold tracking-wider cursor-pointer transition-all duration-300 w-fit mt-2 rounded hover:bg-[#dd4200] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(126,217,87,0.3)] active:translate-y-0"
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
