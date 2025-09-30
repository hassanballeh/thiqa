
"use client";

import { useEffect, useState } from "react";
import i18n from "@/libs"; 

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const lang = localStorage.getItem("lang") || "en";
    i18n.changeLanguage(lang).then(() => {
      document.body.dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
      setIsReady(true);
    });
  }, []);

  if (!isReady) return null; 

  return <>{children}</>;
};

export default LanguageProvider;
