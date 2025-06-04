"use client";

import { useState } from "react";
import { ChevronRight, ChevronDown, File, Folder } from "lucide-react";

interface SidebarProps {
  activeFile: string;
  setActiveFile: (file: string) => void;
}

type FileItem = {
  name: string;
  type: "file" | "folder";
  icon?: string;
  children?: FileItem[];
};

export function Sidebar({ activeFile, setActiveFile }: SidebarProps) {
  const [expandedFolders, setExpandedFolders] = useState<string[]>([
    "src",
    "components",
  ]);

  const fileStructure: FileItem[] = [
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
  ];

  const toggleFolder = (folderName: string) => {
    setExpandedFolders((prev) =>
      prev.includes(folderName)
        ? prev.filter((f) => f !== folderName)
        : [...prev, folderName]
    );
  };

  const renderFileTree = (items: FileItem[], level = 0) => {
    return items.map((item, index) => (
      <div key={index} style={{ paddingLeft: `${level * 16}px` }}>
        {item.type === "folder" ? (
          <div>
            <div
              className="flex items-center py-1 px-2 hover:bg-cyan-400/10 cursor-pointer text-cyan-400"
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
            className={`flex items-center py-1 px-2 hover:bg-green-400/10 cursor-pointer text-sm ${
              activeFile === item.name
                ? "bg-green-400/20 text-green-300 border-l-2 border-green-400"
                : "text-green-400"
            }`}
            onClick={() => setActiveFile(item.name)}
          >
            <File size={16} className="mx-2" />
            <span className="mr-2">{item.icon}</span>
            <span>{item.name}</span>
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="w-80 bg-black/70 border-r border-cyan-400/30 backdrop-blur-sm">
      <div className="p-4 border-b border-cyan-400/30">
        <h2 className="text-cyan-400 font-bold text-lg">
          &gt; FILE_EXPLORER.EXE
        </h2>
        <div className="text-pink-400 text-xs mt-1 animate-pulse">
          {"// Navigate through the digital realm"}
        </div>
      </div>

      <div className="p-2">
        <div className="text-green-400 text-xs mb-2 opacity-70">
          ~/hritam-portfolio/
        </div>
        {renderFileTree(fileStructure)}
      </div>

      {/* ASCII Art */}
      <div className="absolute bottom-4 left-4 text-cyan-400/50 text-xs font-mono">
        <pre>{`
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
