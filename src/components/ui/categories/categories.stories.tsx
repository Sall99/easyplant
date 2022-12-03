import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Categories } from "./categories";

export default {
  title: "Example/Categories",
  component: Categories,
} as ComponentMeta<typeof Categories>;

const Template: ComponentStory<typeof Categories> = () => <Categories />;

export const Primary = Template.bind({});
