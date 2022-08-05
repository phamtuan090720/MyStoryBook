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
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Grey = Template.bind({});
export const Round = Template.bind({});
export const Square = Template.bind({});
export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});
// export const Danger = Template.bind({});
// export const Text = Template.bind({});
// export const Outline = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  className: "",
  label: "Primary Badge",
  size: "small",
  theme: "primary",
  variant: "round",
  selected: false,
  endIcon: <>X</>,
  startIcon: <>X</>,
};
Secondary.args = {
  className: "",
  label: "Secondary Badge",
  size: "small",
  theme: "secondary",
  variant: "round",
  selected: false,
  endIcon: <>X</>,
  startIcon: <>X</>,
};
Grey.args = {
  className: "",
  label: "Grey Badge",
  size: "small",
  theme: "grey",
  variant: "round",
  selected: false,
  endIcon: <>X</>,
  startIcon: <>X</>,
};
Round.args = {
  className: "",
  label: "Round Badge",
  size: "small",
  theme: "grey",
  variant: "round",
  selected: false,
  endIcon: <>X</>,
  startIcon: <>X</>,
};

Square.args = {
  className: "",
  label: "Square Badge",
  size: "small",
  theme: "grey",
  variant: "square",
  selected: false,
  endIcon: <>X</>,
  startIcon: <>X</>,
};
Small.args = {
  className: "",
  label: "Small Badge",
  size: "small",
  theme: "primary",
  variant: "round",
  selected: false,
  endIcon: <>X</>,
  startIcon: <>X</>,
};

Medium.args = {
  className: "",
  label: "Medium Badge",
  size: "medium",
  theme: "primary",
  variant: "round",
  selected: false,
  endIcon: <>X</>,
  startIcon: <>X</>,
};

Large.args = {
  className: "",
  label: "Large Badge",
  size: "large",
  theme: "primary",
  variant: "round",
  selected: false,
  endIcon: <>X</>,
  startIcon: <>X</>,
};
