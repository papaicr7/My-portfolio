
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const designations = [
    "Network & Security Engineer",
    "Software Developer", 
    "Data Analyst"
  ];
  
  const [currentDesignationIndex, setCurrentDesignationIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentDesignation = designations[currentDesignationIndex];
    
    if (isTyping) {
      if (charIndex < currentDesignation.length) {
        const timer = setTimeout(() => {
          setDisplayedText(currentDesignation.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 100);
        return () => clearTimeout(timer);
      } else {
        // Finished typing, wait 1 seconds then start erasing
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 1000);
        return () => clearTimeout(timer);
      }
    } else {
      // Erasing
      if (charIndex > 0) {
        const timer = setTimeout(() => {
          setDisplayedText(currentDesignation.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50);
        return () => clearTimeout(timer);
      } else {
        // Finished erasing, move to next designation
        setCurrentDesignationIndex((prev) => (prev + 1) % designations.length);
        setIsTyping(true);
      }
    }
  }, [currentDesignationIndex, charIndex, isTyping, designations]);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/images/dipyaman_das_CV_R2.pdf';
    link.download = 'Dipyaman_Das_CV.pdf';
    link.click();
  };

  return (
    <>
      <style jsx>{`
        @keyframes coinToss {
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(90deg);
          }
          100% {
            transform: rotateY(180deg);
          }
        }
        
        .coin-toss {
          animation: coinToss 2s ease-in-out infinite;
        }
      `}</style>
      
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20cybersecurity%20operations%20center%20with%20network%20monitoring%20screens%2C%20server%20room%20background%2C%20blue%20digital%20grid%20patterns%2C%20secure%20network%20infrastructure%2C%20professional%20tech%20environment%20with%20glowing%20network%20connections%20and%20security%20shields%2C%20futuristic%20cyber%20defense%20atmosphere&width=1920&height=1080&seq=hero-network-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/60"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up">
                  Hi, I'm <span className="text-blue-300">Dipyaman</span>
                </h1>
                <h2 className="text-xl lg:text-2xl text-blue-200 mb-6 h-8">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </h2>
                <p className="text-lg text-gray-300 mb-8 animate-fade-in-up animation-delay-300">
                  Passionate about Web technology and protecting digital infrastructure.<br/>
                  Specialized in Network security, Web development and Data analytics.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
                <button
                  onClick={handleDownloadCV}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg whitespace-nowrap"
                >
                  <i className="ri-download-line mr-2"></i>
                  Download CV
                </button>
                
                <div className="flex gap-3">
                  <Link
                    href="https://linkedin.com/in/dipyamandas"
                    target="_blank"
                    className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  >
                    <i className="ri-linkedin-fill text-xl"></i>
                  </Link>
                  
                  <Link
                    href="https://github.com/papaicr7"
                    target="_blank"
                    className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  >
                    <i className="ri-github-fill text-xl"></i>
                  </Link>
                  
                  <Link
                    href="mailto:dipyamandas96@gmail.com"
                    className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  >
                    <i className="ri-mail-fill text-xl"></i>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end animate-fade-in-up animation-delay-900">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 p-2 animate-pulse">
                  <div className="w-full h-full rounded-full bg-white p-4 coin-toss">
                    <img
                      src="/images/dipyaman.png"
                      alt="Dipyaman Das"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-bounce animation-delay-300"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="ri-arrow-down-line text-2xl text-white"></i>
        </div>
      </section>
    </>
  );
}