import { useState } from 'react';
import Card from './Card';
import './Cards.css';

function Cards() {
  const [projects, useProjects] = useState([
    {
      name: 'Carousel',
      tag: 'componente',
      language: 'react',
      price: 1,
    },
    {
      name: 'Calculadora',
      tag: 'componente',
      language: 'java',
      price: 0,
    },
    {
      name: 'Control de pagos de alumnos',
      tag: 'proyecto',
      language: 'c',
      price: 2,
    },
    {
      name: 'Dashboard Plantilla sin links',
      tag: 'proyecto',
      language: 'angular',
      price: 20,
    },
    {
      name: 'Dashboard Plantilla con lista de usuarios',
      tag: 'proyecto',
      language: 'php',
      price: 100,
    },
    {
      name: 'Control de pagos de alumnos',
      tag: 'proyecto',
      language: 'c',
      price: 2,
    },
    {
      name: 'Toast',
      tag: 'libreria',
      language: 'angular',
      price: 20,
    },
    {
      name: 'Dulces',
      tag: 'api',
      language: 'php',
      price: 10,
    },
    {
      name: 'Control de pagos de alumnos',
      tag: 'proyecto',
      language: 'c',
      price: 2,
    },
    {
      name: 'Toast',
      tag: 'libreria',
      language: 'angular',
      price: 20,
    },
    {
      name: 'Dulces',
      tag: 'api',
      language: 'php',
      price: 10,
    },
    {
      name: 'Toast',
      tag: 'libreria',
      language: 'angular',
      price: 20,
    },
  ]);

  return (
    // <div className="flex flex-wrap items-center justify-center">
    <div className="cards">
      {projects.length > 0 &&
        projects.map((project, i) => <Card key={i} project={project} />)}
    </div>
  );
}

export default Cards;
