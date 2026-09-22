import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { formatPricePerSquareMeter, formatPropertyPrice, properties, propertyGalleryImages, propertyImage } from "../../property-data";

const formatCurrency=(value:number)=>`${new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN",maximumFractionDigits:0}).format(value)} MXN`;

export function generateStaticParams(){return properties.map(property=>({id:property.id}));}

export async function generateMetadata({params}:{params:Promise<{id:string}>}):Promise<Metadata>{
  const {id}=await params;
  const property=properties.find(item=>item.id===id);
  if(!property)return {};
  const title=`${property.name} | Mariana Villarreal Real Estate`;
  const description=`${property.description} Superficie total: ${property.areaLabel || (property.totalArea?`${property.totalArea.toLocaleString("es-MX")} m²`:"a solicitud")}.`;
  if(property.imageCount===0)return {title,description,openGraph:{title,description,images:[]},twitter:{card:"summary",title,description,images:[]}};
  const image=new URL(propertyImage(property),"https://marianavillarreal.com").toString();
  return {title,description,openGraph:{title,description,images:[image]},twitter:{card:"summary_large_image",title,description,images:[image]}};
}

export default async function PropertyDetail({params}:{params:Promise<{id:string}>}){
  const {id}=await params; const property=properties.find(item=>item.id===id); if(!property)notFound();
  const price=formatPropertyPrice(property);
  const pricePerSquareMeter=formatPricePerSquareMeter(property);
  const residential=property.type==="Casa"||property.type==="Departamento";
  return <main className="property-detail">
    {property.imageCount>0?<section className={`detail-hero${property.containImage?" detail-hero--plan":""}`} style={{backgroundImage:`url(${propertyImage(property)})`}}/>:<section className="detail-hero detail-hero--placeholder"><span>Imágenes próximamente</span></section>}
    <section className="detail-copy"><div><p>{property.operation} · {property.type}{property.status?` · ${property.status}`:""}</p><h1>{property.name}</h1><span>{property.zone}, {property.city}</span></div><div><strong className={property.status?"detail-status":undefined}>{price}</strong><p>{property.description}</p><dl>
      <dt>Operación</dt><dd>{property.operation}</dd>
      <dt>Tipo de propiedad</dt><dd>{property.type}</dd>
      <dt>Ubicación</dt><dd>{property.zone}, {property.city}</dd>
      <dt>Superficie total</dt><dd>{property.areaLabel || (property.totalArea>0?`${property.totalArea.toLocaleString("es-MX")} m²`:"A solicitud")}</dd>
      {property.address&&<><dt>Dirección</dt><dd>{property.address}</dd></>}
      {pricePerSquareMeter&&<><dt>Precio por m²</dt><dd>{pricePerSquareMeter}</dd></>}
      {property.construction&&<><dt>Construcción</dt><dd>{property.construction.toLocaleString("es-MX")} m²</dd></>}
      {residential&&!property.unitTypes&&<><dt>Recámaras</dt><dd>{property.beds>0?property.beds:"A solicitud"}</dd><dt>Baños</dt><dd>{property.baths>0?property.baths:"A solicitud"}</dd></>}
    </dl></div></section>
    {property.unitTypes&&<section className="detail-unit-types"><h2>Disponibilidad y tipologías</h2><p>Precios y superficies de los penthouses disponibles.</p><div className="detail-unit-grid">{property.unitTypes.map(unit=><article key={unit.name}><h3>{unit.name}</h3><dl>{unit.units&&<><dt>Unidades</dt><dd>{unit.units}</dd></>}{unit.price&&<><dt>Precio</dt><dd>{formatCurrency(unit.price)}</dd></>}{unit.bedrooms&&<><dt>Recámaras</dt><dd>{unit.bedrooms}</dd></>}<dt>Interior</dt><dd>{unit.interior.toFixed(2)} m²</dd><dt>Exterior</dt><dd>{unit.exterior.toFixed(2)} m²</dd><dt>Total</dt><dd>{unit.total.toFixed(2)} m²</dd></dl></article>)}</div></section>}
    {property.paymentOptions&&<section className="detail-payment"><p>Financiamiento sin intereses</p><h2>Formas de pago</h2><div>{property.paymentOptions.map((option,index)=><article key={option}><strong>Opción {index+1}</strong><span>{option}</span></article>)}</div></section>}
    {property.brochureUrl&&<section className="detail-brochure"><div><p>Documento del proyecto</p><h2>Consulta el folleto completo</h2></div><a href={property.brochureUrl} target="_blank" rel="noreferrer">Ver folleto PDF ↗</a></section>}
    {property.documents&&<section className="detail-documents"><div><p>Información del proyecto</p><h2>Consulta los documentos</h2></div><div>{property.documents.map(document=><a href={document.url} target="_blank" rel="noreferrer" key={document.url}>{document.label} ↗</a>)}</div></section>}
    {property.imageCount>0&&<section className="detail-gallery">{propertyGalleryImages(property).map((image,index)=><img src={image} alt={`${property.name} — imagen ${index+1}`} key={image}/>)}</section>}
    <section className="detail-features"><h2>Características</h2><div>{property.features.map(feature=><span key={feature}>{feature}</span>)}</div>{property.instagram&&<a href={property.instagram} target="_blank" rel="noreferrer">Ver publicación en Instagram</a>}</section>
  </main>;
}
