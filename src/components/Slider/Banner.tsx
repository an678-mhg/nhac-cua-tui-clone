import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface BannerProps {
  banners: any[];
}

const Banner: FC<BannerProps> = ({ banners }) => {
  return (
    <Swiper
      autoplay
      navigation
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
    >
      {banners?.map((item) => (
        <SwiperSlide key={item.key}>
          <div className="w-full aspect-auto rounded-md overflow-hidden">
            <LazyLoadImage
              className="rounded-md border"
              src={
                item.coverImageURL ||
                item.imageUrl ||
                item.thumbnail ||
                item.thumbURL
              }
              alt={item.title}
              effect={"blur"}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
