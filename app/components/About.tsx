"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const ValueIcons = {
    natural: <svg className="w-6 h-6 text-[#4a7c59]" fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/></svg>,
    science: <svg className="w-6 h-6 text-[#4a7c59]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
    direct: <svg className="w-6 h-6 text-[#4a7c59]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    customer: <svg className="w-6 h-6 text-[#4a7c59]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
  };

  const values = [
    {
      icon: ValueIcons.natural,
      title: "100% Natural",
      description: "Pure, authentic ingredients sourced from nature",
    },
    {
      icon: ValueIcons.science,
      title: "Science-Backed",
      description: "Formulated with modern research and traditional wisdom",
    },
    {
      icon: ValueIcons.direct,
      title: "Direct Selling",
      description: "Quality products delivered directly to you",
    },
    {
      icon: ValueIcons.customer,
      title: "Customer First",
      description: "Your wellness is our top priority",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#d4ebe0]/50 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#a8d5ba]/30 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="inline-block px-4 py-1.5 bg-[#d4ebe0] text-[#2d5a3d] text-sm font-medium rounded-full mb-6">
              About GIPL
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2d5a3d] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Crafting Wellness,{" "}
              <span className="gradient-text">Naturally</span>
            </h2>
            <p className="text-lg text-[#4a7c59] mb-6 leading-relaxed">
              <strong>GIPL (Grinonce India Private Limited)</strong> is a leading Indian direct selling company 
              committed to bringing you the finest wellness and cosmetic products. Operating through 
              <a href="https://mygipl.com" className="text-[#2d5a3d] font-semibold hover:underline"> mygipl.com</a>, 
              we offer an extensive range of products under the trusted <strong>MY GIPL</strong> and <strong>Grinonce</strong> brands.
            </p>
            <p className="text-[#6b9b7a] mb-8 leading-relaxed">
              From Ayurvedic health supplements to premium hair care, our products are crafted with 
              nature&apos;s finest ingredients. We believe in the power of natural wellness and are 
              dedicated to helping you achieve a healthier, more radiant life.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`p-4 bg-[#f8fdf8] rounded-2xl hover:bg-[#d4ebe0] transition-colors duration-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="mb-2">{value.icon}</div>
                  <h4 className="font-semibold text-[#2d5a3d] mb-1">{value.title}</h4>
                  <p className="text-xs text-[#6b9b7a]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-[#4a7c59] to-[#2d5a3d] rounded-3xl p-8 shadow-2xl">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#c9a227] rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#a8d5ba] rounded-full opacity-30 blur-xl"></div>
              
              {/* Logo Section */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-4">
                  <span className="text-4xl font-bold text-[#4a7c59]" style={{ fontFamily: "var(--font-playfair)" }}>G</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  Grinonce
                </h3>
                <p className="text-[#a8d5ba]">by GIPL India</p>
              </div>

              {/* Mission */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <span className="text-[#c9a227]">✦</span> Our Mission
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  To empower individuals with natural, effective wellness solutions while creating 
                  sustainable business opportunities through direct selling.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "2020", label: "Established" },
                  { value: "India", label: "Made In" },
                  { value: "50+", label: "Products" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 rounded-xl py-3">
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-[#a8d5ba]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#d4ebe0] rounded-2xl flex items-center justify-center shadow-lg animate-bounce-subtle">
              <svg className="w-10 h-10 text-[#4a7c59]" fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/></svg>
            </div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg animate-bounce-subtle delay-200">
              <svg className="w-8 h-8 text-[#4a7c59]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
