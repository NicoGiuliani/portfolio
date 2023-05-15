import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({ }: Props) {
  return (
    <header className="sticky top-0 flex flex-start justify-between max-w-7xl mx-auto p-5 z-20">
      <div className='flex flex-row gap-2 items-center'>
        <SocialIcon url="https://www.linkedin.com/in/nico-julian/" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://github.com/NicoGiuliani" fgColor="gray" bgColor="transparent" />
      </div>
      <div className='flex flex-row items-center cursor-pointer'>
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
        <p className='uppercase text-sm text-gray-400'>Contact</p>
      </div>
    </header>
  )
}