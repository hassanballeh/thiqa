"use client";
import React, { useEffect, useState } from "react";
import CustomButton from "../Custom/CustomButton";
import { FaStar } from "react-icons/fa";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const { t } = useTranslation();
  const testimonials = [
    {
      name: t("about.1-feedback1-name"),
      initial: "أ",
      text: t("about.1-feedback1"),
    },
    {
      name: t("about.1-feedback2-name"),
      initial: "س",
      text: t("about.1-feedback2"),
    },
    {
      name: t("about.1-feedback3-name"),
      initial: "س",
      text: t("about.1-feedback3"),
    },
    {
      name: t("about.1-feedback4-name"),
      initial: "م",
      text: t("about.1-feedback4"),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval); // تنظيف عند الخروج
  }, [testimonials.length]);

  const testimonial = testimonials[currentIndex];

  return (
    <div className="bg-white py-14 px-4">
      <section className="container mx-auto grid gap-3 grid-cols-1 md:grid-cols-2 place-items-center md:place-items-stretch w-full">
        <div className="flex-1 flex flex-col justify-center items-start gap-4">
          <CustomButton
            label={t("about.1-icon")}
            bgColor="bg-[#F8B21F]"
            textColor="text-white"
            hoverBg="bg-[#e19f1a]"
            href="/contact"
          />
          <div className="   text-center md:text-start  max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-snug">
              {t("about.1-heading1")}
            </h2>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex} // مهم عشان framer-motion يعرف يبدل
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="mt-20 w-full h-[330px] bg-blue_gray shadow-sm rounded-3xl text-gray1 px-10 py-10 flex flex-col justify-center relative"
            >
              <img
                src="/double-qout.svg"
                alt="Quote"
                className="absolute -top-8 left-8 w-16 h-16"
              />

              <div className="flex gap-1 mt-6 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-gold text-xl" />
                ))}
              </div>

              <p className="text-[0.98rem] font-light leading-relaxed max-w-md">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-10 rounded-full bg-[#D9D9D9] flex items-center justify-center">
                  <span className="text-primary font-bold">
                    {testimonial.initial}
                  </span>
                </div>
                <h4 className="font-light">{testimonial.name}</h4>
              </div>

              <div className="absolute bottom-6 right-6 flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 bg-[#4d4d4d66] rounded-full shadow-md flex items-center justify-center"
                >
                  <ArrowLeft className="text-white" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 bg-[#4d4d4d66] rounded-full shadow-md flex items-center justify-center"
                >
                  <ArrowRight className="text-white" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <section className="flex w-full gap-2 h-[520px]">
          <div className="flex-1 flex flex-col gap-2">
            <div className="relative flex-[2] self-center rounded-3xl bg-[#D9D9D9] overflow-hidden">
              <img
                src="./gallery/about-1.png"
                alt="Anniversary"
                className="w-full h-full scale-[1.2]"
              />
            </div>

            <div className="flex-[1] rounded-3xl text-white bg-primary flex flex-col items-start justify-center px-8 py-4">
              <img src="/awords.svg" alt="Icon" className="w-8 h-8 mb-2" />
              <span className="text-3xl font-bold">5+</span>
              <p className="text-lg font-bold max-w-xs">
                {" "}
                {t("about.1-number1-heading1")}
              </p>
              <p className="text-xs font-extralight max-w-48">
                {" "}
                {t("about.1-number1-heading2")}
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <div className="flex-[1] rounded-3xl text-white bg-gold flex flex-col  items-start justify-center px-8 py-4">
              <img src="/Teacher.svg" alt="Icon" className="w-8 h-8 mb-2" />
              <span className="text-3xl font-bold">50,000+</span>
              <p className="text-lg font-bold max-w-xs">
                {" "}
                {t("about.1-number2-heading1")}
              </p>
              <p className="text-xs font-extralight max-w-48">
                {" "}
                {t("about.1-number2-heading2")}
              </p>
            </div>

            <div className="flex-[2] self-center rounded-3xl bg-[#D9D9D9] overflow-hidden">
              <img
                src="./gallery/Mask group (2).png"
                alt="Top 50 Future Companies"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Hero;
