"use client";

import { useTheme } from "@/components/navbar-02/theme/ThemeProvider";
import Barro from "../public/img/barro.png";
import Barro2 from "../public/img/barro2.png";
import Barro3 from "../public/img/barro3.png";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import FuzzyText from "@/components/FuzzyText";

export default function HomePage() {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "#3a3a3a" : "#f3f1ed";
  const textColor = theme === "dark" ? "#f3f1ed" : "#3a3a3a";

  const historiaItems = [
    {
      title: "Por qué ocurrió",
      text: "La Dana se formó por la combinación de aguas cálidas en el Mediterráneo y un frente frío en altura. Esto generó lluvias torrenciales y vientos intensos concentrados en pocas horas.",
    },
    {
      title: "Factores que agravaron el impacto",
      text: "La planificación urbana y las infraestructuras en algunas zonas no estaban preparadas para episodios tan extremos, lo que aumentó los daños. La densidad poblacional y la ocupación de áreas de riesgo también fueron determinantes.",
    },
    {
      title: "Responsables y decisiones clave",
      text: "La coordinación entre administraciones locales y autonómicas falló en varios puntos, retrasando la llegada de recursos y ayudas. Además, ciertas decisiones de prevención y aviso no fueron suficientes para alertar a todas las comunidades a tiempo.",
    },

    {
      title: "Ayuda desigual",
      text: "Algunas localidades no recibieron asistencia inmediata por problemas de comunicación y logística, mientras otras pudieron actuar más rápido gracias a planes de emergencia locales mejor implementados.",
    },

    {
      title: "Consecuencias",
      text: "Decenas de personas afectadas, daños materiales importantes y reflexión sobre la necesidad de mejorar la prevención, la gestión de emergencias y la resiliencia frente a fenómenos meteorológicos extremos.",
    },
  ];

  const recuerdos = [
    {
      id: 1,
      img: "/img/perdon.png",
      historia:
        "José escribió una despedida a su madre Maruja, la cual fallecida en la noche de la DANA. Hizo todo lo que pudo por llegar pero las condiciones fueron en su contra, así que no pudo acudir hasta el día siguiente.",
    },
    {
      id: 2,
      img: "/img/toni_garcia.webp",
      historia:
        "Su hija y su marido fueron a sacar el coche cuando se empezó a inundar todo, tristemente no salieron del parking.",
    },
    {
      id: 3,
      img: "/img/dani_dana.png",
      historia:
        "Daniel Burguet, el héroe de Paiporta. Rescató a cuatro alumnos de la academia de inglés donde él era director.",
    },
    {
      id: 4,
      img: "/img/ana_maria.jpeg",
      historia:
        "Ana María estuvo toda la noche bajo escombros con su hija y el cuerpo sin vida de su hijo de tres años tras caerle una viga encima. También falleció su marido.",
    },
    {
      id: 5,
      img: "/img/chica_perros.png",
      historia:
        "Mujer no dejó a sus perros atrás, así que en su rescate se llevó a sus compañeros con ella.",
    },
    {
      id: 6,
      img: "/img/protectoras.png",
      historia:
        "Las protectoras también sufrieron grandes perdidas que no serán tan recordadas porque esas pequeñas criaturas no tenían familia.",
    },
  ];

  const [visible, setVisible] = useState<number | null>(null);

  return (
    <main className="relative">
      
      <section
        className="relative flex flex-col items-center justify-center min-h-screen gap-2 px-4 text-center z-10 overflow-hidden"
        style={{ backgroundColor: bgColor }}
      >
        <FuzzyText className="text-[85px] text-center text-current">
          <>
            SI NECESITAN <br /> MÁS RECURSOS, <br /> QUE LOS PIDAN
          </>
        </FuzzyText>

        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "30px",
            color: textColor,
          }}
        >
          - Pedro Sánchez, presidente del gobierno
        </h3>

        <img
          src={Barro.src}
          alt="Barro"
          className="absolute top-1/2 right-10 transform -translate-y-1/2 w-1/4 object-contain z-0 pointer-events-none"
          style={{ transform: "translateY(-50%) scale(2.5)" }}
        />

        <img
          src={Barro2.src}
          alt="Barro2"
          className="absolute bottom-10 left-10 w-1/5 object-contain z-0 pointer-events-none"
          style={{ transform: "scale(2.5)" }}
        />
      </section>

      {/* ===== ONDA SVG ===== */}
      <svg
        className="w-full h-32"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill={bgColor}
          d="M0,0L60,53.3C120,107,240,213,360,218.7C480,224,600,128,720,106.7C840,85,960,139,1080,154.7C1200,171,1320,149,1380,138.7L1440,128L1440,320L0,320Z"
        ></path>
      </svg>

      {/* ===== INFORMACIÓN ===== */}
      <section
        id="historia"
        className="relative flex flex-col items-center justify-center py-24 px-6 z-20 bg-center bg-no-repeat"
        style={{
          backgroundColor: bgColor,
          backgroundSize: "120%",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10">
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "60px",
              color: textColor,
            }}
          >
            Información de la DANA
          </h2>

          <Carousel className="w-full max-w-md mt-12">
            <CarouselContent>
              {historiaItems.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className={theme === "dark" ? "bg-[#f3f1ed]" : "bg-white"}>
                      <CardContent className="flex flex-col aspect-square items-center justify-center p-6 text-center">
                        <h3
                          className="text-2xl font-semibold mb-2"
                          style={{ color: "#3a3a3a", fontFamily: "Georgia, serif" }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="text-base opacity-80"
                          style={{ color: "#3a3a3a", fontFamily: "Georgia, serif" }}
                        >
                          {item.text}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* ===== ONDA SVG ===== */}
      <svg
        className="w-full h-32"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill={bgColor}
          d="M0,0L60,53.3C120,107,240,213,360,218.7C480,224,600,128,720,106.7C840,85,960,139,1080,154.7C1200,171,1320,149,1380,138.7L1440,128L1440,320L0,320Z"
        ></path>
      </svg>

{/* ===== ESTADÍSTICAS ===== */}
<section
  id="estadisticas"
  className="relative flex flex-col items-center justify-center py-24 px-6 z-20 scroll-mt-16"
  style={{ backgroundColor: bgColor }}
>
  <h2
    style={{
      fontFamily: "Georgia, serif",
      fontSize: "60px",
      color: textColor,
    }}
    className="mb-12 text-center"
  >
    Estadísticas oficiales
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
    {[
      {
        value: "230",
        label: "Víctimas mortales confirmadas",
        sub: "222 en C. Valenciana, 7 en C.-La Mancha, 1 en Andalucía",
      },
      { value: "4", label: "Personas desaparecidas" },
      {
        value: "78",
        label: "Municipios afectados",
        sub: "75 en Valencia, 2 en C.-La Mancha, 1 en Andalucía",
      },
      { value: "8 499", label: "Efectivos del ejército desplegados" },
      { value: "3 815", label: "Misiones realizadas" },
      { value: "4 200 kg", label: "Comida distribuida (últimas 24 h)" },
      { value: "3 700 kg", label: "Ropa distribuida (últimas 24 h)" },
      {
        value: "196 125",
        label: "Solicitudes de compensación de seguros",
        sub: "Total de solicitudes recibidas",
      },
      {
        value: "1 699",
        label: "ERTE de Fuerza Mayor",
        sub: "19 846 personas trabajadoras beneficiadas",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="p-8 rounded-2xl shadow-2xl text-center hover:scale-[1.02] transition"
        style={{
          backgroundColor: theme === "dark" ? "#f3f1ed" : "#ffffff",
          color: "#3a3a3a",
          fontFamily: "Georgia, serif",
        }}
      >
        <h3 className="text-4xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>
          {item.value}
        </h3>
        <p className="text-lg font-medium" style={{ fontFamily: "Georgia, serif" }}>
          {item.label}
        </p>
        {item.sub && (
          <p className="text-sm opacity-70 mt-2" style={{ fontFamily: "Georgia, serif" }}>
            {item.sub}
          </p>
        )}
      </div>
    ))}
  </div>

  <p
    className="mt-12 text-sm text-gray-500 dark:text-gray-400 text-center max-w-2xl"
    style={{ fontFamily: "Georgia, serif" }}
  >
    Fuente:{" "}
    <a
      href="https://www.lamoncloa.gob.es/info-dana/paginas/2024/191124-datos-seguimiento-actuaciones-gobierno.aspx"
      className="underline hover:text-blue-600"
      target="_blank"
      style={{ fontFamily: "Georgia, serif" }}
    >
      Gobierno de España – Datos de seguimiento DANA 2024
    </a>
  </p>
</section>

 {/* ===== ONDA SVG ===== */}
      <svg
        className="w-full h-32"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill={bgColor}
          d="M0,0L60,53.3C120,107,240,213,360,218.7C480,224,600,128,720,106.7C840,85,960,139,1080,154.7C1200,171,1320,149,1380,138.7L1440,128L1440,320L0,320Z"
        ></path>
      </svg>

<section
  id="recuerdos"
  className="w-full py-24 px-6 bg-background flex flex-col items-center"
  style={{ backgroundColor: bgColor }}
>
  <h2
    className="text-5xl font-semibold mb-12"
    style={{ color: textColor, fontFamily: "Georgia, serif" }}
  >
    Recuerdos
  </h2>

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
          style={{ fontFamily: "'Playing Display', sans-serif" }}
        >
          {visible === r.id ? "Ocultar historia" : "Ver historia"}
        </Button>

        {visible === r.id && (
          <p
            className="text-sm text-muted-foreground max-w-xs"
            style={{ color: textColor, fontFamily: "Georgia, serif" }}
          >
            {r.historia}
          </p>
        )}
      </div>
    ))}
  </div>
