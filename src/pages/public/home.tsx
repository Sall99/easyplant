import { Icon } from "components";
import { homeHeader, selfWateringItems, shopIndoorItems } from "services";

export const Home = () => {
  return (
    <section className="mt-_73">
      <div className="flex items-center justify-center gap-_100">
        {homeHeader.map(({ title, subtitle, icon }, key) => (
          <div key={key} className="flex flex-col items-center text-gray-200">
            <Icon name={icon} />
            <h2 className="text-base font-semibold">{title}</h2>
            <p className="text-sm">{subtitle}</p>
          </div>
        ))}
      </div>
      <div className="text-gray-200 flex flex-col items-center justify-center mt-_100">
        <h2 className="text-_40 font-semibold">Shop indoor plants</h2>
        <div className="flex gap-5 mt-14">
          {shopIndoorItems.map(({ name, img }, key) => (
            <div
              key={key}
              className="w-_270 h-_314 flex-col justify-center items-center text-center"
            >
              <img src={img} alt={name} />
              <p className="text-base font-semibold mt-4">{name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-_114 text-gray-200">
        <h2 className="text-_40 font-semibold text-center mb-7">
          How self-watering works?
        </h2>
        <div className="flex items-center justify-center gap-4">
          {selfWateringItems.map(({ name, img, icon }, key) => (
            <div
              key={key}
              className="flex flex-col items-center justify-center"
            >
              <div>
                <div className="text-sm font-normal flex justify-center mb-4 gap-2">
                  <Icon name={icon} />
                  <p>{name}</p>
                </div>
                <img src={img} alt={name} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-_1140 h-_371 bg-gray-300 m-auto mt-_172 text-gray-200 rounded ">
        <div className="relative">
          <div className="w-_409 ml-_102 mt-_112 absolute -top-4">
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
            className="absolute right-0 -top-_202"
          />
        </div>
      </div>
    </section>
  );
};
