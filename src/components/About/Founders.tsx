"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
const Founders = () => {
      const { t } = useTranslation();
      const founders = [
  {
    img: "/found1.png",
    img_sm: "/found1-sm.png",
    title: t("about.18-teacher1-1"),
    job: "Co-Founder & CEO",
    text: t("about.18-teacher1-2"),
    hoverTitle: "CEO",
  },
  {
    img: "/found2.png",
        img_sm: "/found2-sm.png",
    title: t("about.18-teacher2-1"),
    job: "Co-Founder & CFO",
    text: t("about.18-teacher2-2"),
    hoverTitle: "CFO",
  },
  {
    img: "/found3.png",
        img_sm: "/found3-sm.png",
    title: t("about.18-teacher3-1"),
    job: "Co-Founder & COO",
    text: t("about.18-teacher3-2"),
    hoverTitle: "COO",
  },
];

    const [activeIndex, setActiveIndex] = useState(0);

  return (
<div className="py- bg-white">
  <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px- py-12">
    
    <div className="md:col-span-1 flex flex-col justify-center items-center">
      <div className=" md:px-4 text-center md:text-start flex flex-col justify-center max-w-">
   <div className="text-3xl md:text-5xl">
         <h2 className=" text-primary font-roboto font-bold leading-snug">
 { t("about.18-heading1")}   </h2>
   </div>
        <p className="text-sm font-light text-gray1 leading-relaxed mt-4 md:max-w-sm ">
 { t("about.18-heading2")}        </p>
      </div>
    </div>
<div className="md:col-span-2 flex gap-4">
  {founders.map((item, index) => {
    const isActive = index === activeIndex;

    return (
      <div
        key={index}
        className={`group relative overflow-hidden rounded-[50px] cursor-pointer transition-all duration-500 ease-in-out`}
        onMouseEnter={() => setActiveIndex(index)}
        style={{
          flex: isActive ? "3" : "2",
        }}
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-[510px] object-cover object-center" 
          // ✅ الآن يتم التركيز في منتصف الصورة
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 pointer-events-none ${
            isActive ? "opacity-10" : "opacity-0"
          }`}
        ></div>

        {isActive ? (
          <div className="absolute bottom-4 md:bottom-12 left-2 md:left-7 font-roboto text-white transition-all duration-500">
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="text-lg font-medium">{item.job}</p>
            <p className="text-xs md:max-w-56 mt-2">{item.text}</p>
          </div>
        ) : (
          <h3
            className="absolute bottom-12 left-20 text-5xl font-semibold font-roboto text-white transition-all duration-500"
            style={{
              writingMode: "vertical-lr",
              transform: "rotate(180deg)",
            }}
          >
            {item.hoverTitle}
          </h3>
        )}
      </div>
    );
  })}
</div>




  </section>
</div>
  )
}

export default Founders