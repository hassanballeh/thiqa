"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Consulting = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar"; // ✅ لو اللغة عربي نعتبرها RTL

  const founders = [
    {
      img: "/employee/walaa.jpg",
      title: t("academic.11-feedback1-name"),
      text: t("academic.11-feedback1"),
    },
    {
      img: "/employee/amal.jpg",
      title: t("academic.11-feedback2-name"),
      text: t("academic.11-feedback2"),
    },
  ];

  return (
    <div className="bg-white">
      <section
        className={`container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-12 ${
          isRTL ? "direction-rtl" : "direction-ltr"
        }`}
      >
        {/* ✅ النصوص */}
        <div className="flex flex-col justify-center items-center">
          <div
            className={`md:px-4 flex flex-col justify-center relative ${
              isRTL ? "text-center md:text-right" : "text-center md:text-left"
            }`}
          >
            <h2 className="text-3xl md:text-6xl text-primary font-roboto font-extrabold leading-snug">
              <span className="relative inline-block">
                {t("academic.11-heading1-1")}
                <img
                  src="/under-line-cons.svg"
                  alt="underline"
                  className={`absolute -bottom-2 w-full ${
                    isRTL ? "right-0" : "left-0"
                  }`}
                />
              </span>{" "}
              <span className="relative inline-block">
                {t("academic.11-heading1-2")}
                <img
                  src="/arrow-consulting.svg"
                  alt="arrow"
                  className={`hidden md:block  absolute mt-2 w-28 ${
                    isRTL ? "-end-24 top-8" : "start-20 2xl:start-32 top-8"
                  }`}
                />
              </span>
            </h2>

            <p className="text-sm font-light text-gray1 leading-relaxed mt-4 max-w-sm">
              {t("academic.11-heading2")}
            </p>
          </div>
        </div>

        {/* ✅ الكروت */}
        <div className="relative flex gap-4">
          {founders.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[40px] cursor-pointer hover:transition-shadow hover:duration-500 ease-in-out"
            >
              <div className="relative w-full md:w-72 h-full bg-primary overflow-hidden">
                {/* الصورة */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* طبقة الظل */}
                <div className="absolute inset-0 bg-black/30"></div>
              </div>

              {/* النصوص جوّا الصورة */}
              <div
                className={`absolute bottom-4 md:bottom-6 text-white font-roboto transition-all duration-500 ${
                  isRTL
                    ? "right-2 md:right-7 text-right"
                    : "left-2 md:left-7 text-left"
                }`}
              >
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-sm md:max-w-52 mt-2 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}

          {/* ✅ أيقونة خارج الكارت الأول */}
          <img
            src="/Layer_1 (3).svg"
            alt="icon1"
            className={`absolute -bottom-2 w-8 h-auto z-10 ${
              isRTL ? "-left-1" : "-left-1"
            }`}
          />

          {/* ✅ أيقونة خارج الكارت الثاني */}
          <img
            src="/col.svg"
            alt="icon2"
            className={`hidden md:block absolute top-10 z-10 ${
              isRTL ? "left-0 2xl:left-32" : "right-0 2xl:right-32"
            }`}
          />
        </div>
      </section>
    </div>
  );
};

export default Consulting;
