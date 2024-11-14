// ContactForm.tsx
import React from 'react';


const ContactUs: React.FC = () => {
 
   

  return (
   
    <div className='flex justify-center items-center min-h-screen bg-gray-100 mt-7'>
    <div className="w-full mx-[10%] p-6 bg-white shadow-lg rounded-lg ">
      <h2 className="text-3xl text-center font-bold bg-gradient-to-r from-blue-900 to-purple-700  bg-clip-text text-transparent mb-4">Contact Information</h2>
      <div className=" flex flex-col lg:pb-10 pb-2 lg:justify-center lg:items-start md:basis-1/2 lg:p-4 items-center lg:pt-8">
          
          <p className=" text-black text-lg lg:text-start text-center" >
          Connect to customer care for more information about 
          your service request.
          </p>
        </div>
        <div className="flex items-center   md:basis-1/2 mt-4 md:mt-0 justify-start">
          {/*phone icon*/}
          <div className="md:w-[50px] md:h-[50px] xl:w-[70px] xl:h-[70px] rounded-full bg-[#F4F4F4] p-2 md:ml-10 w-[30px] h-[30px] md:p-4">
            <img src="/call image.png" />
          </div>
          {/*phone number*/}
          <div className="items-start md:ml-6 ml-5 ">
            
            <div className='flex flex-col '>
            <a href="tel:+94717302202" className=" text-lg text-black md:text-2xl font-bold">+9471 73 02 202</a>
            <a href="tel:+94779402202" className=" text-lg text-black md:text-2xl font-bold">+9477 94 02 202</a>
            </div>
          </div>
        </div>
    </div>
    </div>
    
  );
};

export default ContactUs;
