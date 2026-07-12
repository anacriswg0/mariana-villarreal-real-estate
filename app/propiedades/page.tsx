"use client";
import { useMemo, useState } from "react";
import Link from "next/link";

const properties = [
  {name:"Residencia Las Villas",city:"Torreón",zone:"Las Villas",area:680,price:18500000,operation:"Venta",type:"Casa",beds:4,baths:5,features:["Alberca","Circuito cerrado"],image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=88"},
  {name:"Casa Campestre",city:"Torreón",zone:"Campestre La Rosita",area:520,price:14200000,operation:"Venta",type:"Casa",beds:4,baths:4,features:["Alberca","Gym"],image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=88"},
  {name:"Terreno Los Viñedos",city:"Torreón",zone:"Los Viñedos",area:1200,price:6200000,operation:"Venta",type:"Terreno",beds:0,baths:0,features:["Circuito cerrado"],image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=88"},
  {name:"Nave Industrial Norte",city:"Gómez Palacio",zone:"Zona Industrial",area:3400,price:95000,operation:"Renta",type:"Industrial",beds:0,baths:2,features:["Circuito cerrado"],image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=88"},
  {name:"Departamento Alameda",city:"Torreón",zone:"Centro",area:185,price:4900000,operation:"Venta",type:"Departamento",beds:2,baths:2,features:["Gym","Circuito cerrado"],image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=88"},
  {name:"Oficinas Independencia",city:"Torreón",zone:"Navarro",area:310,price:48000,operation:"Renta",type:"Oficina",beds:0,baths:3,features:["Circuito cerrado"],image:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=88"},
  {name:"Casa Los Ángeles",city:"Torreón",zone:"Los Ángeles",area:450,price:11800000,operation:"Venta",type:"Casa",beds:3,baths:4,features:["Alberca"],image:"https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=88"},
  {name:"Local Paseo Morelos",city:"Torreón",zone:"Centro",area:140,price:32000,operation:"Renta",type:"Local",beds:0,baths:1,features:["Circuito cerrado"],image:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=88"},
  {name:"Quinta La Laguna",city:"Lerdo",zone:"El Fresno",area:980,price:16300000,operation:"Venta",type:"Casa",beds:5,baths:5,features:["Alberca","Gym","Circuito cerrado"],image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=88"},
];

const groupOptions={operation:["Venta","Renta"],type:["Casa","Departamento","Terreno","Oficina","Local","Industrial"],city:["Torreón","Gómez Palacio","Lerdo"]};
const zonesByCity:Record<string,string[]>={"Torreón":["Las Villas","Campestre La Rosita","Los Viñedos","Centro","Navarro","Los Ángeles"],"Gómez Palacio":["Zona Industrial"],"Lerdo":["El Fresno"]};

export default function PropertiesPage(){
  const [selected,setSelected]=useState<Record<string,string[]>>({operation:[],type:[],city:[],zone:[],features:[]});
  const [maxPrice,setMaxPrice]=useState("999999999"); const [maxArea,setMaxArea]=useState("999999"); const [beds,setBeds]=useState("0"); const [baths,setBaths]=useState("0");
  const toggle=(group:string,value:string)=>setSelected(current=>({...current,[group]:current[group].includes(value)?current[group].filter(item=>item!==value):[...current[group],value],...(group==="city"?{zone:[]}:{} )}));
  const zones=selected.city.length?selected.city.flatMap(city=>zonesByCity[city]||[]):[];
  const residential=selected.type.some(type=>type==="Casa"||type==="Departamento");
  const visible=useMemo(()=>properties.filter(p=>(!selected.operation.length||selected.operation.includes(p.operation))&&(!selected.type.length||selected.type.includes(p.type))&&(!selected.city.length||selected.city.includes(p.city))&&(!selected.zone.length||selected.zone.includes(p.zone))&&p.price<=Number(maxPrice)&&p.area<=Number(maxArea)&&(!residential||(p.beds>=Number(beds)&&p.baths>=Number(baths)))&&selected.features.every(feature=>p.features.includes(feature))),[selected,maxPrice,maxArea,beds,baths,residential]);
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
        <label>Presupuesto máximo<select value={maxPrice} onChange={e=>setMaxPrice(e.target.value)}><option value="999999999">Sin máximo</option><option value="5000000">$5 M</option><option value="10000000">$10 M</option><option value="15000000">$15 M</option><option value="20000000">$20 M</option></select></label>
        <label>Metros cuadrados máximos<select value={maxArea} onChange={e=>setMaxArea(e.target.value)}><option value="999999">Sin máximo</option><option value="300">300 m²</option><option value="500">500 m²</option><option value="1000">1,000 m²</option><option value="3500">3,500 m²</option></select></label>
        <label className={!residential?"disabled":""}>Recámaras<select disabled={!residential} value={beds} onChange={e=>setBeds(e.target.value)}><option value="0">Cualquiera</option><option value="1">1+</option><option value="2">2+</option><option value="3">3+</option><option value="4">4+</option></select></label>
        <label className={!residential?"disabled":""}>Baños<select disabled={!residential} value={baths} onChange={e=>setBaths(e.target.value)}><option value="0">Cualquiera</option><option value="1">1+</option><option value="2">2+</option><option value="3">3+</option><option value="4">4+</option></select></label>
        {checks("Características especiales","features",["Alberca","Gym","Circuito cerrado"])}
      </div>
    </section>
    <div className="result-count">{visible.length} propiedades</div>
    <section className="catalog-grid">{visible.map(p=><a className="catalog-card" href="#" key={p.name}><div className="catalog-image" style={{backgroundImage:`url(${p.image})`}}/><div className="catalog-info"><strong>{p.name}</strong><span>{p.zone}, {p.city}</span><span>{p.area.toLocaleString("es-MX")} m²</span></div></a>)}</section>
  </main>;
}
