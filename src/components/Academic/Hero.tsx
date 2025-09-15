"use client";
import React from "react";
import CustomButton from "../Custom/CustomButton";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const data = [
    {
      img: "/consulting 1.svg",
      title: t("academic.5-service1-1"),
      description: t("academic.5-service1-2"),
    },
    {
      img: "/feedback 1.svg",
      title: t("academic.5-service2-1"),
      description: t("academic.5-service2-2"),
    },
    {
      img: "/occupational-therapy 1.svg",
      title: t("academic.5-service3-1"),
      description: t("academic.5-service3-2"),
    },
  ];
  return (
    <div className="relative w-full">
      <div className="h-[80vh]  px-4 hidden md:block">
        <section className="container mx-auto h-full flex items-start pt-16">
          <div className="text-center md:text-start flex flex-col justify-start max-w-2xl gap-4 w-full">
            <h2 className="text-5xl font-bold text-primary leading-tight ">
              {t("academic.1-heading1")}{" "}
            </h2>
            <p className="max-w-lg text-[15px] text-gray1 font-light  leading-relaxed">
              {t("academic.1-heading2")}{" "}
            </p>
            <div className="mt-2 flex gap-4 mx-auto md:mx-0 items-center">
              <div className="relative flex items-center">
                <CustomButton
                  label={t("academic.1-icon1")}
                  bgColor="bg-primary"
                  textColor="text-white"
                  hoverBg="bg-primary/70"
                  href="/academic#academic-form"
                />

                <img
                  src="/arrow2.svg"
                  alt="Arrow"
                  className="absolute animate-wiggle -end-24 bottom-4 -translate-y-1/2 w-8 h-8"
                />
              </div>
            </div>
            <Link
              href="#our-cons"
              className="flex items-center text-primary underline font-medium hover:text-blue-800 text-sm"
            >
              <span> {t("academic.1-icon2")} </span>
              {/* السهم على اليمين */}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </Link>
          </div>
        </section>
      </div>

      <div className="bg-white  h-[80vh]   "></div>

      <div
        id="our-cons"
        className="relative md:absolute md:-bottom-44 h-fit left-1/2 md:-translate-y-1/2 translate-x-[-50%] w-full md:w-[90%] 2xl:w-[1400px] md:bg-white rounded-3xl shadow-lg px-6 py-12 md:px-20 md:py-16 z-10 mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="text-3xl md:text-5xl text-center md:text-start flex flex-col justify-start max-w-lg w-full">
            <h2 className="text-primary leading-tight">
              {t("academic.5-heading1-1")}{" "}
              <span className="relative inline-block font-extrabold">
                {t("academic.5-heading1-2")}
                <img
                  src="/line-acad-hero.svg"
                  alt="underline"
                  className="absolute left-0 w-full"
                />
              </span>
            </h2>
            <p className="max-w-[400px] text-[15px] text-gray1 font-light mt-6 leading-relaxed">
              {t("academic.5-heading2")}{" "}
            </p>
          </div>

          <div className="relative w-full md:w-auto flex justify-center md:justify-end mt-6 md:mt-0">
            <CustomButton
              label="  Book a Consultation"
              bgColor="bg-gold"
              textColor="text-white"
              hoverBg="bg-primary/70"
              href="/academic#academic-form"
            />

            <img
              src="/gif/istolspa-unscreen (1).gif"
              alt="right"
              className="hidden md:block absolute -right-8 top-0 -translate-y-1/2 w-10 h-10 md:w-16 md:h-16"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-6 lg:gap-12 pt-6 md:pt-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-1 text-gray1 flex flex-col gap-2 md:gap-4 items-start justify-center text-center md:text-start"
            >
              {/* الصورة مع طول ثابت */}
              <div className="flex justify-center md:justify-start min-h-[40px]">
                <img
                  src={item.img}
                  alt="Icon"
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </div>

              {/* العنوان مع طول ثابت */}
              <p className="text-sm md:text-lg font-semibold max-w-xs mx-auto md:mx-0 min-h-[48px] flex items-center">
                {item.title}
              </p>

              {/* الوصف مع طول ثابت */}
              <p className="text-xs md:text-sm font-light md:max-w-xs mx-auto md:mx-0 min-h-[60px] flex items-start">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
