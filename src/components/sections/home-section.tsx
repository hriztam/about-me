"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Zap, Code, Coffee } from "lucide-react";

export function HomeSection() {
  const [glitchText, setGlitchText] = useState("HRITAM SHRIVASTAVA");
  const [typedText, setTypedText] = useState("");
  const fullText = "Full Stack Blockchain Developer";

  const handleBuyCoffee = () => {
    window.open("https://buymeacoffee.com/cypherhritam", "_blank");
  };

  const handleInitiateContact = () => {
    window.open("mailto:hritamshrivastava@gmail.com", "_blank");
  };

  const handleViewProjects = () => {
    window.open("https://github.com/hriztam", "_blank");
  };

  useEffect(() => {
    // Typing animation
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    // Glitch effect
    const glitchTimer = setInterval(() => {
      const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
      const original = "HRITAM SHRIVASTAVA";
      let glitched = "";

      for (let i = 0; i < original.length; i++) {
        if (Math.random() < 0.1) {
          glitched +=
            glitchChars[Math.floor(Math.random() * glitchChars.length)];
        } else {
          glitched += original[i];
        }
      }

      setGlitchText(glitched);

      setTimeout(() => setGlitchText(original), 100);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(glitchTimer);
    };
  }, []);

  return (
    <div className="min-h-full flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* ASCII Art Header */}
        <div className="text-cyan-400 text-xs mb-8 font-mono">
          <pre>{`
    ╔═══════════════════════════════════════════════════════════╗
    ║  ██╗  ██╗██████╗ ██╗████████╗ █████╗ ███╗   ███╗        ║
    ║  ██║  ██║██╔══██╗██║╚══██╔══╝██╔══██╗████╗ ████║        ║
    ║  ███████║██████╔╝██║   ██║   ███████║██╔████╔██║        ║
    ║  ██╔══██║██╔══██╗██║   ██║   ██╔══██║██║╚██╔╝██║        ║
    ║  ██║  ██║██║  ██║██║   ██║   ██║  ██║██║ ╚═╝ ██║        ║
    ║  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝        ║
    ╚═══════════════════════════════════════════════════════════╝
          `}</pre>
        </div>

        {/* Main Title with Glitch Effect */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-pink-400">
          {glitchText}
        </h1>

        {/* Subtitle with Typing Effect */}
        <div className="text-2xl md:text-3xl mb-8 text-green-400 h-12">
          <span>{typedText}</span>
        </div>

        {/* Status Indicators */}
        <div className="flex justify-center space-x-8 mb-12 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400">SYSTEM_ONLINE</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400">COFFEE_LOADED</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
            <span className="text-pink-400">VIBE_MAXIMUM</span>
          </div>
        </div>

        {/* Description */}
        <div className="text-lg mb-12 text-green-300 max-w-2xl mx-auto">
          <div className="border border-cyan-400/30 bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-cyan-400 text-sm mb-2">
              {"// About this developer"}
            </div>
            <p>
              Welcome to the digital realm of{" "}
              <span className="text-pink-400 font-bold">Hritam</span>! I&apos;m
              a problem-solving wizard who transforms caffeine into code and
              bugs into features. When I&apos;m not busy making computers do
              impossible things, I&apos;m probably debugging something that
              worked perfectly fine 5 minutes ago. 🤖
            </p>
          </div>
        </div>

        {/* Tech Stack Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { name: "NextJS", icon: "⚛️", level: "EXPERT" },
            { name: "NodeJS", icon: "🟢", level: "MASTER" },
            { name: "Python", icon: "🐍", level: "WIZARD" },
            { name: "Rust", icon: "🦀", level: "LEARNING" },
          ].map((tech, index) => (
            <div
              key={index}
              className="border border-green-400/30 bg-black/20 p-4 rounded-lg hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="text-2xl mb-2">{tech.icon}</div>
              <div className="text-green-400 font-bold">{tech.name}</div>
              <div className="text-cyan-400 text-xs">[{tech.level}]</div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          <Button
            onClick={handleInitiateContact}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-bold py-3 px-8 rounded-lg transform hover:scale-105 transition-all duration-300"
          >
            <Zap className="mr-2 h-5 w-5" />
            INITIATE_CONTACT
          </Button>
          <Button
            onClick={handleViewProjects}
            variant="outline"
            className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-bold py-3 px-8 rounded-lg transform hover:scale-105 transition-all duration-300"
          >
            <Code className="mr-2 h-5 w-5" />
            VIEW_PROJECTS
          </Button>
          <Button
            onClick={handleBuyCoffee}
            variant="outline"
            className="border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black font-bold py-3 px-8 rounded-lg transform hover:scale-105 transition-all duration-300"
          >
            <Coffee className="mr-2 h-5 w-5" />
            BUY_COFFEE
          </Button>
        </div>

        {/* Fun Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="border border-cyan-400/30 bg-black/20 p-6 rounded-lg">
            <div className="text-3xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-green-400">Bugs Fixed</div>
            <div className="text-xs text-gray-400">
              {"// Still counting..."}
            </div>
          </div>
          <div className="border border-green-400/30 bg-black/20 p-6 rounded-lg">
            <div className="text-3xl font-bold text-green-400 mb-2">404</div>
            <div className="text-cyan-400">Cups of Coffee</div>
            <div className="text-xs text-gray-400">{"// This week only"}</div>
          </div>
          <div className="border border-pink-400/30 bg-black/20 p-6 rounded-lg">
            <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
            <div className="text-green-400">Vibe Level</div>
            <div className="text-xs text-gray-400">{"// Always maximum"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
