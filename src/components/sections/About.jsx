export const About = () => {
  const frontendSkills = [
    "React",
    "TailwindCSS",
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Figma",
  ];

  const backendSkills = ["Python", "C/C++", "MongoDB", "Postman", "Git/GitHub"];

  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            I'm an aspiring full-stack software developer with a passion for
            turning complex ideas into clean, impactful code. I love working
            across the stack, building intuitive user experiences, and exploring
            emerging technologies like AI and machine learning. When I'm not
            coding, you'll find me at hackathons, learning as much as I can
            while transitioning into tech and growing through hands-on,
            collaborative projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech) => (
                  <span
                    key={tech}
                    className="bg-purple-500/10 text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border border-gray-700 bg-gray-900/30 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 p-4 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">☄️</span>
                  <div>
                    <h4 className="font-semibold text-white text-lg">
                      M.S. in Computer Science
                    </h4>
                    <p className="text-blue-400 text-sm">
                      The University of Texas at Dallas
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Present - May 2027</span>
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                    In Progress
                  </span>
                </div>
                <p className="text-gray-300 text-xs mt-2 leading-relaxed">
                  Algorithm Analysis, Data Structures, Operating Systems
                  Concepts
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-violet-600/10 p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🦇</span>
                  <div>
                    <h4 className="font-semibold text-white text-lg">
                      A.S. in Computer Science
                    </h4>
                    <p className="text-purple-400 text-sm">
                      Austin Community College
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">January 2024 - May 2025</span>
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                    Completed
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs">
                    4.0 GPA
                  </span>
                  <span className="bg-amber-500/20 text-amber-300 px-2 py-1 rounded-full text-xs">
                    Chancellor's Honor Roll
                  </span>
                </div>
                <p className="text-gray-300 text-xs mt-2 leading-relaxed">
                  Programming I, Programming II, Computer Organization/Machine
                  Language, Data Structures and Algorithms
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 p-4 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🌈</span>
                  <div>
                    <h4 className="font-semibold text-white text-lg">
                      B.S. in Mechanical Engineering
                    </h4>
                    <p className="text-green-400 text-sm">
                      The University of Hawaii at Manoa
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">August 2016 - December 2020</span>
                  <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs">
                    Completed
                  </span>
                </div>
                <p className="text-gray-300 text-xs mt-2 leading-relaxed">
                  Programming for Engineers, Computational Physics, Senior Design Project: Autonomous Surface Vehicle
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-gray-700 bg-gray-900/30 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-orange-500/10 to-amber-600/10 p-4 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl mt-1">🏗️</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-lg mb-1">
                      MEP Property Conditions Engineer
                    </h4>
                    <p className="text-orange-400 text-sm mb-2">
                      July 2023 - Present
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded-full text-xs">
                        Currently Employed
                      </span>
                      <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                        Engineering
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  Led site surveys and documented 600+ MEP (Mechanical,
                  Electrical, and Plumbing) assets across 100+ commercial
                  properties, including international projects for Fortune 500
                  clients, hospitals, and religious organizations.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 text-xs mt-1">▶</span>
                    <p className="text-gray-300 text-xs">
                      <span className="text-green-400 font-semibold">
                        Improved field data accuracy by 30%
                      </span>{" "}
                      by designing custom forms and logic in ArcGIS Survey123
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 text-xs mt-1">▶</span>
                    <p className="text-gray-300 text-xs">
                      <span className="text-blue-400 font-semibold">
                        Boosted team productivity by 40%
                      </span>{" "}
                      by training interns and new hires on technical workflows
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 text-xs mt-1">▶</span>
                    <p className="text-gray-300 text-xs">
                      Enhanced large-scale data collection workflows for
                      enterprise clients
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                    ArcGIS Survey123
                  </span>
                  <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                    Data Collection
                  </span>
                  <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                    Team Training
                  </span>
                  <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                    Process Improvement
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-500/10 to-gray-600/10 p-4 rounded-lg border border-gray-500/20 hover:border-gray-500/40 transition-all">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💼</span>
                  <div>
                    <h4 className="font-semibold text-white text-lg">
                      Seeking Software Development Opportunities
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Looking for internships and entry-level positions to
                      transition into tech
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
