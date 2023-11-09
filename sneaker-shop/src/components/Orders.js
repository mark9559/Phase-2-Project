import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './styles.css';


const Order = ({ cart, setCart }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirmOrder = () => {
    // Validate form fields (you can add more validation if needed)
    if (!formData.name || !formData.email || !formData.location) {
      Swal.fire({
        icon: 'error',
        title: 'Incomplete Information',
        text: 'Please fill in all fields.',
      });
      return;
    }

    // Simulate a delay to mimic an API call
    setTimeout(() => {
      // Clear the cart after order confirmation
      setCart([]);
      // Display a SweetAlert success message
      Swal.fire({
        icon: 'success',
        title: 'Order Confirmed!',
        text: `Thank you, ${formData.name}, for your purchase.`,
      });
    }, 1000); // Adjust the delay as needed
  };

  return (
    <div>
      {/* <h2>Order Summary</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <div>
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>

      <p>Total Price: ${calculateTotalPrice()}</p> */}

      <h2>Confirm  Order:</h2>
      <h3>Enter Your Information</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location:
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
      </form>
      <button type='button' onClick={handleConfirmOrder}>Confirm Order</button>
    </div>
  );
};

export default Order;
