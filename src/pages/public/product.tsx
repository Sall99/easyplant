import { useParams } from "react-router-dom";
import { allPlants, productAccordion } from "services";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Accordion, Button } from "components";
import { benefits } from "services";

export const Benefits = () => {
  return (
    <div className="flex flex-col gap-5 mt-10 text-gray-200 pb-10">
      {benefits.map(({ img, title, description }, index) => (
        <div key={index} className="flex gap-5">
          <img src={img} alt={title} />
          <div>
            <h2 className="font-semibold">{title}</h2>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Product = () => {
  const { id } = useParams<{ id: string }>();
  const plant = allPlants.find((plant) => plant.id === Number(id));

  return (
    <div className="mt-_10 min-h-screen max-w-_1140 m-auto text-gray-200">
      {plant ? (
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="w-1/3">
            <Swiper modules={[Navigation]}>
              {plant.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    key={index}
                    src={image}
                    alt={plant.title}
                    className="w-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-_440">
            <h1 className="text-2xl font-bold">{plant.description}</h1>
            <p className="text-gray-500 text-sm">{plant.description}</p>
            <p className="text-gray-500 text-sm">${plant.price}</p>
            <div className="mt-5">
              <p className="text-sm">Desert Brown</p>
              <div className="flex items-center-2 gap-2 mt-2">
                {plant.colors.map((color, index) => {
                  return (
                    <div
                      key={index}
                      style={{ backgroundColor: color }}
                      className="w-5 h-5 rounded-full hover:cursor-pointer"
                    ></div>
                  );
                })}
              </div>
            </div>
            <div className="mt-5">
              <Button label="Add to cart" className="w-full" />
              <Benefits />
              <div className="mt-5 w-full">
                <Accordion data={productAccordion} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-200">
          <h1 className="text-2xl font-semibold">
            Sorry, we couldn't find the plant you're looking for. Please try
            again later.
          </h1>
          <Button label="Go back" className="mt-5 w-28" />
        </div>
      )}
    </div>
  );
};
