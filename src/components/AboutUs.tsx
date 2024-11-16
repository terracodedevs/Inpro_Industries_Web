import React from 'react';
import { Printer, Shield, Clock, Users } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
          <h2 className="text-4xl font-bold t mb-12 bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">About Us
</h2>
            <p className="text-lg text-slate-600 mb-8">
              Since 2010, Inpro Industries has been at the forefront of the printing industry, 
              delivering exceptional quality and innovative solutions to businesses across the globe. 
              Our state-of-the-art facility and experienced team ensure that every project meets the 
              highest standards of excellence.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-gray-70 to-white shadow-lg p-4 rounded-lg">
                <Users className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-bold text-slate-900">1000+</h3>
                <p className="text-slate-600">Happy Clients</p>
              </div>
              <div className="bg-gradient-to-r from-gray-70 to-white shadow-lg p-4 rounded-lg">
                <Clock className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-bold text-slate-900">13+ Years</h3>
                <p className="text-slate-600">Experience</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="./printer-with-picture-mountain-it-1024x585.jpg"
                alt="Modern printing facility"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-800 to-blue-500  text-white p-6 rounded-lg shadow-xl">
              <Shield className="w-8 h-8 mb-2" />
              <h3 className="font-bold text-xl mb-1">Quality Guaranteed</h3>
              {/* <p>ISO 9001:2015 Certified</p> */}
              <p>Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;