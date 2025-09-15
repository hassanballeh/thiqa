"use client";
import React, { useEffect, useRef , useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { useTranslation } from 'react-i18next'

const SubjectsSliders = () => {
  const { t } = useTranslation();
const [selected, setSelected] = useState<keyof typeof dataSets>("icon1");
const [country, setCountry] = useState<string>("ae"); // قيمة افتراضية

const updateCountry = () => {
  const storedCountry = sessionStorage.getItem("country")?.toLowerCase();
  setCountry(storedCountry || "ae");
};

useEffect(() => {
  updateCountry(); // أول تحميل
  window.addEventListener("country-changed", updateCountry); // 👈 استمع للحدث
  return () => window.removeEventListener("country-changed", updateCountry);
}, []);

const getArabicKey = () => (country === "sa" ? "home.55-arabic-sa" : "home.55-arabic");

  const dataSets = {
    icon1: [
      { title: t(getArabicKey()), image: "/arabic.svg" },
      { title: t("home.55-islamic"), image: "/book 1.svg" },
      { title: t("home.55-social"), image: "/social-studies 1.svg" },
      { title: t("home.55-history"), image: "/history 1.svg" },
      { title: t("home.55-geo"), image: "/globe 1.svg" },
    ],
    icon2: [
      { title: t("home.55-english"), image: "/eng 1.svg" },
      { title: t(getArabicKey()), image: "/arabic.svg" },
      { title: t("home.55-math"), image: "/mathematics 1.svg" },
      { title: t("home.55-science"), image: "/atom 1.svg" },
      { title: t("home.55-history"), image: "/history 1.svg" },
      { title: t("home.55-geo"), image: "/globe 1.svg" },
      { title: t("home.55-islamic"), image: "/book 1.svg" },
    ],
    icon3: [
      { title: t("home.55-english"), image: "/eng 1.svg" },
      { title: t(getArabicKey()), image: "/arabic.svg" },
      { title: t("home.55-math"), image: "/mathematics 1.svg" },
      { title: t("home.55-science"), image: "/atom 1.svg" },
      { title: t("home.55-history"), image: "/history 1.svg" },
      { title: t("home.55-geo"), image: "/globe 1.svg" },
      { title: t("home.55-civics"), image: "/civic 1.svg" },
    ],
    icon4: [
      { title: t("home.55-physics"), image: "/physics 1.svg" },
      { title: t("home.55-chem"), image: "/molecule 1.svg" },
      { title: t("home.55-biology"), image: "/dna 2.svg" },
      { title: t("home.55-calculus"), image: "/calculus 1.svg" },
    ],
  };

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = () => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.querySelector("div")?.clientWidth || 200;
      return itemWidth + 16;
    }
    return 220;
  };

  const goNext = () => scrollRef.current?.scrollBy({ left: scrollByAmount(), behavior: "smooth" });
  const goPrev = () => scrollRef.current?.scrollBy({ left: -scrollByAmount(), behavior: "smooth" });

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative w-full py-10 md:py-20 bg-white"
    >
      <div className="container mx-auto space-y-6 md:space-y-12">
        <div className="text-xl md:text-3xl text-center mb-8 md:mb-16 mx-auto">
          <div className="inline-block relative max-w-md mx-auto">
            <h3 className="font-bold text-primary leading-relaxed">{t("home.55-heading1")}</h3>
            <img src="/line2.png" alt="line" className="hidden md:block w-full max-w-md mx-auto" />
            <img src="/line2.png" alt="line" className="hidden md:block w-full max-w-md mx-auto" />
          </div>
          <span className="text-gray1 text-[15px] md:text-sm mt-2 md:mt-4 block max-w-md mx-auto">
            {t("home.55-heading2")}
          </span>

<div className="flex flex-wrap items-center justify-center gap-4 my-4 md:my-10">
  {(Object.keys(dataSets) as Array<keyof typeof dataSets>).map((key, idx) => {
    // نحدد الـ title للزر
    let iconTitle = t(`home.55-icon${idx + 1}`);

    // إذا كان الـ icon3 وبلد sa نستخدم نسخة sa
    if (key === "icon3" && country === "sa") {
      iconTitle = t("home.55-icon3-sa"); // لازم تضيفي هالمفتاح بالترجمات
    }

    return (
      <button
        key={idx}
        onClick={() => setSelected(key)}
        className={`w-60 md:w-52 px-4 md:px-2 py-1.5 text-xs md:text-sm rounded-full border transition-colors duration-300 ${
          selected === key
            ? "bg-primary text-white"
            : "bg-transparent text-primary border-primary hover:bg-primary/70 hover:text-white"
        }`}
      >
        {iconTitle}
      </button>
    );
  })}
</div>

{/* حاوية السلايدر + الأزرار (موبايل وويب) */}
<div className="relative w-full">
  {/* أزرار موبايل - تبقى كما هي */}
  <div className="lg:hidden relative flex">
    <button
      onClick={goPrev}
      className="absolute left-0 top-full md:top-1/2 md:-translate-y-1/2 bg-primary text-white p-2 rounded-full z-10 hover:bg-blue-600"
    >
      <IoMdArrowBack size={24} />
    </button>

    <button
      onClick={goNext}
      className="absolute right-0 top-full md:top-1/2 md:-translate-y-1/2 bg-primary text-white p-2 rounded-full z-10 hover:bg-blue-600"
    >
      <IoMdArrowForward size={24} />
    </button>

    <AnimatePresence mode="wait">
      <motion.div
        key={selected}
        ref={scrollRef}
        className="flex gap-4 px-10 py-4 overflow-x-auto flex-nowrap scroll-smooth scrollbar-hide"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ duration: 0.4 }}
      >
        {dataSets[selected].map((item, index) => (
          <div
            key={index}
            className="bg-[#EEF1F8] w-[140px] shadow-md rounded-xl py-8 px-4 text-center flex-shrink-0 flex flex-col items-center justify-center"
          >
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-10 h-10 object-cover rounded-lg mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <p className="text-gray-700 text-sm font-medium">{item.title}</p>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  </div>

  {/* شبكة ديسكتوب مع أزرار على الأطراف */}
  <div className="hidden lg:flex items-center justify-center relative">
    {/* زر السابق على يسار الشبكة */}
    <button
      onClick={goPrev}
      className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary text-white p-1.5 rounded-full z-10 hover:bg-blue-600 shadow-md"
    >
      <IoMdArrowBack size={18} />
    </button>

    <AnimatePresence mode="wait">
      <motion.div
        key={selected}
        className="grid gap-4 justify-center items-center w-full max-w-4xl"
        style={{
          gridTemplateColumns: `repeat(${dataSets[selected].length}, minmax(140px, 1fr))`, // 👈 عرض ثابت للكاردات
        }}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ duration: 0.4 }}
      >
        {dataSets[selected].map((item, index) => (
          <div
            key={index}
            className="bg-[#EEF1F8] shadow-md rounded-xl py-8 px-4 text-center flex flex-col items-center justify-center transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-blue-100"
          >
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-10 h-10 object-cover rounded-lg mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <p className="text-gray-700 text-sm font-medium">{item.title}</p>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>

    {/* زر التالي على يمين الشبكة */}
    <button
      onClick={goNext}
      className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-white p-1.5 rounded-full z-10 hover:bg-blue-600 shadow-md"
    >
      <IoMdArrowForward size={18} />
    </button>
  </div>
</div>

        </div>
      </div>
    </motion.div>
  );
};

export default SubjectsSliders;

