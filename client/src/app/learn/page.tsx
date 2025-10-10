import React from "react";
import Navbar from "@/components/landingPage/Navbar";
import Footer from "@/components/landingPage/Footer";
import LearningArticles from "@/components/otherPages/LearningArticles";

function page() {
  return (
    <div>
      <Navbar />
      <LearningArticles />
      <Footer />
    </div>
  );
}

export default page;
