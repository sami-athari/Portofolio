import React from "react";
import Image from "next/image";

const skillsData = [
    { image: "/css.png", name: "Skill 1", width: 50, height: 50 },
    { image: "/html.png", name: "Skill 2", width: 50, height: 50 },
    { image: "/tailwind.png", name: "Skill 1", width: 50, height: 50 },
    { image: "/node-js.png", name: "Skill 2", width: 50, height: 50 },
    { image: "/react.png", name: "Skill 1", width: 60, height: 50 },
    { image: "/js.png", name: "Skill 2", width: 50, height: 50 },
    { image: "/ts.png", name: "Skill 1", width: 50, height: 50 },
    { image: "/mysql.png", name: "Skill 2", width: 50, height: 50 },
    { image: "/framer.png", name: "Skill 1", width: 50, height: 50 },
    { image: "/next.png", name: "Skill 2", width: 50, height: 50 },
    
    // Add more skill objects as per your needs
];

const SkillSection = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-transparent text-white">
      <h1 className="text-4xl font-bold mb-10">
        Skills
      </h1>
      <div className="flex justify-center gap-6 mb-16">
        {skillsData.map((skill, index) => (
          <Image key={index} src={skill.image} alt={skill.name} width={skill.width} height={skill.height} />
        ))}
      </div>
      <div className="flex justify-center gap-10">
        {/* Graphic Design */}
        <div className="text-center p-4 rounded-md">
          <h3 className="font-semibold text-lg">Graphic Design</h3>
          <p className="text-sm text-gray-400">Design logos, posters, and more.</p>
        </div>
        {/* UI UX Design */}
        <div className="text-center p-4 rounded-md">
          <h3 className="font-semibold text-lg">UI/UX Design</h3>
          <p className="text-sm text-gray-100">Create user-friendly designs.</p>
        </div>
        {/* Frontend Development */}
        <div className="text-center p-4 rounded-md">
          <h3 className="font-semibold text-lg">Frontend Developer</h3>
          <p className="text-sm text-gray-400">Build responsive websites.</p>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
