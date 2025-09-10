import md5 from "md5";

const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;
const MARVEL_BASE_URL = "https://gateway.marvel.com/v1/public";

export const getCharacters = async (limit = 12, offset = 0): Promise<void> => {
  const ts = Date.now().toString();
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
  const url = `${MARVEL_BASE_URL}/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&limit=${limit}&offset=${offset}`;

  console.log("URL generada:", url);

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Datos de Marvel API:", data);
    return data.data.results;
  } catch (error) {
    console.error("Error al obtener datos de Marvel API:", error);
  }
};

export const getComics = async (limit = 12, offset = 0): Promise<void> => {
  const ts = Date.now().toString();
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
  const url = `${MARVEL_BASE_URL}/comics?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&limit=${limit}&offset=${offset}`;

  console.log("URL generada:", url);

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Datos de Marvel API:", data);
    return data.data.results;
  } catch (error) {
    console.error("Error al obtener datos de Marvel API:", error);
  }
};

export const getEvents = async (limit = 12, offset = 0): Promise<void> => {
  const ts = Date.now().toString();
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
  const url = `${MARVEL_BASE_URL}/events?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&limit=${limit}&offset=${offset}`;

  console.log("URL generada:", url);

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Datos de Marvel API:", data);
    return data.data.results;
  } catch (error) {
    console.error("Error al obtener datos de Marvel API:", error);
  }
};

export const getSeries = async (limit = 12, offset = 0): Promise<void> => {
  const ts = Date.now().toString();
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
  const url = `${MARVEL_BASE_URL}/series?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&limit=${limit}&offset=${offset}`;

  console.log("URL generada:", url);

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Datos de Marvel API:", data);
    return data.data.results;
  } catch (error) {
    console.error("Error al obtener datos de Marvel API:", error);
  }
};

export const getStories = async (limit = 12, offset = 0): Promise<void> => {
  const ts = Date.now().toString();
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
  const url = `${MARVEL_BASE_URL}/stories?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&limit=${limit}&offset=${offset}`;

  console.log("URL generada:", url);

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Datos de Marvel API:", data);
    return data.data.results;
  } catch (error) {
    console.error("Error al obtener datos de Marvel API:", error);
  }
};

export const getCreators = async (limit = 12, offset = 0): Promise<void> => {
  const ts = Date.now().toString();
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
  const url = `${MARVEL_BASE_URL}/creators?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&limit=${limit}&offset=${offset}`;

  console.log("URL generada:", url);

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Datos de Marvel API:", data);
    return data.data.results;
  } catch (error) {
    console.error("Error al obtener datos de Marvel API:", error);
  }
};
