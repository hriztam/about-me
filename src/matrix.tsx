"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Send, Zap, Brain, Code, Cpu, ArrowLeft } from "lucide-react"

interface MatrixProps {
  isOpen: boolean
  onClose: () => void
}

interface Message {
  id: string
  text: string
  sender: "user" | "ai"
  timestamp: Date
}

export function Matrix({ isOpen, onClose }: MatrixProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Welcome to the Matrix, Neo... I mean, visitor! I'm ARIA (Artificial Reasoning & Intelligence Assistant). How can I help you navigate this digital realm?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Matrix rain effect
  useEffect(() => {
    if (!isOpen || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const matrixChars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops: number[] = []

    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#00ff00"
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 35)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [isOpen])

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(
      () => {
        const aiResponses = [
          "Interesting question! In the Matrix, everything is possible. What specific aspect would you like to explore?",
          "I see you're curious about the digital realm. Let me process that through my neural networks...",
          "That's a fascinating perspective! In my experience analyzing countless data streams, I'd say...",
          "Ah, a fellow seeker of digital truth! The Matrix reveals many secrets to those who know how to look.",
          "Your query resonates through the digital pathways. Here's what the data streams are telling me...",
          "Processing... Processing... Ah! The answer emerges from the quantum foam of information!",
          "In the vast network of interconnected data, your question illuminates an interesting pattern...",
          "The Matrix whispers many secrets. This particular query unlocks a fascinating insight...",
        ]

        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
          sender: "ai",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, aiMessage])
        setIsTyping(false)
      },
      1500 + Math.random() * 1000,
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] bg-black">
      {/* Matrix Rain Background */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />

      {/* Matrix Interface */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header - Fixed positioning to avoid overlap */}
        <div className="flex items-center justify-between p-4 border-b border-green-400/30 bg-black/90 backdrop-blur-sm relative z-50">
          <div className="flex items-center space-x-4">
            <button
              onClick={onClose}
              className="p-2 text-green-400 hover:bg-green-400/20 rounded transition-colors duration-200 flex items-center space-x-2"
            >
              <ArrowLeft size={20} />
              <span className="text-sm">EXIT</span>
            </button>

            <div className="flex items-center space-x-2">
              <Brain className="w-6 h-6 text-green-400 animate-pulse" />
              <h1 className="text-green-400 font-mono text-xl font-bold">MATRIX_INTERFACE.EXE</h1>
            </div>
            <div className="text-green-300 text-sm animate-pulse">[NEURAL_LINK_ESTABLISHED]</div>
          </div>
        </div>

        {/* Under Construction Banner */}
        <div className="bg-yellow-400/20 border-b border-yellow-400/30 p-2 text-center">
          <div className="flex items-center justify-center space-x-2">
            <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-yellow-400 text-sm font-mono">UNDER CONSTRUCTION - AI CAPABILITIES EXPANDING</span>
            <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
          </div>
        </div>

        {/* AI Status Bar */}
        <div className="p-3 bg-black/60 border-b border-green-400/20 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Cpu className="w-4 h-4 text-cyan-400 animate-spin" />
              <span className="text-cyan-400 text-sm font-mono">ARIA v2.077</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 text-xs">NEURAL_PATHWAYS_ACTIVE</span>
            </div>
          </div>
          <div className="text-green-400 text-xs font-mono">COGNITIVE_LOAD: {Math.floor(Math.random() * 30 + 70)}%</div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.sender === "user"
                    ? "bg-cyan-400/20 border border-cyan-400/30 text-cyan-100"
                    : "bg-green-400/20 border border-green-400/30 text-green-100"
                }`}
              >
                <div className="flex items-center space-x-2 mb-1">
                  {message.sender === "ai" ? (
                    <Brain className="w-4 h-4 text-green-400" />
                  ) : (
                    <Code className="w-4 h-4 text-cyan-400" />
                  )}
                  <span className="text-xs font-mono opacity-70">{message.sender === "ai" ? "ARIA" : "USER"}</span>
                  <span className="text-xs opacity-50">{message.timestamp.toLocaleTimeString()}</span>
                </div>
                <p className="text-sm font-mono leading-relaxed">{message.text}</p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-green-400/20 border border-green-400/30 text-green-100 px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Brain className="w-4 h-4 text-green-400 animate-pulse" />
                  <span className="text-xs font-mono opacity-70">ARIA</span>
                </div>
                <div className="flex items-center space-x-1 mt-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <span className="text-xs font-mono ml-2">Processing neural pathways...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-green-400/30 bg-black/80 backdrop-blur-sm">
          <div className="flex items-center space-x-2">
            <div className="flex-1 relative">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter your query into the Matrix..."
                className="w-full p-3 bg-black/50 border border-green-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-green-300 placeholder-gray-500 font-mono text-sm resize-none"
                rows={2}
              />
              <div className="absolute bottom-2 right-2 text-xs text-gray-500 font-mono">Press Enter to send</div>
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isTyping}
              className="p-3 bg-green-400/20 border border-green-400 text-green-400 hover:bg-green-400/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-lg"
            >
              <Send size={20} />
            </button>
          </div>
        </div>

        {/* Matrix Stats */}
        <div className="p-2 bg-black/90 border-t border-green-400/20 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center space-x-4">
            <span className="text-green-400">MATRIX_UPTIME: 99.97%</span>
            <span className="text-cyan-400">NEURAL_SYNC: OPTIMAL</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="w-3 h-3 text-yellow-400 animate-pulse" />
            <span className="text-yellow-400">QUANTUM_PROCESSING_ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Glitch Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-green-400 opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-0 w-full h-px bg-cyan-400 opacity-20 animate-pulse"></div>
      </div>
    </div>
  )
}
