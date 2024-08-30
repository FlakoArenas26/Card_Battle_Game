import React, { useState } from 'react';

const Card = ({ card, isLast }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      {flipped ? (
        <div className="card-content">
          <h2>{card.name}</h2>
          <div>
            <h3>Stats</h3>
            <p>HP: {card.stats.hp}</p>
            <p>Attack: {card.stats.attack}</p>
            <p>Defense: {card.stats.defense}</p>
            <p>Special Attack: {card.stats.specialAttack}</p>
            <p>Special Defense: {card.stats.specialDefense}</p>
            <p>Speed: {card.stats.speed}</p>
          </div>
          <div>
            <h3>Abilities</h3>
            <ul>
              {card.abilities.map((ability, index) => <li key={index}>{ability}</li>)}
            </ul>
          </div>
        </div>
      ) : (
        <div className="card-back">Carta Boca Abajo</div>
      )}
    </div>
  );
};

export default Card;
