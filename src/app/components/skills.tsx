import React from "react";
import Image from "next/image";

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
    <div id="skills" className="min-h-screen flex flex-col items-center justify-center bg-transparent text-white px-4 md:px-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-10">Skills</h1>
      
      {/* Skills Icons in rows */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 mb-16 max-w-4xl">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform duration-300 transform hover:scale-110"
          >
            <Image src={skill.image} alt={skill.name} width={skill.width} height={skill.height} />
            <p className="text-xs sm:text-sm mt-2">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Skills Description */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        {/* Graphic Design */}
        <div className="p-4 rounded-md bg-gray-800 hover:bg-gray-700 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zinc-50/50">
          <h3 className="font-semibold text-base sm:text-lg">Graphic Design</h3>
          <p className="text-xs sm:text-sm text-gray-400">Design logos, posters, and more.</p>
        </div>
        
        {/* Frontend Development */}
        <div className="p-4 rounded-md bg-gray-800 hover:bg-gray-700 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zinc-50/50">
          <h3 className="font-semibold text-base sm:text-lg">Frontend Developer</h3>
          <p className="text-xs sm:text-sm text-gray-400">Build responsive websites.</p>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
