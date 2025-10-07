"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Heart } from "lucide-react";
import "../../styles/landingPage.css";

export default function Footer() {
  return (
    <footer className="bg-[#1A0A03] text-white py-16 Helvetica">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#FF4B00] flex items-center justify-center text-xl font-bold">
                S
              </div>
              <span className="text-xl font-bold">SIA Health</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Personalized, science-backed care for women&apos;s hormonal
              health. We believe in treating root causes, not just symptoms.
            </p>
            <div className="flex items-center gap-2 text-[#FF4B00]">
              <Heart size={16} />
              <span>Made with care for women&apos;s wellness</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Hormone Library
                </Link>
              </li>
              <li>
                <Link
                  href="/quiz"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Take the Quiz
                </Link>
              </li>
            </ul>
          </div>

          {/* We Treat */}
          <div>
            <h3 className="text-lg font-bold mb-6">We Treat</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/treatments/pcos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  PCOS
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/thyroid"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Thyroid Disorders
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/weight"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Weight Management
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/fertility"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Fertility Support
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/acne"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Hormonal Acne
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/mood"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mood & Energy
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-bold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#FF4B00]" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#FF4B00]" />
                <span className="text-gray-400">hello@siahealth.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#FF4B00] mt-1" />
                <span className="text-gray-400">
                  123 Wellness Way
                  <br />
                  Health City, HC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 SIA Health. All rights reserved. HIPAA Compliant.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/hipaa"
                className="text-gray-400 hover:text-white text-sm transition-colors"
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
