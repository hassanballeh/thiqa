"use client";
import React from "react";
import CustomButton from "../Custom/CustomButton";
import { useTranslation } from "react-i18next";

const SuccessStories = () => {
  const { t } = useTranslation();

  return (
    <div className="py-16">
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-stretch w-full gap-6">
        {/* Text Side */}
        <div className="flex-1 md:px-4 text-start flex flex-col justify-center max-w-lg">
          <div className="xl:text-[55px] lg:text-[45px] sm:text-[35px] text-[30px] ">
            <h2 className="font-bold text-primary leading-tight font-roboto">
              {t("tutoring.16-heading1")}
            </h2>
          </div>

          <p className="max-w-xs md:max-w-lg  xl:text-[18px] sm:text-[16px] text-[14px] text-left  text-gray1 font-light mt-4">
            {t("tutoring.16-heading2")}
          </p>

          <div className="mt-6">
            <CustomButton
              label={t("tutoring.16-icon")}
              bgColor="bg-primary"
              textColor="text-white"
              hoverBg="bg-primary/70"
              href="/tutoring-plan#book-form"
            />
          </div>
        </div>

        {/* Video/Image Side */}
        <div className="relative flex items-center justify-center w-full overflow-hidden rounded-3xl bg-primary">
          {" "}
          {/* bg-primary just here */}
          <img
            src="./slider.png"
            alt="Slider"
            className="w-[90%] h-[90%] object-cover"
          />
          <div className="absolute w-[90%] h-[90%] self-center mx-auto inset-0 bg-black/40 "></div>{" "}
          {/* overlay */}
          {/* Play video button */}
          <a
            href="https://youtube.com/shorts/o2bhXHBgYR0"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16"
          >
            <img
              src="/play-video.svg"
              alt="Play Video"
              className="w-full h-full object-contain"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
