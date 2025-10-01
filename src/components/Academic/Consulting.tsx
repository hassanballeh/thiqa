"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Consulting = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar"; // ✅ لو اللغة عربي نعتبرها RTL

  const founders = [
    {
      img: "/employee/walaa-portrait.jpg",
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
        className={`container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 px-6 py-12 ${
          isRTL ? "direction-rtl" : "direction-ltr"
        }`}
      >
        {/* ✅ النصوص */}
        <div className="flex flex-col justify-center items-start md:items-center">
          <div
            className={`md:px-4 flex flex-col items-start justify-center relative ${
              isRTL ? "text-right" : "text-left md:text-center lg:text-left"
            }`}
          >
            <h2 className="relative text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary font-roboto font-extrabold leading-snug md:mx-auto lg:mx-0">
              <span className=" inline-block">
                {t("academic.11-heading1-1")}
                <img
                  src="/under-line-cons.svg"
                  alt="underline"
                  className={`absolute -bottom-1 md:-bottom-4 w-full h-[15px] ${
                    isRTL ? "right-0" : "left-0"
                  }`}
                />
              </span>{" "}
              <span className="relative inline-block">
                {t("academic.11-heading1-2")}
                <img
                  src="/arrow-consulting.svg"
                  alt="arrow"
                  className={`hidden lg:block  absolute lg:-mt-2 xl:mt-2 w-28 ${
                    isRTL ? "-end-24 top-8" : "start-24 2xl:start-32 top-8 "
                  }`}
                />
              </span>
            </h2>

            <p className="text-sm md:text-[15px] md:leading-normal font-light text-gray1 mt-4 md:mt-10 max-w-sm lg:max-w-[450px]">
              {t("academic.11-heading2")}
            </p>
          </div>
        </div>

        {/* ✅ الكروت */}
        <div className="relative flex gap-2 md:gap-4  md:justify-center ">
          {founders.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[40px] cursor-pointer hover:transition-shadow hover:duration-500 ease-in-out basis-[calc(50%-8px)] md:basis-auto"
            >
              <div className="relative w-full md:w-72 h-full bg-primary overflow-hidden">
                {/* الصورة */}
                <img
                  src={item.img}
                  alt={item.title}
                  className={`w-full h-full object-cover ${
                    index === 1 && "lg:-translate-x-[37px] xl:translate-x-0"
                  }`}
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
                <h3 className="text-lg md:text-2xl font-bold">{item.title}</h3>
                <p className="text-xs md:text-sm md:max-w-52 mt-2 md:leading-relaxed">
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
            className={`md:block absolute md:top-10 z-10 ${
              isRTL ? "-left-[13px] 2xl:left-32" : "-right-[13px] 2xl:right-32"
            }`}
          />
        </div>
      </section>
    </div>
  );
};

export default Consulting;
