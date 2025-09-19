"use client";
import React from "react";
import { useState } from "react";
import Step1 from "../StartNow/Step1";
import { useTranslation } from "react-i18next";

const LampSection = () => {
  const { t } = useTranslation();
  const [showStartNow, setShowStartNow] = useState(false);

  if (showStartNow) {
    return <Step1 />;
  }
  return (
    <div className=" md:pb-0">
      <section className="flex flex-col md:flex-row w-full md:items-center">
        {/* النصوص */}
        <div className="text-2xl md:text-4xl container md:mx-auto px-10 flex flex-col justify-center text-start  md:max-w-md z-10 mt-6 md:mt-0">
          <h2 className=" font-bold text-primary leading-tight relative inline-block">
            {t("home.49-heading1-1")}
            <br />
            {t("home.49-heading1-2")}
            <img
              src="/line32.svg"
              alt="underline"
              className="mx-auto md:block hidden md:mx-0 mt-2 w-40 md:w-60"
            />
          </h2>

          <div className="relative flex justify-start items-center mt-10">
            <button
              onClick={() => setShowStartNow(true)}
              className="bg-gold rounded-3xl px-8 sm:px-10 font-semibold py-1.5 text-white hover:bg-gold text-base"
            >
              <span>{t("home.start-now")}</span>
            </button>
            <img
              src="/arrow-lamp.svg"
              alt="Arrow"
              className="hidden lg:block absolute  top-0  -translate-y-1/2 left-[42%] w-12 h-12"
            />
          </div>
        </div>

        {/* الصور */}
        <section className="relative w-full md:w-1/2 flex justify-center md:justify-end items-end z-0">
          <img
            src="/image-lamp.png"
            alt="Student"
            className="w-3/4 sm:w-4/5 md:w-full h-auto object-contain"
          />

          <img
            src="/gif/itolamp-unscreen (1).gif"
            alt="Lamp icon"
            className="hidden md:block absolute  top-6 right-10 sm:right-20 md:top-16 md:right-1/2 translate-x-8 md:translate-x-28 w-40 h-40  object-contain z-10"
          />
          <img
            src="/gif/istolain-unscreen.gif"
            alt="Lamp icon"
            className="hidden lg:block absolute top-[56%] left-[30%]   translate-x-8 md:translate-x-20 2xl:translate-x-28 w-20 h-20 md:w-10 md:h-10 object-contain z-10"
          />
          <img
            src="/gif/istoai-unscreen.gif"
            alt="Lamp icon"
            className="hidden lg:block absolute  top-[41%] left-[58%] translate-x-8 md:translate-x-8 w-20 h-20 md:w-16 md:h-16 object-contain z-10"
          />
        </section>
      </section>
    </div>
  );
};

export default LampSection;
