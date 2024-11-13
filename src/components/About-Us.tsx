// import React from 'react';



const AboutUs = () => {
  return (
    <div className="mx-auto sm:px-4 py-10 lg:py- bg-cover bg-bottom xl:px-[6%] " style={{backgroundImage:'url("images/home/Background lines.png")'}} >
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 bg-bottom " >

        {/* Content */}

        <div className="w-full lg:w-1/2 flex flex-col sm:p-10 px-6">
          <div className="flex lg:w-1/3 sm:w-1/2 flex-row">
          <h1 className="font-bold text-4xl pu-4">About Us</h1>
          </div>
          <div className="flex flex-col">
            <p className="text-black lg:text-base text-sm mb-6 lg:text-start text-justify mt-8">
            At Inpro Offset Printing, we’re passionate about delivering high-quality prints with precision and care. With years of experience, we specialize in creating vibrant, detailed prints for all your needs—from business cards to large-scale posters. Our commitment to quality and personalized service ensures every project meets the highest standards, making your vision our priority.
            </p>
          </div>
        </div>
      

      {/* Image  */}
        
        <div className="w-full lg:w-1/2 relative sm:aspect-[8/7] aspect-[8/8] ">
          <div className="absolute sm:inset-10 inset-6 ">
            <div className="relative w-full h-full">
              <div className="relative w-full h-full bg-[url('/4.jpg')] bg-cover  ">
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