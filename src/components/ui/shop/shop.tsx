import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Iimages } from "@types";

export const ShopContainer = ({ items }: Iimages) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-gray-200 gap-x-7 gap-y-_50">
      {items.map(({ images, title, description, colors, price }, index) => {
        return (
          <div key={index} className="relative">
            <div className="hover:cursor-pointer">
              <Swiper
                key={index}
                spaceBetween={50}
                slidesPerView={1}
                // navigation={true}
                modules={[Navigation]}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      key={index}
                      src={image}
                      alt={title}
                      className="w-full"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <h2 className="text-lg font-semibold mt-5 flex justify-between items-center">
              <span>{title}</span>
              <span>${price}</span>
            </h2>
            <p className="text-sm">{description}</p>
            <div className="flex items-center-2 gap-2 mt-2">
              {colors.map((color, index) => {
                return (
                  <div
                    key={index}
                    style={{ backgroundColor: color }}
                    className="w-4 h-4 rounded-full hover:cursor-pointer"
                  ></div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
