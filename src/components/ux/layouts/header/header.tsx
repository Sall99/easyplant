import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IHeader } from "@types";
import clsx from "clsx";
import { Icon, Button } from "components";

import { navLinks } from "services";
import { publicRoutes } from "routes";

export const Header: FC<IHeader> = ({ hero = true }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate({
      pathname: publicRoutes.shopPlants.path,
    });
  };
  return (
    <header
      className={clsx(
        "px-8",
        hero ? "bg-hero-pattern h-_700 bg-cover bg-center " : ""
      )}
    >
      <motion.div
        className="flex justify-between items-center text-sm font-normal leading-_17.26 text-gray-100 max-w-_1140 m-auto py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Link to="/">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
            <Icon name="Logo" />
          </motion.div>
        </Link>
        <div className="hidden sm:block">
          <ul className="flex items-center gap-5">
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
              >
                <Link to={link.path}>{link.name}</Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link to="/cart" className="flex items-center gap-2">
            <Icon name="Cart" /> <p>Cart</p>
          </Link>
        </motion.div>
      </motion.div>
      {hero ? (
        <div className="sm:w-_592 m-auto mt-_132 flex flex-col justify-center items-center gap-9">
          <motion.p
            className="text-4xl sm:text-_66 -tracking-_2 text-center font-semibold text-gray-200"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Grow beautiful <br /> self-watering plants
          </motion.p>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              whileHover={{
                scale: 0.9,
              }}
              whileTap={{
                scale: 0.8,
              }}
            >
              <Button
                label="Shop plants"
                type="button"
                onClick={handleClick}
                className="w-60"
              />
            </motion.div>
          </motion.div>
        </div>
      ) : null}
    </header>
  );
};
