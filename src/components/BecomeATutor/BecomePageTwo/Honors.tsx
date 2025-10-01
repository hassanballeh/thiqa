"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Honors = () => {
  const { t } = useTranslation();
  const items = [
    {
      img: "honor1.svg",
      text: t("become.48-number1-2"),
      linkText: t("become.48-button1-2"),
      size: "w-[199px] h-[83px]",
    },
    {
      img: "honor2.svg",
      text: t("become.48-number2-2"),
      linkText: t("become.48-button2-2"),
      size: "w-[217px] h-[93px]",
    },
    {
      img: "honor3.svg",
      text: t("become.48-number3-2"),
      linkText: t("become.48-button3-2"),
      size: "w-[160px] h-[96px]",
    },
  ];

  return (
    <div className="pb-16 bg-primary ">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 container mx-auto">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-start ">
          <div className="text-white md:px-4 text-start flex flex-col justify-center">
            <div className="text-[28px] md:text-3xl lg:text-4xl 2xl:text-5xl max-w-2xl">
              <h2 className="font-bold leading-snug ">
                {t("become.48-heading1-1")}{" "}
                <span className="inline-block">
                  {t("become.48-heading1-2")}
                </span>
                <span className="block relative w-fit">
                  {t("become.48-heading-1-3")}
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gold rounded-md"></span>
                </span>
              </h2>
            </div>
            <p className="max-w-xs md:max-w-md text-sm md:text-[16px] font-extralight leading-relaxed mt-5 ">
              {t("become.48-heading2")}{" "}
            </p>

            <div className="relative w-fit mx-0 mt-10">
              <img
                src="/arrow-become-2.svg"
                className="absolute bottom-5 -right-14 h-10 animate-wiggle"
              />
              <Link
                href="/form/tutor"
                className="bg-gold rounded-3xl px-10 font-semibold py-1.5 hover:bg-gold"
              >
                <span>{t("become.37-icon1")}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4 text-gray1 items-center lg:items-start">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group shadow-sm flex flex-col md:flex-row items-center md:items-stretch gap-6 bg-primaryDark w-full md:w-fit py-8 ps-6 pe-4 md:py-10  rounded-[35px] transition-all duration-300 hover:shadow-2xl cursor-pointer"
            >
              {/* icon */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex items-center justify-start min-h-[96px] min-w-[215px]" // ✅ توحيد حجم الأيقونة
              >
                <img
                  src={item.img}
                  alt="honor"
                  className={`object-contain ${item.size} scale-90`}
                />
              </motion.div>

              {/* text + link */}
              <div className="flex flex-col justify-center border-t-2 md:border-t-0 md:border-l-2 pt-4 md:pt-0 ps-0 md:ps-4 border-gray-400 flex-1 max-w-[290px] text-center md:text-start">
                <p className="text-sm text-white font-light leading-relaxed">
                  {item.text}
                </p>

                <Link
                  href="/some-link"
                  className="flex items-center justify-center md:justify-start underline font-light text-sm text-[#F8B21F] group-hover:text-white transition-colors duration-300 mt-3"
                >
                  <span>{item.linkText}</span>
                  <motion.svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </motion.svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Honors;
