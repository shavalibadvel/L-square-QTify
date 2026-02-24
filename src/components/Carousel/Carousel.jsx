import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules"; 
import "swiper/css";
import styles from "./Carousel.module.css";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";

// This helper component ensures the carousel resets to the first slide 
// whenever the data (albums) changes.
const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    // This resets the carousel to the first slide when the data changes
    swiper.slideTo(0);
  }, [data, swiper]); // Add 'swiper' here to satisfy ESLint

  return null;
};

const Carousel = ({ data, renderComponent }) => {
  return (
    <div className={styles.wrapper}>
        <Swiper
            initialSlide={0}
            modules={[Navigation]}
            slidesPerView={"auto"} // Critical: Allows multiple cards per row
            spaceBetween={40}      // Matches the Figma spacing
            allowTouchMove
            >
        <Controls data={data} />
        {/* These must be INSIDE Swiper to use the useSwiper hook */}
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