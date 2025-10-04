import Hero from "@/components/landingPage/Hero";
import Navbar from "@/components/landingPage/Navbar";

export default function Home() {
  return (
    <main className="h-[200vh] w-full">
      <Navbar />
      <div className="w-full">
        <Hero />
      </div>
    </main>
  );
}
