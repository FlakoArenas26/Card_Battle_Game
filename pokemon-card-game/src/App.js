import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import CardSelector from './components/CardSelector';
import { fetchCards } from './services/apiService';

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      try {
        const data = await fetchCards();
        setCards(data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    getCards();
  }, []);

  const handleCardSelection = (selectedCard) => {
    console.log('Enviar tarjeta:', selectedCard);
    // Aquí puedes añadir lógica para enviar la tarjeta a tu API
  };

  return (
    <div className="App">
      <h1>Juego de Cartas Pokémon</h1>
      <CardList cards={cards} />
      <CardSelector onCardSelect={handleCardSelection} />
    </div>
  );
};

export default App;
