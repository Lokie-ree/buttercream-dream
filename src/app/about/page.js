import React from "react";
import { ProfileCard, CTACard } from "@/components/cards";
import { FAQSection, GallerySection } from "@/components/sections";

const About = () => {
  return (
    <main className="min-h-screen bg-base-100 p-6 flex flex-col items-center">
      <div className="space-y-12">
        <ProfileCard />
        <GallerySection />
        <FAQSection />
        <CTACard />
      </div>
    </main>
  );
};

export default About;
