"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Achievments = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const cardWidth = 300; // عرض الكارد مع المارجن
  const visibleCards = 3.2; // عدد الكاردات الظاهرة جزئياً

  const dummyCards = [
    {
      id: 1,
      title: t("about.31-number1-1"),
      desc: t("about.31-number1-2"),
      image: "/gallery/Mask group (4).png",
      link: "https://www.forbesmiddleeast.com/lists/30-under-30-2024/omar-bakri-ali-bakri-hamdan-karmustaji/",
    },
    {
      id: 2,
      title: t("about.31-number2-1"),
      desc: t("about.31-number2-2"),
      image: "/gallery/Mask group (2).png",
      link: "https://www.instagram.com/reel/DN_GF9ECF9T/?igsh=ZTdsaHR3b3dxZmQz",
    },
    {
      id: 3,
      title: t("about.31-number3-1"),
      desc: t("about.31-number3-2"),
      image: "/gallery/Mask group (1).png",
      link: "https://www.instagram.com/reel/DJwdY_pIBoA/?igsh=N2lhNjM3cnkwNzNx",
    },
    {
      id: 4,
      title: t("about.31-number4-1"),
      desc: t("about.31-number4-2"),
      image: "/gallery/Mask group (3).png",
      link: "https://www.holoniq.com/notes/2024-middle-east-north-africa-edtech-50?ref=newsletters.holoniq.com",
    },
  ];

  const scrollRight = () => {
    if (index < dummyCards.length - visibleCards) {
      setIndex((prev) => prev + 1);
    }
  };

  const scrollLeft = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };
  return (
    <div className=" py-14 ">
      <section className="container mx-auto ">
        <div className="text-3xl md:text-6xl flex-1 md:px-4 text-center md:text-start flex flex-col justify-center max-w-lg">
          <div className="text-3xl md:text-5xl">
            <h2 className=" text-primary font-roboto font-bold leading-snug">
              {t("about.31-heading1")}{" "}
            </h2>
          </div>
          <p className="text-sm font-light text-gray1 leading-relaxed mt-4 md:max-w-md ">
            {t("about.31-heading2")}
          </p>
        </div>
      </section>
      <section className="container mx-auto mt-10 ">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * cardWidth}px)` }}
        >
          {dummyCards.map((card) => (
            <a
              key={card.id}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[280px] max-w-[330px] 2xl:max-w-[430px] mr-4 snap-start shrink-0 shadow-sm bg-white transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl rounded-lg  overflow-hidden"
            >
              <div className="h-64 w-full">
                {/* صورة بدل الخلفية الرمادية */}
                <img
                  src={card.image}
                  alt={card.title}
                  className=" h-full w-full object-cover"
                />
              </div>

              <div className="px-6 py-3 space-y-2">
                <p className="text-sm font-semibold text-gray1">{card.title}</p>
                <p className="text-xs md:text-sm font-normal text-gray1">
                  {card.desc}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6 flex gap-2">
          <button
            onClick={scrollLeft}
            className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center"
          >
            <ArrowLeft className="text-primary" />
          </button>
          <button
            onClick={scrollRight}
            className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center"
          >
            <ArrowRight className="text-primary" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Achievments;
