import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {}

export default function ExperienceCard({ }: Props) {
  return (
    
    <article className='flex flex-col m-12 borderBlur grayGradient rounded-3xl max-w-7xl mx-auto items-center space-y-7 flex-shrink-0 snap-center bg-[#292929] p-10 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        src="/hedgeapple_logo.jpg"
        alt="HedgeApple logo"
        height="200"
        width="200"
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-left-top'
      />

      <div className='w-[80%] px-0 md:px-10'>

        <h4 className='text-2xl sm:text-4xl font-light'>Software Developer</h4>

        <p className='font-bold text-xl sm:text-2xl mt-1'>HedgeApple</p>

        <div className='flex flex-wrap text-xs sm:text-sm space-x-2 my-2'>
          <p>Python</p>
          <p>Django</p>
          <p>React</p>
          <p>Next.js</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
        </div>

        <p className='uppercase py-2 sm:py-5 text-gray-300'>From February 2023 to April 2023</p>

        <ul className='list-disc space-y-4 ml-5 text-xs sm:text-lg'>
          <li>Created responsive and user-friendly interfaces using React, Next.js, HTML, CSS, and JavaScript</li>
          <li>Developed and maintained front-end and back-end components of web applications</li>
          <li>Collaborated with other developers, designers, and stakeholders to understand project requirements</li>
        </ul>
      </div>

    </article>
  );
}