import axios from "axios";
import { config } from 'dotenv'

config();

const {GIPHY_API_KEY} = process.env

export const getGifForDifficulty = async (difficultyLevel) => {
  try {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
      params: {
        api_key: GIPHY_API_KEY,
        q: difficultyLevel,
        limit: 1,
      },
    });

    if (response.data && response.data.data && response.data.data.length > 0) {
      return response.data.data[0].images.original.url;
    } else {
      console.warn(
        "No se encontró ningún GIF para el nivel de dificultad:",
        difficultyLevel
      );
      return "";
    }
  } catch (error) {
    console.error("Error al obtener GIF de Giphy:", error.message);
    return "";
  }
};
