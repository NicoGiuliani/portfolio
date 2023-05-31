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
    <article className='flex flex-col m-10 p-5 h-[70%] mx-auto borderBlur grayGradient rounded-3xl items-center space-y-7 flex-shrink-0 snap-center bg-[#292929] cursor-pointer transition-opacity duration-200 overflow-hidden'>
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
        height="200"
        width="200"
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-left-top'
      />

      <div className='w-[80%] px-0 md:px-10'>

        <h4 className='text-2xl sm:text-4xl font-light'>{title}</h4>

        <p className='font-bold text-xl sm:text-2xl mt-1'>{company}</p>

        <div className='flex flex-wrap text-xs sm:text-sm space-x-2 my-2'>
          {skills ? skills.map((skill) => (
            <p>{skill}</p>
          )): null}
        </div>

        <p className='uppercase py-2 sm:py-5 text-gray-300'>From {startDate} to {endDate}</p>

        <ul className='list-disc space-y-4 ml-5 text-xs sm:text-lg'>
          {points ? points.map((point) => (
            <li>{point}</li>
          )): null}
        </ul>
      </div>

    </article>
  );
}