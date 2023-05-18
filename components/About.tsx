import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
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
      className='flex flex-col pt-20 sm:pt-0 relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 1.5,
        }}
        src="/about_section_picture.jpg"
        alt="about section picture"
        className="-mb-[48px] sm:-mb-20 md:mb-0 flex-shrink-0 w-52 h-52 sm:w-60 sm:h-60 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:h-[600px] xl:w-[500px] borderBlur"
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-2xl sm:text-4xl font-semibold'>Hey, my name's Nico</h4>
        <p className='text-xs sm:text-sm'>
          I'm a fullstack web developer from Eastern Washington with about three years of experience. I enjoy building interesting websites, writing efficient scripts, and learning about new technologies. I also have three years of experience as an R&D technician working with IoT devices. Outside of tech, I enjoy exploring the region and photographing wildlife.
        </p>
      </div>
    </motion.div>
  )
}