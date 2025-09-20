"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="py-0">
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-stretch w-full">
        <div className="flex-1 md:px-4 text-start items-start flex flex-col justify-center w-full md:w-auto">
          <h2 className="text-[28px] md:text-5xl font-bold text-primary  max-w-[350px]">
            <div className="leading-tight">{t("become.24-heading1")}</div>
          </h2>
          <p className="text-sm md:text-lg text-black font-light mt-4 max-w-xs sm:max-w-md lg:max-w-[75%]">
            {t("become.24-heading2")}
          </p>
          <div className="flex flex-col gap-4 mt-6  items-start">
            <div className="flex flex-col gap-4 mt-6 mx-auto md:mx-0 items-start">
              <div className="relative w-fit mx-auto md:mx-0">
                <img
                  src="/arrow-become-2.svg"
                  className="absolute bottom-8 md:bottom-5 -right-14 h-10 animate-wiggle"
                />
                <Link
                  href="/form/tutor"
                  className="bg-primary rounded-3xl px-10 font-semibold py-1.5 text-white hover:bg-gold block"
                >
                  <span>Join thiqa</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section className="flex-1 relative flex justify-center items-center pt-6 md:py-12 overflow-hidden w-full md:w-auto">
          <div className="relative z-10 ">
            <img
              src="/image-become-2.png"
              alt="Student"
              className="object-contain z-10 relative scale-110 translate-x-4 md:translate-x-0"
            />
            <img
              src="gif/isline-unscreen.gif"
              className="absolute top-8 md:top-20 left-12 md:left-20 2xl:left-28 h-32"
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Hero;
