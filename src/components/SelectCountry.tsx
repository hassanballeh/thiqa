"use client";

import { useEffect, useRef, useState } from "react";

const countries = [
  {
    code: "ae",
    flag: "/ae.svg",
    name: "UAE",
  },
  {
    code: "sa",
    flag: "/sa.svg",
    name: "KSA",
  },
];

const SelectCountry = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // جلب الدولة من API باستخدام IP
  useEffect(() => {
    const saved = sessionStorage.getItem("country");
    if (saved) {
      setSelectedCountry(saved);
      return;
    }

    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const countryCode = data.country_code?.toLowerCase();
        if (countryCode === "ae" || countryCode === "sa") {
          setSelectedCountry(countryCode);
          sessionStorage.setItem("country", countryCode);
        } else {
          setSelectedCountry("ae");
          sessionStorage.setItem("country", "ae");
        }
      })
      .catch(() => {
        setSelectedCountry("ae");
        sessionStorage.setItem("country", "ae");
      });
  }, []);

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

  // const handleSelect = (code: string) => {
  //   setSelectedCountry(code);
  //   sessionStorage.setItem("country", code);
  //   setIsOpen(false);
  // };

  const handleSelect = (code: string) => {
    setSelectedCountry(code);
    sessionStorage.setItem("country", code);

    // 🔥 إطلاق حدث مخصص لإخبار باقي المكونات أنّ الدولة تغيّرت
    window.dispatchEvent(new Event("country-changed"));

    setIsOpen(false);
  };

  const selected = countries.find(
    (country) => country.code === selectedCountry
  );

  if (!selectedCountry) return null; // ما نعرض شيء حتى يتم تحديد الدولة

  return (
    <div className="relative" ref={dropdownRef}>
      {/* الزر الأساسي */}
      <button onClick={() => setIsOpen(!isOpen)}>
        <img
          src={selected?.flag}
          alt="Selected flag"
          className="w-7 h-7 mt-1.5 rounded-full object-cover"
        />
      </button>

      {/* القائمة المنسدلة */}
      {isOpen && (
        <div className="absolute top-12 left-[-10px] bg-white rounded-xl shadow-md p-2 space-y-2 min-w-[150px] z-50">
          {countries.map((country) => (
            <div
              key={country.code}
              onClick={() => handleSelect(country.code)}
              className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
            >
              <div className="w-4 h-4 flex items-center justify-center border rounded-sm">
                {selectedCountry === country.code && (
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                )}
              </div>
              <img
                src={country.flag}
                alt="flag"
                className="w-5 h-5 rounded-full"
              />
              <span className="text-sm font-medium text-gray-700">
                {country.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectCountry;
