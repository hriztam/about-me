"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  Coffee,
  Zap,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleBuyCoffee = () => {
    window.open("https://buymeacoffee.com/cypherhritam", "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Message sent:", formData);
    alert(
      "Message sent! I'll get back to you faster than you can debug a null pointer exception! 🚀"
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:hritamstark05@gmail.com",
      color: "text-red-400 hover:text-red-300",
      description: "For serious business (or memes)",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/hriztam",
      color: "text-gray-400 hover:text-gray-300",
      description: "Where my code lives",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/cypher-hritam",
      color: "text-blue-400 hover:text-blue-300",
      description: "Professional networking zone",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/Cypherhritam",
      color: "text-cyan-400 hover:text-cyan-300",
      description: "Random thoughts and tech rants",
    },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="text-cyan-400 text-sm mb-4">
        {"// contact_interface.tsx"}
      </div>

      <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
        Initiate Contact Protocol
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="border border-cyan-400/30 bg-black/20 p-8 rounded-lg backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-green-400 mb-6">
            Send Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-cyan-400 mb-2"
              >
                Name // Who&apos;s reaching out?
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-black/50 border border-green-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-green-300"
                placeholder="Your awesome name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-cyan-400 mb-2"
              >
                Email // How can I reach you back?
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-black/50 border border-green-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-green-300"
                placeholder="your.email@awesome.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-cyan-400 mb-2"
              >
                Subject // What&apos;s this about?
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 bg-black/50 border border-green-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-green-300"
                placeholder="Let's build something amazing!"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-cyan-400 mb-2"
              >
                Message // Tell me everything!
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 bg-black/50 border border-green-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-green-300 resize-none"
                placeholder="Your brilliant idea, project details, or just say hi! I love hearing from fellow developers and potential collaborators."
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black font-bold py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-300"
            >
              <Send className="mr-2 h-5 w-5" />
              Launch Message
            </Button>
          </form>
        </div>

        {/* Contact Info & Social */}
        <div className="space-y-8">
          {/* Social Links */}
          <div className="border border-green-400/30 bg-black/20 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-green-400 mb-6">
              Connect With Me
            </h3>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-4 rounded-lg border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 ${link.color} group`}
                >
                  <link.icon className="w-6 h-6 mr-4" />
                  <div>
                    <div className="font-bold">{link.name}</div>
                    <div className="text-sm text-gray-400">
                      {link.description}
                    </div>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Fun Contact Stats */}
          <div className="border border-pink-400/30 bg-gradient-to-r from-pink-900/20 to-purple-900/20 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-pink-400 mb-4">
              Response Stats
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-green-400">Average Response Time:</span>
                <span className="text-cyan-400 font-mono">&lt; 24 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-400">Coffee Required:</span>
                <span className="text-yellow-400 font-mono">2-3 cups</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-400">Enthusiasm Level:</span>
                <span className="text-pink-400 font-mono">MAXIMUM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-400">
                  Collaboration Success Rate:
                </span>
                <span className="text-green-400 font-mono">99.9%</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="border border-yellow-400/30 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">
              Ready to Build Something Epic?
            </h3>
            <p className="text-green-300 mb-6">
              Whether you have a project idea, want to collaborate, or just want
              to chat about the latest tech trends, I&apos;m always excited to
              connect with fellow developers and innovators!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleBuyCoffee}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold"
              >
                <Coffee className="mr-2 h-4 w-4" />
                Buy Me Coffee
              </Button>
              <Button
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                <Zap className="mr-2 h-4 w-4" />
                Quick Chat
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ASCII Art Footer */}
      <div className="mt-12 text-center">
        <div className="text-cyan-400/50 text-xs font-mono">
          <pre>{`
    ╔══════════════════════════════════════════════════════════════╗
    ║  Thanks for visiting my digital realm! Let's create magic!   ║
    ║                                                              ║
    ║  "The best way to predict the future is to code it."         ║
    ║                                        - Hritam (probably)   ║
    ╚══════════════════════════════════════════════════════════════╝
          `}</pre>
        </div>
      </div>
    </div>
  );
}
