import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants }) {
  const handleSoldOut = (id) => {
    setPlants(
      plants.map((plant) =>
        plant.id === id ? { ...plant, soldOut: !plant.soldOut } : plant
      )
    );
  };

  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          handleSoldOut={handleSoldOut}
        />
      ))}
    </ul>
  );
}

export default PlantList;
