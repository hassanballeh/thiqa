"use client";
import React from "react";
import CustomButton from "../Custom/CustomButton";
import { useTranslation } from "react-i18next";

const Steps = () => {
  const { t } = useTranslation();
  const stepsData = [
    {
      number: 1,
      title: t("academic.22-number1-1"),
      desc: t("academic.22-number1-2"),
    },
    {
      number: 2,
      title: t("academic.22-number2-1"),
      desc: t("academic.22-number2-2"),
    },
    {
      number: 3,
      title: t("academic.22-number3-1"),
      desc: t("academic.22-number3-2"),
    },
    {
      number: 4,
      title: t("academic.22-number4-1"),
      desc: t("academic.22-number4-2"),
    },
    {
      number: 5,
      title: t("academic.22-number5-1"),
      desc: t("academic.22-number5-2"),
    },
    {
      number: 6,
      title: t("academic.22-number6-1"),
      desc: t("academic.22-number6-2"),
    },
  ];

  return (
    <div className="py-12 bg-primary">
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-6 py-12">
        <div className="md:col-span-1 flex flex-col justify-center items-center px-4 md:px-0">
          <div className="text-white text-center md:text-start flex flex-col gap-4 justify-center max-w-[350px] w-full">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold leading-relaxed">
              {t("academic.22-heading1")}
            </h2>

            <p className="text-sm md:text-base font-light max-w-full md:max-w-80">
              {t("academic.22-heading2")}
            </p>

            <div className="relative flex items-center justify-center md:justify-start mt-4">
              <CustomButton
                label={t("academic.1-icon1")}
                bgColor="bg-gold"
                textColor="text-white"
                hoverBg="bg-primary/70"
                href="/academic#academic-form"
              />

              <img
                src="/arrow2.svg"
                alt="Arrow"
                className="absolute right-6 md:right-24 -top-2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 animate-wiggle"
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-wrap lg:flex-nowrap gap-4  justify-center ">
          {[0, 1].map((colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4 items-start">
              {stepsData
                .filter((_, i) => i % 2 === colIdx)
                .map((step) => (
                  <div
                    key={step.number}
                    className="
              bg-primaryDark p-4 md:py-8 rounded-3xl min-h-48
              flex flex-col md:flex-row items-center md:gap-4
              transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-xl 
              w-auto
            "
                  >
                    <span className="text-3xl md:text-6xl font-medium text-gold min-w-[60px] md:min-w-[80px] text-center tabular-nums">
                      {String(step.number).padStart(2, "0")}
                    </span>

                    <div className="text-center md:text-left mt-2 md:mt-0 max-w-72 self-start">
                      <h4 className="text-sm md:text-[16px]  font-semibold text-white leading-snug">
                        {step.title}
                      </h4>
                      <p className="text-xs md:text-xs font-extralight text-white mt-2 md:mt-3 ">
                        <span className="leading-relaxed">{step.desc}</span>
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Steps;
