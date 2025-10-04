import Hero from "@/components/landingPage/Hero";
import Navbar from "@/components/landingPage/Navbar";

export default function Home() {
  return (
    <main className="h-[200vh] w-full bg-orange-100">
      <Navbar />
      <div className="w-full">
        <Hero />
      </div>
    </main>
  );
}
