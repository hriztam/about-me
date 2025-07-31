"use client";

import { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Zap,
  X,
  Calendar,
  Users,
  Star,
  Search,
} from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projects = [
    {
      id: 1,
      title: "GujjuGPT",
      shortDescription:
        "A fine-tuned Gujarati LLM for contextual text generation",
      longDescription:
        "This project involved developing a sophisticated Gujarati Large Language Model (LLM) that has been meticulously fine-tuned. Leveraging a diverse and extensive dataset of Gujarati text, the model excels at both generating highly coherent and contextually relevant text, as well as understanding the nuances of Gujarati language, making it capable of producing natural and accurate responses.",
      tech: ["Python", "PyTorch", "Transformers", "Flask", "Hugging Face"],
      features: [
        "🤖 AI-powered text generation",
        "⚡ Contextual understanding",
        "📱 User-friendly API",
        "🔒 Secure and private",
        "📊 Analytics dashboard.",
      ],
      status: "DEPLOYED",
      github: "https://github.com/hriztam/GujjuGPT",
      live: "#",
      gradient: "from-cyan-500 to-blue-500",
      color: "green",
      year: "2025",
      team: "Solo project",
      duration: "6 months",
      category: "Large Language Model",
    },
    {
      id: 2,
      title: "MiniGPT",
      shortDescription:
        "A PyTorch implementation of a GPT-2 showcasing transformer architecture",
      longDescription:
        "This project involved creating a compact version of the GPT-2 model using PyTorch, focusing on the core transformer architecture. The goal was to provide an accessible implementation for educational purposes and to enable further experimentation with transformer-based models.",
      tech: ["Python", "Pytorch", "Numpy", "Neural Networks"],
      features: [
        "🤖 AI-powered product recommendations",
        "⚡ Lightning-fast checkout process",
        "📱 Responsive design that works on a potato",
        "🔒 Fort Knox level security",
        "📊 Real-time analytics dashboard",
      ],
      status: "IN_DEVELOPMENT",
      github: "https://github.com/hriztam/miniGPT",
      live: "#",
      color: "cyan",
      gradient: "from-green-500 to-emerald-500",
      year: "2025",
      team: "Solo project",
      duration: "6 months",
      category: "Large Language Model",
    },
    {
      id: 3,
      title: "Pixel Penguin",
      shortDescription:
        "AI-powered e-commerce platform with predictive shopping",
      longDescription:
        "Built with NextJS and pure determination. This platform handles everything from inventory management to payment processing, with a sprinkle of machine learning magic that predicts what users want before they know it themselves.",
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
      gradient: "from-pink-500 to-rose-500",
      year: "2023",
      team: "Solo project",
      duration: "6 months",
      category: "E-commerce",
    },
    {
      id: 4,
      title: "Packet Peeper",
      shortDescription: "A network analyzer for packet safety and protection",
      longDescription:
        "This network analyzer is engineered to provide comprehensive security and integrity for data packets. It meticulously monitors network traffic to ensure packets remain safe and protected from potential threats, offering a crucial layer of defense against unauthorized access or data corruption.",
      tech: ["React", "JavaScript", "Python", "Scapy", "Flask"],
      features: [
        "Live Packet Capture",
        "Protocol Filtering",
        "IPacket Details View",
        "Connection Tracker",
        "Traffic Statistics Dashboard",
      ],
      status: "BETA",
      github: "https://github.com/Harshit7623/Packet_Peeper.git",
      live: "#",
      color: "green",
      gradient: "from-yellow-500 to-orange-500",
      year: "2023",
      team: "2 developers",
      duration: "6 months",
      category: "CyberSecurity",
    },
    {
      id: 5,
      title: "Gitbuddy",
      shortDescription: "An interactive web app visualizing GitHub profiles",
      longDescription:
        "GitBuddy is a elegantly designed and highly interactive web application that provides users with a dynamic visualization of their GitHub profiles",
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
      gradient: "from-purple-500 to-indigo-500",
      year: "2023",
      team: "Solo project",
      duration: "6 months",
      category: "Productivity",
    },
  ];

  // Filter projects based on search query
  const projects_new = [
    {
      id: 1,
      title: "CyberShop 3000",
      shortDescription:
        "AI-powered e-commerce platform with predictive shopping",
      longDescription:
        "Built with NextJS and pure determination. This platform handles everything from inventory management to payment processing, with a sprinkle of machine learning magic that predicts what users want before they know it themselves.",
      tech: ["NextJS", "NodeJS", "MongoDB", "Stripe", "AI/ML", "Redis"],
      features: [
        "🤖 AI-powered product recommendations using machine learning",
        "⚡ Lightning-fast checkout process with one-click purchasing",
        "📱 Responsive design that works flawlessly on any device",
        "🔒 Fort Knox level security with end-to-end encryption",
        "📊 Real-time analytics dashboard for business insights",
        "🛒 Smart inventory management with automated restocking",
        "💳 Multiple payment gateways integration",
        "🌐 Multi-language and multi-currency support",
      ],
      status: "DEPLOYED",
      github: "#",
      live: "#",
      color: "cyan",
      gradient: "from-cyan-500 to-blue-500",
      year: "2023",
      team: "4 developers",
      duration: "6 months",
      category: "E-commerce",
    },
    {
      id: 2,
      title: "TaskMaster Pro",
      shortDescription:
        "Gamified productivity app with real-time collaboration",
      longDescription:
        "Say goodbye to boring task lists! This app turns productivity into an addictive game with achievements, streaks, and team challenges. Built with React and powered by pure determination to make work actually fun.",
      tech: ["React", "Firebase", "WebSockets", "PWA", "Node.js"],
      features: [
        "🎮 Gamified task completion with XP and level systems",
        "👥 Real-time team collaboration with live updates",
        "📈 Advanced productivity analytics and insights",
        "🏆 Achievement system with badges and rewards",
        "📱 Works offline with seamless sync when online",
        "⏰ Smart time tracking and pomodoro integration",
        "🔔 Intelligent notifications that don't annoy",
        "📊 Team performance dashboards and reports",
      ],
      status: "BETA",
      github: "#",
      live: "#",
      color: "green",
      gradient: "from-green-500 to-emerald-500",
      year: "2023",
      team: "3 developers",
      duration: "4 months",
      category: "Productivity",
    },
    {
      id: 3,
      title: "CodeSnippet Vault",
      shortDescription: "Developer's treasure chest for code snippets",
      longDescription:
        "Finally, a place to store all those random code snippets you'll definitely need someday (and actually find them!). Features syntax highlighting, smart tagging, and search that actually works better than your memory.",
      tech: ["NextJS", "PostgreSQL", "Prisma", "Tailwind", "TypeScript"],
      features: [
        "🎨 Syntax highlighting for 50+ programming languages",
        "🏷️ Smart tagging system with auto-suggestions",
        "🔍 Powerful search that finds exactly what you need",
        "📤 Easy sharing with teams and the community",
        "🌙 Beautiful dark mode (because we're developers)",
        "📁 Organized collections and folders",
        "⚡ Lightning-fast performance with caching",
        "🔐 Private and public snippet options",
      ],
      status: "IN_DEVELOPMENT",
      github: "#",
      live: "#",
      color: "pink",
      gradient: "from-pink-500 to-rose-500",
      year: "2024",
      team: "2 developers",
      duration: "3 months",
      category: "Developer Tools",
    },
    {
      id: 4,
      title: "WeatherBot 9000",
      shortDescription: "Weather app with personality and hyperlocal forecasts",
      longDescription:
        "Weather apps are boring. This one has personality! Get weather updates with a side of humor and accuracy that puts meteorologists to shame. Features hyperlocal forecasts and sarcastic commentary.",
      tech: ["Python", "FastAPI", "React", "Weather APIs", "ML"],
      features: [
        "🌦️ Hyperlocal weather predictions with 99% accuracy",
        "😄 Sarcastic weather commentary that makes you smile",
        "📱 Smart push notifications that actually matter",
        "🎯 Machine learning for improved forecast accuracy",
        "🌈 Beautiful weather visualizations and animations",
        "📍 Location-based personalized recommendations",
        "⚡ Real-time weather alerts and warnings",
        "📊 Historical weather data and trends",
      ],
      status: "DEPLOYED",
      github: "#",
      live: "#",
      color: "yellow",
      gradient: "from-yellow-500 to-orange-500",
      year: "2022",
      team: "Solo project",
      duration: "2 months",
      category: "Mobile App",
    },
    {
      id: 5,
      title: "DevChat Network",
      shortDescription: "Real-time chat platform for developers",
      longDescription:
        "A Slack alternative built specifically for developers. Features code sharing, syntax highlighting in messages, integration with GitHub, and channels organized by programming languages and technologies.",
      tech: ["Socket.io", "React", "Node.js", "MongoDB", "Redis"],
      features: [
        "💬 Real-time messaging with typing indicators",
        "🔗 GitHub integration for code sharing",
        "🎨 Syntax highlighting in chat messages",
        "📁 File sharing with drag-and-drop support",
        "🔍 Advanced search across all conversations",
        "🤖 Bot integrations for CI/CD notifications",
        "📱 Mobile-responsive design",
        "🔐 End-to-end encryption for security",
      ],
      status: "DEPLOYED",
      github: "#",
      live: "#",
      color: "purple",
      gradient: "from-purple-500 to-indigo-500",
      year: "2023",
      team: "5 developers",
      duration: "8 months",
      category: "Communication",
    },
    {
      id: 6,
      title: "AI Code Reviewer",
      shortDescription: "AI-powered code review and optimization tool",
      longDescription:
        "An intelligent code review tool that uses AI to analyze code quality, suggest improvements, detect bugs, and ensure best practices. Integrates with popular version control systems.",
      tech: ["Python", "TensorFlow", "FastAPI", "React", "Docker"],
      features: [
        "🤖 AI-powered code analysis and suggestions",
        "🐛 Automatic bug detection and fixes",
        "📊 Code quality metrics and scoring",
        "🔧 Performance optimization recommendations",
        "📝 Automated documentation generation",
        "🔗 Git integration for seamless workflow",
        "📈 Team analytics and improvement tracking",
        "🎯 Custom rule sets for different projects",
      ],
      status: "BETA",
      github: "#",
      live: "#",
      color: "indigo",
      gradient: "from-indigo-500 to-purple-500",
      year: "2024",
      team: "3 developers",
      duration: "5 months",
      category: "AI Tools",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const query = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(query) ||
      project.status.toLowerCase().includes(query) ||
      project.shortDescription.toLowerCase().includes(query) ||
      project.longDescription.toLowerCase().includes(query) ||
      project.category.toLowerCase().includes(query) ||
      project.tech.some((tech) => tech.toLowerCase().includes(query)) ||
      project.features.some((feature) => feature.toLowerCase().includes(query))
    );
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "DEPLOYED":
        return "text-green-400 border-green-400 bg-green-400/10";
      case "BETA":
        return "text-yellow-400 border-yellow-400 bg-yellow-400/10";
      case "IN_DEVELOPMENT":
        return "text-pink-400 border-pink-400 bg-pink-400/10";
      default:
        return "text-cyan-400 border-cyan-400 bg-cyan-400/10";
    }
  };

  const openModal = (projectId: number) => {
    setSelectedProject(projectId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const handleLink = (link: string) => {
    window.open(link, "_blank");
  };

  const selectedProjectData =
    selectedProject !== null
      ? projects.find((p) => p.id === selectedProject)
      : null;

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-cyan-400 text-xs sm:text-sm mb-4">
          // project_showcase.tsx
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
          Digital Creations
        </h2>

        {/* Search Bar */}
        <div className="mb-8 sm:mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-cyan-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by name, tech stack, or category..."
                className="w-full pl-12 pr-4 py-4 bg-black/50 border-2 border-green-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-green-300 placeholder-gray-500 transition-all duration-300 text-sm sm:text-base"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>

            {searchQuery && (
              <div className="mt-3 text-center">
                <span className="text-sm text-cyan-400">
                  Found {filteredProjects.length} project
                  {filteredProjects.length !== 1 ? "s" : ""}
                  {searchQuery && (
                    <span className="text-green-400">
                      {" "}
                      matching "{searchQuery}"
                    </span>
                  )}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => openModal(project.id)}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              >
                <div className="border border-gray-600/30 bg-black/20 p-6 rounded-lg backdrop-blur-sm hover:border-gray-500/50 transition-all duration-300 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white font-bold text-lg`}
                    >
                      {project.title.charAt(0)}
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded border ${getStatusColor(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-4 line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-xs text-gray-400">
                        <Calendar className="w-3 h-3 mr-2" />
                        <span>{project.year}</span>
                        <span className="mx-2">•</span>
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-400">
                        <Users className="w-3 h-3 mr-2" />
                        <span>{project.team}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-800 text-cyan-400 rounded text-xs border border-cyan-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-pink-400 font-mono">
                      {project.category}
                    </span>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400">
                      <span className="text-xs">Click to explore →</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="border border-gray-600/30 bg-black/20 p-8 rounded-lg backdrop-blur-sm">
                <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-400 mb-2">
                  No Projects Found
                </h3>
                <p className="text-gray-500 mb-4">
                  No projects match your search for "{searchQuery}"
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-4 py-2 bg-cyan-400/20 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/30 transition-all duration-300 rounded-lg text-sm"
                >
                  Clear Search
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="border border-purple-400/30 bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-6 sm:p-8 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-purple-400 mb-4">
              Got an Idea? Let's Build Something Epic!
            </h3>
            <p className="text-green-300 mb-6 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              These are just the beginning. I'm always cooking up new projects
              and looking for exciting challenges. Want to collaborate on the
              next big thing?
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-lg transform hover:scale-105 transition-all duration-300">
              <Zap className="mr-2 h-5 w-5" />
              Let's Collaborate!
            </Button>
          </div>
        </div>
      </div>

      {/* Project Detail Modal - Lower z-index */}
      {selectedProjectData && (
        <div
          className={`fixed inset-0 z-20 flex items-start justify-center p-4 pt-8 transition-all duration-300 ${
            isModalOpen
              ? "opacity-100 backdrop-blur-sm"
              : "opacity-0 pointer-events-none"
          }`}
          style={{
            background: isModalOpen
              ? "linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(10,10,30,0.98) 50%, rgba(0,0,0,0.95) 100%)"
              : "transparent",
          }}
        >
          <div
            className={`relative max-w-4xl w-full max-h-[85vh] overflow-auto rounded-lg border-2 backdrop-blur-md transition-all duration-500 transform ${
              isModalOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
            }`}
            style={{
              background: `linear-gradient(135deg, 
                rgba(15,15,35,0.98) 0%, 
                rgba(25,15,45,0.95) 25%, 
                rgba(35,15,35,0.98) 50%, 
                rgba(15,35,45,0.95) 75%, 
                rgba(15,15,35,0.98) 100%)`,
              borderColor: `rgba(${
                selectedProjectData.color === "cyan"
                  ? "0,255,255"
                  : selectedProjectData.color === "green"
                  ? "0,255,0"
                  : selectedProjectData.color === "pink"
                  ? "255,0,255"
                  : selectedProjectData.color === "yellow"
                  ? "255,255,0"
                  : selectedProjectData.color === "blue"
                  ? "0,0,255"
                  : selectedProjectData.color === "purple"
                  ? "128,0,128"
                  : "75,0,130"
              },0.6)`,
              boxShadow: `0 25px 50px -12px rgba(0,0,0,0.9), 
                         0 0 0 1px rgba(0,255,255,0.1),
                         inset 0 1px 0 rgba(255,255,255,0.05)`,
            }}
          >
            {/* Modal Header - Fixed positioning */}
            <div
              className="sticky top-0 z-20 border-b border-cyan-400/20 p-4 sm:p-6 flex justify-between items-start"
              style={{
                background: "rgba(15,15,35,0.98)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div className="flex items-center">
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-r ${selectedProjectData.gradient} flex items-center justify-center text-white font-bold text-lg sm:text-2xl mr-3 sm:mr-4 animate-pulse shadow-lg`}
                >
                  {selectedProjectData.title.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400 mb-1 animate-fade-in">
                    {selectedProjectData.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span
                      className={`px-3 py-1 rounded border ${getStatusColor(
                        selectedProjectData.status
                      )} animate-bounce`}
                    >
                      {selectedProjectData.status}
                    </span>
                    <span className="animate-fade-in">
                      {selectedProjectData.category}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-all duration-300 p-2 hover:bg-red-500/20 rounded-lg hover:scale-110"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Modal Content - Proper spacing from header */}
            <div className="p-4 sm:p-6 relative z-10 space-y-6">
              {/* Project Meta */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center text-sm animate-slide-in-left">
                  <Calendar className="w-4 h-4 text-cyan-400 mr-2" />
                  <span className="text-gray-300">
                    {selectedProjectData.year} • {selectedProjectData.duration}
                  </span>
                </div>
                <div className="flex items-center text-sm animate-slide-in-up">
                  <Users className="w-4 h-4 text-cyan-400 mr-2" />
                  <span className="text-gray-300">
                    {selectedProjectData.team}
                  </span>
                </div>
                <div className="flex items-center text-sm animate-slide-in-right">
                  <Star className="w-4 h-4 text-cyan-400 mr-2" />
                  <span className="text-gray-300">
                    {selectedProjectData.category}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="animate-fade-in-up">
                <p className="text-green-300 italic text-sm sm:text-base leading-relaxed">
                  // {selectedProjectData.longDescription}
                </p>
              </div>

              {/* Features */}
              <div className="animate-fade-in-up">
                <h4 className="text-lg sm:text-xl font-bold text-pink-400 mb-4">
                  Key Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProjectData.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start animate-slide-in-left hover:bg-green-400/5 p-2 rounded transition-all duration-300"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <span className="text-green-400 mr-2 mt-1 flex-shrink-0">
                        ▶
                      </span>
                      <span className="text-green-300 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="animate-fade-in-up">
                <h4 className="text-lg sm:text-xl font-bold text-yellow-400 mb-4">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProjectData.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm border border-cyan-400/30 hover:bg-cyan-400/10 hover:scale-110 transition-all duration-300 animate-bounce"
                      style={{ animationDelay: `${i * 150}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up pt-4">
                <Button
                  onClick={() => handleLink(selectedProjectData.live)}
                  className="flex-1 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black font-bold py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Live Project
                </Button>
                <Button
                  onClick={() => handleLink(selectedProjectData.github)}
                  variant="outline"
                  className="flex-1 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-300 bg-transparent shadow-lg hover:shadow-cyan-400/25"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View Source Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
