import React from 'react';
import './styles.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';


const Cart = ({ cart, setCart }) => {
  const removeFromCart = (sneakerId) => {
    Swal.fire('Removed!', 'The sneaker has been removed from the cart.', 'success');
    // Remove the sneaker from the cart
    const updatedCart = cart.filter((item) => item.id !== sneakerId);
    setCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <div>
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button class="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <p>Total Price: ${calculateTotalPrice()}</p>
    </div>
  );
};

export default Cart;
