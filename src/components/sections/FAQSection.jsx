"use client";

import React from "react";
import faqs from "data/faqs";

const FAQSection = () => {
  return (
    <section className="w-full mx-auto bg-base-100 rounded-lg">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent text-center mb-2">
        Frequently Asked Questions
      </h2>
      <div className="card card-compact bg-base-100 w-full">
        <div className="card-body">
          <div>
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ faq }) => {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow bg-primary text-base-100 focus:bg-neutral focus:text-primary rounded-box mb-2 transition-all duration-300"
    >
      <div className="collapse-title text-base md:text-xl font-medium">
        {faq.question}
      </div>
      <div className="collapse-content text-base md:text-lg">{faq.answer}</div>
    </div>
  );
};

export default FAQSection;
