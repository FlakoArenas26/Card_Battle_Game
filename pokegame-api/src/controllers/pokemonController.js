const { getAllPokemons, getPokemonInfo } = require('../services/pokeapiService');

// Controlador para obtener la lista de todos los Pokémon
async function getAllPokemon(req, res) {
  try {
    const pokemons = await getAllPokemons();
    res.json(pokemons);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo obtener la lista de Pokémon.' });
  }
}

// Controlador para obtener información de un Pokémon específico
async function getPokemon(req, res) {
  const { name } = req.params;
  try {
    const pokemonInfo = await getPokemonInfo(name);
    res.json(pokemonInfo);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo obtener la información del Pokémon.' });
  }
}

module.exports = {
  getAllPokemon,
  getPokemon
};
