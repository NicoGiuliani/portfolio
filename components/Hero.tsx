import React from 'react'
import HeroBackground from './HeroBackground'
import Image from 'next/image'
import { useTypewriter, Cursor } from 'react-simple-typewriter';

type Props = {}

export default function Hero({ }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Nico Julian",
      "Software Developer",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  
  return (
    <div className="h-[1280px] flex flex-col space-y-5 items-center justify-center text-center overflow-hidden">
      <HeroBackground />
      <Image
        className='relative rounded-3xl !my-[15px] h-44 w-44 mx-auto object-cover borderBlur'
        src="/profile_picture.jpg"
        width="500"
        height="500"
        alt="profile image"
      />
      <div className="z-20 w-[280px] sm:w-[100%]">
        <h1 className='text-xl sm:text-5xl lg:text-6xl font-semibold px-6'>
          <span className="mr-3">
            {text}
          </span>
          <Cursor cursorColor="#68f0be" />
        </h1>

          {/* anchors used as temporary fix for hash links not working in Next 13 */}
          <div className="w-100 gap-1 pt-5">
            <a href="#about">
              <button className="heroButton borderBlur">About</button>
            </a>
            <a href="#experience">
              <button className="heroButton borderBlur">Experience</button>
            </a>
            <a href="#skills">
              <button className="heroButton borderBlur">Skills</button>
            </a>
            <a href="#projects">
              <button className="heroButton borderBlur">Projects</button>
            </a>
          </div>

      </div>
    </div>
  )
}