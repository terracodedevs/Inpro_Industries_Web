import { AtSign, MapPin, Phone } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Footer1() {
  return (
    <footer className="bg-black text-white p- md:p-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Logo and Map Section */}
        <div className="space-y-4">
          <img src="/logo.png" alt="Logo" className="md:w-[181px] mb-4 "   />
          <h2 className="text-lg font-semibold">Find Us Here</h2>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d49116.497792684015!2d80.07457330347013!3d7.1459320461807225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1731490658844!5m2!1sen!2slk"
              className="w-full h-64 border-0 rounded-lg"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact and Links Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 mt-12 ml-10">
          {/* Contact Information */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">CONTACT</h3>
            <a href="#" className="flex items-center gap-2 hover:text-blue-400 transition">
              <MapPin size={20} />
              <p className="text-sm">bla bla address</p>
            </a>
            <a href="tel:1300762950" className="flex items-center gap-2 hover:text-blue-400 transition">
              <Phone size={20} />
              <p className="text-sm">+94779 402202 / +94717 302202</p>
            </a>
            <a href="mailto:info@purehopefm.com" className="flex items-center gap-2 hover:text-blue-400 transition">
              <AtSign size={20} />
              <p className="text-sm">inproindustries@yahoo.com</p>
            </a>
          </div>

          {/* Links Section */}
          <div className="space-y-2 mt-7 sm:mt-0">
            <h3 className="font-bold text-lg">OUR LINKS</h3>
            <ul className="space-y-1">
              <li className="text-sm">
                <NavLink to="#" className="hover:text-blue-400 transition">Home</NavLink>
              </li>
              <li className="text-sm">
                <NavLink to="#About-Us" className="hover:text-blue-400 transition">About Us</NavLink>
              </li>
              <li className="text-sm">
                <NavLink to="#services" className="hover:text-blue-400 transition">Services</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-10 text-center text-sm">
        <p>© {new Date().getFullYear()} Inpro. All rights reserved.</p>
      </div>
    </footer>
  );
}