"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Heart } from "lucide-react";
import "../../styles/landingPage.css";

export default function Footer() {
  return (
    <footer className="bg-[#1A0A03]1 text-white py-16 Helvetica  bg-gray-100">
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
              />
            </div>
            <p className="text-gray-600 leading-relaxed">
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
            <h3 className="text-lg font-bold mb-6 text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
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
                  href="/team"
                  className="text-gray-600 hover:text-gray-900 transition-colors inline-block"
                >
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-gray-600 hover:text-gray-900 transition-colors inline-block"
                >
                  Hormone Library
                </Link>
              </li>
              <li>
                <Link
                  href="/quiz"
                  className="text-gray-600 hover:text-gray-900 transition-colors inline-block"
                >
                  Take the Quiz
                </Link>
              </li>
            </ul>
          </div>

          {/* We Treat */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900">We Treat</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/treatments/pcos"
                  className="text-gray-600 hover:text-gray-900 transition-colors inline-block"
                >
                  PCOS
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/thyroid"
                  className="text-gray-600 hover:text-gray-900 transition-colors inline-block"
                >
                  Thyroid Disorders
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/weight"
                  className="text-gray-600 hover:text-gray-900 transition-colors inline-block"
                >
                  Weight Management
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/fertility"
                  className="text-gray-600 hover:text-gray-900 transition-colors inline-block"
                >
                  Fertility Support
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/acne"
                  className="text-gray-600 hover:text-gray-900 transition-colors inline-block"
                >
                  Hormonal Acne
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/mood"
                  className="text-gray-600 hover:text-gray-900 transition-colors inline-block"
                >
                  Mood & Energy
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900">Get in Touch</h3>
            <ul className="space-y-5">
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#FF4B00] flex-shrink-0" />
                <span className="text-gray-600">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#FF4B00] flex-shrink-0" />
                <span className="text-gray-600">hello@siahealth.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-[#FF4B00] flex-shrink-0 mt-1"
                />
                <span className="text-gray-600">
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
            <p className="text-gray-600 text-sm">
              © 2024 SIA Health. All rights reserved. HIPAA Compliant.
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
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
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
