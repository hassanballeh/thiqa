"use client";
import React, { useEffect, useState } from "react";
// import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Feature, Price, PricingPlan } from "./StepPost";
// import Step1 from "./Step1";

const StepPre = () => {
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
  title: t("home.49-number-heading1"),
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
    { title: t("home.home"), old: "4200", new: "3649" },
    { title: t("home.online"), old: "2400", new: "1849" },
  ],
    icon: "/growth.svg",
},
    {
      title: "Peak",
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
    { title: t("home.home"), old: "17500", new: "14449" },
    { title: t("home.online"), old: "10000", new: "6949" },
  ],
      icon: "/peak.svg",
    },
    {
      title: "Excellence",
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
    { title: t("home.home"), old: "8750", new: "7449" },
    { title: t("home.online"), old: "5000", new: "3794" },
  ],
      icon: "/excellence.svg",
    },
  ],
  [
    // selectedStage === 1
    {
      title: "GROWTH",
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
    { title: t("home.home"), old: "4800", new: "4249" },
    { title: t("home.online"), old: "3000", new: "2449" },
  ],
      icon: "/growth.svg",
    },
    {
      title: "Peak",
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
    { title: t("home.home"), old: "20000", new: "16449" },
    { title: t("home.online"), old: "12500", new: "9449" },
  ],
      icon: "/peak.svg",
    },
    {
      title: "Excellence",
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
    { title: t("home.home"), old: "10000", new: "8449" },
    { title: t("home.online"), old: "6250", new: "4949" },
  ],
      icon: "/excellence.svg",
    },
  ],
  [
    // selectedStage === 2
    {
      title: "GROWTH",
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
    { title: t("home.home"), old: "5400", new: "4849" },
    { title: t("home.online"), old: "3600", new: "3049" },
  ],
      icon: "/growth.svg",
    },
    {
      title: "Peak",
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
    { title: t("home.home"), old: "22500", new: "18449" },
    { title: t("home.online"), old: "15000", new: "11949" },
  ],
      icon: "/peak.svg",
    },
    {
      title: "Excellence",
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
    { title: t("home.home"), old: "11250", new: "9449" },
    { title: t("home.online"), old: "7500", new: "6249" },
  ],
      icon: "/excellence.svg",
    },
  ],
    [
    // selectedStage === 3
    {
      title: "GROWTH",
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
    { title: t("home.home"), old: "4200", new: "3649" },
    { title: t("home.online"), old: "4200", new: "3649" },
  ],
      icon: "/growth.svg",
    },
    {
      title: "Peak",
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
    { title: t("home.home"), old: "11250", new: "11199" },
    { title: t("home.online"), old: "8750", new: "7549" },
  ],
      icon: "/peak.svg",
    },
    {
      title: "Excellence",
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
    { title: t("home.home"), old: "5449", new: "5400" },
    { title: t("home.online"), old: "4200", new: "3649" },
  ],
      icon: "/excellence.svg",
    },
  ],
];
  // const [showStep2, setShowStep2] = useState(false);
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

  // if (showStep2) return <Step1 />;
  if (!pricingPlans.length) return null;

  return (
    <div className=" mx-auto my-6 mb-16 bg-white rounded-3xl shadow- p-6 md:p-12 w-full h-full">

      {/* === Steps Icons === */}
      {/* <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-20 relative">
          {["/step1.svg", "/step2-2.svg", "/step3-3.svg"].map((icon, idx) => (
            <div key={idx} className="flex flex-col items-center relative z-10">
              <img src={icon} alt={`Step ${idx + 1}`} className="w-14 h-14 md:w-16 md:h-16 mb-2" />
            </div>
          ))}

          <div className="absolute top-1/2 left-[12.5%] w-[30%] h-[2px] bg-gold z-0 -translate-y-1/2" />
          <div className="absolute top-1/2 left-[55.5%] w-[30%] h-[2px] bg-gold z-0 -translate-y-1/2" />
        </div>
      </div> */}

      {/* === Title & Subtitle === */}
      <h2 className="text-3xl font-bold text-center text-primary mt-2">
        {t("home.49-step3-1")}
      </h2>
      <p className="text-center text-gray1 mt-2 max-w-xl mx-auto">
        {t("home.49-step3-2")}
      </p>

      {/* === Cards Section === */}
      <div className="max-w-6xl mx-auto space-y-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 lg:space-y-0 mt-14">
        {pricingPlans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative mx-auto text-center text-gray1  shadow rounded-xl border border-primary transition-all duration-300 ${idx === 1 ? "bg-[#EEF1F8] scale-110 px-4" : "max-w-sm"}`}
          >
            {/* الصورة الرئيسية والجانبية على الأطراف */}
            {plan.badgeIcon && (
              <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 z-10">
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

            <div className="p-6 flex flex-col items-center gap-4">
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
        <div className="text-sm line-through font-medium text-gray1">{price.old} {currency}</div>
        <div className="text-xl font-extrabold text-primary">{price.new} {currency}</div>
      </div>
    </div>
  ))}
</div>

            </div>
          </div>
        ))}
      </div>

      {/* === Buttons === */}
      {/* <div className="mt-10 md:mt-20 flex justify-center gap-4">
        <button onClick={() => setShowStep2(true)} className="bg-primary text-white px-1 py-2.5 w-52 rounded-full hover:bg-primary/80 transition">
          Previous
        </button>
        <Link href="/tutoring-plan">
          <button className="bg-gold text-white px-1 py-2.5 w-52 rounded-full hover:bg-primary hover:text-white transition">
            Book atrial class
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default StepPre;
