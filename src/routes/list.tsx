import { BaseLayout } from "components";
import { Home, Shop, Product, Faq } from "pages";
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
  {
    path: publicRoutes.product.path,
    element: (
      <BaseLayout hero={false}>
        <Product />
      </BaseLayout>
    ),
  },
  {
    path: publicRoutes.faq.path,
    element: (
      <BaseLayout hero={false}>
        <Faq />
      </BaseLayout>
    ),
  },
];
