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
  const { register, handleSubmit} = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (formData) => {
    // modify this to send an email directly
    console.log(formData);
  };

  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row justify-evenly mx-auto max-w-7xl px-10 items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-fit mx-auto space-y-2'>
          <div className='flex space-x-2'>
            <input {...register('name')} className="contactInput" type="text" placeholder="Name" />
            <input {...register('email')} className="contactInput" type="email" placeholder="Email"/>
          </div>
          <input {...register('subject')} className="contactInput" type="text" placeholder="Subject" />
          <textarea {...register('message')} className="contactInput" placeholder="Message" />
          <button type="submit" className='bg-[#68f0be] rounded-lg text-black font-bold py-5 px-10 text-lg'>Submit</button>
        </form>
      </div>
    </div>
  )
}