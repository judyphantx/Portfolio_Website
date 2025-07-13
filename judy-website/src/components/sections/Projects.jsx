export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing my projects and skills, built with React and styled with Tailwind CSS.",
      technologies: ["React", "Vite", "TailwindCSS"],
      emoji: "💼",
      status: "Completed",
      highlights: ["Responsive design", "Modern animations", "Clean UI/UX"],
      github: "https://github.com/judyphantx/Portfolio_Website",
    },
  ];

  const hackathons = [
    {
      id: 1,
      name: "AI Hackathon",
      date: "June 2025",
      location: "The Unviversity of California at Berkeley",
      projectTitle: "Guardian-Real-Time AI Voice Assistant for Personal Safety",
      achievement: "Participant",
      technologies: [
        "Typescript",
        "Vapi",
        "Expo.io",
        "Express.js",
        "Google Maps API",
        "MongoDB",
        "React",
        "React-Native",
      ],
      devpost: "https://devpost.com/software/guardian-lw1gmt",
    },
    {
      id: 2,
      name: "WeHack",
      date: "March 2025",
      location: "The University of Texas at Dallas",
      projectTitle: "VibeCheck - AI Stock Analysis",
      achievement: "Participant",
      technologies: ["Python", "Flask", "Gemini API", "Figma", "HTML"],
      devpost: "https://devpost.com/software/vibecheck-bhcoyf",
    },
    {
      id: 3,
      name: "CodeQuantum",
      date: "March 2025",
      location: "The University of Texas at San Antonio",
      projectTitle: "Mad Dash to Wonderland",
      achievement: "Best in Theme",
      technologies: ["Python", "Pygame"],
      devpost: "https://devpost.com/software/mad-dash-to-wonderland",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:-translate-y-2 transition-all duration-300 hover:border-blue-500/40"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{project.emoji}</span>
                <div>
                  <h3 className="font-semibold text-white text-xl">
                    {project.title}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-300"
                        : "bg-blue-500/20 text-blue-300"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-2 mb-4">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-blue-400 text-xs mt-1">▶</span>
                    <p className="text-gray-300 text-xs">{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white py-2 px-4 rounded-lg text-sm transition-all border border-gray-600/50 hover:border-gray-500"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Hackathons Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent text-center">
            Hackathons & Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {hackathons.map((hackathon) => (
              <div
                key={hackathon.id}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-lg p-3 border border-purple-500/20 hover:-translate-y-1 transition-all duration-300 hover:border-purple-500/40"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div>
                      <h3 className="font-semibold text-white text-sm">
                        {hackathon.name}
                      </h3>
                      <p className="text-purple-400 text-xs">
                        {hackathon.date}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      hackathon.achievement.includes("Winner") ||
                      hackathon.achievement.includes("Best") ||
                      hackathon.achievement.includes("Top")
                        ? "bg-yellow-500/20 text-yellow-300"
                        : "bg-purple-500/20 text-purple-300"
                    }`}
                  >
                    {hackathon.achievement}
                  </span>
                </div>

                <h4 className="text-white text-sm font-medium mb-1">
                  {hackathon.projectTitle}
                </h4>
                <p className="text-gray-400 text-xs mb-2">
                  📍 {hackathon.location}
                </p>

                <div className="flex flex-wrap gap-1 mb-2">
                  {hackathon.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-500/10 text-purple-400 py-0.5 px-1.5 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center">
                  <a
                    href={hackathon.devpost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 py-1 px-3 rounded text-xs transition-all border border-blue-500/30 hover:border-blue-500/50"
                  >
                    View on Devpost
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div id="Contact" className="mt-16">
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-white text-center bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h3>
            <p className="text-gray-300 mb-8 text-center max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear
              from you! Send me a message and let's create something amazing
              together.
            </p>

            <form className="max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-vertical"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-700 text-center">
              <p className="text-gray-400 text-sm mb-4">
                Or connect with me on:
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/judyphantx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-all border border-gray-600/50 hover:border-gray-500 text-sm"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/judyphantx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 px-4 py-2 rounded-lg transition-all border border-blue-600/30 hover:border-blue-600/50 text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:judy.phan@utdallas.edu"
                  className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 hover:text-purple-300 px-4 py-2 rounded-lg transition-all border border-purple-500/30 hover:border-purple-500/50 text-sm"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
