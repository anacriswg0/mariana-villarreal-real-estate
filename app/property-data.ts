export type Property = {
  id: string;
  name: string;
  operation: string;
  type: string;
  city: string;
  zone: string;
  totalArea: number;
  construction?: number;
  price?: number;
  priceLabel?: string;
  pricePerSquareMeter?: number;
  pricePeriod?: string;
  status?: "VENDIDA";
  beds: number;
  baths: number;
  features: string[];
  description: string;
  instagram?: string;
  imageCount: number;
  imageExtension?: "jpg" | "png";
  containImage?: boolean;
  coverImageIndex?: number;
  galleryImageIndices?: number[];
  areaLabel?: string;
  bedroomLabel?: string;
  address?: string;
  unitTypes?: { name: string; interior: number; exterior: number; total: number; units?: string; price?: number; bedrooms?: number }[];
  brochureUrl?: string;
  documents?: { label: string; url: string }[];
  paymentOptions?: string[];
};

export const properties: Property[] = [
  {
    id: "PROP-001",
    name: "Casa 01",
    operation: "Venta",
    type: "Casa",
    city: "Torreón",
    zone: "Las Villas",
    price: 38000000,
    pricePerSquareMeter: 54834.05,
    totalArea: 1099.2,
    construction: 693,
    beds: 4,
    baths: 4,
    features: ["Amueblada", "Terraza", "Jardín", "Horno de leña", "Oficina", "Sala de TV", "Vestidores", "Cuarto de servicio"],
    description: "Casa lista para habitar, completamente amueblada, diseñada por arquitecta brasileña y equipada con mobiliario italiano.",
    instagram: "https://www.instagram.com/p/DZp_ApTETYf/",
    imageCount: 14,
  },
  {
    id: "PROP-002",
    name: "Casa 02",
    operation: "Venta",
    type: "Casa",
    city: "Gómez Palacio, Durango",
    zone: "La Cava Residencial",
    price: 9950000,
    pricePerSquareMeter: 27060.1,
    totalArea: 311,
    construction: 367.7,
    beds: 3,
    baths: 0,
    features: ["Recámara en planta baja", "Terraza", "Jardín", "Lavandería", "Mármol", "Carpintería especial"],
    description: "Casa diseñada por Curiel Arquitectos con espacios abiertos, luz natural y acabados de alta calidad.",
    instagram: "https://www.instagram.com/p/DZ0CUAkgGd-/",
    imageCount: 3,
  },
  {
    id: "PROP-003",
    name: "Agaves 03",
    operation: "Venta",
    type: "Terreno",
    city: "Torreón",
    zone: "Las Villas del Cardenchal",
    price: 2700000,
    pricePerSquareMeter: 7500,
    totalArea: 360,
    beds: 0,
    baths: 0,
    features: ["Lote AV-04", "Superficie total: 360 m²", "Frente: 12 m", "Fondo: 30 m", "Frente a área verde", "Terraza común", "Canchas de pádel", "Cancha de fútbol"],
    description: "Lote AV-04 de 360 m², con 12 m de frente por 30 m de fondo, frente a una de las áreas verdes de Villa Agaves.",
    instagram: "https://www.instagram.com/p/DZGfL8SgOMA/",
    imageCount: 2,
  },
  {
    id: "PROP-004",
    name: "Casa 03",
    operation: "Venta",
    type: "Casa",
    city: "Torreón",
    zone: "Las Villas",
    price: 19900000,
    pricePerSquareMeter: 31993.57,
    totalArea: 600,
    construction: 622,
    beds: 4,
    baths: 0,
    features: ["Alberca", "Terraza", "Bar", "Gym", "Oficina"],
    description: "Casa amplia y equipada dentro de Las Villas, con 600 m² de superficie total y 622 m² de construcción.",
    instagram: "https://www.instagram.com/p/DagjExgD34z/",
    imageCount: 12,
  },
  {
    id: "PROP-005",
    name: "Lote La Gran Vinícola",
    operation: "Venta",
    type: "Terreno",
    city: "Gómez Palacio, Durango",
    zone: "La Gran Vinícola",
    price: 8821800,
    pricePerSquareMeter: 7799.52,
    totalArea: 1131.07,
    beds: 0,
    baths: 0,
    features: ["Lote L-19", "Superficie total: 1,131.07 m²", "Frente curvo: 19.59 m", "Contrafrente: 23.51 m", "Laterales: 41 m y 53.68 m", "Lote amplio", "Ligera curvatura", "Baja densidad"],
    description: "Lote L-19 de 1,131.07 m² en Valle de Piemonte, con frente curvo de 19.59 m y dimensiones adecuadas para un proyecto arquitectónico especial.",
    instagram: "https://www.instagram.com/p/DZbV_HxgIJ8/",
    imageCount: 2,
  },
  {
    id: "PROP-006",
    name: "Penthouses Torre Latitud 25",
    operation: "Venta",
    type: "Departamento",
    city: "Gómez Palacio, Durango",
    zone: "Torre Latitud 25",
    totalArea: 485.85,
    beds: 0,
    baths: 0,
    features: ["Terraza", "Vistas panorámicas"],
    description: "Últimos dos penthouses disponibles en un desarrollo diseñado por Landa + Martínez.",
    instagram: "https://www.instagram.com/p/DZYmfOiAGCK/",
    imageCount: 6,
  },
  {
    id: "PROP-020",
    name: "Nuevos Departamentos Torre Latitud 25",
    operation: "Venta",
    type: "Departamento",
    city: "Torreón, Coahuila",
    zone: "Ejido La Unión",
    address: "Calz. Dra. María Montessori, Ejido La Unión, 27105 Torreón, Coahuila",
    price: 12500000,
    priceLabel: "Desde $12,500,000 MXN",
    totalArea: 0,
    areaLabel: "238.30–297.72 m²",
    bedroomLabel: "1–2 recámaras",
    beds: 1,
    baths: 0,
    features: ["Penthouse en dos niveles", "1 o 2 recámaras", "Walk-in closet", "Recámara de servicio", "Centro de lavado", "Playroom en terraza", "Alberca", "Terraza con asadores", "Salón de eventos", "Proyecto de Landa+Martínez"],
    description: "Cinco penthouses disponibles en Torre Latitud 25, en Uptown Torreón. Tipologías de una y dos recámaras, con superficies de 238.30 a 297.72 m², espacios exteriores y amenidades exclusivas.",
    imageCount: 7,
    unitTypes: [
      { name: "Tipo A", units: "PH 601 y PH 605", price: 15500000, bedrooms: 2, interior: 223.79, exterior: 73.93, total: 297.72 },
      { name: "Tipo B", units: "PH 602 y PH 604", price: 12500000, bedrooms: 1, interior: 181.90, exterior: 56.40, total: 238.30 },
      { name: "Tipo C", units: "PH 603", price: 15000000, bedrooms: 2, interior: 206.44, exterior: 80.87, total: 287.31 },
    ],
    paymentOptions: [
      "20% de anticipo, 60% a 18 meses sin intereses y 20% contra entrega.",
      "40% de anticipo, 40% a 18 meses sin intereses y 20% contra entrega; aplica 2.5% de descuento.",
      "80% de anticipo y 20% a 18 meses sin intereses; aplica 8% de descuento.",
    ],
    documents: [
      { label: "Brochure", url: "/properties/PROP-020/brochure-penthouses-torre-latitud-25.pdf" },
      { label: "Disponibilidad", url: "/properties/PROP-020/disponibilidad-penthouses-torre-latitud-25.pdf" },
      { label: "Política de venta", url: "/properties/PROP-020/politica-de-venta-penthouses-torre-latitud-25.pdf" },
    ],
  },
  {
    id: "PROP-021",
    name: "Lote Las Cuadras",
    operation: "Venta",
    type: "Terreno",
    city: "Durango, Durango",
    zone: "Fraccionamiento Las Cuadras",
    totalArea: 563.55,
    beds: 0,
    baths: 0,
    features: ["Superficie total: 563.55 m²", "Fraccionamiento Las Cuadras"],
    description: "Lote en un desarrollo de Latitud 25, en Durango. Fraccionamiento Las Cuadras, con un diseño de Artigas Arquitectos. El concepto es tipo country club; te hace sentir fuera de México, en un lugar que respira paz. Amenidades INCREÍBLES.",
    imageCount: 3,
    coverImageIndex: 3,
  },
  {
    id: "PROP-022",
    name: "Casa Santa Bárbara",
    operation: "Venta",
    type: "Casa",
    city: "Torreón",
    zone: "Fraccionamiento Santa Bárbara",
    price: 10290000,
    totalArea: 540,
    construction: 650,
    beds: 3,
    baths: 4.5,
    features: ["Alberca", "Terraza con asador", "Salón de juegos exterior", "Cochera para 4 autos", "Paneles solares", "Cisterna de 5,000 litros", "Cocina equipada", "Acabados de lujo"],
    description: "En Fraccionamiento Santa Bárbara se encuentra esta residencia de Bernardo Villarreal Maiz, desarrollada sobre un terreno de 540 m² y con 650 m² de construcción. Cuenta con tres recámaras, cuatro baños y medio, alberca, terraza con asador y un salón de juegos exterior. Tiene cochera para cuatro autos, paneles solares y cisterna con capacidad de 5,000 litros. La propiedad se entrega con cocina totalmente equipada y acabados de lujo.",
    imageCount: 10,
  },
  {
    id: "PROP-023",
    name: "Lote Noas, Las Villas del Cardenchal",
    operation: "Venta",
    type: "Terreno",
    city: "Torreón",
    zone: "Las Villas del Cardenchal",
    totalArea: 420,
    beds: 0,
    baths: 0,
    features: ["Superficie total: 420 m²", "Frente: 15.03 m", "Fondo: casi 28 m", "Terreno regular", "Cerca del acceso", "Sin vecinos atrás"],
    description: "Lote de 420 m² en Noas, Las Villas del Cardenchal, un tamaño cómodo para construir una casa amplia con jardín, terraza y cochera. Sus medidas —15.03 m de frente y casi 28 m de fondo— forman un terreno regular y fácil de aprovechar, sin ángulos complicados. Al entrar al fraccionamiento queda del lado derecho y cerca del acceso, por lo que llegar a casa será rápido y sencillo. No tiene vecinos atrás.",
    imageCount: 1,
  },
  {
    id: "PROP-008",
    name: "Nave Industrial Centro",
    operation: "Venta",
    type: "Industrial",
    city: "Torreón",
    zone: "Centro / Avenida Allende",
    price: 19000000,
    pricePerSquareMeter: 5475.98,
    totalArea: 3469.7,
    construction: 3469.7,
    beds: 0,
    baths: 0,
    features: ["Área operativa", "Oficinas", "Baños", "Comedor", "Acceso logístico"],
    description: "Nave lista para manufactura, almacenamiento, logística o distribución, sobre una de las principales vialidades de Torreón.",
    instagram: "https://www.instagram.com/p/DZ_I9xXAPLz/",
    imageCount: 3,
  },
  {
    id: "PROP-009",
    name: "Lote Villa Cóndores",
    operation: "Venta",
    type: "Terreno",
    city: "Torreón",
    zone: "Las Villas",
    price: 5700000,
    pricePerSquareMeter: 9500,
    totalArea: 600,
    beds: 0,
    baths: 0,
    features: ["Lote CN-32", "Superficie total: 600 m²", "Frente: 19.41 m (11.58 m + 7.83 m)", "Contrafrente: 19.35 m", "Laterales: 31.82 m y 30.28 m", "Vista al área verde", "Vecinos a ambos lados"],
    description: "Lote CN-32 de 600 m² disponible en Villa Cóndores, con vista al área verde y vecinos a ambos lados.",
    instagram: "https://www.instagram.com/p/DZsrUxuhdTa/",
    imageCount: 3,
    coverImageIndex: 2,
    galleryImageIndices: [2, 3],
  },
  {
    id: "PROP-010",
    name: "Departamento Lativ",
    operation: "Venta",
    type: "Departamento",
    city: "San Pedro Garza García",
    zone: "Parque Rufino Tamayo",
    price: 19000000,
    pricePerSquareMeter: 186274.51,
    totalArea: 102,
    beds: 2,
    baths: 2.5,
    features: ["Alberca", "Gym", "Rooftop", "Ludoteca", "Simulador de golf", "Área de asadores", "Centro culinario", "Salón de eventos", "Sport bar", "Business center", "Acceso directo al parque"],
    description: "Departamento de 102 m² en Lativ, con dos recámaras y acceso a amenidades premium.",
    imageCount: 3,
  },
  {
    id: "PROP-011",
    name: "Lote Arteaga",
    operation: "Venta",
    type: "Terreno",
    city: "Arteaga, Coahuila",
    zone: "Carretera Arteaga",
    price: 19000000,
    pricePerSquareMeter: 73.08,
    totalArea: 260000,
    beds: 0,
    baths: 0,
    features: ["Superficie total: 26 ha", "6 ha de labor", "20 ha de agostadero", "A pie de carretera", "A 5 km de Arteaga", "A 5 km de Terra Serena", "Terreno semiplano", "Ideal para desarrollo o complejo residencial"],
    description: "Terreno semiplano de 26 hectáreas totales, a pie de carretera y a 5 km tanto de Arteaga como de Terra Serena. Por su escala y topografía es ideal para un desarrollo o complejo residencial.",
    imageCount: 1,
  },
  {
    id: "PROP-013",
    name: "Lote Villa Libélulas",
    operation: "Venta",
    type: "Terreno",
    city: "Torreón",
    zone: "Las Villas",
    price: 3600000,
    pricePerSquareMeter: 9000,
    totalArea: 400,
    beds: 0,
    baths: 0,
    features: ["Lote LB-17", "Superficie total: 400 m²", "Frente curvo: 15 m", "Contrafrente: 26.10 m (25.98 m + 0.12 m)", "Laterales: 23.30 m y 22.11 m", "Circuito Libélulas", "Forma irregular"],
    description: "Lote LB-17 de 400 m² en Villa Libélulas, con frente curvo de 15 m sobre Circuito Libélulas y un trazo irregular para un proyecto arquitectónico distintivo.",
    imageCount: 1,
  },
  {
    id: "PROP-014",
    name: "Lote Fraccionamiento Parvada",
    operation: "Venta",
    type: "Terreno",
    city: "Parras de la Fuente, Coahuila",
    zone: "Fraccionamiento Parvada",
    price: 4673700,
    pricePerSquareMeter: 4048.42,
    totalArea: 1154.45,
    beds: 0,
    baths: 0,
    features: ["Superficie total: 1,154.45 m²", "Precio: $4,050 MXN por m²"],
    description: "Lote de 1,154.45 m² en Fraccionamiento Parvada, disponible a $4,050 MXN por m².",
    imageCount: 5,
  },
  {
    id: "PROP-015",
    name: "Lote Villa Venados",
    operation: "Venta",
    type: "Terreno",
    city: "Torreón",
    zone: "Las Villas",
    price: 39310000,
    pricePerSquareMeter: 9999.87,
    totalArea: 3931.05,
    beds: 0,
    baths: 0,
    features: ["Lote E-09", "Superficie total: 3,931.05 m²", "Frente: 82.27 m", "Doble acceso principal y peatonal", "Lleno de nogales", "Privada privilegiada dentro de Las Villas"],
    description: "Lote E-09 de 3,931.05 m² en Villa Venados, con 82.27 m de frente, doble acceso principal y peatonal, y abundantes nogales dentro de una privada privilegiada de Las Villas.",
    imageCount: 4,
  },
  {
    id: "PROP-017",
    name: "Agaves 01",
    operation: "Venta",
    type: "Terreno",
    city: "Torreón",
    zone: "Las Villas del Cardenchal",
    price: 2737500,
    pricePerSquareMeter: 7480.53,
    totalArea: 365.95,
    beds: 0,
    baths: 0,
    features: ["Superficie total: 365.95 m²", "Precio: $7,500 MXN por m²"],
    description: "Lote de 365.95 m² disponible en Las Villas del Cardenchal, con un precio de $7,500 MXN por m².",
    imageCount: 1,
  },
  {
    id: "PROP-018",
    name: "Agaves 02",
    operation: "Venta",
    type: "Terreno",
    city: "Torreón",
    zone: "Las Villas del Cardenchal",
    price: 2700000,
    pricePerSquareMeter: 7500,
    totalArea: 360,
    beds: 0,
    baths: 0,
    features: ["Superficie total: 360 m²", "Precio: $7,500 MXN por m²"],
    description: "Lote de 360 m² disponible en Las Villas del Cardenchal, con un precio de $7,500 MXN por m².",
    imageCount: 1,
  },
  {
    id: "PROP-019",
    name: "Lote Osos",
    operation: "Venta",
    type: "Terreno",
    city: "Torreón",
    zone: "Las Villas",
    price: 9300000,
    pricePerSquareMeter: 9300,
    totalArea: 1000,
    beds: 0,
    baths: 0,
    features: ["Superficie total: 1,000 m²", "Precio: $9,300 MXN por m²"],
    description: "Lote de 1,000 m² disponible en Las Villas, con un precio de $9,300 MXN por m².",
    imageCount: 1,
  },
];

