"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar"; // ✅ لو اللغة عربي نعتبرها RTL

  return (
    <div className=" py-10 md:py-0">
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-stretch w-full">
        <div className="flex-1 md:px-4 text-center md:text-start flex flex-col justify-center max-w-xl">
          <div className="text-3xl md:text-5xl">
            <h2 className=" font-bold text-primary leading-tight">
              {t("become.1-heading1")}{" "}
            </h2>
          </div>
          <p className="text-lg text-gray1 font-light mt-4 max-w-md">
            {t("become.1-heading2")}{" "}
          </p>
          <div className="flex flex-col gap-4 mt-6 mx-auto md:mx-0 items-start">
            <div className="flex gap-4 mx-auto md:mx-0 relative">
              <Link
                href="/under-develop"
                className="bg-primary rounded-3xl px-10 font-semibold py-1.5 text-white hover:bg-gold"
              >
                <span>{t("become.1-icon1")} </span>
              </Link>
              <img
                src="/arrow-lamp.svg"
                alt="Arrow"
                className={`hidden md:block absolute animate-bounce bottom-2 -translate-y-1/2 w-10 h-10 
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

        <section className="flex-1 relative flex justify-center items-center py-12 overflow-hidden">
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
