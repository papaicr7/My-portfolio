
'use client';

import { useEffect, useState } from 'react';

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('education');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      degree: "Master of Technology in Applied Electronics and Instrumentation Engineering ",
      institution: "Heritage Institute of Technology, Kolkata",
      duration: "08/2022 - 06/2024",
      location: "Kolkata, West Bengal",
      coursework: [
        "Advanced Programming Languages",
        "Algorithms and Data Structures",
        "Computer Architecture",
        "Operating Systems",
        "Machine Learning",
        "Network Security"
      ],
      projects: "Steel Surface Defect Detection Using Deep Learning Algorithm",
      icon: "ri-graduation-cap-line",
      color: "bg-purple-600"
    },
    {
      degree: "Bachelor of Technology in Electronics and Communication Engineering ",
      institution: "University of Engineering and Management, Kolkata",
      duration: "09/2018 - 07/2022",
      location: "Kolkata, West Bengal",
      coursework: [
        "Python Programming Languages",
        "Data Structures and Algorithms",
        "Operating Systems",
        "HTML, CSS and JavaScript",
        "Microprocessors and Microcontrollers",
        "Internet of Things (IoT)"
      ],
      projects: "Automated Writing Machine (CNC)",
      icon: "ri-book-line",
      color: "bg-blue-600"
    },
    {
      degree: "Class XII in Science (C.B.S.E)",
      institution: "Kalyani Central Model School, Kalyani",
      duration: "04/2017 - 06/2018",
      location: "Kalyani, West Bengal",
      coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
      icon: "ri-school-line",
      color: "bg-green-600"
    },
    {
      degree: "Class X (C.B.S.E)",
      institution: "Techno India Group Public School, Chinsurah",
      duration: "04/2015 - 06/2016",
      location: "Chinsurah, West Bengal",
      coursework: ["Science", "Mathematics", "English", "Social Studies"],
      icon: "ri-pencil-line",
      color: "bg-orange-600"
    }
  ];

  return (
    <section id="education" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-rainbow mb-4">Education</h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-500"></div>
            
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-start mb-12 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`${edu.color} w-16 h-16 rounded-full flex items-center justify-center text-white text-xl shadow-lg z-10`}>
                  <i className={edu.icon}></i>
                </div>
                
                <div className="ml-8 flex-1">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-white/20">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <span className="text-sm text-gray-300 font-medium">{edu.duration}</span>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <i className="ri-building-line text-gray-300 mr-2"></i>
                      <span className="text-gray-300 font-medium">{edu.institution}</span>
                      <span className="mx-2 text-gray-500">•</span>
                      <i className="ri-map-pin-line text-gray-400 mr-1"></i>
                      <span className="text-gray-400">{edu.location}</span>
                    </div>
                    
                    {edu.coursework && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-white mb-2">Coursework:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, idx) => (
                            <span
                              key={idx}
                              className="bg-white/20 text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-white/30 hover:text-white transition-colors duration-200"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {edu.projects && (
                      <div>
                        <h4 className="font-semibold text-white mb-2">Projects:</h4>
                        <p className="text-gray-300">{edu.projects}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
