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
    <div className='h-screen relative overflow-hidden flex flex-col items-center'>
      <h3 className='ml-[10px] absolute top-20 uppercase tracking-[10px] text-gray-500 text-2xl'>
        Contact
      </h3>

      <div className="my-auto top-28 w-[90%] sm:w-[50%] xl:w-[30%]">
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mx-auto grayGradient borderBlur p-3 sm:p-5 rounded-lg space-y-3 mt-5 z-20'>
          <div className='flex space-x-3'>
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