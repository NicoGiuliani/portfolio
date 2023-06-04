import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import Modal from './Modal'

type Props = {}

function Skills({ }: Props) {
  const [show, setShow] = useState(false);

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
      className='flex flex-col pt-20 sm:pt-0 relative h-screen text-center max-w-7xl mx-auto items-center'>
      <h3 className='ml-[10px] absolute top-20 uppercase tracking-[10px] text-gray-500 text-2xl'>Skills</h3>
      <div className="absolute grid top-36 max-[400px]:grid-cols-3 grid-cols-4 gap-8 mx-auto">
        <Skill skillName="django" />
        <Skill skillName="react" />
        <Skill skillName="next" />
        <Skill skillName="python" />

        <Skill skillName="javascript" />
        <Skill skillName="typescript" />
        <Skill skillName="elm" />
        <Skill skillName="html" />

        <Skill skillName="css" />
        <Skill skillName="tailwind" />
        <Skill skillName="linux" />
        <Skill skillName="git" />
      </div>
    </motion.div>
  )
}

export default Skills