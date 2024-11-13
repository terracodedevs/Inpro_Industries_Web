
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay, FreeMode, Pagination} from "swiper/modules";
import { ArrowUpRight } from "lucide-react";






const Slider = () => {
  // JSON data representing your services
  const servicesData = [
    {
      imgSrc: "/1.jpg",
      title: "Printing",
      des:"bla bla"
    },
    {
      imgSrc: "/2.jpg",
      title: "Printing",
    },
    {
      imgSrc: "/3.jpg",
      title: "Printing",
    },
    
  ];

  const title = "text-[rgba(0,48,71,1)]  font-medium text-[18px] mt-5  p-2 flex justify-center items-center text-nowrap";

  return (
    
    <div className="w-full bg-[url('/4.jpg')] p-10 bg-cover  bg-no-repeat  ">
      <div className="max-w-[90%] md:max-w-[80%]  lg:max-w-[80%]  pb-12 mx-auto "> 
        {/* Added relative for positioning pagination */}
        <div className={'${poppins.variable} bg-blue-900 text-white w-32 h-8  rounded-md flex justify-center items-center font-light '}>
          Our Services
        </div>
        {/* <div className={'${ubuntu.variable} w-72 text-white  text-[30px] font-sans font-normal mt-5'}>
        Elevate Your Space
        With your Service
        </div> */}
        <Swiper
         
         loop={true}
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween:15
            },
            700: {
              slidesPerView: 2
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }}
          freeMode={true}
          pagination={{
            clickable: true,
            
          }}
          modules={[FreeMode, Pagination,Autoplay]}
          className=" "
          autoplay={true}

      >
          {servicesData.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center lg:h-[500px]   h-[450px]">
                <div className="w-[330px] h-[340px]  bg-white rounded-3xl ">
                  <div className="h-[250.03px] rounded-3xl overflow-hidden">
                    <img
                      src={service.imgSrc}
                      alt={service.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="flex justify-center gap- lg:gap- items-center flex-col ">
                    <h1 className={title}>{service.title}</h1>
                    <p className="">{service.des }</p>
                    {/* <button className="bg-[rgba(0,48,71,1)] rounded-full text-white font-bold w-10 h-10 flex items-center justify-center shadow-lg mt-5 p-2">
                      <ArrowUpRight />
                    </button> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;