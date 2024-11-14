// import React from 'react';



const AboutUs = () => {
  return (
    <div className="mx-auto sm:px-4 py-10 lg:py- bg-cover bg-bottom xl:px-[6%] " style={{backgroundImage:'url("images/home/Background lines.png")'}} >
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 bg-bottom " >

        {/* Content */}

        <div className="w-full lg:w-1/2 flex flex-col sm:p-10 px-6">
          <div className="flex lg:w-1/3 sm:w-1/2 flex-row">
          <h1 className="font-bold text-4xl  bg-gradient-to-r from-blue-900 to-purple-700  bg-clip-text text-transparent">About Us</h1>
          </div>
          <div className="text-black lg:text-base text-sm mb-6 lg:text-start text-justify mt-8">
            <p>
            Welcome to Inpro Industries (Pvt) Ltd., where passion meets precision in the world of printing services and product provision. Since our inception on January 10, 2010, as an individual company, and subsequently incorporating as a company with limited liability on February 9, 2023, we have been dedicated to setting the gold standard in the industry. As the owner, we are proud to lead a team of experts committed to delivering unparalleled quality in every aspect of our business.
            </p>
            <p className="text-black lg:text-base text-sm mb-6 lg:text-start text-justify mt-8">
            At Inpro Offset Printing, we’re passionate about delivering high-quality prints with precision and care. With years of experience, we specialize in creating vibrant, detailed prints for all your needs—from business cards to large-scale posters. Our commitment to quality and personalized service ensures every project meets the highest standards, making your vision our priority.
            </p>
          </div>
        </div>
      

      {/* Image  */}
        
        <div className="w-full lg:w-1/2 relative sm:aspect-[8/7] aspect-[8/8] ">
          <div className="absolute sm:inset-10 inset-6 ">
            <div className="relative w-full h-full">
              <div className="relative w-full h-full bg-[url('/4.jpg')] bg-cover bg-blend-overlay border-4 border-white">
                <div className="absolute inset-0 bg-[url('/splash.jpg')] bg-center bg-cover  mix-blend-screen"></div>
              </div>
            </div>
          </div>
        </div>
        
        </div>
        

    </div>
  );
};

export default AboutUs;