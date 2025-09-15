"use client";

import { useEffect, useRef, useState } from "react";
import i18n from "@/libs";

const languages = [
  {
    code: "ar",
    dir: "rtl",
    label: "AR",
  },
  {
    code: "en",
    dir: "ltr",
    label: "EN",
  },
];

const SelectLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("lang") || "en";
    }
    return "en";
  });

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lang = languages.find((l) => l.code === selectedLanguage);
    if (lang) {
      document.body.dir = lang.dir;
      document.documentElement.lang = selectedLanguage;
      if (i18n.language !== selectedLanguage) {
        i18n.changeLanguage(selectedLanguage);
      }
      localStorage.setItem("lang", selectedLanguage);
    }
  }, [selectedLanguage]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (code: string) => {
    setSelectedLanguage(code);
    setIsOpen(false);
  };

  const selected = languages.find((lang) => lang.code === selectedLanguage);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* الزر الأساسي */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#B3B3B3] text-sm font-semibold text-white hover:bg-gray-400 transition"
      >
        {selected?.label}
      </button>

      {/* القائمة المنسدلة */}
      {isOpen && (
        <div className="absolute top-10 left-0 bg-white rounded-xl shadow-md p-2 space-y-2 z-50">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`flex items-center justify-center w-8 rounde cursor-pointer text-sm font-bold transition ${
                selectedLanguage === lang.code
                  ? " text-primary hover:text-primaryDark"
                  : " text-gray1 hover:text-primaryDark"
              }`}
            >
              {lang.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectLanguage;
