"use client";

import TutorForm from "@/components/Forms/Tutor";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <div className="bg-white py-12">
      <section className="container mx-auto">
        <div className="flex-1 md:px-4 text-center md:text-start flex flex-col justify-center">
          <h2 className="text-3xl md:text-6xl font-bold text-primary leading-tight font-roboto">
            Tutor Form
          </h2>
        </div>

        {/* لفّ المكون داخل Suspense */}
        <Suspense fallback={<div>Loading...</div>}>
          <TutorForm />
        </Suspense>
      </section>
    </div>
  );
};

export default Page;
