import  { useState, useEffect, useRef } from 'react';
import { AlignJustify, X, MessageCircleMore, SendIcon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: { target: any; }) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <nav className="flex justify-between items-center w-full backdrop-blur-sm bg-black/50 absolute left-1/2 translate-x-[-50%] px-[10%] p-6 h-16 md:h-20 lg:shadow-xl z-40">
        <div className="w-40 sm:w-44 md:w-56 lg:w-44">
          <a href="#home" className="">
            <img src='/logo.png' alt="Logo"/>
          </a>
        </div>
        {/* Mobile menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? (
              <div>
                <X />
              </div>
            ) : (
              <div>
                <AlignJustify />
              </div>
            )}
          </button>
        </div>
        {/* Normal navbar */}
        <ul className={`hidden lg:flex items-center gap-9`}>
          <a href="#services" className="text-white hover:font-bold focus:font-bold">
            <li>Services</li>
          </a>
          <a href="#Why-Choose" className="text-white hover:font-bold focus:font-bold">
            <li>Why</li>
          </a>
          
          <a href='#contact-us'>
            <div className='flex flex-row bg-blue-900 text-white px-8 py-2 rounded-full w-[156px] hover:scale-110 active:scale-95 transition-all duration-300 justify-center items-center shadow-md'>
                  <button className='flex-grow text-left font-semibold focus:outline-none'>
                    <p className='font-normal text-[12px] font-inter'> Contact Us</p>
                  </button>
                  <SendIcon className='ml-2' size={20}/>
            </div>
          </a>
        </ul>
      </nav>

      {/* Mobile dropdown menu */}
      <div className='flex justify-center '>
      <div
        ref={menuRef}
        className={`lg:hidden flex justify-center z-30 absolute top-[55px] sm:top-[120px] w-screen bg-white transform rounded-b-2xl transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <ul className="flex flex-col items-center gap-4 px-10 py-4 mt-10">
          <a href="#" className="text-black" onClick={toggleMenu}>
            <li>Home</li>
          </a>
          <a href="#About-Us" className="text-black" onClick={toggleMenu}>
            <li>About Us</li>
          </a>
          <a href="#services" className="text-black" onClick={toggleMenu}>
            <li>Services</li>
          </a>
          <a href="#Why-Choose" className="text-black" onClick={toggleMenu}>
            <li>Why</li>
          </a>
          <a href='#contact-us' onClick={toggleMenu}>
            <div className='flex flex-row bg-blue-600 text-white px-8 py-2 rounded-full w-[156px] hover:scale-110 active:scale-95 transition-all duration-1000 justify-center items-center shadow-md'>
                  <button className='flex-grow text-left font-semibold focus:outline-none'>
                    <p className='font-normal text-[12px] font-inter'> Contact Us</p>
                  </button>
                  <MessageCircleMore className='ml-2' size={20}/>
            </div>
          </a>
        </ul>
      </div>
      </div>
    </div>
  );
}