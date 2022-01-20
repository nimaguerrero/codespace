import Cards from 'components/Cards';

function Projects() {
  return (
    <div className="container p-5">
      <div className="bg-white dark:bg-gray-800 ">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">Want to be millionaire ?</span>
            <span className="block text-indigo-500">
              It&#x27;s today or never.
            </span>
          </h2>
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
                for="Blue"
                className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
            <span className="text-gray-400 font-medium">Gratis</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 mb-4">
          <label class="flex items-center space-x-3 mb-3">
            <input
              type="checkbox"
              name="checked-demo"
              class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
            />
            <span class="text-gray-700 dark:text-white font-normal">React</span>
          </label>
          <label class="flex items-center space-x-3 mb-3">
            <input
              type="checkbox"
              name="checked-demo"
              class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
            />
            <span class="text-gray-700 dark:text-white font-normal">
              Angular
            </span>
          </label>
          <label class="flex items-center space-x-3 mb-3">
            <input
              type="checkbox"
              name="checked-demo"
              class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
            />
            <span class="text-gray-700 dark:text-white font-normal">Java</span>
          </label>
        </div>
      </div>

      {/* <div className="px-4"> */}
      <div className="text-center">
        <Cards />
      </div>
    </div>
  );
}

export default Projects;
