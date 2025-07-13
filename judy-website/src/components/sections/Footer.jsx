export const Footer = () => {
  return (
    <footer className="bg-gray-900/50 border-t border-gray-700 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Name and tagline */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Judy Phan
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Aspiring Full-Stack Developer & Computer Science Student
            </p>
          </div>

          {/* Center - Navigation */}
          <div className="flex gap-6 mb-4 md:mb-0">
            <a
              href="#home"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Projects
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Hackathons
            </a>
            <a
              href="#Contact"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Right side - Social links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/judyphantx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-lg"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/judyphantx/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-lg"></i>
            </a>
            <a
              href="mailto:judy.phan@utdallas.edu"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="Email"
            >
              <i className="fas fa-envelope text-lg"></i>
            </a>
          </div>
        </div>

        {/* Bottom section - Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Judy Phan. Built with React & Tailwind
            CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
