import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";
import "../src/styles/app.css";
addDecorator((storyFn) => (
  <MemoryRouter initialEntries={["/"]}>{storyFn()}</MemoryRouter>
));
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
