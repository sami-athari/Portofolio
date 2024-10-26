'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projectsData = [
  {
    image: '/ToDoList.jpg',
    name: 'ToDoList',
    description: 'I made a todolist project using HTML, CSS, and JavaScript.',
    githubLink: 'https://github.com/sami-athari/To-do-list', // GitHub link
    deployLink: 'https://sami-athari.github.io/To-do-list/', // Deploy link
  },
  {
    image: '/webtugas.png',
    name: 'Web Project',
    description: 'I made a front-end web project using React.',
    githubLink: 'https://github.com/sami-athari/samiuts', // GitHub link
    deployLink: 'https://samiuts.vercel.app/?vercelToolbarCode=lbLMZTh1CIGQqCj', // Deploy link
  },
  {
    image: '/porto.png',
    name: 'Web Portfolio',
    description: 'I made a web portfolio about myself using Next.js and Tailwind CSS.',
    githubLink: 'https://github.com/sami-athari/portofolio', // GitHub link
    deployLink: 'https://portofolio-g9jr.vercel.app/?vercelToolbarCode=Wg_CSHrAOedzxHI', // Deploy link
  },
  {
    image: '/knightgame.png',
    name: 'Platformer Game',
    description: 'A platformer game project built with Gdevelop.',
    // No GitHub link
    deployLink: 'https://sami-athari.itch.io/knight-quest', // Deploy link
  },
  {
    image: '/photographh.jpg',
    name: 'Photograph',
    description: 'Photography is one of my hobbies and passions.',
    // No GitHub and Deploy links
  },
  {
    image: '/perpu.png',
    name: 'Web Library',
    description: 'A library management system built with Laravel.',
    githubLink: 'https://github.com/sami-athari/perpusssss', // GitHub link
    // No Deploy link
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartXRef = useRef<number>(0);
  const touchEndXRef = useRef<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + projectsData.length) % projectsData.length
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartXRef.current - touchEndXRef.current;
    if (deltaX > 50) {
      handleNext();
    } else if (deltaX < -50) {
      handlePrev();
    }
  };

  return (
    <div id="projects" className="py-20 bg-[rgb(17,17,17)] relative">
      <div className="flex justify-center mb-10">
        <h1 className="text-4xl font-bold text-white">Projects</h1>
      </div>

      <div
        className="relative flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Arrow Left with Rotation */}
        <motion.button
          onClick={handlePrev}
          className="absolute left-4 md:left-8 text-white bg-zinc-600 hover:bg-zinc-800 p-3 rounded-full z-10"
          aria-label="Previous Slide"
          whileTap={{ rotate: 360 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <FaArrowLeft />
        </motion.button>

        {/* Project Card with Smooth Entry Animation */}
        <motion.div
          className="w-[300px] sm:w-[400px] lg:w-[500px] bg-zinc-900 rounded-md p-6 text-center transition duration-300 ease-in-out transform hover:shadow-neon"
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.0, type: 'spring' }}
        >
          <div className="overflow-hidden rounded-md">
            <Image
              src={projectsData[currentIndex].image}
              alt={projectsData[currentIndex].name}
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
          </div>
          <h3 className="mt-4 text-white text-xl font-bold">
            {projectsData[currentIndex].name}
          </h3>
          <p className="text-gray-400 text-sm">
            {projectsData[currentIndex].description}
          </p>

          {/* Buttons for GitHub and Deploy Links */}
          <div className="flex justify-center space-x-4 mt-4">
            {projectsData[currentIndex].githubLink && (
              <a
                href={projectsData[currentIndex].githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-zinc-700 text-white rounded-md hover:bg-zinc-800 transition"
              >
                GitHub
              </a>
            )}
            {projectsData[currentIndex].deployLink && (
              <a
                href={projectsData[currentIndex].deployLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-zinc-600 text-white rounded-md hover:bg-zinc-700 transition"
              >
                Deploy
              </a>
            )}
          </div>
        </motion.div>

        {/* Arrow Right with Rotation */}
        <motion.button
          onClick={handleNext}
          className="absolute right-4 md:right-8 text-white bg-zinc-600 hover:bg-zinc-800 p-3 rounded-full z-10"
          aria-label="Next Slide"
          whileTap={{ rotate: 360 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <FaArrowRight />
        </motion.button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6">
        {projectsData.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-2 rounded-full ${
              index === currentIndex ? 'bg-zinc-200' : 'bg-gray-800'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
