"use client";

import Image from "next/image";
import { useState } from "react";
import { Rubik } from "next/font/google";
import Link from "next/dist/client/link";
import { useRouter } from "next/navigation";

const rubikFont = Rubik({ subsets: ["latin"], weight: ["400", "700"] });

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div
      className={` ${rubikFont.className} bg-white fixed top-0 left-0 right-0 z-50 shadow-[0px_10px_30px_-10px_rgba(46,19,0,0.1)] w-full`}
      data-name="Navbar"
      data-node-id="42:2054"
      // style={{ backdropFilter: "blur(8px)" }}
    >
      <div
        className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8"
        data-name="container"
        data-node-id="42:2055"
      >
        <div
          onClick={() => router.push("/")}
          className="h-7 relative shrink-0 w-[122px]"
          data-name="Logo-Full"
          data-node-id="42:2070"
        >
          <Image
            alt="Sia Health Logo"
            className="block max-w-none size-full"
            src="/logo5.png"
            width={122}
            height={27}
            priority
          />
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-[#2e1300] hover:bg-[#FFF4EB] rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <nav
          className={`flex absolute md:relative top-16 left-0 md:top-auto md:left-auto w-full md:w-auto flex-col md:flex-row bg-[#FFF4EBA6] md:bg-transparent px-4 md:px-0 space-y-4 md:space-y-0 md:space-x-6 font-medium text-[#2e1300] text-base backdrop-blur-sm md:backdrop-blur-none border-t md:border-t-0 border-[#FFD4B3] shadow-lg md:shadow-none z-[60] overflow-visible transition-all duration-300 ease-in-out transform origin-top ${
            isMenuOpen
              ? "opacity-100 max-h-[420px] py-4 pointer-events-auto translate-y-0"
              : "opacity-0 max-h-0 py-0 pointer-events-none -translate-y-2"
          } md:opacity-100 md:max-h-full md:py-0 md:pointer-events-auto md:translate-y-0`}
          data-name="nav-items"
          data-node-id="42:2084"
        >
          {/* <a
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#EB5200] transition-colors"
          >
            Home
          </a> */}

          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#EB5200] transition-colors"
          >
            Home
          </Link>
          <a
            href="/services"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#EB5200] transition-colors"
          >
            Solutions
          </a>
          <a
            href="/about-us"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#EB5200] transition-colors"
          >
            About us
          </a>
          <a
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#EB5200] transition-colors"
          >
            Contact
          </a>
          <a
            href="/learn"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#EB5200] transition-colors"
          >
            Learn
          </a>
        </nav>

        <div
          className="hidden md:flex gap-4 items-center"
          data-name="cta"
          data-node-id="42:2089"
        >
          <button
            onClick={() => router.push("https://quiz.siahealth.in")}
            className="px-6 py-2 rounded-full text-white font-medium text-sm hover:opacity-90 transition-opacity"
            style={{
              background: "linear-gradient(90deg, #EB5200 0%, #FF7E29 100%)",
            }}
          >
            Take the hormone test
          </button>
        </div>
      </div>

      {/* Mobile CTA */}
      {/* mobile CTA removed from here — moved into nav for combined animation */}
    </div>
  );
}
