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
      className='flex flex-col pt-20 sm:pt-0 relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
      {/* <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">Hover over a skill to see proficiency</h3> */}
      <div className="grid grid-cols-4 gap-8">
        <Skill directionLeft={true} skillName="django" />
        <Skill directionLeft={true} skillName="react" />
        <Skill directionLeft={true} skillName="next" />
        <Skill directionLeft={true} skillName="python" />

        <Skill directionLeft={false} skillName="javascript" />
        <Skill directionLeft={false} skillName="typescript" />
        <Skill directionLeft={false} skillName="elm" />
        <Skill directionLeft={false} skillName="html" />

        <Skill directionLeft={true} skillName="css" />
        <Skill directionLeft={true} skillName="tailwind" />
        <Skill directionLeft={true} skillName="linux" />
        <Skill directionLeft={true} skillName="git" />
      </div>
    </motion.div>
  )
}

export default Skills