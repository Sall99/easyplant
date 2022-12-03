import { useNavigate } from "react-router-dom";
import { publicRoutes } from "routes";
import { shopIndoorItems } from "services";

export const Categories = () => {
  const navigate = useNavigate();
  const handleClick = (category: string) => {
    navigate({
      pathname: publicRoutes.shopPlants.path,
      search: `?category=${category}`,
    });
  };
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4  justify-center items-center gap-5 mt-_10 sm:mt-14">
      {shopIndoorItems.map(({ name, img, category }, key) => (
        <div
          key={key}
          className="flex-col justify-center items-center text-center hover:cursor-pointer"
          onClick={() => handleClick(category)}
        >
          <img
            src={img}
            alt={name}
            className="w-_162 h-_187 sm:w-full sm:h-full"
          />
          <p className="text-base font-semibold mt-4">{name}</p>
        </div>
      ))}
    </div>
  );
};
