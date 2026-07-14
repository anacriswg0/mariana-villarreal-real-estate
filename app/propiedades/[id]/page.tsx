import Link from "next/link";
import { notFound } from "next/navigation";
import { properties, propertyImage } from "../../property-data";

export function generateStaticParams(){return properties.map(property=>({id:property.id}));}

export default async function PropertyDetail({params}:{params:Promise<{id:string}>}){
  const {id}=await params; const property=properties.find(item=>item.id===id); if(!property)notFound();
  const price=property.price?new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN",maximumFractionDigits:0}).format(property.price):"Precio a solicitud";
  return <main className="property-detail">
    <header className="properties-header"><Link href="/">MARIANA VILLARREAL</Link><Link href="/propiedades">PROPIEDADES</Link></header>
    <section className="detail-hero" style={{backgroundImage:`url(${propertyImage(property)})`}}/>
    <section className="detail-copy"><div><p>{property.operation} · {property.type}</p><h1>{property.name}</h1><span>{property.zone}, {property.city}</span></div><div><strong>{price}</strong><p>{property.description}</p><dl>{property.area>0&&<><dt>Superficie</dt><dd>{property.area.toLocaleString("es-MX")} m²</dd></>}{property.construction&&<><dt>Construcción</dt><dd>{property.construction.toLocaleString("es-MX")} m²</dd></>}{property.beds>0&&<><dt>Recámaras</dt><dd>{property.beds}</dd></>}{property.baths>0&&<><dt>Baños</dt><dd>{property.baths}</dd></>}</dl></div></section>
    <section className="detail-gallery">{Array.from({length:property.imageCount},(_,index)=><img src={propertyImage(property,index+1)} alt={`${property.name} — imagen ${index+1}`} key={index}/>)}</section>
    <section className="detail-features"><h2>Características</h2><div>{property.features.map(feature=><span key={feature}>{feature}</span>)}</div>{property.instagram&&<a href={property.instagram} target="_blank" rel="noreferrer">Ver publicación en Instagram</a>}</section>
  </main>;
}
