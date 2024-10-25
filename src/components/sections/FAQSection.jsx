"use client";

import React, { useState } from "react";
import faqsArray from "data/faqsArray";

const FAQSection = () => {
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategoryIndex((prevIndex) => (prevIndex === index ? null : index));
    setOpenQuestionIndex(null);
  };

  const toggleQuestion = (index, e) => {
    e.stopPropagation();
    setOpenQuestionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="card card-compact w-full bg-base-100 shadow-xl rounded-xl">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent text-center mt-2 mb-4 md:mb-6">
        FAQs
      </h2>
      <div className="card-body">
        {faqsArray.map((section, categoryIndex) => (
          <div key={categoryIndex} className="mb-4">
            <div
              className={`collapse collapse-plus bg-base-100 text-secondary border border-primary rounded-box ${
                openCategoryIndex === categoryIndex ? "collapse-open" : ""
              }`}
              onClick={() => toggleCategory(categoryIndex)}
            >
              <div className="collapse-title text-lg font-semibold">
                {section.category}
              </div>
              {openCategoryIndex === categoryIndex && (
                <div className="collapse-content">
                  {section.faqs.map((faq, questionIndex) => (
                    <div key={questionIndex} className="mb-1">
                      <div
                        className={`collapse collapse-arrow bg-primary text-base-100 border border-accent ${
                          openQuestionIndex === questionIndex
                            ? "collapse-open"
                            : ""
                        }`}
                        onClick={(e) => toggleQuestion(questionIndex, e)}
                      >
                        <div className="collapse-title text-md font-semibold">
                          {faq.question}
                        </div>
                        {openQuestionIndex === questionIndex && (
                          <div className="collapse-content">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
