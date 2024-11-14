import { AtSign, MapPin, Phone } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Footer1() {
  return (
    <div className='relative bottom-0'>
    <div className="bg-black text-white p- md:p-16 ">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Logo and Map Section */}
        <div className="space-y-4">
          <img src="/logo.png" alt="Logo" className="w-[179px] mt-4 sm:mt-0 ml-3 sm:ml-0 md:w-[181px] mb-4 "   />
          <h2 className="text-lg font-semibold ml-3 sm:ml-0">Find Us Here</h2>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d49116.497792684015!2d80.07457330347013!3d7.1459320461807225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1731490658844!5m2!1sen!2slk"
              className=" mx-5 sm:w-full h-64 border-0 rounded-lg"
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
            <div className='flex flex-row gap-2'>
              <Phone size={20} />
            <a href="tel:+94779402202" className="flex items-center gap-2 hover:text-blue-400 transition">
              <p className="text-sm">+9477 94 02 202 / </p>
            </a>
            <a href="tel:+94779402202" className="flex items-center gap-2 hover:text-blue-400 transition">
              <p className="text-sm">+9471 73 02 202</p>
            </a>
            </div>
            <a href="mailto:inproindustries@yahoo.com" className="flex items-center gap-2 hover:text-blue-400 transition">
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
      <div className="mt-10 border-t border-gray-700 pt-10 text-center text-sm flex flex-row justify-between mx-3 mb-3">
        <a href='https://www.terracodedev.com' className='hover:text-orange-500'>
          <p>© Designed By TerraCode.</p>
        </a>
        <p>© {new Date().getFullYear()} Inpro. All rights reserved.</p>
      </div>
    </div>
    </div>
  );
}