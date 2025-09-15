"use client";
import React, { useEffect, useRef, useCallback } from "react";
import CustomButton from "../Custom/CustomButton";
import { FaPause, FaPlay, FaStar } from "react-icons/fa";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import CountUp from "react-countup";

const variants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const Numbers = () => {
  const { t } = useTranslation();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      text: t("home.30-feedback1"),
      name: t("home.30-feedback1-name"),
      icon: "U",
      initial: "U",
    },
    {
      text: t("home.30-feedback2"),
      name: t("home.30-feedback2-name"),
      icon: "A",
      initial: "A",
    },
    {
      text: t("home.30-feedback3"),
      name: t("home.30-feedback3-name"),
      icon: "A",
      initial: "A",
    },
    {
      text: t("home.30-feedback4"),
      name: t("home.30-feedback4-name"),
      icon: "A",
      initial: "A",
    },
    {
      text: t("home.30-feedback5"),
      name: t("home.30-feedback5-name"),
      icon: "A",
      initial: "A",
    },
  ];

  const voices = [
    { link: "/youtube/1.m4a" },
    { link: "/youtube/2.m4a" },
    { link: "/youtube/3.m4a" },
    { link: "/youtube/4.m4a" },
  ];

  const videos = [
    {
      link: "https://youtube.com/shorts/IH6oyoML-eM",
    },
    {
      link: "https://youtube.com/shorts/_HaRCqttzys",
    },
    {
      link: "https://youtube.com/shorts/kOiN7rRsj7Q",
    },
    {
      link: "https://youtube.com/shorts/xUD5FDH4YW0",
    },
    {
      link: "https://youtube.com/shorts/1NDcc-Qq0wM",
    },
  ];

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const [activeTab, setActiveTab] = useState<"messages" | "voice" | "video">(
    "messages"
  );
  const [current, setCurrent] = useState(0);

  const getLength = () => {
    if (activeTab === "messages") return testimonials.length;
    if (activeTab === "voice") return voices.length;
    if (activeTab === "video") return videos.length;
    return 0;
  };

  // Clear existing interval
  const clearCurrentInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Start auto-play timer
  const startAutoPlay = useCallback(() => {
    clearCurrentInterval();
    if (activeTab === "messages") {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => {
          const length = testimonials.length;
          return length > 0 ? (prev + 1) % length : 0;
        });
      }, 4000);
    }
  }, [activeTab, clearCurrentInterval]);

  const next = useCallback(() => {
    const length = getLength();
    setCurrent((prev) => (length > 0 ? (prev + 1) % length : 0));
    // Restart timer when manually clicking next
    if (activeTab === "messages") {
      startAutoPlay();
    }
  }, [activeTab, startAutoPlay]);

  const prev = useCallback(() => {
    const length = getLength();
    setCurrent((prev) =>
      length > 0 ? (prev === 0 ? length - 1 : prev - 1) : 0
    );
    // Restart timer when manually clicking prev
    if (activeTab === "messages") {
      startAutoPlay();
    }
  }, [activeTab, startAutoPlay]);

  // Handle tab change
  const handleTabChange = useCallback(
    (tab: "messages" | "voice" | "video") => {
      clearCurrentInterval();
      setActiveTab(tab);
      setCurrent(0);
    },
    [clearCurrentInterval]
  );

  // Effect for auto-play
  useEffect(() => {
    startAutoPlay();
    return () => clearCurrentInterval();
  }, [activeTab, startAutoPlay, clearCurrentInterval]);

  // Audio controls
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Reset audio when voice slide changes
  useEffect(() => {
    if (activeTab === "voice" && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [current, activeTab]);

  const testimonial = testimonials[current] || testimonials[0];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-2xl text-center relative">
          {/* العمود الأول */}
          <div className="flex flex-col justify-center items-center gap-4 relative ">
            <h3 className="text-5xl  font-bold text-primary">
              +<CountUp end={50000} duration={1} separator="," />
            </h3>
            <p className="text-gray1 text-[20px]   max-w-32 mx-auto ">
              {t("home.29-number1")}
            </p>

            {/* الخط الفاصل */}
            <span className="hidden md:block absolute top-1/4 right-0 h-1/2 w-[1px] bg-gray-300"></span>
          </div>

          {/* العمود الثاني */}
          <div className="flex flex-col justify-center items-center gap-4 ">
            <h3 className="text-5xl  font-bold text-primary">
              +<CountUp end={200} duration={1} />
            </h3>
            <p className="text-gray1 text-[20px]  max-w-52 mx-auto ">
              {t("home.29-number2")}
            </p>

            {/* الخط الفاصل */}
            <span className="hidden md:block absolute right-[30%] h-1/2 w-[1px] bg-gray-300"></span>
          </div>

          {/* العمود الثالث (بدون خط) */}
          <div className="flex flex-col justify-center items-center gap-4 ">
            <h3 className="text-5xl  font-bold text-primary">
              +<CountUp end={5} duration={1} />
            </h3>
            <p className="text-gray1 text-[20px]   max-w-52 mx-auto ">
              {t("home.29-number3")}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-white md:py-12 px-4 flex flex-col md:flex-row-reverse items-center justify-center gap-10">
        <div className="w-full md:w-2/3 min-h-[500px] md:h-auto bg-[#EEF1F8] rounded-tl-3xl rounded-bl-3xl px-6 lg:ps-40 md:py-12 relative flex flex-col gap-4 md:gap-8">
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-start gap-4 my-6">
            <button
              onClick={() => handleTabChange("messages")}
              className={`w-32 md:w-36 px-4 py-1.5 text-sm rounded-full border transition-colors duration-300 ${
                activeTab === "messages"
                  ? "bg-gold text-white"
                  : "bg-[#DFE2EB] text-[#4D4D4D44] hover:bg-[#e19f1a] hover:text-white"
              }`}
            >
              {t("home.30-yellow-icon")}
            </button>

            <button
              onClick={() => handleTabChange("voice")}
              className={`w-32 md:w-36 px-4 py-1.5 text-sm rounded-full border transition-colors duration-300 ${
                activeTab === "voice"
                  ? "bg-gold text-white"
                  : "bg-[#DFE2EB] text-[#4D4D4D44] hover:bg-gray-300/70 hover:text-white"
              }`}
            >
              {t("home.39-yellow-icon")}
            </button>

            <button
              onClick={() => handleTabChange("video")}
              className={`w-32 md:w-36 px-4 py-1.5 text-sm rounded-full border transition-colors duration-300 ${
                activeTab === "video"
                  ? "bg-gold text-white"
                  : "bg-[#DFE2EB] text-[#4D4D4D44] hover:bg-gray-300/70 hover:text-white"
              }`}
            >
              {t("home.44-yellow-icon")}
            </button>
          </div>

          {/* Title */}
          <div className="text-2xl lg:text-4xl ">
            <h2 className="font-extrabold text-gray1 leading-snug">
              {t("home.30-heading1-1")} <br />{" "}
              <span className="underline decoration-[#F8B21F]">
                {t("home.30-heading1-2")}
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 max-w-sm">
            {activeTab === "messages" && t("home.30-heading2")}
            {activeTab === "voice" && t("home.39-heading2")}
            {activeTab === "video" && t("home.44-heading2")}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <CustomButton
                href="/academic#academic-form"
                label={t("home.30-blue-icon")}
                bgColor="bg-subPrimary"
                textColor="text-white"
                hoverBg="bg-[#1c3a9c]"
              />
              <img
                src="./arrow-sliders.svg"
                className="absolute -right-16 -top-4 w-10"
                alt="Arrow"
              />
            </div>
          </div>

          <div className="absolute bottom-20 md:bottom-4 left-6 flex gap-4">
            <button
              onClick={prev}
              className="w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <ArrowLeft className="text-primary w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <ArrowRight className="text-primary w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/3 -mt-16 md:mt-0 md:-me-24 h-[330px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {activeTab === "messages" && (
              <motion.div
                key={`messages-${current}`}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 0.6,
                }}
                className="bg-primary shadow-lg rounded-3xl text-white px-10 py-8 w-full h-full flex flex-col justify-center relative"
              >
                <img
                  src="/double-qout.svg"
                  alt="Quote"
                  className="absolute -top-6 left-6 w-12 h-12"
                />

                <div className="flex gap-1 mt-8 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-[#FFD700]" />
                  ))}
                </div>

                <p className="text-sm font-extralight leading-relaxed">
                  {testimonial.text}
                </p>

                <div className="flex items-center gap-3 mt-6">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <span className="text-primary font-bold">
                      {testimonial.initial}
                    </span>
                  </div>
                  <h4 className="font-light">{testimonial.name}</h4>
                </div>
              </motion.div>
            )}

            {activeTab === "voice" && voices.length > 0 && (
              <motion.div
                key={`voice-${current}`}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="bg-primary shadow-lg rounded-3xl text-white px-6 py-12 w-full h-full flex flex-col justify-center gap-6 relative"
              >
                <img
                  src="/double-qout.svg"
                  alt="Quote"
                  className="absolute -top-6 left-6 w-12 h-12"
                />

                <button
                  onClick={() => {
                    if (!audioRef.current) return;
                    if (isPlaying) {
                      audioRef.current.pause();
                      setIsPlaying(false);
                    } else {
                      audioRef.current.play();
                      setIsPlaying(true);
                    }
                  }}
                  className="relative w-full max-w-md bg-white p-4 rounded-full shadow flex items-center gap-4 hover:shadow-lg transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center">
                    {isPlaying ? (
                      <FaPause className="text-sm" />
                    ) : (
                      <FaPlay className="text-sm ml-1" />
                    )}
                  </div>

                  <div className="flex items-end justify-between flex-1">
                    <div className="flex items-end gap-1 flex-1 h-3">
                      {[8, 12, 16, 20, 16, 12, 8, 14, 18, 10, 6, 12, 16].map(
                        (h, i) => (
                          <div
                            key={i}
                            className={`w-0.5 rounded transition-all duration-200 ${
                              isPlaying
                                ? "bg-gold animate-pulse"
                                : "bg-[#B3B3B3]"
                            }`}
                            style={{
                              height: isPlaying
                                ? `${Math.random() * 20 + 5}px`
                                : `${h}px`,
                            }}
                          ></div>
                        )
                      )}
                    </div>
                    <p className="text-xs text-gray-500 ml-4">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </p>
                  </div>
                </button>

                <audio
                  ref={audioRef}
                  src={voices[current]?.link}
                  onEnded={() => setIsPlaying(false)}
                  onTimeUpdate={(e) =>
                    setCurrentTime(e.currentTarget.currentTime)
                  }
                  onLoadedMetadata={(e) =>
                    setDuration(e.currentTarget.duration)
                  }
                />
              </motion.div>
            )}

            {activeTab === "video" && videos.length > 0 && (
              <motion.div
                key={`video-${current}`}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="bg-primary shadow-lg rounded-3xl text-white px-6 py-12 w-full h-full flex flex-col justify-center gap-6 relative"
              >
                <img
                  src="/double-qout.svg"
                  alt="Quote"
                  className="absolute -top-6 left-6 w-12 h-12"
                />

                <a
                  href={videos[current]?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-60 rounded-xl block group overflow-hidden"
                >
                  <img
                    src="./slider.png"
                    alt="Video thumbnail"
                    className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                      <FaPlay className="text-primary text-xl ml-1" />
                    </div>
                  </div>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
