"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden leaf-pattern"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Leaves */}
        <div className="absolute top-20 left-10 w-20 h-20 opacity-20">
          <svg viewBox="0 0 100 100" className="animate-float">
            <path
              d="M50 10 Q80 30 50 60 Q20 30 50 10"
              fill="#4a7c59"
            />
            <path
              d="M50 60 L50 90"
              stroke="#4a7c59"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="absolute top-40 right-20 w-16 h-16 opacity-15 delay-200">
          <svg viewBox="0 0 100 100" className="animate-float">
            <path
              d="M50 10 Q80 30 50 60 Q20 30 50 10"
              fill="#6b9b7a"
            />
          </svg>
        </div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 opacity-10 delay-500">
          <svg viewBox="0 0 100 100" className="animate-float">
            <path
              d="M50 10 Q80 30 50 60 Q20 30 50 10"
              fill="#a8d5ba"
            />
          </svg>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#a8d5ba]/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#d4ebe0]/50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#4a7c59]/5 to-[#c9a227]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`text-center lg:text-left transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4ebe0] rounded-full mb-6">
              <span className="w-2 h-2 bg-[#4a7c59] rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-[#2d5a3d]">100% Natural Wellness</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              <span className="text-[#2d5a3d]">Embrace</span>{" "}
              <span className="gradient-text">Natural Beauty</span>
              <br />
              <span className="text-[#2d5a3d]">& Wellness</span>
            </h1>
            
            <p className="text-lg text-[#4a7c59] mb-8 max-w-xl mx-auto lg:mx-0">
              Discover the power of nature with Grinonce premium wellness products. 
              From hair care to health supplements, we bring you the finest 
              Ayurvedic and natural solutions for a healthier, more radiant you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#products"
                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-[#4a7c59] to-[#6b9b7a] text-white font-semibold rounded-full hover:shadow-xl hover:shadow-[#4a7c59]/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Products
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 animate-shimmer"></div>
              </a>
              
              <a
                href="#about"
                className="px-8 py-4 border-2 border-[#4a7c59] text-[#2d5a3d] font-semibold rounded-full hover:bg-[#4a7c59] hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { number: "9+", label: "Categories" },
                { number: "50+", label: "Products" },
                { number: "10K+", label: "Happy Customers" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`transition-all duration-700 delay-${(index + 3) * 100} ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                >
                  <div className="text-3xl font-bold text-[#4a7c59]" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-[#6b9b7a]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image/Visual */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Main Circle */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 mx-auto">
                {/* Rotating Border */}
                <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#a8d5ba] animate-spin" style={{ animationDuration: '20s' }}></div>
                
                {/* Inner Circle */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#d4ebe0] to-[#a8d5ba] flex items-center justify-center animate-pulse-glow">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#4a7c59] to-[#6b9b7a] flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#2d5a3d]" style={{ fontFamily: 'var(--font-playfair)' }}>
                      Grinonce
                    </h3>
                    <p className="text-sm text-[#4a7c59] mt-2">Premium Wellness</p>
                  </div>
                </div>

                {/* Floating Product Icons */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-bounce-subtle">
                  <svg className="w-8 h-8 text-[#4a7c59]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <div className="absolute top-1/4 -right-4 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-bounce-subtle delay-200">
                  <svg className="w-7 h-7 text-[#6b9b7a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                <div className="absolute bottom-1/4 -right-6 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-bounce-subtle delay-300">
                  <svg className="w-8 h-8 text-[#4a7c59]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-bounce-subtle delay-400">
                  <svg className="w-7 h-7 text-[#c9a227]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/></svg>
                </div>
                <div className="absolute bottom-1/4 -left-6 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-bounce-subtle delay-500">
                  <svg className="w-8 h-8 text-[#4a7c59]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div className="absolute top-1/4 -left-4 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-bounce-subtle delay-100">
                  <svg className="w-7 h-7 text-[#6b9b7a]" fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-[#4a7c59]">
          <span className="text-sm font-medium">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
