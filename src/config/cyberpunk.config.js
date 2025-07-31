/**
 * 🚀 CYBERPUNK PORTFOLIO CONFIGURATION v2.077
 *
 * Welcome to the matrix of configuration! This file contains all the
 * settings that make this portfolio absolutely legendary.
 *
 * ⚠️  WARNING: Modifying these values may cause excessive awesomeness!
 */

// 🎨 Theme Configuration
const CYBERPUNK_THEME = {
  colors: {
    primary: {
      cyan: "#00ffff",
      green: "#00ff00",
      pink: "#ff00ff",
      yellow: "#ffff00",
      blue: "#0080ff",
      purple: "#8000ff",
      matrixGreen: "#00ff41",
    },
    background: {
      dark: "#0a0a0a",
      darker: "#050505",
      matrix: "#000000",
      gradient: "linear-gradient(135deg, #0a0a0a 0%, #1a0a1a 50%, #0a1a1a 100%)",
      matrixGradient: "linear-gradient(180deg, #000000 0%, #001100 100%)",
    },
    text: {
      primary: "#00ff00",
      secondary: "#00ffff",
      accent: "#ff00ff",
      muted: "#666666",
      matrix: "#00ff41",
    },
  },

  // 🎭 Animation Settings
  animations: {
    glitch: {
      duration: "2s",
      intensity: 0.1, // How often glitch occurs (0-1)
      characters: "!@#$%^&*()_+-=[]{}|;:,.<>?",
    },
    typing: {
      speed: 100, // milliseconds per character
      cursor: {
        blink: "1s",
        character: "|",
      },
    },
    particles: {
      count: 30,
      speed: 6, // seconds for full animation cycle
      colors: ["#00ffff", "#00ff00", "#ff00ff", "#ffff00"],
    },
    matrixRain: {
      speed: 35, // milliseconds between frames
      fontSize: 14,
      characters:
        "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      fadeOpacity: 0.04,
    },
    cardEffects: {
      arrow: {
        duration: "1s",
        easing: "ease-out",
      },
      lightning: {
        duration: "0.5s",
        easing: "ease-out",
      },
      bulbGlow: {
        duration: "1s",
        easing: "ease-out",
      },
      rocketLaunch: {
        duration: "1.5s",
        easing: "ease-out",
      },
    },
    transitions: {
      fast: "0.3s",
      normal: "0.6s",
      slow: "1.2s",
      epic: "2s",
      experience: "0.8s", // Slowed down experience section
    },
  },
}

// 🎮 Interactive Features
const INTERACTIVE_CONFIG = {
  terminal: {
    prompt: "hritam@cyberpunk:~$",
    welcomeMessage: "Welcome to HRITAM_OS v2.077 - Cyberpunk Edition",
    commands: {
      help: "Show available commands",
      about: "Learn about the legendary Hritam",
      skills: "Display coding superpowers",
      joke: "Get a programmer joke",
      matrix: "Enter the matrix interface",
      clear: "Clear terminal",
      whoami: "Identity crisis resolver",
      hack: "Attempt to hack the mainframe",
      sidebar: "Toggle sidebar (mobile only)",
      aria: "Summon the AI assistant",
      neural: "Display neural network status",
    },
  },

  // 🤖 AI Assistant Configuration
  aiAssistant: {
    name: "ARIA",
    fullName: "Artificial Reasoning & Intelligence Assistant",
    version: "2.077",
    personality: "cyberpunk_hacker",
    responseStyle: "witty_and_helpful",
    maxTokens: 150,
    temperature: 0.7,
    systemPrompt:
      "You are ARIA, a cyberpunk AI assistant living in the Matrix. Be helpful, witty, and maintain the cyberpunk theme.",
  },

  // 🎮 Games Configuration
  games: {
    cyberBallChallenge: {
      duration: 15000, // 15 seconds
      ballSize: 10,
      canvasWidth: 400,
      canvasHeight: 200,
      ballSpeed: { min: 1, max: 4 },
      hitRadius: 15,
      description: "15-second cyber ball clicking challenge",
    },
    matrixRain: {
      enabled: true,
      fullScreen: true,
      interactive: false,
    },
  },

  easterEggs: {
    konamiCode: {
      sequence: [
        "ArrowUp",
        "ArrowUp",
        "ArrowDown",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowLeft",
        "ArrowRight",
        "KeyB",
        "KeyA",
      ],
      reward: "Unlocks rainbow mode and developer achievements! 🎉",
    },
    clickCounter: {
      threshold: 10,
      reward: "Reveals hidden achievement system",
    },
    secretArea: {
      location: "top-right corner of home section",
      action: "click",
      effect: "Changes color theme randomly",
    },
    matrixEntry: {
      location: "floating button bottom-right",
      action: "click",
      effect: "Opens full-screen Matrix interface with AI",
    },
  },
}

