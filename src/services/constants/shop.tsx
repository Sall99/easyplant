import { ShopContainer } from "components/ui";
import {
  hugePlantImages,
  largePlantImages,
  mediumPlantImages,
  smallPlantImages,
} from "./shop-data";

export const shopTabsItems = [
  {
    id: 0,
    title: "Small",
    subtTitle: "Subt title",
    content: <ShopContainer items={smallPlantImages} />,
  },
  {
    id: 1,
    title: "Medium",
    subtTitle: "Subt title",
    content: <ShopContainer items={mediumPlantImages} />,
  },
  {
    id: 2,
    title: "Large",
    subtTitle: "Subt title",
    content: <ShopContainer items={largePlantImages} />,
  },
  {
    id: 3,
    title: "Huge",
    subtTitle: "Subt title",
    content: <ShopContainer items={hugePlantImages} />,
  },
];
