"use client";
import { AccordionItem } from "@/components/Custom/Accordion";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Question = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const items = [
    {
      title: t("become.21-questions1"),
      content: t("become.21-answer1"),
    },
    {
      title: t("become.21-questions2"),
      content: t("become.21-answer2"),
    },
    {
      title: t("become.21-questions3"),
      content: t("become.21-answer3"),
    },
    {
      title: t("become.21-questions4"),
      content: t("become.21-answer4"),
    },
    {
      title: t("become.21-questions5"),
      content: t("become.21-answer5"),
    },
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-20">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-gray1">
        {/* Text Section */}
        <div className="text-2xl md:text-4xl w-full md:max-w-md flex flex-col justify-center items-center md:items-stretch text-center md:text-start">
          <h2 className="font-bold text-primary leading-relaxed ">
            {t("become.21-heading1")}
          </h2>
          <p className="text-sm font-light mt-4 leading-relaxed max-w-xs md:max-w-[90%]">
            {t("become.21-heading2")}{" "}
          </p>
        </div>

        {/* Accordion Section */}
        <div className="w-full">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onToggle={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Question;
