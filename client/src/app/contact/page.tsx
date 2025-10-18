import React from "react";
import Navbar from "@/components/landingPage/Navbar";
import Footer from "@/components/landingPage/Footer";
import Contact from "@/components/landingPage/Contact";
import Testimonials from "@/components/landingPage/Testimonials";
import Roadmap from "@/components/landingPage/Roadmap";

function page() {
  return (
    <div>
      <Navbar />
      <div className="mb-25 " ></div>
      <Contact />
      <Roadmap />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default page;
