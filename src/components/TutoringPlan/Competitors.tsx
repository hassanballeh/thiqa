"use client";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Competitors = () => {
  const { t } = useTranslation();

  const cards = [
    {
      title: t("tutoring.19-icon1-heading"),
      icon: "/platforms.svg",
      bgColor: "bg-[#F0F5F9]",
      titleColor: "text-primary",
      textColor: "text-gray1",
      texts: [
        t("tutoring.19-icon1-1"),
        t("tutoring.19-icon1-2"),
        t("tutoring.19-icon1-3"),
        t("tutoring.19-icon1-4"),
        t("tutoring.19-icon1-5"),
      ],
      starsMap: [2, 2, "line", 3, 2], // 👈 هنا تحدد لكل سطر
    },
    {
      title: t("tutoring.19-icon2-heading"),
      icon: "/thiqa.svg",
      bgColor: "bg-primary",
      titleColor: "text-white",
      textColor: "text-white",
      texts: [
        t("tutoring.19-icon1-1"),
        t("tutoring.19-icon1-2"),
        t("tutoring.19-icon1-3"),
        t("tutoring.19-icon1-4"),
        t("tutoring.19-icon1-5"),
      ],
      starsMap: [5, 5, 5, 3, 5],
    },
    {
      title: t("tutoring.19-icon3-heading"),
      icon: "/traditional.svg",
      bgColor: "bg-[#F0F5F9]",
      titleColor: "text-primary",
      textColor: "text-gray1",
      texts: [
        t("tutoring.19-icon1-1"),
        t("tutoring.19-icon1-2"),
        t("tutoring.19-icon1-3"),
        t("tutoring.19-icon1-4"),
        t("tutoring.19-icon1-5"),
      ],
      starsMap: [5, 2, "line", 3, 2],
    },
    {
      title: t("tutoring.19-icon4-heading"),
      icon: "/Individual.svg",
      bgColor: "bg-[#F0F5F9]",
      titleColor: "text-primary",
      textColor: "text-gray1",
      texts: [
        t("tutoring.19-icon1-1"),
        t("tutoring.19-icon1-2"),
        t("tutoring.19-icon1-3"),
        t("tutoring.19-icon1-4"),
        t("tutoring.19-icon1-5"),
      ],
      starsMap: ["line", 2, "line", 5, 2],
    },
  ];

  return (
<motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative w-full py-10 bg-white px-2"
>
  <div className="container mx-auto">
    <div className="text-center mx-auto">
      <div className="inline-block relative max-w-80 md:max-w-xl mx-auto">
        <h3 className="text-3xl lg:text-3xl font-extrabold text-primary leading-snug">
          {t("tutoring.19-heading1")}
        </h3>
        <img src="/line-comp.svg" alt="line" className="hidden md:block w-60 max-w-lg mx-auto" />
        <img src="/line-comp2.svg" alt="line" className="hidden md:block w-64 max-w-lg mx-auto" />
      </div>
      <span className="text-xs md:text-base text-gray1 mt-2 block max-w-60 md:max-w-md mx-auto">
        {t("tutoring.19-heading2")}
      </span>
    </div>

    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-12">
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -10, scale: 1.03 }} // 👈 يطلع لفوق مع تكبير خفيف
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className={`rounded-[40px] shadow-md p-8 py-10 flex flex-col items-start ${card.bgColor} cursor-pointer`}
        >
          {/* Icon */}
          <img src={card.icon} alt={`icon-${idx}`} className="w-12 mb-6" />

          {/* Title */}
          <h3 className={`text-3xl max-w-52 mb-10 ${card.titleColor}`}>{card.title}</h3>

          {/* Sections */}
          {card.texts.map((text, i) => (
            <div key={i} className="flex flex-col items-start gap-3 mt-3 w-full">
              <p className={`text-sm ${card.textColor}`}>{text}</p>

              {card.starsMap[i] === "line" ? (
                <div className="w-16 border-gray-400 border" />
              ) : typeof card.starsMap[i] === "number" ? (
                <div className="flex text-gold gap-0.5">
                  {Array(card.starsMap[i])
                    .fill(0)
                    .map((_, starIdx) => (
                      <FaStar key={starIdx} className="text-lg" />
                    ))}
                </div>
              ) : null}
            </div>
          ))}
        </motion.div>
      ))}
    </section>
  </div>
</motion.div>

  );
};

export default Competitors;
