"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Vision = () => {
  const { t } = useTranslation();

  return (
    <div className="py-20">
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="flex flex-col justify-start md:px-4  text-center md:text-start mx-auto md:mx-0">
          <h2 className="text-3xl sm:text-3xl md:text-5xl max-w-[250px] font-roboto font-semibold text-primary relative inline-block">
            <span className="relative inline-block">
              <p className=" leading-tight ">{t("about.12-heading1")}</p>
              <img src="/vector-vision.svg" className="w-44" />
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base max-w-sm md:max-w-md mt-3 text-gray1 font-light leading-relaxed mx-auto md:mx-0">
            {t("about.12-heading2")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full">
          {[
            {
              icon: "/student.svg",
              title: t("about.12-number1-1"),
              desc: t("about.12-number1-2"),
            },
            {
              icon: "/lamp-about.svg",
              title: t("about.12-number2-1"),
              desc: t("about.12-number2-2"),
            },
            {
              icon: "/trust.svg",
              title: t("about.12-number3-1"),
              desc: t("about.12-number3-2"),
            },
            {
              icon: "/bag.svg",
              title: t("about.12-number4-1"),
              desc: t("about.12-number4-2"),
            },
          ].map((item, index) => (
            <div key={index} className="">
              <div className="flex items-start gap-3">
                <img src={item.icon} alt={item.title} className="w-7 h-7" />
                <div className="flex flex-col">
                  <h3 className="lg:text-lg 2xl:text-xl font-bold text-primary font-roboto ">
                    {item.title}
                  </h3>

                  <p className="text-sm md:max-w-sm mt-2 text-gray1 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>{" "}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Vision;
