import Axios from "@/app/api/axios";
import { ENDPOINTS } from "@/app/api/api"; 

// === Get All Blogs ===
export const getBlogs = async (page: number = 1) => {
  const res = await Axios.get(`${ENDPOINTS.blogs}?page=${page}`);
  console.log(res.data.data)
  return res.data?.data; 
  // بيرجع { total, currentPage, pages, posts }
};

// === Get Blog By ID or Slug ===
export const getBlogById = async (id: number | string) => {
  const res = await Axios.get(`${ENDPOINTS.blogDetails}/${id}`);
 console.log(res)
  return res.data?.data; 
  // بيرجع object واحد فيه التفاصيل
};
