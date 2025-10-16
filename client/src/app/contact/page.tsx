import React from "react";
import Navbar from "@/components/landingPage/Navbar";
import Footer from "@/components/landingPage/Footer";
import Contact from "@/components/landingPage/Contact";
import Approach from "@/components/landingPage/Approach";
import MembersJoining from "@/components/landingPage/MembersJoining";
import Testimonials from "@/components/landingPage/Testimonials";
import WhatWeDo from "@/components/landingPage/WhatWeDo";
import Roadmap from "@/components/landingPage/Roadmap";

function page() {
  return (
    <div>
      <Navbar />
      {/* <WhatWeDo /> */}
      <div className="mb-25 " ></div>
      <Contact />
      <Roadmap />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default page;
