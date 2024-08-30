import React from 'react';

const CardSelector = ({ onCardSelect }) => {
  const handleSelect = () => {
    // Aquí deberías asegurarte de que la tarjeta seleccionada es la correcta
    // Por simplicidad, estamos usando la última tarjeta como ejemplo
    const selectedCard = document.querySelector('.card-list .card:last-child');
    if (selectedCard) {
      onCardSelect(selectedCard);
    }
  };

  return (
    <button onClick={handleSelect}>Enviar Última Tarjeta</button>
  );
};

export default CardSelector;
