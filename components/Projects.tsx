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
        className="borderBlur max-[450px]:w-[80%] w-[70%] xl:w-[45%] z-20 mt-10 rounded-lg p-5 bg-gradient-to-b from-[#222] to-[#333] max-w-7xl">
          <SplideSlide className='flex flex-col mx-auto text-center justify-start items-center'>
            <div className='h-[80%]'>
              <a href="https://github.com/NicoGiuliani/django-ams/">
                <img className="h-[100%] mx-auto rounded-lg" src="ams_preview.png" alt="" />
              </a>
            </div>
            <div className="my-2 cont">
              <h1 className="text-xl font-semibold">Animal Management System</h1>
              <div className='flex my-2 gap-2 justify-around'>
                <a href='https://github.com/NicoGiuliani/django-ams/'>View project</a>
                <a href='https://github.com/NicoGiuliani/django-ams/'>View code</a>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide className='flex flex-col mx-auto text-center justify-start items-center'>
            <div className='h-[80%]'>
              <a href="https://nicogiuliani.github.io/react-subnet-calculator/">
                <img className="h-[100%]  mx-auto rounded-lg" src="subnet_calculator_preview.png" alt="" />
              </a>
            </div>
            <div className="my-2">
              <h1 className="text-xl font-semibold">Subnet Calculator</h1>
              <div className='flex my-2 gap-2 justify-around'>
                <a href='https://github.com/NicoGiuliani/django-ams/'>View project</a>
                <a href='https://github.com/NicoGiuliani/django-ams/'>View code</a>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide className='flex flex-col mx-auto text-center justify-start items-center'>
            <div className='h-[80%]'>
              <a href="https://nicogiuliani.github.io/react-converter/">
                <img className="h-[100%]  mx-auto rounded-lg" src="binary_converter_preview.png" alt="" />
              </a>
            </div>
            <div className="my-2">
              <h1 className="text-xl font-semibold">Binary Converter</h1>
              <div className='flex my-2 gap-2 justify-around'>
                <a href='https://github.com/NicoGiuliani/django-ams/'>View project</a>
                <a href='https://github.com/NicoGiuliani/django-ams/'>View code</a>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide className='flex flex-col mx-auto text-center justify-start items-center'>
            <div className='h-[80%]'>
              <a href="https://nicogiuliani.github.io/featured_projects/great_rgb_color_game/index.html/">
                <img className=" h-[100%]  mx-auto rounded-lg" src="great_rgb_color_game_preview.gif" alt="" />
              </a>
            </div>
            <div className="my-2">
              <h1 className="text-xl font-semibold">The Great RGB Color Game</h1>
              <div className='flex my-2 gap-2 justify-around'>
                <a href='https://github.com/NicoGiuliani/django-ams/'>View project</a>
                <a href='https://github.com/NicoGiuliani/django-ams/'>View code</a>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide className='flex flex-col mx-auto text-center justify-start items-center'>
            <div className='h-[80%]'>
              <a href="https://nicogiuliani.github.io/featured_projects/patatap_clone/circles.html/">
                <img className="h-[100%]  mx-auto rounded-lg" src="patatap_clone_preview.gif" alt="" />
              </a>
            </div>
            <div className="my-2">
              <h1 className="text-xl font-semibold">Patatap Clone</h1>
              <div className='flex my-2 gap-2 justify-around'>
                <a href='https://github.com/NicoGiuliani/django-ams/'>View project</a>
                <a href='https://github.com/NicoGiuliani/django-ams/'>View code</a>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide className='flex flex-col mx-auto text-center justify-start items-center'>
            <div className='h-[80%]'>
              <a href="https://nicogiuliani.github.io/featured_projects/moon_tracker/index.html/">
                <img className="h-[100%]  mx-auto rounded-lg" src="moon_tracker_preview.jpg" alt="" />
              </a>
            </div>
            <div className="my-2">
              <h1 className="text-xl font-semibold">Moon Tracker</h1>
              <div className='flex my-2 gap-2 justify-around'>
                <a href='https://github.com/NicoGiuliani/django-ams/'>View project</a>
                <a href='https://github.com/NicoGiuliani/django-ams/'>View code</a>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide className='flex flex-col mx-auto text-center justify-start items-center'>
            <div className='h-[80%]'>
              <a href="https://nicogiuliani.github.io/featured_projects/startpage_1/index.html/">
                <img className="h-[100%]  mx-auto rounded-lg" src="startpage_preview.gif" alt="" />
              </a>
            </div>
            <div className="my-2">
              <h1 className="text-xl font-semibold">Custom Startpage</h1>
              <div className='flex my-2 gap-2 justify-around'>
                <a href='https://github.com/NicoGiuliani/django-ams/'>View project</a>
                <a href='https://github.com/NicoGiuliani/django-ams/'>View code</a>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide className='flex flex-col mx-auto text-center justify-start items-center'>
            <div className='h-[80%]'>
              <a href="https://nicogiuliani.github.io/featured_projects/connect_four/index.html/">
                <img className="h-[100%]  mx-auto rounded-lg" src="connect_four_preview.gif" alt="" />
              </a>
            </div>
            <div className="my-2">
              <h1 className="text-xl font-semibold">Connect Four</h1>
              <div className='flex my-2 gap-2 justify-around'>
                <a href='https://github.com/NicoGiuliani/django-ams/'>View project</a>
                <a href='https://github.com/NicoGiuliani/django-ams/'>View code</a>
              </div>
            </div>
          </SplideSlide>
        </Splide>


      <div className="w-full absolute top-[30%] bg-[#68f0be]/50 left-0 h-[300px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects