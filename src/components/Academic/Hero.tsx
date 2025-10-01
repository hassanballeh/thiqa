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
      <div className="lg:h-[80vh]  md:px-4 ">
        <section className="container mx-auto h-full flex items-start  pb-10 lg:pb-0 md:pt-4 lg:pt-16">
          <div className=" flex flex-col justify-start items-start  gap-4 w-full md:max-w-2xl">
            <h2 className=" text-[28px] md:text-5xl font-bold text-primary leading-tight whitespace-pre-line ">
              {t("academic.1-heading1")}{" "}
            </h2>
            <p className="text-sm md:text-[15px] md:leading-normal text-gray1 font-light max-w-xs md:max-w-lg ">
              {t("academic.1-heading2")}{" "}
            </p>
            <div className="mt-2 flex gap-4 items-center">
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
                  className="absolute  lg:bottom-0 lg:-end-24 lg:-translate-y-1/2 w-8 h-8 bottom-[80%] left-[115%]"
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

      <div className="hidden lg:block bg-white h-[40vh] md:h-[80vh]   "></div>

      <div
        id="our-cons"
        className=" lg:absolute -bottom-96 lg:-bottom-44 xl:-bottom-36 h-fit left-1/2 lg:-translate-y-1/2 lg:translate-x-[-50%] w-[90%] 2xl:w-[1400px] bg-white rounded-3xl shadow-lg px-6 py-10 sm:py-12 md:px-20 md:py-16 z-10 mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-7 flex-wrap">
          <div className="text-start  flex flex-col justify-center md:justify-start max-w-lg w-full lg:">
            <h2 className="text-primary text-[28px] md:text-5xl leading-tight">
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
          </div>
          <div
            className={
              "order-2 md:order-3 max-w-full lg:max-w-[444px] hyphens-auto "
            }
          >
            <p className="max-w-full text-sm md:text-[15px] md:leading-normal text-start text-gray1 font-light ">
              {t("academic.5-heading2")}{" "}
            </p>
          </div>

          <div className="relative w-full md:w-auto flex justify-start md:justify-end  md:mt-[0] self-center order-3 md:order-2">
            {/*mt-6 */}
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

        <div className="flex flex-col md:flex-row gap-10 md:gap-6 lg:gap-12 pt-8 md:pt-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-1 text-gray1 flex flex-col md:gap-1 items-start justify-center text-start"
            >
              {/* الصورة مع طول ثابت */}
              <div className="flex justify-start min-h-5 md:min-h-[40px]">
                <img
                  src={item.img}
                  alt="Icon"
                  className="w-8 h-8 md:w-12 md:h-12"
                />
              </div>

              {/* العنوان مع طول ثابت */}
              <p className="text-sm md:text-lg font-bold max-w-xs mx-0 min-h-[40px] md:min-h-[48px] flex items-center">
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
