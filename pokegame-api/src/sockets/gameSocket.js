const socketIo = require('socket.io');
const { getPokemonInfo } = require('../services/pokeapiService');

const players = {};

function setupSocket(server) {
  const io = socketIo(server);

  io.on('connection', (socket) => {
    console.log(`Jugador conectado: ${socket.id}`);

    socket.on('new_player', (playerName) => {
      if (Object.keys(players).length < 8) {
        players[socket.id] = { name: playerName };
        io.emit('update_players', players);
      } else {
        socket.emit('error', 'No se permiten más de 8 jugadores.');
      }
    });

    socket.on('disconnect', () => {
      console.log(`Jugador desconectado: ${socket.id}`);
      delete players[socket.id];
      io.emit('update_players', players);
    });

    socket.on('get_pokemon', async (pokemonName) => {
      try {
        const pokemonInfo = await getPokemonInfo(pokemonName);
        socket.emit('pokemon_info', pokemonInfo);
      } catch (error) {
        socket.emit('error', 'No se pudo obtener la información del Pokémon.');
      }
    });
  });
}

module.exports = { setupSocket };
