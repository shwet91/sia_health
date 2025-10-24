"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Heart } from "lucide-react";
import { toast } from "sonner";
import "../../styles/landingPage.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/NewsLetter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Successfully subscribed to newsletter!");
        setEmail("");
      } else {
        toast.error(data.error || "Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-100 text-white py-16 Helvetica">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-x-12 lg:gap-y-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo5.png"
                alt="SIA Health Logo"
                width={120}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <p className="text-gray-600 leading-relaxed">
              Personalized, science-backed care for women&apos;s hormonal
              health. We believe in treating root causes, not just symptoms.
            </p>
            <div className="flex items-center gap-2 text-[#FF4B00]">
              <Heart size={16} />
              <span className="text-sm">
                Made with care for women&apos;s wellness
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-600 hover:text-gray-900 transition-colors inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-gray-900 transition-colors inline-block"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-gray-900 transition-colors inline-block"
                >
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-gray-600 hover:text-gray-900 transition-colors inline-block1 hidden"
                >
                  Hormone Library
                </Link>
              </li>
              <li>
                <Link
                  href="https://quiz.siahealth.in/"
                  className="text-gray-600 hover:text-gray-900 transition-colors inline-block"
                >
                  Take the Quiz
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3
              className="text-lg font-bold mb-6 text-gray-900"
              suppressHydrationWarning
            >
              Get in Touch
            </h3>
            <ul className="space-y-5">
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#FF4B00] flex-shrink-0" />
                <span className="text-gray-600">7007640890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#FF4B00] flex-shrink-0" />
                <span className="text-gray-600">support@siahealth.in</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-[#FF4B00] flex-shrink-0 mt-1"
                />
                <span className="text-gray-600">Bengaluru, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900">
              Join our community
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Get wellness tips and updates delivered to your inbox and stay
              healthy with us!
            </p>
            <form
              className="flex flex-col gap-3"
              onSubmit={handleNewsletterSubmit}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF4B00] focus:border-transparent"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#FF4B00] text-white rounded-lg font-semibold hover:bg-[#E04300] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2024 SIA Health. All rights reserved. 
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/hipaa"
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors hidden"
              >
                HIPAA Notice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
