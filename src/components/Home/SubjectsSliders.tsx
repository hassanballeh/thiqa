"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";

const SubjectsSliders = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<keyof typeof dataSets>("icon1");
  const [country, setCountry] = useState<string>("ae");

  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const updateCountry = () => {
    const storedCountry = sessionStorage.getItem("country")?.toLowerCase();
    setCountry(storedCountry || "ae");
  };

  useEffect(() => {
    updateCountry();
    window.addEventListener("country-changed", updateCountry);
    return () => window.removeEventListener("country-changed", updateCountry);
  }, []);

  const getArabicKey = () =>
    country === "sa" ? "home.55-arabic-sa" : "home.55-arabic";

  const dataSets = {
    icon1: [
      { title: t("home.55-english"), image: "/eng 1.svg" },
      { title: t("home.55-math"), image: "/mathematics 1.svg" },
      { title: t("home.55-science"), image: "/atom 1.svg" },
      { title: t(getArabicKey()), image: "/arabic.svg" },
      { title: t("home.55-islamic"), image: "/book 1.svg" },
      { title: t("home.55-social"), image: "/social-studies2.svg" },
      { title: t("home.55-history"), image: "/history 1.svg" },
      { title: t("home.55-geo"), image: "/globe 1.svg" },
    ],
    icon2: [
      { title: t("home.55-english"), image: "/eng 1.svg" },
      { title: t("home.55-math"), image: "/mathematics 1.svg" },
      { title: t("home.55-science"), image: "/atom 1.svg" },
      { title: t(getArabicKey()), image: "/arabic.svg" },
      { title: t("home.55-islamic"), image: "/book 1.svg" },
      { title: t("home.55-history"), image: "/history 1.svg" },
      { title: t("home.55-geo"), image: "/globe 1.svg" },
    ],
    icon3: [
      { title: t("home.55-english"), image: "/eng 1.svg" },
      { title: t("home.55-math"), image: "/mathematics 1.svg" },
      { title: t("home.55-science"), image: "/atom 1.svg" },
      { title: t(getArabicKey()), image: "/arabic.svg" },
      { title: t("home.55-islamic"), image: "/book 1.svg" },
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

  // Scroll speed in pixels per frame
  const scrollSpeed = 1;

  // Duplicate items if fewer than 5 to always show 5
  const getDisplayedItems = () => {
    const items = [...dataSets[selected]];
    while (items.length < 5) {
      items.push(...dataSets[selected]);
    }
    return items;
  };

  const displayedItems = getDisplayedItems();
  const scrollItems = [...displayedItems, ...displayedItems]; // duplicate for infinite scroll

  const startScroll = (direction: "next" | "prev") => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const step = () => {
      if (!scrollContainer) return;

      if (direction === "next") {
        scrollContainer.scrollLeft += scrollSpeed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      } else {
        scrollContainer.scrollLeft -= scrollSpeed;
        if (scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
        }
      }

      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);
  };

  const stopScroll = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  return (
    <div className="relative w-full py-10 md:py-20 bg-white">
      <div className="container mx-auto space-y-6 md:space-y-12">
        <div className="text-center mb-8 md:mb-16">
          <h3 className="font-bold text-primary text-2xl md:text-3xl">
            {t("home.55-heading1")}
          </h3>
          <span className="text-gray1 text-[15px] md:text-sm mt-2 block">
            {t("home.55-heading2")}
          </span>
        </div>

        {/* Icon Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          {(Object.keys(dataSets) as Array<keyof typeof dataSets>).map(
            (key, idx) => {
              let iconTitle = t(`home.55-icon${idx + 1}`);
              if (key === "icon3" && country === "sa") {
                iconTitle = t("home.55-icon3-sa");
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
            }
          )}
        </div>

        {/* Desktop Infinite Scroll Carousel */}
        <div className="hidden lg:flex items-center justify-center relative">
          {/* Prev Arrow */}
          <button
            onMouseEnter={() => startScroll("prev")}
            onMouseLeave={stopScroll}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full z-10 hover:bg-blue-600 shadow-md"
          >
            <IoMdArrowBack size={18} />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex flex-nowrap overflow-hidden gap-4 w-full max-w-5xl"
          >
            {scrollItems.map((item, index) => (
              <div
                key={index}
                className="bg-[#EEF1F8] shadow-md rounded-xl py-8 px-4 text-center flex flex-col items-center justify-center flex-shrink-0"
                style={{ minWidth: "20%" }} // show 5 cards
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-10 h-10 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-700 text-sm font-medium">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onMouseEnter={() => startScroll("next")}
            onMouseLeave={stopScroll}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full z-10 hover:bg-blue-600 shadow-md"
          >
            <IoMdArrowForward size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubjectsSliders;
