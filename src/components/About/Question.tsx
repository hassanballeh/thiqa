"use client"
import { AccordionItem } from '@/components/Custom/Accordion'
import React, { useState } from 'react'

const items = [
  {
    title: "Who are we at Thiqa Education?",
    content: "Thiqa is a UAE-licensed educational platform since 2022, offering top private tutors to help your children excel academically and achieve exceptional results across all subjects, ensuring their continued success.",
  },
  {
    title: "Is online tutoring as effective as in-home tutoring?",
    content: "نوفر دروس خصوصية، محتوى تفاعلي، ومتابعة أكاديمية مخصصة.",
  },
  {
    title: "What are Thiqa s teacher selection criteria?",
    content: "نعم! يمكنك تحميل التطبيق من متجر Play وApp Store.",
  },
    {
    title: "What teaching methods does Thiqa offer?",
    content: "نعم! يمكنك تحميل التطبيق من متجر Play وApp Store.",
  },
    {
    title: "In which cities is Thiqa Education available?",
    content: "نعم! يمكنك تحميل التطبيق من متجر Play وApp Store.",
  },
]


const Question = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

//   
  return (
   <div className='bg-white py-16'>
     <div className="container mx-auto px-4">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-gray1">
        {/* Text Section */}
        <div className="text-2xl md:text-4xl  max-w-md flex flex-col justify-center text-center md:text-start">
          <h2 className="font-bold text-primary leading-relaxed ">
                        Do you have questions about Thiqa s teaching for your children?
          </h2>
          <p className="text-sm font-light mt-4 leading-relaxed">
            Discover how we can help you ensure their academic success, whether through homeschooling or online learning.
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
   </div>
  )
}

export default Question
