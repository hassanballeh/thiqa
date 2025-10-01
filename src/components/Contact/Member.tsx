"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Member = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-primary text-white py-6 md:py-20 space-y-6 md:space-y-16 px-4">
      <h2 className="font-bold text-center text-2xl md:text-3xl leading-normal">
        {t("contact.2-heading")}
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="relative bg-primaryDark rounded-[35px] px-9 md:px-6 py-9 md:py-14 flex flex-col justify-between">
          <div className="flex flex-col items-center text-center flex-1">
            <h3 className="font-semibold text-lg md:text-2xl">
              {t("contact.2-heading-card1")}
            </h3>
            <p className="text-sm md:text-[15px] mt-4 md:mt-6 max-w-sm">
              {t("contact.2-text-card1")}
            </p>
          </div>

          <Link
            href="/tutoring-plan#book-form"
            className="bg-gold shadow mt-4 md:mt-8 mx-auto rounded-3xl px-10 font-semibold py-1.5 text-white hover:bg-gold block"
          >
            <span>{t("contact.2-button-card1")}</span>
          </Link>

          <img
            src="/member-left.svg"
            className="absolute -left-3 -top-4"
            alt="decoration"
          />
        </div>

        {/* Card 2 */}
        <div className="relative bg-primaryDark rounded-[35px] px-10 md:px-6 py-9 md:py-14 flex flex-col justify-between">
          <div className="flex flex-col items-center text-center flex-1">
            <h3 className="font-semibold  text-lg text-2xl">
              {t("contact.2-heading-card2")}
            </h3>
            <p className="text-sm md:text-[15px] mt-4 md:mt-6 max-w-sm">
              {t("contact.2-text-card2")}
            </p>
          </div>

          <Link
            href="/under-develop"
            className="bg-gold shadow mt-4 md:mt-8 mx-auto rounded-3xl px-10 font-semibold py-1.5 text-white hover:bg-gold block"
          >
            <span>{t("contact.2-button-card2")}</span>
          </Link>

          <img
            src="/gif/Compisto-unscreen.gif"
            className="absolute -right-6 md:-right-8 -bottom-4 md:-bottom-5 h-14"
            alt="decoration"
          />
        </div>
      </div>
    </div>
  );
};

export default Member;
