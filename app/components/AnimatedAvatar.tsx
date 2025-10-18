
'use client';

import { useEffect, useState } from 'react';

export default function AnimatedAvatar() {
  const sectionTitles = {
    home: 'Welcome!',
    about: 'About Me',
    experience: 'My Journey',
    education: 'Learning Path',
    skills: 'Expertise',
    projects: 'My Work',
    certificates: 'Achievements',
    contact: 'Let\'s Connect!'
  };

  const [currentSection, setCurrentSection] = useState<keyof typeof sectionTitles>('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections: (keyof typeof sectionTitles)[] = ['home', 'about', 'experience', 'education', 'skills', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          
          if (scrollPosition >= elementTop && scrollPosition < elementTop + element.offsetHeight) {
            setCurrentSection(section);
            setIsVisible(true);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getAvatarPosition = () => {
    switch (currentSection) {
      case 'home':
        return { top: '20vh', left: '5%' };
      case 'about':
        return { top: '30vh', right: '5%' };
      case 'experience':
        return { top: '40vh', left: '3%' };
      case 'education':
        return { top: '50vh', right: '3%' };
      case 'skills':
        return { top: '60vh', left: '5%' };
      case 'projects':
        return { top: '70vh', right: '5%' };
      case 'certificates':
        return { top: '80vh', left: '3%' };
      case 'contact':
        return { top: '90vh', right: '3%' };
      default:
        return { top: '20vh', left: '5%' };
    }
  };

  const position = getAvatarPosition();

  if (!isVisible || currentSection === 'home') return null;

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes pointAnimation {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        
        .floating-avatar {
          animation: float 3s ease-in-out infinite;
        }
        
        .avatar-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .pointer-animation {
          animation: pointAnimation 1s ease-in-out infinite;
        }
      `}</style>
      
      <div
        className="fixed z-40 transition-all duration-1000 ease-in-out floating-avatar"
        style={position}
      >
        <div className="relative">
          {/* Avatar */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 p-1 avatar-pulse shadow-xl">
            <div className="w-full h-full rounded-full bg-white p-1">
              <img
                src="https://static.readdy.ai/image/bb3310d15824d4f420236b00457b05f2/cc90afe5b76cc08a9dad175bde485945.jfif"
                alt="Dipyaman Das"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          
          {/* Pointing hand */}
          <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 pointer-animation">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
              <i className="ri-hand-index-finger-line text-gray-800 text-sm"></i>
            </div>
          </div>
          
          {/* Speech bubble */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-3 min-w-max">
            <div className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                            {sectionTitles[currentSection as keyof typeof sectionTitles]}

            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          </div>
          
          {/* Glowing effect */}
          <div className="absolute inset-0 w-20 h-20 rounded-full bg-blue-400 opacity-20 animate-ping"></div>
          
          {/* Sparkles */}
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-pink-400 rounded-full animate-bounce animation-delay-300"></div>
          <div className="absolute top-2 -left-3 w-2 h-2 bg-green-400 rounded-full animate-bounce animation-delay-600"></div>
        </div>
      </div>
    </>
  );
}
