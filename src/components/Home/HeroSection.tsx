"use client";
import { useEffect, useState } from "react";
import HeroSlide from "../Custom/slider";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  const slides = [
    {
      title: t("home.1-heading-primary"),
      subtitle: t("home.1-heading-black"),
      description: t("home.1-heading2"),
      image: "/1.png",
      icon1: t("home.14-icons1"),
      icon2: t("home.1-icons2"),
      link1: "/tutoring-plan#book-form",
      changePos: false,
      testimonials: [
        {
          name: t("home.1-feedback1-name"),
          text: t("home.1-feedback1"),
          position:
            "sm:bottom-[37%] sm:left-[12%] bottom-[50%] left-[0%] sm:w-[262px] sm:h-[196px]",
          avatar: "/gif/isto-unscreen.gif",
          layerImage: "/Layer_1 (3).svg",
          layerPosition: "bottom-[35%] left-[10%]",
        },
        {
          name: t("home.1-feedback2-name"),
          text: t("home.1-feedback2"),
          position:
            "sm:top-[13%] sm:right-[11%] top-[-9%] right-[-2%] sm:w-[262px] sm:h-[165px]",
          avatar: "/Layer_1 (3).svg",
          layerGif: "/gif/isto-unscreen.gif",
          layerPosition: "top-[6%] right-[6%]",
        },
        {
          name: t("home.1-feedback3-name"),
          text: t("home.1-feedback3"),
          position:
            "sm:bottom-[9%] sm:right-[11%] bottom-[33%] right-[0%] sm:w-[223px] sm:h-[196px]",
          avatar: "/student3-avatar.svg",
          bgColor: "bg-gold",
          textColor: "text-white",
        },
      ],
    },
    {
      title: t("home.8-heading-primary"),
      subtitle: t("home.8-heading-black"),
      description: t("home.8-heading2"),
      image: "/Untitled-71.png",
      icon1: t("home.14-icons1"),
      icon2: t("home.8-icons2"),
      link1: "/form/join-us",
      changePos: true,
      testimonials: [
        {
          name: t("home.8-feedback1-name"),
          text: t("home.8-feedback1"),
          position:
            "sm:bottom-[33%] sm:left-[12%] bottom-[50%] left-[0%] sm:w-[262px] sm:h-[196px]",
          avatar: "/gif/isto-unscreen.gif",
          layerImage: "/Layer_1 (3).svg",
          layerPosition: "bottom-[30%] left-[10%]",
        },
        {
          name: t("home.8-feedback2-name"),
          text: t("home.8-feedback2"),
          position:
            "sm:top-[18%] sm:right-[11%] top-[-9%] right-[-2%] sm:w-[262px] sm:h-[165px]",
          avatar: "/Layer_1 (3).svg",
          layerGif: "/gif/isto-unscreen.gif",
          layerPosition: "top-[11%] right-[6%]",
        },
        {
          name: t("home.8-feedback3-name"),
          text: t("home.8-feedback3"),
          position:
            "sm:bottom-[4%] sm:right-[11%] bottom-[33%] right-[0%] sm:w-[223px] sm:h-[196px]",
          avatar: "/student3-avatar.svg",
          bgColor: "bg-gold",
          textColor: "text-white",
        },
      ],
    },
    {
      title: t("home.14-heading-primary"),
      subtitle: t("home.14-heading-black"),
      description: t("home.14-heading2"),
      image: "/boy1.png",
      icon1: t("home.14-icons1"),
      icon2: t("home.14-icons2"),
      link1: "/tutoring-plan#book-form",
      changePos: true,
      testimonials: [
        {
          name: t("home.14-feedback1-name"),
          text: t("home.14-feedback1"),
          position:
            "sm:bottom-[33%] sm:left-[12%] bottom-[50%] left-[0%] sm:w-[262px] sm:h-[196px]",
          avatar: "/gif/isto-unscreen.gif",
          layerImage: "/Layer_1 (3).svg",
          layerPosition: "bottom-[30%] left-[10%]",
        },
        {
          name: t("home.14-feedback2-name"),
          text: t("home.14-feedback2"),
          position:
            "sm:top-[18%] sm:right-[11%] top-[-9%] right-[-2%] sm:w-[262px] sm:h-[165px]",
          avatar: "/Layer_1 (3).svg",
          layerGif: "/gif/isto-unscreen.gif",
          layerPosition: "top-[11%] right-[6%]",
        },
        {
          name: t("home.14-feedback3-name"),
          text: t("home.14-feedback3"),
          position:
            "sm:bottom-[4%] sm:right-[11%] bottom-[33%] right-[0%] sm:w-[223px] sm:h-[196px]",
          avatar: "/student3-avatar.svg",
          bgColor: "bg-gold",
          textColor: "text-white",
        },
      ],
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative min-h-[100vh] lg:min-h-[90vh] 2xl:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white ">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out
            ${
              i === index
                ? "opacity-100 translate-x-0 z-20"
                : "opacity-0 translate-x-10 z-0"
            }
          `}
        >
          <HeroSlide {...slide} />
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="absolute bottom-[4px] md:bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`transition-all duration-300 rounded-full ${
              i === index
                ? "w-8 h-3 bg-primary scale-110"
                : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
