import React from 'react';
const Home = () => {
    const backgroundImageStyle = {
      backgroundImage: `url('https://cms-cdn.thesolesupplier.co.uk/2022/08/floating-shelves_w1160.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh', // Set the height to the full viewport height
    };
  
    return (
      <div className="home-container" style={backgroundImageStyle}>
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
          <h2>Welcome to  Kicks Buzz Sneaker Shop</h2>
          <p>Your one-stop destination for the latest and greatest sneakers!We bring you the latest, most stylish, and exclusive collection of sneakers to elevate your sneaker game.</p>
        </div>
      </div>
    );
  };

export default Home;