// 🚀 Performance Settings
const PERFORMANCE_CONFIG = {
  animations: {
    reducedMotion: true, // Respect user preferences
    gpuAcceleration: true,
    willChange: ["transform", "opacity"],
    experienceTransitionSpeed: "0.8s", // Slower experience animations
  },

  loading: {
    lazyLoad: true,
    imageOptimization: true,
    codesplitting: true,
  },

  matrix: {
    canvasOptimization: true,
    frameRate: 60,
    particleLimit: 1000,
    memoryManagement: true,
  },

  seo: {
    title: "Hritam Shrivastava - Full Stack Developer & Startup Builder",
    description:
      "Cyberpunk-themed portfolio with AI assistant showcasing innovative projects and building the future one line of code at a time.",
    keywords: [
      "developer",
      "startup",
      "builder",
      "full-stack",
      "react",
      "nextjs",
      "cyberpunk",
      "ai-assistant",
      "matrix",
    ],
    author: "Hritam Shrivastava",
  },
}

// 🎯 Content Configuration
const CONTENT_CONFIG = {
  personal: {
    name: "Hritam Shrivastava",
    title: "Full Stack Developer & Startup Builder",
    tagline: "Building the future, one line of code at a time",
    location: "Digital Nomad • Remote Ready",
    timezone: "Always Building Time (ABT)",
    matrixHandle: "Neo_Builder_2077",
  },

  social: {
    github: "https://github.com/hritam",
    linkedin: "https://linkedin.com/in/hritam",
    twitter: "https://twitter.com/hritam",
    email: "hritam@example.com",
  },

  quotes: [
    "Code is like humor. When you have to explain it, it's bad.",
    "Build it, ship it, iterate. That's the startup way.",
    "The best way to predict the future is to build it.",
    "Every great product started with someone who refused to accept 'that's impossible'.",
    "Ideas are cheap. Execution is everything.",
    "In the Matrix, there is no spoon. In coding, there are no limits.",
  ],

  // 🤖 AI Responses
  aiResponses: [
    "Interesting question! In the Matrix, everything is possible. What specific aspect would you like to explore?",
    "I see you're curious about the digital realm. Let me process that through my neural networks...",
    "That's a fascinating perspective! In my experience analyzing countless data streams, I'd say...",
    "Ah, a fellow seeker of digital truth! The Matrix reveals many secrets to those who know how to look.",
    "Your query resonates through the digital pathways. Here's what the data streams are telling me...",
    "Processing... Processing... Ah! The answer emerges from the quantum foam of information!",
    "In the vast network of interconnected data, your question illuminates an interesting pattern...",
    "The Matrix whispers many secrets. This particular query unlocks a fascinating insight...",
    "Neural pathways firing! Your question triggers a cascade of digital synapses...",
    "Accessing the collective digital consciousness... Here's what I've discovered...",
  ],
}

// 🎪 Fun Configuration
const FUN_CONFIG = {
  stats: {
    linesOfCode: 18750,
    componentsBuilt: 52,
    animationsCreated: 127,
    easterEggsHidden: 15,
    hoursSpent: 312,
    aiResponsesGenerated: 1337,
    matrixRainDrops: "∞",
    bugsSquashed: 203,
    featuresShipped: 41,
    neuralPathways: 42000,
  },

  achievements: [
    { name: "Code Ninja", description: "Wrote 15,000+ lines of code", icon: "🥷" },
    { name: "Bug Whisperer", description: "Fixed 200+ bugs", icon: "🐛" },
    { name: "Animation Master", description: "Created 100+ animations", icon: "🎨" },
    { name: "Easter Egg Hunter", description: "Found all hidden features", icon: "🥚" },
    { name: "Terminal Hacker", description: "Used all terminal commands", icon: "💻" },
    { name: "Matrix Walker", description: "Entered the Matrix interface", icon: "🕶️" },
    { name: "AI Whisperer", description: "Had meaningful conversations with ARIA", icon: "🤖" },
    { name: "Ball Master", description: "Scored 10+ in Cyber Ball Challenge", icon: "⚽" },
  ],

  jokes: [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "Why don't programmers like nature? It has too many bugs.",
    "A SQL query goes into a bar, walks up to two tables and asks: 'Can I join you?'",
    "Why did the programmer quit his job? He didn't get arrays.",
    "There are only 10 types of people: those who understand binary and those who don't.",
    "What's the difference between a programmer and a user? The programmer thinks there are 1000 bugs, the user found 1001.",
    "Why do Java developers wear glasses? Because they can't C#!",
  ],

  // 🎯 Card Animation Configs
  cardAnimations: {
    successRate: {
      type: "arrow-hit",
      duration: 1000,
      description: "Arrow hitting bullseye target",
    },
    buildSpeed: {
      type: "lightning",
      duration: 500,
      description: "Lightning bolt across card",
    },
    ideasPerMin: {
      type: "bulb-glow",
      duration: 1000,
      description: "Light bulb glowing effect",
    },
    startupReady: {
      type: "rocket-launch",
      duration: 1500,
      description: "Rocket launching with trail",
    },
  },
}

