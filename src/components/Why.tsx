// import React from 'react';



const Why = () => {
  return (
    <div className="mx-auto sm:px-4 py-10 lg:py- bg-cover bg-bottom xl:px-[6%] h-screen " style={{backgroundImage:'url("images/home/Background lines.png")'}} >
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 bg-bottom " >

      {/* Image  */}
        
        <div className="w-full lg:w-1/2 relative sm:aspect-[8/7] aspect-[8/8]">
          <div className="absolute sm:inset-10 inset-6">
            <div className="relative w-full h-full">
              <div className="relative w-full h-full bg-[url('/4.jpg')] bg-cover">
                <div className="absolute inset-0 bg-[url('/splash.jpg')] bg-center bg-cover  mix-blend-screen"></div>
              </div>
            </div>
          </div>
        </div>
        

        {/* Content */}

        <div className="w-full lg:w-1/2 flex flex-col sm:p-10 px-6">
          <div className="flex lg:w-1/3 sm:w-1/2 flex-row">
          <h1 className="font-bold text-5xl pl-0 p-4  ">Why....</h1>
          </div>
          <div className="flex flex-col">
          <h1 className="text-3xl lg:text-2xl font-medium text-blue-900 mb-6">
            Welcome to Inpro – Your Trusted Offset Printing Partner
          </h1>
          <p className="text-black lg:text-base text-sm mb-6 lg:text-start text-justify">
          At Inpro, we specialize in delivering premium offset printing services tailored to meet the unique needs of every client. With years of expertise, top-notch equipment, and a commitment to quality, we bring your ideas to life with unmatched precision and vibrant colors. Our team is dedicated to providing reliable turnaround times, exceptional customer service, and competitive pricing to ensure your satisfaction every step of the way. Choose Inpro for results that make an impact!
          </p>
          </div>
        </div>
      </div>

    </div>
    // </div>
  );
};

export default Why;