"use client";

import { useEffect, useRef, useState } from "react";

interface Category {
  name: string;
  icon: React.ReactNode;
  description: string;
  productCount: number;
}

const CategoryIcons = {
  health: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
  hair: <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.33.26 2.61.74 3.77L8 12.5V8c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4.5l5.26 3.27c.48-1.16.74-2.44.74-3.77 0-5.52-4.48-10-10-10zm0 18c-2.21 0-4.21-.9-5.66-2.34L12 14l5.66 3.66C16.21 19.1 14.21 20 12 20z"/></svg>,
  body: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
  face: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
  home: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
  edtech: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
};

const categories: Category[] = [
  {
    name: "Health Care",
    icon: CategoryIcons.health,
    description: "Vitamins, supplements & wellness products for optimal health",
    productCount: 15,
  },
  {
    name: "Hair Care",
    icon: CategoryIcons.hair,
    description: "Premium oils, shampoos & treatments for beautiful hair",
    productCount: 8,
  },
  {
    name: "Body Care",
    icon: CategoryIcons.body,
    description: "Natural body care solutions for radiant skin",
    productCount: 10,
  },
  {
    name: "Face Care",
    icon: CategoryIcons.face,
    description: "Gentle skincare for a glowing complexion",
    productCount: 12,
  },
  {
    name: "Home Care",
    icon: CategoryIcons.home,
    description: "Eco-friendly products for a clean home",
    productCount: 6,
  },
  {
    name: "Ed-Tech",
    icon: CategoryIcons.edtech,
    description: "Educational tools and resources for growth",
    productCount: 4,
  },
];

export default function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % categories.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="categories"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2d5a3d] via-[#4a7c59] to-[#2d5a3d]"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full leaf-pattern"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 border border-white/10 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/5 rounded-full animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white/80 text-sm font-medium rounded-full mb-4 backdrop-blur-sm">
            Product Categories
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Explore Our{" "}
            <span className="text-[#c9a227]">Collections</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            From health supplements to beauty essentials, discover categories
            tailored to your wellness journey.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className={`group relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${activeIndex === index ? "ring-2 ring-[#c9a227] ring-offset-2 ring-offset-[#4a7c59]" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                {category.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#c9a227] transition-colors">
                {category.name}
              </h3>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                {category.description}
              </p>

              {/* Product Count */}
              <div className="flex items-center justify-between">
                <span className="text-[#a8d5ba] text-sm font-medium">
                  {category.productCount}+ Products
                </span>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#c9a227] transition-colors">
                  <svg
                    className="w-4 h-4 text-white transform group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#c9a227]/20 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { value: "6", label: "Categories" },
            { value: "50+", label: "Products" },
            { value: "100%", label: "Natural" },
            { value: "Made in", label: "India" },
          ].map((stat) => (
            <div key={stat.label} className="group">
              <div
                className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-[#c9a227] transition-colors"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {stat.value}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