</section>



{/* ===== DEGRADADO ENTRE RECUERDOS Y RECUERDOS POSITIVOS ===== */}
<div
  className="w-full h-72"
  style={{
    background:
      theme === "dark"
        ? "linear-gradient(to bottom, #3a3a3a, #5b8ea4)"
        : "linear-gradient(to bottom, #f3f1ed, #cfe9f2)",
  }}
></div>

{/* ===== RECUERDOS POSITIVOS ===== */}
<section
  id="recuerdos-positivos"
  className="relative w-full py-24 px-6 flex flex-col items-center text-center"
  style={{
    backgroundColor: theme === "dark" ? "#5b8ea4" : "#cfe9f2",
  }}
>
  {/* ===== TÍTULO ===== */}
  <div className="max-w-3xl mb-12">
    <h2
      className="text-5xl font-semibold mb-6"
      style={{
        fontFamily: "'Playfair Display', serif",
        color: theme === "dark" ? "#f3f1ed" : "#2b2b2b",
      }}
    >
      Recuerdos que nos unieron
    </h2>
  </div>

  {/* ===== TEXTO ===== */}
  <div className="">
    <blockquote
      className="text-lg leading-relaxed"
      style={{
        color: theme === "dark" ? "#f3f1ed" : "#2b2b2b",
        fontFamily: "'Georgia', serif",
      }}
    >
      La DANA se llevó mucho, pero también dejó algo que no se olvida: la prueba
      de que la bondad existe.
      <br />
      Porque cuando todo parecía perdido, el pueblo se levantó. Daba igual la
      procedencia, la lengua, la edad o el color de la piel: todos se hicieron
      uno solo.
      <br />

      Estuvieron los que rescataron, los que limpiaron, los que cocinaron para
      otros, y también los que simplemente escucharon en silencio.
      <br />
      <br />
      <em
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
        }}
      >
        Esa unión invisible —ese impulso humano que no entiende de fronteras ni
        diferencias— fue el verdadero milagro después de la tormenta.
             <br />
      <br />

      
      </em>
    </blockquote>
  </div>

  {/* ===== GALERÍA PIRÁMIDE INVERTIDA (3 + 2) ===== */}
  <div className="flex flex-col items-center gap-10 w-full max-w-6xl">
    {/* Fila superior (3 imágenes) */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {[
        {
          id: 1,
          img: "/img/comida.jpg",
          caption:
            "Chefs de gran reputación fueron de voluntarios a repartir comida tanto a vecinos como a los mmismos voluntarios. Entre esos chefs estaban Javier Sanz y Juan Sahuquillo.",
        },
        {
          id: 2,
          img: "/img/voluntarios.webp",
          caption:
            "Cientos de jóvenes de todas las localidades yendo a ayudar desinteresadamente a completos desconocidos.",
        },
        {
          id: 3,
          img: "/img/luis_bombero.webp",
          caption:
            "Luis, el bombero que salvó 33 vidas por su cuenta.",
        },
      ].map((r) => (
        <div
          key={r.id}
          className="flex flex-col items-center text-center space-y-3"
        >
          <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={r.img}
              alt={`Recuerdo positivo ${r.id}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <p
            className="text-sm italic opacity-90"
            style={{
              color: theme === "dark" ? "#f3f1ed" : "#2b2b2b",
              fontFamily: "'Georgia', serif",
            }}
          >
            {r.caption}
          </p>
        </div>
      ))}
    </div>

    {/* Fila inferior (2 imágenes) */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
      {[
        {
          id: 4,
          img: "/img/bomberos.webp",
          caption:
            "Bomberos franceses llegando los primeros a Alfafar, una población donde aún no habían llegado los servicios de emergencia.",
        },
        {
          id: 5,
          img: "/img/gracias_voluntarios.avif",
          caption:
            "Agradecimiento a los voluntarios.",
        },
      ].map((r) => (
        <div
          key={r.id}
          className="flex flex-col items-center text-center space-y-3"
        >
          <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={r.img}
              alt={`Recuerdo positivo ${r.id}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <p
            className="text-sm italic opacity-90"
            style={{
              color: theme === "dark" ? "#f3f1ed" : "#2b2b2b",
              fontFamily: "'Georgia', serif",
            }}
          >
            {r.caption}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ===== DEGRADADO ENTRE RECUERDOS POSITIVOS Y FRASE FINAL ===== */}
<div
  className="w-full h-72"
  style={{
    background:
      theme === "dark"
        ? "linear-gradient(to bottom, #5b8ea4, #3a3a3a)"
        : "linear-gradient(to bottom, #cfe9f2, #f3f1ed)",
  }}
></div>

{/* ===== CIERRE FINAL ===== */}
<section
  className="relative flex flex-col items-center justify-center min-h-screen gap-2 px-4 text-center overflow-hidden"
  style={{ backgroundColor: bgColor }}
>
  {/* Imagen de fondo detrás del texto */}
  <div className="absolute inset-0 flex items-end justify-center z-0">
    <img
      src={Barro3.src}
      alt="Barro"
      className="object-contain pointer-events-none scale-65"
      style={{
        transformOrigin: "bottom center",
        position: "absolute",
        bottom: "-2rem", 
      }}
    />
  </div>

  {/* Texto por encima */}
  <div className="relative z-10">
    <FuzzyText className="text-[60px] text-center text-current leading-tight">
      <>
        “EL PUEBLO SALVA AL PUEBLO <br />
        PORQUE NO HAY OTROS RECURSOS, <br />
        Y SI NO LOS HAY, <br />
        PUES LOS OTROS TENDRÁN QUE <br />
        HACER ALGO”
      </>
    </FuzzyText>

    <h3
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "28px",
        color: textColor,
      }}
    >
      - Voluntarios
    </h3>
  </div>
</section>




    </main>
  );
}
