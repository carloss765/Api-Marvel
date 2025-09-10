import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-[rgb(31,31,31)] shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <img
            className="flex items-center w-40 h-16"
            src={"../../public/Marvel.svg"}
            alt="Marvel App"
          />
          <Link
            to="/"
            className="flex items-center space-x-3"
          ></Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/")
                  ? "underline underline-offset-25 text-red-500"
                  : "text-white hover:text-red-500 hover:underline hover:underline-offset-25"
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/characters"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/characters")
                  ? "underline underline-offset-25 text-red-500"
                  : "text-white hover:text-red-500 hover:underline hover:underline-offset-25"
              }`}
            >
              Personajes
            </Link>
            <Link
              to="/comics"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/comics")
                  ? "underline underline-offset-25 text-red-500"
                  : "text-white hover:text-red-500 hover:underline hover:underline-offset-25"
              }`}
            >
              Comics
            </Link>
            <Link
              to="/series"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/series")
                  ? "underline underline-offset-25 text-red-500"
                  : "text-white hover:text-red-500 hover:underline hover:underline-offset-25"
              }`}
            >
              Series
            </Link>
            <Link
              to="/events"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/events")
                  ? "underline underline-offset-25 text-red-500"
                  : "text-white hover:text-red-500 hover:underline hover:underline-offset-25"
              }`}
            >
              Eventos
            </Link>
            <Link
              to="/stories"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/stories")
                  ? "underline underline-offset-25 text-red-500"
                  : "text-white hover:text-red-500 hover:underline hover:underline-offset-25"
              }`}
            >
              Historias
            </Link>
            <Link
              to="/creators"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/creators")
                  ? "underline underline-offset-25 text-red-500"
                  : "text-white hover:text-red-500 hover:underline hover:underline-offset-25"
              }`}
            >
              Creadores
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "underline underline-offset-25 text-red-500"
                  : "text-white hover:text-red-500 hover:underline hover:underline-offset-25"
              }`}
            >
              Acerca de
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
