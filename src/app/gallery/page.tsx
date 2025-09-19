"use client";
// import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { motion } from "framer-motion";

const Gallery = () => {
  const { t } = useTranslation();
  const eventsData = [
    {
      year: "2025",
      items: [
        {
          date: { day: "6", month: "May" },
          title: "Majra Sustainable Impact Challenge",
          description: t("gallery.1"),
          image: "/gallery/Mask group (1).png",
        },
        {
          date: { day: "28", month: "June" },
          title: "Top 50 Future Companies",
          description: t("gallery.2"),
          image: "/gallery/Mask group (2).png",
        },
      ],
    },
    {
      year: "2024",
      items: [
        {
          date: { day: "18", month: "Dec" },
          title: "HolonIQ List",
          description: t("gallery.3"),
          image: "/gallery/Mask group (3).png",
        },
        {
          date: { day: "19", month: "Nov" },
          title: "Forbes Under 30",
          description: t("gallery.4"),
          image: "/gallery/Mask group (4).png",
        },
        {
          date: { day: "13", month: "Oct" },
          title: "GITEX Global",
          description: t("gallery.5"),
          image: "/gallery/Mask group (5).png",
        },
        {
          date: { day: "5", month: "Sep" },
          title: " Ma'an Certificate",
          description: t("gallery.6"),
          image: "/gallery/Mask group (6).png",
        },
        {
          date: { day: "20", month: "June" },
          title: "LEAP Festival (Saudi Arabia)",
          description: t("gallery.7"),
          image: "/gallery/Mask group (7).png",
        },
        {
          date: { day: "23", month: "May" },
          title: "One Dirham Makes a Difference' Initiative",
          description: t("gallery.9"),
          image: "/gallery/Mask group (14).png",
        },
        {
          date: { day: "6", month: "March" },
          title: " Bibin Program Investment",
          description: t("gallery.10"),
          image: "/gallery/Mask group (9).png",
        },
        {
          date: { day: "10", month: "April" },
          title: "Sharjah Entrepreneurship Festival",
          description: t("gallery.11"),
          image: "/gallery/Mask group (10).png",
        },
        {
          date: { day: "16", month: "Feb" },
          title: "Top 16 UAE EdTech Startups",
          description: t("gallery.13"),
          image: "/gallery/Mask group (11).png",
        },
      ],
    },
  ];
  return (
    <div className="py-12 bg-white text-gray1 ">
      <div className="container mx-auto">
        <div className=" flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-primary leading-tight">
              Our Events Gallery
            </h2>
            <p className="text-xs  font-light mt-4">{t("gallery.heading2")}</p>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          {eventsData.map((yearBlock) => (
            <div key={yearBlock.year} className="mb-12">
              {/* عنوان السنة */}
              <h3 className="text-lg md:text-xl font-semibold mb-6 ">
                {yearBlock.year} Events
              </h3>

              {yearBlock.items.map((event, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 sm:grid-cols-[70px_1fr] md:grid-cols-[80px_1fr_300px] gap-4 md:gap-6 items-start md:items-center mb-8"
                >
                  {/* التاريخ */}
                  <div className="text-center text-base md:text-lg font-medium ">
                    <div>{event.date.day}</div>
                    <div className="uppercase text-sm ">{event.date.month}</div>
                  </div>

                  {/* النص */}
                  <div className="border-l border-[#0056B1] pl-6">
                    <h4 className="font-bold ">{event.title}</h4>
                    <p className="text-sm mt-2 leading-relaxed font-light max-w-sm">
                      {event.description}
                    </p>
                  </div>

                  {/* الصورة */}
                  <div className="order-3 md:order-none mt-4 sm:mt-0 overflow-hidden rounded-lg">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={350}
                      height={300}
                      className="rounded-lg w-full h-auto object-cover transform transition-transform duration-500 ease-in-out hover:scale-125"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
