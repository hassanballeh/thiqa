"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
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
  const [val, setVal] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);

  const handleSliderChange = (e: number) => {
    setVal(e);
    console.log(e);
    setPercentage((Number(e) / 150) * 100);

    if (
      val === 29 ||
      val === 30 ||
      val === 31 ||
      val === 59 ||
      val === 60 ||
      val === 61 ||
      val === 89 ||
      val === 90 ||
      val === 91 ||
      val === 119 ||
      val === 120 ||
      val === 121
    ) {
      setActivePoint(
        val === 29 || val === 30 || val === 31
          ? 30
          : val === 59 || val === 60 || val === 61
          ? 60
          : val === 89 || val === 90 || val === 91
          ? 90
          : val === 119 || val === 120 || val === 121
          ? 120
          : 0
      );
    } else {
      setActivePoint(null);
    }
  };

  return (
    <div className="py-16 pb-28">
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-stretch w-full ">
        <div className="flex-1  text-center md:text-start flex flex-col justify-center max-w-lg col-span-1">
          <div className="text-3xl md:text-5xl">
            <h2 className=" font-bold text-primary leading-snug">
              {t("become.32-heading1")}
            </h2>
          </div>
          <p className="text-[16px] font-light max-w-96">
            {t("become.32-heading2")}
          </p>
        </div>
        <div className=" col-span-2">
          <div className="flex items center justify-between mt-6">
            <div className="relative">
              <h2 className="text-xl  font-bold text-primary leading-snug">
                {t("become.32-heading3")}
              </h2>
              <p className="text-[16px] font-light max-w-96">
                {t("become.32-heading4")}
              </p>
              <img
                src="/time-arrow.svg"
                alt="icon"
                className="w-16 h-16 absolute left-[calc(100%-20px)] top-[40px]"
              />
            </div>

            <div className="flex items-center justify-between gap-6 w-full max-w-md">
              {/* FROM box */}
              <div className="flex-1">
                <p className="text-sm text-gray1 font-bold uppercase">
                  {t("become.32-from")}
                </p>
                <p className="text-xl font-bold text-primary mt-3">
                  {currentFrom}{" "}
                  <span className="font-normal text-xs text-gray1">
                    UAE / MONTH
                  </span>
                </p>
                <p className="text-xs text-gray1">{t("become.32-for")}</p>
              </div>

              <GoArrowRight className="text-primary text-2xl" />

              {/* TO box */}
              <div className="flex-1">
                <p className="text-sm text-gray1 font-bold uppercase">
                  {t("become.32-to")}
                </p>
                <p className="text-xl font-bold text-primary mt-3">
                  {currentTo}{" "}
                  <span className="font-normal text-xs text-gray1">
                    UAE / MONTH
                  </span>
                </p>
                <p className="text-xs text-gray1">{t("become.32-for")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 الخط + الأرقام */}
      <div className="relative w-full max-w-6xl 2xl:max-w-7xl px-16 mx-auto mt-10 shadow-md text-center bg-white pt-6 pb-12 rounded-3xl">
        <h2 className="text-[1rem] font-semibold text-gray1 mb-16">
          {t("become.32-numbers-box")}
        </h2>

        <div className="relative h-3 bg-gray-200 rounded-full">
          {/* Progress line */}
          <input
            type="range"
            className="w-full accent-primary h-3 absolute left-0 border-none outline-none slider "
            style={{
              background: `linear-gradient(to right, #0056B1 0%, #0056B1 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`,
            }}
            min="0"
            max="150"
            step="1"
            value={String(val)}
            onChange={(e) => handleSliderChange(Number(e.target.value))}
          />

          {/* Blue card */}
          {activePoint && (
            <div
              className="absolute top-[calc(100%+22px)] duration-300 delay-200"
              style={{
                left: `${(activePoint / 150) * 100}%`,
                transform: "translateX(-50%)",
              }}
            >
              <div className="relative bg-primary shadow-lg rounded-3xl p-4 md:px-8 md:py-4 text-xs text-white w-max md:w-64">
                You can earn up to
                <p className="text-xl md:text-3xl font-bold mt-3 *:">
                  {data[activePoint].to}
                  <span className="font-normal text-xs"> UAE / MONTH</span>
                </p>
              </div>

              <div
                className="w-0 h-0 
              border-l-[12px] border-l-transparent 
              border-r-[12px] border-r-transparent 
              border-b-[12px] border-primary absolute -top-3 left-[50%] shadow-sm  duration-300 delay-100"
                style={{
                  transform: `${
                    activePoint === 30
                      ? "translateX(-50%)"
                      : activePoint === 60
                      ? "translateX(-36%)"
                      : activePoint === 90
                      ? "translateX(-57%)"
                      : "translateX(-74%)"
                  }`,
                }}
              ></div>
            </div>
          )}
          {[30, 60, 90, 120].map((point) => {
            const percent = (point / 150) * 100;
            const isActive = activePoint === point;

            return (
              <div
                key={point}
                className="absolute flex flex-col items-center cursor-pointer -top-10 "
                style={{
                  left: `${percent}%`,
                  transform: "translateX(-50%)",
                }}
                onClick={() => {
                  setActivePoint(point);
                  console.log(point);

                  setVal(point === 30 ? point - 1 : point);
                  setPercentage((Number(point) / 150) * 100);
                }}
              >
                {/* الرقم */}
                <div
                  className={`text-2xl font-semibold transition-colors duration-200 
              ${isActive ? "text-primary" : "text-gray1"} 
              hover:text-primary`}
                >
                  {point}
                </div>
              </div>
            );
          })}
        </div>

        {/* Blue card */}
        <img
          src="/gif/istola-unscreen.gif"
          alt="Decoration"
          className="absolute -right-8 -bottom-8 h-16"
        />
      </div>
    </div>
  );
};

export default Time;
