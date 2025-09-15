import React from "react";

interface TeamCardProps {
  image?: string;
  title: string;
  titleColor?: boolean;
  objectPosition?: "top" | "center" | "bottom"; // ✅ إضافة الخاصية
}

const TeamCard: React.FC<TeamCardProps> = ({
  image,
  title,
  titleColor,
  objectPosition = "top", // ✅ القيمة الافتراضية top
}) => {
  return (
    <a
      className="flex flex-col items-center group transform transition-transform duration-300 hover:-translate-y-2"
    >
      {/* Image */}
      <div className="relative w-[280px] h-[300px]">
        {image && (
          <>
            <img
              src={image}
              alt={title}
              className={`rounded-[40px] overflow-hidden border w-full h-[300px] object-cover object-${objectPosition}`}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/20 rounded-[40px] opacity-100 group-hover:opacity-50 transition-opacity duration-300" />
          </>
        )}
      </div>

      {/* Content */}
      <div className="mt-2 w-full text-gray1 text-start flex flex-col h-full">
        <h4
          className={`font-semibold text-[17px] text-center ${
            titleColor ? "text-primary" : "text-gray1"
          }`}
        >
          {title}
        </h4>
      </div>
    </a>
  );
};

export default TeamCard;
