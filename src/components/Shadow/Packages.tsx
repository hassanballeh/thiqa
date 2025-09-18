"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Packages = () => {
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

  const { t } = useTranslation();
  const pricingPlans = [
    {
      title: t("shadow.shadow-package1-heading1"),
      oldPrice: t("shadow.shadow-package1-heading2"),
      price: t("shadow.shadow-package1-heading3"),
      features: [
        { text: t("shadow.shadow-package1-1"), right: true },
        { text: t("shadow.shadow-package2"), right: true },
        { text: t("shadow.shadow-package1-3"), right: true },
        { text: t("shadow.shadow-package4"), right: true },
        { text: t("shadow.shadow-package1-5"), right: true },
      ],
    },
    {
      title: t("shadow.shadow-package2-heading1"),
      oldPrice: t("shadow.shadow-package2-heading2"),
      price: t("shadow.shadow-package2-heading3"),
      features: [
        { text: t("shadow.shadow-package2-1"), right: true },
        { text: t("shadow.shadow-package2"), right: true },
        { text: t("shadow.shadow-package2-3"), right: true },
        { text: t("shadow.shadow-package4"), right: true },
        { text: t("shadow.shadow-package1-5"), right: true },
      ],
    },
    {
      title: t("shadow.shadow-package3-heading1"),
      oldPrice: t("shadow.shadow-package3-heading2"),
      price: t("shadow.shadow-package3-heading3"),
      features: [
        { text: t("shadow.shadow-package3-1"), right: true },
        { text: t("shadow.shadow-package2"), right: true },
        { text: t("shadow.shadow-package3-3"), right: true },
        { text: t("shadow.shadow-package4"), right: false },
        { text: t("shadow.shadow-package3-5"), right: false },
      ],
    },
    {
      title: t("shadow.shadow-package4-heading1"),
      oldPrice: t("shadow.shadow-package4-heading2"),
      price: t("shadow.shadow-package4-heading3"),
      features: [
        { text: t("shadow.shadow-package4-1"), right: true },
        { text: t("shadow.shadow-package2"), right: true },
        { text: t("shadow.shadow-package4-3"), right: false },
        { text: t("shadow.shadow-package4"), right: false },
        { text: t("shadow.shadow-package4-5"), right: false },
      ],
    },
  ];
  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-20 lg:px-6">
        <div className="text-center mb-8 mx-auto">
          <div className="inline-block relative max-w-3xl mx-auto">
            <h3 className="text-4xl lg:text-4xl font-extrabold text-primary leading-snug">
              {t("shadow.shadow-heading1")}
            </h3>
            <img
              src="/line-shadow.svg"
              alt="line"
              className="w-full   mx-auto"
            />
          </div>
          <span className="text-gray1 block max-w-2xl mx-auto mt-6">
            {t("shadow.shadow-heading2")}{" "}
          </span>
        </div>
        <div className="space-y-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 lg:space-y-0 items-stretch">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-4 p-8 mx-auto max-w-lg text-center text-gray1 bg-white 
  rounded-[40px] border border-gray-100 shadow 
  transition-all duration-300 ease-in-out 
  hover:scale-105 hover:shadow-xl hover:-translate-y-2  relative min-h-[580px]"
            >
              <h3 className="text-primary mt-6 text-xl font-bold">
                {plan.title}
              </h3>

              <span className="line-through text-gray1 text-lg">
                {plan.oldPrice} {currency}
              </span>
              <span className="text-primary text-3xl font-extrabold">
                {plan.price} {currency}
              </span>

              {/* ✅ القائمة الديناميكية */}
              <ul role="list" className="mt-6 space-y-4 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className={`flex items-center justify-center w-5 h-5 rounded-full ${
                        feature.right ? "bg-gold" : "bg-red-500"
                      }`}
                    >
                      {feature.right ? (
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
                        <svg
                          className="w-3.5 h-3.5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="text-sm text-gray1 max-w-52 text-start">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/academic#academic-form"
                className="absolute top-[88%] right-[calc((100%/2)-96px)] bg-primary rounded-2xl font-light  w-48 mx-auto py-2.5 text-white hover:bg-primary/70 "
              >
                <span>{t("academic.18-icon1")}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
