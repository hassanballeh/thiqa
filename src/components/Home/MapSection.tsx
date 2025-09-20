"use client";
import Link from "next/link";
import React, { useState } from "react";
import { LocationLabel } from "../Custom/LocationLabel";
import { t } from "i18next";
import { motion } from "framer-motion";

const MapSection = () => {
  const [selectedCountry, setSelectedCountry] = useState<"UAE" | "KSA">("UAE");

  // Variants للنقاط
  const pointVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-primary py-10 md:py-0">
      <section className="md:container px-4 md:px-0 md:mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-stretch w-full">
        {/* النصوص */}
        <div className="text-xl md:text-3xl flex-1  text-start flex flex-col justify-center md:max-w-[462px]">
          <h2 className=" font-bold text-white leading-relaxed max-w-md">
            {selectedCountry === "UAE"
              ? t("home.62-heading1")
              : t("home.65-heading1")}
          </h2>
          <div className="text-xs md:text-[16px]">
            <p className=" text-white font-light mt-4 leading-relaxed">
              {selectedCountry === "UAE"
                ? t("home.62-heading2")
                : t("home.65-heading2")}
            </p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-10 mx-auto md:mx-0 items-center">
            <Link
              href="/tutoring-plan#book-form"
              className="bg-gold md:text-base text-sm rounded-3xl lg:px-4 px-2 font-semibold py-1.5 text-white hover:bg-gold"
            >
              <span>{t("tutoring.1-icon")}</span>
            </Link>
            <div className="relative flex items-center">
              <Link
                href="/under-develop"
                className="md:text-base text-sm rounded-3xl lg:px-4 px-2 font-semibold py-1.5 border border-white text-white hover:text-white hover:bg-primary/60"
              >
                <span>Log in as a parent </span>
              </Link>
              <img
                src="/arrow-map.svg"
                alt="Arrow"
                className="hidden md:block absolute animate-wiggle -end-10 md:-end-14 bottom-4 -translate-y-1/2 w-12 h-12"
              />
            </div>
          </div>
        </div>

        {/* الخريطة */}
        <section className="flex-1 relative flex justify-center items-center py-12 overflow-hidden">
          <div className="relative flex flex-col-reverse md:flex-col z-10">
            <div className="flex gap-4 mt-6 mx-auto md:mx-0 justify-center">
              <button
                onClick={() => setSelectedCountry("KSA")}
                className={`rounded-full px-8 py-1  text-white hover:text-white hover:bg-gold  ${
                  selectedCountry === "KSA"
                    ? "bg-[#00448C]"
                    : "bg-transparent border border-white"
                }`}
              >
                {t("home.62-KSA")}
              </button>
              <button
                onClick={() => setSelectedCountry("UAE")}
                className={`rounded-full px-8 py-1 text-white hover:bg-gold ${
                  selectedCountry === "UAE"
                    ? "bg-[#00448C]"
                    : "bg-transparent border border-white"
                }`}
              >
                {t("home.62-UAE")}
              </button>
            </div>

            <div className="relative w-full mt-12 md:mt-6">
              <img
                src={selectedCountry === "UAE" ? "/map.png" : "/map2.png"}
                alt="Map"
                className="w-full object-contain z-0 transition-all duration-500"
              />

              {/* النقاط */}
              <motion.div
                className="absolute inset-0"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {selectedCountry === "UAE" ? (
                  <>
                    <motion.div variants={pointVariants}>
                      <LocationLabel
                        top="72%"
                        left="50%"
                        label={t("home.UAE-1")}
                        lineHeight={120}
                      />
                    </motion.div>
                    <motion.div variants={pointVariants}>
                      <LocationLabel
                        top="30%"
                        left="76%"
                        label={t("home.UAE-2")}
                        lineHeight={60}
                      />
                    </motion.div>
                    <motion.div variants={pointVariants}>
                      <LocationLabel
                        top="20%"
                        left="84%"
                        label={t("home.UAE-3")}
                        lineHeight={60}
                      />
                    </motion.div>
                    <motion.div variants={pointVariants}>
                      <LocationLabel
                        top="55%"
                        left="84%"
                        label={t("home.UAE-4")}
                        lineHeight={60}
                      />
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.div variants={pointVariants}>
                      <LocationLabel
                        top="52%"
                        left="53%"
                        label={t("home.KSA")}
                        lineHeight={145}
                      />
                    </motion.div>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default MapSection;
