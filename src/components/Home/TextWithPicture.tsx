"use client";
import Link from "next/link";
import React from "react";
import CustomButton from "../Custom/CustomButton";
import { useTranslation } from "react-i18next";

const TextWithPicture = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-primary py-8 md:py-0">
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2  md:place-items-stretch w-full">
        <div className="flex-1 px-10 text-start flex flex-col justify-center items-center md:items-start max-w-md">
          <div className="">
            <h2 className="md:text-3xl text-2xl font-bold text-white leading-relaxed">
              {t("home.26-heading1")}
            </h2>
          </div>
          <p className="xl:text-[18px] sm:text-[16px] text-[14px] text-white font-extralight mt-2 md:mt-4 max-w-[400px]">
            {t("home.26-heading2")}
          </p>
          <div className="relative flex items-centers my-4 md:my-6 lg:text-[16px] text-[14px] text-left md:w-fit w-full">
            <CustomButton
              label={t("home.26-icons1")}
              bgColor="bg-gold"
              textColor="text-white"
              hoverBg="bg-gold/80"
              href="/tutoring-plan#book-form"
            />
            <img
              src="/arrow-private.svg"
              alt="Arrow"
              className="hidden md:block absolute left-[110%] top-[40%] -translate-y-1/2   "
            />
          </div>

          <Link
            href="/under-develop"
            className="flex md:items-center items-start text-white underline font-medium hover:text-gray-200 xl:text-[18px] sm:text-[16px] text-[14px] w-full"
          >
            <span> {t("home.26-icons2")}</span>
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

        <section className="flex-1 relative md:flex hidden justify-center md:justify-end items-center py-4 md:py-12 ">
          <div className="relative z-10 group">
            <img
              src="/image.png"
              alt="Student"
              className="object-contain z-10 relative transition-transform duration-500 ease-out lg:max-w-xl max-w-sm  "
            />
            <img
              src="/Layer_1 (3).svg"
              alt="Zaina small"
              className="absolute bottom-[-3%] left-[-2%] w-8 h-8 z-10 "
            />
            <img
              src="/Layer_1 (1).svg"
              alt="Zaina small"
              className="absolute top-[-1%] -right-[4%] w-10 h-10 z-10 "
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default TextWithPicture;
