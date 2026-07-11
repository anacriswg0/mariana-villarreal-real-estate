"use client";
import { useMemo, useState } from "react";
import Link from "next/link";

const properties = [
  ["Residencia Las Villas","Las Villas, Torreón",680,"Venta","Casa","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=88"],
  ["Casa Campestre","Campestre La Rosita, Torreón",520,"Venta","Casa","https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=88"],
  ["Terreno Los Viñedos","Los Viñedos, Torreón",1200,"Venta","Terreno","https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=88"],
  ["Nave Industrial Norte","Zona Industrial, Torreón",3400,"Renta","Industrial","https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=88"],
  ["Departamento Alameda","Centro, Torreón",185,"Venta","Departamento","https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=88"],
  ["Oficinas Independencia","Navarro, Torreón",310,"Renta","Oficina","https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=88"],
  ["Casa Los Ángeles","Los Ángeles, Torreón",450,"Venta","Casa","https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=88"],
  ["Local Paseo Morelos","Centro, Torreón",140,"Renta","Local","https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=88"],
  ["Quinta La Laguna","El Fresno, Torreón",980,"Venta","Casa","https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=88"],
] as const;

export default function PropertiesPage(){
  const [operation,setOperation]=useState("Todas"); const [type,setType]=useState("Todos"); const [area,setArea]=useState("0");
  const visible=useMemo(()=>properties.filter(p=>(operation==="Todas"||p[3]===operation)&&(type==="Todos"||p[4]===type)&&p[2]>=Number(area)),[operation,type,area]);
  return <main className="properties-page">
    <header className="properties-header"><Link href="/">MARIANA VILLARREAL</Link><Link href="/">INICIO</Link></header>
    <section className="catalog-intro">
      <div><p>Propiedades</p><h1>Una selección inmobiliaria hecha con criterio y atención personal.</h1></div>
      <div className="filters">
        <label>Operación<select value={operation} onChange={e=>setOperation(e.target.value)}><option>Todas</option><option>Venta</option><option>Renta</option></select></label>
        <label>Tipo de propiedad<select value={type} onChange={e=>setType(e.target.value)}><option>Todos</option><option>Casa</option><option>Departamento</option><option>Terreno</option><option>Oficina</option><option>Local</option><option>Industrial</option></select></label>
        <label>Superficie mínima<select value={area} onChange={e=>setArea(e.target.value)}><option value="0">Cualquiera</option><option value="200">200 m²</option><option value="500">500 m²</option><option value="1000">1,000 m²</option></select></label>
      </div>
    </section>
    <section className="catalog-grid">{visible.map(p=><a className="catalog-card" href="#" key={p[0]}><div className="catalog-image" style={{backgroundImage:`url(${p[5]})`}}/><div className="catalog-info"><strong>{p[0]}</strong><span>{p[1]}</span><span>{p[2].toLocaleString("es-MX")} m²</span></div></a>)}</section>
  </main>;
}
