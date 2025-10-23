import React from "react";
import Navbar from "@/components/landingPage/Navbar";
import Footer from "@/components/landingPage/Footer";
// import ResponseHeader from "@/components/otherPages/ResponseHeader";
// import WhatWeDo from "@/components/landingPage/WhatWeDo";
// import Contact from "@/components/landingPage/Contact";
// import FAQ from "@/components/landingPage/FAQ";
import Response from "@/components/otherPages/Resonse";

function Page() {
  return (
    <div>
      <Navbar />
      <main className="mt-15">
        {/* <ResponseHeader /> */}
        {/* <WhatWeDo /> */}
        {/* <Contact /> */}
        {/* <FAQ /> */}
        <Response />
      </main>
      <Footer />
    </div>
  );
}

export default Page;
