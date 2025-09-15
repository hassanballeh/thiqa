"use client";
import React, { useState, useEffect } from "react";
import Step2 from "./step2";
import { useTranslation } from "react-i18next";

const stagesData = [
  { title: "Primary Stage", subtitle: "KG - G4" },
  { title: "Preparatory Stage", subtitle: "G5 - G8" },
  { title: "Secondary Stage", subtitle: "G9 - G12" },
  { title: "Other Stages", subtitle: "University - Special Cases" },
];

const Step1 = () => {
  const { t } = useTranslation();
  const [showStep2, setShowStep2] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // ✅ استرجاع الاختيار من localStorage عند التحميل
  useEffect(() => {
    const savedIndex = localStorage.getItem("selectedStage");
    if (savedIndex !== null) {
      setSelectedIndex(parseInt(savedIndex));
    }
  }, []);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    localStorage.setItem("selectedStage", index.toString()); // تخزين الاختيار
  };

  if (showStep2) return <Step2 />;

  return (
    <div className="container mx-auto my-6 mb-16 bg-white rounded-3xl shadow-sm p-6 md:p-12 w-full h-full">
      {/* === Icons Row === */}
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-20 relative">
          {["/step1.svg", "/step2.svg"].map((icon, idx) => (
            <div key={idx} className="flex flex-col items-center relative z-10">
              <img
                src={icon}
                alt={`Step ${idx + 1}`}
                className="w-14 h-14 md:w-16 md:h-16 mb-2"
              />
            </div>
          ))}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-100 z-0 translate-y-[-50%]" />
        </div>
      </div>

      {/* === Title === */}
      <h2 className="text-3xl font-bold text-center text-primary mt-10">
        Grade Level
      </h2>

      {/* === Subtitle === */}
      <p className="text-center text-gray1 text-lg mt-2 max-w-xl mx-auto">
        {t("home.49-step1-1")}
      </p>

      {/* === Cards === */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10 text-center">
        {stagesData.map((stage, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`bg-[#EEF1F8] rounded-lg p-4 cursor-pointer transition-transform duration-200 ease-out
              hover:-translate-y-2
              ${selectedIndex === index ? "border-2 border-primary" : ""}`}
          >
            <h3 className="text-xl font-semibold text-gray1 mb-2">
              {stage.title}
            </h3>
            <p className="text-sm text-gray1">{stage.subtitle}</p>
          </div>
        ))}
      </div>

      {/* === Buttons === */}
      <div className="mt-8 flex justify-center gap-4">
        <button
          disabled
          className="bg-[#D9D9D9] text-white w-52 px-1 py-2.5 rounded-full transition"
        >
          Previous
        </button>
        <button
          onClick={() => setShowStep2(true)}
          className="bg-primary text-white w-52 px-1 py-2.5 rounded-full hover:bg-primary/90 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1;
