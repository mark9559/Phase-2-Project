import React, { useState } from 'react';

const Admin = () => {
  const [sneakers, setSneakers] = useState([]); // Store sneaker data
  const [newSneaker, setNewSneaker] = useState({ name: '', price: 0 });

  const addSneaker = () => {
    setSneakers([...sneakers, newSneaker]);
    setNewSneaker({ name: '', price: 0 });
  };

  const deleteSneaker = (sneaker) => {
    const updatedSneakers = sneakers.filter((s) => s !== sneaker);
    setSneakers(updatedSneakers);
  };

  return (
    <div>
      {/* Form to add new sneakers */}
      <div>
        <input
          type="text"
          placeholder="Sneaker Name"
          value={newSneaker.name}
          onChange={(e) => setNewSneaker({ ...newSneaker, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Sneaker Price"
          value={newSneaker.price}
          onChange={(e) => setNewSneaker({ ...newSneaker, price: e.target.value })}
        />
        <button onClick={addSneaker}>Add Sneaker</button>
      </div>

      {/* List of sneakers with delete option */}
      <ul>
        {sneakers.map((sneaker, index) => (
          <li key={index}>
            {sneaker.name} - ${sneaker.price}
            <button onClick={() => deleteSneaker(sneaker)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
