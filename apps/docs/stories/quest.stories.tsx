import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ChoiceGroup } from "@repo/ui/components/choice-group";
import { StepProgress } from "@repo/ui/components/step-progress";
import { Button } from "@repo/ui/components/button";

function QuestControls({ initialValue = "" }) {
  const [value, setValue] = useState(initialValue);
  return (
    <div className="mx-auto max-w-md space-y-7 p-6">
      <StepProgress current={2} total={5} />
      <div>
        <h1 id="story-question" className="font-heading text-4xl">
          ¿Qué te gustaría hacer?
        </h1>
        <p id="story-help" className="mt-2 text-sm text-muted-foreground">
          Elige el tipo de actividad que más te llama hoy.
        </p>
      </div>
      <ChoiceGroup
        name="activity"
        labelledBy="story-question"
        describedBy="story-help"
        value={value}
        onChange={setValue}
        options={[
          {
            value: "calm",
            label: "Bajar el ritmo",
            description: "Algo tranquilo para conectar conmigo.",
            icon: "🌱",
            tone: "sage",
          },
          {
            value: "creative",
            label: "Crear algo",
            description: "Música, arte y cosas hechas por mí.",
            icon: "🎨",
            tone: "coral",
          },
          {
            value: "move",
            label: "Ponerme en movimiento",
            description: "Mover el cuerpo y renovar mi energía.",
            icon: "☀️",
            tone: "sunshine",
          },
        ]}
      />
      <Button disabled={!value} size="lg" className="w-full">
        Siguiente →
      </Button>
    </div>
  );
}
const meta = {
  title: "Sidequests/Cuestionario",
  component: QuestControls,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof QuestControls>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Unanswered: Story = {};
export const Selected: Story = { args: { initialValue: "creative" } };
