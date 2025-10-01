"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";

const Numbers = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-primary py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 text-2xl md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300 text-center">
          {/* الرقم الأول */}
          <div className="py-6 px-4 ">
            <h3 className="text-5xl lg:text-6xl font-bold">
              <CountUp end={200} duration={1} />+
            </h3>
            <p className="text-lg font-light mt-2">{t("become.1-number1")}</p>
          </div>

          {/* الرقم الثاني */}
          <div className="py-6 px-4">
            <h3 className="text-5xl lg:text-6xl font-bold">
              <CountUp end={50000} duration={2.5} separator="," />+
            </h3>
            <p className="text-lg font-light mt-2">{t("become.1-number2")}</p>
          </div>

          {/* الرقم الثالث */}
          <div className="py-6 px-4">
            <h3 className="text-5xl lg:text-6xl font-bold">
              <CountUp end={1000} duration={3} separator="," />+
            </h3>
            <p className="text-lg font-light mt-2">{t("become.1-number3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
