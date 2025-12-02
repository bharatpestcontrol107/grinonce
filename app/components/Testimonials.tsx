"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "The 9 in 1 Hair Growth Oil has completely transformed my hair! After just 2 months, I can see visible difference in hair thickness and shine.",
    product: "9 in 1 Hair Growth Oil",
    initials: "PS",
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    text: "Grinonce Marathon Tablets have boosted my energy levels significantly. I feel more active throughout the day. Highly recommended!",
    product: "Marathon Tablet",
    initials: "RK",
  },
  {
    name: "Anjali Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    text: "The Keratin Shampoo is amazing! My hair feels so soft and manageable now. Best shampoo I've ever used.",
    product: "Keratin Shampoo",
    initials: "AP",
  },
  {
    name: "Vikram Singh",
    location: "Lucknow, UP",
    rating: 5,
    text: "Tulsi Drops have helped me strengthen my immunity. I haven't fallen sick in months since I started using it daily.",
    product: "Tulsi Drop",
    initials: "VS",
  },
];

export default function Testimonials() {
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
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[#f8fdf8] relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50 leaf-pattern"></div>
      <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-[#a8d5ba]/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-gradient-to-tr from-[#d4ebe0]/40 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-[#a8d5ba]/30 text-[#2d5a3d] text-sm font-medium rounded-full mb-4">
            Customer Love
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2d5a3d] mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What Our <span className="gradient-text">Customers</span> Say
          </h2>
          <p className="text-lg text-[#4a7c59] max-w-2xl mx-auto">
            Real stories from real people who have experienced the Grinonce difference.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full shrink-0 px-4"
                >
                  <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 relative">
                    {/* Quote Icon */}
                    <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-[#4a7c59] to-[#6b9b7a] rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-6 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < testimonial.rating ? "text-[#c9a227]" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-lg md:text-xl text-[#2d5a3d] leading-relaxed mb-8 italic">
                    &quot;{testimonial.text}&quot;
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center justify-between border-t border-[#d4ebe0] pt-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4a7c59] to-[#6b9b7a] flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#2d5a3d]">{testimonial.name}</h4>
                          <p className="text-sm text-[#6b9b7a]">{testimonial.location}</p>
                        </div>
                      </div>
                      <div className="hidden sm:block">
                        <span className="inline-block px-4 py-2 bg-[#d4ebe0] text-[#2d5a3d] text-sm font-medium rounded-full">
                          {testimonial.product}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#4a7c59] w-8"
                    : "bg-[#a8d5ba] hover:bg-[#6b9b7a]"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-[#4a7c59] hover:bg-[#4a7c59] hover:text-white transition-colors hidden md:flex"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-[#4a7c59] hover:bg-[#4a7c59] hover:text-white transition-colors hidden md:flex"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
