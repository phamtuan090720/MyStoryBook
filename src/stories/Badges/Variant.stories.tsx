import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Badge from "components/core/Badges/Badges";
export default {
    title: "Component/Badge/Variant",
    component: Badge,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        // backgroundColor: { control: 'color' },
        variant: {
            options: ["round", "square"],
            control: { type: "radio" },

        },
        size: {
            table: {
                disable: true,
            },
        },
        theme: {
            table: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof Badge>;
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Round = Template.bind({});
export const Square = Template.bind({});
Round.args = {
    label: "Round Badge",
    variant: "round",
    endIcon: <>X</>,
    startIcon: <>X</>,
};

Square.args = {
    label: "Round Badge",
    variant: "square",
    endIcon: <>X</>,
    startIcon: <>X</>,
};