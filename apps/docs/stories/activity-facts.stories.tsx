import type { Meta, StoryObj } from "@storybook/react";
import { ActivityFacts } from "@repo/ui/components/activity-facts";
const meta = {
  title: "Sidequests/Datos de actividad",
  component: ActivityFacts,
  parameters: { layout: "padded" },
  args: { minutes: 15, cost: 50, place: "home" },
} satisfies Meta<typeof ActivityFacts>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Planta: Story = {};
export const Caminata: Story = {
  args: { minutes: 30, cost: 0, place: "outside" },
};
