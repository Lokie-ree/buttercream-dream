import React from "react";
import { ProfileCard, CTACard } from "@/components/cards";
import { FAQSection, GallerySection } from "@/components/sections";

const About = () => {
  return (
    <main className="min-h-screen max-w-screen-md w-full mx-auto bg-base-100 p-6 lg:p-12 flex flex-col items-center mt-2 sm:mt-4 md:mt-8">
      <div className="grid grid-cols-1 gap-8 w-full">
        <ProfileCard />
        <GallerySection />
        <FAQSection />
        <CTACard />
      </div>
    </main>
  );
};

export default About;
