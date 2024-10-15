import React from "react";
import { ProfileCard, CTACard, FAQAccordion } from "@/components/cards";
import GalleryCarousel from "@/components/ui/GalleryCarousel";

const About = () => {
  return (
    <main className="min-h-screen bg-base-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl md:text-4xl font-bold text-accent mb-4 md:mb-10">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-4">
        <ProfileCard />
        <GalleryCarousel />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-4">
        <FAQAccordion />
        <CTACard />
      </div>
    </main>
  );
};

export default About;
