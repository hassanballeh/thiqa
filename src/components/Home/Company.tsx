"use client";
// import i18n from "@/libs";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Company = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-20 bg-white">
      <h2 className=" text-3xl font-bold text-primary text-center mb-6">
        As Seen In
      </h2>
      <div
        dir="rtl"
        className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center place-items-center"
      >
        {[
          { src: "/gallery/1.svg", w: 150.72, h: 109.82 },
          { src: "/gallery/2.svg", w: 156.56, h: 156.56 },
          { src: "/gallery/3.svg", w: 257.04, h: 96.97 },
          { src: "/gallery/4.svg", w: 231, h: 108 },
          { src: "/gallery/5.svg", w: 257, h: 92 },
          { src: "/gallery/6.svg", w: 182, h: 90 },
          { src: "/gallery/7.svg", w: 194, h: 101 },
          { src: "/gallery/8.svg", w: 194.44, h: 73.55 },
          { src: "/gallery/9.svg", w: 162.56, h: 81.79 },
          { src: "/gallery/10.svg", w: 150, h: 121 },
        ].map((img, i) => (
          <div
            key={i}
            className="scale-[0.55] sm:scale-[0.65] md:scale-[0.75] relative z-50"
            style={{
              width: `${img.w}px`,
              height: `${img.h}px`,
            }}
          >
            <img
              src={img.src}
              alt={`img${i + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      <section className=" mx-auto mt-32 grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="flex flex-col px-4 md:px-0 md:mb-0 mb-10 md:justify-start xl:ml-[75px] 2xl:ml-[200px]  sm:ml-[40px]  md:text-center md:text-start max-w-lg relative">
          <h2 className="text-4xl font-bold text-primary leading-relaxed">
            Ready?
          </h2>

          <div className="text-xl md:text-3xl">
            <h2 className=" text-gray1 leading-snug mt-2 relative">
              {t("home.79-heading1-1")}
              <span className="relative inline-block">
                &apos;{t("home.79-heading1-2")}
                {/* <span className="absolute left-0 -bottom-1 w-full h-1 bg-gold rounded-sm"></span> */}
              </span>{" "}
              {t("home.79-heading1-3")}
            </h2>
          </div>

          <div className="hidden md:block w-4/5 h-1 bg-gold rounded-sm" />

          <div className="relative mt-4 md:mt-8 md:text-[18px] text-[16px]">
            <p className=" text-gray1 font-light max-w-[500px] md:leading-relaxed">
              {t("home.79-heading2")}
            </p>

            <div className="absolute end-12 top-16 transform  hidden md:block">
              <img src="/qurly-line.svg" alt="arrow" className="h-20 mt-4" />
            </div>
          </div>

          <div className="flex gap- mt-6 flex-col">
            <h3 className="font-semibold text-gray1">Download ON:</h3>
            <div className="flex sm:flex-row flex-col sm:items-center gap-2 mt-4">
              <Link href="https://play.google.com/store/apps/details?id=com.thiqaeducation.tutoringapp&hl=en">
                <img
                  src="/google-play-black.svg"
                  alt="Play Store"
                  className="w-48 cursor-pointer"
                />
              </Link>
              <img
                src="/app-store-black.svg"
                alt="App Store"
                className="w-48 cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="relative  md:block" dir="ltr">
          {/* الخلفية صورة PNG أكبر وأطول */}
          <div
            className={`hidden md:block absolute bottom-0 right-0 z-0`}
            style={{
              backgroundImage: "url('/bg-blue.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              width: "1000px", // العرض كما هو
              height: "1000px", // 👈 زيادة الطول
              bottom: "-34%",
              left: "-14%",
            }}
          />

          {/* صورة الطالب مائلة لليسار */}
          <img
            src="/mobile.png"
            alt="Student"
            className={`
    relative z-10
    scale-150 h-auto left-[-33%] top-[-15%]
      // 👈 إزاحة لليسار
    mx-auto
  `}
          />

          {/* النجوم */}
          <img
            src="/gif/istolat-unscreen.gif"
            className={`hidden md:block absolute h-14 bottom-[20%] z-50 left-[30%]`}
          />
          <img
            src="/gif/istolat-unscreen.gif"
            className={`hidden md:block absolute h-14 -top-[9%] z-50 left-[55%] `}
          />
          <img
            src="/gif/istolat-unscreen.gif"
            className={`hidden md:block absolute h-14 top-0 z-50 left-[60%]`}
          />
        </div>
      </section>
    </div>
  );
};

export default Company;
