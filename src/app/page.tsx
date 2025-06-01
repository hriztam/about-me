"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  ChevronDown,
  Folder,
  File,
  Mail,
  Phone,
  Github,
  Linkedin,
  Twitter,
  X,
  ExternalLink,
  Calendar,
} from "lucide-react";

type Project = {
  id: number;
  name: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  details: string;
  features: string[];
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("about.js");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalText, setTerminalText] = useState("");
  const [expandedFolders, setExpandedFolders] = useState(["src", "projects"]);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const tabs = [
    { id: "about.js", name: "about.js", icon: "📄" },
    { id: "projects.json", name: "projects.json", icon: "📁" },
    { id: "experience.py", name: "experience.py", icon: "🐍" },
    { id: "skills.rs", name: "skills.rs", icon: "🦀" },
    { id: "contact.jsx", name: "contact.jsx", icon: "⚛️" },
    { id: "blog.md", name: "blog.md", icon: "📝" },
  ];

  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "Full-stack marketplace with real-time features",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/hritam",
      live: "https://demo.com",
      details:
        "Built a comprehensive e-commerce platform with user authentication, payment integration, real-time chat support, and admin dashboard. Implemented microservices architecture for scalability.",
      features: [
        "Payment Gateway Integration",
        "Real-time Chat",
        "Admin Dashboard",
        "Order Tracking",
      ],
    },
    {
      id: 2,
      name: "AI Code Assistant",
      description: "VS Code extension for intelligent code suggestions",
      tech: ["TypeScript", "Python", "OpenAI API", "VS Code API"],
      github: "https://github.com/hritam",
      details:
        "Developed a VS Code extension that provides intelligent code suggestions and refactoring recommendations using machine learning models.",
      features: [
        "Code Analysis",
        "Auto-completion",
        "Refactoring Suggestions",
        "Multi-language Support",
      ],
    },
    {
      id: 3,
      name: "Blockchain Voting System",
      description: "Secure voting platform using blockchain technology",
      tech: ["Rust", "Solidity", "React", "Web3.js"],
      github: "https://github.com/hritam",
      details:
        "Created a decentralized voting system ensuring transparency and security through blockchain technology.",
      features: [
        "Smart Contracts",
        "Voter Authentication",
        "Transparent Results",
        "Immutable Records",
      ],
    },
  ];

  const experience = [
    {
      company: "Tech Solutions Inc.",
      role: "Senior Full Stack Developer",
      duration: "2022 - Present",
      location: "Remote",
      description:
        "Leading development of enterprise web applications using modern tech stack.",
    },
    {
      company: "StartupXYZ",
      role: "Full Stack Developer",
      duration: "2020 - 2022",
      location: "Bangalore, India",
      description:
        "Built scalable web applications and APIs serving 100k+ users.",
    },
  ];

  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    backend: ["Node.js", "Python", "Rust", "Express", "FastAPI"],
    database: ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
    tools: ["Git", "Docker", "AWS", "Vercel", "VS Code"],
  };

  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      date: "2024-05-15",
      excerpt:
        "Best practices for structuring large React applications with modern tooling.",
      readTime: "5 min read",
    },
    {
      title: "Getting Started with Rust for Web Development",
      date: "2024-04-20",
      excerpt:
        "Why Rust is becoming popular for backend development and how to get started.",
      readTime: "8 min read",
    },
    {
      title: "The Future of Full Stack Development",
      date: "2024-03-10",
      excerpt:
        "Emerging trends and technologies shaping the future of web development.",
      readTime: "6 min read",
    },
  ];

  useEffect(() => {
    if (isTerminalOpen) {
      const text =
        "Welcome to Hritam's portfolio terminal! 🚀\n\n> Initializing awesome projects...\n> Loading skills: JavaScript ✓ Python ✓ Rust ✓\n> Status: Ready to build amazing things!\n\n$ ";
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          setTerminalText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isTerminalOpen]);

  const toggleFolder = (folder: string) => {
    setExpandedFolders((prev) =>
      prev.includes(folder)
        ? prev.filter((f) => f !== folder)
        : [...prev, folder]
    );
  };

  const handleInputChange = (field: string, value: string) => {
    setContactForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", contactForm);
    alert("Message sent! (This is a demo)");
    setContactForm({ name: "", email: "", subject: "", message: "" });
  };

  const renderFileTree = () => (
    <div className="text-gray-300 text-sm">
      <div className="flex items-center gap-1 py-1 hover:bg-gray-700 px-2 cursor-pointer">
        <Folder size={16} className="text-blue-400" />
        <span>portfolio</span>
      </div>
      <div className="ml-4">
        <div
          className="flex items-center gap-1 py-1 hover:bg-gray-700 px-2 cursor-pointer"
          onClick={() => toggleFolder("src")}
        >
          {expandedFolders.includes("src") ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronRight size={16} />
          )}
          <Folder size={16} className="text-blue-400" />
          <span>src</span>
        </div>
        {expandedFolders.includes("src") && (
          <div className="ml-4">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`flex items-center gap-1 py-1 px-2 cursor-pointer hover:bg-gray-700 ${
                  activeTab === tab.id ? "bg-gray-700 text-white" : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <File size={16} className="text-gray-400" />
                <span>{tab.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "about.js":
        return (
          <div className="font-mono text-sm">
            <div className="text-gray-500">{"// about.js"}</div>
            <div className="mt-4">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-300">developer</span>{" "}
              <span className="text-white">=</span>{" "}
              <span className="text-white">{"{"}</span>
              <div className="ml-4">
                <div>
                  <span className="text-green-300">name</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-yellow-300">
                    {"Hritam Shrivastava"}
                  </span>
                  <span className="text-white">,</span>
                </div>
                <div>
                  <span className="text-green-300">title</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-yellow-300">
                    {"Full Stack Developer"}
                  </span>
                  <span className="text-white">,</span>
                </div>
                <div>
                  <span className="text-green-300">tagline</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-yellow-300">
                    {"Crafting future-ready solutions"}
                  </span>
                  <span className="text-white">,</span>
                </div>
                <div>
                  <span className="text-green-300">passion</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-yellow-300">
                    {"Building scalable applications that solve real problems"}
                  </span>
                  <span className="text-white">,</span>
                </div>
                <div>
                  <span className="text-green-300">currentFocus</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-white">[</span>
                  <span className="text-yellow-300">
                    &quot;Modern Web Technologies&quot;
                  </span>
                  <span className="text-white">,</span>{" "}
                  <span className="text-yellow-300">
                    &quot;System Design&quot;
                  </span>
                  <span className="text-white">,</span>{" "}
                  <span className="text-yellow-300">
                    &quot;AI Integration&quot;
                  </span>
                  <span className="text-white">],</span>
                </div>
                <div>
                  <span className="text-green-300">funFact</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-yellow-300">
                    &quot;I debug with console.log and use AI to code &quot;
                  </span>
                </div>
              </div>
              <span className="text-white">{"};"}</span>
            </div>
            <div className="mt-6">
              <span className="text-purple-400">export</span>{" "}
              <span className="text-purple-400">default</span>{" "}
              <span className="text-blue-300">developer</span>
              <span className="text-white">;</span>
            </div>
          </div>
        );

      case "projects.json":
        return (
          <div className="space-y-4">
            <div className="text-gray-500 font-mono text-sm">
              {"// projects.json"}
            </div>
            <div className="grid gap-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition-colors cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <h3 className="text-white font-semibold mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-600 text-blue-100 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "experience.py":
        return (
          <div className="font-mono text-sm">
            <div className="text-gray-500"># experience.py</div>
            <div className="mt-4">
              <span className="text-purple-400">class</span>{" "}
              <span className="text-yellow-300">Experience</span>
              <span className="text-white">:</span>
              <div className="ml-4 mt-2">
                {experience.map((exp, index) => (
                  <div key={index} className="mb-6">
                    <div className="mb-2">
                      <span className="text-purple-400">def</span>{" "}
                      <span className="text-blue-300">
                        {exp.company.toLowerCase().replace(/\s+/g, "_")}
                      </span>
                      <span className="text-white">(</span>
                      <span className="text-orange-300">self</span>
                      <span className="text-white">):</span>
                    </div>
                    <div className="ml-4">
                      <div>
                        <span className="text-green-300">role</span>{" "}
                        <span className="text-white">=</span>{" "}
                        <span className="text-yellow-300">{"exp.role"}</span>
                      </div>
                      <div>
                        <span className="text-green-300">duration</span>{" "}
                        <span className="text-white">=</span>{" "}
                        <span className="text-yellow-300">
                          &quot;{exp.duration}&quot;
                        </span>
                      </div>
                      <div>
                        <span className="text-green-300">location</span>{" "}
                        <span className="text-white">=</span>{" "}
                        <span className="text-yellow-300">
                          &quot;{exp.location}&quot;
                        </span>
                      </div>
                      <div>
                        <span className="text-green-300">description</span>{" "}
                        <span className="text-white">=</span>{" "}
                        <span className="text-yellow-300">
                          &quot;{exp.description}&quot;
                        </span>
                      </div>
                      <div className="mt-2">
                        <span className="text-purple-400">return</span>{" "}
                        <span className="text-green-300">role</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "skills.rs":
        return (
          <div className="font-mono text-sm">
            <div className="text-gray-500">{"// skills.rs"}</div>
            <div className="mt-4">
              <span className="text-purple-400">use</span>{" "}
              <span className="text-white">std::collections::HashMap;</span>
              <div className="mt-4">
                <span className="text-purple-400">fn</span>{" "}
                <span className="text-yellow-300">get_skills</span>
                <span className="text-white">
                  () -&gt; HashMap&lt;&str, Vec&lt;&str&gt;&gt; {"{"}
                </span>
                <div className="ml-4 mt-2">
                  <span className="text-purple-400">let</span>{" "}
                  <span className="text-purple-400">mut</span>{" "}
                  <span className="text-blue-300">skills</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-blue-300">HashMap</span>
                  <span className="text-white">::new();</span>
                  {Object.entries(skills).map(([category, techs]) => (
                    <div key={category} className="mt-2">
                      <div>
                        <span className="text-blue-300">skills</span>
                        <span className="text-white">.insert(</span>
                        <span className="text-yellow-300">{"category"}</span>
                        <span className="text-white">, vec![</span>
                      </div>
                      <div className="ml-4">
                        {techs.map((tech, index) => (
                          <div key={tech}>
                            <span className="text-yellow-300">{"tech"}</span>
                            {index < techs.length - 1 ? (
                              <span className="text-white">,</span>
                            ) : (
                              ""
                            )}
                          </div>
                        ))}
                      </div>
                      <div>
                        <span className="text-white">]);</span>
                      </div>
                    </div>
                  ))}
                  <div className="mt-4">
                    <span className="text-blue-300">skills</span>
                  </div>
                </div>
                <span className="text-white">{"}"}</span>
              </div>
            </div>
          </div>
        );

      case "contact.jsx":
        return (
          <div className="space-y-6">
            <div className="text-gray-500 font-mono text-sm">
              {"// contact.jsx"}
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-white text-lg font-semibold mb-4">
                Get In Touch
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-400" size={20} />
                  <div>
                    <div className="text-gray-300 text-sm">Email</div>
                    <div className="text-white">hritamstark05@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-green-400" size={20} />
                  <div>
                    <div className="text-gray-300 text-sm">Phone</div>
                    <div className="text-white">+91 9109396985</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mb-6">
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Twitter size={20} />
                  <span>Twitter</span>
                </a>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={contactForm.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                ></textarea>
                <button
                  onClick={handleSubmit}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        );

      case "blog.md":
        return (
          <div className="space-y-6">
            <div className="text-gray-500 font-mono text-sm"># blog.md</div>

            <div className="space-y-4">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors cursor-pointer"
                >
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <p className="text-gray-300">{post.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        );

      default:
        return <div>Select a file to view its content</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Title Bar */}
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-300 ml-4">
            Hritam Shrivastava - Portfolio
          </span>
        </div>
        <div className="text-gray-400 text-sm">
          AI Can&apos;t Replace Me ahh Code Editor
        </div>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 border-r border-gray-700 p-4">
          <div className="mb-6">
            <h2 className="text-gray-300 text-sm font-semibold mb-2">
              EXPLORER
            </h2>
            {renderFileTree()}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Tab Bar */}
          <div className="bg-gray-800 border-b border-gray-700 flex">
            {tabs
              .filter((tab) => activeTab === tab.id)
              .map((tab) => (
                <div
                  key={tab.id}
                  className="px-4 py-2 bg-gray-900 border-r border-gray-700 flex items-center gap-2 text-sm"
                >
                  <span>{tab.icon}</span>
                  <span>{tab.name}</span>
                </div>
              ))}
          </div>

          {/* Editor Content */}
          <div className="flex-1 p-6 overflow-auto">{renderTabContent()}</div>

          {/* Terminal */}
          <div className="bg-gray-900 border-t border-gray-700">
            <div
              className="flex items-center justify-between px-4 py-2 bg-gray-800 cursor-pointer"
              onClick={() => setIsTerminalOpen(!isTerminalOpen)}
            >
              <div className="flex items-center gap-2">
                {isTerminalOpen ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
                <span className="text-sm">TERMINAL</span>
              </div>
            </div>
            {isTerminalOpen && (
              <div className="p-4 font-mono text-sm text-green-400 min-h-32">
                <pre>{terminalText}</pre>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h2 className="text-xl font-semibold">{selectedProject.name}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <p className="text-gray-300 mb-4">{selectedProject.details}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                <ul className="space-y-1">
                  {selectedProject.features?.map((feature, index) => (
                    <li
                      key={index}
                      className="text-gray-300 flex items-center gap-2"
                    >
                      <span className="text-green-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
                <div className="flex gap-2 flex-wrap">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-600 text-blue-100 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded transition-colors"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
