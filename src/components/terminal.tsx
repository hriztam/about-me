"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";

export function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Welcome to HRITAM_OS v2.077 - Cyberpunk Edition",
    "Type 'help' for available commands",
    "// Warning: This terminal may cause excessive awesomeness",
    "",
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    help: () => [
      "Available commands:",
      "  help     - Show this help message",
      "  about    - Learn about the legendary Hritam",
      "  skills   - Display coding superpowers",
      "  joke     - Get a programmer joke",
      "  matrix   - Enter the matrix (just kidding)",
      "  clear    - Clear terminal",
      "  whoami   - Identity crisis resolver",
      "  coffee   - Essential fuel status",
      "  hack     - Attempt to hack the mainframe (spoiler: you can't)",
    ],
    about: () => [
      "Hritam Shrivastava - The Code Whisperer",
      "Full Stack Developer & Digital Architect",
      "Specializes in: Making computers do impossible things",
      "Current status: Probably debugging something right now",
      "Fun fact: Can code in his sleep (literally tested this)",
    ],
    skills: () => [
      "SKILL_TREE.exe loaded successfully:",
      "├── NextJS [████████████] 95% - React but cooler",
      "├── NodeJS [███████████░] 90% - JavaScript everywhere",
      "├── Python [██████████░░] 85% - Snake charmer level",
      "└── Rust   [████████░░░░] 75% - Memory safety enthusiast",
      "",
      "Special abilities: Coffee-to-code conversion, Bug whispering",
    ],
    joke: () => {
      const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs!",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
        "Why don't programmers like nature? It has too many bugs.",
        "A SQL query goes into a bar, walks up to two tables and asks: 'Can I join you?'",
        "Why did the programmer quit his job? He didn't get arrays.",
      ];
      return [jokes[Math.floor(Math.random() * jokes.length)]];
    },
    matrix: () => [
      "Accessing the Matrix...",
      "Connection established...",
      "Just kidding! You're still in the real world.",
      "But this portfolio is pretty cool, right? 😎",
    ],
    whoami: () => [
      "You are: A visitor in the digital realm of Hritam",
      "Access level: Guest (but a welcome one!)",
      "Current location: The most awesome portfolio ever",
      "Recommendation: Hire this guy immediately",
    ],
    coffee: () => [
      "Coffee levels: ████████████ 100%",
      "Status: FULLY CAFFEINATED",
      "Warning: Optimal coding performance achieved",
      "Next refill: In 30 minutes (or when the code stops working)",
    ],
    hack: () => [
      "Initiating hack sequence...",
      "Bypassing firewall... [FAILED]",
      "Trying backdoor... [ACCESS DENIED]",
      "Attempting social engineering... [NICE TRY]",
      "",
      "Error: This system is protected by superior coding skills",
      "Suggestion: Try hiring the developer instead 😏",
    ],
    clear: () => {
      setHistory([]);
      return [];
    },
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const output = commands[trimmedCmd as keyof typeof commands]?.() || [
      `Command '${cmd}' not found.`,
      "Type 'help' for available commands.",
      "// Did you try turning it off and on again?",
    ];

    setHistory((prev) => [...prev, `> ${cmd}`, ...output, ""]);
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="h-full bg-black/90 p-4 font-mono text-sm overflow-auto">
      <div className="mb-4">
        {history.map((line, index) => (
          <div
            key={index}
            className={`${
              line.startsWith(">") ? "text-cyan-400" : "text-green-400"
            } ${
              line.includes("Error") || line.includes("FAILED")
                ? "text-red-400"
                : ""
            }`}
          >
            {line}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center">
        <span className="text-cyan-400 mr-2">hritam@cyberpunk:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-green-400 outline-none border-none"
          placeholder="Enter command..."
        />
        <div className="w-2 h-4 bg-green-400 animate-pulse ml-1" />
      </form>
    </div>
  );
}
