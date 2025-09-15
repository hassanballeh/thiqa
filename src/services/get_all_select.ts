// src/services/selectApis.ts
"use client";
import { ENDPOINTS } from "@/app/api/api";
import Axios from "@/app/api/axios";

// ✅ الدول
export const getCountries = async () => {
  const res = await Axios.get(ENDPOINTS.countries);
  return res.data?.data;
};

// ✅ الجنسيات
export const getFollowingTypes = async () => {
  const res = await Axios.get(ENDPOINTS.followingTypes);
  return res.data?.data;
};

// ✅ الصفوف
export const getGrades = async () => {
  const res = await Axios.get(ENDPOINTS.grades);
  return res.data?.data;
};

// ✅ المناهج
export const getCurriculums = async () => {
  const res = await Axios.get(ENDPOINTS.curriculums);
  return res.data?.data;
};

// ✅ المواد
export const getSubjects = async () => {
  const res = await Axios.get(ENDPOINTS.subjects);
  return res.data?.data;
};
