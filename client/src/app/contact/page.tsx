import React from "react";
import Navbar from "@/components/landingPage/Navbar";
import Footer from "@/components/landingPage/Footer";
import Contact from "@/components/landingPage/Contact";
import Approach from "@/components/landingPage/Approach";
import MembersJoining from "@/components/landingPage/MembersJoining";
import Testimonials from "@/components/landingPage/Testimonials";
import WhatWeDo from "@/components/landingPage/WhatWeDo";

function page() {
  return (
    <div>
      <Navbar />
      <WhatWeDo />
      <Contact />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default page;
