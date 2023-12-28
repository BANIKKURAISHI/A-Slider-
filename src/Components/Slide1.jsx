import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Page1 from "./Page/Page1";
import Page2 from "./Page/Page2";

const Slide1 = () => {
  return (
    <div className="w-11/12 min-h-screen mx-auto my-20">
      <Swiper rewind={true} navigation={true} modules={[Navigation]}>
        <SwiperSlide>
          <Page1 />
        </SwiperSlide>
        <SwiperSlide>
          <Page2 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide1;
