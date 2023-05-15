import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

export default function Header({ }: Props) {
  return (
    <header className="sticky top-0 flex flex-start justify-between max-w-7xl mx-auto p-5 z-20">
      <motion.div
        initial={{
          x: -200,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='flex flex-row gap-2 items-center'
      >
        <SocialIcon url="https://www.linkedin.com/in/nico-julian/" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://github.com/NicoGiuliani" fgColor="gray" bgColor="transparent" />
      </motion.div>
      <motion.div
        initial={{
          x: 200,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='flex flex-row items-center cursor-pointer'
      >
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
        <p className='uppercase text-sm text-gray-400 hidden sm:inline-flex'>Contact</p>
      </motion.div>
    </header>
  )
}