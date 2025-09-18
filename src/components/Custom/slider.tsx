import { FaStar } from "react-icons/fa";
import Link from "next/link";
import React from "react";

interface Testimonial {
  name: string;
  text: string;
  bgColor?: string;
  textColor?: string;
  position: string;
  avatar: string;
  layerPosition?: string;
  layerImage?: string;
  layerGif?: string;
}

interface HeroSlideProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  testimonials: Testimonial[];
  icon1: string;
  icon2: string;
  link1: string;
  changePos: boolean;
}

export default function HeroSlide({
  title,
  subtitle,
  description,
  image,
  testimonials,
  icon1,
  icon2,
  link1,
  changePos,
}: HeroSlideProps) {
  return (
    <section className=" mx-auto  sm:px-6 px-20 flex flex-col lg:flex-row w-full h-full items-center">
      {/* Left Content Section */}
      <div
        className={`w-1/3 flex flex-col "justify-start"  order-2 lg:order-1 mt-8 lg:mt-0 h-[400px]`}
      >
        {/* Title */}
        <div className=" ">
          <h1
            className={`xl:text-[55px] text-[45px]
             font-bold text-primary font-roboto leading-tight line-clamp-2 overflow-hidden`}
          >
            {title}
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mb-2">
          <h2
            className={`xl:text-[55px] text-[45px] font-bold text-[#4D4D4D] font-roboto leading-tight line-clamp-2 overflow-hidden`}
          >
            {subtitle}
          </h2>
        </div>

        {/* Description */}
        <div className="">
          <p className="text-[18px] text-[#0C1E4B] font-light leading-[30px] max-w-lg line-clamp-4 overflow-hidden">
            {description}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-shrink-0 absolute top-[75%]">
          <Link
            href={link1}
            className="inline-flex items-center justify-center bg-primary text-white text-base font-semibold px-6  py-1.5  rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {icon1}
          </Link>
          <Link
            href="/under-develop"
            className="inline-flex items-center justify-center border-2 border-primary text-primary text-base font-semibold px-6 py-1.5  rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {icon2}
          </Link>
        </div>
      </div>
      {/* Right Image Section */}
      <div
        className={`relative ${
          changePos ? "top-[-32px]" : ""
        } w-full lg:w-3/5 xl:w-2/3  flex justify-center items-center order-1 lg:order-2`}
      >
        {/* Main Image */}
        <div className="relative z-10">
          <img
            src={image}
            alt="Student"
            className=" w-full max-w-xl lg:max-w-2xl xl:h-[600px] h-auto  z-10 relative"
          />
        </div>

        {/* Testimonials and Decorative Elements */}
        {testimonials.map((testimonial, idx) => (
          <React.Fragment key={idx}>
            {/* Layer Images */}
            {testimonial.layerImage && testimonial.layerPosition && (
              <img
                src={testimonial.layerImage}
                alt={`${testimonial.name} decoration layer`}
                className={`hidden lg:block absolute ${testimonial.layerPosition} w-8 h-8 xl:w-10 xl:h-10 z-10`}
              />
            )}

            {/* Layer GIFs */}
            {testimonial.layerGif && testimonial.layerPosition && (
              <>
                {/* Mobile version - positioned around the image like in Figma */}
                {idx === 1 && (
                  <img
                    src={testimonial.layerGif}
                    alt={`${testimonial.name} decoration mobile`}
                    className="absolute right-4 top-16 sm:right-8 sm:top-20 w-16 h-16 sm:w-20 sm:h-20 z-20 lg:hidden"
                  />
                )}
                {/* Desktop version */}
                <img
                  src={testimonial.layerGif}
                  alt={`${testimonial.name} decoration desktop`}
                  className={`hidden lg:block absolute ${testimonial.layerPosition} w-16 h-16 xl:w-20 xl:h-20 z-20`}
                />
              </>
            )}

            {/* Desktop Testimonial Cards */}
            <div
              className={`
                hidden lg:flex flex-col justify-around  absolute ${
                  testimonial.position
                } ${changePos ? "" : ""}
                
                ${testimonial.bgColor ?? "bg-white"}
                rounded-2xl xl:rounded-3xl shadow-lg p-[1rem] z-20 
                hover:shadow-xl transition-all duration-300 hover:-translate-y-2
                backdrop-blur-sm border border-white/20
              `}
            >
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 xl:w-8 xl:h-8 bg-[#D9D9D9] rounded-full overflow-hidden flex-shrink-0"></div>
                <div className="flex flex-col">
                  <span
                    className={` text-xs xl:text-sm ${
                      testimonial.textColor ?? "text-bold_gray"
                    } line-clamp-1`}
                  >
                    {testimonial.name}
                  </span>
                  <div
                    className={`flex items-center ${
                      testimonial.textColor ?? "text-gold"
                    } text-xs mt-1`}
                  >
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} />
                      ))}
                  </div>
                </div>
              </div>
              <p
                className={`text-[13px] font-light leading-[20px] ${
                  testimonial.textColor ?? "text-[#1E1E1E]"
                } `}
              >
                {testimonial.text}
              </p>
            </div>

            {/* Mobile Testimonial Cards - Positioned like Figma design */}
            <div
              className={`lg:hidden absolute z-20 ${
                idx === 0
                  ? "top-[15%] left-2 sm:left-4"
                  : idx === 1
                  ? "top-[5%] right-2 sm:right-4"
                  : "bottom-[15%] right-2 sm:right-4"
              }`}
            >
              <div
                className={`
                  w-[140px] sm:w-[160px] min-h-[100px] sm:min-h-[110px]
                  ${testimonial.bgColor ?? "bg-white"}
                  rounded-2xl shadow-lg p-3 sm:p-4
                  backdrop-blur-sm border border-white/20
                  ${testimonial.bgColor === "bg-gold" ? "text-white" : ""}
                `}
              >
                {/* Avatar and Name */}
                <div className="flex items-start gap-2 mb-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#D9D9D9] rounded-full overflow-hidden flex-shrink-0"></div>
                  <div className="flex flex-col">
                    <span
                      className={`font-semibold text-xs ${
                        testimonial.textColor ?? "text-gray-800"
                      } line-clamp-1`}
                    >
                      {testimonial.name}
                    </span>
                    <div
                      className={`flex items-center ${
                        testimonial.textColor === "text-white"
                          ? "text-yellow-300"
                          : "text-gold"
                      } text-[10px] mt-1`}
                    >
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <FaStar key={i} />
                        ))}
                    </div>
                  </div>
                </div>
                {/* Testimonial Text */}
                <p
                  className={`text-[10px] sm:text-xs leading-relaxed font-light ${
                    testimonial.textColor ?? "text-gray-600"
                  } line-clamp-3`}
                >
                  {testimonial.text}
                </p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
