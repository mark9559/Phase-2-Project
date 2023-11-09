import React, { useEffect, useState } from 'react';
import './styles.css';
import Cart from './Cart';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';


const SneakerList = ({ cart, setCart }) => {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    // Fetch sneakers data from local API or data source
    const apiUrl = 'https://sneaker-shop-react.onrender.com/sneakers';

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

  const addToCart = (sneaker) => {
          // Display a SweetAlert success message
    Swal.fire({
      title: 'Added to Cart!',
      text: `${sneaker.name} has been added to your cart.`,
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    });
    // Check if the sneaker is already in the cart
    const existingItem = cart.find((item) => item.id === sneaker.id);

    if (existingItem) {
      // If the sneaker is in the cart, increase its quantity
      const updatedCart = cart.map((item) =>
        item.id === sneaker.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      // If the sneaker is not in the cart, add it with quantity 1
      setCart([...cart, { ...sneaker, quantity: 1 }]);
    }
  };

  return (
    <div>
      <h2>Sneaker Catalog</h2>
      <div className="row row-cols-1 row-cols-md-4">
        {sneakers.map((sneaker) => (
          <div key={sneaker.id} className="col-md-3">
            <div className="custom-sneaker-card">
              <img src={sneaker.image} alt={sneaker.name} className="sneaker-image" />
              <h3>{sneaker.brand} - {sneaker.name}</h3>
              <p>{sneaker.description}</p>
              <p>Price: ${sneaker.price}</p>
              <p>Size: {sneaker.size}</p>
              <p>Quantity: {sneaker.quantity}</p>
              <button className="custom-btn" onClick={() => addToCart(sneaker)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Render the Cart component with the cart and setCart props */}
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
};

export default SneakerList;
