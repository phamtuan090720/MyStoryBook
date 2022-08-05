import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Circle from "components/core/Badges/Circle/Circle";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Badge/Circle/Size",
  component: Circle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      table: {
        disable: true,
      },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Circle>;

const Template: ComponentStory<typeof Circle> = (args) => <Circle {...args} />;
export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});

Small.args = {
  size: "small",
};
Medium.args = {
  size: "medium",
  content: 10,
};
Large.args = {
  size: "large",
  content: 10,
};
