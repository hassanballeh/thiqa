// components/BlogCard.tsx
import { t } from "i18next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
  image?: string;
  title: string;
  description?: string;
  link: string;
  readmore?: boolean;
  titleColor ?: boolean;
}


const BlogCard: React.FC<BlogCardProps> = ({ image, title, description, link, readmore, titleColor }) => {
  return (
    <a
      className="flex flex-col items-center group transform transition-transform duration-300 hover:-translate-y-2"
      href="#"
    >
      {/* Image */}
 <div className="relative w-full">
  {image ? (
    <>
      <Image
        src={image} // رابط الصورة من getImageUrl
        alt={title}
        width={600}
        height={300}
        className="rounded-[40px] overflow-hidden border w-full h-[300px] object-cover object-top"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 rounded-[40px] opacity-100 group-hover:opacity-50 transition-opacity duration-300" />
    </>
  ) : (
    <div className="relative w-full h-[300px]">
      <img
        src="/trending.png"
        alt="Trending"
        className="rounded-[40px] w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 rounded-[40px]" />
    </div>
  )}
</div>

      {/* Content */}
      <div className="ps-2 mt-4 w-full text-gray1 text-start flex flex-col h-full">
        <h4
          className={`font-bold text-xl mb-2   line-clamp-1 ${
            titleColor ? "text-primary" : "text-gray1"
          }`}
        >
          {title}
        </h4>

        {/* Description with line clamp */}
        <p className="font-light text-sm line-clamp-2 mb-2">
          {description}
        </p>

        {/* Read More aligned bottom */}
        {readmore && (
          <div className="mt-auto">
            <Link
              href={link}
              className="flex items-center underline text-primary font-medium hover:text-blue-400 text-sm"
            >
              <span>{t("blog.read-more")}</span>
              <svg
                className="w-4 h-4 ml-1 animate-moveX"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        )}
      </div>
    </a>
  );
};

export default BlogCard;


