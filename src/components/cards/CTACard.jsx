"use client";

import React, { useState } from "react";
import FormModal from "../ui/FormModal";

const CTACard = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isCustomOrderFormOpen, setIsCustomOrderFormOpen] = useState(false);

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };

  const openCustomOrderForm = () => {
    setIsCustomOrderFormOpen(true);
  };

  const closeCustomOrderForm = () => {
    setIsCustomOrderFormOpen(false);
  };

  return (
    <section className="w-full mx-auto bg-base-100 rounded-xl">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent text-center">
        Get in Touch!
      </h2>
      <div className="card card-compact shadow-xl rounded-xl bg-base-100 w-full">
        <div className="card-body">
          <p className="text-lg md:text-xl mb-2 text-secondary">
            I'd love to hear from you! Reach out to discuss your cake ideas,
            place an order, or just say hello.
          </p>
          <div className="card-actions justify-center">
            {/* Button to open Contact Form Modal */}
            <button
              className="btn btn-primary text-base-100 hover:bg-neutral hover:text-primary w-full md:w-auto"
              onClick={openContactForm}
            >
              Contact Me
            </button>
            {/* Button to open Custom Order Form Modal */}
            <button
              className="btn btn-primary text-base-100 hover:bg-neutral hover:text-primary w-full md:w-auto"
              onClick={openCustomOrderForm}
            >
              Request Custom Order
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <FormModal
        isOpen={isContactFormOpen}
        closeModal={closeContactForm}
        formUrl="https://docs.google.com/forms/d/e/1FAIpQLSeLRQNAr5Kfq7yzSBc7ADkjZgaDwsa520rthsqSKA-6Qv9qeA/viewform?embedded=true"
        title="Contact Form"
      />

      {/* Custom Order Form Modal */}
      <FormModal
        isOpen={isCustomOrderFormOpen}
        closeModal={closeCustomOrderForm}
        formUrl="https://docs.google.com/forms/d/e/1FAIpQLSci3COw3HLrZPL8koLeM70sEUlNzf5DQZd8QRn1ZxMrj0Zt7g/viewform?embedded=true"
        title="Custom Order Form"
      />
    </section>
  );
};

export default CTACard;
