"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Support = () => {
  const { t } = useTranslation();
  const testimonials = [
    {
      name: t("become.10-feedback1-name"),
      initial: t("become.10-feedback1-name").trim().charAt(0),
      text: t("become.10-feedback1"),
      leftIcon: true,
    },
    {
      name: t("become.10-feedback2-name"),
      initial: t("become.10-feedback2-name").trim().charAt(0),
      text: t("become.10-feedback2"),
    },
    {
      name: t("become.10-feedback3-name"),
      initial: t("become.10-feedback3-name").trim().charAt(0),
      text: t("become.10-feedback3"),
      rightIcon: true,
    },
    {
      name: t("become.10-feedback4-name"),
      initial: t("become.10-feedback4-name").trim().charAt(0),
      text: t("become.10-feedback4"),
      // leftIcon: true,
    },
    {
      name: t("become.10-feedback5-name"),
      initial: t("become.10-feedback5-name").trim().charAt(0),
      text: t("become.10-feedback5"),
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [direction, setDirection] = useState(0); // 1 = next, -1 = prev

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const prevSlide = () => {
    if (startIndex > 0) {
      setDirection(-1);
      setStartIndex(startIndex - 1);
    }
  };

  const nextSlide = () => {
    if (startIndex + cardsToShow < testimonials.length) {
      setDirection(1);
      setStartIndex(startIndex + 1);
    }
  };

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + cardsToShow
  );

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative w-full py-8 pb-24 bg-white"
    >
      <div className="container mx-auto space-y-12">
        <div className="text-center mb-16 mx-auto">
          <div className="text-2xl lg:text-3xl  inline-block relative max-w-2xl mx-auto">
            <h3 className="font-bold text-primary leading-relaxed">
              {t("become.10-heading1")}{" "}
            </h3>
            <img
              src="/line-support.svg"
              alt="line"
              className="  max-w-xs mx-auto"
            />
          </div>
        </div>
        <div className="w-full relative">
          <button
            onClick={prevSlide}
            className="absolute -left-2 sm:-left-6 top-1/2 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full z-10 shadow-md"
            disabled={startIndex === 0}
          >
            <IoMdArrowBack size={20} />
          </button>

          <div className="flex gap-6 px-6 md:px-16 justify-center">
            <AnimatePresence mode="wait" initial={false}>
              {visibleTestimonials.map((testimonial, index) => {
                const isFirstCard = index === 0; // أول كارد ظاهر
                const isLastCard = index === visibleTestimonials.length - 1; // آخر كارد ظاهر

                return (
                  <motion.div
                    key={startIndex + index}
                    initial={{ x: direction === 1 ? 100 : -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction === 1 ? -100 : 100, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full max-w-[280px] bg-[#F0F5F9] shadow-sm rounded-[40px] text-gray1 px-6 pt-12 pb-6 flex flex-col justify-between relative min-h-[300px]"
                  >
                    {/* left image always on first card */}
                    {isFirstCard && (
                      <div className="absolute z-20 -top-10 -left-12 w-24">
                        <img
                          src="/gif/istolcro-unscreen.gif"
                          alt="Left decoration"
                        />
                      </div>
                    )}

                    {/* right image always on last card */}
                    {isLastCard && (
                      <div className="absolute -top-10 -right-6 w-20">
                        <img
                          src="/gif/istolha-unscreen.gif"
                          alt="Right decoration"
                        />
                      </div>
                    )}

                    <img
                      src="/qoute.svg"
                      alt="Quote"
                      className="absolute -top-4 left-6 w-10 h-10"
                    />

                    <p className="text-sm font-light max-w-sm leading-relaxed">
                      {testimonial.text}
                    </p>

                    <div className="flex items-start gap-3 mt-8">
                      <div className="w-10 h-10 rounded-full bg-[#D9D9D9] flex items-center justify-center">
                        <span className="text-primary font-bold">
                          {testimonial.initial}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h4 className="font-light text-xs">
                          {testimonial.name}
                        </h4>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-gold" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          <button
            onClick={nextSlide}
            className="absolute -right-2 sm:-right-6 top-1/2 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full z-10 shadow-md"
            disabled={startIndex + cardsToShow >= testimonials.length}
          >
            <IoMdArrowForward size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Support;
