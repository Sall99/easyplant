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
    category: "small",
    title: "Small",
    subtTitle: "Subt title",
    content: <ShopContainer items={smallPlantImages} />,
  },
  {
    id: 1,
    category: "medium",
    title: "Medium",
    subtTitle: "Subt title",
    content: <ShopContainer items={mediumPlantImages} />,
  },
  {
    id: 2,
    category: "large",
    title: "Large",
    subtTitle: "Subt title",
    content: <ShopContainer items={largePlantImages} />,
  },
  {
    id: 3,
    category: "huge",
    title: "Huge",
    subtTitle: "Subt title",
    content: <ShopContainer items={hugePlantImages} />,
  },
];
