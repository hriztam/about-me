"use client"

import { useEffect, useState } from "react"

const KONAMI_CODE = [
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
]

export function KonamiCode() {
  const [sequence, setSequence] = useState<string[]>([])
  const [activated, setActivated] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (activated) return

      const newSequence = [...sequence, event.code].slice(-KONAMI_CODE.length)
      setSequence(newSequence)

      if (newSequence.length === KONAMI_CODE.length && newSequence.every((key, index) => key === KONAMI_CODE[index])) {
        setActivated(true)

        // Easter egg activation!
        document.body.style.animation = "rainbow 2s infinite"

        // Show achievement
        const achievement = document.createElement("div")
        achievement.innerHTML = `
          <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #ff00ff, #00ffff);
            color: white;
            padding: 20px;
            border-radius: 10px;
            font-family: monospace;
            font-size: 18px;
            z-index: 9999;
            text-align: center;
            box-shadow: 0 0 30px rgba(255, 0, 255, 0.5);
          ">
            🎉 KONAMI CODE ACTIVATED! 🎉<br>
            <small>You've unlocked developer mode!</small>
          </div>
        `
        document.body.appendChild(achievement)

        setTimeout(() => {
          document.body.removeChild(achievement)
          document.body.style.animation = ""
        }, 3000)

        // Add rainbow animation to CSS
        const style = document.createElement("style")
        style.textContent = `
          @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
          }
        `
        document.head.appendChild(style)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [sequence, activated])

  return null
}
