import React from 'react'
import Link from 'next/link'
const pricingPlans = [
  {
    title: "Individual session",
    oldPrice: "350 AED",
    price: "200 AED",
  },
  {
    title: "First package",
    oldPrice: "600 AED",
    price: "500 AED",
  },
  {
    title: "Second package",
    oldPrice: "1200 AED",
    price: "900 AED",
  },
  {
    title: "Third package",
    oldPrice: "2400 AED",
    price: "1800 AED",
  },
];

const Packages = () => {
  return (
<section className="py-20">
  <div className=" px-4 mx-auto max-w-screen-xl  lg:px-6">
   <div className="text-center mb-8 mx-auto">
          <div className="inline-block relative max-w-2xl mx-auto">
            <h3 className="text-3xl lg:text-5xl font-extrabold text-primary leading-snug">
              Consultation Packages
            </h3>
            <img src="/line-comp.svg" alt="line" className="w-full  mx-auto" />
          </div>
          <span className="text-gray1 block max-w-lg mx-auto mt-6">
We offer comprehensive consulting packages with personalized plans, assessments, and resources to support your children&apos;s educational success.
   </span>
        </div>
<div className="space-y-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 lg:space-y-0">
  {pricingPlans.map((plan, idx) => (
    <div
      key={idx}
      className="flex flex-col gap-4 p-6 mx-auto max-w-lg text-center text-gray1 bg-white rounded-[40px] border border-gray-100 shadow "
    >
      <h3 className="text-primary mt-6 text-xl font-bold">{plan.title}</h3>

      <span className="line-through text-gray1 text-lg">{plan.oldPrice}</span>
      <span className="text-primary text-3xl font-extrabold">{plan.price}</span>

      {/* ✅ نفس القائمة */}
      <ul role="list" className="my-6 space-y-4 text-left">
        {[
          "Individual configuration",
          "No setup, or hidden fees",
          <>
            Team size: <span className="font-semibold">1 developer</span>
          </>,
          <>
            Premium support: <span className="font-semibold">6 months</span>
          </>,
          <>
           updates: <span className="font-semibold">6 months</span>
          </>,
        ].map((text, i) => (
          <li key={i} className="flex items-center gap-3">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gold">
              <svg
                className="w-3.5 h-3.5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="text-sm text-gray-500">{text}</span>
          </li>
        ))}
      </ul>

      <Link
  href="/tutoring-plan#book-form"
        className="bg-primary rounded-2xl font-light w-48 mx-auto py-2.5 text-white hover:bg-primary/70"
      >
        <span>Book a Consultation</span>
      </Link>
    </div>
  ))}
</div>

  </div>
</section>
  )
}

export default Packages