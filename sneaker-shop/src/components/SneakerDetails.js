import React, { useState } from 'react';

const SneakerDetail = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (sneaker) => {
    setCart([...cart, sneaker]);
  };

  return (
    <div>
      {/* Sneaker details */}
      <button onClick={() => addToCart(sneaker)}>Add to Cart</button>
    </div>
  );
};
