"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const TextSection = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-primary py-10">
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-stretch w-full">
        <div className="flex-1 md:px-4 text-center md:text-start flex flex-col justify-center max-w-lg">
          <span className="text-3xl md:text-5xl">
            <h2 className="font-roboto font-bold text-white leading-tight">
              {t("about.9-heading1-1")} <br />
              {t("about.9-heading1-2")}
            </h2>
          </span>
          <p className="text-[1rem] text-white font-extralight mt-4">
            {t("about.9-heading2")}{" "}
          </p>
          <div className="flex gap-4 mt-6 mx-auto md:mx-0 items-center">
            <div className="relative flex items-center">
              <Link
                href="/contact"
                className="bg-gold rounded-3xl px-12 font-semibold py-1.5 text-white hover:bg-gold"
              >
                <span> {t("about.9-icon")}</span>
              </Link>

              <img
                src="/arrow2.svg"
                alt="Arrow"
                className="absolute -end-10 md:-end-16 bottom-4 -translate-y-1/2 animate-wiggle w-9 h-9"
              />
            </div>
          </div>
        </div>
        <div className="relative w-full overflow-hidden ">
          <img
            src="./slider.png"
            alt="Slider"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>{" "}
          {/* Overlay نصف شفاف */}
          {/* صورة الفيديو في الوسط */}
          <a
            href="https://www.youtube.com/watch?v=VIDEO_ID" // ضع رابط الفيديو هنا
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16"
          >
            <img
              src="/play-video.svg" // ضع هنا صورة مؤشر التشغيل
              alt="Play Video"
              className="w-full h-full object-contain"
            />
          </a>
        </div>

        {/*  */}
      </section>
    </div>
  );
};

export default TextSection;
