"use client"
import React from 'react'
import CustomButton from '../Custom/CustomButton'
import { useTranslation } from 'react-i18next';

const SuccessStories = () => {
            const { t } = useTranslation();

  return (
 <div className='bg-white py-16'>
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-stretch w-full gap-6">
<div className=" flex-1 md:px-4 text-center md:text-start flex flex-col justify-center max-w-lg">
<div className='text-3xl md:text-6xl'>
    <h2 className=" font-bold text-primary leading-tight font-roboto">
    {t("tutoring.16-heading1")} 
  </h2>
</div>

  <p className="max-w-xs md:max-w-lg mx-auto text-[15px] text-gray1 font-light mt-4">
{t("tutoring.16-heading2")} 
</p>
  <div className="mt-6">
    <CustomButton
      label={t("tutoring.16-icon")} 
      bgColor="bg-primary"
      textColor="text-white"
      hoverBg="bg-primary/70"
  href="/tutoring-plan#book-form"
      // onClick={() => setActiveTab("video")}
    />
  </div>
</div>
<div className="relative w-full overflow-hidden ">
  <img
    src="./slider.png"
    alt="Slider"
    className="w-full h-full object-cover "
  />
  <div className="absolute inset-0 bg-black/40"></div> {/* Overlay نصف شفاف */}

  {/* صورة الفيديو في الوسط */}
  <a
href="https://youtube.com/shorts/o2bhXHBgYR0"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16"
  >
    <img
      src="/play-video.svg" // ضع هنا صورة مؤشر التشغيل
      alt="Play Video"
      className="w-full h-full object-contain "
    />
  </a>
</div>

</section>

    </div>  )
}

export default SuccessStories