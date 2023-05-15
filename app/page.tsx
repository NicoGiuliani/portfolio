'use client';

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DesertScene from "@/components/Spline";

export default function Home() {
  return (
    <main className="bg-[#222] h-screen z-0 min-w-[300px] text-white snap-y snap-mandatory overflow-scroll">
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* about */}

    </main>
  )
}
