"use client";
import React, { useState } from "react";
import Image from "next/image";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <p className="text-gray-400">SMKN 21 Jakarta - Web Development</p>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <p className="text-gray-400">Laravel Mastery, Frontend Development</p>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState<string>("skills"); // Type the state as string

  // Explicitly type the 'id' parameter as 'string'
  const handleTabChange = (id: string) => {
    setTab(id);
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="flex flex-row items-center justify-between max-w-6xl mx-auto p-8">
        {/* Left Side: Image */}
        <div className="w-1/2">
          <Image
            src="/path-to-your-image.jpg" // Replace with your image path
            alt="Work Desk"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>

        {/* Right Side: Text */}
        <div className="w-1/2 ml-10">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg mb-6">
          I`m Sami Athari Zahid, a passionate web developer at SMKN 21 specializing in PHP, Laravel, and Next.js. I thrive on building functional, visually stunning web applications. As the captain of my school`s basketball team, I embrace teamwork and discipline in my projects.
          </p>

          {/* Tabs: Skills, Education, Certifications */}
          <div className="flex justify-start space-x-4 mb-4">
            {TAB_DATA.map((tabItem) => (
              <button
                key={tabItem.id}
                onClick={() => handleTabChange(tabItem.id)}
                className={`${
                  tab === tabItem.id
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-400"
                } text-lg font-semibold focus:outline-none`}
              >
                {tabItem.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div>{TAB_DATA.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
