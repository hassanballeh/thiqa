"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar"; // ✅ لو اللغة عربي نعتبرها RTL

  return (
    <div className="py-0">
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-stretch w-full">
        <div className="flex-1 md:px-4 text-start flex flex-col justify-center max-w-full md:max-w-xl w-full md:w-auto">
          <div className="text-[28px] md:text-3xl lg:text-5xl sm:max-w-md md:max-w-none">
            <h2 className=" font-bold text-primary leading-tight">
              {t("become.1-heading1")}{" "}
            </h2>
          </div>
          <p className="text-sm md:text-[15px] md:leading-normal text-gray1 font-light mt-4 max-w-xs md:max-w-md">
            {t("become.1-heading2")}{" "}
          </p>
          <div className="flex flex-col gap-4 mt-6 mx-0 items-start">
            <div className="flex gap-4 mx-0 relative items-start">
              <Link
                href="/under-develop"
                className="bg-primary rounded-3xl px-10 font-semibold py-1.5 text-white hover:bg-gold"
              >
                <span>{t("become.1-icon1")} </span>
              </Link>
              <img
                src="/arrow-lamp.svg"
                alt="Arrow"
                className={`absolute animate-bounce bottom-4 md:bottom-2 -translate-y-1/2 w-10 h-10 
    ${isRTL ? "-right-10" : "-right-14"}`}
              />
            </div>

            <Link
              href="#benefits"
              className="flex items-center text-primary underline font-medium hover:text-blue-800 text-sm"
            >
              <span>{t("become.1-icon2")} </span>
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
        </div>

        <section className="flex-1 relative flex justify-center items-center pt-4 md:py-12 overflow-hidden">
          <div className="relative z-10">
            <img
              src="/image-become.svg"
              alt="Student"
              className="object-contain z-10 relative"
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Hero;
