import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules"; 
import "swiper/css";
import styles from "./Carousel.module.css";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";

// bit of carousel modification to reset to first slide when data changes, preventing "Maximum update depth exceeded" errors
const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    
    swiper.slideTo(0);
  }, [data, swiper]); 

  return null;
};

const Carousel = ({ data, renderComponent }) => {
  return (
    <div className={styles.wrapper}>
        <Swiper
            initialSlide={0}
            modules={[Navigation]}
            slidesPerView={"auto"} 
            spaceBetween={40}      
            allowTouchMove
            >
        <Controls data={data} />
        
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((item) => (
          <SwiperSlide key={item.id}>{renderComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;