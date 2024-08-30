const axios = require('axios');

// Función para obtener la lista completa de Pokémon
async function getAllPokemons() {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000'); // Puedes ajustar el límite según tus necesidades
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener la lista de Pokémon');
  }
}

// Función para obtener información de un Pokémon específico
async function getPokemonInfo(pokemonName) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener información del Pokémon');
  }
}

module.exports = { getAllPokemons, getPokemonInfo };
