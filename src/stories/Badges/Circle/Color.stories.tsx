import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Circle from "components/core/Badges/Circle/Circle";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Badge/Circle/Color",
  component: Circle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      options: ["success", "info", "danger", "grey"],
      control: { type: "radio" }, 
    },
    size: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Circle>;

const Template: ComponentStory<typeof Circle> = (args) => <Circle {...args} />;
export const Success = Template.bind({});
export const Info = Template.bind({});
export const Danger = Template.bind({});
export const Grey = Template.bind({});

Success.args = {
  color: "success",
};
Danger.args = {
  color: "danger",
};
Grey.args = {
  color: "grey",
};
Info.args = {
  color: "info",
};
