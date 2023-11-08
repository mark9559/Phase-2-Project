import React, { useEffect, useState } from 'react';
import './styles.css'
const SneakerList = () => {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    // Fetch sneakers data from your API or data source
    const apiUrl = 'http://localhost:3000/sneakers';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setSneakers(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Sneaker Catalog</h2>
      <div className="row row-cols-1 row-cols-md-4">
        {sneakers.map((sneaker) => (
          <div key={sneaker.id} className="col-md-3">
            <div className="custom-sneaker-card">
              <img src={sneaker.image} alt={sneaker.name} className='sneaker-image' />
              <h3>{sneaker.brand} - {sneaker.name}</h3>
              <p>{sneaker.description}</p>
              <p>Price: ${sneaker.price}</p>
              <p>Size: {sneaker.size}</p>
              <p>Quantity: {sneaker.quantity}</p>
              {/* Add more details as needed */}
              <button className="custom-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SneakerList;
