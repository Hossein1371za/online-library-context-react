import React from "react";
import "./Slider.css"

const ItemSlide = (props) => {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  );
};

export default ItemSlide;