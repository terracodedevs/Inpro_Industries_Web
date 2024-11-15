import React from 'react';
import { Award, Users, Clock } from 'lucide-react';

const About = () => {
  const milestones = [
    {
      date: 'January 10, 2010',
      title: 'Company Establishment',
      description: 'Founded as an individual company with a vision for excellence in printing.',
    },
    {
      date: 'February 9, 2023',
      title: 'Corporate Evolution',
      description: 'Incorporated as a limited liability company, expanding our capabilities.',
    },
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Our Journey</h2>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Clock, label: 'Years of Excellence', value: '13+' },
            { icon: Users, label: 'Satisfied Clients', value: '1000+' },
            { icon: Award, label: 'Quality Awards', value: '25+' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="text-center p-6 rounded-lg bg-slate-50 hover:shadow-lg transition-shadow">
              <Icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-3xl font-bold text-slate-900 mb-2">{value}</h3>
              <p className="text-slate-600">{label}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {milestones.map((milestone, index) => (
            <div key={milestone.date} className="relative pl-8 pb-8 border-l-2 border-blue-600 last:pb-0">
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 rounded-full" />
              <div className="mb-1 text-sm text-blue-600 font-semibold">{milestone.date}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{milestone.title}</h3>
              <p className="text-slate-600">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;