import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Showcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: 'Corporate Branding Package',
      description: 'Complete branding solution including business cards, letterheads, and folders.',
      image: 'https://images.unsplash.com/photo-1635405074683-96d6921a2a68?auto=format&fit=crop&q=80',
    },
    {
      title: 'Event Marketing Materials',
      description: 'Large format banners and promotional materials for major events.',
      image: 'https://images.unsplash.com/photo-1611235115922-72bd53d13b43?auto=format&fit=crop&q=80',
    },
    {
      title: 'Premium Catalogs',
      description: 'High-quality product catalogs with perfect binding and spot UV finishing.',
      image: 'https://images.unsplash.com/photo-1544516229-5516998f0551?auto=format&fit=crop&q=80',
    },
  ];

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 bg-white" id="showcase">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Our Work</h2>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-2xl">
            <img
              src={projects[activeIndex].image}
              alt={projects[activeIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{projects[activeIndex].title}</h3>
                <p className="text-slate-200">{projects[activeIndex].description}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-slate-900 hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-slate-900 hover:bg-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-8 bg-blue-600' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;