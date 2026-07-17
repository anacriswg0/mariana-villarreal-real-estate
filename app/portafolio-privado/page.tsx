"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function PortafolioPrivadoPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("_subject", "Nueva solicitud · Portafolio Privado");
    data.set("_template", "table");
    data.set("_captcha", "false");
    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/mvgvigo@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar la solicitud");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
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
          <p className="eyebrow">Acceso privado</p>
          <h1>Portafolio Privado</h1>
          <p className="private-intro">
            Algunas propiedades no se publican. Déjame aquí tu nombre, celular y
            correo electrónico para solicitar acceso a una selección de
            oportunidades que comparto únicamente de forma privada.
          </p>
          <form className="private-form" onSubmit={submit}>
            <label>Nombre<input name="nombre" autoComplete="name" required /></label>
            <label>Celular<input name="celular" type="tel" autoComplete="tel" required /></label>
            <label>Correo electrónico<input name="email" type="email" autoComplete="email" required /></label>
            <input className="form-honey" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Enviando…" : "Solicitar acceso"}
            </button>
          </form>
          <small className={`privacy-note${status === "error" ? " form-error" : ""}`} aria-live="polite">
            {status === "sent"
              ? "Gracias. Recibí tu solicitud y me pondré en contacto contigo."
              : status === "error"
                ? "No fue posible enviar tus datos. Inténtalo de nuevo en un momento."
                : "Tus datos se utilizarán únicamente para revisar y dar seguimiento a tu solicitud."}
          </small>
        </div>
      </section>
    </main>
  );
}
