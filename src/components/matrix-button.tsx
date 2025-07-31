"use client"

import { useState } from "react"
import { Matrix } from "@/src/matrix"
import { Brain, Zap } from "lucide-react"

export function MatrixButton() {
  const [isMatrixOpen, setIsMatrixOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsMatrixOpen(true)}
        className="fixed bottom-6 right-6 z-50 group bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black font-bold py-3 px-6 rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
        style={{
          animation: "subtle-glow 3s ease-in-out infinite alternate",
        }}
      >
        <div className="flex items-center space-x-2">
          <Brain className="w-5 h-5 group-hover:animate-spin" />
          <span className="hidden sm:inline">ENTER MATRIX</span>
          <Zap className="w-4 h-4 group-hover:animate-bounce" />
        </div>
      </button>

      <Matrix isOpen={isMatrixOpen} onClose={() => setIsMatrixOpen(false)} />

      <style jsx>{`
        @keyframes subtle-glow {
          0% { box-shadow: 0 0 5px rgba(0, 255, 255, 0.3); }
          100% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.4); }
        }
      `}</style>
    </>
  )
}
