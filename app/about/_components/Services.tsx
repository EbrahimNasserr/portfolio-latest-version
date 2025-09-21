'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Services() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      const tl = gsap.timeline();
      tl.from('.hero-name', { y: 100, opacity: 0, duration: 1, ease: 'power3.out' })
        .from('.hero-role', { y: 50, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
        .from('.hero-tagline', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
        .from('.hero-cta', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.2');

      // Services grid animations
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });

      // Section headers
      gsap.from('.section-header', {
        scrollTrigger: {
          trigger: '.section-header',
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern frameworks like React, Next.js, and Node.js.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO-Friendly'],
      gradient: 'from-blue-400 to-purple-500'
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps using React Native and Progressive Web App technologies.',
      features: ['iOS & Android', 'Offline Support', 'Push Notifications'],
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'User-centered design with modern aesthetics, smooth animations, and intuitive interfaces.',
      features: ['Figma Prototyping', 'Design Systems', 'User Research'],
      gradient: 'from-pink-400 to-red-500'
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Speed up your existing applications and improve user experience with advanced optimization techniques.',
      features: ['Core Web Vitals', 'Lazy Loading', 'Code Splitting'],
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Deploy and scale your applications using AWS, Vercel, and other modern cloud platforms.',
      features: ['Serverless Architecture', 'Auto Scaling', 'CI/CD Pipelines'],
      gradient: 'from-green-400 to-blue-500'
    },
    {
      icon: '🔧',
      title: 'Technical Consulting',
      description: 'Strategic guidance on technology choices, architecture decisions, and development best practices.',
      features: ['Code Reviews', 'Tech Stack Planning', 'Team Mentoring'],
      gradient: 'from-indigo-400 to-purple-500'
    }
  ];

  return (
      <section ref={servicesRef} className="py-20 bg-muted/30" id="services">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-header text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">I Can Help You With</h2>
            <p className="text-xl max-w-3xl mx-auto">
              From concept to deployment, I provide comprehensive solutions for your digital needs
            </p>
          </div>
          
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="service-card group cursor-pointer"
              >
                <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start Your Project?</h3>
              <p className="text-gray-600 mb-6">
                Let's discuss how I can help bring your vision to life with cutting-edge technology and creative solutions.
              </p>
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Let's Talk About Your Project
              </button>
            </div>
          </div>
        </div>
      </section>
  );
}