export const propertyImage = (property: Property, index?: number) =>
  `/properties/${property.id}/${String(index ?? property.coverImageIndex ?? 1).padStart(2, "0")}.${property.imageExtension || "jpg"}`;

export const propertyGalleryImages = (property: Property) =>
  (property.galleryImageIndices || Array.from({ length: property.imageCount }, (_, index) => index + 1)).map(index =>
    `/properties/${property.id}/${String(index).padStart(2, "0")}.${property.imageExtension || "jpg"}`
  );

export const propertyTotalPrice = (property: Property) =>
  property.price ?? (property.pricePerSquareMeter && property.totalArea > 0 ? property.pricePerSquareMeter * property.totalArea : undefined);

export const formatPropertyPrice = (property: Property) => {
  const formatter = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });
  if (property.priceLabel) return property.priceLabel;
  if (property.price) return `${formatter.format(property.price)}${property.pricePeriod ? ` / ${property.pricePeriod}` : ""}`;
  if (property.pricePerSquareMeter) return `${formatter.format(property.pricePerSquareMeter)} / m²`;
  return "Precio a solicitud";
};

export const formatPricePerSquareMeter = (property: Property) => {
  if (!property.pricePerSquareMeter) return undefined;
  return `${new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(property.pricePerSquareMeter)} / m²`;
};
