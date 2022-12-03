import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Accordion } from "./accordion";

export default {
  title: "Example/Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      title: "Accordion 1",
      Content: () => <div>Content 1</div>,
    },

    {
      title: "Accordion 2",
      Content: () => <div>Content 2</div>,
    },
  ],
};
