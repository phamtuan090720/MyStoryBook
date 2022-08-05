import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Badge from "components/core/Badges/Badges";
export default {
    title: "Component/Badge/Size",
    component: Badge,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        // backgroundColor: { control: 'color' },
        variant: {
            table: {
                disable: true,
            },

        },
        size: {
            options: ["small", "medium", "large"],
            control: { type: "radio" },
        },
        theme: {
            table: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof Badge>;
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;
export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});

Small.args = {
    label: "Small Badge",
    size: "small",
    endIcon: <>X</>,
    startIcon: <>X</>,
};

Medium.args = {
    label: "Medium Badge",
    size: "medium",
    endIcon: <>X</>,
    startIcon: <>X</>,
};

Large.args = {
    label: "Large Badge",
    size: "large",
    endIcon: <>X</>,
    startIcon: <>X</>,
};