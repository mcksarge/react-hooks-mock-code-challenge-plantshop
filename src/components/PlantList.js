import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, plantSearch }) {
  let allPlants = ""
  if (plantSearch === ""){
    allPlants = plants.map((plant) => {
      return (
        <PlantCard 
          key={plant.name}
          name={plant.name}
          image={plant.image}
          price={plant.price}
        />
      )
    })
  } else {
    allPlants = plantSearch.map((plant) => {
      return (
        <PlantCard 
          key={plant.name}
          name={plant.name}
          image={plant.image}
          price={plant.price}
        />
      )
    })
  }



  return (
    <ul className="cards">
      {allPlants}
    </ul>
  );
}

export default PlantList;
