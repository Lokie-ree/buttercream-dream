"use client";

import React from "react";
import faqs from "data/faqs";

const FAQSection = () => {
  return (
    <>
      <section className="my-4">
        <div className="card bg-base-100 w-full shadow-xl">
          <div className="card-body">
            <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-accent mb-4">
              Frequently Asked Questions
            </h2>
            <div>
              {faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const FAQItem = ({ faq }) => {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow bg-primary text-base-100 focus:bg-neutral focus:text-primary rounded-box mb-2 transition-all duration-300"
    >
      <div className="collapse-title text-sm md:text-xl font-medium">
        {faq.question}
      </div>
      <div className="collapse-content text-xs">{faq.answer}</div>
    </div>
  );
};

export default FAQSection;
