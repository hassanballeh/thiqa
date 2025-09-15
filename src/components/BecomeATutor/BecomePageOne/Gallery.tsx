"use client"
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar"; // ✅ لو اللغة عربي نعتبرها RTL

  return (
<div className='py-12 bg-white'>
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-6 py-12">
  <div className="col-span-1 flex flex-col justify-center items-center">
     <div className="flex-1 md:px-4 text-center md:text-start flex flex-col items-center md:items-start justify-center max-w-sm">
    <h2 className="text-3xl font-bold text-primary leading-tight">
{t("become.6-heading1")}     </h2>
    <p className="text-[16px] text-gray1 font-light mt-4 max-w-xs">
{t("become.6-heading2")}      </p>
   <div className="flex flex-col gap-4 mt-6 mx-auto md:mx-0 items-start">

<div className="flex gap-4 mx-auto md:mx-0 relative">
  <Link
  href="/under-develop"
    className="bg-subPrimary rounded-3xl px-10 font-semibold py-1.5 text-white hover:bg-gold/90"
  >
    <span>{t("become.1-icon1")}  </span>
  </Link>
<img
  src="/arrow-lamp.svg"
  alt="Arrow"
  className={`hidden md:block absolute animate-bounce bottom-2 -translate-y-1/2 w-10 h-10 
    ${isRTL ? "-right-10" : "-right-14"}`}
/>
</div>

  {/* <Link href="/under-develop" className="flex items-center text-blue-600 underline font-medium hover:text-blue-800 text-sm">
    <span>{t("become.1-icon2")}  </span>
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
  </Link> */}
</div>

  </div>
  </div>
<div className="col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
  {/* الشبكة الصغيرة */}
  <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
    {[
      { num: 33, text: t("become.6-feautre1") },
      { num: 22, text: t("become.6-feautre2") }
    ].map((item, i) => (
      <div
        key={i}
        className="relative group overflow-hidden rounded-[20px] sm:rounded-[40px]"
      >
        <img
          src={`/gallery/${item.num}.png`}
          alt={`صورة ${i + 1}`}
          className="w-full h-[160px] sm:h-full object-cover transform transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 transition duration-300 group-hover:bg-black/50" />
        <span className="absolute top-4 sm:top-10 left-3 sm:left-6 max-w-[68%] px-2 py-1 rounded-md text-white font-semibold text-base sm:text-lg md:text-xl z-10">
          {item.text}
        </span>
      </div>
    ))}
  </div>

  {/* الصورة الطويلة */}
  <div className="relative row-span-2 col-span-1 group overflow-hidden rounded-[30px] sm:rounded-[60px]">
    <img
      src="/gallery/11.png"
      alt="صورة طويلة"
      className="w-full h-[200px] sm:h-full object-cover transform transition duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/20 transition duration-300 group-hover:bg-black/50" />
    <span className="absolute top-4 sm:top-10 left-3 sm:left-6 max-w-[68%] px-2 py-1 rounded-md text-white font-semibold text-base sm:text-lg md:text-xl z-10">
      {t("become.6-feautre3")}
    </span>
  </div>

  {/* الصورة الكبيرة */}
  <div className="relative col-span-2 group overflow-hidden rounded-[28px] sm:rounded-[48px]">
    <img
      src="/gallery/44.png"
      alt="صورة كبيرة"
      className="w-full h-[180px] sm:h-full object-cover transform transition duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/20 transition duration-300 group-hover:bg-black/50" />
    <span className="absolute top-4 sm:top-10 left-3 sm:left-6 px-2 py-1 rounded-md text-white font-semibold text-base sm:text-lg md:text-xl z-10">
      {t("become.6-feautre4")}
    </span>
  </div>
</div>



</section>
</div>
  )
}

export default Gallery