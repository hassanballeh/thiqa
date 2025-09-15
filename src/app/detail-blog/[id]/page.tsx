"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { getBlogById } from "@/services/blogs";
import { getImageUrl } from "@/services/images";

interface BlogData {
  title: string;
  content?: string;
  image?: string;
}

const BlogDetails = () => {
  const params = useParams();
const blogId = Array.isArray(params?.id) ? params.id[0] : params?.id;

  const [blog, setBlog] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!blogId) return;

    const fetchBlog = async () => {
      try {
        const data = await getBlogById(blogId);
        setBlog(data); // نخزن الـ object كامل وليس content فقط
      } catch (err) {
        console.error("Failed to fetch blog details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

  if (loading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  if (!blog) {
    return <p className="text-center py-10">Blog not found.</p>;
  }

  return (
    <div className="bg-white md:py-0 px-4">
      <section className="pt-10 container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center  gap-4  w-full">
        <div className="text-2xl md:text-3xl flex-1 md:px-4 text-center md:text-start flex flex-col justify-center max-w-lg">
          <h2 className="font-bold text-primary leading-snug">{blog.title}</h2>
        </div>

        <section className="flex-1 relative flex justify-center items-center overflow-hidden">
          {blog.image && (
            <div className="relative z-10 w-full max-w-md min-h-72">
              <Image
  src={getImageUrl(blog.image)}
  alt={blog.title}
  width={600}
  height={400}
  className="object-contain w-full h-auto rounded-[30px]"
  priority
/>

            </div>
          )}
        </section>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto py-10 md:pb-20 sm:pe-8 text-center sm:text-start space-y-4">
        {blog.content
          ?.split("\n")
          .filter((paragraph) => paragraph.trim() !== "")
          .map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
      </div>
    </div>
  );
};

export default BlogDetails;
