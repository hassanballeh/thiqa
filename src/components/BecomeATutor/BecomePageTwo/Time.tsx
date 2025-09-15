"use client"
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { GoArrowRight } from "react-icons/go";

const Time = () => {
  const { t } = useTranslation();

  // 🟢 حالة لحفظ الرقم النشط
  const [activePoint, setActivePoint] = useState<number | null>(null);

  // 🟢 جدول القيم لكل رقم
  const data: Record<number, { from: string; to: string }> = {
    30: { from: "2,250", to: "3,750" },
    60: { from: "4,500", to: "7,500" },
    90: { from: "6,750", to: "11,250" },
    120: { from: "9,000", to: "15,000" },
  };

  // 🟢 القيم الحالية بناءً على الرقم المختار (افتراضي = صفر)
  const currentFrom = activePoint ? data[activePoint].from : "0";
  const currentTo = activePoint ? data[activePoint].to : "0";

  return (
    <div className='py-16 pb-28'>
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-stretch w-full">
        <div className="flex-1 md:px-4 text-center md:text-start flex flex-col justify-center max-w-lg">
<div className='text-3xl md:text-5xl'>
            <h2 className=" font-bold text-primary leading-snug">
            {t("become.32-heading1")}
          </h2>
</div>
          <p className="text-[16px] font-light max-w-96">
            {t("become.32-heading2")}
          </p>
          <h2 className="text-xl mt-6 font-bold text-primary leading-snug">
            {t("become.32-heading3")}
          </h2>
          <div className="flex items-start gap- ">
            <p className="text-[16px] font-light max-w-96">
{t("become.32-heading4")}
            </p>
            <img src="/time-arrow.svg" alt="icon" className="w-16 h-16 " />
          </div>
        </div>

        {/* 🟢 صندوق الـ FROM / TO */}
        <section className="flex flex-col justify-end items-center mt- gap-6">
          <div className="flex items-center justify-between gap-6 w-full max-w-md">
            {/* FROM box */}
            <div className="flex-1">
              <p className="text-sm text-gray1 font-bold uppercase">{t("become.32-from")}</p>
              <p className="text-xl font-bold text-primary mt-3">
                {currentFrom} <span className='font-normal text-xs text-gray1'>UAE / MONTH</span>
              </p>
              <p className="text-xs text-gray1">{t("become.32-for")}</p>
            </div>

            <GoArrowRight className='text-primary text-2xl' />

            {/* TO box */}
            <div className="flex-1">
              <p className="text-sm text-gray1 font-bold uppercase">{t("become.32-to")}</p>
              <p className="text-xl font-bold text-primary mt-3">
                {currentTo} <span className='font-normal text-xs text-gray1'>UAE / MONTH</span>
              </p>
              <p className="text-xs text-gray1">{t("become.32-for")}</p>
            </div>
          </div>
        </section>
      </section>

      {/* 🟢 الخط + الأرقام */}
  <div className="relative w-full max-w-6xl 2xl:max-w-7xl px-16 mx-auto mt-10 shadow-md text-center bg-white py-6 rounded-3xl">
  <h2 className="text-[1rem] font-semibold text-gray1 mb-16">
    {t("become.32-numbers-box")}
  </h2>

  <div className="relative h-3 bg-gray-200 rounded-full">
    {/* Progress line */}
    <div
      className="absolute h-3 bg-primary rounded-l-full transition-all duration-700 ease-out"
      style={{ width: `${activePoint ? (activePoint / 150) * 100 : 0}%` }}
    ></div>

    {[30, 60, 90, 120].map((point) => {
      const percentage = (point / 150) * 100;
      const isActive = activePoint === point;

      return (
        <div
          key={point}
          className="absolute flex flex-col items-center cursor-pointer -top-10"
          style={{ left: `${percentage}%`, transform: "translateX(-50%)" }}
          onClick={() => setActivePoint(point)}
        >
          {/* الرقم */}
          <div
            className={`text-2xl font-semibold transition-colors duration-200 
              ${isActive ? "text-primary" : "text-gray1"} 
              hover:text-primary`}
          >
            {point}
          </div>

          {/* النقطة أسفل الرقم */}
          <div
            className={`w-6 h-6 rounded-full  transition-all duration-200 
              ${isActive ? "bg-primary shadow-md" : "bg-gray-"} 
              hover:bg-primary hover:scale-110`}
          ></div>
        </div>
      );
    })}
  </div>

  {/* Blue card */}
  {activePoint && (
    <div className="relative mt-4 mb-10">
      <div
        className="absolute"
        style={{
          left: `${(activePoint / 150) * 100}%`,
          transform: "translateX(-47%)",
        }}
      >
        <div className="relative bg-primary shadow-lg rounded-3xl p-4 md:px-8 md:py-4 text-xs text-white w-max">
          You can earn up to
          <p className="text-xl md:text-3xl font-bold mt-3">
            {data[activePoint].to} <span className="font-normal text-xs">UAE / MONTH</span>
          </p>
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-primary shadow-sm"></div>
        </div>
      </div>
    </div>
  )}

  <img
    src="/gif/istola-unscreen.gif"
    alt="Decoration"
    className="absolute -right-8 -bottom-8 h-16"
  />
</div>

    </div>
  );
}

export default Time;
