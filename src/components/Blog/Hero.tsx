"use client"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link';
import React from 'react'
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();
  
  return (
<div className='py-12 bg-white'>
    <h2 className="container mx-auto mt-4 text-5xl font-bold text-primary leading-tight">
{t("blog.1-heading1")}   </h2>
    <p className="text-xs text-gray1 font-light mt-4 max-w- container mx-auto">
{t("blog.1-heading2")}    </p>

    <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
<div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* Big wide image goes first */}
<div className="relative col-span-2 group overflow-hidden rounded-[40px] ">
  <img
    src="/blog-details.png"
    alt="صورة كبيرة"
    className="w-full h-full object-cover transform transition duration-300 scale-105 group-hover:scale-110"
  />
  <div className="absolute inset-0 bg-black/30 transition duration-300 group-hover:bg-black/50" />

<div className="absolute bottom-12 left-0 right-0 px-10 flex items-center justify-between gap-2 z-10">
  <span className="text-white font-semibold text-2xl max-w-lg">
    {t("blog.1-blog1")}  
  </span>

  <button className="flex items-center gap-2 underline text-white md:text-xl font-medium  py-2 rounded-full transition">
   {t("blog.read-more")}
    <ArrowRight size={18} />
  </button>
</div>

</div>


  {/* Tall image stays on the right side */}
  <Link
  href="detail-blog/listening-and-speaking-skills-grade-8" className="relative row-span-2 col-span-1 group overflow-hidden rounded-[50px]">
  <img
    src="/blog-tall.png"
    alt="صورة طويلة"
    className="w-full h-full object-cover transform transition duration-300 group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-black/20 transition duration-300 group-hover:bg-black/50" />

  {/* Wrapper for span + button */}
  <div className="absolute bottom-12 px-10 flex flex-col items-end gap-4 z-10">
    <span className="text-white font-semibold text-2xl max-w-xl">
      Listening and Speaking Skills – Grade 8
    </span>

    <button className="underline w-fit flex items-center gap-2 text-xl text-white  py-2 rounded-full font-medium  transition">
     {t("blog.read-more")}
      <ArrowRight size={18} />
    </button>
  </div>
</Link>


  {/* Two small images go below */}
<div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
  {/* Left card - bigger (2 columns wide) */}
  <div className="col-span-2 flex flex-col gap-3 items-start justify-center rounded-3xl px-10 py-8 text-white bg-primary">
    <img src="/plane.svg" alt="Icon" className="w-8 h-8" />
    <p className="text-xl font-bold max-w-md">{t("blog.1-blue-heading1")}  </p>
    <p className="text-sm font-light max-w-md">
{t("blog.1-blue-heading2")}      </p>
  </div>

  {/* Right card - smaller (1 column wide) */}
  <div className="col-span-2 md:col-span-1 flex flex-col gap-3 items-start justify-center rounded-3xl px-10 py-8 text-gray1 bg-[#F0F5F9]">
    <span className="text-3xl font-extrabold text-primary">50+</span>
    <p className="text-lg font-bold">{t("blog.1-number-heading1")}  </p>
    <p className="text-sm font-light">
{t("blog.1-number-heading2")}      </p>
  </div>
</div>

</div>



</section>
</div>  )
}

export default Hero