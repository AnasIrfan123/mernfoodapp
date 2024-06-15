// Card.js
import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={item.image} className="card-img-top" alt={item.name} />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text">Price: ${item.price}</p>
      </div>
    </div>
  );
};

export default Card;
