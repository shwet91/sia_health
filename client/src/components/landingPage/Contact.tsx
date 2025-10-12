"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Merriweather } from "next/font/google";
import "../../styles/landingPage.css";

const merriweather = Merriweather({ subsets: ["latin"] , weight: ["400", "700"] });

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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
      className="w-full Helvetica bg-gray-1001 bg-white p-0 my-5 flex justify-center px-4 sm:px-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl w-full min-h-[500px]  bg-[#FFE4D3] rounded-md overflow-hidden ">
        {/* Left Side - Image */}
        <div className="relative overflow-hidden bg-gray-300">
          <Image
            src="/contact.jpeg"
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
            <h2 className={`text-[#130e2e] text-2xl lg:text-3xl font-bold mb-3 leading-tight ${merriweather.className}`}>
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
                  className="w-full py-2.5 px-3 bg-white border border-[#e6e6e6] rounded-md text-[#130e2e] text-sm outline-none focus:border-[#FF4B00] focus:ring-1 focus:ring-[#FFE7D8] transition-colors placeholder:text-[#9ca3af]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-2.5 px-3 bg-white border border-[#e6e6e6] rounded-md text-[#130e2e] text-sm outline-none focus:border-[#FF4B00] focus:ring-1 focus:ring-[#FFE7D8] transition-colors placeholder:text-[#9ca3af]"
                  required
                />
              </div>

              {/* Row 2: Phone */}
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Contact Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full py-2.5 px-3 bg-white border border-[#e6e6e6] rounded-md text-[#130e2e] text-sm outline-none focus:border-[#FF4B00] focus:ring-1 focus:ring-[#FFE7D8] transition-colors placeholder:text-[#9ca3af]"
                  required
                />
              </div>

              {/* Row 3: Message */}
              <div className="grid grid-cols-1 gap-4">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full py-2.5 px-3 bg-white border border-[#e6e6e6] rounded-md text-[#130e2e] text-sm outline-none focus:border-[#FF4B00] focus:ring-1 focus:ring-[#FFE7D8] transition-colors placeholder:text-[#9ca3af] resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center gap-3 mt-1">
                <button
                  type="button"
                  className={`${merriweather.className} bg-white text-[#FF4B00] border border-[#FF4B00] py-3 px-7 text-xs font-bold tracking-wider cursor-pointer transition-all duration-300 w-fit rounded hover:bg-[#fff2ec] hover:-translate-y-0.5 active:translate-y-0`}
                  onClick={() => console.log("Submit button clicked", formData)}
                >
                  Submit
                </button>

                <button
                  type="submit"
                  className={` ${merriweather.className} bg-[#FF4B00] text-white border-none py-3 px-7 text-xs font-bold tracking-wider cursor-pointer transition-all duration-300 w-fit rounded hover:bg-[#dd4200] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(126,217,87,0.3)] active:translate-y-0`}
                >
                  Book A Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
