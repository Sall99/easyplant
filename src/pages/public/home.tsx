import { Categories, Icon } from "components";
import { homeHeader, selfWateringItems } from "services";

export const Home = () => {
  return (
    <section className="mt-_73">
      <div className="flex items-center justify-center gap-8 sm:gap-_100 px-8">
        {homeHeader.map(({ title, subtitle, icon }, key) => (
          <div
            key={key}
            className="flex flex-col items-center text-center text-gray-200"
          >
            <Icon name={icon} />
            <h2 className="text-sm mt-_10 sm:text-base sm:font-semibold">
              {title}
            </h2>
            <p className="text-sm hidden sm:block">{subtitle}</p>
          </div>
        ))}
      </div>
      <div className="text-gray-200 flex flex-col items-center justify-center mt-_100 px-8">
        <h2 className="text-2xl sm:text-_40 font-semibold">
          Shop indoor plants
        </h2>
        <p className="sm:hidden text-center mt-_10">
          Our plants are picked carefully to fit any home condition
        </p>
        <Categories />
      </div>
      <div className="mt-_114 text-gray-200 px-8">
        <h2 className="text-2xl sm:text-_40 font-semibold text-center mb-7">
          How self-watering works?
        </h2>
        <div className="flex md:items-center md:justify-center sm:gap-4 flex-col md:flex-row">
          {selfWateringItems.map(({ name, img, icon }, key) => (
            <div
              key={key}
              className="flex flex-col md:items-center md:justify-center"
            >
              <div>
                <div className="text-sm font-normal flex md:justify-center mb-4 gap-2">
                  <Icon name={icon} />
                  <p className="text-base">{name}</p>
                </div>
                <img src={img} alt={name} className="hidden md:block" />
              </div>
            </div>
          ))}
          <img
            src="/img/Easy.png"
            alt="Easy to maintain"
            className="sm:hidden"
          />
        </div>
      </div>
      <div className="max-w-_1140 md:h-_371 md:bg-gray-300 m-auto mt-8 sm:mt-_172 text-gray-200 rounded">
        <div className="sm:hidden px-8 sm:px-0">
          <h2 className="text-2xl sm:text-_40 font-semibold text-center text-gray-200">
            Beautiful plants, <br /> free shipping
          </h2>
          <p className="text-center">
            Your plants are guaranteed to arrive in a healthy condition - If
            not, we will replace them for free.
          </p>
        </div>
        <div className="md:relative">
          <div className="w-_409 ml-_102 mt-_112 absolute -top-4 hidden md:block">
            <h2 className="font-semibold text-_40">
              Beautiful plants, <br /> free shipping
            </h2>
            <p className="text-sm">
              Your plants are guaranteed to arrive in a <br /> healthy condition
              - If not, we will replace <br /> them for free.
            </p>
          </div>
          <img
            src="/img/box.png"
            alt="Box with plants"
            className="hidden md:block md:absolute right-0 -top-_202"
          />
          <img
            src="/img/BoxMobile.png"
            alt="Box with plants"
            className="md:hidden mt-5 w-full"
          />
          <div className="flex justify-center">
            <button className="sm:hidden w-_335 px-4 py-3 text-gray-200 text-center bg-green-200 hover:cursor-pointer mt-_10">
              Got a question? Talk to us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
