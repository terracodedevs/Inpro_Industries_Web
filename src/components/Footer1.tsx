import { AtSign, Link, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer1() {
  return (
    <div className="  overflow-hidden">
        <div className="bg-black/90 text-white p-10 md:p-16 w-full sm:w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 justify-around md:mb-10">
            <div className="space-y-4">
                  <img src="/logo.png" className="md:w-[181px]" />
                  <div>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d49116.497792684015!2d80.07457330347013!3d7.1459320461807225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1731490658844!5m2!1sen!2slk" className='w-60 sm:w-80 m-6 border-4 rounded-lg border-blue-900' loading="lazy" ></iframe>
                  </div>
                </div> 
                <div className="grid sm:grid-cols-2  lg:grid-cols-5 md:gap-6 mt-8 lg:flex lg:justify-between">
                    <div className="flex flex-col gap-4 ">
                        <h3 className="font-bold">CONTACT</h3>
                        <a href="https://maps.app.goo.gl/KCmzaAgV1R8nX51XA">
                            <div className="flex flex-row gap-2">
                            <MapPin size={20} className="" />
                            <p className=" text-sm w-56">
                                Suite 346 , Level 2/66 Victor Cres, Narre Warren VIC 3805,
                                Australia
                            </p>
                            </div>
                        </a>
                        <a href="tel:1300762950">
                            <div className="flex flex-row gap-2">
                            <Phone size={20} className="" />
                            <p className="text-sm">1300 762 950</p>
                            </div>
                        </a>
                        <a href="mailto:info@purehopefm.com.ou">
                            <div className="flex flex-row gap-2">
                            <AtSign size={20} className="" />
                            <p className="text-sm">info@purehopefm.com.au</p>
                            </div>
                        </a> 
                    </div>
                    <div className="space-y-2  mt-7 sm:mt-0 ">
                    <h3 className="font-bold ">OUR LINKS</h3>
                    <ul className="space-y-1 ">
                        <li className="text-sm">
                        <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="text-sm">
                        <NavLink to="/about-us">About Us</NavLink>
                        </li>
                        <li className="text-sm">
                        <NavLink to="/ourservices">Services</NavLink>
                        </li>
                        <li className="text-sm hidden">
                        <NavLink to="/recent-updates">Recent Updates</NavLink>
                        </li>
                        <li className="text-sm">
                        <NavLink to="/requestquote">Request A Quote</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
