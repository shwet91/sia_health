import Hero from "@/components/landingPage/Hero";
import Navbar from "@/components/landingPage/Navbar";
import Testimonials from "@/components/landingPage/Testimonials";
import Approach from "@/components/landingPage/Approach";
import Team from "@/components/landingPage/Team";
import Services from "@/components/landingPage/Services";
import WhatWeDo from "@/components/landingPage/WhatWeDo";
import Blogs from "@/components/landingPage/Blogs";
import FAQ from "@/components/landingPage/FAQ";
import Contact from "@/components/landingPage/Contact";
import Footer from "@/components/landingPage/Footer";
import WhySia2 from "@/components/landingPage/WhySia2";
// import MembersJoining from "@/components/landingPage/MembersJoining";
import Video from "@/components/landingPage/Video";

export default function Home() {
  return (
    <main className="h-[200vh] w-full " style={{ background: "fff2e8" }}>
      <Navbar />
      <div className="w-full">
        <Hero />
        <Testimonials />
        <Approach />
        <WhatWeDo />
        <WhySia2 />
        {/* <MembersJoining /> */}
        <Services />
        <Team />
        <Contact />
        <Video />
        <FAQ />
        <Blogs />
        <Footer />
      </div>
    </main>
  );
}
