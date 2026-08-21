import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { formatPropertyPrice, properties, propertyGalleryImages, propertyImage } from "../../property-data";

export function generateStaticParams(){return properties.map(property=>({id:property.id}));}

export async function generateMetadata({params}:{params:Promise<{id:string}>}):Promise<Metadata>{
  const {id}=await params;
  const property=properties.find(item=>item.id===id);
  if(!property)return {};
  const title=`${property.name} | Mariana Villarreal Real Estate`;
  const description=`${property.description} Superficie total: ${property.totalArea?`${property.totalArea.toLocaleString("es-MX")} m²`:"a solicitud"}.`;
  const image=new URL(propertyImage(property),"https://marianavillarreal.com").toString();
  return {title,description,openGraph:{title,description,images:[image]},twitter:{card:"summary_large_image",title,description,images:[image]}};
}

export default async function PropertyDetail({params}:{params:Promise<{id:string}>}){
  const {id}=await params; const property=properties.find(item=>item.id===id); if(!property)notFound();
  const price=formatPropertyPrice(property);
  const residential=property.type==="Casa"||property.type==="Departamento";
  return <main className="property-detail">
    <section className={`detail-hero${property.containImage?" detail-hero--plan":""}`} style={{backgroundImage:`url(${propertyImage(property)})`}}/>
    <section className="detail-copy"><div><p>{property.operation} · {property.type}{property.status?` · ${property.status}`:""}</p><h1>{property.name}</h1><span>{property.zone}, {property.city}</span></div><div><strong className={property.status?"detail-status":undefined}>{price}</strong><p>{property.description}</p><dl>
      <dt>Operación</dt><dd>{property.operation}</dd>
      <dt>Tipo de propiedad</dt><dd>{property.type}</dd>
      <dt>Ubicación</dt><dd>{property.zone}, {property.city}</dd>
      <dt>Superficie total</dt><dd>{property.totalArea>0?`${property.totalArea.toLocaleString("es-MX")} m²`:"A solicitud"}</dd>
      {property.construction&&<><dt>Construcción</dt><dd>{property.construction.toLocaleString("es-MX")} m²</dd></>}
      {residential&&<><dt>Recámaras</dt><dd>{property.beds>0?property.beds:"A solicitud"}</dd><dt>Baños</dt><dd>{property.baths>0?property.baths:"A solicitud"}</dd></>}
    </dl></div></section>
    <section className="detail-gallery">{propertyGalleryImages(property).map((image,index)=><img src={image} alt={`${property.name} — imagen ${index+1}`} key={image}/>)}</section>
    <section className="detail-features"><h2>Características</h2><div>{property.features.map(feature=><span key={feature}>{feature}</span>)}</div>{property.instagram&&<a href={property.instagram} target="_blank" rel="noreferrer">Ver publicación en Instagram</a>}</section>
  </main>;
}
