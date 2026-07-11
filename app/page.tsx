"use client";

import { useState } from "react";

const links = [
  "Services",
  "Propiedades",
  "Portafolio Privado",
  "Inteligencia inmobiliaria",
  "Ofrece tu propiedad",
  "About Mariana",
  "Contacto",
];

const slug = (label: string) => `#${label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replaceAll(" ", "-")}`;

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#inicio">Mariana Villarreal</a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? "Cerrar" : "Menú"}
        </button>
      </header>

      <nav className={`menu-panel ${open ? "is-open" : ""}`} aria-hidden={!open}>
        {links.map((link, index) => (
          <a href={slug(link)} onClick={() => setOpen(false)} key={link}>
            <span>0{index + 1}</span>{link}
          </a>
        ))}
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p>Real Estate · Monterrey</p>
          <h1>Propiedades elegidas<br />con perspectiva.</h1>
          <a className="cta" href="#propiedades">Explorar propiedades ↗</a>
        </div>
      </section>

      <section className="private-banner" id="portafolio-privado">
        <p>Portafolio Privado</p>
        <h2>Exclusive access<br />by invitation.</h2>
        <a className="cta" href="#contacto">Solicitar acceso ↗</a>
      </section>

      <nav className="bottom-menu" aria-label="Secciones principales">
        <div className="bottom-track">
          {[...links, ...links].map((link, index) => (
            <a href={slug(link)} key={`${link}-${index}`}>{link}<i>↗</i></a>
          ))}
        </div>
      </nav>
    </main>
  );
}
