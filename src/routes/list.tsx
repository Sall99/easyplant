import { BaseLayout } from "components";
import { Home, Shop } from "pages";
import { publicRoutes } from "./public";

export const routesList = [
  {
    path: publicRoutes.home.path,
    element: (
      <BaseLayout hero={true}>
        <Home />
      </BaseLayout>
    ),
  },
  {
    path: publicRoutes.shopPlants.path,
    element: (
      <BaseLayout hero={false}>
        <Shop />
      </BaseLayout>
    ),
  },
];
