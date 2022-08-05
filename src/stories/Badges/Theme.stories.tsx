import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Badge from "components/core/Badges/Badges";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Badge/Theme",
  component: Badge,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      options: ["round", "square"],
      control: { type: "radio" },
      table: {
        disable: true,
      },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
      table: {
        disable: true,
      },
    },
    theme: {
      options: ["primary", "secondary", "grey"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Badge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Grey = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Primary Badge",
  theme: "primary",
  endIcon: <>X</>,
  startIcon: <>X</>,
};
Secondary.args = {
  label: "Secondary Badge",
  theme: "secondary",
  endIcon: <>X</>,
  startIcon: <>X</>,
};
Grey.args = {
  label: "Grey Badge",
  theme: "grey",
  endIcon: <>X</>,
  startIcon: <>X</>,
};
