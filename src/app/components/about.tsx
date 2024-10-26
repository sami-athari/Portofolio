"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <div className="text-white">
        <p>SDN 03 Jakarta</p>
        <p>SMPN 269 Jakarta - Photograph Development</p>
        <p>SMKN 21 Jakarta - Web Development</p>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <a href="/sertipt.png" target="_blank" rel="noopener noreferrer">
        <Image
          src="/sertipt.png" // Replace with your certificate image path
          alt="Certificate"
          width={300} // Smaller width
          height={200} // Smaller height
          className="rounded-md shadow-lg cursor-pointer" // Added cursor-pointer for visual feedback
        />
      </a>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState<string>("skills");
  const imageRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    // Calculate rotation effect with higher values for more emphasis
    const xOffset = (clientX - left - width / 2) / 10; // Stronger effect by dividing by a smaller number
    const yOffset = (clientY - top - height / 2) / 10;

    if (imageRef.current) {
      imageRef.current.style.transform = `rotateX(${yOffset}deg) rotateY(${xOffset}deg) scale(1.05)`; // Added slight scale for emphasis
    }
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)"; // Reset the transform on leave
    }
  };

  const handleTabChange = (id: string) => {
    setTab(id);
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-[rgb(17,17,17)] text-white px-4 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto p-8 space-y-8 lg:space-y-0">
        {/* Left Side: Image with motion animation */}
        <motion.div
          className="relative w-full lg:w-1/2 flex justify-center lg:justify-start"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <div
            ref={imageRef}
            className="relative w-full max-w-xs lg:max-w-md transition-transform duration-300"
          >
            <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-blue-600 via-pink-500 to-yellow-300 blur-2xl opacity-30 rounded-lg"></div>
            <Image
              src="/samicamera.JPG" // Replace with your image path
              alt="Work Desk"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        {/* Right Side: Text with motion animation */}
        <motion.div
          className="w-full lg:w-1/2 lg:ml-10 text-center lg:text-left"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-md sm:text-lg mb-6">
          I`m Sami Athari Zahid, a Muslim and passionate web developer from Indonesia. Specializing in PHP, Laravel, and Next.js, I build functional, visually stunning web applications. As captain of my school’s basketball team, I bring teamwork and discipline to every project.


          </p>

          {/* Tabs: Skills, Education, Certifications */}
          <div className="flex justify-center lg:justify-start space-x-4 mb-4">
            {TAB_DATA.map((tabItem) => (
              <button
                key={tabItem.id}
                onClick={() => handleTabChange(tabItem.id)}
                className={`${
                  tab === tabItem.id
                    ? "text-zinc-100 border-b-2 border-zinc-100"
                    : "text-gray-400"
                } text-md sm:text-lg font-semibold focus:outline-none`}
              >
                {tabItem.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="text-center lg:text-left">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
