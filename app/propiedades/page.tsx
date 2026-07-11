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

const initial={operation:"Todas",type:"Todos",city:"Todas",zone:"Todas",minPrice:"0",maxPrice:"999999999",minArea:"0",maxArea:"999999",beds:"0",baths:"0"};

export default function PropertiesPage(){
  const [filters,setFilters]=useState(initial); const [features,setFeatures]=useState<string[]>([]);
  const set=(key:string,value:string)=>setFilters(current=>({...current,[key]:value}));
  const toggle=(feature:string)=>setFeatures(current=>current.includes(feature)?current.filter(item=>item!==feature):[...current,feature]);
  const visible=useMemo(()=>properties.filter(p=>(filters.operation==="Todas"||p.operation===filters.operation)&&(filters.type==="Todos"||p.type===filters.type)&&(filters.city==="Todas"||p.city===filters.city)&&(filters.zone==="Todas"||p.zone===filters.zone)&&p.price>=Number(filters.minPrice)&&p.price<=Number(filters.maxPrice)&&p.area>=Number(filters.minArea)&&p.area<=Number(filters.maxArea)&&p.beds>=Number(filters.beds)&&p.baths>=Number(filters.baths)&&features.every(feature=>p.features.includes(feature))),[filters,features]);
  const select=(label:string,key:string,options:[string,string][]) => <label>{label}<select value={filters[key as keyof typeof filters]} onChange={e=>set(key,e.target.value)}>{options.map(([text,value])=><option value={value} key={value}>{text}</option>)}</select></label>;
  return <main className="properties-page">
    <header className="properties-header"><Link href="/">MARIANA VILLARREAL</Link><Link href="/">INICIO</Link></header>
    <section className="catalog-intro">
      <div><p>Propiedades</p><h1>Selección inmobiliaria en las mejores zonas para vivir o invertir.</h1></div>
      <div className="filters">
        {select("Operación","operation",[["Todas","Todas"],["Venta","Venta"],["Renta","Renta"]])}
        {select("Tipo de propiedad","type",[["Todos","Todos"],["Casa","Casa"],["Departamento","Departamento"],["Terreno","Terreno"],["Oficina","Oficina"],["Local","Local"],["Industrial","Industrial"]])}
        {select("Ciudad","city",[["Todas","Todas"],["Torreón","Torreón"],["Gómez Palacio","Gómez Palacio"],["Lerdo","Lerdo"]])}
        {select("Zona o colonia","zone",[["Todas","Todas"],...Array.from(new Set(properties.map(p=>p.zone))).map(zone=>[zone,zone] as [string,string])])}
        {select("Presupuesto mínimo","minPrice",[["Sin mínimo","0"],["$1 M","1000000"],["$5 M","5000000"],["$10 M","10000000"],["$15 M","15000000"]])}
        {select("Presupuesto máximo","maxPrice",[["Sin máximo","999999999"],["$5 M","5000000"],["$10 M","10000000"],["$15 M","15000000"],["$20 M","20000000"]])}
        {select("Metros cuadrados mínimos","minArea",[["Sin mínimo","0"],["150 m²","150"],["300 m²","300"],["500 m²","500"],["1,000 m²","1000"]])}
        {select("Metros cuadrados máximos","maxArea",[["Sin máximo","999999"],["300 m²","300"],["500 m²","500"],["1,000 m²","1000"],["3,500 m²","3500"]])}
        {select("Recámaras","beds",[["Cualquiera","0"],["1+","1"],["2+","2"],["3+","3"],["4+","4"]])}
        {select("Baños","baths",[["Cualquiera","0"],["1+","1"],["2+","2"],["3+","3"],["4+","4"]])}
        <fieldset><legend>Características especiales</legend>{["Alberca","Gym","Circuito cerrado"].map(feature=><label className="check" key={feature}><input type="checkbox" checked={features.includes(feature)} onChange={()=>toggle(feature)}/>{feature}</label>)}</fieldset>
      </div>
    </section>
    <div className="result-count">{visible.length} propiedades</div>
    <section className="catalog-grid">{visible.map(p=><a className="catalog-card" href="#" key={p.name}><div className="catalog-image" style={{backgroundImage:`url(${p.image})`}}/><div className="catalog-info"><strong>{p.name}</strong><span>{p.zone}, {p.city}</span><span>{p.area.toLocaleString("es-MX")} m²</span></div></a>)}</section>
  </main>;
}
