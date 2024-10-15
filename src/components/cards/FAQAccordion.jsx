import React from "react";

const FAQAccordion = () => {
  return (
    <>
      <h2 className="text-center text-accent font-bold text-xl md:text-3xl mt-3">
        Frequently Asked Questions
      </h2>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl text-primary font-semibold">
            Question:
          </div>
          <div className="collapse-content">
            <p className="text-primary font-medium">Answer: </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQAccordion;
