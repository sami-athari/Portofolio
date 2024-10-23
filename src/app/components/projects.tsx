'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const projectsData = [
  {
    image: '/ToDoList.jpg',
    name: 'ToDoList',
    description: 'i made a todolist project using html, css, and js.',
  },
  {
    image: '/webtugas.png',
    name: 'Web Project',
    description: 'i made a front end web project using react.',
  },
  {
    image: '/porto.png',
    name: 'Web Portofolio',
    description: 'I made a web portofolio about my self using next.js and tailwind css',
  },
  {
    image: '/path-to-your-image4.jpg',
    name: 'Knight Coin',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.',
  },
  {
    image: '/photographh.jpg',
    name: 'Photograph',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.',
  },
  {
    image: '/path-to-your-image6.jpg',
    name: 'Laravel Library',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.',
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartXRef = useRef<number>(0); // Untuk menyimpan posisi touch awal
  const touchEndXRef = useRef<number>(0);   // Untuk menyimpan posisi touch akhir

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + projectsData.length) % projectsData.length
    );
  };

  // Handle touch start
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  // Handle touch move
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  // Handle touch end
  const handleTouchEnd = () => {
    const deltaX = touchStartXRef.current - touchEndXRef.current;

    // Check if swipe distance is enough to trigger next/prev
    if (deltaX > 50) {
      handleNext(); // Geser ke kanan
    } else if (deltaX < -50) {
      handlePrev(); // Geser ke kiri
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
        {/* Arrow Left */}
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-8 text-white bg-zinc-600 hover:bg-zinc-800 p-3 rounded-full z-10"
          aria-label="Previous Slide"
        >
          <FaArrowLeft />
        </button>

        {/* Project Card */}
        <div className="w-[300px] sm:w-[400px] lg:w-[500px] bg-zinc-900 rounded-md p-6 text-center transition duration-300 ease-in-out transform hover:shadow-neon">
          <div className="overflow-hidden rounded-md">
            <Image
              src={projectsData[currentIndex].image}
              alt={projectsData[currentIndex].name}
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
          </div>
          <h3 className="mt-4 text-white text-xl font-bold">{projectsData[currentIndex].name}</h3>
          <div className="flex justify-center mt-2 mb-4">
            
          </div>
          <p className="text-gray-400 text-sm">{projectsData[currentIndex].description}</p>
        </div>

        {/* Arrow Right */}
        <button
          onClick={handleNext}
          className="absolute right-4 md:right-8 text-white bg-zinc-600 hover:bg-zinc-800 p-3 rounded-full z-10"
          aria-label="Next Slide"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6">
        {projectsData.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-2 rounded-full ${index === currentIndex ? 'bg-zinc-200' : 'bg-gray-600'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
