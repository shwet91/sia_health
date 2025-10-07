"use client";

import React, { useState } from "react";
import { Merriweather } from "next/font/google";
import "../../styles/landingPage.css";

const merriweather = Merriweather({ subsets: ["latin"] });

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  primaryConcern: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    primaryConcern: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section className="w-full Helvetica bg-gradient-to-br from-[#FFF4EB] to-[#FFE4D3] p-8 rounded-2xl max-w-6xl mx-auto  mb-10">
      <div className={`text-center mb-12 ${merriweather.className}`}>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ready to reclaim your health?
          <br />
          <span className="text-[#FF4B00]">Book your appointment now.</span>
        </h2>
        <p className="text-xl text-[#663014]">
          Take the first step towards hormonal wellness with a comprehensive
          consultation.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Full Name */}
        <div className="flex flex-col">
          <label htmlFor="fullName" className="text-[#2D1810] mb-2">
            Full Name <span className="text-[#FF4B00]">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            placeholder="Enter your full name"
            className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#FF4B00] bg-white"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-[#2D1810] mb-2">
            Email Address <span className="text-[#FF4B00]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email address"
            className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#FF4B00] bg-white"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-[#2D1810] mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#FF4B00] bg-white"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Primary Concern */}
        <div className="flex flex-col">
          <label htmlFor="primaryConcern" className="text-[#2D1810] mb-2">
            Primary Concern <span className="text-[#FF4B00]">*</span>
          </label>
          <select
            id="primaryConcern"
            name="primaryConcern"
            required
            className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#FF4B00] bg-white appearance-none"
            value={formData.primaryConcern}
            onChange={handleChange}
          >
            <option value="">Select your main concern</option>
            <option value="PCOS">PCOS</option>
            <option value="Thyroid">Thyroid</option>
            <option value="Weight">Weight</option>
            <option value="Skin">Skin</option>
            <option value="Periods">Periods</option>
            <option value="Fertility">Fertility</option>
            <option value="Mood">Mood</option>
          </select>
        </div>

        {/* Preferred Date */}
        <div className="flex flex-col">
          <label htmlFor="preferredDate" className="text-[#2D1810] mb-2">
            Preferred Date
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#FF4B00] bg-white"
            value={formData.preferredDate}
            onChange={handleChange}
          />
        </div>

        {/* Preferred Time */}
        <div className="flex flex-col">
          <label htmlFor="preferredTime" className="text-[#2D1810] mb-2">
            Preferred Time
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#FF4B00] bg-white appearance-none"
            value={formData.preferredTime}
            onChange={handleChange}
          >
            <option value="">Select preferred time</option>
            <option value="morning">Morning (9AM - 12PM)</option>
            <option value="afternoon">Afternoon (12PM - 4PM)</option>
            <option value="evening">Evening (4PM - 7PM)</option>
          </select>
        </div>

        {/* Additional Notes */}
        <div className="flex flex-col md:col-span-2">
          <label htmlFor="notes" className="text-[#2D1810] mb-2">
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            placeholder="Tell us more about your symptoms, concerns, or questions..."
            className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#FF4B00] bg-white resize-none"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 mt-4">
          <button
            type="submit"
            className="w-full bg-[#FF4B00] text-white px-8 py-4 rounded-full font-medium hover:bg-[#e64400] transition-colors duration-300 flex items-center justify-center"
          >
            Book My Appointment →
          </button>
        </div>
      </form>
    </section>
  );
}
