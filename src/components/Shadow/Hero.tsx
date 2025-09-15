"use client"
import React from 'react'
import CustomButton from '../Custom/CustomButton'
import { FaStar } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Hero = () => {
            const { t } = useTranslation();
  return (
 <div className='bg-white py-14 px-4'>
    <section className="container mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 place-items-center md:place-items-stretch w-full">
<div className='flex-1 flex flex-col justify-center items-start gap-4'>
     <CustomButton
          label=  {t("shadow.1-icon")}
          bgColor= "bg-[#F8B21F]"
          textColor= "text-white"
          hoverBg="bg-[#e19f1a]"
  href="/shadow-teacher#shadow-form"
        />
      <div className="   text-center md:text-start  max-w-lg">

<h2 className="text-3xl font-bold text-primary leading-snug">
  {t("shadow.1-heading1-1")}      {t("shadow.1-heading1-2")}

</h2>
   <p className="max-w-md text-[15px] text-gray1 font-light mt-4 leading-relaxed">
  {t("shadow.1-heading2")}  </p>
 </div>
<div
  className=" w-full h-[330px] shadow-sm rounded-3xl text-gray1 px-10 py-10 flex flex-col justify-center relative bg-cover bg-center"
  style={{ backgroundImage: "url('/shadow-1.png')" }}
>
  {/* محتوى داخلي */}
</div>

</div>

<section className="flex w-full gap-2 h-[550px]">
  <div className="flex-1 flex flex-col gap-4">
    <div className="flex-[2] rounded-3xl  text-gray1 bg-blue_gray flex flex-col gap-6 items-start justify-center px-8 py-4">
      <div>
        <span className="text-6xl font-bold text-primary">54+</span>
      <p className="text-lg font-bold max-w-xs">{t("shadow.1-number-1")}</p>
      </div>
      <p className="text-sm max-w-48">{t("shadow.1-number-2")}
      </p>
    </div>

<div className="flex-[1] rounded-3xl bg-primary text-white flex flex-col gap-4 items-start justify-center px-8 py-6">
  <div className="flex items-center gap-2">
    <div className="w-10 h-10 rounded-full bg-gray-300" />
    
<div>
        <span className=" font-light">{t("shadow.1-feedback-name")}</span>
<div className="flex gap-0.5 ">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-gold" />
            ))}
          </div>
  </div>  </div>

  <p className="text-sm font-extralight max-w-48 leading-relaxed">
{t("shadow.1-feedback")}  </p>
</div>

  </div>

<div className="flex-1 flex flex-col gap-4">
  <div
    className="relative flex-[2] rounded-3xl bg-cover bg-center"
    style={{ backgroundImage: "url('/shadow-2.png')" }}
  >
    <img
      src="/shadow1.svg"
      alt="right"
      className="absolute -right-8 -top-4 2xl:-top-10 w-8 h-8 md:w-12 md:h-12 2xl:h-20"
    />
  </div>
</div>

</section>


</section>
</div>  )
}

export default Hero