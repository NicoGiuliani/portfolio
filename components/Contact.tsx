import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

type Props = {}

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact({ }: Props) {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (formData) => {
    window.location.href = `mailto:ngiuliani507103@hotmail.com?&subject=${formData.subject}&body=${formData.message}`;
  };

  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row justify-evenly mx-auto max-w-7xl px-10 items-center'>
      <h3 className='absolute top-20 uppercase tracking-[10px] pl-[20px] text-gray-500 text-2xl text-center'>
        Contact
      </h3>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className='max-[300px]:w-[260px] flex flex-col mx-auto grayGradient borderBlur p-5 md:p-3 sm:p-10 rounded-lg tabsolute space-y-2 z-20'>
          <div className='flex space-x-2'>
            <input {...register('name')} className="contactInput w-[50%]" type="text" placeholder="Name" />
            <input {...register('email')} className="contactInput w-[50%]" type="email" placeholder="Email" />
          </div>
          <input {...register('subject')} className="contactInput" type="text" placeholder="Subject" />
          <textarea {...register('message')} className="contactInput" placeholder="Message" />
          <button type="submit" className='bg-[#68f0be] rounded-lg text-black font-bold py-5 px-10 text-lg'>Submit</button>
        </form>
      </div>


    </div>
  )
}