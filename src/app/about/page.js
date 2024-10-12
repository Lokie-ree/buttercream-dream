"use client";

import React from "react";
import ProfileCard from "@/components/ProfileCard";

const About = () => {
  return (
    <main className="min-h-screen bg-base-100 p-8 flex flex-col items-center m-3">
      <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-accent mb-6 md:mb-10">
        About Me
      </h1>
      <ProfileCard />
    </main>
  );
};

export default About;
