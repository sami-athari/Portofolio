'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const skillsData = [
  { image: "/css.png", name: "CSS", width: 50, height: 50 },
  { image: "/html.png", name: "HTML", width: 50, height: 50 },
  { image: "/tailwind.png", name: "Tailwind CSS", width: 50, height: 50 },
  { image: "/node-js.png", name: "Node.js", width: 50, height: 50 },
  { image: "/react.png", name: "React", width: 60, height: 50 },
  { image: "/js.png", name: "JavaScript", width: 50, height: 50 },
  { image: "/laravel.png", name: "Laravel", width: 50, height: 50 },
  { image: "/mysql.png", name: "MySQL", width: 50, height: 50 },
  { image: "/Java.png", name: "Java", width: 50, height: 50 },
  { image: "/next.png", name: "Next.js", width: 50, height: 50 },
  // Add more skill objects as per your needs
];

const SkillSection = () => {
  return (
    <div
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-transparent text-white px-4 md:px-8"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-10">Skills</h1>

      {/* Skills Icons in rows with drop-in animation */}
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 mb-16 max-w-4xl overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delayChildren: 0.2, staggerChildren: 0.1, duration: 0.8 }}
        viewport={{ once: true }}
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center transition-transform duration-300 transform hover:scale-110"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Image
              src={skill.image}
              alt={skill.name}
              width={skill.width}
              height={skill.height}
            />
            <p className="text-xs sm:text-sm mt-2">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Description cards with enter-from-left/right animation */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 text-center"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          hidden: { opacity: 0 },
        }}
        viewport={{ once: true }}
      >
        <motion.div
          className="p-4 rounded-md bg-gray-800 hover:bg-gray-700 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zinc-50/50"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-semibold text-base sm:text-lg">Graphic Design</h3>
          <p className="text-xs sm:text-sm text-gray-400">
            Design logos, posters, and more.
          </p>
        </motion.div>

        <motion.div
          className="p-4 rounded-md bg-gray-800 hover:bg-gray-700 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zinc-50/50"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-semibold text-base sm:text-lg">
            Frontend Developer
          </h3>
          <p className="text-xs sm:text-sm text-gray-400">
            Build responsive websites.
          </p>
        </motion.div>

        {/* You can add more cards with similar effects here */}
      </motion.div>
    </div>
  );
};

export default SkillSection;
