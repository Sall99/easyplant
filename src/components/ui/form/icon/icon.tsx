import { FC } from "react";
import { IconProps } from "@types";
import { ReactSVG } from "react-svg";

export const Icon: FC<IconProps> = ({ name, className, onClick }) => {
  return (
    <ReactSVG
      src={`/svg/${name}.svg`}
      className={className}
      onClick={onClick}
    />
  );
};
