"use client";
import React from "react";
import CustomButton from "../Custom/CustomButton";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const items = [
    {
      icon: "/hand-primary.svg",
      title: t("tutoring.1-point1-1"),
      description: t("tutoring.1-point1-2"),
    },
    {
      icon: "/book.svg",
      title: t("tutoring.1-point2-1"),
      description: t("tutoring.1-point2-2"),
    },
    {
      icon: "/file.svg",
      title: t("tutoring.1-point3-1"),
      description: t("tutoring.1-point3-2"),
    },
  ];

  return (
    <div className="relative w-full">
      {/* Desktop Hero Section */}
      <div className="h-[80vh]  px-4 hidden md:block container mx-auto">
        <section className="container mx-auto h-full flex items-start pt-20">
          <div className="text-3xl md:text-6xl text-center md:text-start flex flex-col justify-start max-w-2xl w-full">
            <h2 className="font-bold text-primary leading-tight font-roboto">
              {t("tutoring.1-heading1")}
            </h2>
            <p className="max-w-xl text-[15px] text-gray1 font-light mt-4 leading-relaxed">
              {t("tutoring.1-heading2")}
            </p>
          </div>
        </section>
      </div>

      <div className="bg-white  h-[80vh] "></div>

      <div className="relative md:absolute md:-bottom-32 h-fit left-1/2 md:-translate-y-1/2 translate-x-[-50%] w-full md:w-[90%] 2xl:w-[1400px] md:bg-white rounded-3xl shadow-lg px-6 py-12 md:px-20 md:py-16 z-10 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="text-3xl md:text-5xl text-center md:text-start flex flex-col justify-start max-w-md w-full">
            <h2 className="text-primary leading-tight">
              {t("tutoring.1-why1-1")}{" "}
              <span className="relative inline-block font-extrabold">
                {t("tutoring.1-why1-2")}
                <img
                  src="/thiqa-line.svg"
                  alt="underline"
                  className="hidden md:block absolute left-0 w-full"
                />
              </span>
            </h2>
            <p className="max-w-sm text-xs md:text-[15px] text-gray1 font-light mt-4 leading-relaxed">
              {t("tutoring.1-why2")}
            </p>
          </div>

          <div className="hidden md:block relative w-full md:w-auto flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src="/gif/istol-unscreen.gif"
              alt="left decoration"
              className="absolute -left-14 -top-7 -translate-y-0 w-8 h-8 md:w-20 md:h-20"
            />

            <CustomButton
              label={t("tutoring.1-icon")}
              bgColor="bg-gold"
              textColor="text-white"
              hoverBg="bg-primary/70"
              href="/tutoring-plan#book-form"
            />

            <img
              src="/line-right.svg"
              alt="right decoration"
              className="absolute -right-8 -top-2 -translate-y-0 w-8 h-8 md:w-10 md:h-10"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-6 lg:gap-12 pt-6 md:pt-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-1 text-gray1 flex flex-col gap-2 md:gap-4 items-start justify-center text-center md:text-start"
            >
              <div className="flex justify-center md:justify-start min-h-[40px]">
                <img
                  src={item.icon}
                  alt={`${item.title} icon`}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </div>

              <p className="text-sm md:text-lg font-semibold max-w-52 mx-auto md:mx-0 min-h-[48px] flex items-center">
                {item.title}
              </p>

              <p className="text-xs md:text-sm font-light md:max-w-xs mx-auto md:mx-0 min-h-[60px] flex items-start">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="block md:hidden mt-8 text-center">
          <CustomButton
            label={t("tutoring.1-icon")}
            bgColor="bg-gold"
            textColor="text-white"
            hoverBg="bg-primary/70"
            href="/tutoring-plan#book-form"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
