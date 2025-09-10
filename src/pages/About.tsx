import {
  Check,
  Palette,
  Search,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import appInfo from "../data/app-info.json";

const About = () => {
  const { aplicacion, tecnologias, desarrollador, empresa } = appInfo;

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Acerca de {aplicacion.nombre}
        </h1>

        <div className="space-y-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">
              ¿Qué es {aplicacion.nombre}?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {aplicacion.descripcion}
            </p>
            <div className="mt-4 p-4 bg-gray-700 rounded-md">
              <h3 className="font-semibold text-yellow-400 mb-2">
                Información de la Empresa
              </h3>
              <p className="text-gray-300">
                <strong>{empresa.nombre}:</strong> {empresa.descripcion}
              </p>
              <a
                href={empresa.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                {empresa.website}
              </a>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Tecnologías Utilizadas
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-red-400 mb-2">Frontend</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>
                    • {tecnologias.frontend.framework} +{" "}
                    {tecnologias.frontend.lenguaje}
                  </li>
                  <li>• {tecnologias.frontend.bundler}</li>
                  <li>• {tecnologias.frontend.styling}</li>
                  <li>• {tecnologias.frontend.routing}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-400 mb-2">
                  API & Herramientas
                </h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• {tecnologias.backend_api.api_externa}</li>
                  <li>• {tecnologias.backend_api.http_client}</li>
                  <li>• {tecnologias.backend_api.seguridad}</li>
                  {tecnologias.herramientas_desarrollo.map(
                    (herramienta, index) => (
                      <li key={index}>• {herramienta}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Características</h2>
            <ul className="text-gray-300 space-y-2">
              {aplicacion.caracteristicas.map((caracteristica, index) => {
                const icons = [
                  <Sparkles
                    key="sparkles"
                    size={18}
                    className="text-yellow-400"
                  />,
                  <Search
                    key="search"
                    size={18}
                    className="text-blue-400"
                  />,
                  <Smartphone
                    key="smartphone"
                    size={18}
                    className="text-green-400"
                  />,
                  <Palette
                    key="palette"
                    size={18}
                    className="text-purple-400"
                  />,
                  <Zap
                    key="zap"
                    size={18}
                    className="text-orange-400"
                  />,
                ];
                return (
                  <li
                    key={index}
                    className="flex items-center gap-2"
                  >
                    {icons[index] || "•"} {caracteristica}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Funcionalidades</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {aplicacion.funcionalidades.map((funcionalidad, index) => (
                <div
                  key={index}
                  className="bg-gray-700 p-3 rounded-md flex items-center gap-2"
                >
                  <Check
                    size={16}
                    className="text-green-400"
                  />{" "}
                  {funcionalidad}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Información del Desarrollador
            </h2>
            <div className="space-y-3">
              <p className="text-gray-300">
                <strong className="text-purple-400">Rol:</strong>{" "}
                {desarrollador.rol}
              </p>
              <p className="text-gray-300">
                <strong className="text-purple-400">Enfoque:</strong>{" "}
                {desarrollador.enfoque}
              </p>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">
                  Habilidades:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {desarrollador.habilidades.map((habilidad, index) => (
                    <span
                      key={index}
                      className="bg-purple-800 text-purple-200 px-3 py-1 rounded-full text-sm"
                    >
                      {habilidad}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
