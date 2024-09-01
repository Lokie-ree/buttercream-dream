"use client";

import React, { useState } from "react";
import Image from "next/image";
import { collection, addDoc } from "firebase/firestore";
import { db } from "/firebase";
import SocialButtons from "../components/SocialButtons";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "contactMessages"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        timestamp: new Date(),
      });
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again later.");
      console.error("Error adding document: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-base-100 p-6 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-base-100 rounded-xl shadow-xl p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center lg:space-x-8">
        <div className="flex-shrink-0 lg:w-1/3">
          <Image
            src="/assets/images/blovely_photo.jpg"
            alt="Client Photo"
            width={300}
            height={300}
            className="rounded-box shadow-lg"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="lg:w-2/3 mt-6 lg:mt-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-4">
            About Me
          </h1>
          <div className="text-md lg:text-lg text-primary space-y-4">
            <p>
              Hello! I'm Britney Lovely, the face behind "I Dream of
              Buttercream." I've always had a passion for baking and have turned
              that passion into a business. Every cake I create is made with the
              finest ingredients and a lot of love. Whether it's a birthday,
              wedding, or any special occasion, I'm here to make your
              celebration sweeter.
            </p>
            <p>
              Baking is not just my profession but my way of bringing joy to
              people's lives. Each creation is unique and crafted to perfection,
              reflecting the joy and celebration in your life.
            </p>
          </div>
          <div className="mt-6">
            <SocialButtons />
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-4xl w-full bg-base-100 rounded-xl shadow-xl p-6 lg:p-8 mt-12">
        <h2 className="text-3xl font-bold text-accent mb-6">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg text-primary mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered input-accent w-full"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg text-primary mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered input-accent w-full"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-lg text-primary mb-2">
              Phone
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input input-bordered input-accent w-full"
              placeholder="Your Phone Number"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-lg text-primary mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="textarea textarea-bordered textarea-accent w-full"
              placeholder="Your Message"
              rows="3"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-accent text-base-100 hover:text-accent hover:bg-neutral focus:outline-none"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        {isSuccess && (
          <p className="mt-4 text-green-500">
            Thank you! Your message has been sent successfully.
          </p>
        )}
        {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
      </div>
    </main>
  );
};

export default About;
