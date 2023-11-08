import React, { useState, useEffect } from 'react';
import './styles.css'

const Admin = () => {
  const [sneakers, setSneakers] = useState([]);
  const [newSneaker, setNewSneaker] = useState({
    brand: '',
    name: '',
    description: '',
    price: 0,
    size: '',
    quantity: 0,
    image: '',
  });
  const [selectedSneaker, setSelectedSneaker] = useState(null);

  useEffect(() => {
    // Fetch sneakers data from your API
    fetch('http://localhost:3000/sneakers')
      .then((response) => response.json())
      .then((data) => setSneakers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleAddSneaker = () => {
    // Send a POST request to add the new sneaker
    fetch('http://localhost:3000/sneakers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newSneaker),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the sneakers list with the new sneaker
        setSneakers([...sneakers, data]);
        alert('Sneaker Added Successfully');

        // Clear the form
        setNewSneaker({
          brand: '',
          name: '',
          description: '',
          price: 0,
          size: '',
          quantity: 0,
          image: '',

        });
      })
      .catch((error) => console.error('Error adding sneaker:', error));

  };

  const handleUpdateSneaker = () => {
    if (!selectedSneaker) {
      return;
    }

    // Send a PUT request to update the selected sneaker
    fetch(`http://localhost:3000/sneakers/${selectedSneaker.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(selectedSneaker),
    })
      .then((response) => response.json())
      .then(() => {
        // Update the sneakers list with the updated sneaker
        setSneakers(sneakers.map((sneaker) =>
          sneaker.id === selectedSneaker.id ? selectedSneaker : sneaker
        ));
        // Clear the selected sneaker
        setSelectedSneaker(null);
      })
      .catch((error) => console.error('Error updating sneaker:', error));
      alert('Sneaker Updated Successfully');

  };

  const handleDeleteSneaker = (sneakerId) => {
    // Send a DELETE request to remove the selected sneaker from the API
    fetch(`http://localhost:3000/sneakers/${sneakerId}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Update the sneakers list by filtering out the deleted sneaker
        setSneakers(sneakers.filter((sneaker) => sneaker.id !== sneakerId));
        setSelectedSneaker(null); // Clear the selected sneaker
      })
      .catch((error) => console.error('Error deleting sneaker:', error));
      alert('Sneaker Deleted Successfully');
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <div>
        <h3>Add a New Sneaker</h3>
        <form>
  <div className="mb-3">
    <label htmlFor="brand" className="form-label">Brand</label>
    <input type="text" className="form-control" id="brand" value={newSneaker.brand} onChange={(e) => setNewSneaker({ ...newSneaker, brand: e.target.value })} />
  </div>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" value={newSneaker.name} onChange={(e) => setNewSneaker({ ...newSneaker, name: e.target.value })} />
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <textarea className="form-control" id="description" value={newSneaker.description} onChange={(e) => setNewSneaker({ ...newSneaker, description: e.target.value })} />
  </div>
  <div className="mb-3">
    <label htmlFor="price" className="form-label">Price</label>
    <input type="number" className="form-control" id="price" value={newSneaker.price} onChange={(e) => setNewSneaker({ ...newSneaker, price: parseFloat(e.target.value) })} />
  </div>
  <div className="mb-3">
    <label htmlFor="size" className="form-label">Size</label>
    <input type="text" className="form-control" id="size" value={newSneaker.size} onChange={(e) => setNewSneaker({ ...newSneaker, size: e.target.value })} />
  </div>
  <div className="mb-3">
    <label htmlFor="quantity" className="form-label">Quantity</label>
    <input type="number" className="form-control" id="quantity" value={newSneaker.quantity} onChange={(e) => setNewSneaker({ ...newSneaker, quantity: parseInt(e.target.value) })} />
  </div>
  <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image URL
            </label>
            <input
              type="text"
              className="form-control"
              id="image"
              value={newSneaker.image}
              onChange={(e) =>
                setNewSneaker({ ...newSneaker, image: e.target.value })
              }
            />
          </div>
  <button type="button" onClick={handleAddSneaker}>Add Sneaker</button>
</form>
      </div>
      <div>
        <h3>Update or Delete Sneaker Details</h3>
        <select onChange={(e) => setSelectedSneaker(sneakers.find(sneaker => sneaker.id === parseInt(e.target.value)))}>
          <option value="">Select a Sneaker</option>
          {sneakers.map((sneaker) => (
            <option key={sneaker.id} value={sneaker.id}>{sneaker.brand} - {sneaker.name}</option>
          ))}
        </select>
        {selectedSneaker && (
          <form>
          <div className="mb-3">
            <label htmlFor="brand" className="form-label">Brand</label>
            <input type="text" className="form-control" id="brand" value={selectedSneaker.brand} onChange={(e) => setSelectedSneaker({ ...selectedSneaker, brand: e.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" value={selectedSneaker.name} onChange={(e) => setSelectedSneaker({ ...selectedSneaker, name: e.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" id="description" value={selectedSneaker.description} onChange={(e) => setSelectedSneaker({ ...selectedSneaker, description: e.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="number" className="form-control" id="price" value={selectedSneaker.price} onChange={(e) => setSelectedSneaker({ ...selectedSneaker, price: parseFloat(e.target.value) })} />
          </div>
          <div className="mb-3">
            <label htmlFor="size" className="form-label">Size</label>
            <input type="text" className="form-control" id="size" value={selectedSneaker.size} onChange={(e) => setSelectedSneaker({ ...selectedSneaker, size: e.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">Quantity</label>
            <input type="number" className="form-control" id="quantity" value={selectedSneaker.quantity} onChange={(e) => setSelectedSneaker({ ...selectedSneaker, quantity: parseInt(e.target.value) })} />
          </div>
          <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image URL
              </label>
              <input
                type="text"
                className="form-control"
                id="image"
                value={selectedSneaker.image}
                onChange={(e) =>
                  setSelectedSneaker({ ...selectedSneaker, image: e.target.value })
                }
              />
            </div>
          <button type="button" onClick={handleUpdateSneaker}>Update Sneaker</button>
          <button type="button" class="btn btn-danger" onClick={() => handleDeleteSneaker(selectedSneaker.id)}>Delete Sneaker</button>
        </form>
        )}
      </div>
    </div>
  );
};

export default Admin;
