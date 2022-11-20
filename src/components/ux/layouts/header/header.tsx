import { FC } from "react";
import { IHeader } from "@types";
import clsx from "clsx";
import { Icon, Button } from "components";
import { Link } from "react-router-dom";
import { navLinks } from "services";

export const Header: FC<IHeader> = ({ hero = true }) => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <header
      className={clsx(
        "px-8",
        hero ? "bg-hero-pattern h-_700 bg-cover bg-center " : ""
      )}
    >
      <div className="flex justify-between items-center text-sm font-normal leading-_17.26 text-gray-100 max-w-_1140 m-auto py-5">
        <Link to="/">
          <Icon name="Logo" />
        </Link>
        <div className="hidden sm:block">
          <ul className="flex items-center gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/cart" className="flex items-center gap-2">
          <Icon name="Cart" /> <p>Cart</p>
        </Link>
      </div>
      {hero ? (
        <div className="sm:w-_592 m-auto mt-_132 flex flex-col justify-center items-center gap-9">
          <p className="text-4xl sm:text-_66 -tracking-_2 text-center font-semibold text-gray-200">
            Grow beautiful <br /> self-watering plants
          </p>
          <Button
            label="Shop plants"
            type="button"
            onClick={handleClick}
            className="w-60"
          />
        </div>
      ) : null}
    </header>
  );
};
