"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Rewards = () => {
  const { t } = useTranslation();
  const items = [
    {
      img: "gift.png",
      title: t("become.37-number1-1"),
      desc: t("become.37-number1-2"),
    },
    {
      img: "hand.png",
      title: t("become.37-number2-1"),
      desc: t("become.37-number2-2"),
    },
    {
      img: "exchange.png",
      title: t("become.37-number3-1"),
      desc: t("become.37-number3-2"),
    },
  ];
  return (
    <div className=" py-8 bg-white">
      <section className=" flex flex-col md:flex-row  place-items-center md:place-items-stretch w-full">
        <div className="md:w-2/5 md:ms-20 relative md:px-4 items-center md:items-start text-center md:text-start flex flex-col justify-center itemc">
          <div className="text-3xl md:text-4xl 2xl:text-5xl">
            <h2 className="font-bold text-primary leading-snug ">
              {t("become.37-heading1-1")}{" "}
              <span className="relative inline-block">
                {t("become.37-heading1-2")}
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gold rounded-md"></span>
              </span>
            </h2>
          </div>

          <p className="text-lg text-gray1 mt-4 max-w-md leading-relaxed">
            {t("become.37-heading2")}
          </p>

          <div className="flex flex-col gap-4 mt-10">
            <div className="relative w-fit self-center md:self-start">
              <img
                src="/arrow-become-2.svg"
                className="absolute bottom-5 -right-14 h-10 animate-bounce"
              />
              <Link
                href="/form/tutor"
                className="bg-primary rounded-3xl px-10 font-semibold py-1.5 text-white hover:bg-gold block"
              >
                <span> {t("become.37-icon1")}</span>
              </Link>
            </div>
          </div>
        </div>

        <section className="md:w-3/5 py-12 overflow-hidden">
          <div className="ms-6 md:ms-32 flex flex-col gap-6 text-gray1 bg-primary rounded-l-[120px] py-16 px-4">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                whileHover={{ scale: 1.02, y: -6 }}
                className="-ms-6 md:-ms-28 shadow-xl flex items-center gap-6 bg-white md:w-[550px] py-10 px-6 rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-2xl"
              >
                {/* icon */}
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="w-14 h-14 object-contain"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
                {/* text */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="text-xs max-w-xs font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default Rewards;
