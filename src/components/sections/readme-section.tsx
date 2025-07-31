"use client";

import { useState } from "react";
import { Copy, Check, ExternalLink, Github, Star } from "lucide-react";

export function ReadmeSection() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  let url = "https://github.com/hriztam/about-me";

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-cyan-400 text-xs sm:text-sm mb-4">
          // README.md
        </div>

        <div className="bg-black/20 border border-green-400/30 rounded-lg p-6 sm:p-8 backdrop-blur-sm">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-2">
                🚀 Hritam's Cyberpunk Portfolio
              </h1>
              <p className="text-green-300 text-sm sm:text-base">
                A futuristic, interactive portfolio built with Next.js and pure
                cyberpunk vibes
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 bg-yellow-400/20 px-2 py-1 rounded">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 text-sm">v2.077</span>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 bg-green-400/20 border border-green-400 text-green-400 rounded-full text-xs">
              Next.js 15
            </span>
            <span className="px-3 py-1 bg-cyan-400/20 border border-cyan-400 text-cyan-400 rounded-full text-xs">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-pink-400/20 border border-pink-400 text-pink-400 rounded-full text-xs">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 bg-purple-400/20 border border-purple-400 text-purple-400 rounded-full text-xs">
              Framer Motion
            </span>
            <span className="px-3 py-1 bg-yellow-400/20 border border-yellow-400 text-yellow-400 rounded-full text-xs">
              Matrix Mode
            </span>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-pink-400 mb-4">
              📖 About This Project
            </h2>
            <div className="bg-black/30 p-4 rounded-lg border-l-4 border-cyan-400">
              <p className="text-green-300 leading-relaxed">
                Welcome to the digital realm! This isn't just another portfolio
                - it's a cyberpunk experience that showcases my journey as a
                Full Stack Developer. Built with cutting-edge technologies and
                infused with Matrix-inspired aesthetics, this portfolio features
                interactive elements, particle effects, easter eggs, and even an
                AI assistant you can chat with in Matrix mode.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-pink-400 mb-4">
              ✨ Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-black/30 p-4 rounded-lg">
                <h3 className="text-cyan-400 font-bold mb-2">
                  🎮 Interactive Elements
                </h3>
                <ul className="text-green-300 text-sm space-y-1">
                  <li>• Memory challenge game</li>
                  <li>• Animated skill cards</li>
                  <li>• Project search & filtering</li>
                  <li>• Timeline navigation</li>
                </ul>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <h3 className="text-cyan-400 font-bold mb-2">🤖 Matrix Mode</h3>
                <ul className="text-green-300 text-sm space-y-1">
                  <li>• AI Assistant (ARIA)</li>
                  <li>• Matrix rain effect</li>
                  <li>• Neural interface design</li>
                  <li>• Real-time chat system</li>
                </ul>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <h3 className="text-cyan-400 font-bold mb-2">
                  🎨 Visual Effects
                </h3>
                <ul className="text-green-300 text-sm space-y-1">
                  <li>• Particle system background</li>
                  <li>• Glitch animations</li>
                  <li>• Cyberpunk grid overlay</li>
                  <li>• Custom hover animations</li>
                </ul>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <h3 className="text-cyan-400 font-bold mb-2">
                  📱 Responsive Design
                </h3>
                <ul className="text-green-300 text-sm space-y-1">
                  <li>• Mobile-first approach</li>
                  <li>• Touch-friendly interface</li>
                  <li>• Adaptive layouts</li>
                  <li>• Cross-browser compatible</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Installation */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-pink-400 mb-4">
              🚀 Quick Start
            </h2>
            <div className="space-y-4">
              <div className="bg-black/50 p-4 rounded-lg border border-gray-600">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">
                    Clone the repository
                  </span>
                  <button
                    onClick={() => copyToClipboard(`git clone ${url}`, "clone")}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {copiedSection === "clone" ? (
                      <Check size={16} />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
                <code className="text-green-400 font-mono text-sm">
                  git clone {url}
                </code>
              </div>

              <div className="bg-black/50 p-4 rounded-lg border border-gray-600">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">
                    Install dependencies
                  </span>
                  <button
                    onClick={() => copyToClipboard("npm install", "install")}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {copiedSection === "install" ? (
                      <Check size={16} />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
                <code className="text-green-400 font-mono text-sm">
                  npm install
                </code>
              </div>

              <div className="bg-black/50 p-4 rounded-lg border border-gray-600">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">
                    Start development server
                  </span>
                  <button
                    onClick={() => copyToClipboard("npm run dev", "dev")}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {copiedSection === "dev" ? (
                      <Check size={16} />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
                <code className="text-green-400 font-mono text-sm">
                  npm run dev
                </code>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-pink-400 mb-4">
              🛠️ Tech Stack
            </h2>
            <div className="bg-black/30 p-4 rounded-lg">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-cyan-400 font-bold mb-2">Frontend</h4>
                  <ul className="text-green-300 text-sm space-y-1">
                    <li>• Next.js 15</li>
                    <li>• React 18</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-bold mb-2">Animations</h4>
                  <ul className="text-green-300 text-sm space-y-1">
                    <li>• Framer Motion</li>
                    <li>• CSS Animations</li>
                    <li>• Canvas API</li>
                    <li>• Particle System</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-bold mb-2">Tools</h4>
                  <ul className="text-green-300 text-sm space-y-1">
                    <li>• ESLint</li>
                    <li>• Prettier</li>
                    <li>• Vercel</li>
                    <li>• Git</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Project Structure */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-pink-400 mb-4">
              📁 Project Structure
            </h2>
            <div className="bg-black/50 p-4 rounded-lg border border-gray-600 font-mono text-sm">
              <div className="text-green-400">
                <div>cyberpunk-portfolio/</div>
                <div className="ml-4">├── app/</div>
                <div className="ml-8">├── layout.tsx</div>
                <div className="ml-8">└── page.tsx</div>
                <div className="ml-4">├── components/</div>
                <div className="ml-8">├── sections/</div>
                <div className="ml-8">├── ui/</div>
                <div className="ml-8">└── matrix-button.tsx</div>
                <div className="ml-4">├── src/</div>
                <div className="ml-8">└── matrix.tsx</div>
                <div className="ml-4">├── config/</div>
                <div className="ml-8">├── cyberpunk.config.js</div>
                <div className="ml-8">└── neural.env</div>
                <div className="ml-4">└── README.md</div>
              </div>
            </div>
          </div>

          {/* Contributing */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-pink-400 mb-4">
              🤝 Contributing
            </h2>
            <div className="bg-black/30 p-4 rounded-lg border-l-4 border-green-400">
              <p className="text-green-300 mb-4">
                Want to contribute to this cyberpunk experience? Here's how you
                can help:
              </p>
              <ol className="text-green-300 text-sm space-y-2 list-decimal list-inside">
                <li>Fork the repository</li>
                <li>
                  Create a feature branch (
                  <code className="text-cyan-400">
                    git checkout -b feature/amazing-feature
                  </code>
                  )
                </li>
                <li>
                  Commit your changes (
                  <code className="text-cyan-400">
                    git commit -m 'Add amazing feature'
                  </code>
                  )
                </li>
                <li>
                  Push to the branch (
                  <code className="text-cyan-400">
                    git push origin feature/amazing-feature
                  </code>
                  )
                </li>
                <li>Open a Pull Request</li>
              </ol>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#"
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black font-bold rounded-lg transform hover:scale-105 transition-all duration-300"
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 px-6 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold rounded-lg transform hover:scale-105 transition-all duration-300"
            >
              <Github size={20} />
              <span>Source Code</span>
            </a>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-600 text-center">
            <p className="text-gray-400 text-sm">
              Made with <span className="text-red-400">❤️</span> and lots of{" "}
              <span className="text-yellow-400">☕</span> by{" "}
              <span className="text-cyan-400 font-bold">
                Hritam Shrivastava
              </span>
            </p>
            <p className="text-gray-500 text-xs mt-2">
              "The future belongs to the builders" - Welcome to the Matrix 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
