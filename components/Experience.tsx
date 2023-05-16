'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';

type Props = {};

export default function Experience({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen pt-20 flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>

      <div className='p-10'>
        <Splide 
          options={{
            rewind: true,
            gap   : '1rem',
          }} 
          aria-label="Work Experience">
            <SplideSlide>
              <ExperienceCard />
            </SplideSlide>
            <SplideSlide>
              <ExperienceCard />
            </SplideSlide>
            <SplideSlide>
              <ExperienceCard />
            </SplideSlide>
          </Splide>
      </div>
    </motion.div>
  );
}
