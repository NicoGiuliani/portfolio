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
      className='flex flex-col pt-20 sm:pt-0 relative h-screen text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center'>
      <h3 className='absolute top-20 uppercase tracking-[10px] text-gray-500 text-2xl'>Skills</h3>
      {/* <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">Hover over a skill to see proficiency</h3> */}
      <div className="grid max-[400px]:grid-cols-3 grid-cols-4 gap-8">
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