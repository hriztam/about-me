"use client";

import { useState } from "react";
import { Sidebar } from "@/src/components/sidebar";
import { ParticleSystem } from "@/src/components/particle-system";
import { KonamiCode } from "@/src/components/konami-code";
import { HomeSection } from "@/src/components/sections/home-section";
import { AboutSection } from "@/src/components/sections/about-section";
import { SkillsSection } from "@/src/components/sections/skills-section";
import { ExperienceSection } from "@/src/components/sections/experience-section";
import { ProjectsSection } from "@/src/components/sections/projects-section";
import { ContactSection } from "@/src/components/sections/contact-section";
import { ReadmeSection } from "@/src/components/sections/readme-section";
import { ConfigSection } from "@/src/components/sections/config-section";
import { Menu, X } from "lucide-react";
import { MatrixButton } from "@/src/components/matrix-button";

export default function CyberpunkPortfolio() {
  const [activeFile, setActiveFile] = useState("home.tsx");
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      case "README.md":
        return <ReadmeSection />;
      case "cyberpunk.config.js":
        return <ConfigSection />;
      case "neural.env":
        return <ConfigSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-green-400 font-mono overflow-hidden relative">
      {/* Particle System Background */}
      <ParticleSystem count={30} />

      {/* Konami Code Easter Egg */}
      <KonamiCode />

      {/* Cyberpunk Grid Background */}
      <div className="fixed inset-0 opacity-20 z-0">
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
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-50 animate-pulse" />
      </div>

      <div className="flex h-screen relative z-10">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`
          fixed lg:relative z-50 lg:z-auto
          transform transition-transform duration-300 ease-in-out
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }
          w-80 lg:w-80 h-full
        `}
        >
          <Sidebar
            activeFile={activeFile}
            setActiveFile={setActiveFile}
            onFileSelect={() => setSidebarOpen(false)}
          />
        </div>

        <div className="flex-1 flex flex-col min-w-0">
          {/* Header - Fixed z-index and mobile positioning */}
          <header className="bg-black/50 border-b border-cyan-400/30 p-3 sm:p-4 backdrop-blur-sm relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-4">
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="lg:hidden p-2 text-cyan-400 hover:bg-cyan-400/20 rounded"
                >
                  {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                <div className="text-cyan-400 font-bold text-lg sm:text-xl glitch-text">
                  &gt; HRITAM.EXE
                </div>
                <div className="hidden sm:block text-pink-400 text-sm animate-pulse">
                  [SYSTEM ONLINE]
                </div>
              </div>
            </div>
          </header>

          {/* Main Content - Adjusted for mobile header */}
          <main className="flex-1 overflow-auto relative z-10 pt-0 lg:pt-0">
            {renderActiveSection()}
            {/* Matrix Entry Button */}
            <MatrixButton />
          </main>
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
