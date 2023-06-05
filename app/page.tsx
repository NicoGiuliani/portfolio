'use client';

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Suspense } from "react";
import { GiRattlesnake } from "react-icons/gi";


export default function Home() {
  return (
    <Suspense fallback={<p>This</p>}>
    <main className="bg-[#222] h-screen z-0 min-w-[280px] text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#68f0be]">
      <span id="top"/>
      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-center">
        <Skills />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      {/* <footer className="overflow-x-hidden footer-element">
        <div className="flex">
          <a href="#top">
            <GiRattlesnake className="h-12 w-12 text-gray-400 hover:text-[#68f0be]" />
          </a>
        </div>
      </footer> */}

      <footer  className="sticky bottom-10 flex flex-start justify-between items-center max-w-7xl mx-auto p-5 z-20">
        <div className="ml-auto">
          <a href="#top">
            <GiRattlesnake className="h-12 w-12 text-gray-400 hover:text-[#68f0be]" />
          </a>
        </div>
      </footer>

    </main>
    </Suspense>
  )
}
