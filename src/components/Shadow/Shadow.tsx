"use client"
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
const Shadow = () => {
              const { t } = useTranslation();

  return (
<div className="py-20 bg-white">
  <section className="container mx-auto grid grid-cols-1 md:grid-cols-2  gap-8 w-full">
    <div className="flex flex-col justify-start px-4 md:px-4 max-w-[400px] text-center md:text-start mx-auto md:mx-0">
  <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight relative inline-block">
    {t("shadow.8-heading1")}
  </h2>

  <p className="text-sm md:text-[15px] max-w-full md:max-w-[330px] mt-3 text-gray1 font-light leading-relaxed">
    {t("shadow.8-heading2")}
  </p>

  <div className="flex flex-col gap-4 mt-6 mx-auto md:mx-0 items-center md:items-start">
    <div className="relative w-fit mx-auto md:mx-0">
      <img
        src="/choose.svg"
        className="absolute -top-3 -left-6 md:-top-4 md:-left-8 "
      />
      <Link
  href="/shadow-teacher#shadow-form"
        className="bg-primary rounded-3xl px-4 py-2 text-sm md:text-base font-semibold text-white hover:bg-gold block"
      >
        <span>{t("shadow.8-icon")}</span>
      </Link>
    </div>
  </div>
</div>



<div className="space-y-12">
  {[
    {
      icon: "/hand-primary.svg",
      title: t("shadow.8-number1-1"),
      desc: t("shadow.8-number1-2"),
    },
    {
      icon: "/hand-primary.svg",
      title: t("shadow.8-number2-1"),
      desc: t("shadow.8-number2-2"),
    },
    {
      icon: "/hand-primary.svg",
      title: t("shadow.8-number3-1"),
      desc: t("shadow.8-number3-2"),
    },
        {
      icon: "/hand-primary.svg",
      title: t("shadow.8-number4-1"),
      desc: t("shadow.8-number4-2"),
    },
        {
      icon: "/hand-primary.svg",
      title: t("shadow.8-number5-1"),
      desc: t("shadow.8-number5-2"),
    },
        {
      icon: "/hand-primary.svg",
      title: t("shadow.8-number6-1"),
      desc: t("shadow.8-number6-2"),
    },
        {
      icon: "/hand-primary.svg",
      title: t("shadow.8-number7-1"),
      desc: t("shadow.8-number7-2"),
    },
        {
      icon: "/hand-primary.svg",
      title: t("shadow.8-number8-1"),
      desc: t("shadow.8-number8-2"),
    },
  ].map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // يجي من اليسار أو اليمين
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className=""
    >
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#E7F1FF]">
          <img
            src={item.icon}
            alt={item.title}
            className="w-8 h-8 object-contain"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-gray1 font-roboto">
            {item.title}
          </h3>
          <p className="text-sm max-w-sm text-gray1 font-light leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>
    </motion.div>
  ))}
</div>

  </section>
</div>
 )
}

export default Shadow