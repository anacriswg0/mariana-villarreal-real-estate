"use client";

import { useState } from "react";

const properties = [
  { name: "Residencia Las Villas", location: "Las Villas, Torreón", area: "680 m²", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90" },
  { name: "Casa Campestre", location: "Campestre La Rosita, Torreón", area: "520 m²", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=90" },
  { name: "Terreno Los Viñedos", location: "Los Viñedos, Torreón", area: "1,200 m²", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=90" },
  { name: "Nave Industrial Norte", location: "Zona Industrial, Torreón", area: "3,400 m²", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90" },
];

const menuItems = ["Services", "Propiedades", "Portafolio Privado", "Ofrece tu propiedad", "About Mariana", "Contacto"];

export default function Home() {
  const [menu, setMenu] = useState(false);

  return (
    <main>
      <section className="hero">
        <div className="hero-image" />
        <div className="shade" />
        <header>
          <a className="brand" href="#">MARIANA VILLARREAL</a>
          <button onClick={() => setMenu(true)}>MENÚ</button>
        </header>
        <div className="hero-copy">
          <p>Torreón, México</p>
          <h1>A Curated Real Estate Perspective</h1>
          <a href="#destacadas">Explorar propiedades</a>
        </div>
        <span className="scroll">SCROLL</span>
      </section>

      <section className="featured" id="destacadas">
        <div className="section-intro">
          <h2>Propiedades<br />destacadas</h2>
          <a href="/propiedades">Ver todas</a>
        </div>
        <div className="property-grid">
          {properties.map((property) => (
            <a className="property" href="/propiedades" key={property.name}>
              <div className="property-image" style={{ backgroundImage: `url(${property.image})` }} />
              <div className="property-meta">
                <strong>{property.name}</strong>
                <span>{property.location}</span>
                <span>{property.area}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <a className="private-callout" href="#">
        <span>Acceso por invitación</span>
        <h2>Portafolio Privado</h2>
        <i>Descubrir</i>
      </a>

      <footer>
        <strong>MARIANA VILLARREAL</strong>
        <div><a href="mailto:hola@marianavillarreal.mx">hola@marianavillarreal.mx</a><span>Torreón, México</span></div>
        <div><a href="#">Instagram</a><a href="#">WhatsApp</a><a href="#">Aviso de privacidad</a></div>
      </footer>

      <aside className={`menu-drawer ${menu ? "open" : ""}`} aria-hidden={!menu}>
        <div className="menu-top"><span>MARIANA VILLARREAL</span><button onClick={() => setMenu(false)}>CERRAR</button></div>
        <nav>{menuItems.map((item, index) => <a href={item === "Propiedades" ? "/propiedades" : "#"} onClick={() => setMenu(false)} key={item}><small>0{index + 1}</small>{item}</a>)}</nav>
        <div className="menu-bottom"><span>REAL ESTATE · TORREÓN, MÉXICO</span><a href="mailto:hola@marianavillarreal.mx">CONTACTO</a></div>
      </aside>
    </main>
  );
}
