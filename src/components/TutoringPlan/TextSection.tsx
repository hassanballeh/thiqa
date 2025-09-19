"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Step1 from "../StartNow/Step1";

const TextSection = () => {
  const { t } = useTranslation();
  const [showStartNow, setShowStartNow] = useState(false);

  if (showStartNow) {
    return <Step1 />;
  }
  return (
    <section className="2xl:container 2xl:mx-auto w-full relative bg-primary">
      <div className="md:container md:mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        {/* النص */}
        <div className="flex flex-col justify-center text-start max-w-lg mx-auto md:mx-0 px-4 py-16">
          <h2 className="xl:text-[55px] lg:text-[45px] sm:text-[35px] text-[30px]  font-bold text-white leading-tight mb-4">
            {t("tutoring.7-heading1")}
          </h2>
          <p className="xl:text-[18px] sm:text-[16px] text-[14px] text-white font-extralight  mb-6">
            {t("tutoring.7-heading2")}
          </p>

          <div className="flex gap-4 items-center justify-start">
            <div className="relative flex items-center">
              <button
                onClick={() => setShowStartNow(true)}
                className="bg-gold rounded-3xl px-8 sm:px-10 font-semibold py-1.5 text-white hover:bg-gold xl:text-[18px] sm:text-[16px] text-[14px]"
              >
                <span>{t("tutoring.7-icon")}</span>
              </button>

              <img
                src="/arrow2.svg"
                alt="Arrow"
                className="absolute -right-10 md:-right-16 -top-10 translate-y-1/2 w-9 h-9"
              />
            </div>
          </div>
        </div>

        {/* الصورة */}
        <div className=" w-full h-auto flex justify-center md:block">
          <img
            src="/Image_fx (72)1.png"
            alt="Child tutoring"
            className="w-full md:max-w-none md:w-auto md:h-full object-contain md:object-cover 
                   static md:absolute md:bottom-0 md:right-0"
          />
        </div>
      </div>
    </section>
  );
};

export default TextSection;
