import QR from "../components/QR";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Components/QR",
  component: QR,
} as Meta;

export const Primary: Story = (args) => <QR {...args} />;
