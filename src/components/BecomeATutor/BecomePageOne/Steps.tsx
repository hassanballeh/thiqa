"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

const Steps = () => {
  const { t } = useTranslation();
  const stepsData = [
    {
      number: 1,
      title: t("become.17-number1-1"),
      desc: t("become.17-number1-2"),
    },
    {
      number: 2,
      title: t("become.17-number2-1"),
      desc: t("become.17-number2-2"),
    },
    {
      number: 3,
      title: t("become.17-number3-1"),
      desc: t("become.17-number3-2"),
    },
    {
      number: 4,
      title: t("become.17-number4-1"),
      desc: t("become.17-number4-2"),
    },
    {
      number: 5,
      title: t("become.17-number5-1"),
      desc: t("become.17-number5-2"),
    },
    {
      number: 6,
      title: t("become.17-number6-1"),
      desc: t("become.17-number6-2"),
    },
  ];
  return (
    <div className="py-12 bg-primary">
      <section className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-4 px-6 md:py-12">
        <div className="lg:col-span-1 flex flex-col justify-center items-center">
          <div className="text-white md:px-4 text-center lg:text-start flex flex-col justify-center max-w-sm md:max-w-md lg:max-w-sm">
            <h2 className="text-2xl lg:text-3xl font-semibold leading-relaxed md:whitespace-pre-line">
              {t("become.17-heading1")}
            </h2>
            <p className="text-sm md:text-[15px] font-light md:leading-relaxed mt-4 md:mt-1 max-w-sm mx-auto lg:mx-0">
              {t("become.17-heading2")}{" "}
            </p>

            <div className="flex flex-col gap-4 mt-4 md:mt-6 mx-auto lg:mx-0 items-start w-full md:w-auto">
              <div className="flex gap-4 mx-auto md:mx-0">
                <Link
                  href="/under-develop"
                  className="bg-gold rounded-3xl px-10 font-semibold py-1.5 hover:bg-gold"
                >
                  <span>Sign up as a tutor</span>
                </Link>
              </div>

              <Link
                href="/under-develop"
                className="flex items-center underline mx-auto md:mx-0 font-medium hover:text-blue-100 text-sm"
              >
                <span>View benefits & earnings</span>
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
        </div>
        <div
          className="md:col-span-2 flex  gap-4  justify-center md:justify-start
 "
        >
          <div className="flex flex-col md:flex-row flex-wrap gap-4 items-start justify-center">
            {stepsData.map((step) => (
              <div
                key={step.number}
                className="
              bg-primaryDark p-4 md:py-8 rounded-3xl min-h-40
              flex flex-col md:flex-row items-center md:items-start md:gap-4
              transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-xl 
              w-auto  md:basis-[calc(50%-16px)]
            "
              >
                <span className="text-3xl md:text-6xl font-medium text-gold min-w-[60px] md:min-w-[80px] text-center tabular-nums self-center">
                  {String(step.number).padStart(2, "0")}
                </span>

                <div className="text-center md:text-left mt-2 md:mt-0">
                  <h4 className="text-sm md:text-[16px] font-semibold text-white leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-xs md:text-xs font-extralight text-white mt-2 md:mt-3 max-w-60 lg:min-h-[56px]">
                    <span className="leading-relaxed">{step.desc}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Steps;
