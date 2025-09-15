import BookForm from "@/components/Academic/BookForm";
import Consulting from "@/components/Academic/Consulting";
import Hero from "@/components/Academic/Hero";
import Packages from "@/components/Academic/Packages";
import Question from "@/components/Academic/Questions";
import Steps from "@/components/Academic/Steps";
import Support from "@/components/Academic/Support";
import React from "react";

const page = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Consulting />
      <Support />
      <Packages />
      <Steps />
      <div id="academic-form">
        <BookForm />
      </div>
      <Question />
    </div>
  );
};

export default page;
