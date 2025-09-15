"use client"
import React, { useState } from 'react'
import { AccordionItem } from '../Custom/Accordion'
import { useTranslation } from 'react-i18next';

const AccordionHome = () => {
          const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

const answer2Items = Array.from({ length: 6 }, (_, i) => t(`home.81-answer2-${i + 1}`));

const items = [
  {
    title: t("home.81-questions1"),
    content: t("home.81-answer1"),  
  },
  {
    title: t("home.81-questions2"),
    // نخليها مصفوفة بدلاً من نص واحد
    content: answer2Items,  
  },
  {
    title: t("home.81-questions3"),
    content: t("home.81-answer3"),  
  },
  {
    title: t("home.81-questions4"),
    content: t("home.81-answer4"),  
  },
  {
    title: t("home.81-questions5"),
    content: t("home.81-answer5"),  
  },
  {
    title: t("home.81-questions6"),
    content: t("home.81-answer6"),  
  },
  {
    title: t("home.81-questions7"),
    content: t("home.81-answer7"),  
  },
  {
    title: t("home.81-questions8"),
    content: t("home.81-answer8"),  
  },
];

return (
  <div className="max-w-6xl mx-auto px-4 py-20">
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-gray1">
      {/* Text Section */}
      <div className="text-2xl md:text-4xl  max-w-md flex flex-col justify-center text-center md:text-start">
        <h2 className="font-bold text-primary leading-relaxed ">
          {t("home.81-heading1")}
        </h2>
        <p className="text-sm font-light mt-4 leading-relaxed ">
          {t("home.81-heading2")}
        </p>
      </div>

      {/* Accordion Section */}
      <div className="w-full">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            // إذا كان الجواب الثاني، نعرضه كـ <ul>
            content={
              Array.isArray(item.content) ? (
                <ul className="list-disc pl-5 space-y-2">
                  {item.content.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              ) : (
                item.content
              )
            }
            isOpen={openIndex === index}
            onToggle={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </section>
  </div>
);

}

export default AccordionHome
