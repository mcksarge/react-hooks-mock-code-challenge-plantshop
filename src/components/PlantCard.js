import React, { useState } from "react";

function PlantCard(props) {
  const [inStock, setInStock] = useState(true)
  let stockButton = ""

  function onClick(){
    if (inStock === false){
      setInStock(true)
    } else {
      setInStock(false)
    }
  }

  if (inStock === true){
    stockButton = <button className="primary" onClick={onClick}>In Stock</button>
  } else {
    stockButton = <button onClick={onClick}>Out of Stock</button>
  }

  return (
    <li className="card">
      <img src={props.image} alt={props.name} />
      <h4>{props.name}</h4>
      <p>Price: {props.price}</p>
      {stockButton}
    </li>
  );
}

export default PlantCard;
