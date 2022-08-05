import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Circle from "components/core/Badges/Circle/Circle";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Badge/Circle",
  component: Circle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      options: ["success", "info", "danger", "grey"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Circle>;

const Template: ComponentStory<typeof Circle> = (args) => <Circle {...args} />;
export const YourCustom = Template.bind({});

YourCustom.args = {};
