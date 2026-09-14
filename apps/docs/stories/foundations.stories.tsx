import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/ui/components/button";
import { Benefit } from "@repo/ui/components/benefit";

function Foundations() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 p-8">
      <div>
        <p className="mb-3 text-xs uppercase tracking-widest">
          Sidequests · Fundamentos
        </p>
        <h1 className="font-heading text-6xl">
          Tu vida es <em className="text-primary">mucho más.</em>
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          Pequeñas actividades. Una vida más tranquila.
        </p>
        <p className="mt-4 font-hand text-2xl font-light">
          Hoy también cuenta.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ["Crema", "bg-background"],
          ["Bosque", "bg-primary text-primary-foreground"],
          ["Salvia", "bg-sage"],
          ["Sol", "bg-sunshine"],
          ["Coral", "bg-coral"],
          ["Cielo", "bg-sky"],
          ["Superficie", "bg-card"],
          ["Tinta", "bg-foreground text-background"],
        ].map(([name, tone]) => (
          <div key={name} className={`rounded-lg border p-6 text-sm ${tone}`}>
            {name}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        <Button size="lg">Encuentra tu sidequest →</Button>
        <Button variant="outline" size="lg">
          Volver a empezar
        </Button>
        <Button disabled size="lg">
          Siguiente →
        </Button>
      </div>
      <div className="flex gap-8">
        <Benefit
          title="Nuevas experiencias"
          tone="sunshine"
          icon={<span className="text-2xl">☺</span>}
        >
          Explora actividades que realmente te interesen.
        </Benefit>
      </div>
    </div>
  );
}
const meta = {
  title: "Sidequests/Fundamentos",
  component: Foundations,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Foundations>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
