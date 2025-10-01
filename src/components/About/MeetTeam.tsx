"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import TeamCard from "../Custom/TeamCard";

type TabKey = "SST" | "STC" | "RDM" | "SDT" | "TST";

const MeetTeam = () => {
  const { t } = useTranslation();
  const dataMap: Record<
    TabKey,
    {
      title: string;
      description: string;
      image: string;
      objectPosition: "top" | "center" | "bottom";
      extra?: string;
    }[]
  > = {
    SST: [
      {
        title: t("about.23-sst-1"),
        description: "Desc 1",
        objectPosition: "top",
        image: "/employee/abd-al-hamid.jpg",
      },
      {
        title: t("about.23-sst-2"),
        description: "Desc 2",
        objectPosition: "top",
        image: "/employee/lilian.png",
      },
      {
        title: t("about.23-sst-3"),
        description: "Desc 2",
        objectPosition: "top",
        image: "/employee/haider.jpg",
      },
      {
        title: t("about.23-sst-4"),
        description: "Desc 3",
        objectPosition: "top",
        extra: "absolute inset-0 scale-[0.85] translate-y-[25px] border-none ",
        image: "/employee/alaa.jpg",
      },
      {
        title: t("about.23-sst-5"),
        description: "Desc 4",
        objectPosition: "top",
        image: "/employee/mostafa.jpg",
      },
      {
        title: t("about.23-sst-6"),
        description: "Desc 2",
        objectPosition: "top",
        extra: "absolute inset-0 scale-[1.4] translate-y-9 ",
        image: "/employee/ghassan.jpg",
      },
      {
        title: t("about.23-sst-7"),
        description: "Desc 4",
        objectPosition: "top",
        image: "/employee/abd-allah.jpg",
      },
    ],
    STC: [
      {
        title: t("about.23-stc-1"),
        description: "Desc 1",
        objectPosition: "top",
        extra:
          "absolute inset-0 translate-x-[15px] translate-y-[35px] border-none",
        image: "/employee/walaa.jpg",
      },
      {
        title: t("about.23-stc-2"),
        description: "Desc 2",
        objectPosition: "bottom",
        extra: "absolute inset-0 scale-[1.3] -translate-x-3 translate-y-9 ",

        image: "/employee/amal.jpg",
      },
    ],
    RDM: [
      {
        title: t("about.23-rdm-1"),
        description: "Desc 1",
        objectPosition: "top",
        image: "/employee/ghosoon.jpg",
      },
      {
        title: t("about.23-rdm-2"),
        description: "Desc 2",
        objectPosition: "top",
        extra:
          "absolute inset-0 scale-150 -translate-x-[2px] translate-y-[70px]",
        image: "/employee/marwa.jpg",
      },
    ],
    SDT: [
      {
        title: t("about.23-sdt"),
        description: "Desc 1",
        objectPosition: "center",
        image: "/employee/mohammed.jpg",
      },
    ],
    TST: [
      {
        title: t("about.23-tst-1"),
        description: "Desc 1",
        objectPosition: "top",
        image: "/employee/aysha.jpg",
      },
      {
        title: t("about.23-tst-2"),
        description: "Desc 2",
        objectPosition: "top",
        image: "/employee/ola.jpg",
      },
      {
        title: t("about.23-tst-3"),
        description: "Desc 3",
        objectPosition: "top",
        image: "/employee/homam.jpg",
      },
    ],
  };
  const [activeTab, setActiveTab] = useState<TabKey>("SST");

  return (
    <div className="w-full bg-white rounded-tl-3xl rounded-bl-3xl px-6 py-12 pb-16 relative flex flex-col gap-8 justify-center items-center text-center">
      <div className="relative inline-block">
        <h2 className="text-3xl lg:text-6xl font-roboto text-primary font-bold leading-snug relative z-10">
          {t("about.23-heading1")}
          {/*animate-slow-zoom  */}
          <span className="absolute top-16 -left-14  z-[-1] -rotate-6">
            <img src="/meet-arrow.svg" alt="decoration" className="h-24" />
          </span>
        </h2>
      </div>
      <p className="text-sm  text-gray1 max-w-3xl font-light">
        {t("about.23-heading2")}{" "}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 mt-2 mb-8">
        {Object.keys(dataMap).map((key) => {
          const isActive = activeTab === key;

          return (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key as TabKey)}
              className={`
          px-8 py-1.5 rounded-full text-sm transition-all duration-300
          ${
            isActive
              ? "bg-gold text-white"
              : "bg-[#DFE2EB] text-[#4D4D4D44] hover:bg-primary/70 hover:text-white"
          }
        `}
            >
              {key}
            </button>
          );
        })}
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        <AnimatePresence mode="wait">
          {dataMap[activeTab].map((item) => (
            <motion.div
              key={item.title} // لازم يكون key فريد عشان الأنيميشن يشتغل صح
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <TeamCard
                image={item.image}
                title={item.title}
                titleColor
                objectPosition={item.objectPosition}
                extra={item.extra ? item.extra : ""}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MeetTeam;
