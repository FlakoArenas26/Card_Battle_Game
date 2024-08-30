const express = require('express');
const http = require('http');
const { setupSocket } = require('./sockets/gameSocket');
const { getAllPokemon, getPokemon } = require('./controllers/pokemonController');
const serverConfig = require('./config/serverConfig');

const app = express();
const server = http.createServer(app);

setupSocket(server);

// Configurar rutas y middleware
app.use(express.json());
app.use(express.static('public'));

// Ruta para obtener la lista de todos los Pokémon
app.get('/api/pokemons', getAllPokemon);

// Ruta para obtener información de un Pokémon específico
app.get('/api/pokemon/:name', getPokemon);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Bienvenido al PokeGame API');
});

server.listen(serverConfig.port, () => {
  console.log(`Servidor escuchando en el puerto ${serverConfig.port}`);
});
