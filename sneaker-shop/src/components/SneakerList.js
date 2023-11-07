import React, { useEffect, useState } from 'react';

const SneakerList = () => {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'https://your-api-url.com/sneakers';

    // Make a GET request to fetch the data
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
      <h2>Sneaker List</h2>
      <ul>
        {sneakers.map((sneaker) => (
          <li key={sneaker.id}>
            {sneaker.name} - ${sneaker.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SneakerList;
