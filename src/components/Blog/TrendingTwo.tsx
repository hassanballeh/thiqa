'use client'
import React from 'react'
import BlogCard from '../Custom/BlogCard'
import { useTranslation } from 'react-i18next';

const TrendingTwo = () => {
      const { t } = useTranslation();
  
  return (
  <div className='bg-white py-16'>
            <h2 className="mb-10 container mx-auto text-3xl font-bold text-primary leading-tight">
{t("blog.11-heading")} </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <BlogCard
        image="/trending-2.png"
        title={t("blog.11-blog1")}
        description={t("blog.11-blog1")}
        // description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        link="/blog/lorem-ipsum"
      />
       <BlogCard
        image="/trending-2.png"
        title={t("blog.11-blog2")}
        description={t("blog.11-blog2")}
        // description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        link="/blog/lorem-ipsum"
      />
       <BlogCard
        image="/trending-2.png"
        title={t("blog.11-blog3")}
        description={t("blog.11-blog3")}
        // description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        link="/blog/lorem-ipsum"
      />
       <BlogCard
        image="/trending-2.png"
        title={t("blog.11-blog4")}
        description={t("blog.11-blog4")}
        // description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        link="/blog/lorem-ipsum"
      />
       <BlogCard
        image="/trending-2.png"
        title={t("blog.11-blog5")}
        description={t("blog.11-blog5")}
        // description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        link="/blog/lorem-ipsum"
      />
       <BlogCard
        image="/trending-2.png"
        title={t("blog.11-blog6")}
        description={t("blog.11-blog6")}
        // description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        link="/blog/lorem-ipsum"
      />
    </div>
      </div>  )
}

export default TrendingTwo