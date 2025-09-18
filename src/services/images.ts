// src/services/images.ts
import { BASE_URL } from "@/app/api/api";

export const getImageUrl = (filename: string | null | undefined) => {
  if (!filename) return "/trending.png";
  if (filename.startsWith("/")) return filename; // صورة افتراضية لو ما في صورة
  return `${BASE_URL}/image/${filename}`;
};
