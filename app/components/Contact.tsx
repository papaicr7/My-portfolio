
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-rainbow mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
            Let's discuss opportunities and collaborate on exciting projects. I'm always open to new challenges and connections.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 border border-white/10">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-phone-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-gray-300">+91 8013500912</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 border border-white/10">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-mail-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300">dipyamandas96@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 border border-white/10">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-map-pin-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-gray-300">40, Library Road, Pal Lane, Bhadreswar, Hooghly - 712124</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-white mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <Link
                    href="https://linkedin.com/in/dipyamandas"
                    target="_blank"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <i className="ri-linkedin-fill text-xl"></i>
                  </Link>
                  <Link
                    href="https://www.github.com/dipyamandas96"
                    target="_blank"
                    className="w-12 h-12 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <i className="ri-github-fill text-xl"></i>
                  </Link>
                  <Link
                    href="mailto:dipyamandas96@gmail.com"
                    className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <i className="ri-mail-fill text-xl"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    maxLength={500}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                  <p className="text-sm text-gray-400 mt-1">
                    {formData.message.length}/500 characters
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                >
                  <i className="ri-send-plane-line mr-2"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
