import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultProps: Story = {
  args: {
    size: "md",
    label: "button",
    isIconShow: true,
    shape: "simple",
    danger: false,
  },
};

export const PrimaryButton: Story = {
  args: {
    ...DefaultProps.args,
  },
};
export const SecondaryButton: Story = {
  args: {
    ...DefaultProps.args,
    backgroundColor: "transparent",
    type: "default",
    color: "#5850EC",
  },
};
export const TextButton: Story = {
  args: {
    ...DefaultProps.args,
    backgroundColor: "transparent",
    type: "text",
    color: "#5850EC",
  },
};
export const LightButton: Story = {
  args: {
    ...DefaultProps.args,
    backgroundColor: "#F0F5FF",
    type: "text",
    color: "#5850EC",
  },
};
