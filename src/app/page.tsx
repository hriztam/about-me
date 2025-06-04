"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { Terminal } from "@/components/terminal";
import { HomeSection } from "@/components/sections/home-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function CyberpunkPortfolio() {
  const [activeFile, setActiveFile] = useState("home.tsx");
  const [terminalOpen, setTerminalOpen] = useState(false);

  const renderActiveSection = () => {
    switch (activeFile) {
      case "home.tsx":
        return <HomeSection />;
      case "about.tsx":
        return <AboutSection />;
      case "skills.tsx":
        return <SkillsSection />;
      case "experience.tsx":
        return <ExperienceSection />;
      case "projects.tsx":
        return <ProjectsSection />;
      case "contact.tsx":
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-green-400 font-mono overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Glitch Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-50 animate-pulse" />
      </div>

      <div className="flex h-screen relative z-10">
        <Sidebar activeFile={activeFile} setActiveFile={setActiveFile} />

        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-black/50 border-b border-cyan-400/30 p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-cyan-400 font-bold text-xl glitch-text">
                  &gt; HRITAM.EXE
                </div>
                <div className="text-pink-400 text-sm animate-pulse">
                  [SYSTEM ONLINE]
                </div>
              </div>
              <button
                onClick={() => setTerminalOpen(!terminalOpen)}
                className="px-4 py-2 bg-green-400/20 border border-green-400 text-green-400 hover:bg-green-400/30 transition-all duration-300 rounded-sm"
              >
                {terminalOpen ? "CLOSE_TERMINAL" : "OPEN_TERMINAL"}
              </button>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">{renderActiveSection()}</main>

          {/* Terminal */}
          {terminalOpen && (
            <div className="h-64 border-t border-cyan-400/30">
              <Terminal />
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .glitch-text {
          animation: glitch 2s infinite;
        }

        @keyframes glitch {
          0%,
          100% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
        }
      `}</style>
    </div>
  );
}
