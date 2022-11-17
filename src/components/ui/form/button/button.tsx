import { FC } from "react";
import { ButtonProps } from "@types";
import clsx from "clsx";

export const Button: FC<ButtonProps> = ({
  label,
  type,
  disabled,
  onClick,
  className,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "bg-green-100  rounded-_6 h-12 text-white text-base leading-5 hover:opacity-90 transition duration-300 ease-in-out",
        className
      )}
    >
      {label}
    </button>
  );
};
