import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  TbBrandNextjs, 
  TbBrandDjango, 
  TbBrandReact, 
  TbBrandPython, 
  TbHtml, 
  TbBrandJavascript, 
  TbBrandCss3, 
  TbBrandGithub, 
  TbBrandTypescript,
  TbBrandTailwind,
}
 from 'react-icons/tb'
import { SiCisco, SiElm, SiLinux } from 'react-icons/si'

type Props = {
  directionLeft?: boolean,
  skillName: string,
}

function Skill({ skillName }: Props) {
  let skillObject = null;
  switch (skillName) {
    case "django":
      skillObject = <TbBrandDjango className="p-4 w-16 h-16 md:w-20 md:h-20 2xl:w-44 2xl:h-44" />
      break;
    case "react":
      skillObject = <TbBrandReact className="object-cover p-4 w-16 h-16 md:w-20 md:h-20 2xl:w-44 2xl:h-44" />;
      break;
    case "next":
      skillObject = <TbBrandNextjs className="object-cover p-4 w-16 h-16 md:w-20 md:h-20 2xl:w-44 2xl:h-44" />;
      break;
    case "python":
      skillObject = <TbBrandPython className="object-cover p-4 w-16 h-16 md:w-20 md:h-20 2xl:w-44 2xl:h-44" />;
      break;
    case "javascript":
      skillObject = <TbBrandJavascript className="object-cover p-4 w-16 h-16 md:w-20 md:h-20 2xl:w-44 2xl:h-44" />;
      break;
    case "typescript":
      skillObject = <TbBrandTypescript className="object-cover p-4 w-16 h-16 md:w-20 md:h-20 2xl:w-44 2xl:h-44" />;
      break;
    case "html":
      skillObject = <TbHtml className="object-cover p-4 w-16 h-16 md:w-20 md:h-20 2xl:w-44 2xl:h-44" />;
      break;
    case "css":
      skillObject = <TbBrandCss3 className="object-cover p-4 w-16 h-16 md:w-20 md:h-20 2xl:w-44 2xl:h-44 " />;
      break;
    case "git":
      skillObject = <TbBrandGithub className="object-cover p-4 w-16 h-16 md:w-20 md:h-20 2xl:w-44 2xl:h-44" />;
      break;
    case "elm":
      skillObject = <SiElm className="object-cover p-5 2xl:p-8 w-16 h-16 md:w-20 md:h-20 2xl:w-44 2xl:h-44" />;
      break;
    case "linux":
      skillObject = <SiLinux className="object-cover p-4 2xl:p-6 w-16 h-16 md:w-20 md:h-20 2xl:w-44 2xl:h-44" />;
      break;
    case "tailwind":
      skillObject = <TbBrandTailwind className="object-cover p-4 w-16 h-16 md:w-20 md:h-20 2xl:w-44 2xl:h-44" />;
      break;
    default:
      skillObject = "empty";
  }

  return (
    <>
    <div className='group relative flex cursor-pointer hover:scale-105'>
      <motion.span
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 3 }}
        whileInView={{ opacity: 1 }}
        className="borderBlur rounded-full hover:bg-[#292929] object-cover">
        {skillObject}
      </motion.span>
    </div>
    
    </>
  )
}

export default Skill