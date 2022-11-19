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
              <Icon name={img} />
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
                <p className="text-sm font-normal flex justify-center mb-4 gap-2">
                  <Icon name={icon} />
                  <span>{name}</span>
                </p>
                <Icon name={img} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
