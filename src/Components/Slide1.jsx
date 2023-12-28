import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import FirstPage from "./Page/FirstPage";
import SecondPage from "./Page/SecondPage";

const Slide1 = () => {
  return (
    <div className="w-11/12  min-h-screen mx-auto my-20">
      <Swiper  rewind={true} navigation={
      { 
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
      } modules={[Navigation]}>
        <SwiperSlide>
          <FirstPage/>
        </SwiperSlide>
        <SwiperSlide>
          <SecondPage/>
        </SwiperSlide>
      </Swiper>
      <div className="flex flex-row w-11/12 mx-auto  px-4 items-center">
      <div className="swiper-button-next text-center translate-y-1/2   bg-slate-500  shadow-2xl  px-6 py-6 rounded-full hover:bg-orange-400">
    
      </div>
      
      <div className="swiper-button-prev text-center translate-y-1/2  bg-slate-500   shadow-2xl  px-6 py-6 rounded-full hover:bg-orange-400">
 
      </div>
      </div>
    </div>
  );
};

export default Slide1;
