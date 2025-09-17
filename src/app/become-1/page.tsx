import Gallery from "@/components/BecomeATutor/BecomePageOne/Gallery";
import Hero from "@/components/BecomeATutor/BecomePageOne/Hero";
import Numbers from "@/components/BecomeATutor/BecomePageOne/Numbers";
import Question from "@/components/BecomeATutor/BecomePageOne/Question";
import Steps from "@/components/BecomeATutor/BecomePageOne/Steps";
import Support from "@/components/BecomeATutor/BecomePageOne/Support";
import React from "react";

const page = () => {
  return (
    <>
      <section className="overflow-hidden">
        <Hero />
      </section>
      <section className="overflow-hidden">
        <Numbers />
      </section>
      <section id="benefits" className="overflow-hidden">
        <Gallery />
      </section>
      <section className="overflow-hidden">
        <Support />
      </section>
      <section className="overflow-hidden">
        <Steps />
      </section>
      <section className="overflow-hidden">
        <Question />
      </section>
    </>
  );
};

export default page;
