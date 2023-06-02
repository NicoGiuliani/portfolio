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
      className='flex flex-col h-screen relative text-center justify-evenly mx-auto items-center'>
      <h3 className='absolute top-20 uppercase tracking-[10px] text-gray-500 text-2xl'>Projects</h3>

      <Splide 
        options={{
          rewind: true,
          gap   : '1rem',
        }} 
        aria-label="Work Experience"
        className="borderBlur w-[90%] md:w-[40%] z-20 mt-10 rounded-lg p-5 bg-gradient-to-b from-[#222] to-[#333] max-w-7xl">
          <SplideSlide className='flex flex-col mx-auto text-center justify-start items-center'>
              <a href="https://nicogiuliani.github.io/react-subnet-calculator/">
              <img className="w-[100%] max-w-5xl mx-auto rounded-lg" src="subnet_calculator_preview.png" alt="" />
              </a>
              <h1 className="text-xl font-semibold my-5">Subnet Calculator</h1>
          </SplideSlide>
          <SplideSlide className='mx-auto text-center justify-center items-center'>
              <a href="https://nicogiuliani.github.io/react-converter/">
              <img className="w-[100%] max-w-5xl mx-auto rounded-lg" src="binary_converter_preview.png" alt="" />
              </a>
              <h1 className="text-xl font-semibold my-5">Binary Converter</h1>
          </SplideSlide>
        </Splide>


      <div className="w-full absolute top-[30%] bg-[#68f0be]/50 left-0 h-[300px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects