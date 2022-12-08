import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  addToCart,
  allPlants,
  productAccordion,
  productGallery,
} from "services";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Accordion, Button, Categories } from "components";
import { benefits } from "services";
import { useDispatch } from "react-redux";
import { goToTop } from "utils";

export const Benefits = () => {
  return (
    <div className="flex flex-col gap-5 mt-5 sm:mt-10 text-gray-200 pb-10">
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
  const dispatch = useDispatch();

  useEffect(() => {
    goToTop();
  }, []);

  return (
    <div className="sm:mt-_10 min-h-screen max-w-_1140 m-auto text-gray-200">
      {plant ? (
        <div>
          <div className="flex flex-col justify-center gap-5 sm:gap-10 md:flex-row">
            <div className="sm:w-1/3">
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
              <div className="hidden sm:grid grid-cols-6 gap-3">
                {productGallery.map((image, index) => (
                  <img
                    key={index}
                    src={`/img/${image}`}
                    className="w-_60 h-_60 mt-5"
                  />
                ))}
              </div>
            </div>
            <div className="sm:w-_440 px-5 sm:px-0">
              <h1 className="text-2xl font-bold">{plant.title}</h1>
              <p className="text-sm">{plant.description}</p>
              <p className="text-xl font-bold">${plant.price}</p>
              <div className="mt-3 sm:mt-5">
                <p className="text-base hidden sm:block">Desert Brown</p>
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
                <Button
                  label="Add to cart"
                  className="w-full"
                  onClick={() => dispatch(addToCart(plant))}
                />
                <Benefits />
                <div className="mt-5 w-full">
                  <Accordion data={productAccordion} />
                </div>
              </div>
            </div>
          </div>
          <div className="px-5">
            <h2 className="text-gray-200 font-semibold">You may also like</h2>
            <Categories />
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
