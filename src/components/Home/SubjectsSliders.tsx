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

  useEffect(() => {
    scrollRef.current?.scrollTo({ left: 0, behavior: "auto" });
  }, [selected]);

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

  const scrollSpeed = 2;

  const startScroll = (direction: "next" | "prev") => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const step = () => {
      if (!scrollContainer) return;

      if (direction === "next") {
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth <
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft += scrollSpeed;
          animationRef.current = requestAnimationFrame(step);
        }
      } else {
        if (scrollContainer.scrollLeft > 0) {
          scrollContainer.scrollLeft -= scrollSpeed;
          animationRef.current = requestAnimationFrame(step);
        }
      }
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
        <div className="md:text-center mb-8 md:mb-16 flex flex-col md:items-center justify-center">
          <div className="sm:block hidden">
            <h3 className="font-bold text-primary text-3xl mb-2">
              {t("home.55-heading1")}
            </h3>
            <h3 className="font-bold text-primary text-3xl">
              {t("home.55-heading2")}
            </h3>
          </div>
          <div className="sm:hidden block">
            <h3 className="font-bold text-primary text-4xl mb-2">
              {t("home.55-heading1")}
              {t("home.55-heading2")}
            </h3>
          </div>
          <div className="sm:block hidden">
            <div>
              <img src="/Lines22.svg" alt="" className="w-[500px]" />
            </div>
            <p className="text-gray1 text-[18px] mt-2 block">
              {t("home.55-heading3")}
            </p>
            <p className="text-gray1 text-[18px] mt-2 block">
              {t("home.55-heading4")}
            </p>
          </div>
          <div className="sm:hidden block mt-4">
            <p className="text-gray1 text-[18px] mt-2 block">
              {t("home.55-heading3")} {t("home.55-heading4")}
            </p>
          </div>
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
                  className={`w-full md:w-52 px-4 md:px-2 md:py-1.5 py-3  text-sm rounded-full border transition-colors duration-300 ${
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

        {/* Desktop */}
        {selected === "icon4" ? (
          // Static row for icon4
          <div className="flex justify-center sm:flex-row flex-col items-center gap-4">
            {dataSets.icon4.map((item, index) => (
              <div
                key={index}
                className="bg-[#EEF1F8] shadow-md rounded-xl py-8 px-4 text-center flex flex-col items-center justify-center flex-shrink-0 md:w-[200px] w-[150px] "
                style={{ minWidth: "20%" }}
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
        ) : (
          // Carousel for other icons
          <div className="flex items-center justify-center relative">
            <button
              onMouseEnter={() => startScroll("prev")}
              onMouseLeave={stopScroll}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full z-10 hover:bg-blue-600 shadow-md"
            >
              <IoMdArrowBack size={18} />
            </button>

            <div
              ref={scrollRef}
              className="flex flex-nowrap overflow-hidden gap-4 w-full max-w-5xl"
            >
              {dataSets[selected].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#EEF1F8] shadow-md rounded-xl py-8 px-4 text-center flex flex-col items-center justify-center flex-shrink-0 md:w-[200px] w-[150px]"
                  style={{ minWidth: "20%" }}
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

            <button
              onMouseEnter={() => startScroll("next")}
              onMouseLeave={stopScroll}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full z-10 hover:bg-blue-600 shadow-md"
            >
              <IoMdArrowForward size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubjectsSliders;
