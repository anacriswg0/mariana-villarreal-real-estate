"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function OfreceTuPropiedadPage() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Quiero ofrecer una propiedad");
    const body = encodeURIComponent(
      `Nombre: ${data.get("nombre")}\nCelular: ${data.get("celular")}\nCorreo: ${data.get("correo")}\nTipo de propiedad: ${data.get("tipo")}\nCiudad o zona: ${data.get("ubicacion")}`
    );
    window.location.href = `mailto:hola@marianavillarreal.mx?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <main className="editorial-page">
      <header className="properties-header">
        <Link href="/">MARIANA VILLARREAL</Link>
        <Link href="/">INICIO</Link>
      </header>
      <section className="editorial-layout">
        <div className="editorial-image offer-image" role="img" aria-label="Asesoría inmobiliaria de Mariana Villarreal" />
        <div className="editorial-copy">
          <p className="eyebrow">Venta · Renta</p>
          <h1>Ofrece tu propiedad</h1>
          <p className="private-intro">Déjame tus datos y la información básica de tu propiedad. Me pondré en contacto contigo para conocerla, revisar su potencial y explicarte cómo puedo acompañarte para venderla o rentarla.</p>
          <form className="private-form" onSubmit={submit}>
            <label>Nombre<input name="nombre" autoComplete="name" required /></label>
            <label>Celular<input name="celular" type="tel" autoComplete="tel" required /></label>
            <label>Correo electrónico<input name="correo" type="email" autoComplete="email" required /></label>
            <label>Tipo de propiedad<input name="tipo" placeholder="Casa, departamento, terreno…" required /></label>
            <label>Ciudad o zona<input name="ubicacion" required /></label>
            <button type="submit">Enviar información</button>
          </form>
          <small className="privacy-note">{sent ? "Tu solicitud está lista para enviarse desde tu correo." : "Tus datos se utilizarán únicamente para dar seguimiento a tu propiedad."}</small>
        </div>
      </section>
    </main>
  );
}
