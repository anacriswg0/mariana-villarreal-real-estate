"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { properties, propertyImage } from "../property-data";

const unique=(values:string[])=>[...new Set(values)];
const groupOptions={
  operation:unique(properties.map(property=>property.operation)),
  type:unique(properties.map(property=>property.type)),
  city:unique(properties.map(property=>property.city)),
};
const zonesByCity=properties.reduce<Record<string,string[]>>((zones,property)=>{
  zones[property.city]=unique([...(zones[property.city]||[]),property.zone]);
  return zones;
},{});
const filterableFeatures=["Alberca","Gym","Rooftop","Terraza","Jardín","Oficina","Sala de TV","Canchas de pádel","Área de asadores","Acceso directo al parque"];
const availableFeatures=filterableFeatures.filter(feature=>properties.some(property=>property.features.includes(feature)));

export default function PropertiesPage(){
  const [selected,setSelected]=useState<Record<string,string[]>>({operation:[],type:[],city:[],zone:[],features:[]});
  const [maxPrice,setMaxPrice]=useState("999999999"); const [maxArea,setMaxArea]=useState("999999"); const [beds,setBeds]=useState("0"); const [baths,setBaths]=useState("0");
  const toggle=(group:string,value:string)=>setSelected(current=>({...current,[group]:current[group].includes(value)?current[group].filter(item=>item!==value):[...current[group],value],...(group==="city"?{zone:[]}:{} )}));
  const zones=selected.city.length?selected.city.flatMap(city=>zonesByCity[city]||[]):[];
  const residential=selected.type.some(type=>type==="Casa"||type==="Departamento");
  const visible=useMemo(()=>properties.filter(p=>(!selected.operation.length||selected.operation.includes(p.operation))&&(!selected.type.length||selected.type.includes(p.type))&&(!selected.city.length||selected.city.includes(p.city))&&(!selected.zone.length||selected.zone.includes(p.zone))&&(!p.price||p.price<=Number(maxPrice))&&(!p.area||p.area<=Number(maxArea))&&(!residential||(p.beds>=Number(beds)&&p.baths>=Number(baths)))&&selected.features.every(feature=>p.features.includes(feature))).sort((a,b)=>a.name.localeCompare(b.name,"es",{sensitivity:"base"})),[selected,maxPrice,maxArea,beds,baths,residential]);
  const checks=(title:string,group:string,options:string[],disabled=false)=><fieldset className={disabled?"disabled":""} disabled={disabled}><legend>{title}</legend>{options.map(option=><label className="check" key={option}><input type="checkbox" checked={selected[group].includes(option)} onChange={()=>toggle(group,option)}/>{option}</label>)}</fieldset>;
  return <main className="properties-page">
    <header className="properties-header"><Link href="/">MARIANA VILLARREAL</Link><Link href="/">INICIO</Link></header>
    <section className="catalog-intro">
      <div><p>Propiedades</p><h1>Selección inmobiliaria en las mejores zonas para vivir o invertir.</h1></div>
      <div className="filters checkbox-filters">
        {checks("Operación","operation",groupOptions.operation)}
        {checks("Tipo de propiedad","type",groupOptions.type)}
        {checks("Ciudad","city",groupOptions.city)}
        {checks("Zona o colonia","zone",zones,selected.city.length===0)}
        <label>Presupuesto máximo<select value={maxPrice} onChange={e=>setMaxPrice(e.target.value)}><option value="999999999">Sin máximo</option><option value="3000000">$3 M</option><option value="6000000">$6 M</option><option value="10000000">$10 M</option><option value="20000000">$20 M</option><option value="40000000">$40 M</option></select></label>
        <label>Metros cuadrados máximos<select value={maxArea} onChange={e=>setMaxArea(e.target.value)}><option value="999999">Sin máximo</option><option value="360">360 m²</option><option value="600">600 m²</option><option value="1200">1,200 m²</option><option value="3500">3,500 m²</option></select></label>
        <label className={!residential?"disabled":""}>Recámaras<select disabled={!residential} value={beds} onChange={e=>setBeds(e.target.value)}><option value="0">Cualquiera</option><option value="1">1+</option><option value="2">2+</option><option value="3">3+</option><option value="4">4+</option></select></label>
        <label className={!residential?"disabled":""}>Baños<select disabled={!residential} value={baths} onChange={e=>setBaths(e.target.value)}><option value="0">Cualquiera</option><option value="1">1+</option><option value="2">2+</option><option value="3">3+</option><option value="4">4+</option></select></label>
        {checks("Características especiales","features",availableFeatures)}
      </div>
    </section>
    <div className="result-count">{visible.length} propiedades</div>
    <section className="catalog-grid">{visible.map(p=><Link className="catalog-card" href={`/propiedades/${p.id}`} key={p.name}><div className="catalog-image" style={{backgroundImage:`url(${propertyImage(p)})`}}/><div className="catalog-info"><strong>{p.name}</strong><span>{p.zone}, {p.city}</span><span>{p.area?p.area.toLocaleString("es-MX")+" m²":"Consultar"}</span></div></Link>)}</section>
  </main>;
}
