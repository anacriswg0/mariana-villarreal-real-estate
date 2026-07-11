"use client";

import { useState } from "react";

const projects = [
  ["Casa Sierra", "San Pedro", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=88"],
  ["Terreno La Boca", "Santiago", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=88"],
  ["Nave Norte", "Apodaca", "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=88"],
  ["Obispado", "Monterrey", "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=88"],
];

export default function Home(){
  const [sent,setSent]=useState(false);
  return <main>
    <header className="topbar"><a className="wordmark" href="#">MARIANA<br/>VILLARREAL</a><nav><a href="#work">Propiedades</a><a href="#private">Privado</a><a href="#contact">Contacto</a></nav><button className="menu-button">Menú</button></header>
    <section className="opening"><div className="opening-image"/><div className="hero-caption"><p>Real Estate · Monterrey</p><h1>Propiedades<br/><em>con perspectiva.</em></h1></div></section>
    <section className="work" id="work">{projects.map((p,i)=><article className={i===0||i===3?"project full":"project half"} key={p[0]}><a href="#contact"><div className="project-image" style={{backgroundImage:`url(${p[2]})`}}/><div className="project-line"><span>{p[0]}</span><span>{p[1]} ↗</span></div></a></article>)}</section>
    <section className="quiet-note"><p>Una selección inmobiliaria hecha con criterio, experiencia y atención personal.</p></section>
    <section className="private-min" id="private"><p>Portafolio privado</p><h2>Oportunidades fuera del mercado abierto.</h2><form><input placeholder="Código de acceso" aria-label="Código de acceso"/><button>Ingresar ↗</button></form></section>
    <section className="mail-min"><h2>Nuevas propiedades en tu correo.</h2><form onSubmit={e=>{e.preventDefault();setSent(true)}}><input required type="email" placeholder="Correo electrónico" aria-label="Correo electrónico"/><button>Suscribirme ↗</button></form>{sent&&<p>Gracias. Tu correo quedó registrado.</p>}</section>
    <footer id="contact"><h2>Hablemos.</h2><div><p>Monterrey, Nuevo León</p><a href="mailto:hola@marianavillarreal.mx">hola@marianavillarreal.mx</a></div><div><a href="#">Instagram ↗</a><a href="#">WhatsApp ↗</a></div></footer>
  </main>
}
