import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://marianavillarreal.com"),
  title: "Mariana Villarreal Real Estate",
  description: "Propiedades con perspectiva. Selección inmobiliaria y asesoría estratégica.",
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
