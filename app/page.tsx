'use client';

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { BrowserRouter } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { GiRattlesnake } from "react-icons/gi";


export default function Home() {
  return (
    <main className="bg-[#222] h-screen z-0 min-w-[300px] text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#68f0be]">
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

      <BrowserRouter>
        <footer className="sticky bottom-5 w-full">
          <div className="flex items-center justify-center">
            <HashLink smooth to="#top">
              <GiRattlesnake className="h-12 w-12 text-gray-400 hover:text-[#68f0be]" />
            </HashLink>
          </div>
        </footer>
      </BrowserRouter>

    </main>
  )
}
