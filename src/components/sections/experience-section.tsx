export function ExperienceSection() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Grey Scientific Labs",
      period: "October 2024 - April 2025",
      description:
        "As a Front-end Developer Intern at Grey Scientific Labs, I enhanced app performance, implemented real-time features, and contributed to key system functionalities including admin controls and API integrations.",
      achievements: [
        "Refactored components and routing logic, resulting in a 25% faster app load and navigation.",
        "Developed custom axios-based API handlers, improving code readability and maintainability by 40%",
        "Implemented a multi-role group chat feature using WebSockets for real-time communication",
        "Built permissions and control panels, enabling user role management and system-level access control.",
      ],
      tech: ["NextJS", "ReactJS", "TypeScript", "Redux", "TailwindCSS"],
      color: "cyan",
    },
    {
      title: "Frontend Developer",
      company: "Bitfumes Webnologies",
      period: "March 2024 - August 2024",
      description:
        "As a Front-end Developer Intern at Bitfumes, I played a key role in building and refining interactive web interfaces, focusing on scheduling tools and seamless data integration using React and TypeScript.",
      achievements: [
        "Collaborated with design and backend teams for smooth UI/UX implementation",
        "Integrated APIs to fetch and display real-time data",
        "Participated in code reviews to ensure high-quality, maintainable code",
        "Contributed to scalable component development in a fast-paced team.",
      ],
      tech: ["React", "TypeScript", "Shadcn", "Bootstrap"],
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
            <div className="text-2xl font-bold text-pink-400">19</div>
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
