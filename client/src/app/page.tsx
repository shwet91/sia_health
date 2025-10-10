import Hero from "@/components/landingPage/Hero";
import Navbar from "@/components/landingPage/Navbar";
import ProblemStatement from "@/components/landingPage/ProblemStatement";
// import Mission from "@/components/landingPage/Mission";
import Testimonials from "@/components/landingPage/Testimonials";
// import Approach from "@/components/landingPage/Approach";
// import LovableProblem from "@/components/landingPage/LovableProblem";
import Team from "@/components/landingPage/Team";
import Services from "@/components/landingPage/Services";
// import WhySia from "@/components/landingPage/WhySia";
import WhatWeDo from "@/components/landingPage/WhatWeDo";
import Blogs from "@/components/landingPage/Blogs";
import FAQ from "@/components/landingPage/FAQ";
import Contact from "@/components/landingPage/Contact";
import Footer from "@/components/landingPage/Footer";
import WhySia2 from "@/components/landingPage/WhySia2";

export default function Home() {
  return (
    <main className="h-[200vh] w-full " style={{ background: "fff2e8" }}>
      <Navbar />
      <div className="w-full">
        <Hero />
        {/* <Mission /> */}
        <Testimonials />
        <WhatWeDo />
        <WhySia2 />
        <Services />
        {/* <Approach /> */}
        {/* <ProblemStatement /> */}
        {/* <LovableProblem /> */}
        <Team />
        <Contact />
        <FAQ />
        <Blogs />
        {/* <WhySia /> */}

        <Footer />
      </div>
    </main>
  );
}
