import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SlidePage1 from '../SlidePage.jsx/SlidePage1';

const Slider = () => {
    return (
        <div className='max-w-4xl  border border-blue-400'>
            <h1 className='text-black font-bold text-5xl mx-20'>BEST SELLERS</h1>
           <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><SlidePage1></SlidePage1></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
 
      </Swiper>  
        </div>
    );
};

export default Slider;