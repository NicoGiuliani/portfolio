import React from 'react'
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
    <article className='flex flex-col sm:flex-row mx-3 my-10 p-10 2xl:h-[500px] borderBlur grayGradient rounded-3xl items-center space-y-7 flex-shrink-0 snap-center bg-[#292929] cursor-pointer transition-opacity duration-200'>
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
        
        className='max-[300px]:hidden m-5 2xl:m-10 w-16 h-16 sm:w-20 sm:h-20 md:w-44 md:h-44 2xl:h-60 2xl:w-60 rounded-full md:rounded-lg object-cover object-left-top'
      />
      <div className='!mt-0'>
        <h4 className='max-[300px]:text-base text-2xl 2xl:text-4xl font-light'>{title}</h4>
        <p className='font-bold text-lg sm:text-xl 2xl:text-3xl mt-1'>{company}</p>
        <div className='flex flex-wrap text-xs sm:text-sm 2xl:text-2xl space-x-2 my-2'>
          {skills ? skills.map((skill) => (
            <p key={skill}>{skill}</p>
          )): null}
        </div>
        <p className='uppercase text-sm py-2 text-gray-300 2xl:text-2xl'>From {startDate} to {endDate}</p>
        <ul className='list-disc space-y-2 ml-5 text-xs sm:text-sm 2xl:text-xl'>
          {points ? points.map((point) => (
            <li key={point}>{point}</li>
          )): null}
        </ul>
      </div>
    </article>
  );
}