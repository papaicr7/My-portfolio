'use client';

import { useEffect, useState } from 'react';

export default function Certificates() {
  const [isVisible, setIsVisible] = useState(false);
  const [clickedCert, setClickedCert] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('certificates');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const certificates = [
    {
      title: "Data Analytics with Python",
      issuer: "NPTEL, IIT Kanpur",
      icon: "ri-bar-chart-line",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      iconColor: "text-purple-600"
    },
    {
      title: "CCNA & CCVS",
      issuer: "NetGems.in",
      icon: "ri-router-line",
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
      iconColor: "text-blue-600"
    },
    {
      title: "AWS For Beginners",
      issuer: "Great Learning",
      icon: "ri-cloud-line",
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      iconColor: "text-orange-600"
    },
    {
      title: "MySQL Advanced",
      issuer: "HackerRank",
      icon: "ri-database-line",
      color: "bg-gradient-to-r from-green-500 to-teal-500",
      iconColor: "text-green-600"
    },
    {
      title: "AI and Data Science for Industrial Applications",
      issuer: "CSIR-CMERI",
      icon: "ri-brain-line",
      color: "bg-gradient-to-r from-indigo-500 to-purple-500",
      iconColor: "text-indigo-600"
    }
  ];

  const handleCertificateClick = (index: number) => {
    setClickedCert(index);
    
    // Create diwali cracker effect
    createCrackerEffect();
    
    // Reset after animation
    setTimeout(() => {
      setClickedCert(null);
    }, 1000);
  };

  const createCrackerEffect = () => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA726', '#AB47BC', '#66BB6A'];
    
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'cracker-particle';
      particle.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${Math.random() * window.innerWidth}px;
        top: ${Math.random() * window.innerHeight}px;
        animation: crackerExplosion 1s ease-out forwards;
      `;
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 1000);
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes crackerExplosion {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: scale(1.5) rotate(180deg);
            opacity: 0.8;
          }
          100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes sparkle {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 0.8;
          }
        }
      `}</style>
      
      <section id="certificates" className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold text-rainbow mb-4">Certificates</h2>
            <div className="w-24 h-1 bg-gray-300 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-4">Click on any certificate to see the celebration!</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden cursor-pointer transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${clickedCert === index ? 'animate-pulse scale-105' : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => handleCertificateClick(index)}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 ${cert.color} opacity-5`}></div>
                
                {/* Sparkle effect overlay */}
                {clickedCert === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 0.5}s`
                        }}
                      ></div>
                    ))}
                  </div>
                )}
                
                <div className="relative p-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className={`w-20 h-20 ${cert.color} rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110`}>
                      <i className={`${cert.icon} text-3xl text-white`}></i>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2 hover:text-gray-300 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-gray-300 font-medium mb-4">
                      {cert.issuer}
                    </p>
                    
                    <div className="flex items-center justify-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${cert.color.replace('bg-gradient-to-r', 'bg-blue-500')}`}></div>
                      <span className="text-sm text-gray-400">Certified</span>
                    </div>
                  </div>
                  
                  {/* Hover effect border */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent hover:border-gray-400 transition-all duration-300"></div>
                </div>
                
                {/* Certificate ribbon */}
                <div className="absolute top-4 right-4">
                  <div className={`w-8 h-8 ${cert.color} rounded-full flex items-center justify-center shadow-md`}>
                    <i className="ri-award-line text-white text-sm"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 inline-block">
              <p className="text-gray-700 text-lg mb-2">
                <i className="ri-trophy-line text-yellow-500 mr-2"></i>
                Continuously learning and growing in technology
              </p>
              <p className="text-gray-600">
                These certifications represent my commitment to professional development and staying current with industry trends.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}