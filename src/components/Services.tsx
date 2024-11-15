import React from 'react';
import { Printer, FileText, Image, Package } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: 'Customise Year Planer',
      image: './images.jpeg',
    },
    {
      icon: Image,
      title: 'Table Calender',
      image: './table-calendars.jpg',
    },
    {
      icon: Package,
      title: 'Spiral binding',
      image: './Book-bindings-1-1024x683.jpg',
    },
    {
      icon: Printer,
      title: 'Hard Cover making',
      image: './20231127-Wooding-DSC09132.jpg',
    },
    {
      icon: FileText,
      title: 'PVC Stationery',
      image: './31-500x500.webp',
    },
    {
      icon: Image,
      title: 'Laminating',
      image: 'worker-laminating-pouches-light-blue-600nw-2115660893.webp',
    },
    {
      icon: Package,
      title: 'Foiling',
      image: './1280_HHP-3.webp',
    },
    {
      icon: Printer,
      title: 'Customise Notebook',
      image: './black-floral.jpg',
    },
    {
      icon: Printer,
      title: 'Cake Boards',
      image: './411fd2db6b276b2fa0e6d6c63d019471.jpg',
    },
  ];

  return (
    <section className="py-20 bg-slate-50" id="services">
      <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent">
  Our Services
</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-center bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
                {service.title}
              </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;