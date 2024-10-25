import React from "react";
import { ProfileCard, CTACard } from "@/components/cards";
import { FAQSection, GallerySection } from "@/components/sections";

const About = () => {
  return (
    <main className="min-h-screen max-w-screen-lg w-full mx-auto bg-base-100 p-6 lg:p-12 flex flex-col items-center mt-2 sm:mt-4 md:mt-8">
      <div className="grid grid-cols-1 gap-6 md:gap-12 w-full md:w-3/4">
        <ProfileCard />
        <CTACard />
        <GallerySection />
        <FAQSection />
      </div>
    </main>
  );
};

export default About;
