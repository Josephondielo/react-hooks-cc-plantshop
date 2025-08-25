import React from "react";

function PlantCard({ plant, handleSoldOut }) {
  return (
    <li
      className="card"
      data-testid="plant-item"
      style={{ opacity: plant.soldOut ? 0.5 : 1 }}
    >
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button className="primary" onClick={() => handleSoldOut(plant.id)}>
        {plant.soldOut ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
