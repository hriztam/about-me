"use client"

import { useState } from "react"
import { Copy, Check, Settings, Database, Zap, Brain } from "lucide-react"

export function ConfigSection() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("cyberpunk")

  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text)
    setCopiedSection(section)
    setTimeout(() => setCopiedSection(null), 2000)
  }

  const cyberpunkConfig = `// cyberpunk.config.js
export const cyberpunkConfig = {
  theme: {
    primary: "#00ffff",      // Cyan
    secondary: "#ff00ff",    // Magenta
    accent: "#00ff00",       // Green
    warning: "#ffff00",      // Yellow
    danger: "#ff0040",       // Red
    background: "#0a0a0a",   // Deep Black
  },
  
  animations: {
    glitchIntensity: 0.3,
    particleCount: 30,
    matrixRainSpeed: 35,
    transitionDuration: 300,
  },
  
  features: {
    matrixMode: true,
    particleSystem: true,
    konamiCode: true,
    soundEffects: false,
    autoSave: true,
  },
  
  ui: {
    sidebarWidth: "320px",
    headerHeight: "64px",
    borderRadius: "8px",
    fontFamily: "JetBrains Mono, monospace",
  },
  
  performance: {
    lazyLoading: true,
    imageOptimization: true,
    codesplitting: true,
    prefetching: true,
  }
}`

  const neuralEnv = `# neural.env - AI Configuration
# Neural Network & AI Assistant Settings

# ARIA AI Assistant
ARIA_VERSION=2.077
ARIA_PERSONALITY=cyberpunk_assistant
ARIA_RESPONSE_DELAY=1500
ARIA_MAX_CONTEXT_LENGTH=4096

# Matrix Interface
MATRIX_RAIN_CHARACTERS=アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ
MATRIX_FONT_SIZE=14
MATRIX_ANIMATION_SPEED=35
MATRIX_OPACITY=0.3

# Neural Processing
NEURAL_PROCESSING_ENABLED=true
COGNITIVE_LOAD_SIMULATION=true
QUANTUM_PROCESSING_MODE=active
NEURAL_PATHWAYS_ACTIVE=true

# Security & Privacy
ENCRYPTION_LEVEL=quantum
DATA_RETENTION_DAYS=30
PRIVACY_MODE=enhanced
NEURAL_FIREWALL=enabled

# Performance Optimization
NEURAL_CACHE_SIZE=256MB
PROCESSING_THREADS=4
MEMORY_OPTIMIZATION=true
BACKGROUND_PROCESSING=enabled

# Development Settings
DEBUG_MODE=false
VERBOSE_LOGGING=false
NEURAL_ANALYTICS=true
PERFORMANCE_MONITORING=true`

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-cyan-400 text-xs sm:text-sm mb-4">// configuration_files.tsx</div>

        <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-8">
          Configuration Files
        </h1>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-6 bg-black/30 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab("cyberpunk")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              activeTab === "cyberpunk"
                ? "bg-cyan-400/20 text-cyan-400 border border-cyan-400/30"
                : "text-gray-400 hover:text-cyan-400"
            }`}
          >
            <Settings size={16} />
            <span>cyberpunk.config.js</span>
          </button>
          <button
            onClick={() => setActiveTab("neural")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              activeTab === "neural"
                ? "bg-green-400/20 text-green-400 border border-green-400/30"
                : "text-gray-400 hover:text-green-400"
            }`}
          >
            <Brain size={16} />
            <span>neural.env</span>
          </button>
        </div>

        {/* Configuration Content */}
        <div className="bg-black/20 border border-green-400/30 rounded-lg backdrop-blur-sm overflow-hidden">
          {activeTab === "cyberpunk" && (
            <div>
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-cyan-400/30 bg-black/30">
                <div className="flex items-center space-x-3">
                  <Settings className="w-6 h-6 text-cyan-400" />
                  <div>
                    <h2 className="text-lg font-bold text-cyan-400">Cyberpunk Configuration</h2>
                    <p className="text-sm text-gray-400">Theme, animations, and feature settings</p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(cyberpunkConfig, "cyberpunk")}
                  className="flex items-center space-x-2 px-3 py-2 bg-cyan-400/20 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/30 transition-all duration-300 rounded-lg text-sm"
                >
                  {copiedSection === "cyberpunk" ? <Check size={16} /> : <Copy size={16} />}
                  <span>Copy</span>
                </button>
              </div>

              {/* Code Block */}
              <div className="p-6">
                <pre className="text-green-400 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
                  {cyberpunkConfig}
                </pre>
              </div>

              {/* Features Overview */}
              <div className="p-6 border-t border-cyan-400/30 bg-black/20">
                <h3 className="text-lg font-bold text-cyan-400 mb-4">Configuration Overview</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h4 className="text-cyan-400 font-bold mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      Theme Colors
                    </h4>
                    <ul className="text-green-300 text-sm space-y-1">
                      <li>• Primary: Cyan (#00ffff)</li>
                      <li>• Secondary: Magenta (#ff00ff)</li>
                      <li>• Accent: Green (#00ff00)</li>
                      <li>• Warning: Yellow (#ffff00)</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h4 className="text-cyan-400 font-bold mb-2 flex items-center">
                      <Settings className="w-4 h-4 mr-2" />
                      Features
                    </h4>
                    <ul className="text-green-300 text-sm space-y-1">
                      <li>• Matrix Mode: Enabled</li>
                      <li>• Particle System: Active</li>
                      <li>• Konami Code: Hidden</li>
                      <li>• Auto Save: Enabled</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "neural" && (
            <div>
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-green-400/30 bg-black/30">
                <div className="flex items-center space-x-3">
                  <Brain className="w-6 h-6 text-green-400" />
                  <div>
                    <h2 className="text-lg font-bold text-green-400">Neural Environment</h2>
                    <p className="text-sm text-gray-400">AI assistant and Matrix interface settings</p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(neuralEnv, "neural")}
                  className="flex items-center space-x-2 px-3 py-2 bg-green-400/20 border border-green-400 text-green-400 hover:bg-green-400/30 transition-all duration-300 rounded-lg text-sm"
                >
                  {copiedSection === "neural" ? <Check size={16} /> : <Copy size={16} />}
                  <span>Copy</span>
                </button>
              </div>

              {/* Code Block */}
              <div className="p-6">
                <pre className="text-green-400 font-mono text-sm overflow-x-auto whitespace-pre-wrap">{neuralEnv}</pre>
              </div>

              {/* AI Features Overview */}
              <div className="p-6 border-t border-green-400/30 bg-black/20">
                <h3 className="text-lg font-bold text-green-400 mb-4">AI Configuration Overview</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h4 className="text-green-400 font-bold mb-2 flex items-center">
                      <Brain className="w-4 h-4 mr-2" />
                      ARIA Assistant
                    </h4>
                    <ul className="text-green-300 text-sm space-y-1">
                      <li>• Version: 2.077</li>
                      <li>• Personality: Cyberpunk</li>
                      <li>• Response Delay: 1.5s</li>
                      <li>• Context Length: 4096</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h4 className="text-green-400 font-bold mb-2 flex items-center">
                      <Database className="w-4 h-4 mr-2" />
                      Neural Processing
                    </h4>
                    <ul className="text-green-300 text-sm space-y-1">
                      <li>• Quantum Mode: Active</li>
                      <li>• Cache Size: 256MB</li>
                      <li>• Threads: 4</li>
                      <li>• Memory Optimized: Yes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Usage Instructions */}
        <div className="mt-8 bg-black/20 border border-purple-400/30 rounded-lg p-6 backdrop-blur-sm">
          <h3 className="text-lg font-bold text-purple-400 mb-4">📝 Usage Instructions</h3>
          <div className="space-y-4 text-green-300">
            <div className="bg-black/30 p-4 rounded-lg border-l-4 border-cyan-400">
              <h4 className="text-cyan-400 font-bold mb-2">Cyberpunk Config</h4>
              <p className="text-sm">
                Modify theme colors, animation settings, and feature toggles. Changes take effect after restart.
              </p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg border-l-4 border-green-400">
              <h4 className="text-green-400 font-bold mb-2">Neural Environment</h4>
              <p className="text-sm">
                Configure AI assistant behavior, Matrix interface settings, and neural processing parameters.
              </p>
            </div>
          </div>
        </div>

        {/* Warning */}
        <div className="mt-6 bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4">
          <div className="flex items-center space-x-2 text-yellow-400">
            <Zap className="w-5 h-5" />
            <span className="font-bold">Warning</span>
          </div>
          <p className="text-yellow-300 text-sm mt-2">
            These are example configuration files. In production, never commit real API keys or sensitive data to
            version control.
          </p>
        </div>
      </div>
    </div>
  )
}
