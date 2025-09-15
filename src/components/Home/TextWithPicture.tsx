"use client"
import Link from 'next/link';
import React from 'react'
import CustomButton from '../Custom/CustomButton';
import { useTranslation } from 'react-i18next';

const TextWithPicture = () => {
    const { t } = useTranslation();

  return (
    <div className='bg-primary py-10 md:py-0'>
    <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-stretch w-full">
<div className="flex-1 px-4 text-center md:text-start flex flex-col justify-center items-center md:items-start max-w-md">
<div className='text-2xl md:text-3xl'>
      <h2 className=" font-bold text-white leading-relaxed">
            {t('home.26-heading1')}
  </h2>
</div>
    <p className="text-sm text-white font-extralight mt-2 md:mt-4 max-w-[350px]">
            {t('home.26-heading2')}
    </p>
      <div className="relative flex items-centers my-4 md:my-6">
     <CustomButton
              label={t('home.26-icons1')}
              bgColor="bg-gold"
              textColor="text-white"
              hoverBg="bg-gold/80"
  href="/tutoring-plan#book-form"
            />
<img
  src="/arrow-private.svg"
  alt="Arrow"
  className="absolute left-48 bottom-0 -translate-y-1/2 w-10 h-10 "
/>

  </div>
    
<Link href="/under-develop" className="flex items-center text-white underline font-medium hover:text-gray-200 text-sm">
    <span>            {t('home.26-icons2')}</span>
    {/* السهم على اليمين */}
    <svg
      className="w-4 h-4 ml-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
    </svg>
  </Link>
  </div>

<section className="flex-1 relative flex justify-center md:justify-end items-center py-4 md:py-12 ">
<div className="relative z-10 group">
  <img
    src="/image.png"
    alt="Student"
    className="object-contain z-10 relative transition-transform duration-500 ease-out group-hover:rotate-2 "
  />
</div>


    <img
      src="/Layer_1 (3).svg"
      alt="Zaina small"
      className="absolute bottom-[6%] left-[0%] w-8 h-8 z-10 animate-float"
    />
        <img
      src="/Layer_1 (1).svg"
      alt="Zaina small"
      className="absolute top-[8%] -right-[3%] w-10 h-10 z-10 "
    />
  </section>
</section>

    </div>
  );
}

export default TextWithPicture