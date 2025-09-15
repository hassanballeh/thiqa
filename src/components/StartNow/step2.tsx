"use client"
import React, { useState, useEffect } from 'react'
import Step1 from './Step1';
import { useTranslation } from 'react-i18next'
import StepPre from './StepPre';
import StepPost from './StepPost';
import Link from 'next/link';

const stagesData = [
  {
    title: "Prepaid Plan",
    subtitle: "Pay now and secure your spot instantly.",
  },
  {
    title: "Postpaid Plan",
    subtitle: "Pay later, after registration is confirmed.",
  },
];

const Step2 = () => {
  const { t } = useTranslation();
  const [showStep1, setShowStep1] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // === Default value 0 if not exist ===
  useEffect(() => {
    const savedIndex = localStorage.getItem("step2-selected");
    if (savedIndex !== null) {
      setSelectedIndex(parseInt(savedIndex));
    } else {
      localStorage.setItem("step2-selected", "0");
      setSelectedIndex(0);
    }
  }, []);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    localStorage.setItem("step2-selected", index.toString());
  };

  if (showStep1) return <Step1 />;

  return (
    <div className=" mx-auto my-6 mb- bg-white rounded-3xl shadow-sm p-6 md:p-12 w-full h-full">

      {/* === Icons Row === */}
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-20 relative">
          {["/step1.svg", "/step2-2.svg"].map((icon, idx) => (
            <div key={idx} className="flex flex-col items-center relative z-10">
              <img
                src={icon}
                alt={`Step ${idx + 1}`}
                className="w-14 h-14 md:w-16 md:h-16 mb-2"
              />
              
            </div>
          ))}

          {/* الخطوط بين الأيقونات */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gold z-0 translate-y-[-50%]" />
          {/* <div className="absolute top-1/2 left-[55.5%] w-[30%] h-[2px] bg-gray-300 z-0 -translate-y-1/2" /> */}
        </div>
      </div>

      {/* === Title === */}
      <h2 className="text-3xl font-bold text-center text-primary mt-10">
        {t("home.49-step2-1")} 
      </h2>

      {/* === Subtitle === */}
      <p className="text-center text-gray1 mt-2 max-w-xl mx-auto">
        {t("home.49-step2-2")}  
      </p>

      {/* === Cards === */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 text-center">
        {stagesData.map((stage, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`bg-[#EEF1F8] rounded-lg p-4 cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-2
              ${selectedIndex === index ? "border-2 border-primary" : ""}`}
          >
            <h3 className="text-xl font-semibold text-gray1 mb-2">{stage.title}</h3>
            <p className="text-sm text-gray1">{stage.subtitle}</p>
          </div>
        ))}
      </div>

      {/* === Step3 Under Cards === */}
      <div className="mt-10">
  {selectedIndex === 0 && <StepPre />}
  {selectedIndex === 1 && <StepPost />}
</div>

      {/* === Buttons === */}
 <div className="mt-10 md:mt-20 flex justify-center gap-4">
        <button onClick={() => setShowStep1(true)} className="bg-primary text-white px-1 py-2.5 w-52 rounded-full hover:bg-primary/80 transition">
          Previous
        </button>
        <Link 
          href="/tutoring-plan#book-form">
          <button className="bg-primary text-white px-1 py-2.5 w-52 rounded-full hover:bg-primary hover:text-white transition">
            Next
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Step2;
