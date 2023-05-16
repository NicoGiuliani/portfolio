'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import ExperienceCard from './ExperienceCard'

type Props = {}

function Projects({ }: Props) {
  const projects = [1, 2, 3, 4, 5]

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true
      }}
      transition={{
        duration: 1.5,
      }}
      className='flex flex-col pt-20 sm:pt-0 relative h-screen text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      {/* <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, index) => (
          <div className='w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <img width="80px" src="/snake.png" alt="snake" />
            <div>
              <h4>Case Study {index + 1} of {projects.length}</h4>
            </div>
          </div>
        ))}
      </div> */}

      <div className='p-10 z-20'>
        <Splide 
          options={{
            rewind: true,
            gap   : '1rem',
          }} 
          aria-label="Work Experience">
            <SplideSlide>
              <p className='h-[50px] w-[100px] bg-orange-300/30 text-center justify-center items-center align-middle my-0 mx-auto'>Something</p>
            </SplideSlide>
            <SplideSlide>
              <p className='h-[50px] w-[100px] bg-orange-300/30 text-center justify-center items-center align-middle my-0 mx-auto'>Something</p>
            </SplideSlide>
            <SplideSlide>
              <p className='h-[50px] w-[100px] bg-orange-300/30 text-center justify-center items-center align-middle my-0 mx-auto'>Something</p>
            </SplideSlide>
          </Splide>
      </div>


      <div className="w-full absolute top-[30%] bg-[#68f0be]/50 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects