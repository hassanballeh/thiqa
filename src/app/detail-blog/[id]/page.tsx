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
  // console.log(blogId);
  const [blog, setBlog] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (
      blogId === "booking-a-private-tutor-for-your-child-is-the-best-investment"
    ) {
      setBlog({
        title:
          "Why Booking a Private Tutor for Your Child is the Best Investment",
        content:
          "Booking a private tutor provides personalized support that helps your child understand subjects deeply and boosts their confidence. Private tutoring fills learning gaps, enhances academic skills, and prepares students for exams. Additionally, a private tutor can continuously monitor progress and tailor teaching plans to fit the student's learning style.",
        image: "/blog-tall.png",
      });
    } else if (blogId == "leading-real-change-in-private-tutoring") {
      setBlog({
        title: "Thiqa Education: Leading Real Change in Private Tutoring",
        content:
          " At Thiqa, we have made a real impact in private tutoring by creating a professional learning environment that ensures quality education and teacher support. We focus on selecting top teachers and using advanced teaching methods tailored to each student’s needs. This approach helps achieve measurable results and continuously improve students’ performance. Our goal is to build trust between parents and teachers, making the learning journey successful and enjoyable.",
        image: "/blog-details.png",
      });
    } else {
      if (!blogId) return;
      const fetchBlogs = async () => {
        setLoading(true);
        try {
          const data = await getBlogById(blogId);
          setBlog(data);
        } catch (error) {
          console.error("Error fetching blogs:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchBlogs();
    }

    setLoading(false);
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
            <div className="relative z-10 w-full max-w-md md:min-h-72">
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
      <div className="max-w-6xl mx-auto py-10 md:pb-20 sm:pe-8 text-center sm:text-start space-y-4 text-left">
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
