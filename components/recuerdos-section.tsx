"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function RecuerdosSection() {
  const recuerdos = [
    {
      id: 1,
      img: "/img/perdon.png",
      historia:
        "Ese día comprendí que pedir perdón no siempre es fácil, pero a veces es lo único que puede sanar las cosas.",
    },
    {
      id: 2,
      img: "/img/toni_garcia.webp",
      historia:
        "Un momento difícil que me enseñó mucho sobre el valor de la empatía y el tiempo.",
    },
    {
      id: 3,
      img: "/img/perdon.png",
      historia:
        "Una etapa que me hizo más fuerte y me ayudó a entender que los finales también son comienzos.",
    },
  ];

  const [visible, setVisible] = useState<number | null>(null);

  return (
    <section className="w-full py-16 px-6 bg-background flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-10">Recuerdos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {recuerdos.map((r) => (
          <div
            key={r.id}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="w-full aspect-square relative rounded-2xl overflow-hidden shadow-md">
              <Image
                src={r.img}
                alt={`Recuerdo ${r.id}`}
                fill
                className="object-cover"
              />
            </div>

            <Button
              variant="outline"
              onClick={() => setVisible(visible === r.id ? null : r.id)}
            >
              {visible === r.id ? "Ocultar historia" : "Ver historia"}
            </Button>

            {visible === r.id && (
              <p className="text-sm text-muted-foreground max-w-xs">
                {r.historia}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
