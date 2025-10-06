import Hero from "@/components/landingPage/Hero";
import Navbar from "@/components/landingPage/Navbar";
import ProblemStatement from "@/components/landingPage/ProblemStatement";
import Mission from "@/components/landingPage/Mission";

export default function Home() {
  return (
    <main className="h-[200vh] w-full " style={{ background: "fff2e8" }}>
      <Navbar />
      <div className="w-full">
        <Hero />
        <ProblemStatement />
        <Mission />
      </div>
    </main>
  );
}
