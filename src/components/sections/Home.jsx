export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-black text-center px-4"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
          Hi, I'm Judy Phan!
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I'm a master’s student in Computer Science at UT Dallas and a former
          mechanical engineer, passionate about building AI-powered, full-stack
          solutions. I'm currently seeking internship opportunities to gain
          hands-on experience and drive real-world impact through technology.
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            View Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1RupQzU0NgVDQ8xamu_32XekdgLAdTzAL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500/10 flex items-center gap-2"
          >
            Resume
            <i className="fas fa-download"></i>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/judyphantx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/judyphantx/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 text-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:judy.phan@utdallas.edu"
            className="text-gray-400 hover:text-purple-400 text-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            aria-label="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
