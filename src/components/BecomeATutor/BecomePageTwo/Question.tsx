"use client";
import { AccordionItem } from "@/components/Custom/Accordion";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Question = () => {
  const { t } = useTranslation();

  const items = [
    {
      title: t("become.54-questions1"),
      content: t("become.54-answer1"),
    },
    {
      title: t("become.54-questions2"),
      content: t("become.54-answer2"),
    },
    {
      title: t("become.54-questions3"),
      content: t("become.54-answer3"),
    },
    {
      title: t("become.54-questions4"),
      content: t("become.54-answer4"),
    },
    {
      title: t("become.54-questions5"),
      content: t("become.54-answer5"),
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  //
  return (
    <div className="container mx-auto px-4 py-10 md:py-20">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center  text-gray1">
        {/* Text Section */}
        <div className="text-2xl md:text-4xl max-w-md flex flex-col justify-center  text-center md:text-start mx-auto md:mx-0">
          <h2 className="font-bold text-primary leading-relaxed ">
            {t("become.54-heading1")}
          </h2>
          <p className="text-sm max-w-xs sm:max-w-none font-light mt-4 leading-relaxed">
            {t("become.54-heading2")}{" "}
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
