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
      <div className="md:h-[80vh]  px-4  block container md:mx-auto ">
        <section className="md:container md:mx-auto h-full flex items-start pt-20">
          <div className="xl:text-[55px] lg:text-[45px] sm:text-[35px] text-[30px] text-start flex flex-col justify-start max-w-2xl w-full">
            <h2 className="font-bold text-primary leading-tight font-roboto">
              {t("tutoring.1-heading1")}
            </h2>
            <p className="xl:text-[18px] sm:text-[16px] text-[14px] text-gray1 font-light mt-4 leading-relaxed">
              {t("tutoring.1-heading2")}
            </p>
          </div>
        </section>
      </div>

      <div className="bg-white  md:h-[80vh] "></div>

      <div className="relative  md:absolute md:-bottom-32 h-fit left-1/2 md:-translate-y-1/2 translate-x-[-50%] w-full md:w-[90%] 2xl:w-[1400px] md:bg-white rounded-3xl shadow-lg px-4 py-12 md:px-20 md:py-16 z-10 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="xl:text-[55px] lg:text-[45px] sm:text-[35px] text-[30px]  text-start flex flex-col justify-start max-w-md w-full ">
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
            <p className=" xl:text-[18px] sm:text-[16px] text-[14px] text-gray1 font-light mt-4 leading-relaxed">
              {t("tutoring.1-why2")}
            </p>
          </div>

          <div className=" hidden  relative w-[300px] md:w-auto md:flex justify-start items-start md:justify-end mt-4 md:mb-0 mb-4">
            <img
              src="/gif/istol-unscreen.gif"
              alt="left decoration"
              className="hidden md:block absolute -left-14 -top-7 -translate-y-0 w-8 h-8 md:w-20 md:h-20"
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
              className="hidden md:block absolute -right-8 -top-2 -translate-y-0 w-8 h-8 md:w-10 md:h-10"
            />
          </div>
        </div>

        <div className="flex flex-col  md:flex-row gap-10 md:gap-6 lg:gap-12 pt-6 md:pt-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-1 text-gray1 flex flex-col gap-2 md:gap-4 items-start justify-start  md:justify-center md:text-center text-left "
            >
              <div className="flex justify-start  min-h-[40px]">
                <img
                  src={item.icon}
                  alt={`${item.title} icon`}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </div>

              <p className="xl:text-[20px] sm:text-[18px] text-[16px] font-semibold max-w-52  md:mx-0 min-h-[48px] flex items-center">
                {item.title}
              </p>

              <p className="xl:text-[18px] sm:text-[16px] text-[14px] font-light md:max-w-xs  md:mx-0 min-h-[60px] flex items-start">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="block md:hidden mt-8 text-left">
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
