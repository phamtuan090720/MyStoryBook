import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Badge from "components/core/Badges/Badges";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Badge",
  component: Badge,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    variant: {
      options: ["round", "square"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    theme: {
      options: ["primary", "secondary", "grey"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Badge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;
export const YourCustom = Template.bind({});

YourCustom.args = {
  endIcon: "x",
  startIcon: "x",
  className: "",
  size: 'medium',
  selected: false,
  theme: 'primary',
  variant: 'round',
  label:'Your Custom Badge'
}