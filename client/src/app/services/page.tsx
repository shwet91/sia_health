import React from "react";
import Navbar from "@/components/landingPage/Navbar";
import Footer from "@/components/landingPage/Footer";
import WhatWeDo from "@/components/landingPage/WhatWeDo";
import MoreAboutServices from "@/components/otherPages/MoreAboutServices";
import IntegratedCare from "@/components/otherPages/IntegratedCare";
import Testimonials from "@/components/landingPage/Testimonials";
import Contact from "@/components/landingPage/Contact";

function page() {
  return (
    <div className=" h-[100vh] w-full  " style={{ background: "#fff2e8" }}>
      <Navbar />
      <h1>Solution page</h1>
        <WhatWeDo />
        <MoreAboutServices />
        <IntegratedCare />
        <Testimonials />
        <Contact />
      <Footer />
    </div>
  );
}

export default page;