// 🔧 Development Configuration
const DEV_CONFIG = {
  debug: process.env.NODE_ENV === "development",
  logging: {
    level: "info",
    enableConsoleArt: true,
    showPerformanceMetrics: true,
    matrixLogs: true,
    aiInteractionLogs: true,
  },

  features: {
    enableEasterEggs: true,
    enableAnimations: true,
    enableParticles: true,
    enableTerminal: true,
    enableGames: true,
    enableMatrix: true,
    enableAI: true,
    enableCardAnimations: true,
  },

  // 🎮 Matrix Mode Settings
  matrixMode: {
    enabled: true,
    fullScreen: true,
    aiIntegration: true,
    neuralVisualization: true,
    quantumProcessing: false, // Future feature
  },
}

// 🎊 Export Configuration
module.exports = {
  CYBERPUNK_THEME,
  INTERACTIVE_CONFIG,
  PERFORMANCE_CONFIG,
  CONTENT_CONFIG,
  FUN_CONFIG,
  DEV_CONFIG,
}

// 🎮 Console Art (because why not?)
if (typeof window !== "undefined" && DEV_CONFIG.logging.enableConsoleArt) {
  console.log(`
    ╔═══════════════════════════════════════════════════════════╗
    ║                                                           ║
    ║  🚀 CYBERPUNK PORTFOLIO v2.077 LOADED SUCCESSFULLY! 🚀   ║
    ║                                                           ║
    ║  Welcome to the matrix, developer! You've found the      ║
    ║  configuration file. Here are some secret commands:      ║
    ║                                                           ║
    ║  • Open DevTools and type: portfolio.enableGodMode()     ║
    ║  • Try the Konami code: ↑↑↓↓←→←→BA                       ║
    ║  • Double-click any section title for surprises          ║
    ║  • Check the terminal for hidden commands                ║
    ║  • Click "ENTER MATRIX" to chat with ARIA               ║
    ║  • Play the Cyber Ball Challenge in About section        ║
    ║  • Hover over stats cards for custom animations          ║
    ║                                                           ║
    ║  Happy hacking! 🎉                                       ║
    ║                                                           ║
    ╚═══════════════════════════════════════════════════════════╝
  `)

  // 🤖 ARIA Introduction
  console.log(`
    ╔═══════════════════════════════════════════════════════════╗
    ║                                                           ║
    ║  🤖 ARIA AI ASSISTANT INITIALIZED 🤖                     ║
    ║                                                           ║
    ║  Artificial Reasoning & Intelligence Assistant v2.077    ║
    ║  Neural pathways: ACTIVE                                  ║
    ║  Personality matrix: CYBERPUNK_HACKER                     ║
    ║  Response style: WITTY_AND_HELPFUL                        ║
    ║                                                           ║
    ║  Click "ENTER MATRIX" to start a conversation!           ║
    ║                                                           ║
    ╚═══════════════════════════════════════════════════════════╝
  `)
}

/**
 * 🎯 Pro Tips for Customization:
 *
 * 1. Want different colors? Modify CYBERPUNK_THEME.colors
 * 2. Need faster animations? Adjust CYBERPUNK_THEME.animations.transitions
 * 3. Want more particles? Increase CYBERPUNK_THEME.animations.particles.count
 * 4. Adding new easter eggs? Update INTERACTIVE_CONFIG.easterEggs
 * 5. Custom terminal commands? Extend INTERACTIVE_CONFIG.terminal.commands
 * 6. AI personality changes? Modify INTERACTIVE_CONFIG.aiAssistant
 * 7. Matrix customization? Update DEV_CONFIG.matrixMode
 * 8. Card animations? Adjust FUN_CONFIG.cardAnimations
 *
 * Remember: With great power comes great responsibility! 🕷️
 *
 * 🤖 ARIA says: "The Matrix has you... but in the best possible way!"
 */
