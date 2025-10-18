
'use client';

import { useEffect, useState } from 'react';

export default function Experience() {
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

    const element = document.getElementById('experience');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Network and Security Engineer L2",
      company: "Maple Technology Pvt Ltd",
      duration: "01/2025 - Present",
      location: "Kolkata",
      description: [
        "Supported CCNA/CCVS-level networking concepts in day-to-day network operations and troubleshooting.",
        "Installed, configured, and maintained routers and switches, including VLAN setup, static/dynamic routing, and access control.",
        "Monitored and secured networks by implementing network security protocols and conducting routine vulnerability assessments.",
        "Worked with Linux servers for network monitoring, log analysis, and server management tasks.",
        "Used GNS3 software to simulate and test complex network topologies and troubleshoot configurations.",
        "Managed and deployed virtual machines and networking labs using VMware Workstation for testing and training."
      ],
      icon: "ri-shield-check-line",
      color: "bg-purple-600"
    },
    {
      title: "Software Developer Intern",
      company: "Wizzen Zentrum Technology Pvt Ltd",
      duration: "07/2023 - 11/2023",
      location: "Kolkata",
      description: [
        "Streamlined data analysis processes using MySQL, Excel, and Python, achieving a 90% increase in workflow efficiency and a 95% improvement in data accuracy. Implemented advanced SQL queries and Python scripts for data cleaning and automation, reducing manual errors and enhancing data integrity.",
        "Developed and maintained web applications using React.js and Node.js, enhancing user experience and functionality. Collaborated with cross-functional teams to design and implement new features, resulting in a 20% increase in user engagement."
      ],
      icon: "ri-code-line",
      color: "bg-blue-600"
    },
    {
      title: "Circuit Designer Intern",
      company: "AMD Integrated Computer Pvt Ltd",
      duration: "02/2023 - 05/2023",
      location: "Kolkata",
      description: [
        "Assisted in designing and testing electronic circuits using simulation software, contributing to the development of efficient and reliable circuit designs.",
        "Collaborated with senior engineers to troubleshoot and optimize circuit performance, gaining hands-on experience in practical circuit design and implementation on E3 software."
      ],
      icon: "ri-tools-line",
      color: "bg-green-600"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-rainbow mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-500"></div>
            
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-start mb-12 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`${exp.color} w-16 h-16 rounded-full flex items-center justify-center text-white text-xl shadow-lg z-10`}>
                  <i className={exp.icon}></i>
                </div>
                
                <div className="ml-8 flex-1">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-white/20">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <span className="text-sm text-gray-300 font-medium">{exp.duration}</span>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <i className="ri-building-line text-gray-300 mr-2"></i>
                      <span className="text-gray-300 font-medium">{exp.company}</span>
                      <span className="mx-2 text-gray-500">•</span>
                      <i className="ri-map-pin-line text-gray-400 mr-1"></i>
                      <span className="text-gray-400">{exp.location}</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start">
                          <i className="ri-arrow-right-s-line text-gray-400 mr-2 mt-0.5"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
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
