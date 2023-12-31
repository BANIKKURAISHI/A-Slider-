import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SlidePage1 from '../SlidePage.jsx/SlidePage1';
import SlidePage2 from '../SlidePage.jsx/SlidePage2';
import SlidePage3 from '../SlidePage.jsx/SlidePage3';

const Slider = () => {
    return (
        <div className='w-96 lg:max-w-3xl   '>
            <h1 className='text-black font-bold text-4xl mx-14'>BEST SELLERS</h1>
           <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide><SlidePage1></SlidePage1></SwiperSlide>
        <SwiperSlide><SlidePage2></SlidePage2></SwiperSlide>
        <SwiperSlide><SlidePage3></SlidePage3></SwiperSlide>
 
      </Swiper>  
        </div>
    );
};

export default Slider;