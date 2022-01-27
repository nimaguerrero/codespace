import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from 'svg';

function Navbar() {
  const menu = useRef();

  const toggle = () => {
    menu.current.classList.toggle('hidden');
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-20">
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white shadow">
        <NavLink className="text-3xl font-bold leading-none" to="/">
          <Logo />
        </NavLink>
        <div className="lg:hidden">
          <button
            onClick={() => toggle()}
            className="navbar-burger flex items-center text-blue-600 p-3"
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <NavLink
              to="/"
              exact="true"
              className={({ isActive }) =>
                'text-sm text-gray-400 hover:text-gray-500' +
                (isActive ? ' text-blue-600' : '')
              }
            >
              Inicio
            </NavLink>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <NavLink
              to="/about"
              exact="true"
              className={({ isActive }) =>
                'text-sm text-gray-400 hover:text-gray-500' +
                (isActive ? ' text-blue-600' : '')
              }
            >
              Acerca de
            </NavLink>
          </li>
          {/* <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <NavLink
              to="/services"
              exact="true"
              className={({ isActive }) =>
                'text-sm text-gray-400 hover:text-gray-500' +
                (isActive ? ' text-blue-600' : '')
              }
            >
              Servicios
            </NavLink>
          </li> 
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <NavLink
              to="/pricing"
              exact="true"
              className={({ isActive }) =>
                'text-sm text-gray-400 hover:text-gray-500' +
                (isActive ? ' text-blue-600' : '')
              }
            >
              Precios
            </NavLink>
          </li>*/}
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <NavLink
              to="/contact"
              exact="true"
              className={({ isActive }) =>
                'text-sm text-gray-400 hover:text-gray-500' +
                (isActive ? ' text-blue-600' : '')
              }
            >
              Contacto
            </NavLink>
          </li>
        </ul>
        <NavLink
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
          to="/login"
        >
          Iniciar sesión
        </NavLink>
        <NavLink
          className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
          to="/register"
        >
          Registrarse
        </NavLink>
      </nav>
      <div ref={menu} className="navbar-menu relative z-50 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <NavLink className="mr-auto text-3xl font-bold leading-none" to="/">
              <Logo />
            </NavLink>
            <button onClick={() => toggle()} className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <NavLink
                  to="/"
                  exact="true"
                  className={({ isActive }) =>
                    'block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded' +
                    (isActive ? ' text-blue-600' : '')
                  }
                >
                  Inicio
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  to="/about"
                  exact="true"
                  className={({ isActive }) =>
                    'block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded' +
                    (isActive ? ' text-blue-600' : '')
                  }
                >
                  Acerca de
                </NavLink>
              </li>
              {/* <li className="mb-1">
                <NavLink
                  to="/services"
                  exact="true"
                  className={({ isActive }) =>
                    'block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded' +
                    (isActive ? ' text-blue-600' : '')
                  }
                >
                  Servicios
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  to="/pricing"
                  exact="true"
                  className={({ isActive }) =>
                    'block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded' +
                    (isActive ? ' text-blue-600' : '')
                  }
                >
                  Precios
                </NavLink>
              </li> */}
              <li className="mb-1">
                <NavLink
                  to="/contact"
                  exact="true"
                  className={({ isActive }) =>
                    'block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded' +
                    (isActive ? ' text-blue-600' : '')
                  }
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <NavLink
                className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                to="/login"
              >
                Iniciar sesión
              </NavLink>
              <NavLink
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                to="/register"
              >
                Registrarse
              </NavLink>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2021</span>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
