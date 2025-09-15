"use client"
import React from 'react'
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Steps = () => {
              const { t } = useTranslation();

  return (
  <div className=' py-10 md:py-0 bg-white'>
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-stretch w-full">
<div className="relative md:px-4 text-center md:text-start items-center md:items-start flex flex-col justify-center">
  <img
    src="/line-choose.svg"
    alt="decor"
    className="hidden md:block absolute top-36 end-10 h-52 "
  />

  <h2 className="text-5xl font-bold text-primary leading-tight max-w-sm">
    {t("become.28-heading1")}
  </h2>
  <p className="text-[16px] text-gray1 mt-4 max-w-sm leading-relaxed">
 {t("become.28-heading2")}  </p>

  <div className="flex flex-col gap-4 mt-6 mx-auto md:mx-0 items-start">
    <div className="relative w-fit mx-auto md:mx-0">
      <img src="/gif/istol-unscreen.gif" className="absolute -bottom-8 -left-16 h-24" />
      <Link
  href="/form/tutor"
        className="bg-primary rounded-3xl px-10 font-semibold py-1.5 text-white hover:bg-gold block"
      >
        <span> {t("become.28-icon1")}</span>
      </Link>
    </div>
  </div>
</div>


<section className="relative flex justify-start items-start py-12 overflow-">
  <div className="flex flex-col gap-8">
    {[
      {
        num: "01",
        title: t("become.28-number1-1"),
        desc: t("become.28-number1-2"),
      },
      {
        num: "02",
        title: t("become.28-number2-1"),
        desc: t("become.28-number2-2"),
      },
      {
        num: "03",
        title: t("become.28-number3-1"),
        desc: t("become.28-number3-2"),
      },
      {
        num: "04",
        title: t("become.28-number4-1"),
        desc: t("become.28-number4-2"),
      },
    ].map((step, i) => (

  <div
    key={i}
    className="flex items-center gap-6 group cursor-pointer transition-transform duration-300 hover:translate-x-2"
  >
    {/* الرقم */}
    <div className="size-10 sm:size-14 shrink-0 rounded-full bg-[#E7F1FF] text-primary flex items-center justify-center text-lg sm:text-2xl font-medium leading-none transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white shadow-md">
      {step.num}
    </div>

    {/* النص */}
    <div className="flex flex-col gap-2 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary">
      <h3 className="text-base font-bold text-gray1">{step.title}</h3>
      <p className="text-xs text-gray1 max-w-sm sm:max-w-[420px] group-hover:text-gray-800">
        {step.desc}
      </p>
    </div>
  </div>

    ))}
  </div>
</section>


</section>

    </div> 
     )
}

export default Steps