"use client"
import { AccordionItem } from '@/components/Custom/Accordion';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

const Question = () => {
          const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

const items = [
  {
    title: t("academic.36-questions1"),
    content: t("academic.36-answer1"),  
  },
  {
    title: t("academic.36-questions2"),
    content: t("academic.36-answer2"),  
  },
    {
    title: t("academic.36-questions3"),
    content: t("academic.36-answer3"),  
  },
    {
    title: t("academic.36-questions4"),
    content: t("academic.36-answer4"),  
  },
    {
    title: t("academic.36-questions5"),
    content: t("academic.36-answer5"),  
  },
];
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-gray1">
        {/* Text Section */}
        <div className="text-2xl md:text-4xl  max-w-md flex flex-col justify-center text-center md:text-start">
          <h2 className="font-bold text-primary leading-relaxed ">       
                 {t("academic.36-heading1")}
          </h2>
          <p className="text-sm font-light mt-4 leading-relaxed ">
{t("academic.36-heading2")}          </p>
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
  )
}

export default Question
