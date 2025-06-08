"use client";

import { useState } from "react";
import { ExternalLink, Github, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: "Pixel Penguin",
      description:
        "An e-commerce platform so advanced, it predicts what you want to buy before you know it. Features AI-powered recommendations and a checkout process smoother than butter.",
      longDescription:
        "Built with NextJS and the tears of my enemies (just kidding, mostly coffee). This platform handles everything from inventory management to payment processing, with a sprinkle of machine learning magic.",
      tech: ["NextJS", "NodeJS", "MongoDB", "Stripe", "TypeScript"],
      features: [
        "🤖 AI-powered product recommendations",
        "⚡ Lightning-fast checkout process",
        "📱 Responsive design that works on a potato",
        "🔒 Fort Knox level security",
        "📊 Real-time analytics dashboard",
      ],
      status: "COMPLETED",
      github: "https://github.com/hriztam/Digital-MarketPlace",
      live: "#",
      color: "cyan",
    },
    {
      title: "Packet Peeper",
      description:
        "A network analyzer which will keep your packets safe and protected.",
      longDescription:
        "PacketPeeper is a real-time network analyzer and monitoring tool designed to capture, inspect, and analyze network traffic. Built for developers, network admins, and cybersecurity enthusiasts, it provides deep insights into incoming and outgoing packets, protocols, and network health.",
      tech: ["React", "JavaScript", "Python", "Scapy", "Flask"],
      features: [
        "Live Packet Capture",
        "Protocol Filtering",
        "IPacket Details View",
        "Connection Tracker",
        "Traffic Statistics Dashboard",
      ],
      status: "IN_DEVELOPMENT",
      github: "https://github.com/Harshit7623/Packet_Peeper.git",
      live: "#",
      color: "green",
    },
    {
      title: "Gitbuddy",
      description:
        "GitBuddy is a sleek and interactive web application that fetches and visualizes a user’s GitHub profile using the GitHub API",
      longDescription:
        "GitBuddy is a sleek and interactive web application that fetches and visualizes a user’s GitHub profile using the GitHub API.Whether you're showcasing your contributions or exploring another developer’s profile, GitBuddy provides a cleaner, more engaging experience.",
      tech: ["HTML", "CSS", "JavaScript", "REST API"],
      features: [
        "GitHub OAuth/Username Search",
        "Profile Overview",
        "Top Repositories Highlight",
        "Responsive UI",
        "🌙 Dark mode (obviously)",
      ],
      status: "DEPLOYED",
      github: "https://github.com/hriztam/GitBuddy",
      live: "https://gitbuddy.netlify.app/",
      color: "pink",
    },
    // {
    //   title: "WeatherBot 9000",
    //   description:
    //     "A weather app that doesn't just tell you it's raining when you're already soaked. Features hyperlocal forecasts and sarcastic commentary.",
    //   longDescription:
    //     "Weather apps are boring. This one has personality! Get weather updates with a side of humor and accuracy that puts meteorologists to shame.",
    //   tech: ["Python", "FastAPI", "React", "Weather APIs"],
    //   features: [
    //     "🌦️ Hyperlocal weather predictions",
    //     "😄 Sarcastic weather commentary",
    //     "📱 Push notifications that matter",
    //     "🎯 Accuracy that's actually accurate",
    //     "🌈 Beautiful weather visualizations",
    //   ],
    //   status: "DEPLOYED",
    //   github: "#",
    //   live: "#",
    //   color: "yellow",
    // },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "DEPLOYED":
        return "text-green-400 border-green-400";
      case "BETA":
        return "text-yellow-400 border-yellow-400";
      case "IN_DEVELOPMENT":
        return "text-pink-400 border-pink-400";
      default:
        return "text-cyan-400 border-cyan-400";
    }
  };

  const getProjectColor = (color: string) => {
    const colors = {
      cyan: "border-cyan-400/30 hover:border-cyan-400/50",
      green: "border-green-400/30 hover:border-green-400/50",
      pink: "border-pink-400/30 hover:border-pink-400/50",
      yellow: "border-yellow-400/30 hover:border-yellow-400/50",
    };
    return colors[color as keyof typeof colors];
  };

  const handleGithub = (link: string) => {
    window.open(link, "_blank");
  };
  const handleLive = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="text-cyan-400 text-sm mb-4">
        {"// project_showcase.tsx"}
      </div>

      <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
        Digital Creations
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Project List */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(index)}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                selectedProject === index
                  ? `${getProjectColor(project.color)} bg-black/30`
                  : "border-gray-600/30 hover:border-gray-500/50 bg-black/10"
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-green-400">{project.title}</h3>
                <span
                  className={`text-xs px-2 py-1 rounded border ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-gray-300 line-clamp-2">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* Project Details */}
        <div className="lg:col-span-2">
          <div
            className={`border-2 ${getProjectColor(
              projects[selectedProject].color
            )} bg-black/20 p-8 rounded-lg backdrop-blur-sm`}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl font-bold text-green-400 mb-2">
                  {projects[selectedProject].title}
                </h3>
                <span
                  className={`text-sm px-3 py-1 rounded border ${getStatusColor(
                    projects[selectedProject].status
                  )}`}
                >
                  {projects[selectedProject].status}
                </span>
              </div>
              <div className="flex space-x-3">
                <Button
                  onClick={() => handleGithub(projects[selectedProject].github)}
                  size="sm"
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button
                  onClick={() => handleLive(projects[selectedProject].live)}
                  size="sm"
                  className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live
                </Button>
              </div>
            </div>

            <p className="text-green-300 mb-6 italic">
              {"// "}
              {projects[selectedProject].longDescription}
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-pink-400 mb-3">
                Features:
              </h4>
              <ul className="space-y-2">
                {projects[selectedProject].features.map((feature, i) => (
                  <li key={i} className="text-green-300">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-yellow-400 mb-3">
                Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-2">
                {projects[selectedProject].tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm border border-cyan-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* <div className="border-t border-gray-600/30 pt-6">
              <div className="text-cyan-400 text-sm mb-2">
                {"// Project Stats"}
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold text-green-400">42</div>
                  <div className="text-xs text-gray-400">Commits</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-cyan-400">7</div>
                  <div className="text-xs text-gray-400">Contributors</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-pink-400">∞</div>
                  <div className="text-xs text-gray-400">Possibilities</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="border border-purple-400/30 bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-purple-400 mb-4">
            Got an Idea? Let&apos;s Build Something Epic!
          </h3>
          <p className="text-green-300 mb-6">
            These are just the beginning. I&apos;m always cooking up new
            projects and looking for exciting challenges. Want to collaborate on
            the next big thing?
          </p>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-lg transform hover:scale-105 transition-all duration-300">
            <Zap className="mr-2 h-5 w-5" />
            Let&apos;s Collaborate!
          </Button>
        </div>
      </div>
    </div>
  );
}
