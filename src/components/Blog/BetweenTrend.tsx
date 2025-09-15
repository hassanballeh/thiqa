"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const BetweenTrend: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full relative bg-primary">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        {/* النص */}
        <div className="flex flex-col justify-center text-center md:text-start mx-auto md:mx-0 py-16">
<div className="text-3xl md:text-6xl font-roboto  max-w-xl ">
            <h2 className=" font-bold text-white leading-tight">
            {t("blog.7-heading1")}
          </h2>
</div>
          <p className="text-[1rem] text-white font-extralight mt-4  max-w-lg ">
            {t("blog.7-heading2")}
          </p>

          <div className="flex gap-4 mt-10 items-center justify-center md:justify-start">
            <div className="relative flex items-center">
              <Link
                href="/tutoring-plan#book-form"
                className="bg-gold rounded-3xl px-12 font-semibold py-1.5 text-white hover:bg-gold"
              >
                <span>{t("blog.7-icon")}</span>
              </Link>
              <img
                src="/arrow2.svg"
                alt="Arrow"
                className="absolute -right-14 md:-right-20 bottom-6 w-12 h-12"
              />
            </div>
          </div>
        </div>

        {/* الصورة */}
        <div className="w-full h-auto flex justify-center md:block">
          <img
            src="/text-section-blog.png" // 👈 ضع صورتك هنا
            alt="Trending"
            className="w-full max-w-xs md:max-w-none md:w-auto md:h-full object-contain md:object-cover static md:absolute md:bottom-0 md:right-0"
          />
        </div>
      </div>
    </section>
  );
};

export default BetweenTrend;
