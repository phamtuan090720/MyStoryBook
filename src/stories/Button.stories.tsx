import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "components/core/Button/Button";
import {XCircleSmall} from 'components/core/Icon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Disabled = Template.bind({});
export const Danger = Template.bind({});
export const Text = Template.bind({});
export const Outline = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Outline.args = {
  children: "Button Outline",
  startIcon: "",
  size: "small",
  disabled: false,
  variant: "outline",
  onClick: () => {
    alert("this is primary outline");
  },
};
Text.args = {
  children: "Button Text",
  endIcon: "",
  startIcon: "",
  size: "small",
  disabled: false,
  variant: "text",
  onClick: () => {
    alert("this is text button");
  },
};
Primary.args = {
  children: "Button Primary",
  endIcon: "",
  startIcon: "",
  size: "small",
  disabled: false,
  variant: "contained",
  theme: "primary",
  onClick: () => {
    alert("this is primary button");
  },
};
Danger.args = {
  children: "Button Primary",
  endIcon: "",
  startIcon: "",
  size: "small",
  disabled: false,
  variant: "contained",
  theme: "danger",
  onClick: () => {
    alert("this is primary button");
  },
};
Secondary.args = {
  children: "Button Secondary",
  endIcon: "",
  startIcon: "",
  size: "small",
  disabled: false,
  variant: "contained",
  theme: "secondary",
  onClick: () => {
    alert("this is primary secondary");
  },
};
Disabled.args = {
  children: "Button Disabled",
  endIcon: "",
  startIcon: "",
  size: "small",
  disabled: true,
  variant: "contained",
  theme: "primary",
  onClick: () => {
    alert("this is button disabled button");
  },
};
