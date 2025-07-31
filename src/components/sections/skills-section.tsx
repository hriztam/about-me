"use client";

import { useState, useEffect } from "react";
import {
  Zap,
  Code,
  Database,
  Wrench,
  Brain,
  Star,
  TrendingUp,
} from "lucide-react";

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("frontend");
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);

  const skillCategories = {
    frontend: {
      title: "Frontend Arsenal",
      icon: "🎨",
      iconComponent: Code,
      skills: [
        {
          name: "NextJS",
          level: 95,
          description: "React but with superpowers",
          color: "cyan",
          experience: "2+ years",
        },
        {
          name: "React",
          level: 90,
          description: "Making UIs reactive since forever",
          color: "blue",
          experience: "3+ years",
        },
        {
          name: "TypeScript",
          level: 85,
          description: "JavaScript with a PhD",
          color: "green",
          experience: "2+ years",
        },
        {
          name: "Tailwind CSS",
          level: 88,
          description: "CSS that doesn't make you cry",
          color: "pink",
          experience: "2+ years",
        },
      ],
    },
    backend: {
      title: "Backend Wizardry",
      icon: "⚙️",
      iconComponent: Database,
      skills: [
        {
          name: "NodeJS",
          level: 92,
          description: "JavaScript everywhere!",
          color: "green",
          experience: "2+ years",
        },
        {
          name: "Python",
          level: 87,
          description: "Snake charming for servers",
          color: "yellow",
          experience: "2+ years",
        },
        {
          name: "Rust",
          level: 80,
          description: "Memory safety enthusiast",
          color: "orange",
          experience: "1+ year",
        },
        {
          name: "APIs",
          level: 90,
          description: "Making systems talk nicely",
          color: "purple",
          experience: "2+ years",
        },
      ],
    },
    tools: {
      title: "Digital Tools",
      icon: "🛠️",
      iconComponent: Wrench,
      skills: [
        {
          name: "Git",
          level: 88,
          description: "Time travel for code",
          color: "red",
          experience: "5+ years",
        },
        {
          name: "Docker",
          level: 82,
          description: "Containerizing chaos",
          color: "blue",
          experience: "2+ years",
        },
        {
          name: "VS Code",
          level: 95,
          description: "My digital home",
          color: "cyan",
          experience: "5+ years",
        },
        {
          name: "Terminal",
          level: 90,
          description: "Where the magic happens",
          color: "green",
          experience: "5+ years",
        },
      ],
    },
    soft: {
      title: "Human Skills",
      icon: "🧠",
      iconComponent: Brain,
      skills: [
        {
          name: "Problem Solving",
          level: 95,
          description: "Sherlock Holmes of code",
          color: "purple",
          experience: "Always",
        },
        {
          name: "Team Vibes",
          level: 92,
          description: "Making work fun",
          color: "pink",
          experience: "Always",
        },
        {
          name: "Coffee Brewing",
          level: 100,
          description: "Essential developer skill",
          color: "yellow",
          experience: "∞ years",
        },
        {
          name: "Debugging",
          level: 88,
          description: "Bug whisperer extraordinaire",
          color: "red",
          experience: "Daily",
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

  const getGradientClasses = (color: string) => {
    const gradients = {
      cyan: "from-cyan-500 to-cyan-300",
      blue: "from-blue-500 to-blue-300",
      green: "from-green-500 to-green-300",
      pink: "from-pink-500 to-pink-300",
      yellow: "from-yellow-500 to-yellow-300",
      orange: "from-orange-500 to-orange-300",
      purple: "from-purple-500 to-purple-300",
      red: "from-red-500 to-red-300",
    };
    return (
      gradients[color as keyof typeof gradients] ||
      "from-green-500 to-green-300"
    );
  };

  // Animate skills when category changes
  useEffect(() => {
    setAnimatedSkills([]);
    const timer = setTimeout(() => {
      const skills = skillCategories[
        selectedCategory as keyof typeof skillCategories
      ].skills.map((skill) => skill.name);
      setAnimatedSkills(skills);
    }, 100);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
      <div className="text-cyan-400 text-xs sm:text-sm mb-4">
        // skills_matrix.tsx
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
        Skill Tree Unlocked
      </h2>

      {/* Category Selector - Enhanced with animations */}
      <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8">
        {Object.entries(skillCategories).map(([key, category]) => {
          const IconComponent = category.iconComponent;
          return (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`group px-3 sm:px-6 py-2 sm:py-3 rounded-lg border-2 transition-all duration-500 text-xs sm:text-sm transform hover:scale-105 ${
                selectedCategory === key
                  ? "border-cyan-400 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 text-cyan-400 shadow-lg shadow-cyan-400/25"
                  : "border-green-400/30 text-green-400 hover:border-green-400 hover:bg-green-400/10 hover:shadow-md"
              }`}
            >
              <div className="flex items-center justify-center">
                <IconComponent
                  className={`w-4 h-4 mr-2 transition-all duration-500 ${
                    selectedCategory === key
                      ? "animate-spin"
                      : "group-hover:rotate-12"
                  }`}
                />
                <span className="mr-1 sm:mr-2 text-lg">{category.icon}</span>
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden">
                  {category.title.split(" ")[0]}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Skills Display - Enhanced with animations */}
      <div className="border border-cyan-400/30 bg-black/20 p-4 sm:p-6 lg:p-8 rounded-lg backdrop-blur-sm relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0 animate-pulse"
            style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 25%, rgba(0,255,255,0.1) 25%, rgba(0,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(0,255,255,0.1) 75%),
                linear-gradient(-45deg, transparent 25%, rgba(255,0,255,0.1) 25%, rgba(255,0,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,0,255,0.1) 75%)
              `,
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="relative z-10">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="text-3xl mr-3 animate-bounce">
              {
                skillCategories[
                  selectedCategory as keyof typeof skillCategories
                ].icon
              }
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-green-400 animate-slide-in">
              {
                skillCategories[
                  selectedCategory as keyof typeof skillCategories
                ].title
              }
            </h3>
            <TrendingUp className="w-6 h-6 ml-3 text-cyan-400 animate-pulse" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {skillCategories[
              selectedCategory as keyof typeof skillCategories
            ].skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`space-y-3 p-4 rounded-lg border border-gray-600/30 bg-black/10 hover:bg-gray-800/20 transition-all duration-500 transform hover:scale-105 ${
                  animatedSkills.includes(skill.name)
                    ? "animate-slide-in-up"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Star
                      className={`w-4 h-4 mr-2 ${getColorClasses(
                        skill.color
                      )} animate-pulse`}
                    />
                    <span className="text-base sm:text-lg font-bold text-green-300">
                      {skill.name}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`text-xs sm:text-sm font-mono ${getColorClasses(
                        skill.color
                      )}`}
                    >
                      [{skill.level}%]
                    </span>
                    <Zap
                      className={`w-3 h-3 ${getColorClasses(
                        skill.color
                      )} animate-pulse`}
                    />
                  </div>
                </div>

                <div className="w-full bg-gray-800 rounded-full h-2 sm:h-3 overflow-hidden relative">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${getGradientClasses(
                      skill.color
                    )} relative`}
                    style={{
                      width: animatedSkills.includes(skill.name)
                        ? `${skill.level}%`
                        : "0%",
                      boxShadow: `0 0 10px rgba(${
                        skill.color === "cyan"
                          ? "0,255,255"
                          : skill.color === "green"
                          ? "0,255,0"
                          : skill.color === "pink"
                          ? "255,0,255"
                          : skill.color === "yellow"
                          ? "255,255,0"
                          : skill.color === "blue"
                          ? "0,0,255"
                          : skill.color === "purple"
                          ? "128,0,128"
                          : skill.color === "red"
                          ? "255,0,0"
                          : "255,165,0"
                      },0.5)`,
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-xs sm:text-sm text-gray-400 italic">
                    // {skill.description}
                  </p>
                  <span className="text-xs text-gray-500 font-mono">
                    {skill.experience}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Skill Category Stats */}
          <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-3 sm:p-4 rounded-lg border border-pink-400/30 hover:scale-105 transition-transform duration-300">
              <div className="text-pink-400 font-bold text-xs sm:text-sm">
                Total Skills:
              </div>
              <div className="text-lg sm:text-2xl font-mono text-green-400 animate-pulse">
                {
                  skillCategories[
                    selectedCategory as keyof typeof skillCategories
                  ].skills.length
                }
              </div>
              <div className="text-xs text-gray-400">In this category</div>
            </div>
            <div className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 p-3 sm:p-4 rounded-lg border border-cyan-400/30 hover:scale-105 transition-transform duration-300">
              <div className="text-cyan-400 font-bold text-xs sm:text-sm">
                Avg Level:
              </div>
              <div className="text-lg sm:text-2xl font-mono text-green-400 animate-pulse">
                {Math.round(
                  skillCategories[
                    selectedCategory as keyof typeof skillCategories
                  ].skills.reduce((acc, skill) => acc + skill.level, 0) /
                    skillCategories[
                      selectedCategory as keyof typeof skillCategories
                    ].skills.length
                )}
                %
              </div>
              <div className="text-xs text-gray-400">Proficiency</div>
            </div>
            <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-3 sm:p-4 rounded-lg border border-yellow-400/30 hover:scale-105 transition-transform duration-300">
              <div className="text-yellow-400 font-bold text-xs sm:text-sm">
                Max Level:
              </div>
              <div className="text-lg sm:text-2xl font-mono text-green-400 animate-pulse">
                {Math.max(
                  ...skillCategories[
                    selectedCategory as keyof typeof skillCategories
                  ].skills.map((skill) => skill.level)
                )}
                %
              </div>
              <div className="text-xs text-gray-400">Peak skill</div>
            </div>
            <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 p-3 sm:p-4 rounded-lg border border-blue-400/30 hover:scale-105 transition-transform duration-300">
              <div className="text-blue-400 font-bold text-xs sm:text-sm">
                Experience:
              </div>
              <div className="text-lg sm:text-2xl font-mono text-green-400 animate-pulse">
                3+
              </div>
              <div className="text-xs text-gray-400">Years coding</div>
            </div>
          </div>
        </div>
      </div>

      {/* Overall Skills Summary */}
      <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-3 sm:p-4 rounded-lg border border-pink-400/30">
          <div className="text-pink-400 font-bold text-xs sm:text-sm">
            Lines of Code Written:
          </div>
          <div className="text-lg sm:text-2xl font-mono text-green-400 animate-pulse">
            1,337,420
          </div>
          <div className="text-xs text-gray-400">// And counting...</div>
        </div>
        <div className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 p-3 sm:p-4 rounded-lg border border-cyan-400/30">
          <div className="text-cyan-400 font-bold text-xs sm:text-sm">
            Bugs Squashed:
          </div>
          <div className="text-lg sm:text-2xl font-mono text-green-400 animate-pulse">
            9,001
          </div>
          <div className="text-xs text-gray-400">// It's over 9000!</div>
        </div>
        <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-3 sm:p-4 rounded-lg border border-yellow-400/30">
          <div className="text-yellow-400 font-bold text-xs sm:text-sm">
            Coffee Consumed:
          </div>
          <div className="text-lg sm:text-2xl font-mono text-green-400 animate-pulse">
            ∞ Cups
          </div>
          <div className="text-xs text-gray-400">// Fuel for the machine</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out forwards;
        }

        .animate-slide-in {
          animation: slide-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
