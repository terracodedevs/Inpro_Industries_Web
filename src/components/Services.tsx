import { Swiper, SwiperSlide } from "swiper/react";
//@ts-ignore
import "swiper/css";
//@ts-ignore
import "swiper/css/pagination";
//@ts-ignore
import "swiper/css/free-mode";
//@ts-ignore
import "swiper/css/autoplay";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

const Slider = () => {
  // JSON data representing your services
  const servicesData = [
    {
      imgSrc: "/calend.png",
      title: "2025 Calendars",
    },
    {
      imgSrc: "/tablec.jpg",
      title: "Table Calendar",
    },
    {
      imgSrc: "/diaries.jpg",
      title: "Customise Notebook",
    },
    {
      imgSrc: "/cyp.jpg",
      title: "Customise Year Planer",
    },
    {
      imgSrc: "/spb.webp",
      title: "Spiral Binding",
    },
    {
      imgSrc: "/hcm.webp",
      title: "Hard Cover Making",
    },
    {
      imgSrc: "/PVC.jpg",
      title: "PVC Stationery",
    },
    {
      imgSrc: "/lamin.jpg",
      title: "Laminating",
    },
    {
      imgSrc: "/images.jpg",
      title: "Foiling",
    },
    {
      imgSrc: "/cake.webp",
      title: "Cake Boards",
    },
    
  ];

  const title =
    "text-[rgba(0,48,71,1)] font-medium text-[18px] mt-5 p-2 flex justify-center items-center text-nowrap";

  return (
    <div className="w-full bg-[url('/R-12.png')] p-10 bg-cover bg-no-repeat">
      <div className="max-w-[100%] md:max-w-[100%] lg:max-w-[100%] pb-12 mx-auto ">
        <div className="rounded-md flex justify-center items-center font-light ">
        <h1 className="font-bold text-4xl p-4 bg-gradient-to-r from-blue-900 to-purple-700  bg-clip-text text-transparent">Our services</h1>
        </div>
        <Swiper
          loop={true}
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 2,
            },
            1100: {
              slidesPerView: 4,
              spaceBetween:15
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className=""
          autoplay={true}
        >
          {servicesData.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center lg:h-[500px] h-[450px] ">
                <div className="w-[280px] h-[340px] bg-white rounded-3xl transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-2xl">
                  <div className="h-[250.03px] rounded-3xl overflow-hidden">
                    <img
                      src={service.imgSrc}
                      alt={service.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="flex justify-center gap- lg:gap- items-center flex-col">
                    <h1 className={title}>{service.title}</h1>
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