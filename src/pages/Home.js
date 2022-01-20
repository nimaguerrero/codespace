import Cards from 'components/Cards';
import { useState } from 'react';

function Home() {
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
    <div className="container mt-36">
      <div className="bg-white dark:bg-gray-800 ">
        <div className="text-center w-full mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            <span className="block">Busca el proyecto que quieras</span>
            <span className="block text-blue-500">así de facil</span>
          </h1>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex border-2 rounded shadow-lg mb-12">
            <input
              type="search"
              className="px-4 py-2 w-80 "
              placeholder="Search..."
            />
            <button className="flex items-center justify-center px-4 border-l">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 mb-4">
          <label className="inline-flex items-center">
            <input type="radio" name="tag" className="h-5 w-5 text-red-600" />
            <span className="ml-2 text-gray-700">Componentes</span>
          </label>

          <label className="inline-flex items-center">
            <input type="radio" name="tag" className="h-5 w-5 text-red-600" />
            <span className="ml-2 text-gray-700">Proyectos</span>
          </label>

          <label className="inline-flex items-center">
            <input type="radio" name="tag" className="h-5 w-5 text-red-600" />
            <span className="ml-2 text-gray-700">Apis</span>
          </label>

          <label className="inline-flex items-center">
            <input type="radio" name="tag" className="h-5 w-5 text-red-600" />
            <span className="ml-2 text-gray-700">Librerias</span>
          </label>

          <div>
            <div className="relative inline-block w-10 mr-2 align-middle select-none">
              <input
                type="checkbox"
                name="toggle"
                id="Blue"
                className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="Blue"
                className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
            <span className="text-gray-400 font-medium">Gratis</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 mb-4">
          <label className="flex items-center space-x-3 mb-3">
            <input
              type="checkbox"
              name="checked-demo"
              className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
            />
            <span className="text-gray-700 dark:text-white font-normal">
              React
            </span>
          </label>
          <label className="flex items-center space-x-3 mb-3">
            <input
              type="checkbox"
              name="checked-demo"
              className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
            />
            <span className="text-gray-700 dark:text-white font-normal">
              Angular
            </span>
          </label>
          <label className="flex items-center space-x-3 mb-3">
            <input
              type="checkbox"
              name="checked-demo"
              className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
            />
            <span className="text-gray-700 dark:text-white font-normal">
              Java
            </span>
          </label>
        </div>
      </div>

      <div className="text-center">
        <Cards projects={projects} />
      </div>
    </div>
  );
}

export default Home;
