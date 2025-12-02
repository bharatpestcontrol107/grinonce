"use client";

import { useEffect, useRef, useState } from "react";

interface Product {
  name: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ProductIcons = {
  hairOil: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
  shampoo: <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M11.5 2v3h1V2h-1zm-1 4v2.5H8V10h2.5v3.5H8V15h2.5v4H8v1.5h8V19h-2.5v-4H16v-1.5h-2.5V10H16V8.5h-2.5V6h-3z"/></svg>,
  tablet: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  calcium: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
  toothpaste: <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2v2h1v14a4 4 0 008 0V4h1V2H7zm3 14V4h4v12a2 2 0 01-4 0z"/></svg>,
  drops: <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69m0-2.83L4.93 6.93a10 10 0 1014.14 0L12-.14z"/></svg>,
  herbal: <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/></svg>,
  tulsi: <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 21V13c-1.66 0-3-1.34-3-3V7h3V4h12v3h3v3c0 1.66-1.34 3-3 3v8H6zm10-5v-2.07c1.16-.41 2-1.53 2-2.93V9h-1V4H7v5H6v1c0 1.4.84 2.52 2 2.93V16h8z"/></svg>,
};

const products: Product[] = [
  {
    name: "9 in 1 Hair Growth Oil",
    category: "Hair Care",
    description: "Premium blend of 9 natural oils for stronger, healthier hair growth",
    icon: ProductIcons.hairOil,
    color: "from-[#4a7c59] to-[#6b9b7a]",
  },
  {
    name: "Keratin Shampoo",
    category: "Hair Care",
    description: "Deep nourishing keratin formula for silky smooth hair",
    icon: ProductIcons.shampoo,
    color: "from-[#6b9b7a] to-[#a8d5ba]",
  },
  {
    name: "Grinonce Marathon Tablet",
    category: "Health Care",
    description: "Energy-boosting supplement for enhanced stamina and vitality",
    icon: ProductIcons.tablet,
    color: "from-[#2d5a3d] to-[#4a7c59]",
  },
  {
    name: "Calcium Tablet",
    category: "Health Care",
    description: "Essential calcium supplement for strong bones and teeth",
    icon: ProductIcons.calcium,
    color: "from-[#4a7c59] to-[#6b9b7a]",
  },
  {
    name: "Noni Mangosteen Toothpaste",
    category: "Body Care",
    description: "Natural herbal toothpaste with powerful antioxidants",
    icon: ProductIcons.toothpaste,
    color: "from-[#6b9b7a] to-[#a8d5ba]",
  },
  {
    name: "Grinonce Power Drop",
    category: "Health Care",
    description: "Concentrated wellness drops for immunity and energy",
    icon: ProductIcons.drops,
    color: "from-[#2d5a3d] to-[#4a7c59]",
  },
  {
    name: "Ajwain Drop",
    category: "Health Care",
    description: "Traditional Ayurvedic drops for digestive wellness",
    icon: ProductIcons.herbal,
    color: "from-[#4a7c59] to-[#6b9b7a]",
  },
  {
    name: "Tulsi Drop",
    category: "Health Care",
    description: "Pure Tulsi extract for immunity and respiratory health",
    icon: ProductIcons.tulsi,
    color: "from-[#6b9b7a] to-[#a8d5ba]",
  },
];

export default function Products() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the animation of cards
            products.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#f8fdf8] to-[#d4ebe0]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#a8d5ba]/30 text-[#2d5a3d] text-sm font-medium rounded-full mb-4">
            Our Products
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2d5a3d] mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Natural Wellness{" "}
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-lg text-[#4a7c59] max-w-2xl mx-auto">
            Discover our range of premium wellness and cosmetic products,
            crafted with the finest natural ingredients from India&apos;s rich heritage.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {product.icon}
                <div className="absolute inset-0 rounded-2xl animate-shimmer opacity-0 group-hover:opacity-100"></div>
              </div>

              {/* Category Tag */}
              <span className="inline-block px-3 py-1 bg-[#d4ebe0] text-[#2d5a3d] text-xs font-medium rounded-full mb-3">
                {product.category}
              </span>

              {/* Content */}
              <h3 className="text-lg font-bold text-[#2d5a3d] mb-2 group-hover:text-[#4a7c59] transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-[#6b9b7a] leading-relaxed">
                {product.description}
              </p>

              {/* Arrow */}
              <div className="mt-4 flex items-center text-[#4a7c59] font-medium text-sm group-hover:text-[#2d5a3d] transition-colors">
                <span>Learn More</span>
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>

              {/* Decorative Corner */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 opacity-10">
                <svg viewBox="0 0 100 100">
                  <path d="M50 10 Q80 30 50 60 Q20 30 50 10" fill="#4a7c59" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://mygipl.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#4a7c59] to-[#6b9b7a] text-white font-semibold rounded-full hover:shadow-xl hover:shadow-[#4a7c59]/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span>View All Products</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
