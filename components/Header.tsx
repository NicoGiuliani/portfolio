import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import { MdOutlineEmail } from "react-icons/md";

type Props = {}

export default function Header({ }: Props) {
  return (
    <header className="sticky top-0 flex flex-start justify-between items-center max-w-7xl mx-auto p-5 z-20">
      <motion.div
        initial={{
          x: -120,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='flex flex-row gap-2 items-center w-[120px]'
      >
        <SocialIcon url="https://www.linkedin.com/in/nico-julian/" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://github.com/NicoGiuliani" fgColor="gray" bgColor="transparent" />
      </motion.div>

      
      <a href="#contact">
        <motion.div
          initial={{
            x: 160,
            opacity: 0
          }}
          whileInView={{
            x: 0,
            opacity: 1
          }}
          transition={{
            duration: 1.5
          }}
          className='flex flex-row space-x-2 items-center cursor-pointer w-[25px] sm:w-[152px] 2xl:w-[159px]'
        >
          <MdOutlineEmail className='w-[25px] h-[25px] text-gray-400'/>
          <p className='uppercase text-sm 2xl:text-base text-gray-400 hidden sm:inline-flex tracking-[10px] ml-[15px]'>Contact</p>
        </motion.div>
      </a>

    </header>
  )
}