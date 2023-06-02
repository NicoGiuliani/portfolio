import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  title: string,
  companyImage: string,
  company: string,
  skills: string[],
  startDate: string,
  endDate: string,
  points: string[],
}

export default function ExperienceCard({title, companyImage, company, skills, startDate, endDate, points }: Props) {
  return (
    <article className='flex flex-col min-h-[320px] sm:flex-row mx-3 my-10 p-5 pt-0 borderBlur grayGradient rounded-3xl items-center space-y-7 flex-shrink-0 snap-center bg-[#292929] cursor-pointer transition-opacity duration-200'>
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
        src={companyImage}
        alt="HedgeApple logo"
        
        className='max-[300px]:hidden m-5 w-16 h-16 sm:w-20 sm:h-20 md:w-44 md:h-44 rounded-full md:rounded-lg object-cover object-left-top'
      />

      <div className=''>

        <h4 className='max-[300px]:text-base text-2xl font-light'>{title}</h4>

        <p className='font-bold text-lg sm:text-xl mt-1'>{company}</p>

        <div className='flex flex-wrap text-xs sm:text-sm space-x-2 my-2'>
          {skills ? skills.map((skill) => (
            <p>{skill}</p>
          )): null}
        </div>

        <p className='uppercase text-sm py-2 text-gray-300'>From {startDate} to {endDate}</p>

        <ul className='list-disc space-y-2 ml-5 text-xs sm:text-sm'>
          {points ? points.map((point) => (
            <li>{point}</li>
          )): null}
        </ul>
      </div>

    </article>
  );
}