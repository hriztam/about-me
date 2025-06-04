export function ExperienceSection() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Grey Scientific Labs",
      period: "October 2024 - April 2025",
      description: "Building the future one line of code at a time.",
      achievements: [
        "Reduced loading times by 300% (users now blink and miss it)",
        "Mentored 5 junior developers (they can now center a div)",
        "Implemented CI/CD pipeline (robots now deploy our code)",
        "Survived 47 production deployments on Fridays",
      ],
      tech: ["ReactJS", "TypeScript", "Redux", "TailwindCSS", "Sanity"],
      color: "cyan",
    },
    {
      title: "Frontend Developer",
      company: "Bitfumes Webnologies",
      period: "March 2024 - August 2024",
      description:
        "Wore multiple hats (literally and figuratively), built MVPs faster than you can say 'pivot', and learned that 'it works on my machine' isn't a valid deployment strategy.",
      achievements: [
        "Built 3 MVPs from scratch (2 are still alive)",
        "Mastered the art of feature flags (toggle all the things!)",
        "Optimized database queries (goodbye N+1 problems)",
        "Became fluent in startup buzzword bingo",
      ],
      tech: ["React", "NodeJS", "MongoDB", "Docker"],
      color: "green",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: "border-cyan-400/30 text-cyan-400",
      green: "border-green-400/30 text-green-400",
      pink: "border-pink-400/30 text-pink-400",
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="text-cyan-400 text-sm mb-4">
        {"// experience_log.tsx"}
      </div>

      <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
        Career Journey
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`border ${getColorClasses(
              exp.color
            )} bg-black/20 p-8 rounded-lg backdrop-blur-sm`}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-green-400 mb-2">
                  {exp.title}
                </h3>
                <div className="text-lg text-cyan-400 mb-2">{exp.company}</div>
              </div>
              <div
                className={`text-sm font-mono px-3 py-1 rounded border ${getColorClasses(
                  exp.color
                )} bg-black/30`}
              >
                {exp.period}
              </div>
            </div>

            <p className="text-green-300 mb-6 italic">
              {"// "}
              {exp.description}
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-pink-400 mb-3">
                Key Achievements:
              </h4>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-400 mr-2">▶</span>
                    <span className="text-green-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-yellow-400 mb-3">
                Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm border border-cyan-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fun Timeline Stats */}
      <div className="mt-12 border border-purple-400/30 bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-purple-400 mb-4">
          Career Stats Dashboard
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">1+</div>
            <div className="text-sm text-green-400">Years Coding</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">∞</div>
            <div className="text-sm text-cyan-400">Problems Solved</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-400">42</div>
            <div className="text-sm text-yellow-400">Technologies Learned</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">100%</div>
            <div className="text-sm text-pink-400">Passion Level</div>
          </div>
        </div>
      </div>
    </div>
  );
}
