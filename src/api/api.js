import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend.labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    return response.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const fetchNewAlbums = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
    return response.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};
export const fetchSongs = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/songs`);
    return response.data;
  } catch (e) {
    return [];
  }
};

export const fetchGenres = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/genres`);
    return response.data;
  } catch (e) {
    return [];
  }
};

export const fetchAlbumDetails = async (slug) => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/album/${slug}`);
    return response.data;
  } catch (e) {
    console.error(`Error fetching album details for slug: ${slug}`, e);
    return null;
  }
};