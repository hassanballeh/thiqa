"use client"
import Link from 'next/link'
import React from 'react'
import GalleryItem from '../Custom/GalleryItem'
import { useTranslation } from 'react-i18next'

const Gallery = () => {
  const {t} = useTranslation();
  return (
<div className="grid grid-cols-2 md:grid-cols-4 bg-primary" dir="rtl">
  {/* Image 1 */}
  <GalleryItem src="/gallery/image1.jpg" alt="Image 1" text={t("home.gallery-1")} />

  {/* Image 2 */}
  <GalleryItem src="/gallery/image2.jpg" alt="Image 2" text={t("home.gallery-2")} />

  {/* Image 3 */}
  <GalleryItem src="/gallery/image3.jpg" alt="Image 3" text={t("home.gallery-3")} />

  {/* Forbes Image */}
  <GalleryItem
    src="/gallery/image4.jpg"
    alt="Image 4"
    title="Forbes"
    text={t("home.gallery-4")}
  />

  {/* Image 5 */}
  <GalleryItem src="/gallery/Mask group (7).png" alt="Image 5" text={t("home.gallery-5")} />

  {/* 2024 Section */}
  <div className="relative w-full aspect-[1/1] md:aspect-0 bg-[#0056B1] text-white flex items-center justify-center">
    <div className="text-center px-2">
      <h2 className="text-4xl md:text-7xl font-semibold mb-2">2024</h2>
      <p className="text-lg md:text-3xl font-extralight mb-6">Our Events Gallery</p>
      <Link
        href="/gallery"
        className="rounded-3xl px-4 md:px-10 md:font-semibold py-1.5 border border-white text-white hover:text-white hover:bg-primary/60 transition-all duration-300"
      >
        <span>See more</span>
      </Link>
    </div>
  </div>
  {/* Image 7 */}
  <GalleryItem src="/gallery/Mask group (9).png" alt="Image 7" text={t("home.gallery-7")} />

  {/* Image 8 */}
  <GalleryItem src="/gallery/image8.png" alt="Image 8" text={t("home.gallery-8")} />
</div>


  )
}

export default Gallery