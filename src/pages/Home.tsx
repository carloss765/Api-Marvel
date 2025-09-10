import { BookOpen, Shield, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-black via-red-950 to-black">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-32">
          <div className="text-center">
            <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-wider">
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent drop-shadow-2xl">
                MARVEL
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              Explora el universo infinito de Marvel. Descubre héroes
              legendarios, villanos épicos y aventuras que trascienden la
              realidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/characters"
                className="px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-xl text-xl font-bold transition-all transform hover:scale-110 shadow-2xl hover:shadow-red-500/50 border border-red-500"
              >
                EXPLORAR PERSONAJES
              </Link>
              <Link
                to="/comics"
                className="px-10 py-5 bg-transparent border-2 border-white hover:bg-white hover:text-black rounded-xl text-xl font-bold transition-all transform hover:scale-110 shadow-2xl"
              >
                VER COMICS
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-20 text-white tracking-wide">
            EL UNIVERSO TE ESPERA
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group text-center p-8 bg-gradient-to-br from-red-900/20 to-black border border-red-800/30 rounded-2xl hover:border-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
              <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <Shield
                  size={80}
                  className="text-red-400"
                />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-red-400 group-hover:text-red-300">
                HÉROES
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white">
                Conoce a los guardianes más poderosos del universo Marvel. Desde
                Spider-Man hasta los Avengers.
              </p>
            </div>
            <div className="group text-center p-8 bg-gradient-to-br from-blue-900/20 to-black border border-blue-800/30 rounded-2xl hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <BookOpen
                  size={80}
                  className="text-blue-400"
                />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-blue-400 group-hover:text-blue-300">
                COMICS
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white">
                Sumérgete en décadas de historias épicas. Miles de comics
                esperan ser descubiertos.
              </p>
            </div>
            <div className="group text-center p-8 bg-gradient-to-br from-yellow-900/20 to-black border border-yellow-800/30 rounded-2xl hover:border-yellow-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
              <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <Zap
                  size={80}
                  className="text-yellow-400"
                />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-yellow-400 group-hover:text-yellow-300">
                EVENTOS
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white">
                Vive los momentos que cambiaron el destino del multiverso.
                Eventos que definieron generaciones.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-28 bg-gradient-to-r from-red-900 via-red-800 to-red-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-600/10 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto text-center px-4">
          <h2 className="text-6xl md:text-7xl font-black mb-8 text-white tracking-tight">
            ¿LISTO PARA SER
            <br />
            <span className="text-yellow-400 drop-shadow-lg">LEGENDARIO?</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-200 mb-12 font-light max-w-4xl mx-auto leading-relaxed">
            Tu aventura épica comienza con un solo clic.
            <br />
            Únete a millones de fans que ya exploran el multiverso Marvel.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/characters"
              className="group inline-block px-14 py-6 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black rounded-2xl text-2xl font-black transition-all transform hover:scale-110 shadow-2xl hover:shadow-yellow-500/50 border-2 border-yellow-400"
            >
              <span className="group-hover:tracking-wider transition-all">
                EMPEZAR AHORA
              </span>
            </Link>
            <Link
              to="/about"
              className="inline-block px-14 py-6 bg-transparent border-2 border-white hover:bg-white hover:text-red-900 text-white rounded-2xl text-2xl font-black transition-all transform hover:scale-110 shadow-2xl"
            >
              CONOCER MÁS
            </Link>
          </div>
          <div className="mt-12 text-gray-400 text-lg">
            <p className="flex items-center justify-center gap-2">
              <Sparkles
                size={18}
                className="text-yellow-400"
              />
              Acceso gratuito • Contenido actualizado • Experiencia épica
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
