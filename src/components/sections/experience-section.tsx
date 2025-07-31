"use client";

import { useState } from "react";
import { Calendar, MapPin, Users, Trophy, ChevronRight } from "lucide-react";

export function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState(0);
  const [hoveredExperience, setHoveredExperience] = useState<number | null>(
    null
  );

  const experiences = [
    {
      title: "AI Developer",
      company: "mirrAR",
      location: "On-site • Bengaluru, India",
      period: "June 2025 - Present",
      duration: "2+ months",
      type: "Internship",
      description:
        "As a AI Intern at mirrAR, I fine-tuned machine learning models and optimized data pipelines. Worked on creating AI Agents for real-time data processing and analysis.",
      achievements: [
        "Integrated AI models into the existing architecture, improving system performance by 30%",
        "Developed custom data processing pipelines, reducing data latency by 20%",
        "Implemented real-time data analysis features, enhancing user experience and engagement.",
        "Built a Multi-Agent System for real-time data processing, improving system efficiency by 25%",
      ],
      tech: ["Python", "Pytorch", "Pandas", "Transformers", "N8N Workflows"],
      color: "cyan",
      icon: "🚀",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      title: "Frontend Developer",
      company: "Grey Scientific Labs",
      period: "October 2024 - April 2025",
      location: "Remote • Bengaluru, India",
      duration: "6 months",
      type: "Internship",
      description:
        "As a Front-end Developer Intern at Grey Scientific Labs, I enhanced app performance, implemented real-time features, and contributed to key system functionalities including admin controls and API integrations.",
      achievements: [
        "Refactored components and routing logic, resulting in a 25% faster app load and navigation.",
        "Developed custom axios-based API handlers, improving code readability and maintainability by 40%",
        "Implemented a multi-role group chat feature using WebSockets for real-time communication",
        "Built permissions and control panels, enabling user role management and system-level access control.",
      ],
      tech: ["NextJS", "ReactJS", "TypeScript", "Redux", "TailwindCSS"],
      color: "green",
      icon: "⚡",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      title: "Frontend Developer",
      company: "Bitfumes Webnologies",
      period: "March 2024 - August 2024",
      location: "Remote • Indore, India",
      duration: "6 months",
      type: "Internship",
      description:
        "As a Front-end Developer Intern at Bitfumes, I played a key role in building and refining interactive web interfaces, focusing on scheduling tools and seamless data integration using React and TypeScript.",
      achievements: [
        "Collaborated with design and backend teams for smooth UI/UX implementation",
        "Integrated APIs to fetch and display real-time data",
        "Participated in code reviews to ensure high-quality, maintainable code",
        "Contributed to scalable component development in a fast-paced team.",
      ],
      tech: ["React", "TypeScript", "Shadcn", "TailwindCSS", "Axios"],
      color: "pink",
      icon: "🌱",
      gradient: "from-pink-400 to-rose-500",
    },
    // {
    //   title: "Senior Full Stack Architect",
    //   company: "TechCorp Industries",
    //   location: "Remote • San Francisco, CA",
    //   period: "2022 - Present",
    //   duration: "2+ years",
    //   type: "Full-time",
    //   description:
    //     "Leading a team of innovative developers, architecting scalable solutions, and building the future one line of code at a time. Transformed legacy systems into modern masterpieces while mentoring the next generation of builders.",
    //   achievements: [
    //     "Reduced application loading times by 300% through advanced optimization techniques",
    //     "Mentored 5 junior developers who can now center a div without crying",
    //     "Implemented CI/CD pipeline that deploys faster than you can say 'production'",
    //     "Survived 47 production deployments on Fridays (and lived to tell the tale)",
    //     "Led migration of monolithic architecture to microservices",
    //     "Increased team productivity by 150% through process improvements",
    //   ],
    //   tech: ["NextJS", "NodeJS", "Python", "AWS", "Docker", "Kubernetes"],
    //   color: "cyan",
    //   icon: "🚀",
    //   gradient: "from-cyan-400 to-blue-500",
    // },
    // {
    //   title: "Full Stack Developer",
    //   company: "StartupLife Inc.",
    //   location: "Hybrid • Austin, TX",
    //   period: "2020 - 2022",
    //   duration: "2 years",
    //   type: "Full-time",
    //   description:
    //     "Wore multiple hats (literally and figuratively), built MVPs faster than you can say 'pivot', and learned that 'it works on my machine' isn't a valid deployment strategy. Thrived in the chaotic beauty of startup life.",
    //   achievements: [
    //     "Built 3 MVPs from scratch (2 are still alive and thriving)",
    //     "Mastered the art of feature flags - toggle all the things!",
    //     "Optimized database queries and said goodbye to N+1 problems forever",
    //     "Became fluent in startup buzzword bingo (synergy, disrupt, pivot)",
    //     "Reduced server costs by 60% through smart architecture decisions",
    //     "Implemented real-time features that users actually wanted",
    //   ],
    //   tech: ["React", "NodeJS", "MongoDB", "Docker", "Redis", "GraphQL"],
    //   color: "green",
    //   icon: "⚡",
    //   gradient: "from-green-400 to-emerald-500",
    // },
    // {
    //   title: "Junior Developer",
    //   company: "CodeAcademy Corp",
    //   location: "On-site • Boston, MA",
    //   period: "2018 - 2020",
    //   duration: "2 years",
    //   type: "Full-time",
    //   description:
    //     "Started my journey as a code padawan, learned that Stack Overflow is a developer's best friend, and discovered that naming variables is the hardest part of programming. Every bug was a learning opportunity!",
    //   achievements: [
    //     "Fixed my first production bug (and caused my second - learning experience!)",
    //     "Learned Git and why we don't commit directly to main branch",
    //     "Mastered the ancient art of console.log debugging",
    //     "Survived code reviews without crying (mostly)",
    //     "Built responsive UIs that actually worked on Internet Explorer",
    //     "Contributed to open-source projects and felt like a real developer",
    //   ],
    //   tech: ["JavaScript", "HTML", "CSS", "jQuery", "PHP", "MySQL"],
    //   color: "pink",
    //   icon: "🌱",
    //   gradient: "from-pink-400 to-rose-500",
    // },
    {
      title: "Computer Science Student",
      company: "Madhav Institute of Technology & Science",
      location: "Campus • Gwalior, India",
      period: "2024 - 2028",
      duration: "4 years",
      type: "Education",
      description:
        "Where it all began! Learned the fundamentals of computer science, discovered my passion for coding, and realized that theoretical knowledge + practical application = magic. Built my first 'Hello World' and never looked back.",
      achievements: [
        "Graduated with honors and a passion for building things",
        "Led the university's coding club to victory in 3 hackathons",
        "Built a campus food delivery app that actually got used",
        "Learned that algorithms are just recipes for computers",
        "Discovered that debugging is like being a detective in a crime movie",
        "Made lifelong friends who still help debug my code today",
      ],
      tech: ["Java", "C++", "Python", "Data Structures", "Algorithms"],
      color: "yellow",
      icon: "🎓",
      gradient: "from-yellow-400 to-orange-500",
    },
  ];

  const getTimelineColor = (color: string, isSelected: boolean) => {
    const colors = {
      cyan: isSelected
        ? "bg-cyan-400/60 shadow-cyan-400/30"
        : "bg-cyan-400 shadow-cyan-400/50",
      green: isSelected
        ? "bg-green-400/60 shadow-green-400/30"
        : "bg-green-400 shadow-green-400/50",
      pink: isSelected
        ? "bg-pink-400/60 shadow-pink-400/30"
        : "bg-pink-400 shadow-pink-400/50",
      yellow: isSelected
        ? "bg-yellow-400/60 shadow-yellow-400/30"
        : "bg-yellow-400 shadow-yellow-400/50",
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-cyan-400 text-xs sm:text-sm mb-4">
          // experience_timeline.tsx
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
          Career Journey
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Timeline - Left Side */}
          <div className="lg:col-span-1">
            <div className="relative">
              {/* Animated Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400/30 via-green-400/30 via-pink-400/30 to-yellow-400/30 opacity-50 rounded-full">
                <div
                  className="w-full bg-gradient-to-b from-cyan-400/60 to-green-400/60 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    height: `${
                      ((selectedExperience + 1) / experiences.length) * 100
                    }%`,
                    boxShadow: "0 0 10px rgba(0,255,255,0.3)",
                  }}
                />
              </div>

              {/* Timeline Items */}
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedExperience(index)}
                    onMouseEnter={() => setHoveredExperience(index)}
                    onMouseLeave={() => setHoveredExperience(null)}
                    className={`relative cursor-pointer transition-all duration-800 transform ${
                      selectedExperience === index
                        ? "scale-105"
                        : hoveredExperience === index
                        ? "scale-102"
                        : ""
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`absolute left-4 w-4 h-4 rounded-full border-2 transition-all duration-800 ${
                        selectedExperience === index
                          ? `${getTimelineColor(
                              exp.color,
                              true
                            )} border-white/60 shadow-lg animate-pulse`
                          : hoveredExperience === index
                          ? `${getTimelineColor(
                              exp.color,
                              false
                            )} border-gray-300 shadow-md`
                          : "bg-gray-600 border-gray-500"
                      }`}
                    >
                      {selectedExperience === index && (
                        <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
                      )}
                    </div>

                    {/* Timeline Card */}
                    <div
                      className={`ml-12 p-4 rounded-lg transition-all duration-800 ${
                        selectedExperience === index
                          ? `border-2 border-opacity-60 shadow-xl`
                          : hoveredExperience === index
                          ? "border-2 border-gray-400/30 bg-black/20 shadow-lg"
                          : "border border-gray-600/20 bg-black/10 hover:border-gray-500/30"
                      }`}
                      style={{
                        borderColor:
                          selectedExperience === index
                            ? `rgba(${
                                exp.color === "cyan"
                                  ? "0,255,255"
                                  : exp.color === "green"
                                  ? "0,255,0"
                                  : exp.color === "pink"
                                  ? "255,0,255"
                                  : "255,255,0"
                              },0.6)`
                            : undefined,
                        background:
                          selectedExperience === index
                            ? `linear-gradient(135deg, rgba(${
                                exp.color === "cyan"
                                  ? "0,255,255"
                                  : exp.color === "green"
                                  ? "0,255,0"
                                  : exp.color === "pink"
                                  ? "255,0,255"
                                  : "255,255,0"
                              },0.05) 0%, rgba(0,0,0,0.3) 100%)`
                            : undefined,
                        boxShadow:
                          selectedExperience === index
                            ? `0 8px 25px -5px rgba(${
                                exp.color === "cyan"
                                  ? "0,255,255"
                                  : exp.color === "green"
                                  ? "0,255,0"
                                  : exp.color === "pink"
                                  ? "255,0,255"
                                  : "255,255,0"
                              },0.15)`
                            : undefined,
                      }}
                    >
                      <div className="flex items-center mb-2">
                        <span
                          className={`text-2xl mr-2 transition-all duration-600 ${
                            selectedExperience === index ? "animate-bounce" : ""
                          }`}
                        >
                          {exp.icon}
                        </span>
                        <div className="flex-1">
                          <h3
                            className={`font-bold text-sm sm:text-base transition-colors duration-300 ${
                              selectedExperience === index
                                ? "text-white"
                                : "text-green-400"
                            }`}
                          >
                            {exp.title}
                          </h3>
                          <p
                            className={`text-xs sm:text-sm transition-colors duration-300 ${
                              selectedExperience === index
                                ? "text-cyan-200"
                                : "text-cyan-400"
                            }`}
                          >
                            {exp.company}
                          </p>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 transition-all duration-500 ${
                            selectedExperience === index
                              ? "rotate-90 text-white"
                              : hoveredExperience === index
                              ? "text-cyan-400"
                              : "text-gray-500"
                          }`}
                        />
                      </div>

                      <div className="flex items-center text-xs text-gray-400 mb-2">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{exp.period}</span>
                        <span className="mx-2">•</span>
                        <span>{exp.duration}</span>
                      </div>

                      <div className="flex items-center text-xs text-gray-400">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Details - Right Side - Subtle animation only when focused */}
          <div className="lg:col-span-2">
            <div
              className={`border-2 p-6 sm:p-8 rounded-lg backdrop-blur-sm h-full transition-all duration-500 ease-in-out`}
              style={{
                background: `linear-gradient(135deg, 
                  rgba(0,0,0,0.8) 0%, 
                  rgba(${
                    experiences[selectedExperience].color === "cyan"
                      ? "0,50,50"
                      : experiences[selectedExperience].color === "green"
                      ? "0,50,0"
                      : experiences[selectedExperience].color === "pink"
                      ? "50,0,50"
                      : "50,50,0"
                  },0.1) 50%, 
                  rgba(0,0,0,0.8) 100%)`,
                borderColor: `rgba(${
                  experiences[selectedExperience].color === "cyan"
                    ? "0,255,255"
                    : experiences[selectedExperience].color === "green"
                    ? "0,255,0"
                    : experiences[selectedExperience].color === "pink"
                    ? "255,0,255"
                    : "255,255,0"
                },0.4)`,
                boxShadow: `0 10px 30px -10px rgba(0,0,0,0.3), 
                           0 0 0 1px rgba(${
                             experiences[selectedExperience].color === "cyan"
                               ? "0,255,255"
                               : experiences[selectedExperience].color ===
                                 "green"
                               ? "0,255,0"
                               : experiences[selectedExperience].color ===
                                 "pink"
                               ? "255,0,255"
                               : "255,255,0"
                           },0.1)`,
              }}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                <div className="mb-4 sm:mb-0">
                  <div className="flex items-center mb-2">
                    <span className="text-3xl mr-3">
                      {experiences[selectedExperience].icon}
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-green-400">
                        {experiences[selectedExperience].title}
                      </h3>
                      <p className="text-lg text-cyan-400">
                        {experiences[selectedExperience].company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-pink-400" />
                      <span>{experiences[selectedExperience].period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-pink-400" />
                      <span>{experiences[selectedExperience].location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-pink-400" />
                      <span>{experiences[selectedExperience].type}</span>
                    </div>
                  </div>
                </div>

                <div
                  className={`px-4 py-2 rounded-full border-2 text-sm font-mono`}
                  style={{
                    borderColor: `rgba(${
                      experiences[selectedExperience].color === "cyan"
                        ? "0,255,255"
                        : experiences[selectedExperience].color === "green"
                        ? "0,255,0"
                        : experiences[selectedExperience].color === "pink"
                        ? "255,0,255"
                        : "255,255,0"
                    },0.6)`,
                    background: `rgba(${
                      experiences[selectedExperience].color === "cyan"
                        ? "0,255,255"
                        : experiences[selectedExperience].color === "green"
                        ? "0,255,0"
                        : experiences[selectedExperience].color === "pink"
                        ? "255,0,255"
                        : "255,255,0"
                    },0.1)`,
                    color: `rgba(${
                      experiences[selectedExperience].color === "cyan"
                        ? "0,255,255"
                        : experiences[selectedExperience].color === "green"
                        ? "0,255,0"
                        : experiences[selectedExperience].color === "pink"
                        ? "255,0,255"
                        : "255,255,0"
                    },1)`,
                  }}
                >
                  {experiences[selectedExperience].duration}
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-green-300 italic text-sm sm:text-base leading-relaxed">
                  // {experiences[selectedExperience].description}
                </p>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-lg sm:text-xl font-bold text-pink-400 mb-4 flex items-center">
                  <Trophy className="w-5 h-5 mr-2" />
                  Key Achievements
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {experiences[selectedExperience].achievements.map(
                    (achievement, i) => (
                      <div
                        key={i}
                        className="flex items-start hover:bg-green-400/5 p-2 rounded transition-all duration-300"
                      >
                        <span className="text-green-400 mr-2 mt-1 flex-shrink-0">
                          ▶
                        </span>
                        <span className="text-green-300 text-sm leading-relaxed">
                          {achievement}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-yellow-400 mb-4">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experiences[selectedExperience].tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm border border-cyan-400/30 hover:bg-cyan-400/10 hover:scale-110 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Stats */}
        <div className="mt-12 sm:mt-16">
          <div className="border border-purple-400/30 bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-6 sm:p-8 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-purple-400 mb-6 text-center">
              Career Highlights
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div className="group hover:scale-110 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2 animate-pulse">
                  1+
                </div>
                <div className="text-sm text-green-400">Years Experience</div>
                <div className="text-xs text-gray-400">And counting...</div>
              </div>
              <div className="group hover:scale-110 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2 animate-pulse">
                  5+
                </div>
                <div className="text-sm text-cyan-400">Projects Delivered</div>
                <div className="text-xs text-gray-400">All successful!</div>
              </div>
              <div className="group hover:scale-110 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-pink-400 mb-2 animate-pulse">
                  15+
                </div>
                <div className="text-sm text-yellow-400">
                  Technologies Mastered
                </div>
                <div className="text-xs text-gray-400">
                  Always learning more
                </div>
              </div>
              <div className="group hover:scale-110 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2 animate-pulse">
                  100%
                </div>
                <div className="text-sm text-pink-400">Passion Level</div>
                <div className="text-xs text-gray-400">Maximum always</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
