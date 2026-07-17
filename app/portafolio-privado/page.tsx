"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function PortafolioPrivadoPage() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Solicitud de acceso · Portafolio Privado");
    const body = encodeURIComponent(`Nombre: ${data.get("nombre")}\nCelular: ${data.get("celular")}\nCorreo: ${data.get("correo")}`);
    window.location.href = `mailto:hola@marianavillarreal.mx?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <main className="editorial-page">
      <header className="properties-header">
        <Link href="/">MARIANA VILLARREAL</Link>
        <Link href="/">INICIO</Link>
      </header>
      <section className="editorial-layout private-layout">
        <div className="editorial-image private-image" role="img" aria-label="Mariana Villarreal" />
        <div className="editorial-copy">
          <p className="eyebrow">Exclusive access by invitation</p>
          <h1>Portafolio Privado</h1>
          <p className="private-intro">Déjame aquí tu nombre, celular y correo electrónico para solicitar acceso a una selección de propiedades que comparto únicamente de forma privada y por invitación.</p>
          <form className="private-form" onSubmit={submit}>
            <label>Nombre<input name="nombre" autoComplete="name" required /></label>
            <label>Celular<input name="celular" type="tel" autoComplete="tel" required /></label>
            <label>Correo electrónico<input name="correo" type="email" autoComplete="email" required /></label>
            <button type="submit">Solicitar acceso</button>
          </form>
          <small className="privacy-note">{sent ? "Tu solicitud está lista para enviarse desde tu correo." : "Tus datos se utilizarán únicamente para revisar tu solicitud de acceso."}</small>
        </div>
      </section>
    </main>
  );
}
