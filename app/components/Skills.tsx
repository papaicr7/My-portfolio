
'use client';

import { useEffect, useState } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90, icon: "https://readdy.ai/api/search-image?query=Python%20programming%20language%20logo%20icon%2C%20clean%20minimal%20design%2C%20blue%20and%20yellow%20colors%2C%20modern%20tech%20icon%20style%2C%20transparent%20background%2C%20high%20quality%20vector%20style&width=64&height=64&seq=python-icon&orientation=squarish" },
        { name: "Java", level: 80, icon: "https://readdy.ai/api/search-image?query=Java%20programming%20language%20logo%20icon%2C%20coffee%20cup%20symbol%2C%20orange%20and%20red%20colors%2C%20modern%20tech%20icon%20style%2C%20transparent%20background%2C%20high%20quality%20vector%20style&width=64&height=64&seq=java-icon&orientation=squarish" },
        { name: "JavaScript", level: 85, icon: "/images/java script.png" },
        { name: "C++", level: 75, icon: "https://readdy.ai/api/search-image?query=C%20%20%20programming%20language%20logo%20icon%2C%20blue%20geometric%20design%2C%20modern%20tech%20icon%20style%2C%20transparent%20background%2C%20high%20quality%20vector%20style&width=64&height=64&seq=cpp-icon&orientation=squarish" },
        { name: "HTML", level: 95, icon: "https://readdy.ai/api/search-image?query=HTML5%20logo%20icon%2C%20orange%20shield%20design%2C%20modern%20web%20technology%20icon%20style%2C%20transparent%20background%2C%20high%20quality%20vector%20style&width=64&height=64&seq=html-icon&orientation=squarish" },
        { name: "CSS", level: 90, icon: "https://readdy.ai/api/search-image?query=CSS3%20logo%20icon%2C%20blue%20shield%20design%2C%20modern%20web%20technology%20icon%20style%2C%20transparent%20background%2C%20high%20quality%20vector%20style&width=64&height=64&seq=css-icon&orientation=squarish" },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "ReactJs", level: 85, icon: "https://readdy.ai/api/search-image?query=React%20JavaScript%20library%20logo%20icon%2C%20blue%20atomic%20symbol%2C%20modern%20web%20framework%20icon%20style%2C%20transparent%20background%2C%20high%20quality%20vector%20style&width=64&height=64&seq=react-icon&orientation=squarish" },
        { name: "Node.js", level: 80, icon: "/images/nodejs2.png" },
        { name: "Express Js", level: 82, icon: "/images/expressjs.png" },
        { name: "Django", level: 70, icon: "/images/Django.png" },
        { name: ".NET", level: 78, icon: "/images/net.png" },
        { name: "Spring Boot", level: 75, icon: "/images/springboot.png" },
      ]
    },
    {
      title: "Data Science & Databases",
      skills: [
        { name: "Pandas", level: 85, icon: "/images/pandas.png" },
        { name: "NumPy", level: 85, icon: "/images/numpy.png" },
        { name: "Matplotlib", level: 80, icon: "/images/matplotlib.png" },
        { name: "TensorFlow", level: 78, icon: "/images/tensorflow.png" },
        { name: "Keras", level: 75, icon: "/images/keras.png" },
        { name: "SQL", level: 88, icon: "/images/sql.png" },
        { name: "MongoDB", level: 82, icon: "/images/mongodb.png" },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", level: 85, icon: "/images/git.png" },
        { name: "GitHub", level: 90, icon: "/images/github.png" },
        { name: "CI/CD", level: 78, icon: "/images/cicd.png" },
        { name: "Docker", level: 75, icon: "/images/docker.png" },
        { name: "Kubernetes", level: 70, icon: "/images/kuberneties.png" },
        { name: "AWS", level: 72, icon: "/images/Aws.png" },
        { name: "Vercel", level: 85, icon: "/images/vercel.png" }
      ]
    },
    {
      title: "Business Intelligence & Platforms",
      skills: [
        { name: "Power BI", level: 88, icon: "/images/powerbi.jpeg" },
        { name: "Tableau", level: 70, icon: "/images/tableau.png" },
        { name: "MS Excel", level: 90, icon: "/images/excel.jpeg" },
        { name: "MySQL", level: 85, icon: "/images/mysql.png" },
        { name: "VS Code", level: 90, icon: "/images/vs code.png" },
        { name: "Jupyter Notebook", level: 88, icon: "/images/jupyter notebook.png" },
        { name: "Google Colab", level: 85, icon: "/images/colab.png" }
      ]
    },
    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-cycling effect
  useEffect(() => {
    if (!isVisible || isPaused) return;

    const autoChangeTimer = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentCategoryIndex((prev) => (prev + 1) % skillCategories.length);
          setIsAnimating(false);
        }, 300);
      }
    }, 2000);

    return () => clearInterval(autoChangeTimer);
  }, [isVisible, isPaused, isAnimating, skillCategories.length]);

  // Pause auto-cycling when user interacts
  useEffect(() => {
    if (isPaused) {
      const resumeTimer = setTimeout(() => {
        setIsPaused(false);
      }, 5000); // Resume after 5 seconds of no interaction

      return () => clearTimeout(resumeTimer);
    }
  }, [isPaused]);

  const handleNextCategory = () => {
    if (isAnimating) return;
    setIsPaused(true); // Pause auto-cycling
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentCategoryIndex((prev) => (prev + 1) % skillCategories.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrevCategory = () => {
    if (isAnimating) return;
    setIsPaused(true); // Pause auto-cycling
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentCategoryIndex((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
      setIsAnimating(false);
    }, 300);
  };

  const currentCategory = skillCategories[currentCategoryIndex];

  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-rainbow mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto rounded-full"></div>
        </div>

        {/* Category Title with Spinning Animation and Navigation */}
        <div 
          className="flex items-center justify-center mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            onClick={handlePrevCategory}
            className="mr-6 p-3 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-300 transform hover:scale-110 disabled:opacity-50"
            disabled={isAnimating}
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>
          
          <div className="mx-8 text-center relative">
            <h3 className={`text-3xl font-bold text-rainbow transition-all duration-300 transform ${
              isAnimating ? 'rotate-y-90 opacity-0 scale-75' : 'rotate-y-0 opacity-100 scale-100'
            }`}>
              {currentCategory.title}
            </h3>
            <div className="text-gray-300 text-sm mt-2 flex items-center justify-center gap-2">
              <span>{currentCategoryIndex + 1} of {skillCategories.length}</span>
              {!isPaused && (
                <div className="flex items-center gap-1 text-xs">
                  <i className="ri-play-circle-line"></i>
                  <span>Auto</span>
                </div>
              )}
              {isPaused && (
                <div className="flex items-center gap-1 text-xs">
                  <i className="ri-pause-circle-line"></i>
                  <span>Paused</span>
                </div>
              )}
            </div>
            
            {/* Progress indicators */}
            <div className="flex justify-center gap-2 mt-3">
              {skillCategories.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentCategoryIndex ? 'bg-gray-300 scale-125' : 'bg-white/30'
                  }`}
                ></div>
              ))}
            </div>
          </div>
          
          <button
            onClick={handleNextCategory}
            className="ml-6 p-3 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-300 transform hover:scale-110 disabled:opacity-50"
            disabled={isAnimating}
          >
            <i className="ri-arrow-right-line text-xl"></i>
          </button>
        </div>

        {/* Current Category Skills */}
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-500 transform ${
              isVisible && !isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {currentCategory.skills.map((skill, skillIndex) => (
                <div
                  key={`${currentCategoryIndex}-${skillIndex}`}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-white/20"
                >
                  <div className="flex items-center">
                    <div className="w-16 h-16 flex items-center justify-center mr-4 bg-white/20 rounded-full shadow-inner">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-white text-lg">{skill.name}</span>
                        {'level' in skill && skill.level && <span className="text-sm text-rainbow font-medium">{skill.level}%</span>}
                      </div>
                      {'level' in skill && skill.level && (
                        <div className="w-full bg-white/20 rounded-full h-2.5">
                          <div
                            className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 h-2.5 rounded-full transition-all duration-2000 ease-out"
                            style={{
                              width: isVisible && !isAnimating ? `${skill.level}%` : '0%',
                              transitionDelay: `${skillIndex * 100}ms`
                            }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
