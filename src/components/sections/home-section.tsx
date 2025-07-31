"use client";

import { useState, useEffect } from "react";
import { Button } from "@/src/components/ui/button";
import { Zap, Code, Rocket, Coffee } from "lucide-react";

export function HomeSection() {
  const [glitchText, setGlitchText] = useState("HRITAM SHRIVASTAVA");
  const [typedText, setTypedText] = useState("");
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);
  const fullText = "Full Stack AI Developer";

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

    // Create floating particles
    const particleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setParticles(particleArray);

    return () => {
      clearInterval(timer);
      clearInterval(glitchTimer);
    };
  }, []);

  return (
    <div className="min-h-full flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-60"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animation: `float 6s ease-in-out infinite ${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center w-full relative z-10">
        {/* ASCII Art Header - Responsive */}
        <div className="text-cyan-400 text-[8px] sm:text-xs mb-4 sm:mb-8 font-mono overflow-x-auto animate-fade-in">
          <pre className="whitespace-pre text-center">{`
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

        {/* Main Title with Glitch Effect - Responsive */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-pink-400 break-words animate-slide-in-up">
          {glitchText}
        </h1>

        {/* Subtitle with Typing Effect - Responsive */}
        <div
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 text-green-400 h-8 sm:h-10 lg:h-12 animate-slide-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <span>{typedText}</span>
          <span className="animate-pulse">|</span>
        </div>

        {/* Status Indicators - Responsive */}
        <div
          className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-8 mb-8 sm:mb-12 text-xs sm:text-sm animate-slide-in-up"
          style={{ animationDelay: "1s" }}
        >
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400">SYSTEM_ONLINE</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400">BUILDING_MODE</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full animate-pulse"></div>
            <span className="text-pink-400">VIBE_MAXIMUM</span>
          </div>
        </div>

        {/* Description - Responsive */}
        <div
          className="text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 text-green-300 max-w-2xl mx-auto px-4 animate-fade-in-up"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="border border-cyan-400/30 bg-black/30 p-4 sm:p-6 rounded-lg backdrop-blur-sm">
            <div className="text-cyan-400 text-xs sm:text-sm mb-2">
              // About me
            </div>
            <p className="leading-relaxed">
              Welcome to the digital realm of{" "}
              <span className="text-pink-400 font-bold">Hritam</span>! I'm a
              problem-solving wizard who transforms ideas into scalable
              products. When I'm not busy building the next big thing, I'm
              probably architecting solutions that make impossible things
              possible. Ready to disrupt industries? 🚀
            </p>
          </div>
        </div>

        {/* Tech Stack Preview - Responsive Grid with animations */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
          {[
            { name: "JavaScript", icon: "⚛️", level: "EXPERT", delay: "2s" },
            { name: "C++", icon: "🟢", level: "MASTER", delay: "2.2s" },
            { name: "Python", icon: "🐍", level: "WIZARD", delay: "2.4s" },
            { name: "Rust", icon: "🦀", level: "LEARNING", delay: "2.6s" },
          ].map((tech, index) => (
            <div
              key={index}
              className="border border-green-400/30 bg-black/20 p-3 sm:p-4 rounded-lg hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 animate-slide-in-up"
              style={{ animationDelay: tech.delay }}
            >
              <div
                className="text-xl sm:text-2xl mb-2 animate-bounce"
                style={{ animationDelay: tech.delay }}
              >
                {tech.icon}
              </div>
              <div className="text-green-400 font-bold text-sm sm:text-base">
                {tech.name}
              </div>
              <div className="text-cyan-400 text-xs">[{tech.level}]</div>
            </div>
          ))}
        </div>

        {/* Action Buttons - Responsive with staggered animations */}
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 px-4 mb-8">
          <Button
            onClick={handleInitiateContact}
            className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-bold py-3 px-6 lg:px-8 rounded-lg transform hover:scale-105 transition-all duration-300 animate-slide-in-up"
            style={{ animationDelay: "3s" }}
          >
            <Zap className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            INITIATE_CONTACT
          </Button>
          <Button
            onClick={handleViewProjects}
            variant="outline"
            className="w-full sm:w-auto border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-bold py-3 px-6 lg:px-8 rounded-lg transform hover:scale-105 transition-all duration-300 bg-transparent animate-slide-in-up"
            style={{ animationDelay: "3.2s" }}
          >
            <Code className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            VIEW_PROJECTS
          </Button>
          <Button
            onClick={handleBuyCoffee}
            variant="outline"
            className="w-full sm:w-auto border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black font-bold py-3 px-6 lg:px-8 rounded-lg transform hover:scale-105 transition-all duration-300 bg-transparent"
          >
            <Coffee className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            BUY_COFFEE
          </Button>
        </div>

        {/* Fun Stats - Responsive Grid with animations */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center px-4">
          <div
            className="border border-cyan-400/30 bg-black/20 p-4 sm:p-6 rounded-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "3.6s" }}
          >
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2 animate-pulse">
              ∞
            </div>
            <div className="text-green-400 text-sm sm:text-base">
              Ideas Generated
            </div>
            <div className="text-xs text-gray-400">
              // Innovation never stops
            </div>
          </div>
          <div
            className="border border-green-400/30 bg-black/20 p-4 sm:p-6 rounded-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "3.8s" }}
          >
            <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2 animate-pulse">
              2+
            </div>
            <div className="text-cyan-400 text-sm sm:text-base">
              Products Built
            </div>
            <div className="text-xs text-gray-400">// From MVP to scale</div>
          </div>
          <div
            className="border border-pink-400/30 bg-black/20 p-4 sm:p-6 rounded-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "4s" }}
          >
            <div className="text-2xl sm:text-3xl font-bold text-pink-400 mb-2 animate-pulse">
              100%
            </div>
            <div className="text-green-400 text-sm sm:text-base">
              Startup Mindset
            </div>
            <div className="text-xs text-gray-400">// Always building</div>
          </div>
        </div>

        {/* Easter Egg - Hidden clickable area */}
        <div
          className="absolute top-4 right-4 w-8 h-8 opacity-0 hover:opacity-20 cursor-pointer transition-opacity duration-300"
          onClick={() => {
            const colors = [
              "from-red-400",
              "from-blue-400",
              "from-green-400",
              "from-purple-400",
              "from-yellow-400",
            ];
            const randomColor =
              colors[Math.floor(Math.random() * colors.length)];
            document.documentElement.style.setProperty(
              "--gradient-from",
              randomColor
            );
            alert("🎉 Easter egg found! You discovered the color changer!");
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent to-cyan-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(120deg);
          }
          66% {
            transform: translateY(5px) rotate(240deg);
          }
        }

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

        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
