"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "../Custom/BlogCard";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { getBlogs } from "@/services/blogs";
import { getImageUrl } from "@/services/images";

interface Blog {
  id: number;
  slug: string;
  image: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  category: string; // make sure your API provides this
}

const Trending = () => {
  const { t } = useTranslation();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState<string>(
    typeof window !== "undefined" ? localStorage.getItem("lang") || "en" : "en"
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("Trend"); // new state

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      localStorage.setItem("lang", lng);
      setLang(lng);
    };

    i18next.on("languageChanged", handleLanguageChange);
    return () => i18next.off("languageChanged", handleLanguageChange);
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const data = await getBlogs(1);
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [lang]);

  // Filter blogs based on category
  const filteredBlogs =
    selectedCategory === "all"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="bg-white pb-14">
      <h2 className="mb-10 container mx-auto text-3xl font-bold text-primary leading-tight">
        {t("blog.trending-article")}
      </h2>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            image={getImageUrl(blog.image)}
            title={blog.title}
            readMore
            link={`/detail-blog/${blog.slug}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;
