import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')


  useEffect (() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(data => {
      setPlants(data)
    })
  }, [])
  

  function handleNewPlant(newPlant){
    setPlants((plants) => [...plants, newPlant])
  }

  function handleSearch(searchedItem){
    setSearch(searchedItem.target.value)
  }

  const plantSearch = plants.filter((plant) => {
    return plant.name.toString().toLowerCase().includes( search.toString().toLowerCase() )
  })

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} handleNewPlant={handleNewPlant} handleSearch={handleSearch} plantSearch={plantSearch} />
    </div>
  );
}

export default App;
