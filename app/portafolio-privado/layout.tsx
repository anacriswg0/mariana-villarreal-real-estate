import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio Privado de Propiedades por Mariana Villarreal",
  description:
    "La privacidad de mis clientes es prioridad. Conoce un portafolio privado de propiedades al que puedes acceder únicamente por invitación.",
  openGraph: {
    title: "Portafolio Privado de Propiedades por Mariana Villarreal",
    description:
      "La privacidad de mis clientes es prioridad. Conoce un portafolio privado de propiedades al que puedes acceder únicamente por invitación.",
    url: "/portafolio-privado",
    type: "website",
  },
};

export default function PortafolioPrivadoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
