import React from 'react'
import HeroBackground from './HeroBackground'
import Image from 'next/image'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

type Props = {}

export default function Hero({ }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Nico Julian",
      "Software Developer",
      "Web Designer"
    ],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <div className="h-[1280px] flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <HeroBackground />
      <Image
        id="top"
        className='relative rounded-3xl !my-[15px] h-44 w-44 mx-auto object-cover borderBlur'
        src="/profile_picture.jpg"
        width="500"
        height="500"
        alt="profile image"
      />
      {/* <ProfilePicture /> */}
      <div className="z-20">
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className="mr-3">
            {text}
          </span>
          <Cursor cursorColor="#68f0be" />
        </h1>

        <BrowserRouter>
          <div className="pt-5">
            <HashLink smooth to="#about">
              <button className="heroButton">About</button>
            </HashLink>
            <HashLink smooth to="#experience">
              <button className="heroButton">Experience</button>
            </HashLink>
            <HashLink smooth to="#skills">
              <button className="heroButton">Skills</button>
            </HashLink>
            <HashLink smooth to="#projects">
              <button className="heroButton">Projects</button>
            </HashLink>
          </div>
        </BrowserRouter>

      </div>
    </div>
  )
}