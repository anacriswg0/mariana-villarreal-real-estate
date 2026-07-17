import Link from "next/link";

export default function ServiciosPage() {
  return (
    <main className="editorial-page">
      <header className="properties-header">
        <Link href="/">MARIANA VILLARREAL</Link>
        <Link href="/">INICIO</Link>
      </header>
      <section className="editorial-layout">
        <div className="editorial-image services-image" role="img" aria-label="Mariana Villarreal" />
        <div className="editorial-copy">
          <p className="eyebrow">Servicios</p>
          <h1>Compra · Venta · Renta · Inversión inmobiliaria</h1>
          <div className="editorial-text">
            <p>Ya sea que estés buscando invertir, comprar una casa para vivir, encontrar una segunda casa para descansar, vender o rentar una propiedad, te acompaño durante todo el proceso con una atención cercana y personalizada.</p>
            <p>Selecciono opciones en buenas ubicaciones, colonias consolidadas y zonas con potencial de plusvalía, siempre tomando en cuenta lo que buscas y lo que realmente necesitas.</p>
            <p>Estoy en Torreón, pero también cuento con opciones en diferentes lugares de México. Mi objetivo es ayudarte a encontrar una propiedad que vaya con tu estilo de vida y que también sea una buena decisión para tu patrimonio.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
