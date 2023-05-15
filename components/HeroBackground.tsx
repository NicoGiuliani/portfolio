import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function HeroBackground({ }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0]
      }}
      transition={{
        duration: 2.5
      }}
      className='relative flex justify-center items-center top-0'
    >
      <div className="absolute border rounded-3xl rotate-45 h-[200px] w-[200px] mt-52 border-[#333] animate-ping" />
      <div className="absolute border rounded-3xl rotate-45 h-[300px] w-[300px] mt-52 border-[#333]" />
      <div className="absolute border rounded-3xl rotate-45 h-[500px] w-[500px] mt-52 border-[#333]" />
      <div className="absolute border rounded-3xl rotate-45 h-[650px] w-[650px] mt-52 border-[#68f0be] animate-pulse" />
      <div className="absolute border rounded-3xl rotate-45 h-[800px] w-[800px] mt-52 border-[#333]" />

    </motion.div>
  )
}
