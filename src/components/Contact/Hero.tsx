"use client";
import React from 'react'
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const {t} = useTranslation();
  return (
  <div className=' py-10 md:py-0'>
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-stretch w-full">
  <div className="flex-1 md:px-4 text-center md:text-start flex flex-col justify-center">
    <h2 className="relative text-5xl font-bold text-primary leading-tight  max-w-xs">
Chat With Us
 <img
          src="/line-acad-support.svg"
          alt="underline"
          className="absolute top-14 left-0 w-full "
        /></h2>

    <p className="text-[15px] text-gray1 mt-10 max-w-[402px]">
{t("contact.1-heading1")}<br/>
{t("contact.1-heading2")}    </p>
   <div className="flex flex-col gap-4 mt-6 mx-auto md:mx-0 items-start">
<div className="flex flex-col gap-4 mt-6 mx-auto md:mx-0 items-start">
    <div className="relative w-fit mx-auto md:mx-0">
      <img     src="/arrow-contact.svg"
 className="absolute bottom-1 -right-20 h-14" />
      <Link
        href=""
        className="bg-primary rounded-3xl px-10 font-semibold py-1.5 text-white hover:bg-gold block"
      >
        <span>Start Live Chat</span>
      </Link>
           <img src="/gif/istol-unscreen.gif" className="absolute -top-7 -left-16 h-24" />
    </div>
  </div>

</div>

  </div>

  <section className="flex-1 relative flex justify-center items-center py- overflow-">
    <div className="relative z-10">
      <img
        src="/contact.png"
        alt="Student"
        className="object-contain z-10 relative"
      />
      <img src='/gif/isto-unscreen.gif' className='absolute top-1/2 md:top-60 -right-6 sm:right-0 h-20 md:h-32'/>
    </div>

  </section>
</section>

    </div>  )
}

export default Hero