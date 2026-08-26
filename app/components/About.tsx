
'use client';

import { useEffect, useState } from 'react';

export default function About() {
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

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-rainbow mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20software%20development%20workspace%20with%20multiple%20monitors%2C%20coding%20environment%2C%20clean%20desk%20setup%2C%20technology%20gadgets%2C%20professional%20developer%20workspace%2C%20contemporary%20office%20design%2C%20inspiring%20tech%20environment&width=600&height=400&seq=about-workspace&orientation=landscape"
                alt="About Workspace"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="space-y-6">
              <p className="text-lg text-white leading-relaxed">
                Results-driven Software Developer with 1+ years of hands-on experience building scalable applications 
                using Java, Spring Boot, and Microservices architecture. Proficient in designing and consuming RESTful APIs, 
                managing relational data with PostgreSQL via JPA/Hibernate, and accelerating throughput with Redis caching.
              </p>
              
              <p className="text-lg text-white leading-relaxed">
                Experienced with Docker, Kubernetes, and CI/CD pipelines (Jenkins), and comfortable working in Agile environments. 
                Passionate about staying up-to-date with emerging technologies and continuously expanding my technical skillset.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-white/20">
                  <div className="flex items-center mb-3">
                    <i className="ri-phone-line text-2xl text-gray-300 mr-3"></i>
                    <span className="font-semibold text-white">Phone</span>
                  </div>
                  <p className="text-gray-300">8013500912</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-white/20">
                  <div className="flex items-center mb-3">
                    <i className="ri-mail-line text-2xl text-gray-300 mr-3"></i>
                    <span className="font-semibold text-white">Email</span>
                  </div>
                  <p className="text-gray-300">dipyamandas96@gmail.com</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-white/20">
                  <div className="flex items-center mb-3">
                    <i className="ri-map-pin-line text-2xl text-gray-300 mr-3"></i>
                    <span className="font-semibold text-white">Location</span>
                  </div>
                  <p className="text-gray-300">Hooghly, West Bengal</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-white/20">
                  <div className="flex items-center mb-3">
                    <i className="ri-graduation-cap-line text-2xl text-gray-300 mr-3"></i>
                    <span className="font-semibold text-white">Degree</span>
                  </div>
                  <p className="text-gray-300">M.Tech in AEIE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
