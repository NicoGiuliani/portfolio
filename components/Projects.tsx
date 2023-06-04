import React from 'react'
import { motion } from 'framer-motion'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import ExperienceCard from './ExperienceCard'

type Props = {}

function Projects({ }: Props) {
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
      className='flex flex-col h-screen relative text-center mx-auto items-center'>
      <h3 className='ml-[10px] absolute top-20 uppercase tracking-[10px] text-gray-500 text-2xl'>Projects</h3>
      <div className='absolute top-24 w-[90%] sm:w-[70%] md:w-[40%] xl:w-[30%]'>
      <Splide 
        options={{
          rewind: true,
          gap   : '1rem',
        }} 
        aria-label="Work Experience"
        className="borderBlur mx-auto my-auto z-20 mt-10 rounded-lg p-5 bg-gradient-to-b from-[#222] to-[#333] max-w-7xl">
          <SplideSlide className='flex flex-col mx-auto text-center justify-start items-center'>
            <div className='h-[80%]'>
              <img className="h-[100%] mx-auto rounded-lg" src="ams_preview.png" alt="Animal Management System homepage" />
            </div>
            <div className="my-2 w-[100%] sm:w-[80%]">
              <h1 className="text-xl font-semibold">Animal Management System</h1>
              <div className='flex my-2 gap-2 justify-around'>
                <a href='https://django-ams-production.up.railway.app/'>View project</a>
                <a href='https://github.com/NicoGiuliani/django-ams/'>View code</a>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide className='flex flex-col mx-auto text-center justify-start items-center'>
            <div className='h-[80%]'>
              <img className="h-[100%]  mx-auto rounded-lg" src="subnet_calculator_preview.png" alt="Subnet Calculator preview" />
            </div>
            <div className="my-2 w-[100%] sm:w-[80%]">
              <h1 className="text-xl font-semibold">Subnet Calculator</h1>
              <div className='flex my-2 gap-2 justify-around'>
                <a href='https://nicogiuliani.github.io/react-subnet-calculator/'>View project</a>
                <a href='https://github.com/NicoGiuliani/react-subnet-calculator'>View code</a>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide className='flex flex-col mx-auto text-center justify-start items-center'>
            <div className='h-[80%]'>
              <img className="h-[100%]  mx-auto rounded-lg" src="binary_converter_preview.png" alt="" />
            </div>
            <div className="my-2 w-[100%] sm:w-[80%]">
              <h1 className="text-xl font-semibold">Binary Converter</h1>
              <div className='flex my-2 gap-2 justify-around'>
                <a href='https://nicogiuliani.github.io/react-converter/'>View project</a>
                <a href='https://github.com/NicoGiuliani/react-converter'>View code</a>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide className='flex flex-col mx-auto text-center justify-start items-center'>
            <div className='h-[80%]'>
              <img className=" h-[100%]  mx-auto rounded-lg" src="great_rgb_color_game_preview.gif" alt="" />
            </div>
            <div className="my-2 w-[100%] sm:w-[80%]">
              <h1 className="text-xl font-semibold">The Great RGB Color Game</h1>
              <div className='flex my-2 gap-2 justify-around'>
                <a href='https://nicogiuliani.github.io/featured_projects/great_rgb_color_game/index.html/'>View project</a>
                <a href='https://github.com/NicoGiuliani/RGB-Color-Guessing-Game/tree/master'>View code</a>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide className='flex flex-col mx-auto text-center justify-start items-center'>
            <div className='h-[80%]'>
              <img className="h-[100%]  mx-auto rounded-lg" src="patatap_clone_preview.gif" alt="" />
            </div>
            <div className="my-2 w-[100%] sm:w-[80%]">
              <h1 className="text-xl font-semibold">Patatap Clone</h1>
              <div className='flex my-2 gap-2 justify-around'>
                <a href='https://nicogiuliani.github.io/featured_projects/patatap_clone/circles.html/'>View project</a>
                <a href='https://github.com/NicoGiuliani/PatatapClone'>View code</a>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide className='flex flex-col mx-auto text-center justify-start items-center'>
            <div className='h-[80%]'>
              <img className="h-[100%]  mx-auto rounded-lg" src="moon_tracker_preview.jpg" alt="" />
            </div>
            <div className="my-2 w-[100%] sm:w-[80%]">
              <h1 className="text-xl font-semibold">Moon Tracker</h1>
              <div className='flex my-2 gap-2 justify-around'>
                <a href='https://nicogiuliani.github.io/featured_projects/moon_tracker/index.html/'>View project</a>
                <a href='https://github.com/NicoGiuliani/MoonTracker'>View code</a>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide className='flex flex-col mx-auto text-center justify-start items-center'>
            <div className='h-[80%]'>
              <img className="h-[100%]  mx-auto rounded-lg" src="startpage_preview.gif" alt="" />
            </div>
            <div className="my-2 w-[100%] sm:w-[80%]">
              <h1 className="text-xl font-semibold">Custom Startpage</h1>
              <div className='flex my-2 gap-2 justify-around'>
                <a href='https://nicogiuliani.github.io/featured_projects/startpage_1/index.html/'>View project</a>
                <a href='https://github.com/NicoGiuliani/StartPage-1'>View code</a>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide className='flex flex-col mx-auto text-center justify-start items-center'>
            <div className='h-[80%]'>
              <img className="h-[100%]  mx-auto rounded-lg" src="connect_four_preview.gif" alt="" />
            </div>
            <div className="my-2 w-[100%] sm:w-[80%]">
              <h1 className="text-xl font-semibold">Connect Four</h1>
              <div className='flex my-2 gap-2 justify-around'>
                <a href='https://nicogiuliani.github.io/featured_projects/connect_four/index.html/'>View project</a>
                <a href='https://github.com/NicoGiuliani/ConnectFour'>View code</a>
              </div>
            </div>
          </SplideSlide>
      </Splide>
    </div>
    <div className="w-full absolute top-[30%] bg-[#68f0be]/50 left-0 h-[300px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects