import React from 'react';
import { Award, Zap, Heart, Target, Settings, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Settings,
      title: 'Cutting-edge Technology',
      description: 'State-of-the-art printing equipment for superior quality output',
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Fast and efficient service without compromising on quality',
    },
    {
      icon: Target,
      title: 'Custom Solutions',
      description: 'Tailored printing solutions to meet your specific needs',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes for perfect results',
    },
    {
      icon: Heart,
      title: 'Customer Focus',
      description: 'Dedicated support team for personalized service',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Constantly evolving with the latest industry trends',
    },
  ];

  return (
    <section className="py-20 bg-slate-50" id="why-choose-us">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Inpro Industries?</h2>
          <p className="text-lg text-slate-600">
            We combine cutting-edge technology with decades of expertise to deliver outstanding printing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <reason.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{reason.title}</h3>
              <p className="text-slate-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;