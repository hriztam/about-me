"use client";

import { useState } from "react";
import { ChevronRight, ChevronDown, File, Folder, X } from "lucide-react";

interface SidebarProps {
  activeFile: string;
  setActiveFile: (file: string) => void;
  onFileSelect?: () => void;
}

export function Sidebar({
  activeFile,
  setActiveFile,
  onFileSelect,
}: SidebarProps) {
  const [expandedFolders, setExpandedFolders] = useState<string[]>([
    "src",
    "components",
  ]);

  const fileStructure = [
    {
      name: "src",
      type: "folder",
      children: [
        { name: "home.tsx", type: "file", icon: "🏠" },
        { name: "about.tsx", type: "file", icon: "🤖" },
        { name: "skills.tsx", type: "file", icon: "⚡" },
        { name: "experience.tsx", type: "file", icon: "💼" },
        { name: "projects.tsx", type: "file", icon: "🚀" },
        { name: "contact.tsx", type: "file", icon: "📡" },
      ],
    },
    {
      name: "config",
      type: "folder",
      children: [{ name: "cyberpunk.config.js", type: "file", icon: "⚙️" }],
    },
    {
      name: "README.md",
      type: "file",
      icon: "📖",
    },
  ];

  const toggleFolder = (folderName: string) => {
    setExpandedFolders((prev) =>
      prev.includes(folderName)
        ? prev.filter((f) => f !== folderName)
        : [...prev, folderName]
    );
  };

  const handleFileSelect = (fileName: string) => {
    setActiveFile(fileName);
    onFileSelect?.();
  };

  const renderFileTree = (items: any[], level = 0) => {
    return items.map((item, index) => (
      <div key={index} style={{ paddingLeft: `${level * 16}px` }}>
        {item.type === "folder" ? (
          <div>
            <div
              className="flex items-center py-2 px-2 hover:bg-cyan-400/10 cursor-pointer text-cyan-400 touch-manipulation"
              onClick={() => toggleFolder(item.name)}
            >
              {expandedFolders.includes(item.name) ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
              <Folder size={16} className="mx-2" />
              <span className="text-sm">{item.name}</span>
            </div>
            {expandedFolders.includes(item.name) && item.children && (
              <div>{renderFileTree(item.children, level + 1)}</div>
            )}
          </div>
        ) : (
          <div
            className={`flex items-center py-2 px-2 hover:bg-green-400/10 cursor-pointer text-sm touch-manipulation ${
              activeFile === item.name
                ? "bg-green-400/20 text-green-300 border-l-2 border-green-400"
                : "text-green-400"
            }`}
            onClick={() => handleFileSelect(item.name)}
          >
            <File size={16} className="mx-2 flex-shrink-0" />
            <span className="mr-2 flex-shrink-0">{item.icon}</span>
            <span className="truncate">{item.name}</span>
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="w-full h-full bg-black/70 border-r border-cyan-400/30 backdrop-blur-sm flex flex-col">
      <div className="p-3 sm:p-4 border-b border-cyan-400/30 flex-shrink-0 flex items-center justify-between">
        <div>
          <h2 className="text-cyan-400 font-bold text-base sm:text-lg">
            &gt; FILE_EXPLORER.EXE
          </h2>
          <div className="text-pink-400 text-xs mt-1 animate-pulse">
            // Navigate through the digital realm
          </div>
        </div>

        {/* Mobile Close Button - Only show on mobile */}
        <button
          onClick={() => onFileSelect?.()}
          className="lg:hidden p-2 text-cyan-400 hover:bg-cyan-400/20 rounded transition-colors duration-200"
        >
          <X size={20} />
        </button>
      </div>

      <div className="p-2 flex-1 overflow-auto">
        <div className="text-green-400 text-xs mb-2 opacity-70">
          ~/hritam-portfolio/
        </div>
        {renderFileTree(fileStructure)}
      </div>

      {/* ASCII Art - Hidden on small screens */}
      <div className="hidden sm:block p-4 text-cyan-400/50 text-xs font-mono flex-shrink-0">
        <pre className="text-[10px] sm:text-xs">{`
    ╔══════════════╗
    ║   CYPHER     ║
    ║   HRITAM     ║
    ║   v2.0.77    ║
    ╚══════════════╝
        `}</pre>
      </div>
    </div>
  );
}
