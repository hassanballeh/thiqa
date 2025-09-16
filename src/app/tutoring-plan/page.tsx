import AccordionHome from "@/components/Home/AccordionHome";
import BookForm from "@/components/TutoringPlan/BookForm";
import Competitors from "@/components/TutoringPlan/Competitors";
import Hero from "@/components/TutoringPlan/Hero";
import SuccessStories from "@/components/TutoringPlan/SuccessStories";
import TextSection from "@/components/TutoringPlan/TextSection";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Hero />
      <TextSection />
      <SuccessStories />
      <Competitors />
      <div id="book-form">
        <BookForm />
      </div>{" "}
      <AccordionHome />
    </div>
  );
};

export default page;
