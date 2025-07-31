"use client";

import { useState, useEffect } from "react";
import {
  Heart,
  Rocket,
  Code,
  Zap,
  Star,
  Brain,
  Target,
  Trophy,
  Play,
  RotateCcw,
} from "lucide-react";

export function AboutSection() {
  const [activeQuote, setActiveQuote] = useState(0);
  const [buildingCount, setBuildingCount] = useState(12);
  const [isTyping, setIsTyping] = useState(false);
  const [hoveredFact, setHoveredFact] = useState<number | null>(null);

  // Simple Memory Game State
  const [gameActive, setGameActive] = useState(false);
  const [sequence, setSequence] = useState<number[]>([]);
  const [playerSequence, setPlayerSequence] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showingSequence, setShowingSequence] = useState(false);
  const [activeButton, setActiveButton] = useState<number | null>(null);

  // Animation states for cards
  const [animatingCards, setAnimatingCards] = useState<Set<string>>(new Set());

  const quotes = [
    "Code is like humor. When you have to explain it, it's bad.",
    "Build it, ship it, iterate. That's the startup way.",
    "The best way to predict the future is to build it.",
    "Every great product started with someone who refused to accept 'that's impossible'.",
    "Ideas are cheap. Execution is everything.",
  ];

  const funFacts = [
    {
      icon: "🚀",
      title: "Building Style",
      value: "Move Fast & Build Things",
      description: "I believe in rapid prototyping and iterative development",
    },
    {
      icon: "💡",
      title: "Startup Mindset",
      value: "Always Innovating",
      description: "Constantly thinking of the next big idea",
    },
    {
      icon: "🎯",
      title: "Focus Mode",
      value: "Product-First",
      description: "User experience drives every decision",
    },
    {
      icon: "🌙",
      title: "Peak Hours",
      value: "3 AM Builder",
      description: "When the best ideas come to life",
    },
    {
      icon: "🔧",
      title: "Problem Solving",
      value: "Creative Solutions",
      description: "Finding unique approaches to complex challenges",
    },
    {
      icon: "📈",
      title: "Growth Mindset",
      value: "Scale Everything",
      description: "Think big, start small, move fast",
    },
  ];

  // Rotate quotes every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setActiveQuote((prev) => (prev + 1) % quotes.length);
        setIsTyping(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animate building counter
  useEffect(() => {
    const interval = setInterval(() => {
      setBuildingCount((prev) => prev + Math.floor(Math.random() * 2));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Memory Game Logic
  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setCurrentStep(0);
    setPlayerSequence([]);
    const newSequence = [Math.floor(Math.random() * 4)];
    setSequence(newSequence);
    showSequence(newSequence);
  };

  const showSequence = (seq: number[]) => {
    setShowingSequence(true);
    seq.forEach((button, index) => {
      setTimeout(() => {
        setActiveButton(button);
        setTimeout(() => setActiveButton(null), 400);
      }, (index + 1) * 600);
    });
    setTimeout(() => {
      setShowingSequence(false);
    }, seq.length * 600 + 500);
  };

  const handleButtonClick = (buttonIndex: number) => {
    if (showingSequence || !gameActive) return;

    const newPlayerSequence = [...playerSequence, buttonIndex];
    setPlayerSequence(newPlayerSequence);

    if (newPlayerSequence[currentStep] !== sequence[currentStep]) {
      // Wrong button - game over
      setGameActive(false);
      setActiveButton(buttonIndex);
      setTimeout(() => setActiveButton(null), 200);
      return;
    }

    if (newPlayerSequence.length === sequence.length) {
      // Completed sequence correctly
      setScore(score + 1);
      setCurrentStep(0);
      setPlayerSequence([]);

      // Add new button to sequence
      const newSequence = [...sequence, Math.floor(Math.random() * 4)];
      setSequence(newSequence);

      setTimeout(() => {
        showSequence(newSequence);
      }, 1000);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const resetGame = () => {
    setGameActive(false);
    setSequence([]);
    setPlayerSequence([]);
    setCurrentStep(0);
    setScore(0);
    setShowingSequence(false);
    setActiveButton(null);
  };

  const handleCardHover = (cardType: string) => {
    if (animatingCards.has(cardType)) return;

    setAnimatingCards((prev) => new Set([...prev, cardType]));

    // Remove from animating set after animation completes
    setTimeout(() => {
      setAnimatingCards((prev) => {
        const newSet = new Set(prev);
        newSet.delete(cardType);
        return newSet;
      });
    }, 2000); // Animation duration
  };

  const getButtonColor = (index: number) => {
    const colors = [
      "bg-red-500 hover:bg-red-400",
      "bg-blue-500 hover:bg-blue-400",
      "bg-green-500 hover:bg-green-400",
      "bg-yellow-500 hover:bg-yellow-400",
    ];
    return colors[index];
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
      <div className="border border-cyan-400/30 bg-black/20 p-4 sm:p-6 lg:p-8 rounded-lg backdrop-blur-sm relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0 animate-pulse"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(0,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255,0,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(0,255,0,0.1) 0%, transparent 50%)
              `,
            }}
          />
        </div>

        <div className="relative z-10">
          <div className="text-cyan-400 text-xs sm:text-sm mb-4">
            // about_hritam.tsx
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 animate-pulse">
            About The Builder
          </h2>

          {/* Interactive Quote Section */}
          <div className="mb-8 p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-pink-400/30 relative">
            <div className="flex items-center mb-4">
              <Brain className="w-6 h-6 text-pink-400 mr-3 animate-pulse" />
              <h3 className="text-lg font-bold text-pink-400">Random Quotes</h3>
              <div className="ml-auto flex space-x-1">
                {quotes.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeQuote ? "bg-pink-400" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
            <blockquote
              className={`text-green-300 italic text-sm sm:text-base leading-relaxed transition-all duration-300 ${
                isTyping ? "opacity-50 blur-sm" : "opacity-100"
              }`}
            >
              "{quotes[activeQuote]}"
            </blockquote>
            <div className="text-right mt-2">
              <span className="text-cyan-400 text-sm">
                - Hritam (definitely)
              </span>
            </div>
          </div>

          {/* Memory Game Section */}
          <div className="mb-8 p-6 bg-gradient-to-r from-green-900/20 to-cyan-900/20 rounded-lg border border-green-400/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Trophy className="w-6 h-6 text-green-400 mr-3 animate-bounce" />
                <h3 className="text-lg font-bold text-green-400">
                  Memory Challenge
                </h3>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400">Level: {score}</div>
                {gameActive && !showingSequence && (
                  <div className="text-xs text-yellow-400">
                    Repeat the sequence!
                  </div>
                )}
                {showingSequence && (
                  <div className="text-xs text-cyan-400">
                    Watch carefully...
                  </div>
                )}
              </div>
            </div>

            {!gameActive ? (
              <div className="text-center">
                <button
                  onClick={startGame}
                  className="flex items-center mx-auto px-4 py-2 bg-green-400/20 border border-green-400 text-green-400 hover:bg-green-400/30 transition-all duration-300 rounded-lg mb-2"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Memory Challenge
                </button>
                <p className="text-xs text-gray-400">
                  Watch the sequence, then repeat it!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
                  {[0, 1, 2, 3].map((index) => (
                    <button
                      key={index}
                      onClick={() => handleButtonClick(index)}
                      disabled={showingSequence}
                      className={`h-16 w-16 rounded-lg transition-all duration-200 transform ${
                        activeButton === index
                          ? `${getButtonColor(index)} scale-110 shadow-lg`
                          : `${getButtonColor(
                              index
                            )} opacity-70 hover:opacity-100`
                      } ${
                        showingSequence
                          ? "cursor-not-allowed"
                          : "hover:scale-105"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-center">
                  <button
                    onClick={resetGame}
                    className="flex items-center mx-auto px-3 py-1 bg-red-400/20 border border-red-400 text-red-400 hover:bg-red-400/30 transition-all duration-300 rounded text-sm"
                  >
                    <RotateCcw className="w-3 h-3 mr-1" />
                    Reset
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-4 sm:space-y-6 text-green-300 text-sm sm:text-base">
            {/* Origin Story */}
            <div className="border-l-4 border-pink-400 pl-4 sm:pl-6 hover:bg-pink-400/5 transition-all duration-300 rounded-r-lg p-4">
              <div className="flex items-center mb-2">
                <Rocket className="w-5 h-5 text-pink-400 mr-2 animate-bounce" />
                <h3 className="text-lg sm:text-xl font-bold text-pink-400">
                  The Origin Story
                </h3>
              </div>
              <p className="leading-relaxed">
                Once upon a time, in a world filled with problems waiting to be
                solved, a builder emerged. That builder is{" "}
                <span className="text-cyan-400 font-bold animate-pulse">
                  Hritam Shrivastava
                </span>{" "}
                - a Full Stack Developer who doesn't just write code, he crafts
                solutions that matter. Armed with a keyboard, endless curiosity,
                and a burning desire to build the next big thing.
              </p>
            </div>

            {/* Philosophy */}
            <div className="border-l-4 border-green-400 pl-4 sm:pl-6 hover:bg-green-400/5 transition-all duration-300 rounded-r-lg p-4">
              <div className="flex items-center mb-2">
                <Star className="w-5 h-5 text-green-400 mr-2 animate-spin" />
                <h3 className="text-lg sm:text-xl font-bold text-green-400">
                  The Philosophy
                </h3>
              </div>
              <p className="leading-relaxed">
                I believe in building products that solve real problems for real
                people. My motto:{" "}
                <span className="text-pink-400 font-bold animate-pulse">
                  "Build fast, iterate faster, and never stop learning."
                </span>
              </p>
            </div>

            {/* Superpowers */}
            <div className="border-l-4 border-cyan-400 pl-4 sm:pl-6 hover:bg-cyan-400/5 transition-all duration-300 rounded-r-lg p-4">
              <div className="flex items-center mb-2">
                <Zap className="w-5 h-5 text-cyan-400 mr-2 animate-pulse" />
                <h3 className="text-lg sm:text-xl font-bold text-cyan-400">
                  The Superpowers
                </h3>
              </div>
              <ul className="space-y-2 leading-relaxed">
                <li className="flex items-center hover:scale-105 transition-transform duration-200">
                  <span className="animate-bounce mr-2">🚀</span>
                  Can turn ideas into MVPs faster than you can say
                  "product-market fit"
                </li>
                <li className="flex items-center hover:scale-105 transition-transform duration-200">
                  <span
                    className="animate-bounce mr-2"
                    style={{ animationDelay: "0.1s" }}
                  >
                    💡
                  </span>
                  Transforms complex problems into elegant, scalable solutions
                </li>
                <li className="flex items-center hover:scale-105 transition-transform duration-200">
                  <span
                    className="animate-bounce mr-2"
                    style={{ animationDelay: "0.2s" }}
                  >
                    🧠
                  </span>
                  Thinks like a founder, codes like an engineer
                </li>
                <li className="flex items-center hover:scale-105 transition-transform duration-200">
                  <span
                    className="animate-bounce mr-2"
                    style={{ animationDelay: "0.3s" }}
                  >
                    🎯
                  </span>
                  Hits product deadlines while maintaining code quality
                </li>
                <li className="flex items-center hover:scale-105 transition-transform duration-200">
                  <span
                    className="animate-bounce mr-2"
                    style={{ animationDelay: "0.4s" }}
                  >
                    😄
                  </span>
                  Makes building products an adventure, not a chore
                </li>
              </ul>
            </div>

            {/* Interactive Fun Facts */}
            <div className="border-l-4 border-yellow-400 pl-4 sm:pl-6 hover:bg-yellow-400/5 transition-all duration-300 rounded-r-lg p-4">
              <div className="flex items-center mb-4">
                <Heart className="w-5 h-5 text-yellow-400 mr-2 animate-pulse" />
                <h3 className="text-lg sm:text-xl font-bold text-yellow-400">
                  Builder Facts
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {funFacts.map((fact, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredFact(index)}
                    onMouseLeave={() => setHoveredFact(null)}
                    className={`bg-black/30 p-3 sm:p-4 rounded cursor-pointer transition-all duration-300 transform ${
                      hoveredFact === index
                        ? "scale-105 bg-black/50 shadow-lg"
                        : "hover:scale-102"
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <span
                        className="text-2xl mr-2 animate-bounce"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {fact.icon}
                      </span>
                      <div className="text-cyan-400 font-bold text-sm sm:text-base">
                        {fact.title}:
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm mb-1">{fact.value}</div>
                    {hoveredFact === index && (
                      <div className="text-xs text-gray-400 animate-fade-in">
                        {fact.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Building Counter */}
          <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-400/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Target className="w-8 h-8 text-blue-400 mr-3 animate-pulse" />
                <div>
                  <div className="text-blue-400 font-bold mb-1 text-sm sm:text-base">
                    Live Project Counter
                  </div>
                  <div className="text-xs text-gray-400">
                    Ideas turned into reality
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-mono text-green-400 animate-pulse">
                  {buildingCount}
                </div>
                <div className="text-xs text-gray-400">// And counting...</div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border border-pink-400/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-pink-400/10 rounded-full animate-ping" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-cyan-400/10 rounded-full animate-pulse" />
            <div className="relative z-10">
              <div className="flex items-center mb-2">
                <Code className="w-5 h-5 text-pink-400 mr-2 animate-spin" />
                <div className="text-pink-400 font-bold mb-2 text-sm sm:text-base">
                  // Mission Statement
                </div>
              </div>
              <p className="text-green-300 italic text-sm sm:text-base leading-relaxed">
                "To build products that don't just work, but make people's lives
                genuinely better. Every line of code should serve a purpose,
                every feature should solve a real problem, and every product
                should feel like magic to use. The future belongs to the
                builders!"
              </p>
            </div>
          </div>

          {/* Interactive Stats with Icon-based Animations */}
          <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {/* Success Rate Card with Target Animation */}
            <div
              className="group bg-black/30 p-3 sm:p-4 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 cursor-pointer transform hover:scale-105 relative overflow-hidden"
              onMouseEnter={() => handleCardHover("success")}
            >
              <div className="relative z-10">
                <div className="text-2xl mb-2 relative flex items-center">
                  <span className="relative">
                    🎯
                    {animatingCards.has("success") && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-green-400 text-lg animate-target-hit">
                          →
                        </div>
                      </div>
                    )}
                  </span>
                </div>
                <div className="text-cyan-400 font-bold text-sm">
                  Success Rate
                </div>
                <div className="text-lg font-mono text-green-400">99.9%</div>
              </div>
            </div>

            {/* Build Speed Card with Lightning Animation */}
            <div
              className="group bg-black/30 p-3 sm:p-4 rounded-lg hover:bg-green-400/10 transition-all duration-300 cursor-pointer transform hover:scale-105 relative overflow-hidden"
              onMouseEnter={() => handleCardHover("speed")}
            >
              {animatingCards.has("speed") && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent animate-lightning-flash" />
              )}
              <div className="relative z-10">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-green-400 font-bold text-sm">
                  Build Speed
                </div>
                <div className="text-lg font-mono text-green-400">
                  Lightning
                </div>
              </div>
            </div>

            {/* Ideas/Min Card with Bulb Glow */}
            <div
              className="group bg-black/30 p-3 sm:p-4 rounded-lg hover:bg-pink-400/10 transition-all duration-300 cursor-pointer transform hover:scale-105 relative overflow-hidden"
              onMouseEnter={() => handleCardHover("ideas")}
            >
              <div className="relative z-10">
                <div
                  className={`text-2xl mb-2 transition-all duration-1000 ${
                    animatingCards.has("ideas") ? "animate-bulb-glow" : ""
                  }`}
                >
                  💡
                </div>
                <div className="text-pink-400 font-bold text-sm">Ideas/Min</div>
                <div className="text-lg font-mono text-green-400">∞</div>
              </div>
              {animatingCards.has("ideas") && (
                <div className="absolute inset-0 bg-yellow-400/20 rounded-lg animate-glow-pulse" />
              )}
            </div>

            {/* Startup Ready Card with Rocket Animation */}
            <div
              className="group bg-black/30 p-3 sm:p-4 rounded-lg hover:bg-yellow-400/10 transition-all duration-300 cursor-pointer transform hover:scale-105 relative overflow-hidden"
              onMouseEnter={() => handleCardHover("startup")}
            >
              <div className="relative z-10">
                <div
                  className={`text-2xl mb-2 transition-all duration-1500 ${
                    animatingCards.has("startup") ? "animate-rocket-launch" : ""
                  }`}
                >
                  🚀
                </div>
                <div className="text-yellow-400 font-bold text-sm">
                  Startup Ready
                </div>
                <div className="text-lg font-mono text-green-400">Always</div>
              </div>
              {animatingCards.has("startup") && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-t from-orange-400/60 to-transparent animate-rocket-trail" />
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes target-hit {
          0% {
            transform: translateX(-30px) scale(0.5);
            opacity: 0;
          }
          50% {
            transform: translateX(0) scale(1.2);
            opacity: 1;
          }
          100% {
            transform: translateX(10px) scale(1);
            opacity: 0.8;
          }
        }

        @keyframes lightning-flash {
          0%,
          100% {
            opacity: 0;
            transform: translateX(-100%) skewX(-20deg);
          }
          50% {
            opacity: 1;
            transform: translateX(100%) skewX(-20deg);
          }
        }

        @keyframes bulb-glow {
          0%,
          100% {
            filter: brightness(1) drop-shadow(0 0 0 transparent);
            transform: scale(1);
          }
          50% {
            filter: brightness(1.8) drop-shadow(0 0 15px #ffff00);
            transform: scale(1.1);
          }
        }

        @keyframes glow-pulse {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 0.4;
          }
        }

        @keyframes rocket-launch {
          0% {
            transform: translateY(0) scale(1);
          }
          30% {
            transform: translateY(-5px) scale(1.05);
          }
          60% {
            transform: translateY(-15px) scale(1.1);
          }
          100% {
            transform: translateY(-25px) scale(0.9);
            opacity: 0.8;
          }
        }

        @keyframes rocket-trail {
          0% {
            height: 0%;
            opacity: 0;
          }
          30% {
            height: 50%;
            opacity: 0.8;
          }
          100% {
            height: 100%;
            opacity: 0;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-target-hit {
          animation: target-hit 1.2s ease-out;
        }

        .animate-lightning-flash {
          animation: lightning-flash 0.6s ease-out;
        }

        .animate-bulb-glow {
          animation: bulb-glow 1.5s ease-out;
        }

        .animate-glow-pulse {
          animation: glow-pulse 1.5s ease-out;
        }

        .animate-rocket-launch {
          animation: rocket-launch 2s ease-out;
        }

        .animate-rocket-trail {
          animation: rocket-trail 2s ease-out;
        }
      `}</style>
    </div>
  );
}
