
'use client';

import Link from 'next/link';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-transparent text-white py-12 border-t border-white/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-rainbow mb-4">Dipyaman Das</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Electronics & Instrumentation Engineer passionate about creating innovative solutions 
              with modern technologies. Always excited to take on new challenges and collaborate 
              on meaningful projects.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com/in/dipyamandas"
                target="_blank"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <i className="ri-linkedin-fill"></i>
              </Link>
              <Link
                href="https://github.com/papaicr7"
                target="_blank"
                className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <i className="ri-github-fill"></i>
              </Link>
              <Link
                href="mailto:dipyamandas96@gmail.com"
                className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <i className="ri-mail-fill"></i>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Projects
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <i className="ri-phone-line mr-2"></i>
                <span>+91 8013500912</span>
              </div>
              <div className="flex items-center text-gray-300">
                <i className="ri-mail-line mr-2"></i>
                <span>dipyamandas96@gmail.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <i className="ri-map-pin-line mr-2 mt-1"></i>
                <span>Hooghly, West Bengal, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-300" suppressHydrationWarning={true}>
            © 2025 Dipyaman Das. All rights reserved. Built with passion and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
