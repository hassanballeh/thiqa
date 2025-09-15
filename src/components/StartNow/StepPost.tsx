"use client";
import React, { useEffect, useState } from "react";
// import Link from "next/link";
import { useTranslation } from "react-i18next";
export interface Feature {
  text: string;
  available: boolean;
}

export interface Price {
  title: string;
  old?: string;
  new: string;
}

export interface PricingPlan {
  title: string;
  badge?: string;
  badgeIcon?: string;
  secondaryBadgeIconLeft?: string;
  secondaryBadgeIconRight? :string;
  features: Feature[];
  prices: Price[];
  icon?: string;
}


const StepPost = () => {
  const { t } = useTranslation();
const [currency, setCurrency] = useState("AED");

const updateCurrency = () => {
  const country = sessionStorage.getItem("country");
  setCurrency(country?.toLowerCase() === "sa" ? "SAR" : "AED");
};

useEffect(() => {
  updateCurrency(); // استدعاء عند أول تحميل
  window.addEventListener("country-changed", updateCurrency);
  return () => window.removeEventListener("country-changed", updateCurrency);
}, []);

  const allPricingPlans = [
  [
    // selectedStage === 0
{
  title: t("home.49-postpaid-heading1"),
  badge: t("home.49-number-demanded"),
  badgeIcon: "/arrow-love.svg",
  secondaryBadgeIconLeft: "/two-love.svg",
features: [
  { text: `23 ${t("home.49-number1-1")}`, available: true},
  { text: `90 ${t("home.49-number1-2")}`, available: true },
  { text: `60 ${t("home.49-number1-3")}`, available: true},
  { text: `1 ${t("home.49-number1-4")}`, available: true },
  { text: `30 ${t("home.49-number1-5")}`, available: false},
  { text: `1 ${t("home.49-number1-6")}`, available: false},
],

  prices: [
    { title: t("home.home"), old: "4200", new: "1400" },
    { title: t("home.online"), old: "2400", new: "800" },
  ],
    icon: "/growth.svg",
},
    {
  title: t("home.49-postpaid-heading2"),
      badge: "",
features: [
  { text: `100 ${t("home.49-number1-1")}`, available: true},
  { text: `360 ${t("home.49-number1-2")}`, available: true },
  { text: `60 ${t("home.49-number1-3")}`, available: true},
  { text: `1 ${t("home.49-number1-4")}`, available: true },
  { text: `30 ${t("home.49-number1-5")}`, available: true},
  { text: `1 ${t("home.49-number1-6")}`, available: true},
],

  prices: [
    { title: t("home.home"), old: "17500", new: "2100" },
    { title: t("home.online"), old: "10000", new: "1200" },
  ],
      icon: "/peak.svg",
    },
    {
  title: t("home.49-postpaid-heading3"),
      badge: "Most Affordable",
      // badgeIcon: "/arrow-star.svg",
      // secondaryBadgeIconRight: "/two-star.svg",
features: [
  { text: `50 ${t("home.49-number1-1")}`, available: true},
  { text: `120 ${t("home.49-number1-2")}`, available: true },
  { text: `60 ${t("home.49-number1-3")}`, available: true},
  { text: `1 ${t("home.49-number1-4")}`, available: true },
  { text: `30 ${t("home.49-number1-5")}`, available: true},
  { text: `1 ${t("home.49-number1-6")}`, available: false},
],

  prices: [
    { title: t("home.home"), old: "8750", new: "2800" },
    { title: t("home.online"), old: "5000", new: "1600" },
  ],
      icon: "/excellence.svg",
    },
        {
  title: t("home.49-postpaid-heading4"),
      badge: "Most Affordable",
      badgeIcon: "/arrow-star.svg",
      secondaryBadgeIconRight: "/two-star.svg",
features: [
  { text: `50 ${t("home.49-number1-1")}`, available: true},
  { text: `120 ${t("home.49-number1-2")}`, available: true },
  { text: `60 ${t("home.49-number1-3")}`, available: true},
  { text: `1 ${t("home.49-number1-4")}`, available: true },
  { text: `30 ${t("home.49-number1-5")}`, available: true},
  { text: `1 ${t("home.49-number1-6")}`, available: false},
],

  prices: [
    { title: t("home.home"), old: "8750", new: "3500" },
    { title: t("home.online"), old: "5000", new: "2000" },
  ],
      icon: "/excellence.svg",
    },
  ],
  [
    // selectedStage === 1
    {
  title: t("home.49-postpaid-heading1"),
      badge: "Most Demanded",
      badgeIcon: "/arrow-love.svg",
      secondaryBadgeIconLeft: "/two-love.svg",
features: [
  { text: `23 ${t("home.49-number1-1")}`, available: true},
  { text: `90 ${t("home.49-number1-2")}`, available: true },
  { text: `60 ${t("home.49-number1-3")}`, available: true},
  { text: `1 ${t("home.49-number1-4")}`, available: true },
  { text: `30 ${t("home.49-number1-5")}`, available: false},
  { text: `1 ${t("home.49-number1-6")}`, available: false},
],

  prices: [
    { title: t("home.home"), old: "4800", new: "1600" },
    { title: t("home.online"), old: "3000", new: "1000" },
  ],
      icon: "/growth.svg",
    },
    {
  title: t("home.49-postpaid-heading2"),
      badge: "",
      badgeIcon: "",
features: [
  { text: `100 ${t("home.49-number1-1")}`, available: true},
  { text: `360 ${t("home.49-number1-2")}`, available: true },
  { text: `60 ${t("home.49-number1-3")}`, available: true},
  { text: `1 ${t("home.49-number1-4")}`, available: true },
  { text: `30 ${t("home.49-number1-5")}`, available: true},
  { text: `1 ${t("home.49-number1-6")}`, available: true},
],

  prices: [
    { title: t("home.home"), old: "20000", new: "2400" },
    { title: t("home.online"), old: "12500", new: "1500" },
  ],
      icon: "/peak.svg",
    },
    {
  title: t("home.49-postpaid-heading3"),
      badge: "Most Affordable",
      // badgeIcon: "/arrow-star.svg",
      // secondaryBadgeIconRight: "/two-star.svg",
features: [
  { text: `50 ${t("home.49-number1-1")}`, available: true},
  { text: `120 ${t("home.49-number1-2")}`, available: true },
  { text: `60 ${t("home.49-number1-3")}`, available: true},
  { text: `1 ${t("home.49-number1-4")}`, available: true },
  { text: `30 ${t("home.49-number1-5")}`, available: true},
  { text: `1 ${t("home.49-number1-6")}`, available: false},
],

  prices: [
    { title: t("home.home"), old: "10000", new: "3200" },
    { title: t("home.online"), old: "6250", new: "2000" },
  ],
      icon: "/excellence.svg",
    },
        {
  title: t("home.49-postpaid-heading4"),
      badge: "Most Affordable",
      badgeIcon: "/arrow-star.svg",
      secondaryBadgeIconRight: "/two-star.svg",
features: [
  { text: `50 ${t("home.49-number1-1")}`, available: true},
  { text: `120 ${t("home.49-number1-2")}`, available: true },
  { text: `60 ${t("home.49-number1-3")}`, available: true},
  { text: `1 ${t("home.49-number1-4")}`, available: true },
  { text: `30 ${t("home.49-number1-5")}`, available: true},
  { text: `1 ${t("home.49-number1-6")}`, available: false},
],

  prices: [
    { title: t("home.home"), old: "8750", new: "4000" },
    { title: t("home.online"), old: "5000", new: "2500" },
  ],
      icon: "/excellence.svg",
    },
  ],
  [
    // selectedStage === 2
    {
  title: t("home.49-postpaid-heading1"),
      badge: "Most Demanded",
      badgeIcon: "/arrow-love.svg",
      secondaryBadgeIconLeft: "/two-love.svg",
features: [
  { text: `23 ${t("home.49-number1-1")}`, available: true},
  { text: `90 ${t("home.49-number1-2")}`, available: true },
  { text: `60 ${t("home.49-number1-3")}`, available: true},
  { text: `1 ${t("home.49-number1-4")}`, available: true },
  { text: `30 ${t("home.49-number1-5")}`, available: false},
  { text: `1 ${t("home.49-number1-6")}`, available: false},
],

  prices: [
    { title: t("home.home"), old: "5400", new: "1800" },
    { title: t("home.online"), old: "3600", new: "1200" },
  ],
      icon: "/growth.svg",
    },
    {
  title: t("home.49-postpaid-heading2"),
      badge: "",
      badgeIcon: "",
features: [
  { text: `100 ${t("home.49-number1-1")}`, available: true},
  { text: `360 ${t("home.49-number1-2")}`, available: true },
  { text: `60 ${t("home.49-number1-3")}`, available: true},
  { text: `1 ${t("home.49-number1-4")}`, available: true },
  { text: `30 ${t("home.49-number1-5")}`, available: true},
  { text: `1 ${t("home.49-number1-6")}`, available: true},
],

  prices: [
    { title: t("home.home"), old: "22500", new: "2700" },
    { title: t("home.online"), old: "15000", new: "1800" },
  ],
      icon: "/peak.svg",
    },
    {
  title: t("home.49-postpaid-heading3"),
      badge: "Most Affordable",
      // badgeIcon: "/arrow-star.svg",
      // secondaryBadgeIconRight: "/two-star.svg",
features: [
  { text: `50 ${t("home.49-number1-1")}`, available: true},
  { text: `120 ${t("home.49-number1-2")}`, available: true },
  { text: `60 ${t("home.49-number1-3")}`, available: true},
  { text: `1 ${t("home.49-number1-4")}`, available: true },
  { text: `30 ${t("home.49-number1-5")}`, available: true},
  { text: `1 ${t("home.49-number1-6")}`, available: false},
],

  prices: [
    { title: t("home.home"), old: "11250", new: "3600" },
    { title: t("home.online"), old: "7500", new: "2400" },
  ],
      icon: "/excellence.svg",
    },
        {
  title: t("home.49-postpaid-heading4"),
      badge: "Most Affordable",
      badgeIcon: "/arrow-star.svg",
      secondaryBadgeIconRight: "/two-star.svg",
features: [
  { text: `50 ${t("home.49-number1-1")}`, available: true},
  { text: `120 ${t("home.49-number1-2")}`, available: true },
  { text: `60 ${t("home.49-number1-3")}`, available: true},
  { text: `1 ${t("home.49-number1-4")}`, available: true },
  { text: `30 ${t("home.49-number1-5")}`, available: true},
  { text: `1 ${t("home.49-number1-6")}`, available: false},
],

  prices: [
    { title: t("home.home"), old: "8750", new: "4500" },
    { title: t("home.online"), old: "5000", new: "3000" },
  ],
      icon: "/excellence.svg",
    },
  ],
];
  // const [selectedStage, setSelectedStage] = useState<number | null>(null);
const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([]);

  useEffect(() => {
    const savedStage = localStorage.getItem("selectedStage");
    if (savedStage !== null) {
      const stageIndex = parseInt(savedStage);
      // setSelectedStage(stageIndex);

      if (allPricingPlans[stageIndex]) {
        setPricingPlans(allPricingPlans[stageIndex]);
      }
    }
  }, []);

  if (!pricingPlans.length) return null;

  return (
    <div className="">
      {/* === Title & Subtitle === */}
      <h2 className="text-3xl font-bold text-center text-primary mt-2">
        {t("home.49-step3-1")}
      </h2>
      <p className="text-center text-gray1 mt-2 max-w-xl mx-auto">
        {t("home.49-step3-2")}
      </p>

      {/* === Cards Section === */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 mt-14">
        {pricingPlans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative mx-auto text-center text-gray1  shadow rounded-xl border border-primary transition-all duration-300 ${idx === 1 ? "bg-[#EEF1F8] mx-2 scale-110 " : "max-w-sm"}`}
          >
            {/* الصورة الرئيسية والجانبية على الأطراف */}
            {plan.badgeIcon && (
              <div className="absolute -top-16 right-0 transform -translate-x-1/2 z-10">
                <div className="relative flex items-center justify-center">
                  {plan.secondaryBadgeIconLeft && (
                    <img src={plan.secondaryBadgeIconLeft} alt="Left Icon" className="absolute -top-12 -left-8 w-10 h-10 md:w-16 md:h-16" />
                  )}
                  <img src={plan.badgeIcon} alt="Main Icon" className="w-8 h-8 md:w-10 md:h-10" />
                  {plan.secondaryBadgeIconRight && (
                    <img src={plan.secondaryBadgeIconRight} alt="Right Icon" className="absolute -top-12 -right-6 w-10 h-10 md:w-16 md:h-16" />
                  )}
                </div>
              </div>
            )}

            {/* Badge */}
            {plan.badge && (
              <div className="py-3 shadow w-full rounded-t-lg bg-subPrimary text-white flex items-center justify-center gap-2 text-lg font-medium">
                {plan.badge}
              </div>
            )}

            <div className="p-5 flex flex-col items-center gap-4">
              <img src={plan.icon} className="w-12 h-12" />
              <h3 className="text-primary text-2xl font-extrabold">{plan.title}</h3>
<ul role="list" className="my-6 space-y-4 text-left">
  {plan.features.map((feature: Feature, i: number) => (
    <li key={i} className="flex items-center gap-3">
      <span
        className={`flex items-center justify-center w-5 h-5 rounded-full ${
          feature.available ? "bg-gold" : "bg-red-500"
        }`}
      >
        {feature.available ? (
          // ✅ أيقونة صح
          <svg
            className="w-3.5 h-3.5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          // ❌ أيقونة خطأ
          <svg
            className="w-3.5 h-3.5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 8.586l4.95-4.95a1 1 0 111.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10 3.636 5.05a1 1 0 011.414-1.414L10 8.586z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </span>
      <span
        className={`text-sm ${
          feature.available ? "text-gray1" : "text-gray1 "
        }`}
      >
        {feature.text}
      </span>
    </li>
  ))}
</ul>

              <div className="grid grid-cols-2 gap-2 w-full">
  {plan.prices.map((price: Price, i: number) => (
    <div key={i} className="rounded-lg border border-primary bg-white flex flex-col items-center overflow-hidden shadow-sm">
      <div className="bg-subPrimary text-white w-full py-2 text-sm font-medium text-center">{price.title}</div>
      <div className="py-4 px-4 flex flex-col items-center">
        {/* <div className="text-sm line-through font-medium text-gray1">{price.old}</div> */}
        <div className="text-lg font-extrabold text-primary">{price.new} {currency}</div>
      </div>
    </div>
  ))}
</div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepPost;
