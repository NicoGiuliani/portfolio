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

function Skill({ directionLeft, skillName }: Props) {
  let skillObject = null;
  switch (skillName) {
    case "django":
      skillObject = <TbBrandDjango className="p-5 object-cover w-24 h-24 xl:w-32 xl:h-32" />;
      break;
    case "react":
      skillObject = <TbBrandReact className="p-5 object-cover w-24 h-24 xl:w-32 xl:h-32" />;
      break;
    case "next":
      skillObject = <TbBrandNextjs className="p-5 object-cover w-24 h-24 xl:w-32 xl:h-32" />;
      break;
    case "python":
      skillObject = <TbBrandPython className="p-5 object-cover w-24 h-24 xl:w-32 xl:h-32" />;
      break;
    case "javascript":
      skillObject = <TbBrandJavascript className="p-5 object-cover w-24 h-24 xl:w-32 xl:h-32" />;
      break;
    case "typescript":
      skillObject = <TbBrandTypescript className="p-5 object-cover w-24 h-24 xl:w-32 xl:h-32" />;
      break;
    case "html":
      skillObject = <TbHtml className="p-5 object-cover w-24 h-24 xl:w-32 xl:h-32" />;
      break;
    case "css":
      skillObject = <TbBrandCss3 className="p-5 object-cover w-24 h-24 xl:w-32 xl:h-32" />;
      break;
    case "ccna":
      skillObject = <SiCisco className="p-5 object-cover w-24 h-24 xl:w-32 xl:h-32" />;
      break;
    case "git":
      skillObject = <TbBrandGithub className="p-5 object-cover w-24 h-24 xl:w-32 xl:h-32" />;
      break;
    case "elm":
      skillObject = <SiElm className="p-8 object-cover w-24 h-24 xl:w-32 xl:h-32" />;
      break;
    case "linux":
      skillObject = <SiLinux className="p-8 object-cover w-24 h-24 xl:w-32 xl:h-32" />;
      break;
    case "tailwind":
      skillObject = <TbBrandTailwind className="p-8 object-cover w-24 h-24 xl:w-32 xl:h-32" />;
      break;
    default:
      skillObject = "empty";
  }

  return (
    <>
    <div className='group relative flex cursor-pointer hover:scale-105'>
      <motion.span
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="borderBlur rounded-full hover:bg-[#292929] object-cover w-24 h-24 xl:w-32 xl:h-32">
        {skillObject}
      </motion.span>
    </div>
    
    </>
  )
}

export default Skill