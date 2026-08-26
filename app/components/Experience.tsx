
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
      title: "Software Developer (Full Time)",
      company: "VideoGate Technologies Pvt Ltd (Toqqer)",
      duration: "09/2025 - Present",
      location: "Hyderabad (Onsite)",
      description: [
        "Contributed to scaling the core VOD streaming platform by optimizing Java, Spring Boot, and Microservices, enabling growth from 50K to 250K+ concurrent users during peak live events.",
        "Enhanced authentication security by integrating JWT authentication and DRM license validation, reducing unauthorized content access by 15%.",
        "Optimized legacy PostgreSQL queries and tuned HikariCP connection pools, reducing payment processing timeouts by 40%.",
        "Collaborated on implementing Server-Side Ad Insertion (SSAI) into the OTT playback pipeline, increasing ad monetization efficiency by 22%.",
        "Supported migration of a monolithic user profile service to AWS-hosted Microservices, improving deployment speed while reducing cloud infrastructure costs by 18%.",
        "Diagnosed and resolved critical JVM memory leaks and Out-of-Memory (OOM) issues, improving platform availability from 98.2% to 99.9%.",
        "Eliminated concurrency race conditions using distributed locking with Redis, preventing duplicate coupon redemption and protecting over $12K in revenue.",
        "Integrated Resilience4j Circuit Breakers for third-party services, reducing user-facing playback failures by 35%.",
        "Optimized legacy PostgreSQL queries and implemented Redis caching, reducing API response latency from 850 ms to under 180 ms.",
        "Resolved offline playback synchronization issues, ensuring 100% consistency of watch history and DRM status after network reconnection.",
        "Introduced automated testing using JUnit and Mockito, increasing test coverage from 20% to 75% while preventing production regressions.",
        "Streamlined Docker environments and Jenkins CI/CD pipelines, accelerating feature delivery by approximately 3 days per sprint.",
        "Containerized backend services with Docker, orchestrated deployments using Kubernetes, and automated releases through Jenkins CI/CD, reducing deployment time by 50%."
      ],
      icon: "ri-code-line",
      color: "bg-blue-600"
    },
    {
      title: "Network & Security Engineer (Contractual)",
      company: "Maple Technology Pvt Ltd",
      duration: "01/2025 - 08/2025",
      location: "Kolkata (Hybrid)",
      description: [
        "Designed, implemented, and maintained secure enterprise network infrastructure comprising 50+ routers and switches using CCNA networking principles, improving network availability to 99.8%.",
        "Configured and optimized 20+ VLANs, STP, OSPF, and EIGRP, reducing network downtime by 25% while improving traffic efficiency.",
        "Strengthened enterprise security by managing Firewalls, VPNs, and role-based access controls while resolving 100+ network incidents through root cause analysis, improving incident resolution time by 35%.",
        "Automated system administration, log analysis, and network health monitoring using Bash, grep, and awk, reducing manual effort by 40% and accelerating troubleshooting by 30%."
      ],
      icon: "ri-shield-check-line",
      color: "bg-purple-600"
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
