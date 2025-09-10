import { BookOpen, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { getCharacters } from "../fetch";
import type { Character } from "../types";

// Componente Modal para mostrar detalles del personaje
interface ModalProps {
  character: Character | null;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ character, isOpen, onClose }: ModalProps) => {
  if (!isOpen || !character) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-red-800/50 shadow-2xl shadow-red-500/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header del modal */}
        <div className="flex justify-between items-center p-8 border-b border-red-800/30 bg-gradient-to-r from-red-900/20 to-transparent">
          <h2 className="text-4xl font-black text-white tracking-wide">
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              {character.name}
            </span>
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-400 text-3xl font-bold transition-colors duration-300 hover:scale-110 transform"
          >
            ×
          </button>
        </div>

        {/* Contenido del modal */}
        <div className="p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Imagen del personaje */}
            <div className="lg:w-1/3">
              <div className="relative group">
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                  className="w-full rounded-2xl shadow-2xl shadow-red-500/30 border border-red-800/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Información del personaje */}
            <div className="lg:w-2/3 text-white space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-red-400">
                  DESCRIPCIÓN
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {character.description ||
                    "Un héroe legendario del universo Marvel cuyas aventuras han cautivado a generaciones de fans."}
                </p>
              </div>

              {/* Comics */}
              {character.comics && character.comics.available > 0 && (
                <div className="bg-gradient-to-r from-blue-900/20 to-transparent p-6 rounded-xl border border-blue-800/30">
                  <h4 className="text-xl font-bold mb-4 text-blue-400 flex items-center gap-2">
                    <BookOpen size={20} />
                    COMICS ({character.comics.available})
                  </h4>
                  <div className="max-h-40 overflow-y-auto custom-scrollbar">
                    <ul className="text-gray-300 space-y-2">
                      {character.comics.items
                        .slice(0, 8)
                        .map((comic, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2 hover:text-blue-300 transition-colors"
                          >
                            <span className="text-blue-400 mt-1">•</span>
                            <span className="text-sm leading-relaxed">
                              {comic.name}
                            </span>
                          </li>
                        ))}
                      {character.comics.items.length > 8 && (
                        <li className="text-gray-500 italic text-sm">
                          ... y {character.comics.items.length - 8} comics más
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              )}

              {/* Series */}
              {character.series && character.series.available > 0 && (
                <div className="bg-gradient-to-r from-green-900/20 to-transparent p-6 rounded-xl border border-green-800/30">
                  <h4 className="text-xl font-bold mb-4 text-green-400">
                    🎬 SERIES ({character.series.available})
                  </h4>
                  <div className="max-h-40 overflow-y-auto custom-scrollbar">
                    <ul className="text-gray-300 space-y-2">
                      {character.series.items
                        .slice(0, 8)
                        .map((serie, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2 hover:text-green-300 transition-colors"
                          >
                            <span className="text-green-400 mt-1">•</span>
                            <span className="text-sm leading-relaxed">
                              {serie.name}
                            </span>
                          </li>
                        ))}
                      {character.series.items.length > 8 && (
                        <li className="text-gray-500 italic text-sm">
                          ... y {character.series.items.length - 8} series más
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              )}

              {/* Events */}
              {character.events && character.events.available > 0 && (
                <div className="bg-gradient-to-r from-yellow-900/20 to-transparent p-6 rounded-xl border border-yellow-800/30">
                  <h4 className="text-xl font-bold mb-4 text-yellow-400 flex items-center gap-2">
                    <Zap size={20} />
                    EVENTOS ({character.events.available})
                  </h4>
                  <div className="max-h-40 overflow-y-auto custom-scrollbar">
                    <ul className="text-gray-300 space-y-2">
                      {character.events.items
                        .slice(0, 8)
                        .map((event, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2 hover:text-yellow-300 transition-colors"
                          >
                            <span className="text-yellow-400 mt-1">•</span>
                            <span className="text-sm leading-relaxed">
                              {event.name}
                            </span>
                          </li>
                        ))}
                      {character.events.items.length > 8 && (
                        <li className="text-gray-500 italic text-sm">
                          ... y {character.events.items.length - 8} eventos más
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [offset, setOffset] = useState(0);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const limit = 12;

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setLoading(true);
      try {
        const results = await getCharacters(limit, offset);
        setCharacters(results as unknown as Character[]);
      } catch (error) {
        console.error("Error al cargar personajes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [offset]);

  const handleLoadMore = () => {
    setOffset((prev) => prev + limit);
  };

  const handleLoadPrevious = () => {
    setOffset((prev) => prev - limit);
  };

  // Funciones para manejar el modal
  const openModal = (character: Character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="bg-gradient-to-br from-black via-red-950/30 to-black py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-black mb-4 text-center tracking-wider">
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent drop-shadow-2xl">
              HÉROES
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 text-center mb-12 font-light">
            Descubre los guardianes más poderosos del universo Marvel
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        {loading ? (
          <div className="flex flex-col justify-center items-center h-96">
            <div className="relative">
              <div className="animate-spin rounded-full h-32 w-32 border-4 border-red-600 border-t-transparent shadow-2xl shadow-red-500/50"></div>
              <div className="absolute inset-0 animate-pulse rounded-full h-32 w-32 border-4 border-yellow-400 border-t-transparent opacity-20"></div>
            </div>
            <p className="mt-8 text-2xl font-bold text-red-400 animate-pulse">
              Cargando héroes épicos...
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {characters.map((character) => (
                <div
                  key={character.id}
                  className="group bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl p-4 border border-red-800/30 hover:border-red-500 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30"
                  onClick={() => openModal(character)}
                >
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                      alt={character.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h2 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300 text-center">
                    {character.name}
                  </h2>
                  <div className="mt-2 text-center">
                    <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      Click para más detalles
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-col sm:flex-row justify-center gap-6">
              <button
                onClick={handleLoadPrevious}
                className="group px-10 py-4 bg-transparent border-2 border-red-500 hover:bg-red-600 hover:border-red-600 disabled:border-gray-600 disabled:text-gray-500 disabled:cursor-not-allowed rounded-xl text-lg font-bold transition-all transform hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-red-500/50"
                disabled={offset === 0}
              >
                <span className="group-hover:tracking-wider transition-all">
                  ← ANTERIOR
                </span>
              </button>
              <button
                onClick={handleLoadMore}
                className="group px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-red-500/50 border border-red-500"
              >
                <span className="group-hover:tracking-wider transition-all">
                  SIGUIENTE →
                </span>
              </button>
            </div>
          </>
        )}

        {/* Modal */}
        <Modal
          character={selectedCharacter}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </div>
  );
};

export default Characters;
