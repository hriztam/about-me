"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  Rocket,
  Zap,
  MapPin,
  Clock,
  Coffee,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Message sent:", formData);
    alert(
      "Message sent! I'll get back to you faster than you can deploy to production! 🚀"
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

  const handleBuyCoffee = () => {
    window.open("https://buymeacoffee.com/cypherhritam", "_blank");
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
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-cyan-400 text-xs sm:text-sm mb-4">
          // contact_interface.tsx
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
          Initiate Contact Protocol
        </h2>

        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="border border-purple-400/30 bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-6 sm:p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-purple-400 mb-4">
              Ready to Build Something Epic?
            </h3>
            <p className="text-green-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
              Whether you have a groundbreaking startup idea, want to
              collaborate on the next unicorn, or just want to chat about the
              latest tech trends, I'm always excited to connect with fellow
              builders and innovators!
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="border border-cyan-400/30 bg-black/20 p-6 sm:p-8 rounded-lg backdrop-blur-sm h-full">
              <div className="flex items-center mb-6">
                <Send className="w-6 h-6 text-cyan-400 mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-green-400">
                  Send Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-cyan-400 mb-2"
                    >
                      <span className="text-pink-400">//</span> Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-4 bg-black/50 border border-green-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-green-300 placeholder-gray-500 transition-all duration-300"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-cyan-400 mb-2"
                    >
                      <span className="text-pink-400">//</span> Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-4 bg-black/50 border border-green-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-green-300 placeholder-gray-500 transition-all duration-300"
                      placeholder="john@awesome.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-cyan-400 mb-2"
                  >
                    <span className="text-pink-400">//</span> Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-4 bg-black/50 border border-green-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-green-300 placeholder-gray-500 transition-all duration-300"
                    placeholder="Let's build something amazing together!"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-cyan-400 mb-2"
                  >
                    <span className="text-pink-400">//</span> Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-4 bg-black/50 border border-green-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-green-300 resize-none placeholder-gray-500 transition-all duration-300"
                    placeholder="Tell me about your project, startup idea, or just say hi! I love hearing from fellow builders and potential co-founders. The more details, the better I can help you."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black font-bold py-4 px-6 rounded-lg transform hover:scale-105 transition-all duration-300 text-lg"
                >
                  <Send className="mr-3 h-5 w-5" />
                  Launch Message to Orbit
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Contact Info */}
            <div className="border border-green-400/30 bg-black/20 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Quick Connect
              </h3>

              <div className="space-y-4">
                <div className="flex items-center text-sm">
                  <MapPin className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-green-300">
                    Digital Nomad • Remote Ready
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-green-300">
                    Response Time: &lt; 24 hours
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  <Rocket className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-green-300">
                    Startup Mode: Always On 🚀
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links - Back to transparent background */}
            <div className="border border-pink-400/30 bg-black/20 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold text-pink-400 mb-4">
                Social Channels
              </h3>

              <div className="space-y-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group block ${link.color}`}
                  >
                    <div className="p-4 rounded-lg border border-gray-600/30 bg-transparent hover:border-{link.color}-500/50 hover:bg-black/20 transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center">
                        <link.icon
                          className={`w-5 h-5 text-${link.color}-400 mr-4 flex-shrink-0`}
                        />
                        <div className="flex-1 min-w-0">
                          <div
                            className={`font-bold text-${link.color}-400 text-sm`}
                          >
                            {link.name}
                          </div>
                        </div>
                        <div
                          className={`opacity-0 group-hover:opacity-100 transition-opacity text-${link.color}-400`}
                        >
                          →
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 mt-2">
                        {link.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Fun Stats */}
            <div className="border border-yellow-400/30 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-yellow-400 mb-4">
                Contact Stats
              </h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400">99.9%</div>
                  <div className="text-xs text-gray-400">Success Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400">24/7</div>
                  <div className="text-xs text-gray-400">Availability</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pink-400">∞</div>
                  <div className="text-xs text-gray-400">Ideas Welcome</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">100%</div>
                  <div className="text-xs text-gray-400">Enthusiasm</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            {/* <Button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-300">
              <Rocket className="mr-2 h-4 w-4" />
              Join My Startup
            </Button> */}
            <Button
              onClick={handleBuyCoffee}
              variant="outline"
              className="w-full sm:w-auto border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black font-bold py-3 px-6 lg:px-8 rounded-lg transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <Coffee className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              BUY_COFFEE
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black font-bold py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <Zap className="mr-2 h-4 w-4" />
              Quick Chat
            </Button>
          </div>
        </div>

        {/* ASCII Art Footer */}
        <div className="mt-16 text-center">
          <div className="text-cyan-400/50 text-xs font-mono">
            <pre className="overflow-x-auto">{`
    ╔══════════════════════════════════════════════════════════════╗
    ║  Thanks for visiting my digital realm! Let's build magic!    ║
    ║                                                              ║
    ║  "The best way to predict the future is to build it."        ║
    ║                                              - Don't know    ║
    ╚══════════════════════════════════════════════════════════════╝
            `}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
