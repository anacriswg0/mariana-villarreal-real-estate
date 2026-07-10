"use client";

import { useState } from "react";

const properties = [
  { type: "Residencial", place: "San Pedro Garza García", title: "Residencia contemporánea", price: "$24,900,000 MXN", meta: "4 recámaras · 620 m²", tone: "sand" },
  { type: "Terreno", place: "Santiago, Nuevo León", title: "Terreno con vista a la sierra", price: "$8,450,000 MXN", meta: "1,850 m²", tone: "olive" },
  { type: "Industrial", place: "Apodaca, Nuevo León", title: "Nave industrial equipada", price: "Renta · Consultar", meta: "3,200 m² · 4 andenes", tone: "stone" },
];

export default function Home() {
  const [message, setMessage] = useState("");
  function subscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("Gracias. Te avisaremos cuando haya nuevas oportunidades.");
  }
  return (
    <main>
      <header className="nav"><a className="brand" href="#">MARIANA VILLARREAL <span>REAL ESTATE</span></a><nav><a href="#propiedades">Propiedades</a><a href="#privado">Portafolio privado</a><a href="#contacto">Contacto</a></nav><button className="menu">Menú</button></header>
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow">MONTERREY · MÉXICO</p><h1>Propiedades<br/><em>con perspectiva.</em></h1><p className="intro">Selección inmobiliaria y asesoría estratégica para comprar, invertir o encontrar espacios con verdadero potencial.</p><div className="actions"><a className="primary" href="#propiedades">Explorar propiedades</a><a className="text-link" href="#contacto">Hablar con Mariana →</a></div></div>
        <div className="hero-art"><div className="arch"><span>MV</span></div><p>Real estate, personally curated.</p></div>
      </section>
      <section className="search" aria-label="Buscar propiedades"><label>Operación<select><option>Venta o renta</option><option>Venta</option><option>Renta</option></select></label><label>Tipo<select><option>Todas las propiedades</option><option>Residencial</option><option>Terrenos</option><option>Industrial</option></select></label><label>Ubicación<select><option>Todas las ciudades</option><option>Monterrey</option><option>San Pedro</option><option>Santiago</option></select></label><button>Buscar</button></section>
      <section className="properties" id="propiedades"><div className="section-head"><div><p className="eyebrow">SELECCIÓN ACTUAL</p><h2>Propiedades destacadas</h2></div><a href="#">Ver todas →</a></div><div className="grid">{properties.map((p,i)=><article className="card" key={p.title}><div className={`placeholder ${p.tone}`}><span>0{i+1}</span><small>IMAGEN PRÓXIMAMENTE</small></div><p className="card-meta">{p.type} · {p.place}</p><h3>{p.title}</h3><p>{p.meta}</p><strong>{p.price}</strong></article>)}</div></section>
      <section className="private" id="privado"><div><p className="eyebrow">ACCESO POR INVITACIÓN</p><h2>Portafolio<br/><em>Privado</em></h2></div><div><p>Algunas de las mejores oportunidades no se publican abiertamente. Accede a una selección reservada para clientes y referidos autorizados.</p><form className="code"><input aria-label="Código de acceso" placeholder="Código de acceso"/><button>Ingresar</button></form><a className="text-link light" href="#contacto">Solicitar acceso →</a></div></section>
      <section className="subscribe"><div><p className="eyebrow">INTELIGENCIA INMOBILIARIA</p><h2>Nuevas oportunidades,<br/><em>directo a tu correo.</em></h2></div><form onSubmit={subscribe}><div className="email-row"><input required type="email" placeholder="Tu correo electrónico" aria-label="Correo electrónico"/><button>Suscribirme</button></div><label className="consent"><input required type="checkbox"/> Acepto recibir novedades y alertas inmobiliarias. Podré cancelar mi suscripción cuando quiera.</label>{message&&<p className="success">{message}</p>}</form></section>
      <footer id="contacto"><div className="brand">MARIANA VILLARREAL <span>REAL ESTATE</span></div><div><p>Compra · Renta · Inversión</p><p>Monterrey, Nuevo León</p></div><a href="mailto:hola@marianavillarreal.mx">hola@marianavillarreal.mx</a><p className="legal">© 2026 · Información provisional</p></footer>
    </main>
  );
}
