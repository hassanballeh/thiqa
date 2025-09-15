"use client"
import React from 'react'
import { useTranslation } from 'react-i18next';

const BlogDetails = () => {
    const { t } = useTranslation();
  
  return (
 <div className='bg-white py-10 md:py-0 px-4'>
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-stretch w-full">
  <div className="text-2xl md:text-3xl flex-1 md:px-4 text-center md:text-start flex flex-col justify-center max-w-lg">
<h2 className=" font-bold text-primary leading-snug">
{t("blog.details-heading1")} </h2>
   <p className="max-w-sm text-sm text-gray1 font-light mt-4 ">
{t("blog.details-heading2")}  </p>
  </div>

  <section className="flex-1 relative flex justify-center items-center py-12 overflow-hidden">
    <div className="relative z-10">
      <img
        src="/blog-details.png"
        alt="Student"
        className="object-contain z-10 relative"
      />
    </div>

  </section>
</section>
<p className='max-w-6xl mx-auto pt-10 sm:pe-8 text-center sm:text-start'>
{t("blog.details-1")}</p><br/>
<p className='max-w-6xl mx-auto  sm:pe-8 text-center sm:text-start'>
{t("blog.details-2")}
</p><br/>
<p className='max-w-6xl mx-auto  sm:pe-8 text-center sm:text-start'>
{t("blog.details-3")}</p><br/>
<p className='max-w-6xl mx-auto  sm:pe-8 text-center sm:text-start'>
{t("blog.details-4")}</p><br/>
<p className='max-w-6xl mx-auto  sm:pe-8 text-center sm:text-start'>
{t("blog.details-5")}</p><br/>
<p className='max-w-6xl mx-auto  sm:pe-8 text-center sm:text-start'>
{t("blog.details-6")}</p><br/>
<p className='max-w-6xl mx-auto  sm:pe-8 text-center sm:text-start'>
{t("blog.details-blog-1")}?</p>
<p className='max-w-6xl mx-auto  sm:pe-8 text-center sm:text-start'>
{t("blog.details-blog-2")}
</p><br/>
    </div>   )
}

export default BlogDetails