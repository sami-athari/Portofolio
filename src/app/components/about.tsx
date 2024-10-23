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
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto p-8 space-y-8 lg:space-y-0">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <Image
            src="/samicamera.JPG" // Replace with your image path
            alt="Work Desk"
            width={600}
            height={400}
            className="rounded-lg w-full max-w-xs lg:max-w-md"
          />
        </div>

        {/* Right Side: Text */}
        <div className="w-full lg:w-1/2 lg:ml-10 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-md sm:text-lg mb-6">
            I`m Sami Athari Zahid, a passionate web developer at SMKN 21 specializing in PHP, Laravel, and Next.js. I thrive on building functional, visually stunning web applications. As the captain of my school`s basketball team, I embrace teamwork and discipline in my projects.
          </p>

          {/* Tabs: Skills, Education, Certifications */}
          <div className="flex justify-center lg:justify-start space-x-4 mb-4">
            {TAB_DATA.map((tabItem) => (
              <button
                key={tabItem.id}
                onClick={() => handleTabChange(tabItem.id)}
                className={`${
                  tab === tabItem.id
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-400"
                } text-md sm:text-lg font-semibold focus:outline-none`}
              >
                {tabItem.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="text-center lg:text-left">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
