
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Projects() {
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

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Steel Surface Defect Detection Using Deep Learning Algorithm",
      description: "Architected an end-to-end defect detection pipeline using Convolutional Neural Networks (CNN), achieving up to 95.83% accuracy on benchmark industrial datasets. Leveraged TensorFlow, Keras, NumPy, Pandas, and Matplotlib for model development, data preprocessing, and result visualization. Applied Confusion Matrix analysis to minimize false positives. Published in IEEE Transactions.",
      technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Pandas", "Matplotlib", "CNN"],
      image: "https://readdy.ai/api/search-image?query=Steel%20surface%20defect%20detection%20using%20deep%20learning%2C%20industrial%20quality%20control%20system%2C%20CNN%20neural%20network%20visualization%2C%20steel%20manufacturing%20process%2C%20AI%20computer%20vision%20technology%2C%20modern%20industrial%20automation&width=500&height=300&seq=steel-defect&orientation=landscape",
      date: "08/2023 - 05/2024",
      category: "Machine Learning"
    },
    {
      title: "Portfolio Website",
      description: "Engineered a fully responsive frontend using React.js, Tailwind CSS, and HTML/CSS, implementing dynamic routing and reusable component architecture. Built a lightweight Node.js/Express.js backend with validated API endpoints for contact form handling and secure server-side data management. Applied responsive design principles ensuring 100% cross-device compatibility.",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "HTML/CSS"],
      image: "/images/portfolio.png",
      date: "07/2024 - 09/2024",
      category: "Web Development"
    },
    {
      title: "E-Commerce Printing Press Website",
      description: "Designed and developed a production-ready full-stack e-commerce platform for customized merchandise orders (T-shirts, cups, mugs) with end-to-end order lifecycle management. Built a secure Node.js/Express.js backend exposing RESTful APIs for product catalog, cart management, and order processing, following MVC architecture patterns.",
      technologies: ["Node.js", "Express.js", "RESTful APIs", "MVC", "MongoDB"],
      image: "/images/website.png",
      date: "10/2024 - 02/2025",
      category: "Full-Stack"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-rainbow mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {project.date}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 hover:text-gray-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white/20 text-gray-200 px-3 py-1 rounded-full text-sm font-medium hover:bg-white/30 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                    <i className="ri-eye-line mr-2"></i>
                    View Details
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                    <i className="ri-github-line mr-2"></i>
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="https://www.github.com/dipyamandas96"
            target="_blank"
            className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
          >
            <i className="ri-github-line mr-2"></i>
            View All Projects on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
