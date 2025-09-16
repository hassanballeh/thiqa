"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const PictureWithText = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white pb-8 md:pb-0">
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-stretch w-full  ">
        <section className="flex-1 relative flex justify-center items-center py-4 overflow-hidden pb-11">
          <div className="relative z-10">
            <img
              src="/image2.png"
              alt="Student"
              className=" object-contain z-10 w-[400px]"
            />
          </div>

          <img
            src="/gif/ishine-unscreen.gif"
            alt="Star"
            className="absolute top-[33%] right-[14%] md:right-[16%] w-16 md:w-28 object-contain z-0"
          />

          <img
            src="/line3.svg"
            alt="Line"
            className="hidden md:block absolute -bottom-6 md:-bottom-0 2xl:bottom-4 left-0 md:left-[22%]  object-contain z-0"
          />
        </section>

        <div className="flex-1 md:ps-20  flex flex-col justify-center  md:max-w-md">
          <div className="inline-block font-roboto text-4xl">
            <h2 className=" font-bold text-primary leading-tight  max-w-52 mx-auto md:mx-0 md:max-w-[400px]">
              {t("home.68-heading1-1")} <br />
              {t("home.68-heading1-2")}
              <span className="ms-2 relative inline-block">
                {t("home.68-heading1-3")}
                <img
                  src="/line-income.svg"
                  alt="underline"
                  className="absolute -bottom-[15%] left-[-20%]  "
                />
              </span>
            </h2>
          </div>

          <div className="mt-4 flex items-start justify-between">
            <p className="text-xs md:text-[15px] leading-relaxed text-gray1 font-light md:max-w-[350px]">
              {t("home.68-heading2")}{" "}
            </p>
          </div>

          <div className="relative flex items-centers my-4">
            <div className="flex items-center mx-auto md:mx-0 gap-2">
              {/* زر رئيسي */}
              <a
                href="/form/tutor"
                className=" bg-primary text-white rounded-3xl px-4 font-semibold py-1.5 hover:bg-primary/70 transition-colors duration-300"
              >
                {t("home.68-icon1")}
              </a>

              {/* زر ثانوي */}
              <a
                href="/under-develop"
                className="bg-transparent border border-primary text-primary rounded-3xl px-4 font-semibold py-1.5 hover:bg-primary/70 hover:text-white transition-colors duration-300"
              >
                {t("home.68-icon2")}
              </a>
            </div>

            <img
              src="/arrow-passion.svg"
              alt="Arrow"
              className="hidden md:block absolute  -right-4 top-0 -translate-y-1/2 w-16 h-16"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PictureWithText;
