"use client";

import { useState } from "react";

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend Arsenal",
      icon: "🎨",
      skills: [
        {
          name: "NextJS",
          level: 95,
          description: "React but with superpowers",
          color: "cyan",
        },
        {
          name: "React",
          level: 90,
          description: "Making UIs reactive since forever",
          color: "blue",
        },
        {
          name: "TypeScript",
          level: 85,
          description: "JavaScript with a PhD",
          color: "green",
        },
        {
          name: "Tailwind CSS",
          level: 88,
          description: "CSS that doesn't make you cry",
          color: "pink",
        },
      ],
    },
    backend: {
      title: "Backend Wizardry",
      icon: "⚙️",
      skills: [
        {
          name: "NodeJS",
          level: 92,
          description: "JavaScript everywhere!",
          color: "green",
        },
        {
          name: "Python",
          level: 87,
          description: "Snake charming for servers",
          color: "yellow",
        },
        {
          name: "Rust",
          level: 75,
          description: "Memory safety enthusiast",
          color: "orange",
        },
        {
          name: "APIs",
          level: 90,
          description: "Making systems talk nicely",
          color: "purple",
        },
      ],
    },
    tools: {
      title: "Digital Tools",
      icon: "🛠️",
      skills: [
        {
          name: "Git",
          level: 88,
          description: "Time travel for code",
          color: "red",
        },
        {
          name: "Docker",
          level: 82,
          description: "Containerizing chaos",
          color: "blue",
        },
        {
          name: "VS Code",
          level: 95,
          description: "My digital home",
          color: "cyan",
        },
        {
          name: "Terminal",
          level: 90,
          description: "Where the magic happens",
          color: "green",
        },
      ],
    },
    soft: {
      title: "Human Skills",
      icon: "🧠",
      skills: [
        {
          name: "Problem Solving",
          level: 95,
          description: "Sherlock Holmes of code",
          color: "purple",
        },
        {
          name: "Vibe Coding",
          level: 92,
          description: "Why work like a labour",
          color: "pink",
        },
        {
          name: "Coffee Brewing",
          level: 100,
          description: "Essential developer skill",
          color: "yellow",
        },
        {
          name: "Debugging",
          level: 88,
          description: "Bug whisperer extraordinaire",
          color: "red",
        },
      ],
    },
  };

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: "border-cyan-400 text-cyan-400",
      blue: "border-blue-400 text-blue-400",
      green: "border-green-400 text-green-400",
      pink: "border-pink-400 text-pink-400",
      yellow: "border-yellow-400 text-yellow-400",
      orange: "border-orange-400 text-orange-400",
      purple: "border-purple-400 text-purple-400",
      red: "border-red-400 text-red-400",
    };
    return (
      colors[color as keyof typeof colors] || "border-green-400 text-green-400"
    );
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="text-cyan-400 text-sm mb-4">{"// skills_matrix.tsx"}</div>

      <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
        Skill Tree Unlocked
      </h2>

      {/* Category Selector */}
      <div className="flex flex-wrap gap-4 mb-8">
        {Object.entries(skillCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`px-6 py-3 rounded-lg border-2 transition-all duration-300 ${
              selectedCategory === key
                ? "border-cyan-400 bg-cyan-400/20 text-cyan-400"
                : "border-green-400/30 text-green-400 hover:border-green-400 hover:bg-green-400/10"
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.title}
          </button>
        ))}
      </div>

      {/* Skills Display */}
      <div className="border border-cyan-400/30 bg-black/20 p-8 rounded-lg backdrop-blur-sm">
        <h3 className="text-2xl font-bold mb-6 text-green-400">
          {
            skillCategories[selectedCategory as keyof typeof skillCategories]
              .title
          }
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories[
            selectedCategory as keyof typeof skillCategories
          ].skills.map((skill, index) => (
            <div key={index} className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-green-300">
                  {skill.name}
                </span>
                <span
                  className={`text-sm font-mono ${getColorClasses(
                    skill.color
                  )}`}
                >
                  [{skill.level}%]
                </span>
              </div>

              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${
                    skill.color === "cyan"
                      ? "bg-gradient-to-r from-cyan-500 to-cyan-300"
                      : skill.color === "green"
                      ? "bg-gradient-to-r from-green-500 to-green-300"
                      : skill.color === "pink"
                      ? "bg-gradient-to-r from-pink-500 to-pink-300"
                      : skill.color === "yellow"
                      ? "bg-gradient-to-r from-yellow-500 to-yellow-300"
                      : skill.color === "blue"
                      ? "bg-gradient-to-r from-blue-500 to-blue-300"
                      : skill.color === "purple"
                      ? "bg-gradient-to-r from-purple-500 to-purple-300"
                      : skill.color === "red"
                      ? "bg-gradient-to-r from-red-500 to-red-300"
                      : "bg-gradient-to-r from-orange-500 to-orange-300"
                  }`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <p className="text-sm text-gray-400 italic">
                {"// "}
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Fun Skill Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-4 rounded-lg border border-pink-400/30">
            <div className="text-pink-400 font-bold">
              Lines of Code Written:
            </div>
            <div className="text-2xl font-mono text-green-400">1,337,420</div>
            <div className="text-xs text-gray-400">{"// And counting..."}</div>
          </div>
          <div className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 p-4 rounded-lg border border-cyan-400/30">
            <div className="text-cyan-400 font-bold">Bugs Squashed:</div>
            <div className="text-2xl font-mono text-green-400">9,001</div>
            <div className="text-xs text-gray-400">{"// It's over 9000!"}</div>
          </div>
          <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-4 rounded-lg border border-yellow-400/30">
            <div className="text-yellow-400 font-bold">Coffee Consumed:</div>
            <div className="text-2xl font-mono text-green-400">∞ Cups</div>
            <div className="text-xs text-gray-400">
              {"// Fuel for the machine"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
