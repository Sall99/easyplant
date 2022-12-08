import { FC } from "react";
import { ButtonProps } from "@types";
import clsx from "clsx";
import { motion } from "framer-motion";

export const Button: FC<ButtonProps> = ({
  label,
  type,
  disabled,
  onClick,
  className,
  variant = "primary",
}) => {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "rounded-_6 h-12  text-base leading-5 hover:opacity-90 transition duration-300 ease-in-out",
        variant === "primary"
          ? "bg-green-100 text-white"
          : "bg-green-200 text-gray-200",
        className
      )}
      whileHover={{
        scale: 0.9,
      }}
      whileTap={{
        scale: 0.8,
      }}
    >
      {label}
    </motion.button>
  );
};
