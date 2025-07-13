export const Contact = () => {
  return (
    <section
      id="Contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Contact Form Section */}
        <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold mb-6 text-white text-center bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h3>
          <p className="text-gray-300 mb-8 text-center max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you! Send me a message and let's create something amazing together.
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
            <p className="text-gray-400 text-sm mb-4">Or connect with me on:</p>
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
    </section>
  );
};
