"use client"
import React from 'react'
import { useTranslation } from 'react-i18next';

const Education = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white py-14 px-4">
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-stretch w-full">
        
        {/* العمود الأول - العنوان والنص */}
        <div className="flex flex-col justify-center h-full md:px-4 text-center md:text-start">
          <div className='text-3xl md:text-6xl'>
            <h2 className="max-w-md font-semibold font-roboto text-primary leading-tight ">
            {t("about.6-heading1")}
          </h2>
          </div>
          <div className='text-[18px] 2xl:text-[20px]'>
            <p className="max-w-xl 2xl:max-w-2xl text-gray1 font-light mt-6 2xl:mt-12 leading-relaxed">
            {t("about.6-heading2")}.
          </p>
          </div>
        </div>

        {/* العمود الثاني - الصورة */}
        <section className="relative flex justify-center items-center overflow-hidden h-full">
          <img
            src="/education.png"
            alt="Your Image"
            className="h-full w-full object-cover rounded-[80px] p-10"
          />
        </section>

      </section>
    </div>
  )
}

export default Education
