import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './PlantCard.css';

function PlantCard({ plant }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} className="plant-thumbnail" />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button onClick={() => addToCart(plant)}>Add to Cart</button>
    </div>
  );
}

export default PlantCard;
