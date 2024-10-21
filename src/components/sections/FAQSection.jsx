"use client";

import React, { useState } from "react";
import faqsArray from "data/faqsArray";

const FAQSection = () => {
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleCategory = (index) => {
    if (openCategoryIndex === index) {
      // Close if same category is clicked
      setOpenCategoryIndex(null);
    } else {
      // Open the clicked category
      setOpenCategoryIndex(index);
      // Reset the question state when category changes
      setOpenQuestionIndex(null);
    }
  };

  const toggleQuestion = (index, e) => {
    e.stopPropagation();
    if (openQuestionIndex === index) {
      // Close if the same question is clicked
      setOpenQuestionIndex(null);
    } else {
      // Open the clicked question
      setOpenQuestionIndex(index);
    }
  };

  return (
    <section>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent text-center mb-4">
        FAQs
      </h2>

      {/* Map over FAQ Categories */}
      {faqsArray.map((section, categoryIndex) => (
        <div key={categoryIndex} className="mb-2">
          {/* Collapsible Category */}
          <div
            onClick={() => toggleCategory(categoryIndex)}
            className={`collapse collapse-plus bg-base-100 text-secondary border border-primary rounded-box mb-1 transition-all duration-300 ease-in-out ${
              openCategoryIndex === categoryIndex ? "collapse-open" : ""
            }`}
          >
            <div className="collapse-title text-lg font-semibold">
              {section.category}
            </div>
            {/* Questions in the category */}
            {openCategoryIndex === categoryIndex && (
              <div className="collapse-content transition-all duration-300 ease-in-out">
                {section.faqs.map((faq, questionIndex) => (
                  <div key={questionIndex} className="mb-2">
                    {/* Collapsible Question */}
                    <div
                      onClick={(e) => toggleQuestion(questionIndex, e)}
                      className={`collapse collapse-arrow bg-primary text-base-100 border border-accent mb-1 transition-all duration-300 ease-in-out ${
                        openQuestionIndex === questionIndex
                          ? "collapse-open"
                          : ""
                      }`}
                    >
                      <div className="collapse-title text-md font-semibold">
                        {faq.question}
                      </div>
                      {openQuestionIndex === questionIndex && (
                        <div className="collapse-content transition-all duration-300 ease-in-out">
                          <p className="font-normal">{faq.answer}</p>
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
    </section>
  );
};

export default FAQSection;
