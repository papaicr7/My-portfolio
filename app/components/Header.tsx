
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'experience', 'education', 'skills', 'projects', 'certificates', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-white hover:text-gray-300 transition-colors duration-300"
          >
            Dipyaman Das
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-gray-300'
                    : 'text-white hover:text-gray-300'
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="text-white hover:text-gray-300 transition-colors duration-300 mr-4"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button className="text-white hover:text-gray-300 transition-colors duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <i className="ri-menu-line text-xl"></i>
            </button>
          </div>
        </div>
      </nav>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-sm shadow-lg rounded-lg mt-2 border border-white/20">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="block px-3 py-2 text-white hover:text-gray-300 transition-colors duration-300"
              onClick={() => {
                scrollToSection(item.id);
                setIsMenuOpen(false);
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
