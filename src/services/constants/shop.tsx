import { ShopContainer } from "components";
import {
  hugePlantImages,
  largePlantImages,
  mediumPlantImages,
  smallPlantImages,
} from "./shop-data";

export const shopTabsItems = [
  {
    title: "Small",
    subtTitle: "Subt title",
    content: <ShopContainer items={smallPlantImages} />,
  },
  {
    title: "Medium",
    subtTitle: "Subt title",
    content: <ShopContainer items={mediumPlantImages} />,
  },
  {
    title: "Large",
    subtTitle: "Subt title",
    content: <ShopContainer items={largePlantImages} />,
  },
  {
    title: "Huge",
    subtTitle: "Subt title",
    content: <ShopContainer items={hugePlantImages} />,
  },
];
