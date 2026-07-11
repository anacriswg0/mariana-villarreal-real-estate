"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=92",
    eyebrow: "Mariana Villarreal Real Estate",
    title: "Propiedades con perspectiva.",
    action: "Ver propiedades",
    href: "#propiedades",
  },
  {
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=92",
    eyebrow: "Portafolio Privado",
    title: "Exclusive access by invitation.",
    action: "Solicitar acceso",
    href: "#contacto",
  },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => setSlide((current) => (current + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <main>
      <section className="showcase">
        {slides.map((item, index) => (
          <div className={`slide ${slide === index ? "active" : ""}`} style={{ backgroundImage: `url(${item.image})` }} key={item.title}>
            <div className="slide-copy">
              <p>{item.eyebrow}</p>
              <h1>{item.title}</h1>
              <a href={item.href}>{item.action}</a>
            </div>
          </div>
        ))}

        <header className="site-header">
          <button onClick={() => setMenu(true)}>SERVICES</button>
          <a className="logo" href="#">MARIANA VILLARREAL</a>
          <button onClick={() => setMenu(true)}>MENU</button>
        </header>

        <div className="pagination">
          {slides.map((item, index) => <button className={slide === index ? "active" : ""} onClick={() => setSlide(index)} aria-label={`Ver ${item.eyebrow}`} key={item.title} />)}
        </div>
      </section>

      <section className="directory">
        <div className="directory-group">
          <h2>Explore</h2>
          <a id="propiedades" href="#">Propiedades</a>
          <a href="#">Portafolio Privado</a>
          <a href="#">Inteligencia inmobiliaria</a>
        </div>
        <div className="directory-group">
          <h2>Mariana Villarreal</h2>
          <a href="#">Services</a>
          <a href="#">About Mariana</a>
          <a href="#">Ofrece tu propiedad</a>
        </div>
        <a className="contact-pill" id="contacto" href="mailto:hola@marianavillarreal.mx">Contacto</a>
        <footer>
          <div><span>Monterrey, N.L.</span><a href="mailto:hola@marianavillarreal.mx">hola@marianavillarreal.mx</a></div>
          <div><span>© 2026 Mariana Villarreal</span><a href="#">Aviso de privacidad</a></div>
        </footer>
      </section>

      <aside className={`overlay-menu ${menu ? "open" : ""}`} aria-hidden={!menu}>
        <button className="close" onClick={() => setMenu(false)}>CERRAR</button>
        <nav>
          {["Services", "Propiedades", "Portafolio Privado", "Inteligencia inmobiliaria", "Ofrece tu propiedad", "About Mariana", "Contacto"].map((item) => <a href="#" onClick={() => setMenu(false)} key={item}>{item}</a>)}
        </nav>
      </aside>
    </main>
  );
}
