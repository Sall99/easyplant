import { BaseLayout } from "components";
import { Home } from "pages";
import { publicRoutes } from "./public";

export const routesList = [
  {
    path: publicRoutes.home.path,
    element: (
      <BaseLayout>
        <Home />
      </BaseLayout>
    ),
  },
];
