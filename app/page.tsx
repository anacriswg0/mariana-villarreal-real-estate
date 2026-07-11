"use client";

import { useState } from "react";

const listings = [
  { id: "01", title: "Casa Sierra", place: "San Pedro Garza García", kind: "Residencial", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=88", size: "wide" },
  { id: "02", title: "Terreno La Boca", place: "Santiago, Nuevo León", kind: "Terreno", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=88", size: "tall" },
  { id: "03", title: "Nave Norte", place: "Apodaca, Nuevo León", kind: "Industrial", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=88", size: "standard" },
  { id: "04", title: "Departamento Obispado", place: "Monterrey, Nuevo León", kind: "Residencial", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=88", size: "wide" },
];

export default function Home() {
  const [note, setNote] = useState("");
  return <main>
    <header className="topbar">
      <a className="wordmark" href="#inicio">MARIANA<br/>VILLARREAL</a>
      <p>Real Estate<br/>Monterrey, MX</p>
      <nav><a href="#propiedades">Propiedades</a><a href="#privado">Portafolio privado</a><a href="#contacto">Contacto</a></nav>
      <button className="menu-button" aria-label="Abrir menú">Menú</button>
    </header>

    <section className="opening" id="inicio">
      <div className="opening-image" role="img" aria-label="Residencia contemporánea"><span className="image-count">01 / 04</span></div>
      <div className="opening-title"><h1>Propiedades<br/><em>con perspectiva.</em></h1><p>Compra · Renta · Inversión</p></div>
    </section>

    <section className="manifesto">
      <p className="section-label">Mariana Villarreal Real Estate</p>
      <h2>Una selección inmobiliaria hecha con criterio, experiencia y una lectura profunda del mercado.</h2>
      <a href="#contacto">Conoce a Mariana ↗</a>
    </section>

    <section className="filter-line" aria-label="Filtros de propiedades">
      <button>Venta +</button><button>Renta +</button><button>Tipo de propiedad +</button><button>Ciudad +</button><button>Presupuesto +</button>
    </section>

    <section className="listing-grid" id="propiedades">
      {listings.map((item) => <article className={`listing ${item.size}`} key={item.title}>
        <a href="#contacto"><div className="listing-image" style={{backgroundImage:`url(${item.image})`}}><span>{item.id}</span><span>Ver propiedad ↗</span></div></a>
        <div className="listing-info"><div><h3>{item.title}</h3><p>{item.place}</p></div><p>{item.kind}</p></div>
      </article>)}
    </section>

    <section className="private-section" id="privado">
      <p className="section-label">Acceso por invitación</p>
      <div><h2>Portafolio<br/><em>Privado</em></h2><div className="private-copy"><p>Oportunidades seleccionadas que no se publican en el mercado abierto. Disponibles únicamente para clientes y referidos autorizados.</p><form><input aria-label="Código privado" placeholder="Código de acceso"/><button type="submit">Ingresar ↗</button></form><a href="#contacto">Solicitar acceso</a></div></div>
    </section>

    <section className="newsletter">
      <p className="section-label">Nuevas oportunidades</p>
      <div><h2>Recibe propiedades<br/>que vale la pena ver.</h2><form onSubmit={(e)=>{e.preventDefault();setNote("Gracias. Tu correo quedó registrado.")}}><div className="mail-field"><input type="email" required aria-label="Correo electrónico" placeholder="Correo electrónico"/><button>Suscribirme ↗</button></div><label><input type="checkbox" required/> Acepto recibir alertas y novedades inmobiliarias.</label>{note&&<p className="form-note">{note}</p>}</form></div>
    </section>

    <footer id="contacto"><div className="footer-title">Hablemos.</div><div><p>Monterrey, Nuevo León</p><a href="mailto:hola@marianavillarreal.mx">hola@marianavillarreal.mx</a></div><div><a href="#">Instagram ↗</a><a href="#">WhatsApp ↗</a></div><div className="copyright">© 2026 Mariana Villarreal Real Estate</div></footer>
  </main>
}
