'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const projectsData = [
  {
    image: '/ToDoList.jpg', // replace with your image path
    name: 'ToDoList',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.',
  },
  {
    image: '/webtugas.png', // replace with your image path
    name: 'Web Project',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.',
  },
  {
    image: '/path-to-your-image3.jpg', // replace with your image path
    name: 'Jane',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.',
  },
  {
    image: '/path-to-your-image4.jpg', // replace with your image path
    name: 'Chris',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.',
  },
  {
    image: '/path-to-your-image5.jpg', // replace with your image path
    name: 'Emma',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.',
  },
  {
    image: '/path-to-your-image6.jpg', // replace with your image path
    name: 'Sophia',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.',
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + projectsData.length) % projectsData.length
    );
  };

  return (
    <div id="projects" className="py-20 bg-gray-900 relative">
      <div className="flex justify-center mb-10">
        <h1 className="text-4xl font-bold text-white">Projects</h1>
      </div>

      <div className="relative flex items-center justify-center">
        {/* Arrow Left */}
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-8 text-white bg-blue-600 hover:bg-blue-700 p-3 rounded-full z-10"
          aria-label="Previous Slide"
        >
          <FaArrowLeft />
        </button>

        {/* Project Card */}
        <div className="w-[300px] sm:w-[400px] lg:w-[500px] bg-gray-800 rounded-md p-6 text-center transition duration-300 ease-in-out transform hover:shadow-neon">
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
            <span className="text-yellow-400">★★★★★</span>
          </div>
          <p className="text-gray-400 text-sm">{projectsData[currentIndex].description}</p>
        </div>

        {/* Arrow Right */}
        <button
          onClick={handleNext}
          className="absolute right-4 md:right-8 text-white bg-blue-600 hover:bg-blue-700 p-3 rounded-full z-10"
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
            className={`w-3 h-3 mx-2 rounded-full ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

