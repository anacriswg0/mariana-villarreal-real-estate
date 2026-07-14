"use client";

import { useState } from "react";

const properties = [
  { id:"PROP-006", name:"Penthouses Torre Latitud 25", location:"Gómez Palacio, Durango", area:"Consultar", image:"/properties/PROP-006/01.jpg" },
  { id:"PROP-002", name:"Casa II", location:"La Cava Residencial, Gómez Palacio", area:"367.7 m²", image:"/properties/PROP-002/01.jpg" },
  { id:"PROP-003", name:"Lote Las Villas del Cardenchal", location:"Torreón, Coahuila", area:"360 m²", image:"/properties/PROP-003/01.jpg" },
  { id:"PROP-009", name:"Lote Las Villas", location:"Torreón, Coahuila", area:"600 m²", image:"/properties/PROP-009/01.jpg" },
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
            <a className="property" href={`/propiedades/${property.id}`} key={property.name}>
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
