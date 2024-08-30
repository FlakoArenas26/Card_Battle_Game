import axios from 'axios';

const API_URL = 'URL_DE_TU_API';

export const fetchCards = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener los datos de la API');
  }
};
