import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Full Stack Developer specializing in MERN stack and WordPress development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm md:text-base">
              {['Home', 'About', 'Skills', 'Projects', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/zada-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sohaib-mehmood-5746b3379"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:sohaibmehmood0067@email.com"
                className="p-3 bg-gray-900 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Text */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex flex-col md:flex-row items-center justify-center gap-2 text-sm md:text-base">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Sohaib © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;